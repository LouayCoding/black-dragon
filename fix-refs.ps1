# Fix all ref= attributes to use curly braces
$files = Get-ChildItem -Path "src" -Recurse -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    
    $modified = $false
    
    # Fix: ref=varName -> ref={varName}
    if ($content -match 'ref=\w+[>\s]') {
        $content = $content -replace 'ref=(\w+)([>\s])', 'ref={$1}$2'
        $modified = $true
    }
    
    # Fix: key=varName -> key={varName} (if not already fixed)
    if ($content -match 'key=\w+[>\s]') {
        $content = $content -replace 'key=(\w+)([>\s])', 'key={$1}$2'
        $modified = $true
    }
    
    # Remove all useRef declarations that aren't used
    if ($content -match 'const \w+Ref = useRef') {
        # Only remove if GSAP is not present
        if ($content -notmatch 'gsap') {
            $content = $content -replace "const \w+Ref = useRef<[^>]+>\(null\);?\r?\n", ""
            $modified = $true
        }
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Fixed refs in: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "`nDone!" -ForegroundColor Green
