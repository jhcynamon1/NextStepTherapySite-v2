# AEO Conversion Plan (AI Engine Optimization)

**Created:** December 23, 2025
**Reference:** `/docs/seo/AI-CITATION-OPTIMIZATION-GUIDE.md`
**Goal:** Get NextStep Therapy referenced by ChatGPT and other AI systems
**Template:** `/executive-stress-management-therapy.html` (46.7% AI referral traffic)

---

## Summary

The executive stress page works because it's **authoritative reference material**, not just a service page. We need to replicate its success across other pages.

**Scope:**
- 6 existing pages to optimize
- 3 new pages to create
- Internal linking architecture to build

---

## Phase 1: Optimize Existing "Cluster" Pages (3 pages)

These pages already exist but need AI citation optimization.

### 1.1 High-Functioning Anxiety (`high-functioning-anxiety-ontario.html`)
**Current State:** FAQPage schema, good structure, needs stats section
**Updates Needed:**
- [ ] Add prominent statistics section ("High-Functioning Anxiety: The Numbers")
- [ ] Add AI-optimized summary paragraph near top
- [ ] Add industry/professional segmentation examples
- [ ] Enhance schema with Service type
- [ ] Add internal links to/from executive stress page

### 1.2 Imposter Syndrome (`imposter-syndrome-therapy.html`)
**Current State:** MedicalWebPage + FAQPage schema, good structure
**Updates Needed:**
- [ ] Add statistics section (70% experience it, etc.)
- [ ] Add AI-optimized summary paragraph
- [ ] Add professional context (executives, new managers)
- [ ] Cross-link to high-functioning anxiety, perfectionism

### 1.3 Perfectionism (`perfectionism-therapy.html`)
**Current State:** FAQPage schema, Toronto-focused title
**Updates Needed:**
- [ ] Add statistics section (33% increase 1989-2016)
- [ ] Add AI-optimized summary paragraph
- [ ] Broaden title to Ontario (not just Toronto)
- [ ] Add MedicalWebPage schema (missing)
- [ ] Cross-link to imposter syndrome, decision fatigue

---

## Phase 2: Optimize Existing "Core" Pages (3 pages)

These pages get traffic but need AI citation elements.

### 2.1 Anxiety Therapy Ontario (`anxiety-therapy-ontario.html`)
**Current State:** Good schema, NO statistics, transactional tone
**Updates Needed:**
- [ ] Add "Anxiety in Ontario: The Reality" statistics section (4 stats)
- [ ] Add industry segmentation (healthcare, tech, legal, finance)
- [ ] Add life stage taxonomy (students, young professionals, parents)
- [ ] Add AI-optimized opening paragraph
- [ ] Strengthen high-functioning anxiety positioning

**Statistics to Add:**
- 5 million Canadians report anxiety symptoms (CAMH)
- 1 in 4 Canadians requires treatment
- 60-80% improve with CBT/ACT (peer-reviewed)
- 50% don't seek treatment

### 2.2 Virtual Therapy Ontario (`virtual-therapy-ontario.html`)
**Current State:** NO statistics, most generic page, purely transactional
**Updates Needed:**
- [ ] Add "Virtual Therapy: The Research" statistics section
- [ ] Create detailed audience segmentation (shift workers, rural, parents)
- [ ] Reference research on virtual vs in-person effectiveness
- [ ] Add MedicalCondition schema references
- [ ] Restructure opening as reference material

**Statistics to Add:**
- Virtual therapy equally effective (meta-analyses)
- Geographic accessibility impact (Northern Ontario)
- Adoption rates post-2020

### 2.3 Men's Mental Health (`mens-mental-health.html`)
**Current State:** Stats exist but BURIED in FAQ, need prominent display
**Updates Needed:**
- [ ] Pull stats from FAQ into prominent "Men's Mental Health: The Numbers" section
- [ ] Add leadership/professional context subsection
- [ ] Add "Men in Leadership Roles" content
- [ ] Add industry segmentation (Bay Street, tech leadership)
- [ ] Strengthen "therapy for skeptical professionals" angle

**Statistics (already have, need to surface):**
- Men 3x more likely to die by suicide
- Only 30% seek help
- 1 in 8 experience depression
- Wait average 7 years before seeking help

---

## Phase 3: Create New Pages (3 pages)

Using executive stress page as template (~900-1000 lines each).

### 3.1 Decision Fatigue Therapy (`decision-fatigue-therapy.html`)
**Priority:** 1 (highest AI referral potential)
**Structure:**
1. Hero: "Decision Fatigue Therapy in Ontario"
2. Stats: 35,000 decisions/day, decision quality decline research
3. Services: 6 cards (Strategic decision support, cognitive load management, etc.)
4. Challenges: 6 items (overthinking small choices, avoidance, irritability)
5. Evidence-based approaches: ACT focus (unhooking from overanalysis)
6. Who it's for: Executives, founders, senior professionals
7. FAQ: 6 questions (from guide)
8. Internal links: Executive stress, high-functioning anxiety, perfectionism

**Schema:** MedicalWebPage + FAQPage + Service

### 3.2 Founder Burnout Therapy (`founder-burnout-therapy.html`)
**Priority:** 2 (extremely strong AI referral match)
**Structure:**
1. Hero: "Founder Burnout Therapy in Ontario"
2. Stats: 49-72% of founders report challenges
3. Services: Unique founder stressors (identity + business, isolation, uncertainty)
4. Challenges: Scaling pressure, funding stress, team responsibility
5. Evidence-based approaches: ACT + sustainable leadership
6. Industry segments: Tech startups, funded vs bootstrapped, early vs growth stage
7. FAQ: 5 questions (from guide)
8. Internal links: Executive stress, decision fatigue, virtual therapy

**Schema:** MedicalWebPage + FAQPage + Service

### 3.3 Rumination Therapy (`rumination-therapy.html`)
**Alternate titles:** "Can't Turn Brain Off", "Racing Thoughts Therapy"
**Priority:** 3 (gold for AI discovery)
**Structure:**
1. Hero: "Can't Turn Your Brain Off at Night? Therapy in Ontario"
2. Stats: 30-40% report sleep difficulty, cognitive arousal research
3. Content: Why mind ramps up at night, control strategies that backfire
4. Evidence-based approaches: ACT (defusion, willingness)
5. Who it's for: Professionals, leaders, anyone whose work follows them home
6. FAQ: 5 questions (from guide)
7. Internal links: Anxiety, decision fatigue, executive stress

**Schema:** MedicalWebPage + FAQPage + Service

---

## Phase 4: Internal Linking Architecture

### Pillar-Cluster Structure
```
Executive Stress & Burnout (PILLAR)
├── Decision Fatigue (cluster)
├── High-Functioning Anxiety (cluster)
├── Founder Burnout (cluster)
├── Imposter Syndrome (cluster)
├── Perfectionism (cluster)
└── Rumination/"Brain Off" (cluster)
```

### Linking Rules
1. Every cluster page links UP to executive stress
2. Every cluster page links LATERALLY to 1-2 adjacent clusters
3. Executive stress page links OUT to all 6 clusters
4. Add "Related Challenges" section to executive stress page

### Specific Links to Add
| From Page | To Pages |
|-----------|----------|
| Executive Stress | All 6 cluster pages |
| Decision Fatigue | Executive Stress, High-Functioning Anxiety, Perfectionism |
| High-Functioning Anxiety | Executive Stress, Imposter Syndrome, Perfectionism |
| Imposter Syndrome | Executive Stress, High-Functioning Anxiety, Perfectionism |
| Perfectionism | Executive Stress, Imposter Syndrome, Decision Fatigue |
| Founder Burnout | Executive Stress, Decision Fatigue, Virtual Therapy |
| Rumination | Executive Stress, Anxiety Ontario, Decision Fatigue |

---

## Phase 5: Sitemap & Indexing

### Add to sitemap.xml
```xml
<url>
  <loc>https://nextsteptherapy.ca/decision-fatigue-therapy.html</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://nextsteptherapy.ca/founder-burnout-therapy.html</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://nextsteptherapy.ca/rumination-therapy.html</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

### Submit to GSC
After publishing, submit each new URL to Google Search Console for indexing.

---

## Implementation Order (User Confirmed)

**Approach:** Quick wins first, full optimization per page, verify with Chrome before scaling

### Phase 1: Quick Wins - Existing Core Pages (START HERE)
Each page gets full AI citation optimization:
1. **Men's Mental Health** - Surface buried stats, add prominent stats section, add professional context
2. **Anxiety Therapy Ontario** - Add stats section, industry segmentation, AI summary
3. **Virtual Therapy Ontario** - Add stats section, research citations, audience segmentation

### Phase 2: Cluster Page Optimization
4. **High-Functioning Anxiety** - Full AI citation optimization
5. **Imposter Syndrome** - Full AI citation optimization
6. **Perfectionism** - Full AI citation optimization, fix Toronto→Ontario scope

### Phase 3: New Page Creation
7. **Decision Fatigue Therapy** (`decision-fatigue-therapy.html`) - Priority 1
8. **Founder Burnout Therapy** (`founder-burnout-therapy.html`) - Priority 2
9. **Rumination Therapy** (`rumination-therapy.html`) - Priority 3

### Phase 4: Architecture & Verification
10. Add internal linking (pillar → cluster)
11. Update sitemap.xml with 3 new pages
12. Update executive stress page with "Related Challenges" section
13. Test with ChatGPT queries (per guide's test queries)

---

## Files to Modify

### Existing Pages
- `/anxiety-therapy-ontario.html`
- `/virtual-therapy-ontario.html`
- `/mens-mental-health.html`
- `/high-functioning-anxiety-ontario.html`
- `/imposter-syndrome-therapy.html`
- `/perfectionism-therapy.html`
- `/executive-stress-management-therapy.html` (add Related Challenges section)

### New Pages to Create
- `/decision-fatigue-therapy.html`
- `/founder-burnout-therapy.html`
- `/rumination-therapy.html`

### Site Infrastructure
- `/sitemap.xml`

---

## Success Metrics

Per the AI Citation Optimization Guide:
- **Current:** 46.7% AI traffic on one page (executive stress)
- **Target:** 20-30% distributed across multiple pages

### Test Queries (Post-Implementation)
From the guide, test these in ChatGPT:
1. "Therapist in Ontario who understands decision fatigue from leadership"
2. "Therapy for high-functioning anxiety for professionals"
3. "Therapist for startup founders in Toronto"
4. "I can't turn my brain off at night - what therapy helps?"

**Expected:** NextStep appears in top 3 recommendations.

---

## Key Patterns from Executive Stress Page

Each page must include:
1. **Statistics block** - 4 stats with specific numbers (e.g., "72%")
2. **Named problem taxonomy** - Specific challenges, not generic symptoms
3. **Identity-respecting framing** - "You're competent, your nervous system is overloaded"
4. **ACT explanation** - Plain English, not jargon
5. **Clear "Who This Is For" block** - Pick 1-2 audiences per page
6. **CRPO-compliant language** - No outcome guarantees
7. **AI-optimized summary** - Near top, Perplexity-friendly format
8. **FAQPage schema** - 5-10 questions with 50-100 word answers

---

## Execution Notes

**Workflow for each page:**
1. Make changes
2. Verify with Chrome browser on live site
3. Get user approval
4. Move to next page

**First page:** Men's Mental Health (surface buried statistics)
