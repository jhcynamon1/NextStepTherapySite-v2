# Ahrefs Critical Issues - Detailed Analysis | November 3, 2025

## 🚨 IMMEDIATE ACTION REQUIRED

### Issue #1: High-PR 404 Pages (CRITICAL)

These URLs have **PR 31** (high PageRank) but return 404 errors:

#### **https://nextsteptherapy.ca/mens-mental-health**
- **Problem:** 404 error
- **Impact:** 3 internal links pointing to broken page
- **PageRank:** 31 (HIGH)
- **Solution:** Create redirect in `vercel.json`:
  ```json
  { "source": "/mens-mental-health", "destination": "/mens-mental-health.html", "permanent": true }
  ```
- **OR:** Check if this page should exist as a real page

---

#### **https://nextsteptherapy.ca/counselling-services**
- **Problem:** 404 error
- **Impact:** 2 internal links pointing to broken page
- **PageRank:** 31 (HIGH)
- **Solution:** Add redirect to homepage or create page:
  ```json
  { "source": "/counselling-services", "destination": "/", "permanent": true }
  ```

---

### Issue #2: Orphan Pages (21 pages with NO internal links)

These pages exist but are **INVISIBLE** - nothing links to them!

#### **High-Value Orphan Pages:**

1. **https://nextsteptherapy.ca/cbt-therapy-toronto.html**
   - Title: "CBT Therapy Toronto | Cognitive Behavioral Therapist CRPO"
   - **This is a valuable service page!**
   - **Fix:** Add to main navigation + link from anxiety/depression pages

2. **https://nextsteptherapy.ca/imposter-syndrome-therapy-professionals-toronto.html**
   - Title: "Imposter Syndrome Therapy Toronto"
   - **Related to your conversion keyword "demanding work roles"!**
   - **Fix:** Link from workplace-stress-burnout-therapy.html

3. **https://nextsteptherapy.ca/first-job-anxiety-therapy-toronto.html**
   - Title: "First Job Anxiety Therapy Toronto"
   - **New grad professionals = your target audience!**
   - **Fix:** Link from career-anxiety page + professionals section

4. **https://nextsteptherapy.ca/mens-mental-health.html**
   - Title: "Men's Mental Health Therapy Ontario"
   - **PAGE EXISTS but nothing links to it**
   - **Also appears as 404 at /mens-mental-health (without .html)**
   - **Fix:**
     - Add redirect: `/mens-mental-health` → `/mens-mental-health.html`
     - Add to main navigation
     - Link from homepage

5. **https://nextsteptherapy.ca/depression-therapy-mississauga.html**
   - **Location-specific page** (Mississauga is big market)
   - **Fix:** Add to location pages section

6. **https://nextsteptherapy.ca/grief-counselling-toronto.html**
   - **Fix:** Add to services navigation

7. **https://nextsteptherapy.ca/addiction-therapy-toronto.html**
   - **Fix:** Add to services navigation

8. **https://nextsteptherapy.ca/anger-management-toronto.html**
   - **Fix:** Add to services navigation

9. **https://nextsteptherapy.ca/adhd-therapy-toronto.html**
   - **Fix:** Add to services navigation

10. **https://nextsteptherapy.ca/marriage-counselling-toronto.html**
    - **Fix:** Add to services navigation

11. **https://nextsteptherapy.ca/online-therapy-toronto.html**
    - **Fix:** Link from virtual-therapy-ontario.html

12. **https://nextsteptherapy.ca/workplace-stress-therapy-ottawa.html**
    - **Location page for Ottawa**
    - **Fix:** Add to location pages section

13. **https://nextsteptherapy.ca/queens-university-student-therapy.html**
    - **Student mental health page**
    - **Fix:** Link from student mental health pages

14. **https://nextsteptherapy.ca/online-therapy-depression-ontario.html**
    - **Fix:** Link from depression + virtual therapy pages

---

#### **Lower Priority Orphan Pages:**

15. **https://nextsteptherapy.ca/anxiety-therapy-toronto-rent-rank.html**
    - Looks like a test/SEO page
    - **Action:** Consider deleting or adding noindex

---

### Issue #3: Missing Pages That Should Exist

These URLs are linked from multiple pages but don't exist:

#### **https://nextsteptherapy.ca/privacy-policy.html** (6 inlinks!)
- **Problem:** Footer links to this but it 404s
- **Solution:** Create privacy policy page OR redirect to /

#### **https://nextsteptherapy.ca/faq** (3 inlinks)
- **Problem:** Links to /faq (no .html) but only /faq.html exists
- **Solution:** Add redirect:
  ```json
  { "source": "/faq", "destination": "/faq.html", "permanent": true }
  ```

#### **https://nextsteptherapy.ca/marriage-counselling-toronto** (4 inlinks)
- **Problem:** Links point to version WITHOUT .html
- **Page exists:** marriage-counselling-toronto.html
- **Solution:** Add redirect:
  ```json
  { "source": "/marriage-counselling-toronto", "destination": "/marriage-counselling-toronto.html", "permanent": true }
  ```

#### **https://nextsteptherapy.ca/privacy** (3 inlinks)
- **Solution:** Redirect to privacy policy page (once created)

#### **https://nextsteptherapy.ca/cbt-therapy-toronto** (3 inlinks)
- **Page exists:** cbt-therapy-toronto.html
- **Solution:** Add redirect:
  ```json
  { "source": "/cbt-therapy-toronto", "destination": "/cbt-therapy-toronto.html", "permanent": true }
  ```

#### **https://nextsteptherapy.ca/counselling-kitchener** (1 inlink)
- **Page exists:** counselling-kitchener.html
- **Solution:** Add redirect:
  ```json
  { "source": "/counselling-kitchener", "destination": "/counselling-kitchener.html", "permanent": true }
  ```

#### **https://nextsteptherapy.ca/about-jesse-cynamon** (1 inlink)
- **Solution:** Create about page OR redirect to homepage #about section

---

#### **/professionals/ Directory 404s:**

These URLs don't exist but are linked:

1. **https://nextsteptherapy.ca/professionals/workplace-burnout-therapy**
2. **https://nextsteptherapy.ca/professionals/performance-anxiety**

**Current redirects send:**
- `/performance-anxiety.html` → `/professionals/performance-anxiety`
- `/work-anxiety-and-stress.html` → `/professionals/workplace-stress`

**But these /professionals/ URLs return 404!**

**Solution:** Either:
- A) Create actual pages in /professionals/ directory
- B) Reverse the redirects:
  ```json
  { "source": "/professionals/performance-anxiety", "destination": "/performance-anxiety-therapy-ontario.html", "permanent": true }
  { "source": "/professionals/workplace-stress", "destination": "/workplace-stress-burnout-therapy.html", "permanent": true }
  ```

---

#### **/students/ Directory 404s:**

Similar issue - these /students/ URLs don't exist:

1. **https://nextsteptherapy.ca/students/university-anxiety** (2 inlinks)
2. **https://nextsteptherapy.ca/students/student-mental-health-london**
3. **https://nextsteptherapy.ca/students/student-mental-health-ottawa**
4. **https://nextsteptherapy.ca/students/first-year-anxiety** (1 inlink)
5. **https://nextsteptherapy.ca/students/student-mental-health-hamilton**
6. **https://nextsteptherapy.ca/students/student-mental-health-waterloo**
7. **https://nextsteptherapy.ca/students/student-mental-health-kingston**
8. **https://nextsteptherapy.ca/students/social-anxiety** (2 inlinks)
9. **https://nextsteptherapy.ca/students/failing-university-anxiety** (2 inlinks)

**Current redirects send TO these URLs, but they don't exist!**

**Solution:** Either:
- A) Create /students/ directory with these pages
- B) Fix redirects to point to actual .html pages in root

---

#### **/blog/ Directory 404s:**

1. **https://nextsteptherapy.ca/blog/mental-health-guides** (2 inlinks)
2. **https://nextsteptherapy.ca/blog/mental-health-guides/extended-health-benefits-ontario.html** (1 inlink)
3. **https://nextsteptherapy.ca/blog/mental-health-guides/is-therapy-free-canada.html** (1 inlink)
4. **https://nextsteptherapy.ca/blog/ontario/therapy-covered-by-ohip.html** (1 inlink)

**These blog pages don't exist but are linked from other pages**

**Solution:** Either create these blog posts OR remove links

---

### Issue #4: Broken Images (7 pages)

These pages have broken <img> tags:

**Need to check which images are broken and fix paths**

---

### Issue #5: Redirects in Sitemap (23 URLs)

Sitemap includes redirect URLs instead of final destinations.

**Examples that should NOT be in sitemap:**
- `/virtual-therapy-ontario` (redirects to .html)
- `/anxiety-therapy-ontario` (redirects to .html)
- `/performance-anxiety` (redirects to /professionals/)

**Only .html final URLs should be in sitemap**

---

### Issue #6: 4XX Pages in Sitemap (7 URLs)

Sitemap tells Google to index 404 pages!

**These need to be removed from sitemap**

---

## 🎯 IMMEDIATE FIX PRIORITY

### **TODAY (Fix in next 2 hours):**

1. **Add missing redirects to vercel.json:**
   ```json
   // High-PR 404s
   { "source": "/mens-mental-health", "destination": "/mens-mental-health.html", "permanent": true },
   { "source": "/counselling-services", "destination": "/", "permanent": true },

   // Common 404s
   { "source": "/faq", "destination": "/faq.html", "permanent": true },
   { "source": "/marriage-counselling-toronto", "destination": "/marriage-counselling-toronto.html", "permanent": true },
   { "source": "/cbt-therapy-toronto", "destination": "/cbt-therapy-toronto.html", "permanent": true },
   { "source": "/counselling-kitchener", "destination": "/counselling-kitchener.html", "permanent": true },

   // /professionals/ fix
   { "source": "/professionals/performance-anxiety", "destination": "/performance-anxiety-therapy-ontario.html", "permanent": true },
   { "source": "/professionals/workplace-stress", "destination": "/workplace-stress-burnout-therapy.html", "permanent": true },
   { "source": "/professionals/workplace-burnout-therapy", "destination": "/workplace-stress-burnout-therapy.html", "permanent": true },

   // /students/ fix
   { "source": "/students/university-anxiety", "destination": "/university-anxiety-therapy-ontario.html", "permanent": true },
   { "source": "/students/first-year-anxiety", "destination": "/first-year-university-anxiety.html", "permanent": true },
   { "source": "/students/social-anxiety", "destination": "/social-anxiety-university.html", "permanent": true },
   { "source": "/students/failing-university-anxiety", "destination": "/failing-university-anxiety.html", "permanent": true },
   ```

2. **Deploy redirect fixes:**
   ```bash
   git add vercel.json
   git commit -m "Fix 404 redirects from Ahrefs audit"
   git push && vercel --prod --yes
   ```

---

### **THIS WEEK (Nov 3-8):**

1. **Add internal links to 21 orphan pages**
   - Add CBT therapy to main navigation
   - Add men's mental health to homepage
   - Add imposter syndrome to workplace stress page
   - Add service pages to navigation

2. **Create missing essential pages:**
   - Privacy policy page
   - About Jesse Cynamon page (or redirect to homepage #about)

3. **Clean sitemap.xml:**
   - Remove redirect URLs
   - Remove 404 URLs
   - Only include final .html pages

4. **Fix broken images:**
   - Find broken img src paths
   - Replace or remove

---

### **AFTER DEC 1:**

1. Fix Open Graph tags (571 pages)
2. Fix schema errors (176 pages)
3. Add Twitter cards (55 pages)
4. Shorten long meta descriptions (39 pages)
5. Shorten long titles (28 pages)

---

## 💡 KEY INSIGHTS

### **Why So Many Orphan Pages?**

You have **21 valuable service pages that exist but aren't linked from anywhere!**

These include:
- CBT Therapy Toronto
- Men's Mental Health
- Imposter Syndrome Therapy
- First Job Anxiety
- Depression Mississauga
- Grief Counselling
- Addiction Therapy
- Anger Management
- ADHD Therapy
- Marriage Counselling
- Online Therapy Toronto
- Workplace Stress Ottawa
- Queen's University Student Therapy

**These are good pages being wasted because they're not in your navigation!**

---

### **The /professionals/ and /students/ Problem**

Your redirects point TO directories that don't exist:

**Current setup:**
```json
// This sends users to 404!
{ "source": "/performance-anxiety.html", "destination": "/professionals/performance-anxiety" }
```

**But `/professionals/performance-anxiety` doesn't exist!**

**Fix:** Either:
1. Create those directory pages
2. OR reverse the redirects to point to actual .html files

---

### **Root Cause: Missing .html in Links**

Many 404s are because internal links don't include `.html`:

**Wrong:**
```html
<a href="/cbt-therapy-toronto">CBT Therapy</a>
```

**Right:**
```html
<a href="/cbt-therapy-toronto.html">CBT Therapy</a>
```

OR add redirect for the version without .html

---

## 📋 NEXT STEPS

**Want me to:**

1. ✅ Create the redirect fixes in vercel.json?
2. ✅ Add internal links to orphan pages?
3. ✅ Clean the sitemap?
4. ✅ Fix broken image paths?
5. ✅ Create privacy policy page?

**Which should I tackle first?**

My recommendation:
1. Fix redirects (15 min)
2. Add links to orphan service pages (30 min)
3. Clean sitemap (15 min)

That fixes the most critical user-facing issues today.
