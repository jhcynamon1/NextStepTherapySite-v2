# WWW Canonical Fix - 2-Week Monitoring Guide

**Start Date:** October 15, 2025
**GSC Submission:** ✅ Complete (sitemap + 5 test pages)
**Issue:** 706 pages not indexed due to canonical-redirect mismatch

---

## 📊 Daily Monitoring Checklist (Next 14 Days)

### **What to Check Daily:**

#### 1. **URL Inspection Tool** (5 Test Pages)
Check these pages daily to track re-crawl progress:
- `https://nextsteptherapy.ca/` (homepage)
- `https://nextsteptherapy.ca/counselling-ontario.html`
- `https://nextsteptherapy.ca/depression-therapy-hamilton.html`
- `https://nextsteptherapy.ca/trauma-counselling-toronto.html`
- `https://nextsteptherapy.ca/virtual-therapy-burlington.html`

**How to check:**
1. Go to: https://search.google.com/search-console
2. Enter URL in inspection tool
3. Look for: "URL is on Google" status
4. Check: Last crawl date (should be recent)
5. Verify: Canonical URL matches actual URL (no www)

**What you want to see:**
- ✅ Status: "URL is on Google"
- ✅ User-declared canonical: `https://nextsteptherapy.ca/[page]`
- ✅ Google-selected canonical: `https://nextsteptherapy.ca/[page]`
- ✅ Last crawl: Recent date (within 7 days)

---

#### 2. **Page Indexing Report**
Track overall indexing recovery:

**How to check:**
1. GSC → Indexing → Pages
2. Look at: "Not indexed" section
3. Find: "Duplicate, Google chose different canonical than user"
4. Record the number daily

**Expected Progress:**
- **Week 1**: Number should start decreasing from 706
- **Week 2**: Significant reduction (target: under 100)
- **By Day 14**: Most pages should be indexed

---

## 📅 Monitoring Schedule

### **Week 1 (Oct 15-21, 2025)**

| Day | Date | Test Pages Status | "Duplicate canonical" Count | Notes |
|-----|------|-------------------|----------------------------|-------|
| 1   | Oct 15 | ___ / 5 indexed | 706 | Baseline |
| 2   | Oct 16 | 0 / 5 indexed (live test OK) | 347 | Live test + indexing requested for 5 sample URLs (incl. homepage); impressions spike logged |
| 3   | Oct 17 | ___ / 5 indexed | ___ | |
| 4   | Oct 18 | ___ / 5 indexed | ___ | |
| 5   | Oct 19 | ___ / 5 indexed | ___ | |
| 6   | Oct 20 | ___ / 5 indexed | ___ | |
| 7   | Oct 21 | ___ / 5 indexed | ___ | End of Week 1 |

### **Week 2 (Oct 22-28, 2025)**

| Day | Date | Test Pages Status | "Duplicate canonical" Count | Notes |
|-----|------|-------------------|----------------------------|-------|
| 8   | Oct 22 | ___ / 5 indexed | ___ | |
| 9   | Oct 23 | ___ / 5 indexed | ___ | |
| 10  | Oct 24 | ___ / 5 indexed | ___ | |
| 11  | Oct 25 | ___ / 5 indexed | ___ | |
| 12  | Oct 26 | ___ / 5 indexed | ___ | |
| 13  | Oct 27 | ___ / 5 indexed | ___ | |
| 14  | Oct 28 | ___ / 5 indexed | ___ | Final check |

---

## 🎯 Success Metrics

### **Minimum Success (by Day 14):**
- ✅ All 5 test pages indexed correctly
- ✅ "Duplicate canonical" errors reduced by 80%+ (from 706 → under 150)
- ✅ No new canonical errors appearing

### **Ideal Success (by Day 14):**
- ✅ All 5 test pages indexed
- ✅ "Duplicate canonical" errors reduced by 95%+ (from 706 → under 35)
- ✅ Impressions increasing in Performance report

---

## ⚠️ Red Flags to Watch For

### **If you see these, investigate immediately:**

1. **Test pages still showing "Duplicate canonical" after 7 days**
   - Action: Re-verify canonical tags are correct
   - Check: Server isn't adding www redirects

2. **"Duplicate canonical" count NOT decreasing after 7 days**
   - Action: Check if Googlebot can crawl site
   - Verify: No new canonical errors introduced

3. **New "Excluded" errors appearing**
   - Action: Investigate new error types in GSC
   - Verify: No other technical issues

4. **Test pages showing "Crawled - not indexed"**
   - Action: Check robots.txt isn't blocking
   - Verify: Pages have quality content

---

## 📈 Expected Timeline

| Milestone | Expected Date | What to Expect |
|-----------|--------------|----------------|
| Sitemap processed | Oct 16-17 | Sitemap appears in GSC |
| First test pages re-crawled | Oct 17-19 | 2-5 test pages indexed |
| Bulk re-crawling begins | Oct 19-22 | Error count starts dropping |
| Majority re-indexed | Oct 23-26 | 80%+ of pages fixed |
| Full recovery | Oct 26-29 | 95%+ pages indexed |

---

## 🚨 If Recovery Stalls

### **After 7 days with no progress:**

1. **Re-verify canonical tags**
   ```bash
   curl -s https://nextsteptherapy.ca/ | grep 'rel="canonical"'
   ```
   Should show: `href="https://nextsteptherapy.ca/"`

2. **Check server redirects**
   ```bash
   curl -I https://nextsteptherapy.ca/
   ```
   Should show: `Location: https://nextsteptherapy.ca/`

3. **Request indexing again** on problem pages

4. **Contact me** if issues persist

---

## 📊 Performance Tracking (Bonus)

**Optional: Track organic performance recovery**

Go to: GSC → Performance → Search Results

Compare periods:
- **Before fix:** Oct 1-14, 2025
- **After fix:** Oct 15-28, 2025

**Metrics to watch:**
- **Total clicks**: Should increase
- **Total impressions**: Should increase significantly (target: 706+ more)
- **Average position**: Should improve
- **CTR**: May fluctuate initially, then stabilize

---

## ✅ Day 1 (Today) Actions

- [x] Fixed all canonical tags (17 pages)
- [x] Verified sitemap uses non-www URLs
- [x] Fixed all internal links (15 pages)
- [x] Submitted sitemap to GSC
- [x] Requested indexing on 5 test pages
- [ ] **Tomorrow (Oct 16)**: Check URL Inspection on 5 test pages
- [ ] **Tomorrow (Oct 16)**: Record baseline "Duplicate canonical" count

---

## 📝 Quick Reference: GSC URLs

- **URL Inspection Tool**: https://search.google.com/search-console → Top search bar
- **Page Indexing Report**: https://search.google.com/search-console → Indexing → Pages
- **Sitemaps**: https://search.google.com/search-console → Indexing → Sitemaps
- **Performance**: https://search.google.com/search-console → Performance → Search Results

---

## 🎯 Your Goal: 85 → 1,000 Impressions/Day

**Current:** ~85 impressions/day
**Target:** 1,000 impressions/day (5.5 months)
**Impact of this fix:** Should add 300-500 impressions/day once pages re-index

**This fix is critical** because you need to prove market demand before hiring 2-3 therapists. Getting 706 pages indexed will significantly boost your visibility.

---

**Questions or concerns during monitoring?** Let me know immediately if you see red flags.

**Good luck with the recovery!** 🚀
