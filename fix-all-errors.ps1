# Fix alle resterende errors in sections
Write-Host "Fixing all section errors..." -ForegroundColor Green

# Fix asset imports - verwijder alle import statements voor images
$sections = Get-ChildItem "src\components\sections\*.tsx"

foreach ($section in $sections) {
    $content = Get-Content $section.FullName -Raw
    
    # Verwijder image imports
    $content = $content -replace "import .+ from '@/assets/.+';?\r?\n", ""
    
    # Verwijder GSAP useEffect blocks (simpel patroon)
    $content = $content -replace "useEffect\(\(\) => \{[^}]*gsap[^}]*\}, \[\]\);?\r?\n", ""
    $content = $content -replace "useEffect\(\(\) => \{[^}]*ScrollTrigger[^}]*\}, \[\]\);?\r?\n", ""
    
    # Verwijder ref declarations die alleen voor GSAP waren
    $content = $content -replace "const \w+Ref = useRef<\w+>\(null\);?\r?\n", ""
    
    # Verwijder ref props uit JSX
    $content = $content -replace '\s+ref=\{\w+Ref\}', ''
    
    Set-Content -Path $section.FullName -Value $content -NoNewline
    Write-Host "  Fixed: $($section.Name)" -ForegroundColor Yellow
}

Write-Host "`nDone!" -ForegroundColor Green
