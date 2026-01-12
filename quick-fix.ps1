# Quick fix script voor alle components
$files = @(
    "src\components\sections\HeroSection.tsx",
    "src\components\sections\AboutSection.tsx",
    "src\components\sections\ProgramsSection.tsx",
    "src\components\sections\ContactSection.tsx",
    "src\components\sections\TestimonialsSection.tsx",
    "src\components\sections\GallerySection.tsx",
    "src\components\sections\FAQSection.tsx",
    "src\components\sections\ScheduleSection.tsx",
    "src\components\sections\InstructorsSection.tsx",
    "src\components\sections\PartnersSection.tsx",
    "src\components\sections\NewsSection.tsx",
    "src\components\sections\PricingSection.tsx",
    "src\components\layout\Footer.tsx",
    "src\components\BackToTop.tsx",
    "src\components\PageHero.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Add use client
        if ($content -notmatch "'use client'") {
            $content = "'use client'`n`n" + $content
        }
        
        # Fix imports
        $content = $content -replace "from 'react-router-dom'", "from 'next/link'"
        $content = $content -replace "import \{ Link \}", "import Link"
        $content = $content -replace 'to="', 'href="'
        $content = $content -replace "to=\{", "href={"
        
        # Remove useLanguage
        $content = $content -replace "import \{ useLanguage \}[^\n]+\n", ""
        $content = $content -replace "const \{ [^}]*t[^}]* \} = useLanguage\(\);?\n", ""
        
        # Remove useTheme  
        $content = $content -replace "import \{ useTheme \}[^\n]+\n", ""
        $content = $content -replace "const \{ [^}]*theme[^}]* \} = useTheme\(\);?\n", ""
        
        # Remove GSAP
        $content = $content -replace "import gsap[^\n]+\n", ""
        $content = $content -replace "import \{ ScrollTrigger \}[^\n]+\n", ""
        $content = $content -replace "gsap\.registerPlugin[^\n]+\n", ""
        
        # Simple t() replacement
        $content = $content -replace "t\('([^']+)', '[^']+'\)", "'`$1'"
        $content = $content -replace "\{t\('([^']+)', '[^']+'\)\}", "`$1"
        
        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "Fixed: $file" -ForegroundColor Green
    }
}

Write-Host "`nDone!" -ForegroundColor Green
