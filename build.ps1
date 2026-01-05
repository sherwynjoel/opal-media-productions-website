# Build Script for OPAL Media Productions Website
# This script copies all production files to the dist folder

Write-Host "Building OPAL Media Productions Website..." -ForegroundColor Green

$projectRoot = $PSScriptRoot
$distFolder = Join-Path $projectRoot "dist"

# Create dist folder if it doesn't exist
if (-not (Test-Path $distFolder)) {
    New-Item -ItemType Directory -Path $distFolder | Out-Null
    Write-Host "Created dist folder" -ForegroundColor Yellow
}

# Create images folder in dist if it doesn't exist
$distImagesFolder = Join-Path $distFolder "images"
if (-not (Test-Path $distImagesFolder)) {
    New-Item -ItemType Directory -Path $distImagesFolder | Out-Null
    Write-Host "Created dist/images folder" -ForegroundColor Yellow
}

# Copy main files
Write-Host "Copying main files..." -ForegroundColor Cyan
Copy-Item -Path (Join-Path $projectRoot "index.html") -Destination (Join-Path $distFolder "index.html") -Force
Copy-Item -Path (Join-Path $projectRoot "styles.css") -Destination (Join-Path $distFolder "styles.css") -Force
Copy-Item -Path (Join-Path $projectRoot "script.js") -Destination (Join-Path $distFolder "script.js") -Force
Copy-Item -Path (Join-Path $projectRoot "contact-submit.php") -Destination (Join-Path $distFolder "contact-submit.php") -Force

# Copy contact.html if it exists
if (Test-Path (Join-Path $projectRoot "contact.html")) {
    Copy-Item -Path (Join-Path $projectRoot "contact.html") -Destination (Join-Path $distFolder "contact.html") -Force
}

# Copy images
Write-Host "Copying images..." -ForegroundColor Cyan
$imagesFolder = Join-Path $projectRoot "images"
if (Test-Path $imagesFolder) {
    Copy-Item -Path "$imagesFolder\*" -Destination $distImagesFolder -Recurse -Force
}

Write-Host "`nBuild completed successfully!" -ForegroundColor Green
Write-Host "Production files are ready in the 'dist' folder" -ForegroundColor Green
Write-Host "`nYou can now deploy the contents of the 'dist' folder to your hosting provider." -ForegroundColor Yellow

