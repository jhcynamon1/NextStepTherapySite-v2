# NextStep Therapy - Non-Critical Remediation Plan

**Date:** 2025-09-19
**Phase:** Post-Critical Fixes
**Status:** Ready for PR Implementation

## Critical Fixes Completed ✅

- `/services` → `/counselling-ontario` (301 redirect)
- `/contact` → `/` (301 redirect)
- `/students/university-anxiety` → `/university-anxiety-therapy-ontario` (301 redirect)

All critical 404 errors have been resolved and are live in production.

---

## Non-Critical Issues Requiring PRs

### Priority 1: Placeholder Pages Rebuilds (8 pages)

These pages have 0 words or insufficient content and need complete rebuilds using MANUS template:

1. **anger-management-kitchener** (0 words)
   - Target: Anger management therapy services in Kitchener
   - Template: MANUS service page with shared.min.css
   - Content: 2500+ words focused on anger management therapy

2. **faq-ontario-therapy** (0 words)
   - Target: FAQ page for Ontario therapy services
   - Template: MANUS FAQ structure
   - Content: Comprehensive Q&A format

3. **mobile-sticky-cta** (0 words)
   - Target: Mobile CTA optimization page or component
   - Template: MANUS utility page
   - Content: Mobile user experience focused

4. **teen-eating-disorder-help** (0 words)
   - Target: Teen eating disorder support services
   - Template: MANUS specialized service page
   - Content: 2500+ words on teen eating disorders

5. **therapy-faq-live** (0 words)
   - Target: Live therapy FAQ page
   - Template: MANUS FAQ structure
   - Content: Real-time therapy questions

6. **therapy-faq-ontario-new** (0 words)
   - Target: Updated Ontario therapy FAQ
   - Template: MANUS FAQ structure
   - Content: Ontario-specific therapy questions

7. **VALIDATED_UNIVERSITY_SCHEMA** (0 words)
   - Target: University-related schema validation page
   - Template: MANUS technical/resource page
   - Content: Schema documentation or validation tool

8. **Homepage** (2063 words - flagged as placeholder)
   - Target: Optimize existing homepage content
   - Template: Already uses MANUS, needs content refinement
   - Content: Enhance existing 2063 words for better quality

### Priority 2: Template Violations (54 pages)

Pages not using MANUS template structure with shared.min.css:

**High-Impact Service Pages:**
- counselling-ontario
- anxiety-therapy-ontario
- depression-therapy-ontario
- virtual-therapy-ontario
- life-transitions

**Location-Specific Pages:**
- anxiety-therapy-london-ontario
- anxiety-therapy-mississauga
- anxiety-therapy-toronto
- depression-therapy-hamilton
- depression-therapy-london-ontario
- depression-therapy-mississauga
- depression-therapy-ottawa

**Specialized Service Pages:**
- addiction-therapy-toronto
- adhd-therapy-toronto
- cbt-therapy-techniques-ontario
- executive-stress-management-therapy
- grief-counselling-toronto
- mens-mental-health
- perfectionism-and-burnout-therapy-toronto
- trauma-counselling-toronto

### Priority 3: Missing Schema Markup (17 pages)

Pages missing structured data (JSON-LD):

**Core Pages:**
- anger-management-kitchener
- child-anxious-about-university
- depression-therapy-ottawa
- faq-ontario-therapy
- first-year-university-anxiety

**Support Pages:**
- homesick-university
- mens-mental-health-therapy-london-ontario
- mobile-sticky-cta
- sunday-night-anxiety
- teen-eating-disorder-help

**FAQ Pages:**
- therapy-faq-live
- therapy-faq-ontario-new
- VALIDATED_UNIVERSITY_SCHEMA

**Service Pages:**
- workplace-stress-counselling-hamilton
- students/university-anxiety

---

## Implementation Guidelines

### MANUS Template Requirements

1. **CSS Structure:**
   ```html
   <link rel="stylesheet" href="/shared.min.css">
   ```

2. **Header Structure:**
   ```html
   <header class="header smart-sticky" data-astro-cid-r3n23ggs>
   ```

3. **Container Classes:**
   ```html
   <div class="container">
   ```

4. **Color Variables:**
   - --primary-soft-blue: #4a6b7a
   - --primary-deep: #36525f

### Content Requirements

1. **Minimum Word Count:** 2500+ words
2. **H1 Structure:** Single H1 per page
3. **Meta Tags:** Title, description, canonical
4. **CRPO Compliance:** Include "CRPO #10979" or "CRPO Registration #10979"

### Schema Markup Requirements

1. **Format:** JSON-LD in `<script type="application/ld+json">`
2. **Required Properties:** @type, @context
3. **Service Pages:** Use Service or MedicalBusiness schema
4. **FAQ Pages:** Use FAQPage schema

---

## PR Creation Strategy

### Batch 1: High-Priority Placeholder Rebuilds (4 PRs)
1. PR: Rebuild anger-management-kitchener + teen-eating-disorder-help
2. PR: Rebuild FAQ pages (faq-ontario-therapy + therapy-faq-live)
3. PR: Rebuild therapy-faq-ontario-new + VALIDATED_UNIVERSITY_SCHEMA
4. PR: Optimize homepage content + mobile-sticky-cta

### Batch 2: Core Service Template Fixes (3 PRs)
1. PR: Fix core service pages (counselling-ontario, anxiety-therapy-ontario, depression-therapy-ontario)
2. PR: Fix location-specific anxiety pages (6 pages)
3. PR: Fix location-specific depression pages (4 pages)

### Batch 3: Specialized Services Template Fixes (2 PRs)
1. PR: Fix specialized therapy pages (8 pages)
2. PR: Fix remaining service pages (6 pages)

### Batch 4: Schema Implementation (2 PRs)
1. PR: Add schema to service pages (10 pages)
2. PR: Add schema to FAQ and support pages (7 pages)

---

## Quality Assurance Checklist

For each PR:
- [ ] MANUS template compliance verified
- [ ] shared.min.css properly linked
- [ ] 2500+ word content requirement met
- [ ] Single H1 tag present
- [ ] Meta tags complete (title, description, canonical)
- [ ] CRPO compliance included
- [ ] Schema markup valid (if applicable)
- [ ] Mobile responsiveness tested
- [ ] Page speed optimized

---

## Post-Implementation Validation

1. Re-run comprehensive sitemap audit
2. Verify all template violations resolved
3. Confirm schema markup validity
4. Test redirect functionality
5. Validate CRPO compliance across site
6. Performance testing on mobile devices

---

## Timeline Estimate

- **Batch 1-2:** Week 1 (8 PRs, high-priority rebuilds)
- **Batch 3-4:** Week 2 (4 PRs, template fixes and schema)
- **QA & Validation:** Week 3 (testing and final validation)

**Total estimated effort:** 15-20 business days for full remediation.