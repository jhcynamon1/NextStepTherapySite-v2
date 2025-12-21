# SEO Action Plan: Maximizing Rankings Without Backlinks

**Created:** December 21, 2025
**Status:** Ready for execution
**Estimated Impact:** Medium-High (within technical SEO limits)

---

## Executive Summary

This plan focuses on everything we can control without external backlinks:
1. Fix keyword cannibalization (pages competing against each other)
2. Expand thin content on competitive pages
3. Add PAA/featured snippet content
4. Fill schema markup gaps
5. Target low-competition keyword gaps

---

## Priority 1: Keyword Cannibalization Fixes

### Problem Identified
Multiple pages are competing for the same keywords, diluting ranking signals.

### Critical Issues Found

| Issue | Competing Pages | Impact |
|-------|-----------------|--------|
| Virtual/Online Ontario | `virtual-therapy-ontario.html` vs `virtual/online-mental-health-support-ontario.html` | HIGH |
| Online Therapy + City | `online-therapy-burlington.html` vs `anxiety-therapy-burlington.html` | HIGH |
| Anxiety + Location pattern | 7 anxiety city pages vs `anxiety-therapy-ontario.html` | MEDIUM |
| Depression + Location pattern | 6 depression city pages vs `depression-therapy-ontario.html` | MEDIUM |

### Actions Required

**Action 1.1: Consolidate Virtual/Online Pages**
- Keep: `/virtual-therapy-ontario.html` as primary
- Redirect: `/virtual/online-mental-health-support-ontario.html` → `/virtual-therapy-ontario.html`
- Redirect: `/virtual/virtual-therapy-ontario.html` → `/virtual-therapy-ontario.html`

**Action 1.2: Decide City Page Strategy**
Choose ONE format and redirect the other:
- Option A: Keep `anxiety-therapy-burlington.html`, redirect `online-therapy-burlington.html`
- Option B: Keep both but CLEARLY differentiate content/intent

**Action 1.3: Differentiate Provincial vs City Pages**
- Provincial pages (anxiety-therapy-ontario.html): Focus on "virtual across all Ontario"
- City pages: Focus on LOCAL context, community-specific challenges

### Tools to Use

| Task | Tool | Why |
|------|------|-----|
| Verify current rankings for competing pages | `/chrome` agent | Get live GSC data for each URL |
| Check which page Google prefers | `/chrome` agent | Search each keyword, note which page ranks |
| Implement redirects | Claude Code (Edit vercel.json) | Add 301 redirects |
| Update internal links | Claude Code (Grep + Edit) | Find and update all references |

---

## Priority 2: Thin Content Expansion

### Audit Needed
Identify pages under 1500 words targeting competitive keywords.

### Known High-Priority Pages to Check

| Page | Why Check |
|------|-----------|
| City-specific pages (ottawa, london, windsor, etc.) | Often thinner than main service pages |
| Student pages in /students/ | May have less depth |
| Newer pages created recently | May not have full content |

### Actions Required

**Action 2.1: Run Thin Content Audit**
```
For each service page:
1. Count words (excluding nav, footer, schema)
2. Compare to top 3 competitors for same keyword
3. Flag if significantly shorter
```

**Action 2.2: Expand Priority Pages**
Target: 2000+ words for competitive keywords, 1500+ for long-tail

### Tools to Use

| Task | Tool | Why |
|------|------|-----|
| Audit word counts | Claude Code (Explore agent) | Analyze all HTML files |
| Research competitor content depth | `/chrome` agent + Perplexity MCP | See what top rankers cover |
| Generate expansion content | `therapy-content-generator` skill | YMYL-compliant, E-E-A-T signals |
| Humanize AI content | `therapy-content-generator` (Humanize section) | Remove AI tells |

---

## Priority 3: PAA/Featured Snippet Content

### Opportunity
Featured snippets can win Position 0 even without strong domain authority.

### Target PAA Questions (from plan file)

| Question | Target Page | Priority |
|----------|-------------|----------|
| What is the 3-3-3 anxiety rule? | anxiety-therapy-ontario.html | HIGH |
| Does OHIP cover anxiety therapy? | anxiety-therapy-ontario.html, therapy-costs-ontario.html | HIGH |
| Is there free therapy in Ontario? | therapy-costs-ontario.html | HIGH |
| How much does therapy cost in Ontario? | therapy-costs-ontario.html | HIGH |
| Which type of therapy is best for anxiety? | anxiety-therapy-ontario.html | MEDIUM |

### Actions Required

**Action 3.1: Research Current PAA Boxes**
For each target keyword, document:
- What questions appear in PAA
- What format wins (paragraph, list, table)
- Current answer length

**Action 3.2: Create Optimized Answers**
Format requirements for featured snippets:
- Paragraph snippets: 40-60 words, direct answer first
- List snippets: 4-8 items, clear formatting
- Table snippets: Comparison data, clean structure

**Action 3.3: Add to Pages + Schema**
- Add to visible FAQ section
- Update FAQPage schema with new Q&As

### Tools to Use

| Task | Tool | Why |
|------|------|-----|
| Research current PAA boxes | `/chrome` agent | Search keywords, screenshot PAA |
| Research competitor PAA answers | Perplexity MCP | Quick competitive intel |
| Generate FAQ answers | `faq-schema-generator` skill | Proper schema + CRPO compliance |
| Verify schema validity | `/chrome` agent | Test in Google Rich Results Test |

---

## Priority 4: Schema Markup Gaps

### Audit Needed
Check all therapy pages for proper MedicalWebPage and FAQPage schema.

### Required Schema per Page Type

| Page Type | Required Schema |
|-----------|-----------------|
| Service pages | MedicalWebPage, FAQPage |
| City pages | MedicalWebPage, FAQPage, LocalBusiness |
| Blog posts | Article, FAQPage (if has FAQ) |

### Actions Required

**Action 4.1: Audit All Priority Pages**
Check for:
- MedicalWebPage schema present?
- FAQPage schema present?
- Author credentials (CRPO #10979) included?
- Valid JSON-LD format?

**Action 4.2: Fix Missing Schema**
Add schema to pages that lack it.

**Action 4.3: Validate All Schema**
Run through Google Rich Results Test.

### Tools to Use

| Task | Tool | Why |
|------|------|-----|
| Audit schema presence | Claude Code (Grep for "MedicalWebPage") | Find gaps quickly |
| Generate missing schema | `faq-schema-generator` skill | Proper format |
| Validate schema | `/chrome` agent | Google Rich Results Test |

---

## Priority 5: Low-Competition Keyword Gaps

### Opportunity
Target keywords competitors aren't covering well.

### Research Approach

**Step 1: Identify Gaps**
- Review existing keyword research in `/docs/seo/keywords/research/`
- Look for keywords with volume but no dedicated page

**Step 2: Validate Opportunity**
- Check current SERP for weak competitors
- Verify search intent matches our services

**Step 3: Create or Optimize Content**
- If page exists: optimize for keyword
- If no page: consider creating (only if high value)

### Potential Gap Keywords (from prior research)

| Keyword Pattern | Status |
|-----------------|--------|
| "[condition] therapy [smaller city]" | Check if pages exist |
| "therapist for [specific issue]" | May have gaps |
| "how to find therapist in Ontario" | Informational content opportunity |
| Student-specific long-tail | Check /students/ coverage |

### Tools to Use

| Task | Tool | Why |
|------|------|-----|
| Review existing keyword research | Claude Code (Read docs/seo/keywords/) | Use existing data |
| Find new keyword opportunities | `/chrome` agent + Perplexity MCP | Fresh SERP analysis |
| Validate keyword difficulty | `/chrome` agent (Ahrefs if available) | Check competition |
| Prioritize keywords | `keyword-research` skill | Priority scoring |
| Generate content | `therapy-content-generator` skill | Full page creation |

---

## Execution Order

### Phase 1: Quick Wins (1-2 days)
1. [ ] Implement redirect for duplicate virtual pages
2. [ ] Add PAA content to therapy-costs-ontario.html (already has 3K impressions)
3. [ ] Add PAA content to anxiety-therapy-ontario.html

### Phase 2: Cannibalization Fixes (2-3 days)
4. [ ] Decide on city page strategy (keep both or consolidate)
5. [ ] Implement chosen strategy with redirects
6. [ ] Update internal links to point to canonical pages

### Phase 3: Content Depth (3-5 days)
7. [ ] Run full thin content audit
8. [ ] Expand top 5 thinnest competitive pages
9. [ ] Add missing FAQ sections

### Phase 4: Technical Cleanup (1-2 days)
10. [ ] Audit all schema markup
11. [ ] Fix missing/invalid schema
12. [ ] Validate with Rich Results Test

### Phase 5: Gap Targeting (Ongoing)
13. [ ] Review keyword research docs
14. [ ] Identify 3-5 gap opportunities
15. [ ] Create/optimize content for gaps

---

## Tool Reference Guide

### When to Use Each Tool

#### `/chrome` Agent (User runs in separate window)
**Best for:**
- Live SERP analysis (what's actually ranking now)
- GSC data pulls (current performance metrics)
- Competitor page analysis (content structure, word count)
- Schema validation (Rich Results Test)
- Screenshot capture for visual audits

**Example prompts for /chrome:**
```
"Search for 'anxiety therapy ontario' and tell me:
1. What pages rank in top 5
2. What PAA questions appear
3. Which result has a featured snippet"

"Go to Google Search Console, pull the queries report
for therapy-costs-ontario.html for the last 28 days"

"Run nextsteptherapy.ca/anxiety-therapy-ontario.html
through Google Rich Results Test"
```

#### Perplexity MCP
**Best for:**
- Quick competitive intelligence
- Research questions (what do experts say about X)
- Trend identification
- Fact-checking claims before adding to content

**Example queries:**
```
"What are the most common questions people ask about
therapy costs in Ontario?"

"What topics do top-ranking anxiety therapy pages
typically cover?"

"What is the 3-3-3 rule for anxiety - give me a
concise, accurate explanation"
```

#### Claude Code Skills
**When to use each:**

| Skill | Trigger |
|-------|---------|
| `keyword-research` | Analyzing any keyword data, prioritizing targets |
| `seo-competitor-intelligence` | Before creating/expanding any page |
| `therapy-content-generator` | Writing any therapy page content |
| `faq-schema-generator` | Adding FAQ sections with schema |
| `meta-title-optimizer` | Optimizing any page title |
| `conversion-optimizer` | Writing CTAs, hero sections |
| `positioning-angles-therapy` | Deciding page positioning/angle |
| `direct-response-copy-therapy` | Persuasive copy that's CRPO-safe |

#### Claude Code Agents
**When to use each:**

| Agent | Use Case |
|-------|----------|
| `Explore` | Codebase audits (thin content, schema gaps, patterns) |
| `Plan` | Complex multi-step implementations |
| `frontend-developer` | CSS/design fixes |
| `backend-architect` | Redirect logic, vercel.json changes |

---

## Success Metrics

### Track After Implementation

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Overall CTR | 0.7% | 1.5% | 30 days |
| therapy-costs-ontario CTR | 0.3% | 2% | 30 days |
| Pages with valid schema | Unknown | 100% | 14 days |
| Featured snippets won | 0 | 2-3 | 60 days |
| Cannibalization issues | 5+ | 0 | 14 days |

### How to Measure
- GSC Performance report (weekly check)
- Rich Results Test (after schema fixes)
- Manual SERP checks for featured snippets

---

## Files to Reference

### Existing Research
- `/docs/seo/keywords/research/*.md` - Keyword research data
- `/docs/seo/SEO-COMPETITOR-RESEARCH-DEC2025.md` - Competitor analysis
- `/docs/seo/CONVERSION-AUDIT-DEC-2025.md` - Conversion optimization notes
- `/docs/seo/strategies/*.md` - Various strategy docs

### Skills Documentation
- `/.claude/skills/*/SKILL.md` - Full skill instructions

### Key Config Files
- `/vercel.json` - Redirects configuration
- `/sitemap.xml` - Sitemap for indexing

---

## Notes

- All content must be CRPO-compliant (no testimonials, no outcome guarantees)
- Always include E-E-A-T signals (author byline, CRPO #10979, last updated date)
- Test all changes on mobile before deploying
- Monitor GSC for 2-3 weeks after changes before next optimization round
