# Ahrefs Site Audit Fix Plan - December 29, 2025

**Audit Date:** December 29, 2025
**Health Score:** 66 (Fair)
**Total Issues:** 826 (73 Errors, 334 Warnings, 419 Notices)

---

## Priority 1: CRITICAL ERRORS (Fix Immediately)

### 1.1 Broken JavaScript: `/js/main.js` returning 404

**Impact:** HIGH - JavaScript error on page
**Affected Page:** `rumination-therapy.html`

**Root Cause:** The file `/js/main.js` does not exist but is referenced in rumination-therapy.html line 267.

**Fix:**
```bash
# Option A: Remove the reference (RECOMMENDED - file likely not needed)
# Edit rumination-therapy.html and remove line 267:
# <script src="js/main.js"></script>

# Option B: Create an empty placeholder (if other pages need it later)
# echo "" > js/main.js
```

**Action:** Remove the `<script src="js/main.js"></script>` line from rumination-therapy.html

---

### 1.2 Four Pages Returning 404

| URL | Inlinks | Issue | Fix |
|-----|---------|-------|-----|
| `/counselling-services` | 4 | Missing .html extension in links | Update links to use `/counselling-services.html` |
| `/mens-mental-health-therapy.html` | 5 | Page doesn't exist | Create redirect to `/mens-mental-health.html` |
| `/students/first-year-university-anxiety.html` | 1 | Page doesn't exist | Create redirect to `/first-year-university-anxiety.html` |
| `/anxiety-therapy-burlington` | 1 | Missing .html extension | Update links to use `.html` extension |

**Fix Actions:**

```bash
# 1. Find and fix links to /counselling-services (add .html)
grep -r "counselling-services\"" *.html --include="*.html" -l

# 2. Create _redirects file for Netlify (if not exists) or update it
echo "/mens-mental-health-therapy.html /mens-mental-health.html 301" >> _redirects
echo "/students/first-year-university-anxiety.html /first-year-university-anxiety.html 301" >> _redirects
echo "/anxiety-therapy-burlington /anxiety-therapy-burlington.html 301" >> _redirects
echo "/counselling-services /counselling-services.html 301" >> _redirects
```

---

### 1.3 Clean Up Sitemap - Remove 18 Redirecting URLs

The sitemap contains old URLs that 308 redirect. Google wastes crawl budget on these.

**URLs to REMOVE from sitemap.xml:**

| Remove This URL | Redirects To |
|-----------------|--------------|
| `/online-therapy-burlington.html` | `/anxiety-therapy-burlington.html` |
| `/online-therapy-mississauga.html` | `/anxiety-therapy-mississauga.html` |
| `/online-therapy-ottawa.html` | `/anxiety-therapy-ottawa.html` |
| `/counselling-ontario.html` | `/how-to-find-therapist-ontario.html` |
| `/counsellor-ontario.html` | `/how-to-find-therapist-ontario.html` |
| `/mental-health-therapist-ontario.html` | `/how-to-find-therapist-ontario.html` |
| `/therapy-near-me-ontario.html` | `/how-to-find-therapist-ontario.html` |
| `/mens-mental-health-therapy-london-ontario.html` | `/mens-mental-health.html` |
| `/services.html` | `/` (homepage) |
| `/queens-university-student-therapy.html` | `/students/student-mental-health-kingston.html` |
| `/depression-therapy-ottawa.html` (old) | `/depression-therapy-ontario.html` |

**Fix:** Edit `sitemap.xml` and remove these entries. Keep only the destination URLs.

---

## Priority 2: HIGH IMPACT WARNINGS

### 2.1 Add Internal Links to 24 Orphan Pages

These pages have NO internal links pointing to them - they're invisible to crawlers navigating the site.

**High Priority Orphans (PR 50):**
- `depression-therapy-mississauga.html`
- `first-job-anxiety-therapy-toronto.html`

**Fix Strategy:**
1. Add these pages to relevant navigation/footer
2. Add contextual links from related service pages
3. Add to "Related Services" sections

**Example Internal Link Additions:**

| Orphan Page | Add Links From |
|-------------|----------------|
| `depression-therapy-mississauga.html` | `anxiety-therapy-mississauga.html`, `therapy-mississauga-ontario.html` |
| `first-job-anxiety-therapy-toronto.html` | Homepage, `anxiety-therapy-toronto.html`, student pages |

---

### 2.2 Fix 10 Pages Linking to Broken Pages

These pages contain links to URLs that return 404:

**Action:** After fixing the 404s in 1.2, these will auto-resolve. Run audit again to verify.

---

### 2.3 Fix 55 Meta Descriptions Too Long

Meta descriptions over 160 characters get truncated in SERPs.

**Fix:** Use `meta-title-optimizer` skill to audit and shorten descriptions.

```bash
# Find pages with long meta descriptions
grep -r "meta name=\"description\"" *.html | awk -F'content="' '{print length($2), FILENAME}'
```

---

## Priority 3: MODERATE WARNINGS

### 3.1 Fix 6 Canonical Points to Redirect

Pages have canonical tags pointing to URLs that redirect. Update canonical to point to final destination.

### 3.2 Fix 68 Pages Linking to Redirects

Many internal links point to old URLs that redirect. Update links to use destination URLs directly.

**Common patterns to find/replace:**
- `/online-therapy-burlington.html` → `/anxiety-therapy-burlington.html`
- `/online-therapy-mississauga.html` → `/anxiety-therapy-mississauga.html`
- `/counselling-ontario.html` → `/how-to-find-therapist-ontario.html`

---

## Priority 4: NOTICES (Low Priority)

### 4.1 Add Missing Twitter/X Cards (104 pages)

Add Twitter card meta tags to pages:
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Page Title]">
<meta name="twitter:description" content="[Description]">
```

### 4.2 Complete Open Graph Tags (33 pages)

Ensure all pages have:
```html
<meta property="og:title" content="">
<meta property="og:description" content="">
<meta property="og:image" content="">
<meta property="og:url" content="">
<meta property="og:type" content="website">
```

### 4.3 JavaScript Redirects (110 pages)

This is likely CDN-related (Tailwind, Lucide, etc.) - monitor but low priority.

---

## Implementation Order

### Phase 1: Critical Fixes (Do Now)
1. [ ] Remove `main.js` reference from `rumination-therapy.html`
2. [ ] Add redirects for 404 URLs to `_redirects` file
3. [ ] Fix links missing `.html` extension

### Phase 2: Sitemap Cleanup (Same Day)
4. [ ] Remove 18 redirecting URLs from `sitemap.xml`
5. [ ] Submit updated sitemap to Google Search Console

### Phase 3: Internal Linking (This Week)
6. [ ] Add internal links to top 10 orphan pages
7. [ ] Update links pointing to redirects

### Phase 4: Meta Optimization (This Week)
8. [ ] Fix meta descriptions over 160 chars
9. [ ] Fix titles over 60 chars

### Phase 5: Social Tags (Next Week)
10. [ ] Add Twitter cards to priority pages
11. [ ] Complete Open Graph tags

---

## Verification

After fixes, run new Ahrefs crawl to verify:
- Health Score should increase to 80+
- Errors should drop from 73 to <10
- 404 pages should be 0

---

## Files to Edit

| File | Changes Needed |
|------|----------------|
| `rumination-therapy.html` | Remove main.js reference |
| `_redirects` | Add 4 redirect rules |
| `sitemap.xml` | Remove 18 redirecting URLs |
| Various `.html` files | Fix internal links |
| Various `.html` files | Shorten meta descriptions |
