# Fix missing quotes in sections
$sections = @(
    "src\components\sections\PartnersSection.tsx",
    "src\components\sections\ProgramsSection.tsx", 
    "src\components\sections\ScheduleSection.tsx",
    "src\components\sections\TestimonialsSection.tsx"
)

foreach ($section in $sections) {
    if (Test-Path $section) {
        $content = Get-Content $section -Raw
        
        # Fix: description: Text without quotes -> description: 'Text'
        $content = $content -replace "description:\s+([A-Z][^,\n]+)", "description: '`$1'"
        
        # Fix: text: Text without quotes -> text: 'Text'
        $content = $content -replace "text:\s+([A-Z][^,\n]+)", "text: '`$1'"
        
        # Fix: {Text} -> 'Text'
        $content = $content -replace "\{([A-Z][^}]+)\}", "'`$1'"
        
        Set-Content -Path $section -Value $content -NoNewline
        Write-Host "Fixed: $section" -ForegroundColor Green
    }
}

Write-Host "Done!" -ForegroundColor Green
