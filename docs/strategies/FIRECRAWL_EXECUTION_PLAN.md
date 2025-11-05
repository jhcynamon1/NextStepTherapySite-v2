# 🎯 Firecrawl Execution Plan - Based on Perplexity Intelligence

**Date:** October 14, 2025
**Source:** Perplexity Deep Research (80+ sources analyzed)
**Priority:** IMMEDIATE - Top 5 URLs identified for maximum ROI

---

## 🏆 TOP 5 FIRECRAWL TARGETS (In Priority Order)

### **1. https://mcdowallhealth.com/top-10-online-therapy-providers-in-ontario-2025/**
**Priority Rank:** #1
**Target For:** counselling-ontario.html optimization
**Why This Page:**
- Ranks #1 for "counselling ontario" + "online counselling ontario"
- Perfect structural template for our counselling-ontario page
- Has FAQ structure, insurance positioning, comprehensive Ontario coverage

**What to Extract:**
- ✅ Exact title tag formula
- ✅ Complete FAQ questions (all of them)
- ✅ How they structure "Top 10" lists
- ✅ Insurance coverage messaging
- ✅ Internal linking patterns
- ✅ Word count and content depth
- ✅ Schema markup (LocalBusiness + FAQPage)

**Expected Learnings:**
- Title formula: "Top 10 [Service] in Ontario (2025)" pattern
- FAQ quantity: How many questions do they have?
- Ontario-wide coverage strategy
- How to position vs competitors

**Implementation Plan:**
- Use their title formula for counselling-ontario.html
- Replicate FAQ structure (expand to 10-15 questions)
- Copy insurance coverage section approach
- Model internal linking to city pages

---

### **2. https://www.solutionfirst.ca**
**Priority Rank:** #2
**Target For:** ALL pages (conversion optimization)
**Why This Page:**
- Unique results-focused positioning
- Tracks client outcomes
- Specialist matching process
- Strong conversion messaging

**What to Extract:**
- ✅ Results-focused value propositions
- ✅ Outcome tracking language
- ✅ Specialist matching process description
- ✅ CTA placement and messaging
- ✅ Trust signals and credibility elements
- ✅ Consultation process flow

**Expected Learnings:**
- How to position "results-focused therapy"
- Client outcome messaging (without testimonials - CRPO compliant)
- Matching process that builds trust
- CTA language that converts

**Implementation Plan:**
- Add "results-focused" messaging across all pages
- Create specialist matching process description
- Update CTAs with outcome-focused language
- Add consultation process flow

---

### **3. https://www.betterhelp.com**
**Priority Rank:** #3
**Target For:** Platform positioning + trust signals
**Why This Page:**
- Massive scale player (market leader)
- Pricing transparency
- Platform features clearly explained
- Trust signals at scale

**What to Extract:**
- ✅ How they explain platform features
- ✅ Pricing presentation strategy
- ✅ Trust signals (what types, where placed)
- ✅ Mobile optimization patterns
- ✅ FAQ structure for platform questions
- ✅ How they handle therapist credentials

**Expected Learnings:**
- Platform positioning language
- Pricing transparency approach (without violating CRPO)
- Scale credibility tactics (applicable to small practice)
- Mobile-first design patterns

**Implementation Plan:**
- Add platform features section to virtual-therapy-ontario
- Create pricing transparency section (session rates, insurance)
- Add trust signals from scale tactics
- Improve mobile experience based on their patterns

---

### **4. https://www.mindbeacon.com/guided-cbt-programs**
**Priority Rank:** #4
**Target For:** Authority positioning + program structure
**Why This Page:**
- Government-backed authority
- Free therapy positioning
- CBT specialization
- Structured program presentation

**What to Extract:**
- ✅ Authority language (government backing references)
- ✅ How they structure CBT programs
- ✅ Free therapy positioning (understand competitor advantage)
- ✅ Anxiety/depression program presentation
- ✅ Schema markup for programs/services
- ✅ How they explain evidence-based approaches

**Expected Learnings:**
- Authority positioning tactics
- Program structure presentation
- How to compete with "free" (private advantages)
- Evidence-based approach messaging

**Implementation Plan:**
- Add CRPO authority positioning (professional regulation)
- Structure anxiety/depression therapy as "programs"
- Position private therapy advantages vs free options
- Add evidence-based approach explanations

---

### **5. https://pillarsofwellness.ca/service/counselling/**
**Priority Rank:** #5
**Target For:** anxiety-therapy-burlington.html optimization
**Why This Page:**
- Strong Burlington market leader
- 7 FAQs (extensive for local competitor)
- Team integration approach
- Local trust signals

**What to Extract:**
- ✅ Burlington-specific content (what local factors they mention)
- ✅ All 7 FAQ questions (exact wording)
- ✅ Team bio integration strategy
- ✅ Local trust signals (what they emphasize)
- ✅ Service description structure
- ✅ CTA placement and messaging

**Expected Learnings:**
- Burlington-specific angles (QEW, suburban factors)
- FAQ templates for anxiety therapy
- Team positioning for trust
- Local credibility building

**Implementation Plan:**
- Add Burlington-specific content to anxiety-therapy-burlington
- Expand FAQs from 12 ready-made to match their approach
- Add team bio section (Jesse + virtual therapist network)
- Local trust signals for Burlington market

---

## 🔧 FIRECRAWL EXECUTION INSTRUCTIONS

### **Method 1: Using Firecrawl MCP (Recommended)**

For each URL, run:

```bash
# Firecrawl command format:
mcp__firecrawl__firecrawl_scrape https://[URL]
```

**Save results to:**
```
/competitor_analysis/
  ├── 01_mcdowallhealth_top10_ontario.md
  ├── 02_solutionfirst_homepage.md
  ├── 03_betterhelp_homepage.md
  ├── 04_mindbeacon_cbt_programs.md
  └── 05_pillarsofwellness_counselling.md
```

### **Method 2: Direct API (If MCP Unavailable)**

```bash
# For each URL:
curl -X POST "https://api.firecrawl.dev/v0/scrape" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "TARGET_URL",
    "formats": ["markdown", "html"],
    "onlyMainContent": true,
    "waitFor": 2000
  }' > output.json
```

---

## 📊 ANALYSIS FRAMEWORK (After Scraping)

For EACH scraped page, extract:

### **1. Title Tag Analysis:**
- Exact title tag
- Pattern identified
- Keywords used
- Length (characters)

### **2. Content Structure:**
- Word count (estimated)
- H1 heading
- H2 headings (all of them)
- H3 headings (count)
- Content sections (list)

### **3. FAQ Section:**
- Number of FAQs
- Question types (preparation, cost, insurance, etc.)
- Answer length (short/medium/long)
- FAQ schema present? (yes/no)

### **4. Schema Markup:**
- Types detected (LocalBusiness, FAQPage, etc.)
- Key properties used
- How they structure it

### **5. CTA Analysis:**
- Primary CTA text
- CTA placement (header, mid-content, footer)
- How many CTAs total
- What action they request

### **6. Trust Signals:**
- Credentials mentioned
- Authority references
- Social proof elements
- Security/privacy signals

### **7. Internal Linking:**
- Links to related services
- Links to location pages
- "Related" or "Nearby" sections
- Navigation structure

---

## 🎯 EXPECTED TIMELINE

### **Today (Oct 14):**
- ✅ Firecrawl all 5 URLs (30 minutes)
- ✅ Save raw markdown/HTML (5 minutes)

### **Tomorrow (Oct 15):**
- Analyze scraped pages using framework above (2 hours)
- Create pattern summary document (1 hour)
- Identify quick wins for Week 1 (30 minutes)

### **Week 1 (Oct 14-20):**
- Implement learnings on top 2 priority pages:
  1. **online-counselling-remote-workers.html** (Position #8 → #1-3)
  2. **failing-university-anxiety.html** (Position #4.47 → #1-3)

---

## 💰 EXPECTED ROI FROM FIRECRAWL LEARNINGS

**If we implement patterns from these 5 pages across our 5 priority pages:**

### **Conservative Scenario (10% conversion):**
- anxiety-therapy-burlington: +$2,700/month
- online-counselling-remote-workers: +$1,200/month
- failing-university-anxiety: +$600/month
- workplace-stress-ottawa: +$450/month
- counselling-ontario: +$150/month
**Total: +$5,100/month = $61,200/year**

### **Optimistic Scenario (15% conversion):**
- anxiety-therapy-burlington: +$3,600/month
- online-counselling-remote-workers: +$1,600/month
- failing-university-anxiety: +$800/month
- workplace-stress-ottawa: +$600/month
- counselling-ontario: +$300/month
**Total: +$6,900/month = $82,800/year**

**ROI on Firecrawl Investment:**
- Time investment: 4 hours total
- Potential return: $61,200-$82,800/year
- **ROI: 15,000%+ annualized**

---

## 🚀 NEXT STEPS (IMMEDIATE)

1. **NOW:** Firecrawl URL #1 (McDowall Health)
2. **NEXT:** Firecrawl URLs #2-5 in order
3. **THEN:** Analyze patterns using framework
4. **FINALLY:** Create Week 1 implementation plan

---

## 🎯 SUCCESS CRITERIA

**After scraping all 5 pages, we should have:**
- ✅ 5 complete markdown files saved
- ✅ Pattern analysis document completed
- ✅ Title tag formulas extracted (3-5 patterns)
- ✅ FAQ templates identified (50+ questions total)
- ✅ Content structure blueprints (5 patterns)
- ✅ Schema markup templates (3-5 types)
- ✅ Week 1 implementation plan (2 pages optimized)

**By end of Week 1, we should see:**
- ✅ 2 pages optimized (online-counselling-remote-workers + failing-university-anxiety)
- ✅ FAQ expansion deployed (12-15 questions each)
- ✅ Title/meta updated based on competitor patterns
- ✅ First position improvements visible in GSC (7-10 days)

---

**Ready to execute? Let's Firecrawl URL #1 first! 🚀**
