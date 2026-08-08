param(
  [string]$ProjectPath = "."
)

$ErrorActionPreference = "Stop"

$resolvedProjectPath = Resolve-Path $ProjectPath
$packageJsonPath = Join-Path $resolvedProjectPath "package.json"

if (-not (Test-Path $packageJsonPath)) {
  Write-Error "No package.json found at $resolvedProjectPath"
}

$scriptsPath = Join-Path $resolvedProjectPath "scripts"
if (-not (Test-Path $scriptsPath)) {
  New-Item -ItemType Directory -Path $scriptsPath | Out-Null
}

$source = Join-Path $PSScriptRoot "start-lan.js"
$target = Join-Path $scriptsPath "start-lan.js"
Copy-Item -Path $source -Destination $target -Force

Push-Location $resolvedProjectPath
try {
  npm pkg set "scripts.start:lan=node scripts/start-lan.js" | Out-Null
  Write-Host "Added scripts/start-lan.js"
  Write-Host "Added package script: start:lan"
  Write-Host "Run: npm run start:lan"
}
finally {
  Pop-Location
}
