# SEO Audit Action Plan - November 11, 2025
**Audit Date:** November 11, 2025  
**Goal:** Increase organic traffic from 7,000 impressions/50 clicks to 9,500 impressions/180 clicks (90 days)  
**Strategy:** On-page + technical optimization (no backlinks yet)

---

## 🚨 CRITICAL ISSUES (Days 1-3) - Fix This Week

### ✅ Task 1: Fix Schema Type Errors Across All Service Pages
**Priority:** CRITICAL  
**Time:** 2-3 hours  
**Impact:** Proper medical categorization for local pack + organic searches

**Problem:**
- anxiety-therapy-burlington.html uses `"@type": "Psychologist"` (WRONG - you're CRPO psychotherapist)
- Likely 50+ service pages have same error

**Action Steps:**
1. [ ] Grep search for all files with `"@type": "Psychologist"` 
2. [ ] Replace with:
   ```json
   "@type": "ProfessionalService",
   "provider": {
     "@type": "Person",
     "additionalType": "Psychotherapist",
     "name": "Jesse Cynamon, RP",
     "identifier": "CRPO #10979"
   }
   ```
3. [ ] Test schema validation on 3 sample pages using Google Rich Results Test
4. [ ] Deploy changes
5. [ ] Submit updated sitemap to GSC

**Files to Check:**
- All `/anxiety-therapy-*.html` pages
- All `/depression-therapy-*.html` pages  
- All city-specific service pages

---

### ✅ Task 2: Update lastReviewed Dates in MedicalWebPage Schema
**Priority:** CRITICAL  
**Time:** 30 minutes  
**Impact:** +5-8% trust signal boost for YMYL content

**Problem:**
- Homepage schema shows `"lastReviewed": "2025-10-28"` (2+ weeks old)
- Google's Sept 2025 update penalizes stale medical content

**Action Steps:**
1. [ ] Grep search for all `"lastReviewed"` entries in HTML files
2. [ ] Update ALL to current date: `"2025-11-11"`
3. [ ] Create automated script to update monthly (future task)
4. [ ] Deploy changes

**Command to run:**
```bash
grep -r '"lastReviewed"' *.html | wc -l
```

---

### ✅ Task 3: Create Comprehensive Provider/Author Page (E-E-A-T)
**Priority:** CRITICAL  
**Time:** 3-4 hours  
**Impact:** +15-20% rankings improvement (Sept 2025 "Perspective" update requirement)

**Problem:**
- No dedicated page showcasing Jesse Cynamon's experience, credentials, real-world expertise
- E-E-A-T signal missing for YMYL healthcare content

**Action Steps:**
1. [ ] Create `/jesse-cynamon-psychotherapist-ontario.html`
2. [ ] Include:
   - Full bio (400-600 words) - REAL experience, not just credentials
   - CRPO verification link: https://www.crpo.ca/find-a-therapist/ (link to your listing)
   - Education timeline (MPsy details)
   - Training certifications (ACT, CBT details)
   - Professional memberships (CRPO, OAMHP)
   - Photo (professional headshot)
   - Practice philosophy (why you became a therapist)
   - Published work/media mentions (if any)
3. [ ] Add Person schema with comprehensive hasCredential markup
4. [ ] Link to author page from:
   - Homepage footer
   - All service pages ("About Your Therapist" section)
   - Navigation menu
5. [ ] Update existing Person schema on homepage to point to new page
6. [ ] Add to sitemap.xml with priority 0.9

**Content Brief Needed:**
- What specific clients/situations have you worked with? (Be specific without violating confidentiality)
- What drew you to ACT/CBT approaches?
- What's your practice philosophy in plain language?

---

## 📈 HIGH-IMPACT OPPORTUNITIES (Days 4-14)

### ✅ Task 4: Add Featured Snippet Optimization to Top 5 Pages
**Priority:** HIGH  
**Time:** 3-4 hours  
**Impact:** +25-40 clicks/month from featured snippets

**Target Pages (by impressions):**
1. virtual-therapy-ontario.html
2. anxiety-therapy-burlington.html
3. burlington-online-therapy.html
4. anxiety-therapy-toronto.html (need GSC data to confirm)
5. depression-therapy-ontario.html

**Action Steps:**
1. [ ] For EACH page, add "Quick Answer" block after H1:
   ```html
   <div class="quick-answer" style="background: #f0f8ff; padding: 1.5rem; border-left: 4px solid #4a6b7a; margin: 2rem 0;">
     <h3 style="margin-top: 0; color: #4a6b7a; font-size: 1.1rem;">Quick Answer:</h3>
     <p style="margin-bottom: 0; font-size: 1.05rem; line-height: 1.6;">
       <strong>[Direct 40-60 word answer to primary query]</strong>
     </p>
   </div>
   ```

2. [ ] Write answers for each page:
   - **virtual-therapy-ontario:** "Virtual therapy in Ontario connects you with CRPO-registered psychotherapists through secure video platforms. Sessions cost $150-$250 (covered by most extended health plans with $500-$2,000 annual coverage) and deliver the same therapeutic outcomes as in-person therapy with greater accessibility."
   - **anxiety-therapy-burlington:** "Anxiety therapy in Burlington helps with panic attacks, constant worry, and social anxiety through evidence-based approaches like ACT and CBT. CRPO-registered psychotherapists provide virtual and in-person sessions, typically covered by extended health benefits. First sessions available within one week."
   - **burlington-online-therapy:** [Write answer]
   - **anxiety-therapy-toronto:** [Write answer]
   - **depression-therapy-ontario:** [Write answer]

3. [ ] Format FAQs with clear H3 questions + concise answers
4. [ ] Test pages in Google Rich Results Test
5. [ ] Deploy and monitor GSC for featured snippet appearances (2-4 weeks)

---

### ✅ Task 5: Optimize Meta Descriptions for Top 20 Pages
**Priority:** HIGH  
**Time:** 2-3 hours  
**Impact:** +0.3-0.5% CTR boost (compounds with Nov 5 title optimization)

**Data Needed First:**
- [ ] Pull GSC export: Pages with >100 impressions (last 90 days)
- [ ] Sort by: Impressions DESC
- [ ] Identify: Pages with CTR <1%

**Formula for Meta Descriptions:**
- Under 155 characters
- Include: [Service] + [Location] + [CRPO credential] + [Urgency] + [CTA]
- Example: "Burlington anxiety therapy with CRPO psychotherapist. Virtual sessions this week. Insurance accepted. Free 15-min consultation. Book today."

**Action Steps:**
1. [ ] **REQUEST DATA:** Pull GSC performance data
2. [ ] Audit current meta descriptions on top 20 pages
3. [ ] Rewrite using formula above
4. [ ] A/B test 2 variations for highest-impression pages
5. [ ] Deploy changes
6. [ ] Monitor CTR changes in GSC (2-3 weeks)

---

### ✅ Task 6: Create & Upload Provider Introduction Video
**Priority:** HIGH  
**Time:** 4-6 hours (recording + editing + upload)  
**Impact:** Qualify for video carousels (June 2025 update = 70% AI Overview inclusion)

**Video Specs:**
- Length: 2-3 minutes
- Title: "What to Expect in Your First Therapy Session | Jesse Cynamon, RP"
- Format: Can use phone/webcam (authenticity > production quality)

**Script Outline:**
1. Intro (15 sec): "Hi, I'm Jesse Cynamon, a registered psychotherapist in Ontario..."
2. What to expect (45 sec): First session process, confidentiality, no judgment
3. My approach (45 sec): ACT/CBT explained simply, practical skills focus
4. Who I work with (30 sec): Anxiety, workplace stress, men's mental health
5. Next steps (15 sec): "Book free 15-minute consultation at nextsteptherapy.ca"

**Action Steps:**
1. [ ] Write full script (300-400 words)
2. [ ] Record video (multiple takes OK)
3. [ ] Basic editing (trim, add text overlays for credentials)
4. [ ] Upload to YouTube channel (create if needed)
5. [ ] Add VideoObject schema to homepage:
   ```json
   {
     "@type": "VideoObject",
     "name": "What to Expect in Your First Therapy Session",
     "description": "Jesse Cynamon, CRPO registered psychotherapist, explains what happens in your first therapy session.",
     "thumbnailUrl": "https://nextsteptherapy.ca/images/video-thumbnail.jpg",
     "uploadDate": "2025-11-XX",
     "duration": "PT3M",
     "contentUrl": "https://www.youtube.com/watch?v=XXXXX"
   }
   ```
6. [ ] Embed on homepage hero section (below main CTA)
7. [ ] Submit homepage to GSC for re-indexing

---

### ✅ Task 7: Expand MedicalCondition Schema on Service Pages
**Priority:** MEDIUM-HIGH  
**Time:** 3-4 hours  
**Impact:** +10-15% visibility for symptom-based searches

**Target Pages:**
- All anxiety pages (20+)
- All depression pages (10+)
- All stress/burnout pages (8+)

**Schema Template:**
```json
"about": [
  {
    "@type": "MedicalCondition",
    "name": "Generalized Anxiety Disorder",
    "alternateName": ["GAD", "chronic anxiety", "excessive worry"],
    "signOrSymptom": [
      "excessive worry",
      "restlessness", 
      "difficulty concentrating",
      "sleep disturbance",
      "muscle tension"
    ],
    "riskFactor": "Stress, trauma, family history",
    "possibleTreatment": {
      "@type": "MedicalTherapy",
      "name": "Acceptance and Commitment Therapy",
      "alternateName": "ACT"
    }
  }
]
```

**Action Steps:**
1. [ ] Create schema templates for:
   - Generalized Anxiety Disorder
   - Social Anxiety Disorder
   - Panic Disorder
   - Major Depression
   - Workplace Stress/Burnout
2. [ ] Add to all relevant service pages
3. [ ] Validate with Google Rich Results Test
4. [ ] Deploy changes

---

### ✅ Task 8: Internal Linking Hub-Spoke Architecture
**Priority:** MEDIUM-HIGH  
**Time:** 4-6 hours  
**Impact:** +20% page authority distribution

**Current State:** 247 pages with weak topical clustering

**Target Structure:**
```
Tier 1 (Hubs) - Province-wide services
├── /anxiety-therapy-ontario.html
│   ├── Tier 2 (Cities): Toronto, Burlington, Ottawa, Hamilton, Mississauga...
│   │   └── Tier 3 (Sub-niches): Performance anxiety, social anxiety, panic
├── /depression-therapy-ontario.html
│   └── Tier 2 (Cities): Toronto, Burlington, Ottawa...
├── /workplace-stress-therapy-ontario.html
    └── Tier 2 (Cities) + Tier 3 (Remote workers, burnout, etc.)
```

**Action Steps:**
1. [ ] **REQUEST DATA:** Export Ahrefs "Pages" report filtered by "Internal links <5"
2. [ ] Map current page relationships
3. [ ] Add "Related Services" section to EVERY page with 5-8 contextual links:
   ```html
   <section class="related-services">
     <h3>Related Therapy Services</h3>
     <ul>
       <li><a href="/anxiety-therapy-ontario.html">Anxiety Therapy Ontario</a></li>
       <li><a href="/anxiety-therapy-toronto.html">Anxiety Therapy Toronto</a></li>
       <!-- etc -->
     </ul>
   </section>
   ```
4. [ ] Ensure hub pages link to ALL city pages
5. [ ] Ensure city pages link back to hub + to related cities
6. [ ] Deploy changes
7. [ ] Monitor crawl efficiency in GSC

**Minimum Links Per Page:** 5-8 internal links

---

## 🎯 MEDIUM-TERM OPTIMIZATIONS (Days 15-30)

### ✅ Task 9: Core Web Vitals Audit & Optimization
**Priority:** MEDIUM  
**Time:** 4-6 hours  
**Impact:** +5-10% mobile rankings

**Data Needed:**
- [ ] Run PageSpeed Insights on:
  - index.html
  - virtual-therapy-ontario.html
  - anxiety-therapy-burlington.html
- [ ] Share scores + recommendations

**Likely Issues (from code review):**
- Multiple font preconnects causing CLS
- Heavy hero images on mobile
- GA4 + Ahrefs loading before content
- Multiple third-party scripts

**Action Steps:**
1. [ ] **REQUEST DATA:** Run PageSpeed Insights, share results
2. [ ] Fix LCP issues (target <2.5s)
3. [ ] Fix CLS issues (target <0.1)
4. [ ] Optimize image loading (lazy load below fold)
5. [ ] Defer non-critical JavaScript
6. [ ] Test on real mobile devices
7. [ ] Monitor Core Web Vitals in GSC

---

### ✅ Task 10: Expand FAQ Schema (AI Overview Qualification)
**Priority:** MEDIUM  
**Time:** 6-8 hours  
**Impact:** +30-50 clicks/month from People Also Ask boxes

**Current State:**
- Homepage: 7 FAQs (good)
- Service pages: 8-10 FAQs (needs expansion)

**Target:** 12-15 FAQs per service page

**FAQ Topics to Add:**
- "How does [service] work?"
- "What happens in first session?"
- "How long until I see results?"
- "Is virtual as effective as in-person?"
- "What insurance covers [service]?"
- "How much does [service] cost?"
- "What's the difference between psychotherapist vs psychologist?"
- "Do I need a referral?"

**Action Steps:**
1. [ ] Create master FAQ database (50+ questions)
2. [ ] Assign relevant FAQs to each service page type
3. [ ] Write concise 50-80 word answers
4. [ ] Add to FAQPage schema
5. [ ] Format with clear H3 questions
6. [ ] Deploy changes
7. [ ] Monitor PAA box appearances in GSC

---

### ✅ Task 11: Orphan Content Audit & Link Injection
**Priority:** MEDIUM  
**Time:** 3-4 hours  
**Impact:** Recover wasted crawl budget + authority leak

**Current Status:** 1 orphan page (down from 22 - good!)

**But:** Many pages likely have <3 internal links (weak authority)

**Action Steps:**
1. [ ] **REQUEST DATA:** Export Ahrefs "Internal links" report for all pages
2. [ ] Identify pages with <5 internal links
3. [ ] Add contextual links from related pages
4. [ ] Ensure every page has:
   - Link from at least one hub page
   - Link to related services
   - Link to location pages (if relevant)
5. [ ] Deploy changes
6. [ ] Monitor in Ahrefs Site Explorer

---

## 📊 DATA REQUESTS (Before Starting Tasks 5, 8, 9, 11)

### Request 1: GSC Performance Export
**For Task 5 (Meta Description Optimization)**

Export from Google Search Console:
- Date range: Last 90 days
- Report: Pages
- Filter: Impressions >100
- Sort by: Impressions DESC
- Columns: Page URL, Impressions, Clicks, CTR, Average Position

**How to export:**
1. GSC → Performance → Pages tab
2. Add filter: Impressions >100
3. Export as CSV
4. Share file

---

### Request 2: Ahrefs Internal Links Report
**For Task 8 (Internal Linking) and Task 11 (Orphan Content)**

Export from Ahrefs:
- Report: Site Explorer → Internal pages
- Sort by: Internal links (ASC)
- Filter: Show pages with <5 internal links
- Export all columns

---

### Request 3: PageSpeed Insights Results
**For Task 9 (Core Web Vitals)**

Run PageSpeed Insights on these 3 URLs:
1. https://nextsteptherapy.ca/
2. https://nextsteptherapy.ca/virtual-therapy-ontario.html
3. https://nextsteptherapy.ca/anxiety-therapy-burlington.html

For each, share:
- Mobile score
- Desktop score
- Specific recommendations
- LCP, CLS, FID metrics

---

### Request 4: GSC Search Queries (Page 2 Rankings)
**For Featured Snippet Opportunities**

Export from Google Search Console:
- Date range: Last 90 days
- Report: Queries
- Filter: Position between 11-20
- Sort by: Impressions DESC
- Export top 50 queries

**Purpose:** Identify near-ranking terms for featured snippet targeting

---

## 📈 SUCCESS METRICS (90-Day Targets)

| Metric | Current | 30-Day Target | 60-Day Target | 90-Day Target |
|--------|---------|---------------|---------------|---------------|
| **Impressions** | 7,000/mo | 7,500/mo | 8,500/mo | 9,500/mo |
| **Clicks** | 50/mo | 80/mo | 130/mo | 180/mo |
| **CTR** | 0.7% | 1.1% | 1.5% | 1.9% |
| **Featured Snippets** | 0 | 2-3 | 5-7 | 8-12 |
| **Video Impressions** | 0 | 500/mo | 1,200/mo | 2,000/mo |

---

## ⚠️ CRPO COMPLIANCE CHECKLIST

Review ALL content changes for compliance:

- [ ] No outcome guarantees ("cure," "fix," "eliminate," "guaranteed results")
- [ ] Use qualified language ("may help," "can support," "evidence suggests")
- [ ] Maintain professional tone (no false urgency, no testimonials)
- [ ] Crisis resources visible on all pages
- [ ] Privacy/confidentiality statements present
- [ ] CRPO registration prominently displayed

---

## 🗓️ WEEKLY SCHEDULE

### Week 1 (Nov 11-17): Critical Fixes
- Monday-Tuesday: Tasks 1, 2 (Schema fixes)
- Wednesday-Friday: Task 3 (Author page)
- Weekend: Pull data requests 1-4

### Week 2 (Nov 18-24): High-Impact Wins
- Monday-Tuesday: Task 4 (Featured snippets)
- Wednesday: Task 5 (Meta descriptions)
- Thursday-Friday: Task 6 (Video creation)

### Week 3 (Nov 25-Dec 1): Medium-Term Optimization
- Monday-Tuesday: Task 7 (Medical schema expansion)
- Wednesday-Friday: Task 8 (Internal linking)

### Week 4 (Dec 2-8): Polish & Monitor
- Monday-Tuesday: Tasks 9, 10, 11 (Web Vitals, FAQs, Orphan content)
- Wednesday-Friday: Monitor GSC for improvements, document results

---

**Next Steps:** 
1. Confirm you want to proceed
2. I'll start with Task 1 (Schema fixes) - need confirmation to proceed
3. Share data exports when ready for Tasks 5, 8, 9, 11

**Questions before we start?**

