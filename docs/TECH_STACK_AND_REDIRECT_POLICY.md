# Tech Stack & Redirect Policy Analysis
**Date:** September 19, 2025  
**Status:** Production Configuration Confirmed

---

## 1. Live Tech Stack & Deployment Target

### ✅ CONFIRMED PRODUCTION SETUP

**Platform:** Static HTML/CSS/JS on Vercel  
**Domain:** nextsteptherapy.ca (apex domain, non-www canonical)  
**Deployment:** Git → Vercel CLI → CDN  
**Configuration:** `vercel.json` in root directory  

### Implementation Locations

```bash
# Redirects & Rewrites
/vercel.json (already configured)

# Canonical Tags  
<link rel="canonical" href="https://nextsteptherapy.ca/page-name">
# Add to <head> of each HTML file

# Sitemap
/sitemap.xml (root directory)

# CI Checks
GitHub Actions or Vercel build hooks
```

### Code Snippets for Your Setup

#### Redirects (vercel.json)
```json
{
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/new-page", 
      "permanent": true
    },
    {
      "source": "/legacy-page",
      "destination": "/410-gone.html",
      "statusCode": 410
    }
  ]
}
```

#### Canonical Tags (HTML files)
```html
<link rel="canonical" href="https://nextsteptherapy.ca/canonical-slug">
```

#### Sitemap Generation
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nextsteptherapy.ca/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://nextsteptherapy.ca/services</loc>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>
</urlset>
```

---

## 2. 410 vs 301 Policy - CONFIRMED

### ✅ 410 Gone (Permanent Removal)

**Apply 410 to:**
- All `-old` suffixes (e.g., `/virtual-therapy-ontario-old`)
- All `/v2/` and `/v3/` QA/test variants  
- All `clean`/`qa-comprehensive` variants
- Thin/placeholder pages until rebuilt
- Sensitive/outdated content

**Example 410 URLs:**
```
/virtual-therapy-ontario-old → 410
/anxiety-therapy-clean → 410
/depression-therapy-v2 → 410
/workplace-stress-qa-comprehensive → 410
```

### ✅ 301 Redirect (Consolidation)

**Apply 301 to:**
- Everything else to nearest canonical
- Legacy root slugs → structured paths (`/students/`, `/professionals/`, `/locations/`)
- Duplicate content variants → preferred slug
- .html → extensionless URLs
- www → non-www

**Example 301 Redirects:**
```
/college-anxiety.html → /students/college-anxiety
/performance-anxiety.html → /professionals/performance-anxiety
/depression-therapy-ottawa.html → /locations/ottawa/depression-therapy
www.nextsteptherapy.ca/* → nextsteptherapy.ca/*
```

---

## 3. Implementation Strategy

### Phase 1: Redirect Configuration
1. **vercel.json** handles all redirects (both 301 and 410)
2. **410 responses** configured as redirects to a 410 error page
3. **301 redirects** point to canonical destination URLs

### Phase 2: Canonical Implementation
1. **Canonical tags** in every HTML file `<head>`
2. **Self-referencing canonicals** for all pages
3. **Non-www format:** `https://nextsteptherapy.ca/page-name`

### Phase 3: Sitemap Updates
1. **Sitemap** only includes final canonical URLs
2. **Remove all legacy/duplicate URLs** from sitemap
3. **Submit updated sitemap** to Google Search Console

### Phase 4: CI/CD Checks
1. **Automated canonical validation**
2. **Redirect testing** on deployment
3. **Sitemap validation** before publishing

---

## 4. Current Infrastructure Status

### ✅ Working Components
- Vercel hosting with custom domain
- 301 redirects configured in `vercel.json`
- Clean URLs (extensionless) enabled
- Security headers configured
- SSL/HTTPS automatic

### ❌ Issues to Fix
- Domain configuration problems (apex vs www canonical issues)
- New files in `/public/` directory not deploying properly
- Multiple Vercel projects causing confusion
- 54 URLs returning 404s due to missing files
- Canonical mismatches across existing pages

---

## 5. Next Steps

### Immediate Actions Required
1. **Fix canonical mismatches** across all existing pages
2. **Implement redirect map** for all legacy URLs
3. **Rebuild missing 404 pages** using MANAS/CRPO standards
4. **Update sitemap.xml** to only include canonical URLs
5. **Set up automated checks** to prevent regressions

### Implementation Order
1. **Critical Lead Pages** (same-day recovery): `/services`, `/contact`, `/faq`
2. **High-Priority Student Pages** in `/students/` structure
3. **Professional Pages** in `/professionals/` structure
4. **Location Pages** in `/locations/` structure
5. **Sitemap and canonical cleanup**

---

**Status:** Ready to implement fixes using Vercel + static HTML setup  
**Infrastructure:** Confirmed and working - execution phase ready
