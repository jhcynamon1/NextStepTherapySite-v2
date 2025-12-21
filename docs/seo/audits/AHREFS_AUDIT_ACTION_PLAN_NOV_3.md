# Ahrefs Site Audit - Action Plan | November 3, 2025

## Executive Summary

**Total Issues Found:** ~1,500 issues across errors, warnings, and notices

**Good News:** Most issues are either:
1. **Already being fixed** (the 102 GSC errors we fixed yesterday)
2. **Low priority** (schema validation, social cards)
3. **Easy batch fixes** (Open Graph tags, meta descriptions)

**Critical:** Only **~350 issues need immediate attention**

---

## 🔴 CRITICAL ERRORS (Fix Immediately)

### Priority 1: Broken Links & 404s

#### **37 × 404 Pages Found**
**Impact:** Users clicking these links get error pages = terrible UX + SEO penalty

**Issues:**
- `/mens-mental-health` (404)
- `/counselling-services` (404)
- `/privacy-policy.html` (404)
- `/students/university-anxiety` (404)
- `/professionals/performance-anxiety` (404)
- `/professionals/workplace-stress` (404)
- +31 more

**Root Cause:** These URLs are in `vercel.json` redirects but the redirect destinations don't have `.html` extensions configured properly.

**Fix:**
Most of these should redirect to `.html` versions or actual pages. We already fixed many redirect chains yesterday, but some 404s remain.

**Action:**
```bash
# Check which 404 URLs are real missing pages vs redirect issues
# Add redirects for missing pages to vercel.json
# OR create actual pages if they should exist
```

---

#### **50 × Pages Linking to Broken Pages**
**Impact:** Internal links on 50 pages point to 404s = broken user experience

**Example:**
- Homepage links to `/mens-mental-health` (404)
- Homepage links to `/counselling-services` (404)

**Fix:**
Update internal links to point to correct `.html` pages or remove broken links.

---

#### **21 × Orphan Pages (No Internal Links)**
**Impact:** Pages exist but can't be found via navigation = wasted content

**These pages exist but nothing links to them:**
- Likely newly created pages
- Or pages we removed links from accidentally

**Fix:**
1. Add these to main navigation
2. Add internal links from related pages
3. OR delete if they're not needed

---

### Priority 2: Redirect Issues

#### **23 × Redirects in Sitemap**
**Impact:** Sitemap contains redirect URLs instead of final URLs = confuses Google

**Issue:**
Sitemap includes URLs like `/virtual-therapy-ontario` which redirect to `/virtual-therapy-ontario.html`

**Fix:**
Update `sitemap.xml` to only include final `.html` URLs, not redirect sources.

---

#### **11 × Broken Redirects**
**Impact:** Redirect chains or loops = slow page loads + SEO penalty

**We fixed 22 redirect chains yesterday, but 11 more remain.**

**Fix:**
Flatten remaining redirect chains in `vercel.json`

---

#### **6 × Canonical Points to Redirect**
**Impact:** Canonical tags point to URLs that redirect = confuses Google

**Example:**
```html
<link rel="canonical" href="https://nextsteptherapy.ca/page-without-html">
```
But that URL redirects to `/page-without-html.html`

**Fix:**
Update canonical tags to point directly to final `.html` URLs

---

### Priority 3: Images

#### **7 × Pages with Broken Images**
**Impact:** Broken img tags = poor UX + page quality issues

**Likely causes:**
- Typos in image paths
- Images deleted but still referenced
- Wrong image file names

**Fix:**
1. Find broken image references
2. Fix paths or replace with correct images
3. Remove img tags if images don't exist

---

### Priority 4: Sitemap Issues

#### **7 × 4XX Pages in Sitemap**
**Impact:** Sitemap tells Google to index 404 pages = wastes crawl budget

**Fix:**
Remove 404 URLs from sitemap.xml

---

#### **2 × Non-Canonical Pages in Sitemap**
**Impact:** Sitemap includes duplicate pages that shouldn't be indexed

**Example:**
Sitemap might include both:
- `/page.html` (canonical)
- `/page` (non-canonical, redirects)

**Fix:**
Remove non-canonical URLs from sitemap

---

#### **2 × Duplicate Pages Without Canonical**
**Impact:** 2 sets of duplicate pages without canonical tags = duplicate content issues

**Fix:**
Add canonical tags to specify which version Google should index

---

## ⚠️  HIGH PRIORITY WARNINGS (Fix Soon)

### Priority 5: Open Graph Issues

#### **354 × Open Graph URL Not Matching Canonical**
**Impact:** When shared on social media, wrong URL shows up

**Issue:**
```html
<link rel="canonical" href="https://nextsteptherapy.ca/page.html">
<meta property="og:url" content="https://nextsteptherapy.ca/page">
```
These should match!

**Fix:**
Update all `og:url` tags to match canonical URLs (with `.html`)

---

#### **217 × Incomplete Open Graph Tags**
**Impact:** Social media shares look unprofessional (missing image, description, or title)

**Missing tags:**
- `og:image`
- `og:description`
- `og:title`

**Fix:**
Add complete Open Graph tags to all pages:
```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://nextsteptherapy.ca/images/social-share.jpg">
<meta property="og:url" content="https://nextsteptherapy.ca/page.html">
<meta property="og:type" content="website">
```

---

### Priority 6: More Redirect Issues

#### **124 × Pages Linking to Redirects**
**Impact:** 124 internal links point to redirect URLs instead of final destinations = extra redirect hops

**Example:**
Instead of linking to `/page.html`, pages link to `/page` which redirects

**Fix:**
Update internal links to point directly to `.html` pages

---

### Priority 7: Meta Descriptions & Titles

#### **39 × Meta Descriptions Too Long**
**Impact:** Google truncates descriptions in search results

**Current:** >160 characters
**Should be:** 150-160 characters max

**Fix:**
Shorten meta descriptions to fit Google's display

---

#### **28 × Titles Too Long**
**Impact:** Google truncates titles in search results

**Current:** >60 characters
**Should be:** 50-60 characters max

**Fix:**
Shorten title tags to fit Google's display

---

## ℹ️  LOWER PRIORITY NOTICES (Fix When Possible)

### Priority 8: Schema Validation

#### **142 × Schema.org Validation Errors**
**Impact:** Rich snippets might not display properly

**Common errors:**
- Missing required properties
- Wrong data types
- Invalid URLs in schema

**Fix:**
Run pages through Google's Rich Results Test and fix schema markup

---

#### **34 × Google Rich Results Validation Errors**
**Impact:** Won't qualify for rich results in Google

**Fix:**
Similar to above - fix schema markup

---

### Priority 9: Social Media

#### **55 × Missing Twitter Card Tags**
**Impact:** Shares on Twitter/X look plain (no image preview)

**Fix:**
Add Twitter Card tags:
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Description">
<meta name="twitter:image" content="https://nextsteptherapy.ca/images/social-share.jpg">
```

---

### Priority 10: External Link Issues

#### **52 × External 404 Links**
**Impact:** Links to other sites that return 404s = poor UX

**Example:**
Linking to external resources that no longer exist

**Fix:**
1. Remove dead external links
2. OR replace with working alternatives
3. OR use archive.org link

---

### Priority 11: IndexNow

#### **482 × Pages to Submit to IndexNow**
**Impact:** These pages could be indexed faster with IndexNow

**What is IndexNow?**
Microsoft/Bing's instant indexing API (like Google's old Submit URL tool)

**Fix:**
Submit sitemap to IndexNow API for faster Bing indexing

**Priority:** LOW (We care more about Google than Bing)

---

## 📋 ACTION PLAN BY TIMEFRAME

### **TODAY (Nov 3) - Emergency Fixes**

**Goal:** Fix the critical broken links hurting user experience

1. **Identify 404 pages that should exist**
   ```bash
   # Check which 404s are real missing pages
   # Create pages OR add redirects
   ```

2. **Fix broken internal links**
   - Update links pointing to 404s
   - Add `.html` to links missing it

3. **Fix broken images**
   - Find and replace broken img src paths

**Estimated Time:** 2-3 hours

---

### **THIS WEEK (Nov 3-8) - Core SEO Fixes**

**Goal:** Fix issues hurting Google indexing

1. **Clean up sitemap.xml**
   - Remove 404 pages
   - Remove redirect URLs
   - Only include final `.html` URLs

2. **Fix remaining redirect chains**
   - Flatten any remaining multi-hop redirects

3. **Fix canonical → redirect issues**
   - Update canonical tags to point to final URLs

4. **Add missing canonical tags**
   - Fix 2 duplicate page sets

**Estimated Time:** 4-6 hours

---

### **STARTING DEC 1 (After Stability Period) - Enhancement Fixes**

**Goal:** Improve social sharing & rich results

1. **Fix Open Graph tags** (354 + 217 = 571 pages)
   - Update og:url to match canonical
   - Add complete OG tag sets
   - Create social share image if needed

2. **Add Twitter Cards** (55 pages)
   - Add twitter:card meta tags

3. **Fix schema markup** (142 + 34 = 176 pages)
   - Run through Rich Results Test
   - Fix validation errors

4. **Optimize meta descriptions & titles** (39 + 28 = 67 pages)
   - Shorten long descriptions
   - Shorten long titles

**Estimated Time:** 10-15 hours over several weeks

---

### **DEFER / LOW PRIORITY**

1. **IndexNow submission** (482 pages)
   - Only matters for Bing
   - Low ROI for therapy practice

2. **External 404 cleanup** (52 links)
   - Nice to have, not critical
   - Fix during content reviews

---

## 🛠️  TECHNICAL FIX SCRIPTS

### Fix 1: Find All 404 URLs
```bash
# Extract 404 URLs from Ahrefs audit
# Check if they should redirect or be created
```

### Fix 2: Update Sitemap
```bash
# Remove redirect URLs from sitemap
# Remove 404 URLs from sitemap
# Ensure all URLs end in .html
```

### Fix 3: Batch Fix Open Graph
```bash
# For each HTML file:
# - Update og:url to match canonical
# - Add missing og:image, og:description, og:title
```

### Fix 4: Batch Fix Twitter Cards
```bash
# For each HTML file:
# - Add twitter:card meta tags
```

---

## 📊 COMPARISON WITH GSC ERRORS

**Interesting overlap:**

| Issue | Ahrefs | GSC (Nov 2) | Status |
|-------|--------|-------------|--------|
| 404 pages | 37 | ~92 (backup files) | ✅ GSC 92 fixed yesterday |
| Redirect chains | 11 | 10+ | ✅ Fixed 22 yesterday, 11 remain |
| Pages in sitemap with issues | 32 | Unknown | ⏳ Need to fix |
| Orphan pages | 21 | N/A | ⏳ New finding |

**Key insight:**
Ahrefs found issues GSC didn't catch (orphan pages, OG tags, schema errors)

---

## 🎯 RECOMMENDED PRIORITY

### **Fix This Week (Before Dec 1):**
1. ✅ 37 × 404 pages - CREATE PAGES OR REDIRECTS
2. ✅ 50 × Broken internal links - FIX LINKS
3. ✅ 23 × Redirects in sitemap - CLEAN SITEMAP
4. ✅ 21 × Orphan pages - ADD INTERNAL LINKS
5. ✅ 11 × Broken redirects - FLATTEN CHAINS
6. ✅ 7 × Broken images - FIX IMG PATHS
7. ✅ 7 × 404s in sitemap - REMOVE FROM SITEMAP
8. ✅ 6 × Canonical → redirect - UPDATE CANONICALS
9. ✅ 2 × Missing canonicals - ADD CANONICAL TAGS

**Total:** ~164 critical issues to fix this week

---

### **Fix After Dec 1 (Enhancement):**
1. ⏳ 571 × Open Graph issues
2. ⏳ 176 × Schema errors
3. ⏳ 124 × Internal links to redirects
4. ⏳ 67 × Long meta descriptions/titles
5. ⏳ 55 × Missing Twitter cards

**Total:** ~993 enhancement issues for later

---

## 🚨 WHY SO MANY ISSUES?

**Root causes:**

1. **Vercel cleanUrls feature**
   - Creates duplicate URLs (with/without .html)
   - Causes redirect issues
   - Canonical tag confusion

2. **Recent site changes**
   - We just fixed 22 redirect chains yesterday
   - Some broken links still referencing old URLs

3. **Missing page maintenance**
   - Created pages but didn't add to navigation
   - Orphan pages with no internal links

4. **Incomplete social/schema setup**
   - Open Graph tags not fully implemented
   - Schema markup has validation errors

5. **Sitemap not updated**
   - Still includes redirect URLs
   - Still includes 404 URLs

---

## 💡 THE SILVER LINING

**What this audit caught that we NEED to fix:**

1. **404 pages** - These hurt conversions (users can't find pages)
2. **Broken images** - Poor quality signals to Google
3. **Orphan pages** - Wasted content that could drive traffic
4. **Sitemap issues** - Confusing Google's crawler

**What's just "nice to have":**

1. Open Graph tags - Only affects social shares
2. Twitter cards - Low priority for therapy practice
3. IndexNow - Bing isn't main traffic source
4. Long meta descriptions - Google truncates but still ranks

---

## 📝 NEXT STEPS

**I'll create fix scripts for:**

1. Batch redirect creation for 404s
2. Sitemap cleanup
3. Internal link finder/fixer
4. Open Graph tag generator

**Then we can:**
- Fix critical issues this week
- Monitor GSC errors clearing
- Start enhancements Dec 1+

---

**Want me to start on any specific category first?**

Most urgent:
1. Fix 404 pages (37 URLs returning errors)
2. Fix broken internal links (50 pages linking to 404s)
3. Clean sitemap (remove redirects + 404s)

These directly hurt user experience and SEO right now.
