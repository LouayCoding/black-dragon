# Final cleanup - verwijder alle t() calls
$files = Get-ChildItem -Path "src" -Recurse -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    
    $modified = $false
    
    # Replace t('Nederlands', 'English') with just Nederlands
    if ($content -match "t\(") {
        # Pattern 1: t('text', 'text')
        $content = $content -replace "t\(\s*'([^']+)',\s*'[^']+'\s*\)", '$1'
        
        # Pattern 2: {t('text', 'text')}
        $content = $content -replace "\{t\(\s*'([^']+)',\s*'[^']+'\s*\)\}", '$1'
        
        # Pattern 3: Multi-line t() calls
        $content = $content -replace "t\(\s*\n\s*'([^']+)',\s*\n\s*'[^']+'\s*\n\s*\)", '$1'
        
        $modified = $true
    }
    
    # Remove any remaining t references
    if ($content -match "const \{ t \}") {
        $content = $content -replace "const \{ t \} = useLanguage\(\);?\n", ""
        $modified = $true
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Fixed: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "`nDone!" -ForegroundColor Green
