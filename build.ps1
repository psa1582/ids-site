$ErrorActionPreference = "Stop"

$NodeBin = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
$Node = Join-Path $NodeBin "node.exe"
$Pnpm = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs"

if (-not (Test-Path -LiteralPath $Node)) {
  throw "Bundled Node.js was not found at $Node"
}

$env:PATH = "$NodeBin;$env:PATH"
& $Node $Pnpm build
