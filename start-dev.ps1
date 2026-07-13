$ErrorActionPreference = "Stop"

$NodeBin = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
$Node = Join-Path $NodeBin "node.exe"
$Pnpm = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs"

if (-not (Test-Path -LiteralPath $Node)) {
  throw "Bundled Node.js was not found at $Node"
}

$env:PATH = "$NodeBin;$env:PATH"

if (-not (Test-Path -LiteralPath "node_modules")) {
  & $Node $Pnpm install
  & $Node $Pnpm approve-builds --all
  & $Node $Pnpm rebuild
}

& $Node $Pnpm dev --host 127.0.0.1 --port 4321
