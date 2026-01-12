# Final JSX fix - remove ALL curly braces around plain text
$files = Get-ChildItem -Path "src" -Recurse -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    
    $modified = $false
    
    # Fix: {Text with spaces} -> Text with spaces (in JSX)
    if ($content -match '\{[A-Z][^{}]+\}') {
        $content = $content -replace '\{([A-Z][^{}]+)\}', '$1'
        $modified = $true
    }
    
    # Fix: key=value -> key={value}
    if ($content -match 'key=\w+\s') {
        $content = $content -replace 'key=(\w+)', 'key={$1}'
        $modified = $true
    }
    
    # Fix: answer: Text -> answer: 'Text'
    if ($content -match "answer:\s+[A-Z]") {
        $content = $content -replace "answer:\s+([A-Z][^,\n]+)", "answer: '`$1'"
        $modified = $true
    }
    
    # Fix: bio: Text -> bio: 'Text'
    if ($content -match "bio:\s+[A-Z]") {
        $content = $content -replace "bio:\s+([A-Z][^,\n]+)", "bio: '`$1'"
        $modified = $true
    }
    
    # Replace react-router-dom with next/link
    if ($content -match "from 'react-router-dom'") {
        $content = $content -replace "import \{ Link \} from 'react-router-dom';", "import Link from 'next/link';"
        $content = $content -replace 'to="', 'href="'
        $modified = $true
    }
    
    # Remove asset imports
    if ($content -match "from '@/assets/") {
        $content = $content -replace "import .+ from '@/assets/.+';?\r?\n", ""
        $modified = $true
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Fixed: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "`nDone!" -ForegroundColor Green
