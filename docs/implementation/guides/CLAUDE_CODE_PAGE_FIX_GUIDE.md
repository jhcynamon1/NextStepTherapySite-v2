# Claude Code Page Fix Guide
## Troubleshooting High-Value Keyword Pages

---

## CURRENT STATUS

### ✅ Pages That Exist and Are Live:
1. **Toronto Depression Therapy**
   - File: `/public/locations/toronto/depression-therapy.html`
   - URL: https://nextsteptherapy.ca/locations/toronto/depression-therapy
   - Status: WORKING (CSS fixed, content loading)

2. **Online Depression Therapy**
   - File: `/public/online-therapy-depression.html`
   - URL: https://nextsteptherapy.ca/online-therapy-depression
   - Status: WORKING (CSS fixed, content loading)

---

## COMMON ISSUES & FIXES

### Issue 1: CSS Not Loading
**Problem**: Pages appear unstyled, no design
**Solution**: Use ABSOLUTE paths for CSS, not relative

```html
<!-- WRONG (relative paths) -->
<link rel="stylesheet" href="../../shared.min.css">
<link rel="stylesheet" href="../../services/professional-service-styles.css">

<!-- CORRECT (absolute paths) -->
<link rel="stylesheet" href="/shared.min.css">
<link rel="stylesheet" href="/services/professional-service-styles.css">
```

### Issue 2: Navigation Links Broken
**Problem**: Links don't work from nested directories
**Solution**: Use ABSOLUTE paths for all navigation

```html
<!-- WRONG (relative paths) -->
<a href="../../index.html">Home</a>
<img src="../../images/asset104.png">

<!-- CORRECT (absolute paths) -->
<a href="/index.html">Home</a>
<img src="/images/asset104.png">
```

### Issue 3: Page Not Found / 404
**Problem**: URL structure doesn't match file location
**Solution**: Ensure file placement matches URL structure

```
For URL: /locations/toronto/depression-therapy
File MUST be at: /public/locations/toronto/depression-therapy.html

For URL: /online-therapy-depression
File MUST be at: /public/online-therapy-depression.html
```

### Issue 4: Redirecting to Homepage
**Problem**: Vercel rewrite rules causing issues
**Solution**: Already fixed in vercel.json with cleanUrls: true

---

## TEMPLATE TO USE

Use this structure from `/public/services/life-transitions.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[PAGE TITLE] | CRPO #10979</title>
    <meta name="description" content="[META DESCRIPTION]">
    
    <!-- ALWAYS USE ABSOLUTE PATHS -->
    <link rel="stylesheet" href="/shared.min.css">
    <link rel="stylesheet" href="/services/professional-service-styles.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation with ABSOLUTE paths -->
    <header class="header">
        <nav class="nav-container">
            <a href="/index.html" class="logo">
                <img src="/images/asset104.png" alt="Next Step Therapy Logo">
            </a>
            <!-- etc -->
        </nav>
    </header>
    
    <!-- Content sections following template -->
    
    <!-- Footer with ABSOLUTE paths -->
</body>
</html>
```

---

## VERIFICATION CHECKLIST

Before deploying any page:

- [ ] All CSS links use absolute paths (`/shared.min.css`)
- [ ] All navigation links use absolute paths (`/index.html`)
- [ ] All image sources use absolute paths (`/images/...`)
- [ ] File location matches intended URL structure
- [ ] CRPO #10979 appears at least 3 times
- [ ] Jane App booking link is correct
- [ ] Phone number is (416) 306-2157
- [ ] Page has proper schema markup

---

## DEPLOYMENT COMMANDS

After making changes:

```bash
# Stage and commit
git add .
git commit -m "fix: [description of fix]"

# Deploy to production
vercel --prod --force --yes

# Verify deployment (wait 30 seconds first)
curl -I "https://nextsteptherapy.ca/[page-url]"
```

---

## TEST URLS

Test these to ensure they're working:

1. https://nextsteptherapy.ca/locations/toronto/depression-therapy
2. https://nextsteptherapy.ca/online-therapy-depression

Both should:
- Load with full CSS styling
- Show correct content (not homepage)
- Have working navigation
- Display CRPO #10979
- Have working CTAs to Jane App

---

## REMAINING PAGES TO CREATE

Once the first 2 are perfect, create these:

3. **Depression Therapy Goals** 
   - URL: `/therapy-goals-depression`
   - Target: "goals for therapy depression" (40 searches/month)

4. **Psychotherapy & Counselling for Depression**
   - URL: `/psychotherapy-counselling-depression`
   - Target: "psychotherapy and counselling for depression" (30 searches/month)

5. **Depression Family Therapy**
   - URL: `/family-therapy-depression`
   - Target: "depression family therapy" (10 searches/month)

---

## CRITICAL REMINDERS

1. **NEVER use relative paths** in nested directories
2. **ALWAYS test locally** before deploying
3. **MAINTAIN CRPO compliance** - Registration #10979
4. **USE existing templates** - don't create from scratch
5. **FOLLOW the PRD** in HIGH_VALUE_KEYWORDS_PAGES_PRD.md

---

## IF STILL HAVING ISSUES

1. Check browser console for 404 errors on CSS/JS files
2. View page source to ensure paths are correct
3. Clear browser cache and try incognito mode
4. Check Vercel deployment logs for errors
5. Verify file exists at expected location

The two pages ARE working now - they just need to maintain absolute paths for all resources!
