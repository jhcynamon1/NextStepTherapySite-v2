# 📊 Google Search Console Submission & Monitoring Plan
## Next Step Therapy - Post-SEO Sprint

---

## 🚀 Immediate Actions (Do Today - Oct 23, 2025)

### 1. Submit Updated URLs to GSC for Re-Indexing

**How to Submit:**
1. Go to: https://search.google.com/search-console
2. Select property: nextsteptherapy.ca
3. Use "URL Inspection" tool
4. Paste URL → Click "Request Indexing"

**URLs to Submit (5 total):**

```
✅ nextsteptherapy.ca/index.html
   Reason: Schema fixes (3 iterations), internal links changed
   Priority: HIGH (homepage authority)

✅ nextsteptherapy.ca/anxiety-therapy-burlington.html
   Reason: Title/meta optimization, FAQPage schema added, canonical fixed
   Priority: HIGH (position 22, target page 1)

✅ nextsteptherapy.ca/online-therapy-burlington.html
   Reason: Title/meta optimization, canonical fixed
   Priority: MEDIUM (traffic leak page)

✅ nextsteptherapy.ca/anxiety-therapy-ontario.html
   Reason: Internal link changed
   Priority: MEDIUM (Ontario-wide traffic)

✅ nextsteptherapy.ca/virtual-therapy-ontario.html
   Reason: Internal link added
   Priority: MEDIUM (location relevance)
```

**Expected Re-Crawl Timeline:**
- High priority pages: 1-3 days
- Medium priority pages: 3-7 days
- Full re-indexing: 7-14 days

---

### 2. Test All 301 Redirects

**Test these 5 sample redirects in browser:**

```bash
# Test in browser (should show .html URL in address bar after redirect)
nextsteptherapy.ca/anxiety-therapy-ontario
nextsteptherapy.ca/virtual-therapy-ontario
nextsteptherapy.ca/depression-therapy-ontario
nextsteptherapy.ca/how-to-find-therapist-ontario
nextsteptherapy.ca/workplace-stress-therapy-ontario
```

**Expected Result:**
- Browser shows: `nextsteptherapy.ca/[page-name].html`
- HTTP status: 301 (Permanent Redirect)

**If redirects fail:**
- Check vercel.json deployed correctly
- Run: `vercel --prod --force --yes`
- Wait 5-10 minutes for DNS propagation

---

### 3. Validate Schema Markup

**Pages to Validate:**

1. **Homepage:**
   - URL: https://validator.schema.org/?url=https://nextsteptherapy.ca/
   - Expected: 0 ERRORS, 0 WARNINGS
   - Schemas: WebSite, Person, ProfessionalService, FAQPage

2. **anxiety-therapy-burlington.html:**
   - URL: https://validator.schema.org/?url=https://nextsteptherapy.ca/anxiety-therapy-burlington.html
   - Expected: 0 ERRORS, 0 WARNINGS
   - Schema: FAQPage (6 questions)

**If errors appear:**
- Copy error message
- Check JSON-LD syntax
- Re-validate after fixes

---

## 📈 Weekly Monitoring (Weeks 1-8)

### Week 1 Checklist (Oct 23-30):

- [ ] **Day 1 (Oct 23):** Submit all 5 URLs to GSC
- [ ] **Day 2 (Oct 24):** Test 5 sample redirects
- [ ] **Day 3 (Oct 25):** Validate schema on 2 pages
- [ ] **Day 7 (Oct 30):** Check GSC Coverage report
  - Look for: "Valid" status on submitted URLs
  - Look for: Decrease in "Alternate page with proper canonical" warnings

**Baseline Metrics to Capture (Oct 23):**
- [ ] Total clicks (last 28 days)
- [ ] Total impressions (last 28 days)
- [ ] Average CTR (last 28 days)
- [ ] Average position (last 28 days)
- [ ] "anxiety therapy burlington" position (currently 22)
- [ ] "how to find therapist ontario" position (currently 20)

---

### Week 2 Checklist (Oct 31 - Nov 6):

- [ ] **Check GSC Performance:**
  - Compare clicks: Oct 23-30 vs Oct 31-Nov 6
  - Watch for: Early signs of impression increases

- [ ] **Monitor Priority Keywords:**
  - "anxiety therapy burlington" (baseline: position 22)
  - "how to find therapist ontario" (baseline: position 20)
  - "anxiety therapy ontario" (baseline: position 25)

- [ ] **Check Coverage Report:**
  - "Duplicate without user-selected canonical" count (should decrease)
  - "Alternate page with proper canonical" count (should decrease)

**Expected Changes:**
- Google recognizes 301 redirects
- Canonical signals start consolidating
- No major ranking changes yet (too early)

---

### Week 3-4 Checklist (Nov 7-20):

- [ ] **Traffic Impact Check:**
  - Compare clicks: Oct 23 baseline vs Nov 7-20
  - Expected: +5-10% increase from redirect consolidation

- [ ] **Position Tracking:**
  - "anxiety therapy burlington": Position 22 → ? (target: page 1)
  - Check if any FAQs appear in featured snippets

- [ ] **Internal Link Authority Flow:**
  - Check if anxiety-therapy-burlington.html shows position improvements
  - Monitor impressions increase from homepage link

**Expected Changes:**
- Early position improvements (1-3 spots)
- Featured snippet opportunities may start appearing
- Redirect consolidation shows traffic impact

---

### Week 5-8 Checklist (Nov 21 - Dec 18):

- [ ] **Major Position Review:**
  - anxiety-therapy-burlington.html: Did it reach page 1? (positions 1-10)
  - how-to-find-therapist-ontario.html: Did it reach page 1?
  - Compare all priority pages to baseline

- [ ] **Featured Snippet Wins:**
  - Check "Appearances in Search" → "Featured snippets"
  - Document which FAQs are appearing in position 0

- [ ] **Traffic Milestone:**
  - Compare Oct 23 baseline vs Dec 18
  - Expected: +15-20% total traffic increase
  - CTR should improve from title/meta optimizations

**Expected Changes:**
- Major position improvements visible
- Featured snippets appearing
- Traffic increase plateau (15-20%)

---

## 🎯 Monthly Monitoring (Long-Term)

### Month 1 (Nov 23 Review):

**Compare Oct 23 → Nov 23:**
- [ ] Total clicks change: ____%
- [ ] Total impressions change: ____%
- [ ] Average CTR change: ____%
- [ ] Average position change: ____ spots

**Priority Pages Review:**
- [ ] anxiety-therapy-burlington.html position: ____ (baseline: 22)
- [ ] how-to-find-therapist-ontario.html position: ____ (baseline: 20)
- [ ] anxiety-therapy-ontario.html position: ____ (baseline: 25)

**Featured Snippets:**
- [ ] Count how many FAQs appear in position 0: ____
- [ ] Document URLs with featured snippets

---

### Month 2 (Dec 23 Review):

**Compare Oct 23 → Dec 23:**
- [ ] Total clicks change: ____%
- [ ] Total impressions change: ____%
- [ ] Assess if +15-20% traffic goal met

**Decisions:**
- [ ] Should we optimize more pages? (if ROI justifies)
- [ ] Should we add more internal links?
- [ ] Are there new opportunities from GSC data?

---

### Month 3-6 (Jan - Apr 2026):

**Quarterly Review:**
- [ ] Compare Oct baseline → current
- [ ] Expected: +20-25% sustained traffic increase
- [ ] Featured snippet portfolio review
- [ ] Assess need for content refresh

---

## 📊 GSC Metrics to Track

### Performance Report (Search Results):

**Primary Metrics:**
1. **Total Clicks** (goal: +20% in 90 days)
2. **Total Impressions** (goal: stable or increase)
3. **Average CTR** (goal: +0.5% from title/meta improvements)
4. **Average Position** (goal: -2 to -5 spots = better rankings)

**Filters to Use:**
- Date comparison: "Compare" last 28 days vs previous period
- Query filter: Search for "anxiety", "burlington", "ontario"
- Page filter: Filter by priority page URLs

---

### Coverage Report:

**Track These Counts:**
1. **"Valid"** pages (should stay stable ~89 pages)
2. **"Alternate page with proper canonical"** (goal: decrease by ~350+)
3. **"Duplicate without user-selected canonical"** (goal: 0)
4. **"Excluded by 'noindex' tag"** (should include qa-comprehensive pages)

**Expected Changes:**
- Week 1-2: Google processes redirects
- Week 3-4: Duplicate counts decrease significantly
- Week 5+: Clean coverage report with minimal errors

---

### Enhancements Report:

**Schema Markup:**
- [ ] Check "FAQPage" valid count (should be 2+ pages)
- [ ] Check "ProfessionalService" valid count (homepage)
- [ ] Monitor for any new errors

**Expected:**
- Homepage appears in "Valid" ProfessionalService items
- anxiety-therapy-burlington appears in "Valid" FAQPage items

---

## 🔍 Advanced Monitoring

### Featured Snippet Tracking:

**How to Check:**
1. GSC → Performance → Search Appearance
2. Filter by "Featured snippets"
3. Check which pages/queries trigger snippets

**Questions to Track:**
- "is virtual therapy effective?" (anxiety-therapy-burlington FAQ)
- "how much does therapy cost ontario?" (multiple FAQs)
- "what is act therapy?" (anxiety-therapy-burlington FAQ)

---

### Internal Link Impact:

**Pages Receiving New Links:**
- anxiety-therapy-burlington.html (4 new links from high-authority pages)

**Metrics to Watch:**
1. Impressions increase (more visibility)
2. Position improvement (better rankings)
3. Clicks increase (more traffic)

**Compare:**
- Oct 23 baseline vs 30 days later
- Expected: +10-15% increase for this specific page

---

## ⚠️ Warning Signs to Watch For

### Negative Indicators:

- [ ] **Traffic drops >10%** → Check for technical issues
- [ ] **Positions drop >5 spots** → Check if Google penalty
- [ ] **Coverage errors increase** → Check for new technical issues
- [ ] **Schema validation fails** → Fix immediately

### If Issues Arise:

1. **Check recent commits:** `git log --oneline -10`
2. **Validate live site:** Use schema.org validator
3. **Test redirects:** Ensure 301s still work
4. **Review GSC Coverage report:** Look for new errors

---

## 📝 Reporting Template

### Weekly Status Update:

```
Week [X] Update - [Date Range]

🎯 Priority Page Positions:
- anxiety-therapy-burlington: Position X (was 22)
- how-to-find-therapist-ontario: Position X (was 20)
- anxiety-therapy-ontario: Position X (was 25)

📊 Traffic Metrics:
- Clicks: X (+/- X%)
- Impressions: X (+/- X%)
- CTR: X% (+/- X%)
- Avg Position: X (+/- X spots)

⭐ Featured Snippets:
- Total snippets: X
- New this week: X

🚨 Issues:
- None / [List any issues]

📅 Next Week Action Items:
- [Action 1]
- [Action 2]
```

---

## 🎯 Success Criteria (90-Day Review)

### Primary Goals:

- [ ] **Traffic:** +20% organic clicks (Oct 23 → Jan 23)
- [ ] **Position:** anxiety-therapy-burlington on page 1 (positions 1-10)
- [ ] **Featured Snippets:** 2+ pages appearing in position 0
- [ ] **Coverage:** <10 "Alternate canonical" warnings (from 350+)
- [ ] **Schema:** 0 errors on validated pages

### Secondary Goals:

- [ ] how-to-find-therapist-ontario on page 1
- [ ] anxiety-therapy-ontario in top 15 (page 2 top)
- [ ] CTR increased by +0.5% overall
- [ ] Average position improved by -3 spots

---

## 🛠️ Tools & Resources

### Essential Links:

- **Google Search Console:** https://search.google.com/search-console
- **Schema Validator:** https://validator.schema.org/
- **Sitemap URL:** https://nextsteptherapy.ca/sitemap.xml
- **Robots.txt:** https://nextsteptherapy.ca/robots.txt

### Quick Commands:

```bash
# Re-deploy if needed
vercel --prod --force --yes

# Check git history
git log --oneline -10

# View sitemap
curl -s https://nextsteptherapy.ca/sitemap.xml | grep -o '<loc>[^<]*' | cut -d'>' -f2 | wc -l

# Test redirect
curl -I https://nextsteptherapy.ca/anxiety-therapy-ontario
```

---

*Last Updated: October 23, 2025*
*SEO Sprint: Days 1-5 Complete*
*Next Review: November 6, 2025 (Week 2 check-in)*
