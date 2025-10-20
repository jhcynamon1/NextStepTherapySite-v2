# PRD: Organic Traffic Growth to 1,000 Impressions/Day
## Based on Dan's Restaurant Directory Case Study (Therapy Clinic Adaptation)

**Document Owner:** Jesse Cynamon, RP
**Created:** October 15, 2025
**Target Completion:** March 31, 2026 (5.5 months)
**Success Metric:** 1,000 impressions/day sustained for 7+ days

---

## Executive Summary

This PRD outlines a technical SEO and content strategy to grow Next Step Therapy from 85 impressions/day to 1,000/day in 5.5 months, based on a proven solo operator model (Dan's Canberra restaurant directory, June-October 2025).

**Key Insight from Case Study:** Dan achieved page 1 rankings and sustained traffic growth with:
- Technical SEO fixes as foundation
- Minimal content additions (10 pages/month, not 50+)
- Automated internal linking
- Search Console optimization
- $50/month overhead

**Adaptation for Therapy Clinic:**
- Skip backlink outreach (not appropriate for healthcare)
- Skip Reddit/social (CRPO compliance concerns)
- Focus on technical excellence + strategic content + internal linking
- Leverage existing Page 1 winners (3 already ranking)

---

## Problem Statement

**Current State:**
- Traffic: 85 impressions/day (down 75% from peak of 341/day)
- Peak achieved: August 29, 2025 (341 impressions/day with ~100 pages)
- Technical issues identified: 100 404 errors, 36 schema errors, 303 canonical errors, 706 pages not indexed

**Root Cause Analysis:**
1. **September 2024 Algorithm Updates (60% of problem):**
   - "Perspective" update (Sept 3) - prioritizes complete answers
   - YMYL enforcement (Sept 11) - stricter E-E-A-T
   - Core update (Sept 15) - quality signals

2. **Technical Issues (40% of problem):**
   - Schema errors reducing trust signals
   - 404 errors hurting crawl budget
   - Indexing problems preventing discovery

**Business Impact:**
- Need 1,000/day to prove market demand before hiring 2-3 therapists
- Current trajectory: 2,550 impressions/month = insufficient for group practice expansion
- Target: 30,000 impressions/month = $42K/month revenue = hiring budget

---

## Goals & Success Metrics

### Primary Goal
**1,000 impressions/day sustained for 7+ consecutive days by March 31, 2026**

### Key Results (Monthly Targets)

| Month | Impressions/Day | Total Pages | Key Activity |
|-------|----------------|-------------|--------------|
| **Nov 2025** | 150-180 | 108 | Technical recovery + GSC optimization |
| **Dec 2025** | 250-300 | 116 | Internal linking + content clustering |
| **Jan 2026** | 400-500 | 124 | Page 1 winners optimization |
| **Feb 2026** | 650-750 | 132 | Content compounding |
| **Mar 2026** | 900-1,000+ | 140 | **GOAL ACHIEVED** |

### Secondary Metrics
- **CTR improvement:** 3.5% → 5% average (industry standard)
- **Page 1 rankings:** 3 → 8-10 keywords
- **Indexed pages:** 100 → 140 (from 806 total)
- **Average position:** Top 3 keywords move from #4-6 → #1-3
- **Zero-click issue resolution:** FAQPage schema providing answers

---

## User Stories

### US-1: Technical SEO Foundation
**As a** solo therapist with limited time
**I want** automated technical SEO monitoring and fixes
**So that** Google can properly crawl, index, and rank my pages without manual intervention

**Acceptance Criteria:**
- [ ] All 100 404 errors resolved with 301 redirects
- [ ] All 36 schema errors fixed and validated
- [ ] www/non-www canonicalization verified in GSC
- [ ] All 706 non-indexed pages submitted for indexing
- [ ] Zero critical errors in GSC for 30 consecutive days

---

### US-2: Internal Linking Automation
**As a** content creator publishing 2-3 posts/month
**I want** new posts to automatically link to relevant existing pages
**So that** I build topical authority without manual link building

**Acceptance Criteria:**
- [ ] Every new blog post contains 3-5 internal links to existing pages
- [ ] Existing Page 1 winners updated with links to new supporting content
- [ ] Topic clusters visible in site architecture (university anxiety, workplace stress)
- [ ] No orphan pages (all pages linked from at least 2 other pages)
- [ ] Link equity flows to high-value conversion pages

---

### US-3: Search Console Optimization Loop
**As a** solo operator monitoring performance
**I want** weekly GSC insights delivered automatically
**So that** I can identify and fix issues before they impact traffic

**Acceptance Criteria:**
- [ ] Weekly GSC report: top queries, top pages, CTR opportunities, indexing issues
- [ ] Automated alerts for: ranking drops >5 positions, indexing errors, coverage issues
- [ ] "People Also Ask" questions captured for content ideas
- [ ] Low-hanging fruit identified (queries at position 4-10 that can be optimized)
- [ ] Performance tracking dashboard showing progress toward 1,000/day goal

---

### US-4: Minimal Content, Maximum Impact
**As a** solo therapist seeing clients full-time
**I want** to publish 2-3 strategic posts/month
**So that** I hit 1,000/day without sacrificing client work

**Acceptance Criteria:**
- [ ] Content calendar: 8 posts/month maximum (sustainable)
- [ ] Each post targets existing Page 1 winner (cluster strategy)
- [ ] 2,500-3,000 words per post (comprehensive, E-E-A-T optimized)
- [ ] FAQPage schema on every post (3-5 questions)
- [ ] CRPO compliant language (no comparative claims, guarantees)
- [ ] Published and indexed within 7 days of writing

---

### US-5: Indexing Management
**As a** website owner with 706 non-indexed pages
**I want** systematic indexing submission and monitoring
**So that** all valuable content is discoverable in search

**Acceptance Criteria:**
- [ ] Sitemap.xml updated with all pages
- [ ] Sitemap submitted to GSC
- [ ] URL Inspection Tool used to request indexing for priority pages
- [ ] Indexing status tracked weekly (target: 90%+ indexed within 60 days)
- [ ] Non-indexable pages identified and either fixed or noindexed intentionally

---

## Technical Requirements

### TR-1: WWW/Non-WWW Canonicalization
**Priority:** P0 (Critical)
**Effort:** 1 hour

**Background:** Dan's indexing crisis was caused by publishing both www and non-www versions, confusing Google.

**Implementation:**
1. Verify current canonical setup:
   ```bash
   curl -I https://nextsteptherapy.ca
   curl -I https://nextsteptherapy.ca
   ```
2. Ensure `vercel.json` or DNS enforces single version
3. Update all internal links to use canonical version
4. Set canonical tag in `<head>` of all pages:
   ```html
   <link rel="canonical" href="https://nextsteptherapy.ca/page-name">
   ```
5. Verify in GSC > Settings > Property Settings

**Success Criteria:**
- Only one version appears in GSC
- No duplicate content warnings
- All internal links use canonical version

---

### TR-2: Google Search Console Audit & Fix
**Priority:** P0 (Critical)
**Effort:** 4 hours

**Implementation Steps:**

**Week 1: Coverage Issues**
1. GSC > Indexing > Pages
2. Review "Not indexed" reasons:
   - "Discovered - currently not indexed" → Request indexing
   - "Crawled - currently not indexed" → Improve content quality/relevance
   - "Alternate page with proper canonical tag" → Verify canonical is correct
   - "Page with redirect" → Fix redirect chains
3. Fix top 10 most important non-indexed pages first

**Week 2: Experience Issues**
1. GSC > Experience > Core Web Vitals
2. Fix any LCP (Largest Contentful Paint) > 2.5s
3. Fix any CLS (Cumulative Layout Shift) > 0.1
4. Verify mobile usability (no issues)

**Week 3: Enhancement Issues**
1. GSC > Enhancements > Unparsable structured data
2. Fix all schema errors (should be done from Oct 14 fixes)
3. Validate with Schema Markup Validator

**Week 4: Manual Actions & Security**
1. GSC > Security & Manual Actions
2. Verify zero manual actions
3. Verify zero security issues

**Success Criteria:**
- Zero critical errors in GSC
- 90%+ pages indexed
- All schema valid
- Core Web Vitals: "Good" for mobile & desktop

---

### TR-3: Internal Linking System
**Priority:** P1 (High)
**Effort:** 8 hours setup + 30 min per new post

**Background:** Dan automated internal linking to build topical authority without manual work.

**Implementation:**

**Phase 1: Topic Cluster Architecture (Week 1)**

Map existing content into clusters:

**Cluster 1: University Anxiety**
- **Pillar:** university-anxiety-therapy-ontario.html
- **Supporting pages:**
  - failing-university-anxiety.html (Position #4.47) ⭐
  - homesick-university.html (Position #5.94, 18.75% CTR) ⭐⭐
  - first-year-university-anxiety.html (Position #6.03) ⭐
  - child-anxious-about-university.html
- **New blog posts cluster here**

**Cluster 2: Workplace Stress**
- **Pillar:** workplace-stress-therapy-ontario.html
- **Supporting pages:**
  - sunday-night-anxiety.html
  - work-anxiety-and-stress.html
  - perfectionism-and-burnout-therapy-toronto.html
  - mens-therapy-toronto.html (Bay Street section)
- **New blog posts cluster here**

**Cluster 3: Virtual Therapy**
- **Pillar:** virtual-therapy-ontario.html (Position #86 - NEEDS RESCUE)
- **Supporting pages:**
  - virtual-therapy-effectiveness-research.html
  - online-therapy-burlington.html
  - online-therapy-toronto.html
- **New blog posts cluster here**

**Phase 2: Internal Linking Rules (Week 2)**

Implement linking strategy:

1. **New Blog Post → Existing Pages (3-5 links per post)**
   - Link to cluster pillar page
   - Link to 1-2 related supporting pages
   - Link to 1 conversion page (services.html, contact.html)

2. **Existing Pillar Pages → New Blog Posts**
   - Update pillar page monthly with links to new supporting content
   - Add "Related Articles" section at bottom

3. **Cross-Cluster Linking**
   - Connect related concepts across clusters
   - Example: university-anxiety post → workplace-stress post about internship anxiety

**Phase 3: Automation (Week 3-4)**

Create a linking spreadsheet/script:

```
New Post Topic | Link to Pillar | Link to Support 1 | Link to Support 2 | Link to CTA
"Why Smart Students Fail" | failing-university-anxiety.html | first-year-university-anxiety.html | homesick-university.html | services.html
"Grade Anxiety" | failing-university-anxiety.html | first-year-university-anxiety.html | virtual-therapy-ontario.html | contact.html
```

**Success Criteria:**
- Every page has 3-10 internal links
- Topic clusters visible in site architecture
- Page 1 winners receive 5+ internal links each
- No orphan pages

---

### TR-4: Sitemap Optimization
**Priority:** P1 (High)
**Effort:** 2 hours

**Current State:** Sitemap exists but may not include all pages or have incorrect priorities

**Implementation:**

1. **Audit Current Sitemap**
   ```bash
   curl https://nextsteptherapy.ca/sitemap.xml
   ```
   - Verify all pages included
   - Check lastmod dates are accurate
   - Review priority values (0.0-1.0)

2. **Priority Structure**
   ```xml
   1.0 - Homepage only
   0.95 - High-value service pages (therapist-toronto, anxiety-treatment-toronto)
   0.9 - Page 1 winners (failing-university, homesick-university, first-year-university)
   0.9 - New blog posts (first 30 days)
   0.8 - Supporting service pages
   0.7 - Older blog posts
   0.6 - City pages (if kept)
   ```

3. **Changefreq Guidelines**
   - Homepage: weekly
   - Service pages: weekly
   - Blog posts: monthly (after first month)
   - Static pages: yearly

4. **Submission**
   - Submit to GSC
   - Monitor "Sitemaps" report for errors
   - Resubmit after major content additions

**Success Criteria:**
- Sitemap includes all 140+ target pages
- Zero errors in GSC Sitemaps report
- All new pages appear in sitemap within 24 hours

---

### TR-5: Page Speed & Core Web Vitals
**Priority:** P2 (Medium)
**Effort:** 4 hours

**Current Issues (Assumption - verify in GSC):**
- LCP may be slow due to hero images
- CLS may occur from web fonts loading
- FID likely fine (simple HTML pages)

**Implementation:**

1. **Optimize Images**
   - Convert to WebP format
   - Add `loading="lazy"` to below-fold images
   - Add `width` and `height` attributes to prevent CLS

2. **Font Loading**
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
   ```

3. **CSS Optimization**
   - Inline critical CSS in `<head>`
   - Defer non-critical CSS
   - Minimize unused CSS

4. **JavaScript**
   - Defer non-essential JS
   - Remove unused third-party scripts

**Success Criteria:**
- LCP < 2.5s (mobile and desktop)
- CLS < 0.1
- FID < 100ms
- PageSpeed Insights score > 90 (mobile)

---

## Content Strategy

### CS-1: Minimal Content Additions (Dan's Model)
**Priority:** P0 (Critical)
**Effort:** 8-12 hours/month

**Key Insight:** Dan added only 10 pages/month and saw sustained growth. Quality > quantity.

**Monthly Content Target:**
- **November:** 8 posts (2/week)
- **December-March:** 8 posts/month (2/week)
- **Total new pages:** 40 over 5 months (not 127!)

**Content Selection Criteria:**

1. **Cluster Around Existing Winners**
   - 50% of content supports failing-university-anxiety.html (Position #4.47)
   - 25% supports homesick-university.html (18.75% CTR - highest performer)
   - 25% supports first-year-university-anxiety.html (Position #6.03)

2. **Target "People Also Ask" Questions**
   - Use GSC to find PAA questions
   - Each blog post answers 3-5 related questions
   - Include FAQPage schema for zero-click capture

3. **Fill Content Gaps**
   - Topics competitors rank for that you don't
   - User search intent not satisfied by existing pages

**Content Production Process:**

**Week 1 (Hours 1-4): Research**
- GSC: Find queries at position 4-10 (low-hanging fruit)
- Ahrefs: Identify related keywords with search volume
- Google: Capture "People Also Ask" questions
- Create content brief (1,500 words)

**Week 2 (Hours 5-10): Writing**
- Draft 2,500-3,000 word post
- Include 5-7 H2 headings with keywords
- Include 3-5 H3 headings for long-tail terms
- Add 3-5 internal links
- Write FAQPage schema (3-5 Q&As)

**Week 3 (Hours 11-12): Optimization**
- CRPO compliance review (no comparative claims)
- Add meta title (60 chars) and description (155 chars)
- Upload to site
- Update sitemap.xml
- Submit to GSC for indexing

**Success Criteria:**
- 8 high-quality posts published per month
- Each post indexed within 7 days
- Each post receives 5-10 impressions/day within 30 days
- Cluster strategy evident (internal links from pillar pages)

---

### CS-2: Optimize Existing Page 1 Winners
**Priority:** P0 (Critical)
**Effort:** 6 hours

**Target Pages:**

1. **homesick-university.html** (Position #5.94, 18.75% CTR)
   - **Goal:** Move to position #1-3
   - **Actions:**
     - Expand content from current length to 3,000+ words
     - Add "What to Do When Homesick at University" section
     - Add FAQPage schema (5 questions)
     - Add internal links to 3 new supporting blog posts
     - Add testimonial or case example (anonymized)
   - **Expected Impact:** +15-20 impressions/day

2. **failing-university-anxiety.html** (Position #4.47)
   - **Goal:** Move to position #1-3
   - **Actions:**
     - Add "How to Recover from Failing University" section
     - Create content cluster with 5 supporting blog posts
     - Add FAQPage schema
     - Improve E-E-A-T signals (author bio, credentials)
   - **Expected Impact:** +20-25 impressions/day

3. **first-year-university-anxiety.html** (Position #6.03)
   - **Goal:** Move to position #3-5
   - **Actions:**
     - Expand "First Week of University" section
     - Add seasonal content (August-September peak)
     - Create internal links from 3 new blog posts
     - Add schema
   - **Expected Impact:** +15-20 impressions/day

**Success Criteria:**
- All 3 pages move up 2-3 positions within 60 days
- Combined impressions from 3 pages: 120 → 200/day
- CTR maintained or improved (especially homesick-university at 18.75%)

---

### CS-3: Rescue Failing Pages
**Priority:** P2 (Medium)
**Effort:** 4 hours

**Target Page:** virtual-therapy-ontario.html (Position #86, 112 impressions/month)

**Problem Analysis:**
- Page 9 ranking = Google doesn't see it as authoritative
- Low impressions despite Ontario-wide keyword
- Likely thin content or weak E-E-A-T

**Rescue Plan:**

1. **Content Expansion (2 hours)**
   - Expand to 3,500+ words
   - Add sections:
     - "How Virtual Therapy Works in Ontario"
     - "Virtual Therapy for University Students"
     - "Virtual Therapy for Workplace Stress"
     - "Is Virtual Therapy as Effective?" (research-backed)
   - Add case examples (anonymized)

2. **Internal Linking (1 hour)**
   - Link from all new blog posts (20+ links over 5 months)
   - Add to navigation or sidebar as "How It Works"
   - Cross-link from toronto-anxiety-therapy.html

3. **Schema Enhancement (1 hour)**
   - Add FAQPage schema (10 questions)
   - Add HowTo schema for "How to Book Virtual Therapy"
   - Strengthen ProfessionalService schema

**Expected Impact:**
- Position #86 → #20-30 in 60 days (realistic for Page 9 → Page 3 jump)
- Impressions: 112/month → 300+/month

**Success Criteria:**
- Appears on Page 3 (positions 20-30) within 90 days
- Receives 10+ impressions/day consistently

---

## CRPO Compliance Requirements

### CC-1: Site-Wide Language Audit
**Priority:** P0 (Critical)
**Effort:** 3 hours

**Issue Identified:** "therapy that actually works" appears on 19 pages (violates CRPO standards - implies others' therapy doesn't work)

**Audit Process:**

1. **Search All Pages**
   ```bash
   grep -r "therapy that actually works" *.html
   grep -r "actually makes a difference" *.html
   grep -r "best therapist" *.html
   grep -r "better than" *.html
   grep -r "guaranteed results" *.html
   ```

2. **Prohibited Language (CRPO Section 7)**
   - ❌ Comparative claims: "better than," "best therapist"
   - ❌ Superlatives: "the best," "most effective"
   - ❌ Guarantees: "guaranteed results," "cure anxiety"
   - ❌ False credentials: Claiming modalities not trained in (DBT, EMDR, EFT, somatic)
   - ❌ Testimonials that imply guaranteed outcomes

3. **Approved Replacements**
   - ✅ "professional therapy support"
   - ✅ "evidence-based therapy"
   - ✅ "registered psychotherapist (CRPO #10979)"
   - ✅ "ACT therapy for anxiety"
   - ✅ "many clients experience..." (not "all" or "guaranteed")

**Implementation:**

Week 1: Fix 18 pages with compliance violations
- Use Edit tool to replace all instances
- Document changes in SEO_PROJECT_STATUS.md
- Redeploy all fixed pages

Week 2: Create compliance checklist for future content
- Add to content production process
- Review every new page before publishing

**Success Criteria:**
- Zero CRPO violations across all pages
- Compliance checklist integrated into content workflow
- Future content pre-reviewed before publishing

---

### CC-2: Credentials Display
**Priority:** P1 (High)
**Effort:** 2 hours

**Requirement:** CRPO #10979 must be prominently displayed

**Current State:** Badge in header (good)

**Enhancement:**
- Add to footer of every page
- Include in all blog post author bylines
- Add to Person schema on every page:
  ```json
  {
    "@type": "Person",
    "name": "Jesse Cynamon, RP",
    "identifier": "CRPO #10979",
    "jobTitle": "Registered Psychotherapist"
  }
  ```

**Success Criteria:**
- CRPO #10979 visible on every page (header or footer)
- Author byline on all blog posts: "By Jesse Cynamon, RP (CRPO #10979)"
- Person schema includes identifier on all pages

---

## Monitoring & Optimization Loop

### MO-1: Weekly GSC Check-In
**Priority:** P0 (Critical)
**Effort:** 30 minutes/week

**Weekly Review (Every Monday 9am):**

1. **Performance Tab (Last 28 days vs previous 28 days)**
   - Total impressions: trending up/down?
   - Average CTR: improving?
   - Average position: moving up?
   - Top queries: any new entries?

2. **Pages Tab**
   - Which pages gained/lost impressions?
   - Any pages suddenly dropping?
   - New pages getting traction?

3. **Queries Tab**
   - Identify position 4-10 queries (low-hanging fruit)
   - Check "People Also Ask" questions
   - Find new content opportunities

4. **Coverage Tab**
   - Any new errors?
   - Non-indexed pages increasing/decreasing?
   - Schema errors?

**Documentation:**
- Log findings in `GSC_WEEKLY_LOG.md`
- Flag critical issues for immediate action
- Identify content opportunities for next month

**Success Criteria:**
- Weekly check-in completed every Monday
- Critical issues resolved within 48 hours
- Low-hanging fruit queries identified and queued for content

---

### MO-2: Monthly Performance Review
**Priority:** P1 (High)
**Effort:** 2 hours/month

**First Monday of Each Month:**

1. **Traffic Analysis**
   - Current impressions/day vs target
   - Month-over-month growth %
   - Identify accelerators (what's working?)
   - Identify blockers (what's not?)

2. **Content Performance**
   - Which new posts performed well?
   - Which existing pages improved?
   - Any unexpected winners?

3. **Technical Health**
   - Indexing status (% indexed)
   - Core Web Vitals trends
   - Schema errors
   - Mobile usability

4. **Strategic Adjustments**
   - Is content strategy working?
   - Do we need to pivot focus?
   - Are monthly targets realistic?

**Documentation:**
- Update `SEO_PROJECT_STATUS.md` with monthly stats
- Adjust next month's content calendar if needed
- Celebrate wins (even small ones)

**Success Criteria:**
- Monthly review completed by 5th of each month
- Traffic trend: +15-20% month-over-month minimum
- Content strategy adjusted based on data

---

### MO-3: Quarterly Deep Dive
**Priority:** P2 (Medium)
**Effort:** 4 hours/quarter

**Quarterly Review (Dec 1, Mar 1):**

1. **Competitive Analysis**
   - Are competitors outranking you?
   - What content are they publishing?
   - Any new entrants in Ontario therapy SEO?

2. **Algorithm Updates**
   - Any Google updates in last 3 months?
   - Did your traffic spike/drop correlate with updates?
   - Need to adjust strategy?

3. **E-E-A-T Assessment**
   - Are author credentials prominent?
   - Is content demonstrating expertise?
   - Are trust signals strong?

4. **ROI Analysis**
   - Hours invested vs traffic gained
   - Is this sustainable?
   - When to hire copywriter/assistant?

**Success Criteria:**
- Quarterly deep dive completed
- Competitive landscape documented
- Strategic pivots identified if needed

---

## Success Milestones

### Milestone 1: Technical Foundation (November 15, 2025)
**Definition of Done:**
- [ ] All 100 404 errors fixed
- [ ] All 36 schema errors resolved
- [ ] WWW/non-WWW canonicalization verified
- [ ] GSC showing zero critical errors
- [ ] Sitemap updated and submitted
- [ ] Traffic recovering: 85 → 120+ impressions/day

**Celebration:** Document "before/after" in SEO_PROJECT_STATUS.md

---

### Milestone 2: Content Clusters Established (December 31, 2025)
**Definition of Done:**
- [ ] University anxiety cluster: 1 pillar + 8 supporting posts
- [ ] Workplace stress cluster: 1 pillar + 4 supporting posts
- [ ] Internal linking connects all cluster pages
- [ ] Page 1 winners updated with new internal links
- [ ] Traffic: 150 → 250+ impressions/day

**Celebration:** Share progress with accountability partner

---

### Milestone 3: Page 1 Domination (January 31, 2026)
**Definition of Done:**
- [ ] homesick-university.html in top 3 (currently #5.94)
- [ ] failing-university-anxiety.html in top 3 (currently #4.47)
- [ ] 2-3 new keywords ranking page 1
- [ ] Traffic: 250 → 450+ impressions/day

**Celebration:** Consider hiring part-time assistant for content

---

### Milestone 4: Compounding Traffic (February 28, 2026)
**Definition of Done:**
- [ ] 130+ total pages published and indexed
- [ ] 80%+ of pages receiving impressions
- [ ] Average CTR > 4%
- [ ] Traffic: 450 → 700+ impressions/day

**Celebration:** Plan group practice hiring timeline

---

### Milestone 5: GOAL ACHIEVED (March 31, 2026)
**Definition of Done:**
- [ ] 1,000 impressions/day sustained for 7+ days
- [ ] 140+ pages published and indexed
- [ ] 8-10 keywords ranking page 1
- [ ] Technical SEO health: 95%+ indexed, zero critical errors
- [ ] Sustainable workflow established (2-3 posts/month)

**Celebration:** Post case study in SEO community, begin therapist hiring

---

## Risk Management

### Risk 1: Algorithm Update Mid-Project
**Probability:** Medium (Google updates every 2-3 months)
**Impact:** High (could drop traffic 30-50%)

**Mitigation:**
- Focus on E-E-A-T signals (author credentials, expertise)
- Create comprehensive, helpful content (not keyword stuffing)
- Diversify traffic sources (not 100% reliant on one keyword)
- Monitor GSC weekly for sudden drops

**Response Plan:**
- If traffic drops >20% in one week: pause new content, audit affected pages
- Check Google Search Central blog for update announcements
- Adjust content strategy if new quality signals prioritized

---

### Risk 2: Time Constraint (New Baby, Client Load)
**Probability:** High (baby due in 1 month)
**Impact:** Medium (may slow content production)

**Mitigation:**
- Front-load content in November-December (before baby arrives)
- Build 4-week content buffer (pre-write 4 posts)
- Accept slower pace in January-February (1 post/month vs 2)
- Technical fixes don't require time - they compound passively

**Response Plan:**
- If falling behind on content: extend timeline to April/May
- Consider hiring copywriter for 2 posts/month ($120/week) in March
- Prioritize existing page optimization over new content

---

### Risk 3: Indexing Issues Persist
**Probability:** Low (Oct 14 fixes should resolve)
**Impact:** High (can't rank if not indexed)

**Mitigation:**
- Monitor GSC Coverage report weekly
- Use URL Inspection Tool to force indexing for priority pages
- Ensure sitemap.xml is clean and submitted
- Verify robots.txt not blocking Googlebot

**Response Plan:**
- If 706 non-indexed pages don't decrease in 30 days: manual review of top 50
- Check for duplicate content (canonical issues)
- Consider noindex for low-value pages (reduce crawl budget waste)

---

### Risk 4: CRPO Compliance Violation
**Probability:** Low (if checklist followed)
**Impact:** High (regulatory consequences)

**Mitigation:**
- Complete site-wide audit in Week 1
- Add compliance review to content production workflow
- Keep checklist of prohibited language
- When in doubt, err on side of caution

**Response Plan:**
- If compliance issue identified: fix within 24 hours
- Document change in SEO_PROJECT_STATUS.md
- Review all similar pages for same violation

---

## Resource Requirements

### Time Investment
- **Setup (November):** 20 hours (technical fixes, GSC audit, internal linking)
- **Ongoing (Dec-Mar):** 12 hours/month (8 hours content + 4 hours optimization)
- **Total:** 68 hours over 5 months (~3.5 hours/week)

### Tools & Software
- **Google Search Console:** Free ✅
- **Ahrefs (current subscription):** Existing ✅
- **Vercel Hosting:** Free/cheap ✅
- **Text editor (VS Code):** Free ✅
- **Schema Validator:** Free ✅
- **Total new spend:** $0/month

### External Support (Optional)
- **Healthcare copywriter:** $120/week for 2 posts/month (only if time constrained)
- **VA for GSC monitoring:** $10/hour × 2 hours/week = $80/month (only if needed)

---

## Assumptions

1. **Oct 14 technical fixes will stick:** 404 redirects, schema fixes, canonical tags are permanent
2. **Google will re-crawl within 30 days:** Technical fixes take 2-4 weeks to impact rankings
3. **Existing Page 1 winners will climb:** With internal linking + content expansion, they'll move to top 3
4. **2-3 posts/month is sustainable:** Even with new baby, can maintain minimal content production
5. **Quality > quantity:** Dan proved 10 pages/month works; we're targeting 8/month
6. **No major algorithm updates:** Or if there are, our E-E-A-T focus will protect us
7. **CRPO compliance is non-negotiable:** All content must meet regulatory standards

---

## Open Questions

1. **Should we noindex low-quality city pages?** (Burlington pages: 1,046 impressions but position #27-33, only 1 click)
   - **Decision needed by:** November 15
   - **Impact:** Could improve crawl budget by 30-50 pages

2. **Is virtual-therapy-ontario.html salvageable?** (Position #86, 112 impressions/month)
   - **Decision needed by:** December 1
   - **Impact:** Could rescue 200-300 impressions/month if fixed

3. **When to start hiring therapists?** (At 800/day? 1,000/day? Sustained for how long?)
   - **Decision needed by:** February 15
   - **Impact:** Business model transition timing

4. **Should we eventually add backlinks?** (Dan's ONE backlink kicked him to page 1)
   - **Decision needed by:** March 1 (only if traffic isn't hitting goals)
   - **Impact:** Could accelerate to 1,200-1,500/day

---

## Success Definition

**This PRD is successful if:**

1. ✅ Traffic reaches 1,000 impressions/day sustained for 7+ days by March 31, 2026
2. ✅ Technical SEO health: 90%+ pages indexed, zero critical errors
3. ✅ Sustainable workflow: 2-3 posts/month without burnout
4. ✅ CRPO compliance: Zero violations across all content
5. ✅ Time investment: <4 hours/week average
6. ✅ Cost: <$500 total (no hired help needed)
7. ✅ Business outcome: Proof of demand to hire 2-3 therapists

**Stretch goals (not required for success):**
- 8-10 keywords ranking page 1
- 1,200+ impressions/day
- First therapy hire made by April 2026

---

## Appendix

### A. Dan's Key Metrics (For Reference)

| Metric | Dan's Result | Our Equivalent |
|--------|--------------|----------------|
| **Launch date** | June 11, 2025 | October 15, 2025 (technical relaunch) |
| **Month 1 traffic** | Flat, ~50/day | 85/day (starting point) |
| **Reddit spike** | 40,000 views, 276 comments | N/A (not applicable for therapy) |
| **Quality backlink** | 1 backlink (Her Canberra) | N/A (focusing on technical + content) |
| **Content additions** | 10 pages/month | 8 pages/month (target) |
| **Page 1 timing** | 1 backlink → immediate | Technical fixes → 30-60 days |
| **Monthly cost** | $50 AUD (~$35 USD) | ~$50 USD (Vercel hosting) |
| **Time investment** | Part-time (has day job + baby) | Part-time (seeing clients full-time) |
| **Traffic growth** | Sustained growth for 4+ months | Target 5.5 months to 1,000/day |

### B. GSC Weekly Check-In Template

```markdown
# GSC Weekly Review - [Date]

## Performance (Last 28 days vs previous 28 days)
- **Total impressions:** [X] → [Y] ([+/-]%)
- **Total clicks:** [X] → [Y] ([+/-]%)
- **Average CTR:** [X]% → [Y]% ([+/-]%)
- **Average position:** [X] → [Y] ([+/-])

## Top Movers
**Pages gaining impressions:**
1. [Page name] - [+X impressions]
2. [Page name] - [+X impressions]

**Pages losing impressions:**
1. [Page name] - [-X impressions] - [Action needed?]

**Queries in position 4-10 (low-hanging fruit):**
1. [Query] - Position [X] - [Impressions]
2. [Query] - Position [X] - [Impressions]

## Coverage Issues
- **Indexed pages:** [X] / [total]
- **New errors:** [Yes/No] - [Details]
- **Actions taken:** [List]

## Content Opportunities
- **PAA questions found:** [List]
- **New keywords discovered:** [List]
- **Next month's content ideas:** [List]

## Action Items
- [ ] [Specific action]
- [ ] [Specific action]
```

### C. Content Production Checklist

```markdown
# Content Production Checklist - [Post Title]

## Research Phase
- [ ] GSC queries identified (position 4-10)
- [ ] Ahrefs keyword research complete
- [ ] "People Also Ask" questions captured (3-5)
- [ ] Content brief created (1,500 words)

## Writing Phase
- [ ] 2,500-3,000 words written
- [ ] 5-7 H2 headings (keyword optimized)
- [ ] 3-5 H3 headings (long-tail keywords)
- [ ] 3-5 internal links added
- [ ] FAQPage schema written (3-5 Q&As)

## Optimization Phase
- [ ] CRPO compliance reviewed (no comparative claims)
- [ ] Meta title written (60 chars max)
- [ ] Meta description written (155 chars max)
- [ ] Author byline added: "By Jesse Cynamon, RP (CRPO #10979)"
- [ ] Images added with alt tags (if applicable)

## Publishing Phase
- [ ] HTML file created
- [ ] Uploaded to site
- [ ] Sitemap.xml updated
- [ ] Submitted to GSC for indexing
- [ ] Internal links from pillar page added

## 7-Day Check-In
- [ ] Post indexed? (GSC URL Inspection)
- [ ] Impressions? [X per day]
- [ ] Average position? [X]
```

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Oct 15, 2025 | Jesse Cynamon | Initial PRD based on Dan's case study |

---

**END OF PRD**

**Next Step:** Review and approve this PRD, then begin with TR-1 (WWW canonicalization audit) and CC-1 (CRPO compliance fixes).
