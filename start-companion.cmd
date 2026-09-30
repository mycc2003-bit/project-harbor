@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 20 or newer is required.
  echo Download it from https://nodejs.org/
  pause
  exit /b 1
)
echo Starting Project Harbor Companion...
start "Project Harbor Companion" /min node companion\server.js
timeout /t 2 /nobreak >nul
start "" http://127.0.0.1:4777
endlocal

