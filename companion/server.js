"use strict";

const http = require("node:http");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { URL } = require("node:url");

const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const CONFIG_PATH = process.env.HARBOR_CONFIG || path.join(__dirname, "companion.config.json");
const PROJECTS_PATH = process.env.HARBOR_PROJECTS || path.join(__dirname, "projects.json");
const MAX_BODY = 64 * 1024;
const processes = new Map();
const logs = new Map();

function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); }
  catch { return fallback; }
}

const config = readJson(CONFIG_PATH, { port: 4777, scanRoots: [], allowedOrigins: [], maxScanDepth: 3 });
const projectConfig = readJson(PROJECTS_PATH, { projects: [] });
const projects = Array.isArray(projectConfig.projects) ? projectConfig.projects : [];

function normalize(value) { return path.resolve(value).replace(/[\\/]+$/, "").toLowerCase(); }
function isInside(child, parent) { const rel = path.relative(path.resolve(parent), path.resolve(child)); return rel === "" || (!rel.startsWith("..") && !path.isAbsolute(rel)); }
function isApprovedFolder(folder) {
  const configured = projects.some(project => normalize(project.folder) === normalize(folder));
  const scanned = (config.scanRoots || []).some(root => isInside(folder, root));
  return configured || scanned;
}
function getProject(id) { return projects.find(project => project.id === id); }
function publicProject(project) {
  const running = processes.has(project.id) && !processes.get(project.id).killed;
  return { id: project.id, name: project.name, folder: project.folder, port: project.port || null, running, pid: running ? processes.get(project.id).pid : null };
}
function pushLog(id, line) {
  const current = logs.get(id) || [];
  const lines = String(line).replace(/\r/g, "").split("\n").filter(Boolean);
  logs.set(id, current.concat(lines).slice(-500));
}

function corsHeaders(req) {
  const origin = req.headers.origin;
  const allowed = !origin || (config.allowedOrigins || []).includes(origin);
  return allowed && origin ? { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Methods": "GET,POST,OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Vary": "Origin" } : {};
}
function sendJson(req, res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...corsHeaders(req) });
  res.end(JSON.stringify(payload));
}
function originAllowed(req) {
  const origin = req.headers.origin;
  return !origin || (config.allowedOrigins || []).includes(origin);
}
function safeId(value) { return typeof value === "string" && /^[a-zA-Z0-9._-]{1,80}$/.test(value); }

async function analyzeDirectory(folder) {
  const pkgPath = path.join(folder, "package.json");
  const pyprojectPath = path.join(folder, "pyproject.toml");
  const gitPath = path.join(folder, ".git");
  let pkg = null;
  try { pkg = JSON.parse(await fsp.readFile(pkgPath, "utf8")); } catch {}
  const hasPython = await fsp.access(pyprojectPath).then(() => true).catch(() => false);
  const hasGit = await fsp.access(gitPath).then(() => true).catch(() => false);
  if (!pkg && !hasPython && !hasGit) return null;
  const deps = { ...(pkg?.dependencies || {}), ...(pkg?.devDependencies || {}) };
  const framework = deps.next ? "Next.js" : deps.vite ? "Vite" : deps.react ? "React" : deps.vue ? "Vue" : deps.svelte ? "Svelte" : hasPython ? "Python" : "Repository";
  return { id: `local-${path.basename(folder).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, name: pkg?.displayName || pkg?.name || path.basename(folder), description: pkg?.description || "", framework, folder, tags: Object.keys(deps).filter(key => ["typescript", "tailwindcss", "electron", "express"].includes(key)).slice(0, 3), metadata: { hasGit, scripts: Object.keys(pkg?.scripts || {}) } };
}

async function scanRoot(root, maxDepth, depth = 0, found = []) {
  if (depth > maxDepth) return found;
  const analyzed = await analyzeDirectory(root).catch(() => null);
  if (analyzed) { found.push(analyzed); return found; }
  let entries = [];
  try { entries = await fsp.readdir(root, { withFileTypes: true }); } catch { return found; }
  for (const entry of entries) {
    if (!entry.isDirectory() || ["node_modules", ".git", ".next", "dist", "build", ".venv", "venv"].includes(entry.name)) continue;
    await scanRoot(path.join(root, entry.name), maxDepth, depth + 1, found);
  }
  return found;
}

async function scanApprovedRoots() {
  const roots = (config.scanRoots || []).map(root => path.resolve(root));
  const all = [];
  for (const root of roots) await scanRoot(root, Number(config.maxScanDepth) || 3, 0, all);
  return all.slice(0, 250);
}

function startProject(project) {
  if (processes.has(project.id)) throw new Error("Project is already running");
  if (!isApprovedFolder(project.folder) || !fs.existsSync(project.folder)) throw new Error("Project folder is not approved or does not exist");
  if (!Array.isArray(project.command) || project.command.length < 1 || project.command.some(part => typeof part !== "string")) throw new Error("Project command must be a predefined array");
  const [executable, ...args] = project.command;
  const child = spawn(executable, args, { cwd: path.resolve(project.folder), shell: false, windowsHide: true, env: { ...process.env, FORCE_COLOR: "1" } });
  processes.set(project.id, child);
  logs.set(project.id, [`[harbor] started ${new Date().toISOString()}`]);
  child.stdout?.on("data", chunk => pushLog(project.id, chunk));
  child.stderr?.on("data", chunk => pushLog(project.id, chunk));
  child.on("error", error => pushLog(project.id, `[error] ${error.message}`));
  child.on("exit", code => { pushLog(project.id, `[harbor] exited with code ${code}`); processes.delete(project.id); });
  return child;
}

function stopProject(project) {
  const child = processes.get(project.id);
  if (!child) throw new Error("Project is not running");
  if (process.platform === "win32") spawn("taskkill.exe", ["/pid", String(child.pid), "/t", "/f"], { windowsHide: true });
  else child.kill("SIGTERM");
  pushLog(project.id, "[harbor] stop requested");
}

function mimeFor(file) {
  return ({ ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml" })[path.extname(file)] || "application/octet-stream";
}
async function serveStatic(req, res, pathname) {
  let target = pathname === "/" ? path.join(DIST, "index.html") : path.join(DIST, decodeURIComponent(pathname));
  if (!isInside(target, DIST)) return sendJson(req, res, 403, { error: "Forbidden" });
  try {
    const stat = await fsp.stat(target); if (stat.isDirectory()) target = path.join(target, "index.html");
    const body = await fsp.readFile(target); res.writeHead(200, { "Content-Type": mimeFor(target), "Cache-Control": "no-cache" }); res.end(body);
  } catch { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); res.end("Not found"); }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
  if (req.method === "OPTIONS") {
    if (!originAllowed(req)) return sendJson(req, res, 403, { error: "Origin not allowed" });
    res.writeHead(204, corsHeaders(req)); return res.end();
  }
  if (url.pathname.startsWith("/api/") && !originAllowed(req)) return sendJson(req, res, 403, { error: "Origin not allowed" });
  if (req.method === "GET" && url.pathname === "/api/health") return sendJson(req, res, 200, { ok: true, version: "1.0.0", projects: projects.map(publicProject), scanRoots: (config.scanRoots || []).length });
  if (req.method === "POST" && url.pathname === "/api/scan") return sendJson(req, res, 200, { projects: await scanApprovedRoots() });
  const match = url.pathname.match(/^\/api\/projects\/([^/]+)\/(start|stop|logs)$/);
  if (match && safeId(match[1])) {
    const project = getProject(match[1]); if (!project) return sendJson(req, res, 404, { error: "Unknown project" });
    try {
      if (req.method === "GET" && match[2] === "logs") return sendJson(req, res, 200, { id: project.id, lines: logs.get(project.id) || [] });
      if (req.method !== "POST") return sendJson(req, res, 405, { error: "Method not allowed" });
      if (match[2] === "start") startProject(project); else if (match[2] === "stop") stopProject(project);
      else return sendJson(req, res, 405, { error: "Method not allowed" });
      return sendJson(req, res, 200, { project: publicProject(project) });
    } catch (error) { return sendJson(req, res, 409, { error: error.message }); }
  }
  if (url.pathname.startsWith("/api/")) return sendJson(req, res, 404, { error: "Not found" });
  return serveStatic(req, res, url.pathname);
});

server.listen(Number(config.port) || 4777, "127.0.0.1", () => {
  console.log(`Project Harbor Companion: http://127.0.0.1:${Number(config.port) || 4777}`);
  console.log(`Configured projects: ${projects.length}; approved scan roots: ${(config.scanRoots || []).length}`);
});

function shutdown() {
  for (const project of projects) if (processes.has(project.id)) { try { stopProject(project); } catch {} }
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 2500).unref();
}
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

