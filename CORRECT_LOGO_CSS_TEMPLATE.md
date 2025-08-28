# Correct Logo CSS Template
## For All Next Step Therapy Pages

### Issue
Virtual therapy pages had distorted logos due to incorrect CSS styling. This template provides the CORRECT logo CSS to use for all pages.

### CORRECT Logo CSS Structure

```css
/* Header Logo - CORRECT TEMPLATE */
.logo {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    text-decoration: none;
    color: var(--text-primary);
}

.logo img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.logo-text {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-soft-blue); /* or var(--primary-blue) depending on page color scheme */
}
```

### INCORRECT CSS (DO NOT USE)
❌ **Wrong - causes logo distortion:**
```css
.logo {
    height: 42px;
    width: auto; /* This distorts the logo */
}

.logo-text {
    font-weight: 400;
    font-style: italic; /* Makes text inconsistent with brand */
}
```

### Header HTML Structure - CORRECT
```html
<header class="header">
    <div class="container">
        <div class="header-content">
            <a href="index.html" class="logo">
                <img src="images/asset104.png" alt="Next Step Therapy Logo">
                <span class="logo-text">Next Step Therapy</span>
            </a>
            <nav class="nav">
                <a href="index.html">Home</a>
                <a href="services.html">Services</a>
                <a href="index.html#contact">Contact</a>
            </nav>
        </div>
    </div>
</header>
```

### Key Requirements
1. **Logo image must be exactly 40px x 40px** with border-radius: 50%
2. **Logo text must use font-weight: 600** (not 400 or italic)
3. **Header must include navigation menu** with Home, Services, Contact
4. **Use flexbox for proper alignment** with gap spacing
5. **Colors should match page color scheme** (--primary-soft-blue or --primary-blue)

### Fixed Pages
The following pages were corrected to use proper logo styling:
- virtual-therapy-ontario.html ✅
- online-mental-health-support-ontario.html ✅  
- same-day-virtual-therapy-ontario.html ✅
- mental-health-northern-ontario.html ✅
- virtual-therapy-thunder-bay.html ✅

### Reference
Use pages like `cant-sleep-anxiety.html` as the CORRECT template reference for logo styling.