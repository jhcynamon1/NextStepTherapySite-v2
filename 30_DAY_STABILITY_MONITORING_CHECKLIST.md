# 30-Day Stability Monitoring Checklist

**Period:** October 29 - November 28, 2025
**Status:** ✅ PHASE 1 COMPLETE - Site Already Configured Correctly
**Next Action Date:** December 1, 2025

---

## 🎯 The Mission

**ZERO changes to the site for 30 days.**

Your site is already configured perfectly:
- ✅ `cleanUrls: false` in vercel.json
- ✅ 301/308 redirects in place for all URLs
- ✅ Self-referential canonical tags with .html
- ✅ All technical SEO foundations solid

The 706 GSC "Not Indexed" errors are **historical duplicates** from before the cleanUrls fix. They will clear naturally as Google recrawls.

---

## 📊 Daily Monitoring (Days 1-7)

**What to Track:**
1. Open Google Search Console
2. Navigate to: Indexing → Pages → Not indexed
3. Record the count in the table below

**Expected Pattern:**
- Day 1 (Oct 29): 706 errors
- Day 3 (Oct 31): 690-700 (minor fluctuations normal)
- Day 7 (Nov 5): 650-680 (first drop expected)

### Tracking Table (Week 1):

| Date | Not Indexed Count | Change | Notes |
|------|------------------|--------|-------|
| Oct 29 | 706 | baseline | Starting point |
| Oct 30 | | | |
| Oct 31 | | | |
| Nov 1 | | | |
| Nov 2 | | | |
| Nov 3 | | | |
| Nov 4 | | | |
| Nov 5 | | | First expected drop |

---

## 📈 Weekly Monitoring (Weeks 2-4)

**What to Track:**
1. GSC "Not Indexed" count (once per week)
2. GSC total clicks (to see if recovery starting)
3. Any unusual patterns or errors

### Tracking Table (Weeks 2-4):

| Date | Not Indexed | Total Clicks | Notes |
|------|-------------|--------------|-------|
| Nov 12 | | | Expected: 500-600 errors |
| Nov 19 | | | Expected: 200-400 errors |
| Nov 26 | | | Expected: 100-200 errors |

---

## 🚫 What NOT to Do (Critical)

During the 30-day stability period:

### ❌ NEVER:
1. Change any title tags or meta descriptions
2. Add new pages or remove existing pages
3. Modify canonical tags
4. Change H1 tags or header structure
5. Update sitemap.xml
6. Deploy ANY code changes
7. Modify vercel.json configuration
8. Change internal linking structure
9. Update URL structure or redirects
10. Submit sitemap to GSC (wait until Dec 1)

### ⚠️ AVOID:
1. Making any git commits that affect HTML files
2. Testing new features on production
3. Running SEO "optimizations" you read about
4. Implementing "quick wins" from SEO tools

### ✅ OK TO DO:
1. Monitor GSC daily/weekly
2. Prepare Manus Tier 1 CTR optimizations (but don't publish)
3. Research backlink opportunities (but don't execute)
4. Plan December content calendar
5. Review competitor sites for ideas
6. Draft blog posts (but don't publish)

---

## 📅 Expected Timeline

### Week 1 (Oct 29 - Nov 5)
**What's Happening:**
- Google recrawls site with correct configuration
- Begins removing duplicate URLs from index
- You may see minor fluctuations in error count (690-710 normal)

**Expected Outcome:**
- Errors drop from 706 → 650-680 by Nov 5
- This is your first confirmation the fix is working

### Week 2 (Nov 6 - Nov 12)
**What's Happening:**
- Google accelerates duplicate removal
- More aggressive recrawling as confidence grows
- Indexing system stabilizes

**Expected Outcome:**
- Errors drop from 650-680 → 500-600 by Nov 12
- Major cleanup happening

### Week 3 (Nov 13 - Nov 19)
**What's Happening:**
- Most historical duplicates cleared
- Only stubborn duplicates remain
- Site authority stabilizing

**Expected Outcome:**
- Errors drop from 500-600 → 200-400 by Nov 19
- Nearing stable state

### Week 4 (Nov 20 - Nov 28)
**What's Happening:**
- Final cleanup of edge cases
- Google rebuilds trust in site
- Ready for Phase 2 on Dec 1

**Expected Outcome:**
- Errors drop from 200-400 → 100-200 by Nov 26
- Only legitimate issues remain (backup files, test pages)
- **30-day stability period COMPLETE**

---

## 🎯 Success Metrics

### Primary Metric: GSC "Not Indexed" Count
**Goal:** Drop from 706 → 100-200 by Nov 28

**What it means if it drops:**
✅ Google is recrawling and removing duplicates
✅ Technical fix is working
✅ Site stability being restored

**What it means if it stays at 706:**
⚠️ Google hasn't recrawled yet (give it 10-14 days)
⚠️ Possible other technical issues (investigate after 14 days)

### Secondary Metric: Total Clicks
**Current baseline:** 0-2 clicks/day (post-crash)
**Goal:** Return to 2-6 clicks/day by mid-December

**Timeline:**
- Weeks 1-4 (Oct 29 - Nov 28): Likely still 0-2 clicks/day
- Week 5-6 (Nov 29 - Dec 10): May see 1-3 clicks/day
- Week 7-8 (Dec 11 - Dec 24): Should recover to 2-6 clicks/day

### Tertiary Metric: Impressions
**Current:** Growing (250K/month)
**Goal:** Maintain or grow

**What to watch:**
- If impressions drop >20%: Investigate immediately
- If impressions grow: Great! CTR optimization will amplify this

---

## 🔍 What to Do If...

### If errors don't drop by Nov 12:
1. Check GSC for new error types
2. Verify vercel.json still has cleanUrls: false
3. Run curl tests to confirm redirects working
4. Wait 7 more days (Google can be slow)

### If traffic crashes further:
1. Check GSC for manual actions
2. Check Analytics for referral spam
3. Verify site is still live (run curl tests)
4. Check Vercel deployment logs

### If you MUST make a change:
1. Document why it's urgent
2. Make smallest possible change
3. Commit to git with detailed message
4. Deploy and verify
5. Reset 30-day counter to Day 1

---

## 📋 December 1 Launch Checklist

**On Dec 1, after 30-day stability:**

### Step 1: Verify Stability
- [ ] GSC errors dropped from 706 → 100-200 ✅
- [ ] No new error types appeared
- [ ] Site still returning 200 OK for .html URLs
- [ ] Redirects still working for non-.html URLs

### Step 2: Implement CTR Optimization Phase 2 (5 Test Pages)
- [ ] **Review PRD_CTR_OPTIMIZATION_DEC_1_2025.md** (Complete implementation guide)
- [ ] Choose Option A/B/C for each of the 5 pages:
  - [ ] virtual-therapy-ontario.html
  - [ ] anxiety-therapy-burlington.html
  - [ ] therapist-toronto.html
  - [ ] anxiety-therapy-ontario.html
  - [ ] workplace-stress-therapy-ontario.html
- [ ] Update title tags with emotional hooks
- [ ] Update meta descriptions
- [ ] Keep H1 tags unchanged (keyword focus)
- [ ] Update Open Graph tags to match
- [ ] Deploy changes
- [ ] Verify changes live (view-source check)
- [ ] Record baseline metrics from GSC (Nov 1-30)

### Step 3: GSC Resubmission
- [ ] Resubmit sitemap to GSC
- [ ] Request re-indexing for top 20 pages
- [ ] Monitor for 7 days

### Step 4: Begin Backlink Campaign
- [ ] Reach out to 5 therapy directories
- [ ] Guest post on 2 mental health blogs
- [ ] Local Ontario partnership outreach

---

## 💡 Why This Matters

**Your site has:**
- DR 2.7 (extremely low)
- History of sitemap volatility (Sept 30)
- 706 indexing errors
- 85% traffic drop

**Google sees this as:**
- Low authority site
- Unstable technical foundation
- Not trustworthy for users

**30 days of stability proves:**
- ✅ Technical issues resolved
- ✅ Site is maintained properly
- ✅ Safe to crawl more frequently
- ✅ Ready to rank better

**After 30 days:**
- Google increases crawl frequency
- Errors cleared (clean GSC)
- Trust rebuilt
- Ready for CTR optimization (Phase 2)
- Ready for backlinks (Phase 3)

---

## 🎓 Key Insights

### Manus Was Right
> "At DR 2.7, Google is less forgiving. Site stability is non-negotiable."

### The Math
- 195 actual pages
- × 2 URL versions (with/without .html) when cleanUrls was enabled
- = 390 URLs Google indexed
- 195 correct versions + 195 duplicates + some backups = 706 errors

### The Fix Was Already Done
- vercel.json already had cleanUrls: false
- 301/308 redirects already in place
- Canonical tags already correct
- Just waiting for Google to catch up

### The Timeline
- Fix implemented: Unknown (sometime before Oct 29)
- Google notices: Starting Oct 29
- Errors clear: 7-14 days (by Nov 12)
- Traffic recovers: 4-8 weeks (by mid-Dec)

---

## 📚 Related Documentation

- `MANUS_PHASE1_ALREADY_COMPLETE.md` - Full discovery writeup
- `PHASE1_DISCOVERY_CANONICAL_NOT_THE_PROBLEM.md` - Technical analysis
- `TRAFFIC_DROP_ANALYSIS_SEPT_2025.md` - Sept 30 root cause
- `MANUS_FOLLOWUP_CLEANURLS_DISCOVERY.md` - Questions asked to Manus
- `PRD_CTR_OPTIMIZATION_DEC_1_2025.md` - **Complete CTR optimization guide for Dec 1 deployment**
- `vercel.json` - Current configuration (lines 3, 6-254)

---

## 🏆 Celebration Milestones

### Milestone 1: First Drop (Nov 5)
**When:** Errors drop from 706 → 650-680
**Meaning:** Google is recrawling! Fix is working!

### Milestone 2: Major Cleanup (Nov 12)
**When:** Errors drop from 680 → 500-600
**Meaning:** Google trusts the site more, accelerating cleanup

### Milestone 3: Nearing Stable (Nov 19)
**When:** Errors drop from 600 → 200-400
**Meaning:** Most duplicates cleared, almost ready for Phase 2

### Milestone 4: Stability Complete (Nov 28)
**When:** Errors at 100-200, 30 days complete
**Meaning:** Ready to implement Manus Tier 1 CTR fixes!

### Milestone 5: Traffic Recovery (Mid-Dec)
**When:** Clicks return to 2-6/day baseline
**Meaning:** Full recovery achieved, ready to scale!

---

## ✅ Bottom Line

**Your site is configured perfectly.** No changes needed.

**The 706 errors are historical.** They'll clear naturally.

**Just wait 30 days.** Let Google rebuild trust.

**Then on Dec 1:** Implement Manus Tier 1, resubmit sitemap, start backlinks.

**Expected outcome:** Traffic back to baseline (2-6 clicks/day) by mid-December, then ready to scale to 10-20 clicks/day with CTR optimization + backlinks.

---

**START DATE:** October 29, 2025
**END DATE:** November 28, 2025
**NEXT ACTION:** December 1, 2025

**You're doing everything right. Just be patient.** ✅
