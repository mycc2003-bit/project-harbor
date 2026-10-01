const STORAGE_KEY = "project-harbor.projects.v2";
const PREFS_KEY = "project-harbor.preferences.v1";
const COMPANION_URL = "http://127.0.0.1:4777";

const translations = {
  he: {
    skip: "דלג לתוכן", brandSub: "כל הפרויקטים. מקום אחד.", companion: "מלווה מקומי", theme: "ערכת קידוד",
    addProject: "הוספת פרויקט", workspace: "מרחב העבודה שלך", hello: "בוקר טוב.", overview: "הנה תמונת המצב.",
    projects: "פרויקטים", live: "באוויר", local: "מקומיים", attention: "דורש תשומת לב", all: "הכול",
    recent: "עודכנו לאחרונה", byName: "לפי שם", byStatus: "לפי סטטוס", search: "חיפוש בשם, טכנולוגיה או תגית…",
    nothingFound: "לא נמצאו פרויקטים", nothingFoundSub: "אפשר לשנות את החיפוש או להוסיף פרויקט חדש.", newEntry: "רשומה חדשה",
    localHint: "תיקייה במחשב", githubHint: "ייבוא מאגר", web: "אתר", webHint: "כתובת קיימת", manual: "ידני", manualHint: "מילוי פרטים",
    chooseFolder: "בחירת תיקיית פרויקט", chooseFolderSub: "הדפדפן יקרא רק קובצי הגדרה ו־README כדי לזהות את הפרויקט.", selectFolder: "בחירת תיקייה",
    or: "או", scanWithCompanion: "סריקה דרך המלווה המקומי", githubConnect: "חיבור אישי ל־GitHub", githubPrivacy: "המפתח נשמר רק במכשיר שלך ונשלח ישירות ל־GitHub.",
    rememberDevice: "לזכור במכשיר הזה", loadRepos: "טעינת המאגרים שלי", websiteUrl: "כתובת האתר", projectName: "שם הפרויקט", description: "תיאור",
    addToHarbor: "הוספה ל־Harbor", projectType: "סוג", liveUrl: "כתובת חיה", framework: "טכנולוגיה", tags: "תגיות", localRuntime: "הרצה מקומית",
    updated: "עודכן", justNow: "עכשיו", daysAgo: "לפני {n} ימים", hoursAgo: "לפני {n} שעות", statusLive: "באוויר", statusLocal: "מקומי", statusAttention: "דורש טיפול", statusArchived: "בארכיון",
    viewDetails: "פרטים", github: "GitHub", vercel: "Vercel", website: "אתר חי", folder: "תיקייה", readme: "README", noDescription: "אין עדיין תיאור.",
    source: "מקור", technology: "טכנולוגיה", lastUpdate: "עדכון אחרון", services: "קישורים ושירותים", deleteProject: "מחיקת פרויקט", confirmDelete: "למחוק את הפרויקט?",
    projectAdded: "הפרויקט נוסף", projectDeleted: "הפרויקט נמחק", alreadyExists: "הפרויקט כבר קיים", import: "ייבוא", imported: "יובא", loading: "טוען…",
    folderAnalyzed: "הפרויקט זוהה מהתיקייה", analysisFailed: "לא הצלחתי לזהות פרויקט בתיקייה", githubError: "החיבור ל־GitHub נכשל. כדאי לבדוק את המפתח.",
    companionOnline: "המלווה המקומי מחובר", companionOffline: "המלווה המקומי לא פועל", companionOfflineHelp: "יש להפעיל במחשב את קובץ start-companion.cmd. הקטלוג בענן ממשיך לעבוד כרגיל.",
    running: "רץ", stopped: "עצור", start: "הפעלה", stop: "עצירה", logs: "לוגים", noProjectsConfigured: "לא הוגדרו עדיין פרויקטים להפעלה במלווה.",
    scanning: "סורק תיקיות מאושרות…", scanFailed: "הסריקה המקומית נכשלה", codingOn: "ערכת הקידוד הופעלה", codingOff: "ערכת האור הופעלה", addAnother: "הוספת פרויקט חדש",
    localCatalog: "קטלוג מקומי", open: "פתיחה", tokenRequired: "נדרש מפתח GitHub", invalidUrl: "יש להזין כתובת תקינה",
    ready: "מוכן", statusReady: "מוכן", editProject: "עריכת פרויקט", saveChanges: "שמירת שינויים", cancel: "ביטול", projectSaved: "השינויים נשמרו",
    purpose: "מה הפרויקט עושה", capabilities: "יכולות עיקריות", projectHealth: "מצב הפרויקט", technicalDetails: "פרטים טכניים", nextStep: "השלב הבא",
    verified: "נבדק", connectedSources: "מקורות מחוברים", scannedNow: "נסרקו מחדש GitHub, Vercel והתיקיות המקומיות", version: "גרסה", branch: "ענף", visibility: "חשיפה", deployment: "פריסה", region: "אזור", path: "נתיב מקומי", notes: "הערות"
  },
  en: {
    skip: "Skip to content", brandSub: "Every project. One place.", companion: "Local companion", theme: "Coding theme",
    addProject: "Add project", workspace: "Your workspace", hello: "Good morning.", overview: "Here is the current picture.",
    projects: "Projects", live: "Live", local: "Local", attention: "Needs attention", all: "All",
    recent: "Recently updated", byName: "By name", byStatus: "By status", search: "Search by name, technology or tag…",
    nothingFound: "No projects found", nothingFoundSub: "Try another search or add a new project.", newEntry: "New entry",
    localHint: "Folder on this PC", githubHint: "Import repository", web: "Web", webHint: "Existing URL", manual: "Manual", manualHint: "Enter details",
    chooseFolder: "Choose a project folder", chooseFolderSub: "The browser reads only common config files and README content to identify the project.", selectFolder: "Choose folder",
    or: "or", scanWithCompanion: "Scan with local companion", githubConnect: "Personal GitHub connection", githubPrivacy: "Your token stays on this device and is sent directly to GitHub.",
    rememberDevice: "Remember on this device", loadRepos: "Load my repositories", websiteUrl: "Website URL", projectName: "Project name", description: "Description",
    addToHarbor: "Add to Harbor", projectType: "Type", liveUrl: "Live URL", framework: "Technology", tags: "Tags", localRuntime: "Local runtime",
    updated: "Updated", justNow: "just now", daysAgo: "{n} days ago", hoursAgo: "{n} hours ago", statusLive: "Live", statusLocal: "Local", statusAttention: "Needs attention", statusArchived: "Archived",
    viewDetails: "Details", github: "GitHub", vercel: "Vercel", website: "Live site", folder: "Folder", readme: "README", noDescription: "No description yet.",
    source: "Source", technology: "Technology", lastUpdate: "Last update", services: "Links and services", deleteProject: "Delete project", confirmDelete: "Delete this project?",
    projectAdded: "Project added", projectDeleted: "Project deleted", alreadyExists: "Project already exists", import: "Import", imported: "Imported", loading: "Loading…",
    folderAnalyzed: "Project detected from folder", analysisFailed: "Could not identify a project in that folder", githubError: "GitHub connection failed. Check the token and try again.",
    companionOnline: "Local companion is connected", companionOffline: "Local companion is not running", companionOfflineHelp: "Run start-companion.cmd on this computer. The cloud catalog still works normally.",
    running: "Running", stopped: "Stopped", start: "Start", stop: "Stop", logs: "Logs", noProjectsConfigured: "No runnable projects are configured in the companion yet.",
    scanning: "Scanning approved folders…", scanFailed: "Local scan failed", codingOn: "Coding theme enabled", codingOff: "Light theme enabled", addAnother: "Add another project",
    localCatalog: "Local catalog", open: "Open", tokenRequired: "A GitHub token is required", invalidUrl: "Enter a valid URL",
    ready: "Ready", statusReady: "Ready", editProject: "Edit project", saveChanges: "Save changes", cancel: "Cancel", projectSaved: "Changes saved",
    purpose: "What this project does", capabilities: "Core capabilities", projectHealth: "Project health", technicalDetails: "Technical details", nextStep: "Next step",
    verified: "Verified", connectedSources: "Connected sources", scannedNow: "GitHub, Vercel, and local folders were rescanned", version: "Version", branch: "Branch", visibility: "Visibility", deployment: "Deployment", region: "Region", path: "Local path", notes: "Notes"
  }
};

const starterProjects = [
  { id: "project-harbor", name: "Project Harbor", type: "web", status: "live", source: "GitHub · OpenAI Sites", framework: "Vanilla JS · Windows Companion", version: "1.0.0", branch: "main", visibility: "Public", deployment: "Production ready", health: "verified", updatedAt: "2026-10-01T08:00:00.000Z", accent: "#285bea",
    description: { he: "מרכז ניהול דו־לשוני שמרכז פרויקטים מקומיים ובענן, קישורים, מצב פריסה והרצה בטוחה מהמחשב.", en: "A bilingual control hub for local and cloud projects, links, deployment status, and safe local execution." },
    highlights: { he: ["קטלוג, חיפוש וסינון", "ייבוא GitHub ופרויקטי Web", "מלווה Windows להפעלה, עצירה ולוגים", "עברית/אנגלית וערכת קידוד"], en: ["Catalog, search, and filters", "GitHub and web imports", "Windows companion for run, stop, and logs", "Hebrew/English and coding theme"] },
    nextStep: { he: "הקטלוג פעיל ומעודכן. אפשר לערוך כל רשומה מתוך חלון הפרטים.", en: "The catalog is live and current. Every record can be edited from its detail view." },
    tags: ["project hub", "bilingual", "local companion"], links: { github: "https://github.com/mycc2003-bit/project-harbor", readme: "https://github.com/mycc2003-bit/project-harbor#readme", liveUrl: "https://project-harbor.mycc2003.chatgpt.site" } },
  { id: "nexos", name: "NEXOS", type: "local", status: "local", source: "Desktop", framework: "Tauri 2 · React 19 · Rust", version: "0.1.0", visibility: "Local", health: "configured", updatedAt: "2026-09-30T18:00:00.000Z", accent: "#285bea", localPath: "C:\\Users\\mycc2\\Desktop\\פרויקטים\\NEXOS",
    description: { he: "שכבת שליטה חכמה ומקומית ל־Windows שמודדת, מייעלת ומבצעת שינויים במחשב עם הרשאות, תיעוד ואפשרות ביטול.", en: "A local-first Windows control layer that measures, optimizes, and changes PC settings with permissions, audit logs, and undo." },
    highlights: { he: ["Autopilot למדידת FPS ושיפור ביצועים", "שינויים הפיכים עם Undo", "AI מקומי או ספקי ענן אופציונליים", "SQLite, הצפנת DPAPI ומתקין Windows"], en: ["FPS-measuring performance Autopilot", "Reversible changes with undo", "Optional local or cloud AI", "SQLite, DPAPI encryption, and Windows installer"] },
    nextStep: { he: "מוגדר להרצה מקומית עם npm run dev; להרצת אפליקציית Tauri המלאה יש להשתמש ב־npm run app:dev.", en: "Configured for local web development with npm run dev; use npm run app:dev for the full Tauri application." },
    tags: ["windows", "automation", "local AI", "performance"], links: {} },
  { id: "email-ai-dashboard", name: "Email AI Dashboard", type: "local", status: "local", source: "Desktop", framework: "Next.js 14 · TypeScript · Claude", version: "0.1.0", visibility: "Local", health: "configured", updatedAt: "2026-09-30T18:00:00.000Z", accent: "#18a47a", localPath: "C:\\Users\\mycc2\\Desktop\\פרויקטים\\Email AI Dashboard\\email-ai-dashboard",
    description: { he: "דשבורד אישי ל־Gmail ול־Google Calendar שמסכם דואר ויומן, מציע פעולות עם Claude ומבצע אותן רק לאחר אישור מפורש.", en: "A personal Gmail and Google Calendar dashboard that summarizes mail and events, proposes Claude-powered actions, and executes only after approval." },
    highlights: { he: ["תדריך תיבה ויומן לשבעה ימים", "Inbox Zero עם טיוטות לאישור", "צ'אט לחיפוש והכנת פעולות", "Google OAuth וגישה לחשבון מורשה יחיד"], en: ["Inbox and seven-day calendar brief", "Inbox Zero approval queue", "Chat for search and action drafting", "Google OAuth limited to one allowed account"] },
    nextStep: { he: "דורש ערכי Google OAuth, NextAuth ו־Anthropic בקובץ הסביבה לפני התחברות מלאה.", en: "Requires Google OAuth, NextAuth, and Anthropic environment values before full sign-in works." },
    tags: ["gmail", "calendar", "claude", "approval workflow"], links: {} },
  { id: "free-claude-code", name: "Free Claude Code", type: "local", status: "local", source: "Desktop", framework: "Python 3.14 · FastAPI · uv", version: "Dynamic", visibility: "Local · AGPL-3.0", health: "configured", updatedAt: "2026-09-30T18:00:00.000Z", accent: "#e0782f", localPath: "C:\\Users\\mycc2\\Desktop\\פרויקטים\\Free Claude Code\\free-claude-code-main",
    description: { he: "שרת Proxy מקומי שמחבר כלי קידוד למבחר ספקי AI תואמי OpenAI, עם החלפת מודלים, נפילה לספק חלופי וממשק ניהול.", en: "A local proxy that connects coding agents to OpenAI-compatible providers with model switching, failover, and an admin interface." },
    highlights: { he: ["56 ספקים וקטלוג מודלים אחד", "חיבור ל־11 סוכני קידוד", "Failover אוטומטי בין מודלים", "ממשק Web, Desktop, Discord ו־Telegram"], en: ["56 providers in one model catalog", "11 supported coding agents", "Automatic model failover", "Web, desktop, Discord, and Telegram access"] },
    nextStep: { he: "מוגדר להרצה דרך uv run fcc-server; יש לבחור ספק ולהגדיר את המפתח שלו בממשק הניהול.", en: "Configured to run with uv run fcc-server; select a provider and configure its key in the admin UI." },
    tags: ["AI proxy", "coding agents", "FastAPI", "multi-provider"], links: {} },
  { id: "my-jarvis", name: "JARVIS Runtime V3", type: "web", status: "live", source: "GitHub · Vercel", framework: "Next.js 16 · React 19 · PostgreSQL", version: "3.0.0", branch: "main", visibility: "Private", deployment: "READY · Production", region: "iad1", health: "verified", updatedAt: "2026-09-30T17:00:00.000Z", accent: "#8f5ae8",
    description: { he: "עוזר AI אישי מתמשך עם זיכרון, משימות שניתנות להמשך, ניתוב מודלים, אישורים וכלי ביצוע מבודדים תחת ממשק אחד.", en: "A persistent personal AI assistant with memory, resumable missions, model routing, approvals, and isolated execution behind one interface." },
    highlights: { he: ["Letta לזיכרון מתמשך", "LangGraph למשימות ו־checkpoints", "LiteLLM לניתוב ונפילה בין מודלים", "Agent Zero לביצוע מבודד עם אישור"], en: ["Letta durable memory", "LangGraph missions and checkpoints", "LiteLLM routing and fallback", "Approval-gated Agent Zero execution"] },
    nextStep: { he: "הפריסה הראשית תקינה. הענף main מחובר ל־Vercel ויש גם פריסות Preview לפיתוח Voice V2.", en: "Production is healthy. Main is connected to Vercel, with preview deployments for Voice V2 work." },
    tags: ["personal AI", "memory", "voice", "agent runtime"], links: { github: "https://github.com/mycc2003-bit/my-jarvis", readme: "https://github.com/mycc2003-bit/my-jarvis#readme", vercel: "https://vercel.com/mycc2003-4554/my-jarvis", liveUrl: "https://my-jarvis-one.vercel.app" } },
  { id: "pc", name: "PC · daedalOS", type: "web", status: "live", source: "GitHub · Vercel", framework: "Next.js 15 · React 19 · BrowserFS", version: "2.0.0", branch: "main", visibility: "Private", deployment: "READY · Production", region: "iad1", health: "verified", updatedAt: "2026-09-30T17:00:00.000Z", accent: "#111827",
    description: { he: "סביבת שולחן עבודה מלאה בתוך הדפדפן עם מערכת קבצים, חלונות ואפליקציות, אמולטורים, טרמינל ודפדפן Proxy משופר.", en: "A full desktop environment in the browser with a file system, windows and apps, emulators, terminal, and an improved proxy browser." },
    highlights: { he: ["מערכת קבצים שנשמרת ב־IndexedDB", "חלונות, Start Menu ושורת משימות", "אפליקציות מדיה, קוד ואמולטורים", "Proxy לדפדוף מתוך סביבת העבודה"], en: ["IndexedDB-backed file system", "Windows, Start Menu, and taskbar", "Media, coding, and emulator apps", "Proxy browsing inside the desktop"] },
    nextStep: { he: "הפריסה האחרונה תקינה; תוקנו התקנות Vercel וקישורים שנפתחו מחוץ לחלון הדפדפן הפנימי.", en: "The latest deployment is healthy; Vercel installation and links escaping the internal browser were fixed." },
    tags: ["browser OS", "desktop", "emulators", "proxy"], links: { github: "https://github.com/mycc2003-bit/PC", readme: "https://github.com/mycc2003-bit/PC#readme", vercel: "https://vercel.com/mycc2003-4554/pc", liveUrl: "https://pc-three-eta.vercel.app" } },
  { id: "my-project", name: "Up-Keep · Keeper", type: "service", status: "ready", source: "GitHub", framework: "Python stdlib · SQLite · Vanilla JS", branch: "main", visibility: "Public", health: "ready", updatedAt: "2026-09-30T16:00:00.000Z", accent: "#8f5ae8",
    description: { he: "מערכת ניהול בניינים לבעלים יחיד. Keeper מרכז בניינים, קריאות שירות, ספקים, חשבוניות, אירועים והודעות ומוסיף עוזר AI עם שער אישור.", en: "A single-owner building management system. Keeper manages buildings, tickets, vendors, invoices, events, and messages with an approval-gated AI assistant." },
    highlights: { he: ["שרת Python ללא תלויות חיצוניות", "SQLite עם עשר טבלאות ויומן פעילות", "מסגרת יכולות מודולרית", "פעולות חיצוניות עוברות propose → confirm → execute"], en: ["Dependency-free Python server", "SQLite with ten tables and activity log", "Modular capability framework", "External actions use propose → confirm → execute"] },
    nextStep: { he: "המאגר תקין ומוכן להרצה מקומית ב־python server.py. אין כרגע פריסת Web ציבורית, ולכן הוא מסומן מוכן ולא תקול.", en: "The repository is healthy and ready to run locally with python server.py. It has no public web deployment, so it is marked ready rather than broken." },
    tags: ["property management", "SQLite", "AI assistant", "approval gate"], links: { github: "https://github.com/mycc2003-bit/my-project", readme: "https://github.com/mycc2003-bit/my-project#readme" } },
  { id: "nextjs-boilerplate", name: "Next.js Boilerplate", type: "web", status: "ready", source: "GitHub", framework: "Next.js 16 · React 19 · Tailwind 4", version: "0.1.0", branch: "main", visibility: "Private", health: "ready", updatedAt: "2026-09-30T16:00:00.000Z", accent: "#285bea",
    description: { he: "תבנית התחלה נקייה ליישום Next.js מודרני. כרגע זה בסיס לפיתוח ולא מוצר נפרד עם פונקציונליות ייעודית.", en: "A clean modern Next.js starter. It is currently a development foundation rather than a separate product with custom functionality." },
    highlights: { he: ["Next.js 16 ו־App Router", "React 19 ו־TypeScript", "Tailwind CSS 4", "פקודות פיתוח, build ו־lint מוכנות"], en: ["Next.js 16 and App Router", "React 19 and TypeScript", "Tailwind CSS 4", "Ready dev, build, and lint scripts"] },
    nextStep: { he: "המאגר תקין. לפני פריסה כדאי להגדיר מה המוצר שייבנה עליו ולהחליף את תוכן ברירת המחדל.", en: "The repository is healthy. Define the product and replace the default starter content before deploying it." },
    tags: ["starter", "Next.js", "TypeScript", "Tailwind"], links: { github: "https://github.com/mycc2003-bit/nextjs-boilerplate", readme: "https://github.com/mycc2003-bit/nextjs-boilerplate#readme" } },
  { id: "nest-home", name: "Nest Home", type: "web", status: "live", source: "Vercel", framework: "Vite", deployment: "READY · Production", region: "iad1", health: "verified", updatedAt: "2026-09-30T15:00:00.000Z", accent: "#18a47a",
    description: { he: "פרויקט Web שנבנה ב־Vite ומפורסם ב־Vercel. הפריסה נוצרה דרך CLI ונבדקה כ־READY עם כתובת קבועה.", en: "A Vite web project published on Vercel. It was deployed through the CLI and verified READY with a stable alias." },
    highlights: { he: ["פריסת Production פעילה", "Framework שזוהה: Vite", "11 פריסות מתועדות", "כתובת קבועה ב־Vercel"], en: ["Active production deployment", "Detected framework: Vite", "11 recorded deployments", "Stable Vercel alias"] },
    nextStep: { he: "הפריסה תקינה. לא נמצא מאגר GitHub מחובר, ולכן פרטי המוצר מוגבלים למידע המאומת מ־Vercel.", en: "The deployment is healthy. No linked GitHub repository was found, so product details are limited to verified Vercel metadata." },
    tags: ["Vite", "Vercel", "production"], links: { vercel: "https://vercel.com/mycc2003-4554/nest-home", liveUrl: "https://nest-home-lilac.vercel.app" } },
  { id: "nexus-ai-command-center", name: "Nexus AI Command Center", type: "web", status: "live", source: "Vercel", framework: "Next.js", deployment: "READY · Production", region: "iad1", health: "verified", updatedAt: "2026-09-30T15:00:00.000Z", accent: "#e0782f",
    description: { he: "מרכז פיקוד מבוסס Next.js שמפורסם ב־Vercel. הפריסה הפעילה נבדקה כ־READY ומחליפה פריסה ראשונית שנכשלה.", en: "A Next.js command center published on Vercel. The active deployment is verified READY and supersedes an earlier failed first deployment." },
    highlights: { he: ["פריסת Production פעילה", "Framework שזוהה: Next.js", "ארבע פריסות מתועדות", "הפריסה האחרונה תקינה"], en: ["Active production deployment", "Detected framework: Next.js", "Four recorded deployments", "Latest deployment is healthy"] },
    nextStep: { he: "התקלה בפריסה הראשונה כבר נפתרה בפריסה עדכנית. לא נמצא מאגר GitHub מחובר לסריקה עמוקה יותר.", en: "The first deployment failure has already been resolved by a healthy current deployment. No linked GitHub repository was found for deeper scanning." },
    tags: ["Next.js", "Vercel", "command center"], links: { vercel: "https://vercel.com/mycc2003-4554/nexus-ai-command-center", liveUrl: "https://nexus-ai-command-center-mocha.vercel.app" } }
];

const state = {
  projects: loadProjects(),
  lang: loadPrefs().lang || (navigator.language.startsWith("he") ? "he" : "en"),
  theme: loadPrefs().theme || "light",
  filter: "all",
  query: "",
  sort: "updated",
  companion: { online: false, projects: [] }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const t = (key, vars = {}) => Object.entries(vars).reduce((value, [k, v]) => value.replace(`{${k}}`, v), translations[state.lang][key] || key);
const esc = value => String(value ?? "").replace(/[&<>'"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]));
const safeUrl = value => { try { const url = new URL(value); return ["http:", "https:"].includes(url.protocol) ? url.href : ""; } catch { return ""; } };

function loadProjects() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) return starterProjects;
    const merged = new Map(starterProjects.map(project => [project.id, project]));
    saved.forEach(project => merged.set(project.id, { ...merged.get(project.id), ...project, links: { ...(merged.get(project.id)?.links || {}), ...(project.links || {}) } }));
    return [...merged.values()];
  }
  catch { return starterProjects; }
}
function loadPrefs() { try { return JSON.parse(localStorage.getItem(PREFS_KEY)) || {}; } catch { return {}; } }
function persist() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.projects)); localStorage.setItem(PREFS_KEY, JSON.stringify({ lang: state.lang, theme: state.theme })); }
function idFrom(value) { return String(value || "project").toLowerCase().normalize("NFKD").replace(/[^a-z0-9\u0590-\u05ff]+/g, "-").replace(/^-|-$/g, "").slice(0, 64) || crypto.randomUUID(); }
function projectText(project, key) { const value = project[key]; return typeof value === "object" ? value[state.lang] || value.en || value.he || "" : value || ""; }
function initials(name) { return String(name).split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase(); }
function relativeTime(date) {
  const diff = Math.max(0, Date.now() - new Date(date).getTime());
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return t("justNow");
  if (hours < 24) return t("hoursAgo", { n: hours });
  return t("daysAgo", { n: Math.floor(hours / 24) });
}
function statusLabel(status) { return t({ live: "statusLive", local: "statusLocal", ready: "statusReady", attention: "statusAttention", archived: "statusArchived" }[status] || "statusLocal"); }

function applyPreferences() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "he" ? "rtl" : "ltr";
  document.documentElement.dataset.theme = state.theme;
  $("#languageButton").textContent = state.lang === "he" ? "EN" : "עב";
  $("#themeIcon").textContent = state.theme === "coding" ? "☀" : "⌘";
  $$('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  $$('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
}

function visibleProjects() {
  const q = state.query.trim().toLowerCase();
  const filtered = state.projects.filter(project => {
    const matchesFilter = state.filter === "all" || project.status === state.filter || (state.filter === "local" && project.type === "local");
    const haystack = [project.name, projectText(project, "description"), project.framework, ...(project.tags || [])].join(" ").toLowerCase();
    return matchesFilter && (!q || haystack.includes(q));
  });
  return filtered.sort((a, b) => state.sort === "name" ? a.name.localeCompare(b.name) : state.sort === "status" ? a.status.localeCompare(b.status) : new Date(b.updatedAt) - new Date(a.updatedAt));
}

function linkIcon(type) { return ({ github: "◈", vercel: "▲", liveUrl: "↗", folder: "⌂", readme: "≡" })[type] || "↗"; }
function render() {
  const projects = visibleProjects();
  const catalog = $("#catalog");
  catalog.innerHTML = projects.map((project, index) => {
    const links = Object.entries(project.links || {}).filter(([, value]) => value).slice(0, 3);
    return `<article class="project-card" style="--accent:${esc(project.accent || "#285bea")}" data-index="${String(index + 1).padStart(2, "0")}">
      <div class="card-top"><span class="project-icon">${esc(initials(project.name))}</span><span class="status-badge ${esc(project.status)}"><span class="mini-dot ${project.status === "live" || project.status === "ready" ? "green" : project.status === "attention" ? "amber" : "blue"}"></span>${esc(statusLabel(project.status))}</span></div>
      <h2>${esc(project.name)}</h2><p class="project-description">${esc(projectText(project, "description") || t("noDescription"))}</p>
      <div class="source-line"><span>${esc(project.source || "Manual")}</span>${project.health === "verified" ? `<span class="verified-mark">✓ ${esc(t("verified"))}</span>` : ""}</div>
      <div class="tag-row">${[project.framework, ...(project.tags || [])].filter(Boolean).slice(0, 4).map(tag => `<span class="tag">${esc(tag)}</span>`).join("")}</div>
      <div class="card-footer"><span class="updated">${esc(t("updated"))} ${esc(relativeTime(project.updatedAt))}</span><div class="quick-links">
        ${links.map(([type, url]) => `<a class="quick-link" href="${esc(safeUrl(url))}" target="_blank" rel="noopener" aria-label="${esc(type)}">${linkIcon(type)}</a>`).join("")}
        <button class="more-button" type="button" data-detail="${esc(project.id)}" aria-label="${esc(t("viewDetails"))}">•••</button>
      </div></div></article>`;
  }).join("") + (state.filter === "all" && !state.query ? `<button class="project-card add-card" type="button" data-open-add><div><span class="plus">＋</span><h2>${esc(t("addAnother"))}</h2><p>Local · GitHub · Web · Manual</p></div></button>` : "");
  $("#emptyState").hidden = projects.length > 0;
  $("#catalog").hidden = projects.length === 0;
  $("#totalCount").textContent = state.projects.length;
  $("#liveCount").textContent = state.projects.filter(p => p.status === "live").length;
  $("#localCount").textContent = state.projects.filter(p => p.type === "local").length;
  if ($("#readyCount")) $("#readyCount").textContent = state.projects.filter(p => p.status === "ready").length;
}

function openDetail(id) {
  const project = state.projects.find(item => item.id === id);
  if (!project) return;
  const links = Object.entries(project.links || {}).filter(([, value]) => value);
  const highlights = project.highlights?.[state.lang] || project.highlights?.en || project.highlights?.he || [];
  const facts = [
    [t("technology"), project.framework], [t("version"), project.version], [t("branch"), project.branch],
    [t("visibility"), project.visibility], [t("deployment"), project.deployment], [t("region"), project.region]
  ].filter(([, value]) => value);
  $("#detailContent").innerHTML = `<div class="modal-header"><div><p class="eyebrow">${esc(project.source || "manual")}</p><h2 id="detailTitle">${esc(project.name)}</h2></div><button class="close-button" type="button" data-close aria-label="Close">×</button></div>
    <div class="detail-body"><div class="detail-hero"><span class="project-icon" style="--accent:${esc(project.accent || "#285bea")}">${esc(initials(project.name))}</span><div><div class="detail-status-row"><span class="status-badge ${esc(project.status)}">${esc(statusLabel(project.status))}</span>${project.health === "verified" ? `<span class="verified-mark">✓ ${esc(t("verified"))}</span>` : ""}</div><p>${esc(projectText(project, "description") || t("noDescription"))}</p></div></div>
    ${highlights.length ? `<section class="detail-section"><h3>${esc(t("capabilities"))}</h3><ul class="feature-list">${highlights.map(item => `<li>${esc(item)}</li>`).join("")}</ul></section>` : ""}
    <section class="detail-section"><h3>${esc(t("technicalDetails"))}</h3><div class="detail-grid">${facts.map(([label, value]) => `<div class="detail-box"><small>${esc(label)}</small><b>${esc(value)}</b></div>`).join("")}</div></section>
    ${project.localPath ? `<section class="detail-section"><h3>${esc(t("path"))}</h3><code class="path-box">${esc(project.localPath)}</code></section>` : ""}
    ${projectText(project, "nextStep") ? `<section class="next-step"><span>✓</span><div><b>${esc(t("nextStep"))}</b><p>${esc(projectText(project, "nextStep"))}</p></div></section>` : ""}
    ${project.notes ? `<section class="detail-section"><h3>${esc(t("notes"))}</h3><p class="detail-note">${esc(project.notes)}</p></section>` : ""}
    <div class="detail-actions"><button class="primary-button" type="button" data-edit="${esc(project.id)}">✎ ${esc(t("editProject"))}</button>${links.map(([type, url]) => `<a class="secondary-button" href="${esc(safeUrl(url))}" target="_blank" rel="noopener">${linkIcon(type)} ${esc(t(type === "liveUrl" ? "website" : type))}</a>`).join("")}<button class="secondary-button danger-button" type="button" data-delete="${esc(project.id)}">${esc(t("deleteProject"))}</button></div></div>`;
  $("#detailDialog").showModal();
}

function openEdit(id) {
  const project = state.projects.find(item => item.id === id);
  if (!project) return;
  const form = $("#editForm");
  form.elements.id.value = project.id;
  form.elements.name.value = project.name || "";
  form.elements.description.value = projectText(project, "description");
  form.elements.status.value = project.status || "ready";
  form.elements.type.value = project.type || "web";
  form.elements.framework.value = project.framework || "";
  form.elements.tags.value = (project.tags || []).join(", ");
  form.elements.github.value = project.links?.github || "";
  form.elements.vercel.value = project.links?.vercel || "";
  form.elements.liveUrl.value = project.links?.liveUrl || "";
  form.elements.highlights.value = (project.highlights?.[state.lang] || []).join("\n");
  form.elements.nextStep.value = projectText(project, "nextStep");
  form.elements.notes.value = project.notes || "";
  $("#detailDialog").close();
  $("#editDialog").showModal();
}

function saveProjectEdits(form) {
  const data = Object.fromEntries(new FormData(form));
  const index = state.projects.findIndex(project => project.id === data.id);
  if (index < 0) return;
  const current = state.projects[index];
  const description = typeof current.description === "object" ? { ...current.description, [state.lang]: data.description.trim() } : { [state.lang]: data.description.trim() };
  const nextStep = typeof current.nextStep === "object" ? { ...current.nextStep, [state.lang]: data.nextStep.trim() } : { [state.lang]: data.nextStep.trim() };
  const highlights = { ...(current.highlights || {}), [state.lang]: data.highlights.split("\n").map(item => item.trim()).filter(Boolean) };
  state.projects[index] = {
    ...current, name: data.name.trim(), description, status: data.status, type: data.type,
    framework: data.framework.trim(), tags: data.tags.split(",").map(item => item.trim()).filter(Boolean),
    highlights, nextStep, notes: data.notes.trim(), updatedAt: new Date().toISOString(),
    links: { ...current.links, github: safeUrl(data.github), vercel: safeUrl(data.vercel), liveUrl: safeUrl(data.liveUrl) }
  };
  persist(); render(); $("#editDialog").close(); toast(t("projectSaved")); openDetail(data.id);
}

function addProject(project) {
  const normalized = { ...project, id: project.id || idFrom(project.name), updatedAt: project.updatedAt || new Date().toISOString(), tags: project.tags || [], links: project.links || {}, accent: project.accent || ["#285bea", "#8f5ae8", "#18a47a", "#e0782f"][state.projects.length % 4] };
  if (state.projects.some(item => item.id === normalized.id || ((item.links || {}).github && item.links.github === normalized.links.github))) { toast(t("alreadyExists")); return false; }
  state.projects.unshift(normalized); persist(); render(); toast(t("projectAdded")); return true;
}

function deleteProject(id) {
  if (!confirm(t("confirmDelete"))) return;
  state.projects = state.projects.filter(project => project.id !== id); persist(); render(); $("#detailDialog").close(); toast(t("projectDeleted"));
}

function toast(message) {
  const el = $("#toast"); el.textContent = message; el.classList.add("show"); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 2600);
}

async function analyzeFolder(files) {
  const list = [...files];
  const find = name => list.find(file => file.webkitRelativePath.split("/").length <= 3 && file.name.toLowerCase() === name.toLowerCase());
  const pkgFile = find("package.json");
  const pyproject = find("pyproject.toml");
  const requirements = find("requirements.txt");
  const readme = list.find(file => /^readme(\..+)?$/i.test(file.name));
  const rootName = list[0]?.webkitRelativePath.split("/")[0];
  if (!rootName) throw new Error("empty");
  let pkg = {};
  if (pkgFile) { try { pkg = JSON.parse(await pkgFile.text()); } catch {} }
  const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
  const framework = deps.next ? "Next.js" : deps.vite ? "Vite" : deps.react ? "React" : deps.vue ? "Vue" : deps.svelte ? "Svelte" : pyproject ? "Python" : requirements ? "Python" : "Local project";
  const readmeText = readme ? await readme.text() : "";
  const description = pkg.description || readmeText.replace(/^#.*$/m, "").trim().split(/\n\s*\n/)[0]?.replace(/[#*_`]/g, "").slice(0, 180) || "";
  return { id: idFrom(rootName), name: pkg.displayName || pkg.name || rootName, description, type: "local", status: "local", framework, tags: Object.keys(deps).filter(key => ["typescript", "tailwindcss", "express", "electron"].includes(key)).slice(0, 3), source: "folder", links: {}, metadata: { scripts: pkg.scripts || {}, folderName: rootName } };
}

function renderImportItem(project, container, source) {
  const id = `import-${source}-${CSS.escape(project.id)}`;
  const wrapper = document.createElement("div"); wrapper.className = "import-item"; wrapper.id = id;
  wrapper.innerHTML = `<div><b>${esc(project.name)}</b><small>${esc(project.framework || project.description || source)}</small></div><button class="secondary-button" type="button">${esc(t("import"))}</button>`;
  wrapper.querySelector("button").addEventListener("click", event => { if (addProject(project)) { event.currentTarget.textContent = t("imported"); event.currentTarget.disabled = true; } });
  container.append(wrapper);
}

async function loadGithubRepos() {
  const token = $("#githubToken").value.trim();
  if (!token) return toast(t("tokenRequired"));
  const button = $("#loadRepos"); button.disabled = true; button.textContent = t("loading");
  try {
    const response = await fetch("https://api.github.com/user/repos?sort=updated&per_page=100&affiliation=owner,collaborator,organization_member", { headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${token}`, "X-GitHub-Api-Version": "2022-11-28" } });
    if (!response.ok) throw new Error(response.status);
    const repos = await response.json();
    if ($("#rememberToken").checked) localStorage.setItem("project-harbor.github-token", token); else sessionStorage.setItem("project-harbor.github-token", token);
    const container = $("#githubResults"); container.innerHTML = "";
    repos.forEach(repo => renderImportItem({ id: `gh-${repo.id}`, name: repo.name, description: repo.description || "", type: "web", status: repo.archived ? "archived" : repo.homepage ? "live" : "attention", framework: repo.language || "Repository", tags: (repo.topics || []).slice(0, 4), source: "github", updatedAt: repo.updated_at, links: { github: repo.html_url, liveUrl: repo.homepage || "" }, metadata: { branch: repo.default_branch, private: repo.private } }, container, "github"));
  } catch { toast(t("githubError")); }
  finally { button.disabled = false; button.textContent = t("loadRepos"); }
}

async function companionFetch(path, options = {}) {
  const response = await fetch(`${COMPANION_URL}${path}`, { ...options, headers: { "Content-Type": "application/json", ...(options.headers || {}) } });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}
async function checkCompanion() {
  try { const data = await companionFetch("/api/health"); state.companion.online = true; state.companion.projects = data.projects || []; $("#companionDot").classList.add("online"); }
  catch { state.companion.online = false; state.companion.projects = []; $("#companionDot").classList.remove("online"); }
}
async function openCompanion() { await checkCompanion(); renderCompanion(); $("#companionDialog").showModal(); }
function renderCompanion() {
  $("#companionStatus").innerHTML = state.companion.online ? `<b>${esc(t("companionOnline"))}</b>` : `<b>${esc(t("companionOffline"))}</b><br><small>${esc(t("companionOfflineHelp"))}</small>`;
  const list = $("#companionProjects");
  list.innerHTML = state.companion.projects.length ? state.companion.projects.map(project => `<div class="runtime-row"><div><b>${esc(project.name)}</b><br><small>${esc(project.running ? t("running") : t("stopped"))}${project.port ? ` · :${esc(project.port)}` : ""}</small></div><div class="runtime-actions"><button class="secondary-button" data-runtime="${project.running ? "stop" : "start"}" data-id="${esc(project.id)}">${esc(project.running ? t("stop") : t("start"))}</button><button class="secondary-button" data-runtime="logs" data-id="${esc(project.id)}">${esc(t("logs"))}</button></div></div>`).join("") : `<p>${esc(t("noProjectsConfigured"))}</p>`;
}
async function runtimeAction(action, id) {
  try {
    if (action === "logs") { const data = await companionFetch(`/api/projects/${encodeURIComponent(id)}/logs`); const viewer = $("#logViewer"); viewer.textContent = data.lines.join("\n") || "(no output)"; viewer.hidden = false; return; }
    await companionFetch(`/api/projects/${encodeURIComponent(id)}/${action}`, { method: "POST" });
    const health = await companionFetch("/api/health"); state.companion.projects = health.projects || []; renderCompanion();
  } catch (error) { toast(error.message.slice(0, 120)); }
}

async function scanCompanion() {
  const button = $("#scanCompanion"); button.disabled = true; button.textContent = t("scanning");
  try { const data = await companionFetch("/api/scan", { method: "POST" }); const container = $("#localResults"); container.innerHTML = ""; data.projects.forEach(project => renderImportItem({ ...project, status: "local", type: "local", source: "companion", links: {} }, container, "local")); }
  catch { toast(t("scanFailed")); }
  finally { button.disabled = false; button.textContent = t("scanWithCompanion"); }
}

function setupWebMcp() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const controller = new AbortController();
  Promise.resolve(context.registerTool({ name: "list_projects", title: "List projects", description: "List the visible Project Harbor catalog.", inputSchema: { type: "object", properties: {}, additionalProperties: false }, annotations: { readOnlyHint: true, untrustedContentHint: true }, execute: () => ({ projects: state.projects.map(({ id, name, status, type, framework, links }) => ({ id, name, status, type, framework, links })) }) }, { signal: controller.signal })).catch(() => {});
  Promise.resolve(context.registerTool({ name: "add_project", title: "Add project", description: "Add a manual project to Project Harbor.", inputSchema: { type: "object", properties: { name: { type: "string" }, description: { type: "string" }, liveUrl: { type: "string" } }, required: ["name"], additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: false }, execute: input => { if (!input?.name) throw new Error("name is required"); const project = { name: input.name, description: input.description || "", type: "web", status: input.liveUrl ? "live" : "attention", framework: "Web", source: "webmcp", links: { liveUrl: safeUrl(input.liveUrl) } }; if (!addProject(project)) throw new Error("project already exists"); return { id: idFrom(input.name), status: "added" }; } }, { signal: controller.signal })).catch(() => {});
  Promise.resolve(context.registerTool({
    name: "import_projects",
    title: "Import projects",
    description: "Import or update a batch of local, GitHub, and Vercel projects in Project Harbor.",
    inputSchema: {
      type: "object",
      properties: {
        projects: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" }, name: { type: "string" }, description: { type: "string" },
              type: { type: "string" }, status: { type: "string" }, framework: { type: "string" },
              source: { type: "string" }, tags: { type: "array", items: { type: "string" } },
              github: { type: "string" }, vercel: { type: "string" }, liveUrl: { type: "string" }
            },
            required: ["name"], additionalProperties: false
          }
        }
      },
      required: ["projects"], additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute: input => {
      if (!Array.isArray(input?.projects)) throw new Error("projects must be an array");
      let added = 0; let updated = 0;
      for (const item of input.projects.slice(0, 200)) {
        if (!item?.name) continue;
        const id = item.id || idFrom(item.name);
        const project = {
          id, name: item.name, description: item.description || "", type: item.type || "web",
          status: ["live", "local", "ready", "attention", "archived"].includes(item.status) ? item.status : "ready",
          framework: item.framework || "Project", source: item.source || "import",
          tags: Array.isArray(item.tags) ? item.tags.slice(0, 8) : [],
          links: { github: safeUrl(item.github), vercel: safeUrl(item.vercel), liveUrl: safeUrl(item.liveUrl) },
          updatedAt: new Date().toISOString(), accent: item.type === "local" ? "#285bea" : item.source === "vercel" ? "#111827" : "#8f5ae8"
        };
        const index = state.projects.findIndex(existing => existing.id === id || existing.name.toLowerCase() === item.name.toLowerCase());
        if (index >= 0) { state.projects[index] = { ...state.projects[index], ...project, links: { ...state.projects[index].links, ...project.links } }; updated++; }
        else { state.projects.unshift(project); added++; }
      }
      persist(); render();
      return { added, updated, total: state.projects.length };
    }
  }, { signal: controller.signal })).catch(() => {});
}

document.addEventListener("click", event => {
  const detail = event.target.closest("[data-detail]"); if (detail) openDetail(detail.dataset.detail);
  const edit = event.target.closest("[data-edit]"); if (edit) openEdit(edit.dataset.edit);
  if (event.target.closest("[data-open-add]")) $("#addDialog").showModal();
  if (event.target.closest("[data-close]")) event.target.closest("dialog").close();
  const remove = event.target.closest("[data-delete]"); if (remove) deleteProject(remove.dataset.delete);
  const runtime = event.target.closest("[data-runtime]"); if (runtime) runtimeAction(runtime.dataset.runtime, runtime.dataset.id);
});

$("#filters").addEventListener("click", event => { const chip = event.target.closest("[data-filter]"); if (!chip) return; state.filter = chip.dataset.filter; $$(".filter-chip").forEach(el => el.classList.toggle("active", el === chip)); render(); });
$("#searchInput").addEventListener("input", event => { state.query = event.target.value; render(); });
$("#sortSelect").addEventListener("change", event => { state.sort = event.target.value; render(); });
$("#languageButton").addEventListener("click", () => { state.lang = state.lang === "he" ? "en" : "he"; persist(); applyPreferences(); render(); });
$("#themeButton").addEventListener("click", () => { state.theme = state.theme === "coding" ? "light" : "coding"; persist(); applyPreferences(); toast(t(state.theme === "coding" ? "codingOn" : "codingOff")); });
$("#addButton").addEventListener("click", () => $("#addDialog").showModal());
$("#companionButton").addEventListener("click", openCompanion);
$("#scanCompanion").addEventListener("click", scanCompanion);
$("#loadRepos").addEventListener("click", loadGithubRepos);
$$('.source-tab').forEach(tab => tab.addEventListener("click", () => { $$('.source-tab').forEach(el => el.classList.toggle("active", el === tab)); $$('.source-panel').forEach(panel => panel.hidden = panel.dataset.panel !== tab.dataset.source); }));
$("#folderInput").addEventListener("change", async event => { try { const project = await analyzeFolder(event.target.files); const container = $("#localResults"); container.innerHTML = ""; renderImportItem(project, container, "folder"); toast(t("folderAnalyzed")); } catch { toast(t("analysisFailed")); } });
$("#webForm").addEventListener("submit", event => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget)); const url = safeUrl(data.url); if (!url) return toast(t("invalidUrl")); if (addProject({ name: data.name, description: data.description, type: "web", status: "live", framework: "Website", source: "web", links: { liveUrl: url } })) { event.currentTarget.reset(); $("#addDialog").close(); } });
$("#manualForm").addEventListener("submit", event => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget)); if (addProject({ name: data.name, description: data.description, type: data.type, status: data.liveUrl ? "live" : data.type === "local" ? "local" : "attention", framework: data.framework, tags: data.tags.split(",").map(x => x.trim()).filter(Boolean), source: "manual", links: { github: safeUrl(data.github), liveUrl: safeUrl(data.liveUrl) } })) { event.currentTarget.reset(); $("#addDialog").close(); } });
$("#editForm").addEventListener("submit", event => { event.preventDefault(); saveProjectEdits(event.currentTarget); });
document.addEventListener("keydown", event => { if (event.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { event.preventDefault(); $("#searchInput").focus(); } if (event.key === "Escape") $$('dialog[open]').forEach(dialog => dialog.close()); });
$$('dialog').forEach(dialog => dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); }));

const savedToken = localStorage.getItem("project-harbor.github-token") || sessionStorage.getItem("project-harbor.github-token") || "";
$("#githubToken").value = savedToken; $("#rememberToken").checked = Boolean(localStorage.getItem("project-harbor.github-token"));
applyPreferences(); render(); checkCompanion(); setupWebMcp();

