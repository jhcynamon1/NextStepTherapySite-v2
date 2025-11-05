# 🚀 Execution Guide: Perplexity → Firecrawl → Optimization

**Goal:** Use Perplexity Deep Research to identify which competitor pages to Firecrawl, then implement learnings to dominate Ontario therapy SEO.

---

## ✅ STEP 1: Run Perplexity Deep Research (5-10 minutes)

### What to Do:
1. Open Perplexity.ai
2. Start a **Deep Research** session (not regular chat!)
3. Copy the ENTIRE contents of: `PERPLEXITY_COMPETITOR_FIRECRAWL_STRATEGY_PROMPT.md`
4. Paste into Perplexity Deep Research
5. Hit enter and **wait 5-10 minutes** while it researches

### What Perplexity Will Deliver:
- ✅ Top 3-5 competitor URLs per keyword cluster (15-25 total URLs)
- ✅ Pattern analysis (word count, FAQ quantity, schema types)
- ✅ Firecrawl priority plan (MUST scrape vs SHOULD scrape vs NICE TO scrape)
- ✅ Page optimization priority ranking (which of our 5 pages to optimize first)
- ✅ Specific recommendations per page
- ✅ Revenue potential estimates
- ✅ **Ultimate Answer:** Which 5 pages to Firecrawl for maximum ROI

### Save the Results:
- Copy Perplexity's full response
- Save as: `PERPLEXITY_RESULTS_COMPETITOR_ANALYSIS.md`
- Review carefully before proceeding

---

## ✅ STEP 2: Create Firecrawl Execution Plan (30 minutes)

### Based on Perplexity Results:

#### A. Extract Priority URLs:
From Perplexity's research, create a prioritized list:

**TIER 1: MUST SCRAPE (3-5 pages)**
Example format:
```
1. [URL] - Reason: Ranks #1 for "counselling ontario", 2,200 words, 15 FAQs
2. [URL] - Reason: Ranks #2 for "anxiety therapy burlington", Burlington-specific content
3. [URL] - Reason: Ranks #1 for "workplace stress ottawa", federal gov angle
...
```

**TIER 2: SHOULD SCRAPE (5-10 pages)**
```
6. [URL] - Reason: Ranks #3 for X, unique pattern Y
...
```

**TIER 3: NICE TO SCRAPE (10-15 pages)**
```
11. [URL] - Reason: Supplemental data for pattern validation
...
```

#### B. Define Extraction Goals:
For each URL to scrape, specify:
- **What to extract:** Full HTML? Schema only? FAQ questions? Internal links?
- **Why:** What pattern are we trying to identify?
- **How to use:** What will we change on our pages based on this?

---

## ✅ STEP 3: Execute Firecrawl (Using MCP Tool)

### Option A: Use Firecrawl MCP (Recommended)
```bash
# Example Firecrawl MCP command:
mcp__firecrawl__firecrawl_scrape <URL>
```

### Option B: Use Firecrawl API Directly
```bash
curl -X POST "https://api.firecrawl.dev/v0/scrape" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "COMPETITOR_URL",
    "formats": ["markdown", "html"],
    "onlyMainContent": true
  }'
```

### What to Save:
For each scraped page, save to:
```
/competitor_analysis/
  ├── counselling_ontario_rank1.md
  ├── counselling_ontario_rank2.md
  ├── anxiety_burlington_rank1.md
  ├── failing_university_rank1.md
  ├── workplace_ottawa_rank1.md
  └── remote_workers_rank1.md
```

---

## ✅ STEP 4: Analyze Scraped Pages (1-2 hours)

### Create Analysis Document:
`COMPETITOR_PATTERN_ANALYSIS.md`

#### Extract Key Patterns:

**1. Title Tag Formulas:**
```
Pattern 1: [Service] [City] | [Credential] | [USP]
Pattern 2: [Service] in [City] | [Benefit] | [Trust Signal]
...
```

**2. Content Structure:**
```
Average Word Count: 1,800 words
Common H2s:
  - What is [service]?
  - How [service] works
  - Benefits of [service]
  - Why choose us?
  - FAQ (average 12 questions)
```

**3. FAQ Analysis:**
```
Common Questions Across All Pages:
1. "How much does [service] cost?" (100% of pages)
2. "Is [service] covered by insurance?" (90% of pages)
3. "How long does [service] take?" (80% of pages)
...
```

**4. Schema Markup:**
```
Common Schema Types:
- LocalBusiness: 80% of pages
- FAQPage: 90% of pages
- MedicalBusiness: 40% of pages

Common Properties:
- areaServed: Always specified
- telephone: Always E.164 format
- priceRange: Usually "$$" or "$$$"
```

**5. Local Content Depth:**
```
Burlington-specific examples:
- "QEW commute stress affecting mental health"
- "Serving Burlington, Oakville, and Hamilton"
- "Virtual therapy - no need to drive across the QEW"
```

**6. Internal Linking:**
```
Hub-Spoke Pattern:
- Province-wide page → City pages
- Service page → Related service pages
- "Related Services" blocks: 3-5 links
- "Nearby Cities" blocks: 3-5 links
```

---

## ✅ STEP 5: Create Optimization Plan (1 hour)

### For Each of Our 5 Priority Pages:

#### counselling-ontario.html:
**Current:** Position #85, 19 imp/mo
**Strategy:** [Based on Perplexity recommendation]
**Actions:**
1. Title change: [Specific new title based on competitor pattern]
2. FAQ expansion: Add [X] questions [list specific questions]
3. Content depth: Increase to [X] words
4. Schema: Add [X] schema types
5. Internal links: Link to [X, Y, Z pages]
**Expected:** Position #30-50 in 4-6 weeks
**Revenue:** $X-Y/month

#### [Repeat for all 5 pages]

---

## ✅ STEP 6: Implement Optimizations (Prioritized)

### Week 1: Quick Wins
**Priority 1:** [Page identified by Perplexity as easiest win]
- Deploy: [Specific changes]
- Timeline: [X days]
- Expected impact: [Revenue + position change]

### Week 2: High-Impact Pages
**Priority 2:** [Page with highest revenue potential]
- Deploy: [Specific changes]
- Timeline: [X days]
- Expected impact: [Revenue + position change]

### Week 3-4: Remaining Pages
**Priority 3-5:** [Other pages]

---

## ✅ STEP 7: Monitor & Iterate (Ongoing)

### Week 1-2 Checkpoints:
- GSC position changes?
- Impression growth?
- Click improvements?
- Featured snippets appearing?

### Week 3-4 Validation:
- Pages reaching target positions?
- Revenue materializing?
- Patterns confirmed?
- Adjustments needed?

---

## 📊 SUCCESS METRICS:

### Short-term (4-6 weeks):
- [ ] All 5 pages on Page 1-3 (Position #1-30)
- [ ] Combined clicks: 40-69/month
- [ ] CTR: 3-8% average
- [ ] First consultations booked

### Medium-term (3 months):
- [ ] Combined revenue: $6,825-$13,300/month
- [ ] 50-75 featured snippets captured
- [ ] Domain authority increase
- [ ] Stable rankings

---

## 🎯 CURRENT STATUS:

✅ **COMPLETED:**
- [x] Created Perplexity research prompt
- [x] Created GSC performance context document
- [x] Created execution guide (this file)

⏸️ **NEXT STEP:** Run Perplexity Deep Research

📁 **Required Files:**
- `PERPLEXITY_COMPETITOR_FIRECRAWL_STRATEGY_PROMPT.md` ✓
- `CURRENT_GSC_PERFORMANCE_FOR_PERPLEXITY.md` ✓
- `EXECUTION_GUIDE_PERPLEXITY_TO_FIRECRAWL.md` ✓ (this file)

---

## 💡 PRO TIPS:

1. **Don't skip Perplexity Deep Research** - It's 10x better than regular Perplexity
2. **Budget Firecrawl scrapes** - Focus on top 5-10 pages, not all 25
3. **Look for patterns, not just copying** - We want to EXCEED competitors, not match them
4. **Use CRPO compliance as differentiator** - Competitors may have violations we can exploit
5. **Virtual-first is our moat** - Emphasize this advantage in all content

---

**Ready to execute? Start with STEP 1! 🚀**
