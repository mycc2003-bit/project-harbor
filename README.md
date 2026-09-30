# Project Harbor

A lightweight, bilingual project-management hub for local and cloud projects. It keeps each project in its own repository and stores the catalog on the current device.

## What is included

- Bright responsive interface plus an optional coding/IDE visual theme
- Full Hebrew/English switching with RTL/LTR
- Search, status filters, sorting, project cards, detail view, links and services
- Add Project flows for local folders, GitHub repositories, websites and manual entries
- Browser-side project analyzer for `package.json`, Python files and README content
- Direct GitHub import using a personal token that stays in browser storage
- A Windows companion that scans only approved roots and runs only predefined commands
- Per-project start, stop and last-500-lines logs

## Start the Windows companion

1. Install Node.js 20 or newer.
2. Double-click `start-companion.cmd`.
3. The hub opens at `http://127.0.0.1:4777`.

No dependency installation is needed.

## Configure local projects

Edit `companion/projects.json`. Every runnable project must be explicitly listed with a folder and a command array. Use `companion/projects.example.json` as a template.

To enable scanning, add only the parent folders you approve to `scanRoots` in `companion/companion.config.json`, for example:

```json
{
  "port": 4777,
  "scanRoots": ["C:\\Projects"],
  "allowedOrigins": ["http://127.0.0.1:4777", "http://localhost:4777"],
  "maxScanDepth": 3
}
```

If you want the deployed web version to reach the local companion, add its exact `https://…` origin to `allowedOrigins`, then restart the companion. Some browsers may restrict an HTTPS page from contacting a local HTTP service; the reliable fallback is opening the same hub locally through the companion.

## GitHub import

Use a fine-grained personal access token with read-only repository metadata access. The token is sent directly from your browser to GitHub. Choose “remember on this device” only on a trusted computer.

## Safety model

- The companion listens on `127.0.0.1` only; it is not exposed to the network.
- Cross-origin requests are accepted only from origins in `allowedOrigins`.
- There is no arbitrary terminal endpoint.
- Commands use executable-and-argument arrays with `shell: false`.
- Only explicitly configured project folders can be started or stopped.
- Logs are capped to the latest 500 lines per running project.

## Validation

Run `npm run check` to validate the browser and companion JavaScript syntax.

