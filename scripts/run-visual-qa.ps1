$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)

$node = (Get-Command node).Source
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
if (-not (Test-Path $chrome)) {
  $chrome = 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
}
if (-not (Test-Path $chrome)) { throw 'Google Chrome was not found.' }

$profile = Join-Path $env:TEMP "slidev-qa-chrome-$PID"
$serverLog = Join-Path (Get-Location) '.sources/visual-qa/server.log'
$serverErrors = Join-Path (Get-Location) '.sources/visual-qa/server-errors.log'
$server = $null
$browser = $null

try {
  Write-Host "Starting Slidev with node $node"
  $server = Start-Process -FilePath $node `
    -ArgumentList @('node_modules/@slidev/cli/bin/slidev.mjs', '--port', '47658') `
    -PassThru -RedirectStandardOutput $serverLog -RedirectStandardError $serverErrors

  $ready = $false
  for ($attempt = 0; $attempt -lt 15; $attempt++) {
    try {
      $response = Invoke-WebRequest 'http://localhost:47658/1' -UseBasicParsing -TimeoutSec 1
      if ($response.StatusCode -eq 200) { $ready = $true; break }
    } catch {}
    if ($server.HasExited) { break }
    Start-Sleep -Milliseconds 500
  }
  if (-not $ready) {
    Get-NetTCPConnection -State Listen -LocalPort 47658 -ErrorAction SilentlyContinue | Format-Table -AutoSize
    Get-Content $serverLog -ErrorAction SilentlyContinue
    Get-Content $serverErrors -ErrorAction SilentlyContinue
    throw 'Slidev did not respond on localhost:47658.'
  }

  Write-Host 'Slidev ready; starting Chrome remote debugging.'
  $browser = Start-Process -FilePath $chrome `
    -ArgumentList @('--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=9338', "--user-data-dir=$profile", 'about:blank') `
    -PassThru
  $cdpReady = $false
  for ($attempt = 0; $attempt -lt 50; $attempt++) {
    try {
      $tabs = Invoke-RestMethod 'http://127.0.0.1:9338/json/list' -TimeoutSec 2
      if ($tabs) { $cdpReady = $true; break }
    } catch {}
    Start-Sleep -Milliseconds 250
  }
  if (-not $cdpReady) { throw 'Chrome remote debugging did not respond on port 9338.' }

  $env:SLIDE_QA_URL = 'http://localhost:47658'
  $env:SLIDE_QA_PORT = '9338'
  & $node scripts/visual-qa.mjs
  if ($LASTEXITCODE -ne 0) { throw "Visual QA failed with exit code $LASTEXITCODE." }
} finally {
  if ($browser) { Stop-Process -Id $browser.Id -Force -ErrorAction SilentlyContinue }
  if ($server) { Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue }
}
