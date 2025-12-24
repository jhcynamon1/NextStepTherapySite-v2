# pSEO Audit & Production Workflow

**Created:** December 24, 2024
**Purpose:** Avoid duplicates, ensure quality standards across all city pages

---

## Part 1: Complete Existing Page Inventory

### By City - What Already Exists

#### Burlington (3 pages) ✅ COMPLETE
- [x] anxiety-therapy-burlington.html
- [x] depression-therapy-burlington.html
- [x] online-therapy-burlington.html

#### Toronto (11 pages) ✅ COMPLETE
- [x] anxiety-therapy-toronto.html
- [x] ads-anxiety-therapy-toronto.html
- [x] career-anxiety-therapy-toronto.html
- [x] cbt-therapy-toronto.html
- [x] depression-counselling-toronto.html
- [x] first-job-anxiety-therapy-toronto.html
- [x] grief-counselling-toronto.html
- [x] mens-therapy-toronto.html
- [x] online-therapy-toronto.html
- [x] performance-anxiety-therapy-toronto.html
- [x] trauma-counselling-toronto.html

#### Mississauga (4 pages) ✅ COMPLETE
- [x] anxiety-therapy-mississauga.html
- [x] depression-therapy-mississauga.html
- [x] online-therapy-mississauga.html
- [x] therapy-mississauga-ontario.html

#### Ottawa (5 pages) ✅ COMPLETE
- [x] anxiety-therapy-ottawa.html
- [x] depression-therapy-ottawa.html
- [x] online-therapy-ottawa.html
- [x] therapy-ottawa-ontario.html
- [x] workplace-stress-therapy-ottawa.html

#### Hamilton (4 pages) ✅ COMPLETE
- [x] depression-therapy-hamilton.html
- [x] mens-therapy-hamilton.html
- [x] therapy-hamilton-ontario.html
- [x] workplace-stress-counselling-hamilton.html
- [ ] **MISSING:** anxiety-therapy-hamilton.html

#### London (5 pages) ✅ MOSTLY COMPLETE
- [x] anxiety-therapy-london-ontario.html
- [x] depression-therapy-london-ontario.html
- [x] depression-therapy-london.html (possible duplicate)
- [x] mens-mental-health-therapy-london-ontario.html
- [x] therapy-london-ontario.html

#### Windsor (3 pages) ✅ COMPLETE
- [x] anxiety-therapy-windsor-ontario.html
- [x] depression-therapy-windsor-ontario.html
- [x] therapy-windsor-ontario.html

#### Kitchener-Waterloo (3 pages) ✅ COMPLETE
- [x] anxiety-therapy-kitchener-waterloo.html
- [x] counselling-kitchener.html
- [x] depression-therapy-kitchener-waterloo.html

#### Oshawa (1 page) - NEEDS EXPANSION
- [x] anxiety-therapy-oshawa.html
- [ ] **MISSING:** depression-therapy-oshawa.html

#### Kingston (1 page) - NEEDS EXPANSION
- [x] therapy-kingston-ontario.html
- [ ] **MISSING:** anxiety-therapy-kingston.html
- [ ] **MISSING:** depression-therapy-kingston.html

#### Brampton (1 page) - NEEDS EXPANSION
- [x] therapy-brampton-ontario.html
- [ ] **MISSING:** anxiety-therapy-brampton.html
- [ ] **MISSING:** depression-therapy-brampton.html

#### Thunder Bay (1 page) ✅
- [x] therapy-thunder-bay-ontario.html

#### Sudbury (1 page) ✅
- [x] therapy-sudbury-ontario.html

---

### Cities With ZERO Pages (Priority for pSEO)

| City | Population | Status |
|------|------------|--------|
| **Markham** | 371,749 | NO PAGES |
| **Vaughan** | 357,906 | NO PAGES |
| **Oakville** | 243,176 | NO PAGES |
| **Richmond Hill** | 221,121 | NO PAGES |
| **Barrie** | 171,920 | NO PAGES |
| **Cambridge** | 166,259 | NO PAGES |
| **Guelph** | 162,184 | NO PAGES |
| **Whitby** | 161,650 | NO PAGES |
| **Ajax** | 126,666 | NO PAGES |
| **St. Catharines** | 128,372 | NO PAGES |
| **Pickering** | 91,771 | NO PAGES |
| **Newmarket** | 89,731 | NO PAGES |
| **Peterborough** | 83,651 | NO PAGES |

---

## Part 2: Exact Pages to Create (No Duplicates)

### Tier 1: New Cities - Full Package (13 cities × 2 pages = 26 pages)

| City | anxiety-therapy-[city].html | depression-therapy-[city].html |
|------|----------------------------|-------------------------------|
| Markham | CREATE | CREATE |
| Vaughan | CREATE | CREATE |
| Oakville | CREATE | CREATE |
| Richmond Hill | CREATE | CREATE |
| Barrie | CREATE | CREATE |
| Cambridge | CREATE | CREATE |
| Guelph | CREATE | CREATE |
| Whitby | CREATE | CREATE |
| Ajax | CREATE | CREATE |
| St. Catharines | CREATE | CREATE |
| Pickering | CREATE | CREATE |
| Newmarket | CREATE | CREATE |
| Peterborough | CREATE | CREATE |

### Tier 2: Expand Existing Cities (4 pages)

| City | Page to Create |
|------|----------------|
| Hamilton | anxiety-therapy-hamilton.html |
| Oshawa | depression-therapy-oshawa.html |
| Kingston | anxiety-therapy-kingston.html |
| Kingston | depression-therapy-kingston.html |
| Brampton | anxiety-therapy-brampton.html |
| Brampton | depression-therapy-brampton.html |

### TOTAL NEW PAGES: 32

---

## Part 3: Quality Standards Checklist

Every new page MUST pass these checks before publishing:

### Design Standards
- [ ] Uses Gemini Design System (see /docs/GEMINI-DESIGN-SYSTEM.md)
- [ ] Fixed header with CRPO #10979 badge
- [ ] 2-column hero layout with 4 feature cards
- [ ] Proper section styling (cream backgrounds, navy headings)
- [ ] Mobile responsive (test at 375px)
- [ ] CTAs visible (navy button with white text)

### Content Standards
- [ ] Minimum 1,500 words
- [ ] City-specific content (not just find/replace)
  - [ ] Local landmarks/employers mentioned
  - [ ] Local stressors addressed
  - [ ] Commute/lifestyle references
- [ ] Jesse's voice applied (brand-voice-therapy)
  - [ ] Vulnerability openers ("I don't know if this is you...")
  - [ ] Check-ins ("Sound familiar?", "Does that resonate?")
  - [ ] Process language ("work WITH your anxiety")
- [ ] No AI-sounding generic content
- [ ] Proper heading hierarchy (H1 > H2 > H3)

### SEO Standards
- [ ] Meta title under 60 characters, keyword-first
- [ ] Meta description under 160 characters with CTA
- [ ] H1 contains primary keyword + city
- [ ] Internal links to:
  - [ ] Main service page (anxiety-therapy-ontario.html)
  - [ ] Virtual therapy page
  - [ ] Related city pages
- [ ] External citations (CRPO, CMHA)

### Schema Standards
- [ ] MedicalWebPage schema with:
  - [ ] @type: "MedicalWebPage"
  - [ ] name: Page title
  - [ ] description: Meta description
  - [ ] author: Jesse Cynamon credentials
  - [ ] datePublished
  - [ ] dateModified
- [ ] FAQPage schema with 5-8 city-specific questions
- [ ] LocalBusiness schema (optional, for enhanced results)

### Technical Standards
- [ ] HTML validates (no errors)
- [ ] All images have alt text
- [ ] Page loads under 3 seconds
- [ ] No broken links
- [ ] Canonical URL set correctly

---

## Part 4: Production Workflow

### Step 1: Research (10 min per city)

Before writing, gather for each city:

```markdown
## [City Name] Research

**Population:** [number]
**Major Employers:** [list 3-5]
**Universities/Colleges:** [if any]
**Key Neighborhoods:** [2-3]
**Commute Pattern:** [to Toronto? local?]
**Local Stressors:** [cost of living, traffic, industry]
**Demographics:** [families, professionals, students?]
```

### Step 2: Content Generation

Use therapy-content-generator skill with this prompt:

```
Create a [service] therapy page for [city], Ontario.

City context:
- Population: [X]
- Major employers: [list]
- Local stressors: [list]
- Demographics: [description]

Requirements:
- 1,500+ words
- City-specific content throughout
- Jesse's voice (vulnerable, checking in, process-focused)
- Include FAQ section with 5-8 questions
- Follow Gemini design system structure

Sections:
1. Hero (headline + description + CTAs)
2. "Is This You?" section with city-specific pain points
3. "How [Service] Therapy Helps" section
4. "What to Expect" section
5. FAQ section
6. Final CTA
```

### Step 3: Voice Application

Run content through brand-voice-therapy skill:

```
Review this content and apply Jesse's voice:
- Add vulnerability markers
- Include check-ins ("Sound familiar?")
- Use process language not outcome promises
- Make it conversational, not clinical
```

### Step 4: Design Implementation

1. Copy template from anxiety-therapy-burlington.html
2. Update all content sections
3. Customize feature cards for service type
4. Verify Gemini design system compliance

### Step 5: Schema Generation

Use faq-schema-generator skill:

```
Generate FAQPage schema for [city] [service] therapy page.
Include 5-8 questions specific to [city] residents.
```

Add MedicalWebPage schema manually using template.

### Step 6: SEO Optimization

Use meta-title-optimizer skill:

```
Create meta title and description for:
- Service: [anxiety/depression] therapy
- City: [city name]
- Differentiators: CRPO #10979, Same-Week, Virtual

Formula: Service + City | Differentiator | NextStep Therapy
Max 60 chars for title, 160 for description
```

### Step 7: Quality Review

Run through full checklist (Part 3 above).

### Step 8: Internal Linking

Add new page to:
- [ ] Main service page (add city to "Serving:" list)
- [ ] Related city pages (cross-link)
- [ ] Sitemap.xml
- [ ] Any relevant blog posts

---

## Part 5: Batch Production Approach

### Option A: City-by-City (Recommended)
Create both anxiety + depression pages for one city at a time.

**Pros:**
- Research once per city
- Consistent local content
- Easier to maintain voice

**Workflow:**
1. Research Markham (10 min)
2. Create anxiety-therapy-markham.html (45 min)
3. Create depression-therapy-markham.html (30 min - reuse research)
4. QA both pages (15 min)
5. Move to next city

**Time per city:** ~1.5 hours for 2 pages

### Option B: Service-by-Service
Create all anxiety pages first, then all depression pages.

**Pros:**
- Template consistency
- Faster once in rhythm

**Cons:**
- Risk of repetitive content
- Research done twice per city

### Recommended: Option A (City-by-City)

---

## Part 6: Priority Order

Based on population + GSC signals:

### Week 1: High-Population GTA
1. Markham (371K)
2. Vaughan (358K)
3. Oakville (243K)
4. Richmond Hill (221K)

### Week 2: Durham Region + Hamilton Gap
5. Whitby (162K)
6. Ajax (127K)
7. Pickering (92K)
8. Hamilton gap (anxiety-therapy-hamilton.html)

### Week 3: Growth Cities
9. Barrie (172K)
10. Guelph (162K)
11. Cambridge (166K)
12. Oshawa gap (depression-therapy-oshawa.html)

### Week 4: University Towns + Niagara
13. St. Catharines (128K)
14. Kingston gaps (2 pages)
15. Peterborough (84K)
16. Newmarket (90K)

### Week 5: Remaining + Brampton
17. Brampton gaps (2 pages)

---

## Part 7: File Naming Convention

All city pages follow this exact pattern:

```
[service]-therapy-[city].html
```

Examples:
- anxiety-therapy-markham.html
- depression-therapy-vaughan.html
- anxiety-therapy-st-catharines.html (hyphenated)
- anxiety-therapy-richmond-hill.html (hyphenated)

**NO variations like:**
- ~~therapy-markham.html~~ (too generic)
- ~~markham-anxiety-therapy.html~~ (wrong order)
- ~~anxiety-therapy-markham-ontario.html~~ (unnecessary suffix)

---

## Part 8: Template Reference

Use this page as the gold standard template:

**Primary Template:** `/anxiety-therapy-burlington.html`

This page has:
- Correct Gemini design
- Proper schema
- Good voice balance
- City-specific content
- All required sections

**Before creating any page:**
1. Read the template page
2. Note the structure
3. Replicate with new city content

---

## Part 9: Duplicate Prevention Checklist

Before creating ANY page, verify:

```bash
# Check if page exists
ls -la [page-name].html

# Check for similar pages
ls -la *[city]*.html

# Check sitemap
grep "[city]" sitemap.xml
```

### Known Potential Duplicates to Watch:

| Watch For | Reason |
|-----------|--------|
| depression-therapy-london.html vs depression-therapy-london-ontario.html | Both exist |
| therapy-[city]-ontario.html vs [service]-therapy-[city].html | Different patterns |
| counselling vs counseling spelling | Stick to Canadian "counselling" |

---

## Part 10: Progress Tracking

### Master Checklist

| City | Anxiety Page | Depression Page | Status |
|------|-------------|-----------------|--------|
| Markham | [ ] | [ ] | Not started |
| Vaughan | [ ] | [ ] | Not started |
| Oakville | [ ] | [ ] | Not started |
| Richmond Hill | [ ] | [ ] | Not started |
| Barrie | [ ] | [ ] | Not started |
| Cambridge | [ ] | [ ] | Not started |
| Guelph | [ ] | [ ] | Not started |
| Whitby | [ ] | [ ] | Not started |
| Ajax | [ ] | [ ] | Not started |
| St. Catharines | [ ] | [ ] | Not started |
| Pickering | [ ] | [ ] | Not started |
| Newmarket | [ ] | [ ] | Not started |
| Peterborough | [ ] | [ ] | Not started |
| Hamilton (gap) | [ ] | EXISTS | Not started |
| Oshawa (gap) | EXISTS | [ ] | Not started |
| Kingston (gaps) | [ ] | [ ] | Not started |
| Brampton (gaps) | [ ] | [ ] | Not started |

**Total Pages to Create: 32**

---

*Use this document as the single source of truth for the pSEO expansion project.*
