@echo off
setlocal
cd /d "%~dp0"

set "NODEBIN=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
set "NODE=%NODEBIN%\node.exe"
set "PNPM=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs"

if not exist "%NODE%" (
  echo Bundled Node.js was not found at "%NODE%"
  exit /b 1
)

set "PATH=%NODEBIN%;%PATH%"

if not exist "node_modules" (
  "%NODE%" "%PNPM%" install
  "%NODE%" "%PNPM%" approve-builds --all
  "%NODE%" "%PNPM%" rebuild
)

"%NODE%" "%PNPM%" dev --host 127.0.0.1 --port 4321
