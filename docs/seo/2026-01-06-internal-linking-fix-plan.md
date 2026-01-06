---
project: NextStepTherapy
type: implementation-plan
created: 2026-01-06
priority: CRITICAL
estimated_impact: High (indexing + rankings)
---

# Internal Linking Fix Plan

## The Problem

- **52 pages** have only 1 internal link (Ahrefs audit)
- **Most city pages** have ZERO contextual internal links
- **347 pages** are "Crawled - currently not indexed" - largely due to orphan status
- Google sees these pages as low-value because nothing links to them

## Site Structure Overview

| Page Type | Count | Current Links | Target Links |
|-----------|-------|---------------|--------------|
| Anxiety city pages | 20 | 0-2 | 5+ each |
| Depression city pages | 20 | 0-2 | 5+ each |
| University pages | 12 | 1-3 | 5+ each |
| Professional/workplace | 15+ | 2-4 | 5+ each |
| Blog posts | 20+ | 1-2 | 5+ each |
| Core service pages | 10 | 3-5 | 8+ each |

---

## Phase 1: Hub Pages (Do First)

Create contextual links FROM these high-authority pages TO orphan pages.

### anxiety-therapy-ontario.html (Hub)
Add links to ALL city pages in a "Locations" section:
- anxiety-therapy-toronto.html
- anxiety-therapy-mississauga.html
- anxiety-therapy-ottawa.html
- anxiety-therapy-hamilton.html
- ... (all 20 cities)

### depression-therapy-ontario.html (Hub)
Same pattern - link to all depression city pages.

### student-mental-health-ontario.html (Hub)
Link to all university pages:
- university-of-toronto-student-therapy.html
- mcmaster-university-student-therapy.html
- york-university-student-therapy.html
- queens-university-student-therapy.html
- western-university-student-therapy.html
- toronto-metropolitan-university-student-therapy.html

### mens-mental-health.html (Hub)
Link to:
- mens-therapy-toronto.html
- mens-therapy-hamilton.html
- mens-mental-health-therapy-london-ontario.html

---

## Phase 2: City Page Cross-Linking

Each city page should link to:

1. **Parent hub page** (anxiety-therapy-ontario.html or depression-therapy-ontario.html)
2. **2-3 nearby city pages** (geographic clusters)
3. **Related service pages** (e.g., anxiety city → workplace stress, perfectionism)
4. **Blog content** (relevant articles)

### Geographic Clusters

**GTA Cluster:**
- Toronto → Mississauga, Vaughan, Markham, Richmond Hill
- Mississauga → Toronto, Oakville, Burlington, Brampton

**Eastern Ontario:**
- Ottawa → Kingston
- Kingston → Ottawa

**Hamilton-Niagara:**
- Hamilton → Burlington, St. Catharines, Oakville
- Burlington → Hamilton, Oakville, Mississauga

**Southwestern:**
- London → Kitchener-Waterloo, Cambridge, Guelph
- Kitchener-Waterloo → Cambridge, Guelph, London

**Durham Region:**
- Oshawa → Whitby, Ajax, Pickering
- Whitby → Oshawa, Ajax, Pickering

---

## Phase 3: University Page Network

Each university page should link to:

1. **student-mental-health-ontario.html** (parent)
2. **university-anxiety-therapy-ontario.html**
3. **2-3 related university pages**
4. **Relevant blog posts** (exam anxiety, homesickness, grade anxiety)
5. **City page for that university's location**

### University → City Mapping

| University | Link to City Page |
|------------|-------------------|
| UofT | anxiety-therapy-toronto.html |
| York | anxiety-therapy-vaughan.html OR toronto |
| McMaster | anxiety-therapy-hamilton.html |
| Western | anxiety-therapy-london-ontario.html |
| Queen's | therapy-kingston-ontario.html |
| TMU | anxiety-therapy-toronto.html |

---

## Phase 4: Blog Internal Linking

Each blog post should link to:

1. **Relevant service page** (primary CTA)
2. **2-3 related blog posts**
3. **Relevant city page** (if applicable)

### Blog → Service Mapping Examples

| Blog Post | Link to Service |
|-----------|-----------------|
| how-to-recover-from-burnout | workplace-stress-therapy-ontario.html |
| do-i-need-therapy-quiz | therapy-costs-ontario.html, what-to-expect-first-session.html |
| sunday-night-anxiety | workplace-stress-therapy-ontario.html |
| imposter-syndrome | professionals/performance-anxiety.html |

---

## Implementation Priority

### Week 1: Hub Pages (Highest Impact)
1. [ ] Add city links section to anxiety-therapy-ontario.html
2. [ ] Add city links section to depression-therapy-ontario.html
3. [ ] Add university links to student-mental-health-ontario.html

### Week 2: Top 10 City Pages
4. [ ] Toronto (anxiety + depression)
5. [ ] Mississauga (anxiety + depression)
6. [ ] Ottawa (anxiety + depression)
7. [ ] Hamilton (anxiety + depression)
8. [ ] London (anxiety + depression)

### Week 3: University Pages
9. [ ] All 6 university pages - add cross-links

### Week 4: Remaining City Pages
10. [ ] Complete all 40 city pages

### Week 5: Blog Posts
11. [ ] Add internal links to all blog posts

---

## Link Format Guidelines

### Contextual Links (Best)
```html
<p>If you're in the Greater Toronto Area, you might also explore our
<a href="/anxiety-therapy-mississauga.html">anxiety therapy in Mississauga</a>
or <a href="/anxiety-therapy-vaughan.html">Vaughan anxiety counselling</a>.</p>
```

### City Grid Section (Good)
```html
<section class="bg-cream py-12">
  <div class="container mx-auto px-4">
    <h2 class="font-display text-2xl text-navy mb-6">Anxiety Therapy Across Ontario</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <a href="/anxiety-therapy-toronto.html" class="text-sage hover:underline">Toronto</a>
      <a href="/anxiety-therapy-mississauga.html" class="text-sage hover:underline">Mississauga</a>
      <!-- etc -->
    </div>
  </div>
</section>
```

### Related Pages Section (Good)
```html
<div class="border-t border-sand pt-8 mt-12">
  <h3 class="font-display text-xl text-navy mb-4">Related Resources</h3>
  <ul class="space-y-2">
    <li><a href="/workplace-stress-therapy-ontario.html" class="text-sage hover:underline">Workplace Stress Therapy</a></li>
    <li><a href="/perfectionism-therapy.html" class="text-sage hover:underline">Perfectionism & High Achievement</a></li>
  </ul>
</div>
```

---

## Expected Outcomes

| Metric | Current | Target (30 days) | Target (90 days) |
|--------|---------|------------------|------------------|
| Pages with 1 internal link | 52 | 20 | 0 |
| Crawled not indexed | 347 | 250 | 100 |
| Indexed pages | 148 | 180 | 220 |
| Avg internal links per page | ~1.5 | 4 | 6 |

---

## Automation Opportunity

Consider creating a Python script to:
1. Scan all pages for internal link counts
2. Generate suggested links based on content similarity
3. Add "Related Pages" sections automatically

This would save significant manual effort and ensure consistency.

---

## Notes

- Don't add more than 100 links per page (diminishing returns)
- Prioritize contextual links over footer/sidebar links
- Use descriptive anchor text (not "click here")
- After adding links, request indexing for updated pages in GSC
