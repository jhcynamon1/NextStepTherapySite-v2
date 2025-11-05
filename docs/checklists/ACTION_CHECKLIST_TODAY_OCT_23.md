# ✅ Action Checklist - Do This Today (Oct 23)
## 30-Minute Post-Sprint Tasks

---

## 🚀 TASK 1: Submit 5 URLs to Google Search Console (15 min)

**Go to:** https://search.google.com/search-console

**Steps:**
1. Click "URL Inspection" in left sidebar
2. For each URL below:
   - Paste the full URL
   - Click "Test Live URL"
   - Click "Request Indexing"
   - Wait for confirmation ("Indexing requested")

**URLs to Submit:**
```
https://nextsteptherapy.ca/index.html
https://nextsteptherapy.ca/anxiety-therapy-burlington.html
https://nextsteptherapy.ca/online-therapy-burlington.html
https://nextsteptherapy.ca/anxiety-therapy-ontario.html
https://nextsteptherapy.ca/virtual-therapy-ontario.html
```

**Expected:** Each should show "Indexing requested" confirmation

✅ **Done? Check here:** [ ]

---

## 🗺️ TASK 2: Resubmit Sitemap to GSC (2 min)

**Go to:** https://search.google.com/search-console

**Steps:**
1. Click "Sitemaps" in left sidebar
2. If old sitemap exists, remove it
3. Enter: `sitemap.xml`
4. Click "Submit"
5. Wait for "Success" message

**Expected:** "Sitemap submitted successfully"

✅ **Done? Check here:** [ ]

---

## 🔀 TASK 3: Test 5 Sample Redirects (5 min)

**Open these URLs in your browser:**
```
https://nextsteptherapy.ca/anxiety-therapy-ontario
https://nextsteptherapy.ca/virtual-therapy-ontario
https://nextsteptherapy.ca/depression-therapy-ontario
https://nextsteptherapy.ca/how-to-find-therapist-ontario
https://nextsteptherapy.ca/workplace-stress-therapy-ontario
```

**Expected Result for Each:**
- Browser shows: `https://nextsteptherapy.ca/[page-name].html`
- Address bar should have `.html` at the end

**If redirect fails:**
- Wait 10 minutes (DNS propagation)
- Try again
- If still broken, run: `vercel --prod --force --yes`

✅ **All 5 redirects working? Check here:** [ ]

---

## ✅ TASK 4: Validate Schema Markup (5 min)

**Go to:** https://validator.schema.org/

**Test URL 1 - Homepage:**
1. Enter: `https://nextsteptherapy.ca/`
2. Click "Run Test"
3. Expected: **0 ERRORS, 0 WARNINGS**
4. Should show: WebSite, Person, ProfessionalService, FAQPage schemas

✅ **Homepage valid? Check here:** [ ]

**Test URL 2 - Burlington Anxiety Page:**
1. Enter: `https://nextsteptherapy.ca/anxiety-therapy-burlington.html`
2. Click "Run Test"
3. Expected: **0 ERRORS, 0 WARNINGS**
4. Should show: FAQPage schema with 6 questions

✅ **Burlington page valid? Check here:** [ ]

---

## 📊 TASK 5: Capture Baseline Metrics (3 min)

**Go to:** https://search.google.com/search-console → Performance

**Set Date Range:** Last 28 days

**Write Down These Numbers:**
```
Date Range: Oct __ to Oct __

Total Clicks: _______
Total Impressions: _______
Average CTR: _______%
Average Position: _______

Top Keywords (positions):
- "anxiety therapy burlington": Position ___
- "how to find therapist ontario": Position ___
- "anxiety therapy ontario": Position ___
```

**Save This Info!** You'll compare it in 14 days and 30 days.

✅ **Baseline captured? Check here:** [ ]

---

## 🎯 WHAT HAPPENS NEXT?

### **Week 1 (Oct 23-30):**
- Nothing! Google is processing your changes.
- Check GSC once on Oct 30 (Day 7) to see if pages recrawled.

### **Week 2 (Oct 31 - Nov 6):**
- Quick check: Any position changes? Impression increases?
- Expected: Early signals (1-3 position improvements)

### **Week 3-4 (Nov 7-20):**
- MEASURE: Compare baseline to current
- Expected: +10-15% traffic increase

### **Week 5+ (Nov 21+):**
- DECIDE: If traffic up, do Phase 2 (internal linking, new pages)
- If flat, investigate why

---

## ❌ WHAT NOT TO DO

- ❌ Don't add more pages this week
- ❌ Don't change existing pages
- ❌ Don't resubmit URLs multiple times
- ❌ Don't resubmit sitemap again (once is enough)
- ❌ Don't second-guess your work

**Relax and let Google do its thing!**

---

## 📅 SET A REMINDER

**Nov 6 (14 days):** Check GSC Performance - compare to baseline

**Nov 20 (30 days):** Full review - decide on Phase 2

---

## ✅ COMPLETION CHECKLIST

- [ ] Task 1: Submitted 5 URLs to GSC (15 min)
- [ ] Task 2: Resubmitted sitemap to GSC (2 min)
- [ ] Task 3: Tested 5 redirects - all working (5 min)
- [ ] Task 4: Validated schema - 0 errors (5 min)
- [ ] Task 5: Captured baseline metrics (3 min)

**Total Time:** 30 minutes

---

## 🎉 WHEN YOU'RE DONE

**You've completed:**
- Days 1-5 SEO sprint (9 hours)
- GSC submissions (30 minutes)
- **Total: 9.5 hours of high-impact SEO work**

**Now wait 14 days and measure the impact!**

---

*Created: October 23, 2025*
*Reference: NEXT_STEPS_RECOMMENDATION_OCT_23.md for full reasoning*
