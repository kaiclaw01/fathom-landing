$pages = @('services.html', 'process.html', 'contact.html', 'blog.html', 'building-in-public.html', 'keyword-research-guide.html', 'technical-seo-checklist.html', 'god-level-preparation.html')

foreach ($page in $pages) {
    Write-Host "Updating $page..."
    $content = Get-Content $page -Raw
    
    # Replace nav structure
    $oldNav = '    <nav class="nav">
        <a href="/" class="nav-logo">FATHOM</a>
        <div class="nav-links">'
    
    $newNav = '    <nav class="nav">
        <a href="/" class="nav-logo">FATHOM</a>
        
        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        
        <div class="nav-links" id="navLinks">'
    
    $content = $content -replace [regex]::Escape($oldNav), $newNav
    
    # Add script before closing body tag if not present
    if ($content -notmatch 'mobile-menu\.js') {
        $content = $content -replace '</body>', "    <script src=`"/mobile-menu.js`"></script>`n</body>"
    }
    
    Set-Content $page -Value $content -NoNewline
    Write-Host "  ✓ Updated $page"
}

Write-Host "`nAll pages updated!"
