param(
  [Parameter(Mandatory = $true)]
  [string]$ProjectName,

  [string]$ParentPath = ".",

  [string[]]$CreateExpoArgs = @(),

  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

$resolvedParent = Resolve-Path $ParentPath
$projectPath = Join-Path $resolvedParent $ProjectName
$templateRoot = $PSScriptRoot

if (Test-Path $projectPath) {
  Write-Error "Target already exists: $projectPath"
}

function Invoke-Step {
  param(
    [string]$Label,
    [scriptblock]$Action
  )

  Write-Host "==> $Label"
  & $Action
}

Invoke-Step "Creating Expo project" {
  $cmd = @("npx", "create-expo-app@latest", $ProjectName) + $CreateExpoArgs
  Write-Host ($cmd -join " ")

  if (-not $DryRun) {
    Push-Location $resolvedParent
    try {
      & npx create-expo-app@latest $ProjectName @CreateExpoArgs
      if ($LASTEXITCODE -ne 0) {
        throw "create-expo-app failed with exit code $LASTEXITCODE"
      }
    }
    finally {
      Pop-Location
    }
  }
}

Invoke-Step "Copying reusable LAN template into new project" {
  $targetTemplateDir = Join-Path $projectPath "templates\expo-lan"
  Write-Host "Copy from $templateRoot to $targetTemplateDir"

  if (-not $DryRun) {
    New-Item -ItemType Directory -Path $targetTemplateDir -Force | Out-Null
    Copy-Item -Path (Join-Path $templateRoot "start-lan.js") -Destination (Join-Path $targetTemplateDir "start-lan.js") -Force
    Copy-Item -Path (Join-Path $templateRoot "setup-lan.ps1") -Destination (Join-Path $targetTemplateDir "setup-lan.ps1") -Force
    Copy-Item -Path (Join-Path $templateRoot "README.md") -Destination (Join-Path $targetTemplateDir "README.md") -Force
  }
}

Invoke-Step "Applying LAN startup script to package.json" {
  $setupScriptPath = Join-Path $projectPath "templates\expo-lan\setup-lan.ps1"
  $cmd = "PowerShell -ExecutionPolicy Bypass -File `"$setupScriptPath`" -ProjectPath `"$projectPath`""
  Write-Host $cmd

  if (-not $DryRun) {
    & PowerShell -ExecutionPolicy Bypass -File $setupScriptPath -ProjectPath $projectPath
    if ($LASTEXITCODE -ne 0) {
      throw "setup-lan.ps1 failed with exit code $LASTEXITCODE"
    }
  }
}

Write-Host ""
if ($DryRun) {
  Write-Host "Dry run complete. No files were changed."
} else {
  Write-Host "Project ready: $projectPath"
  Write-Host "Next:"
  Write-Host "1. cd $projectPath"
  Write-Host "2. npm run start:lan"
}
