# Design Consistency Fix Plan

**Created:** December 2025
**Status:** Active
**Priority:** High - Visual consistency across site

---

## Problem Summary

The NextStep Therapy website has inconsistent design across pages due to a partial design system migration. Pages fall into several categories:

| Category | Count | Status | Action Needed |
|----------|-------|--------|---------------|
| Fully Gemini Design | 9 | Good | Reference templates |
| Broken - `class="hero"` | 43 | Broken | Replace hero section |
| Broken - `class="hero-with-bg"` | 41 | Broken | Replace hero section |
| Legacy CSS (students/, virtual/) | 11 | Functional | Consider migration |
| Special/Utility Pages | ~9 | Various | Case-by-case |

**Root Cause:** Pages were updated with Tailwind CDN but hero sections still use old class names (`.hero`, `.hero-with-bg`) that don't have Tailwind definitions.

---

## Design System Reference

### Good Design Pattern (Gemini)

**Hero Section Structure:**
```html
<section class="relative bg-gradient-to-br from-cream via-white to-sage/5 py-16 md:py-24 overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
        <!-- Content with Tailwind classes -->
    </div>
</section>
```

**Required Head Elements:**
```html
<!-- Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Google Fonts - Playfair Display + Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Tailwind Config -->
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    navy: '#1e3a4f',
                    'navy-deep': '#152a3a',
                    'navy-light': '#2d4a5e',
                    sage: '#4a7c59',
                    'sage-light': '#5f9970',
                    'sage-soft': 'rgba(74, 124, 89, 0.08)',
                    'sage-medium': 'rgba(74, 124, 89, 0.15)',
                    ivory: '#fdfcfa',
                    cream: '#f8f6f3',
                    linen: '#f2efe9',
                    sand: '#e5e0d8',
                    stone: '#c9c3b8',
                },
                fontFamily: {
                    display: ['Playfair Display', 'Georgia', 'serif'],
                    body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                },
            },
        },
    }
</script>
```

**Header Pattern:**
```html
<header class="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-4">
        <!-- Header content -->
    </div>
</header>
```

---

## Good Pages (Reference Templates)

Use these pages as templates when fixing broken pages:

### Homepage Template
- **File:** `index.html`
- **Hero:** Full Gemini design with `min-h-screen`, gradient background
- **Use for:** Homepage-style pages

### Service Page Template
- **Files:**
  - `bay-street-burnout.html`
  - `imposter-syndrome-therapy.html`
  - `high-functioning-anxiety-ontario.html`
  - `perfectionism-therapy.html`
  - `executive-stress-management-therapy.html`
  - `cbt-therapy-toronto.html`
  - `online-therapy-toronto.html`
- **Hero:** `bg-gradient-to-br from-cream via-white to-sage/5 py-16 md:py-24`
- **Use for:** All service/landing pages

### Main Service Page Template
- **File:** `anxiety-therapy-ontario.html`
- **Hero:** `py-20 md:py-28 bg-gradient-to-br from-cream via-ivory to-sage/5`
- **Use for:** Main category pages

---

## Broken Pages - Priority 0 (Critical)

These pages are high-traffic and need immediate attention:

| Page | Issue | Template |
|------|-------|----------|
| `faq.html` | `class="hero"` undefined | service page |
| `services.html` | `class="hero"` undefined | service page |
| `therapy-costs-ontario.html` | `class="hero"` undefined | service page |
| `counselling-services.html` | `class="hero"` undefined | service page |
| `life-transitions.html` | `class="hero"` undefined | service page |
| `jesse-cynamon-psychotherapist-ontario.html` | `class="hero"` undefined | service page |
| `student-mental-health-ontario.html` | `class="hero"` undefined | service page |
| `performance-anxiety-therapy-ontario.html` | `class="hero"` undefined | service page |
| `university-anxiety-therapy-ontario.html` | `class="hero"` undefined | service page |
| `workplace-stress-burnout-therapy.html` | `class="hero"` undefined | service page |

---

## Broken Pages - Priority 1 (High)

City-specific and depression pages:

### Depression Pages (9 pages)
```
depression-therapy-london-ontario.html
depression-therapy-windsor-ontario.html
```

### University/Student Pages (10 pages)
```
mcmaster-university-student-therapy.html
university-of-toronto-student-therapy.html
western-university-student-therapy.html
york-university-student-therapy.html
university-grade-anxiety-when-b-feels-like-failure.html
why-smart-students-fail-university-academic-anxiety.html
```

### City Therapy Pages (6 pages)
```
therapy-brampton-ontario.html
trauma-counselling-toronto.html
grief-counselling-toronto.html
```

---

## Broken Pages - Priority 2 (Medium)

Anxiety city pages and online therapy:

### Anxiety City Pages (4 pages)
```
anxiety-therapy-london-ontario.html
anxiety-therapy-windsor-ontario.html
anxiety-chest-tightness.html
cbt-therapy-techniques-ontario.html
```

### Online Therapy Pages (2 pages)
```
online-therapy-mississauga.html
online-therapy-ottawa.html
```

### Holiday/Seasonal Pages (5 pages)
```
holiday-depression.html
grief-during-holidays.html
january-blues-post-holiday-depression.html
spending-christmas-alone.html
year-end-stress-professionals.html
```

---

## Broken Pages - Priority 3 (Lower)

Specialized therapy pages:

```
anger-management-toronto.html
compassion-fatigue-therapy.html
distress-tolerance-therapy.html
first-job-anxiety-therapy-toronto.html
career-anxiety-therapy-toronto.html
mens-therapy-hamilton.html
mens-therapy-toronto.html
workplace-stress-therapy-ottawa.html
virtual-therapy-effectiveness-research.html
```

---

## Broken Pages - `hero-with-bg` Class (41 pages)

These pages use `class="hero-with-bg"` which is also undefined:

### City Therapy Pages
```
anxiety-therapy-burlington.html
anxiety-therapy-kitchener-waterloo.html
anxiety-therapy-mississauga.html
anxiety-therapy-oshawa.html
anxiety-therapy-ottawa.html
anxiety-therapy-toronto.html
counselling-kitchener.html
counselling-ontario.html
counsellor-ontario.html
depression-counselling-toronto.html
depression-therapy-burlington.html
depression-therapy-hamilton.html
depression-therapy-kitchener-waterloo.html
depression-therapy-london.html
depression-therapy-mississauga.html
depression-therapy-ontario.html
depression-therapy-ottawa.html
therapy-hamilton-ontario.html
therapy-kingston-ontario.html
therapy-london-ontario.html
therapy-mississauga-ontario.html
therapy-near-me-ontario.html
therapy-ottawa-ontario.html
therapy-sudbury-ontario.html
therapy-thunder-bay-ontario.html
therapy-windsor-ontario.html
therapist-toronto.html
```

### Specialty Pages
```
child-anxious-about-university.html
decision-fatigue-therapy.html
first-year-university-anxiety.html
founder-burnout-therapy.html
homesick-university.html
mens-mental-health-therapy-london-ontario.html
mental-health-therapist-ontario.html
no-motivation-to-do-anything.html
online-counselling-remote-workers.html
online-therapy-burlington.html
online-therapy-depression-ontario.html
performance-anxiety-therapy-toronto.html
rumination-therapy.html
workplace-stress-counselling-hamilton.html
```

---

## Legacy CSS Pages (Functional but Different)

These pages use `nextstep-unified.css` and function correctly but have a different design:

### Students Folder (6 pages)
```
students/university-anxiety.html
students/student-mental-health-hamilton.html
students/student-mental-health-kingston.html
students/student-mental-health-london.html
students/student-mental-health-ottawa.html
students/student-mental-health-waterloo.html
```

### Virtual Folder (5 pages)
```
virtual/virtual-therapy-ontario.html
virtual/virtual-therapy-thunder-bay.html
virtual/same-day-virtual-therapy-ontario.html
virtual/mental-health-northern-ontario.html
virtual/online-mental-health-support-ontario.html
```

### Blog Folder (8 pages)
```
blog/index.html
blog/anxiety/do-i-need-therapy.html
blog/anxiety/adult-adhd-vs-high-functioning-anxiety.html
blog/workplace/how-to-recover-from-burnout.html
blog/workplace/imposter-syndrome-at-work.html
blog/mental-health-guides/do-i-need-therapy-quiz.html
blog/mental-health-guides/how-to-find-therapist-toronto.html
blog/mental-health-guides/therapy-quiz-interactive.html
```

---

## Fix Instructions

### What to KEEP When Fixing
1. All schema markup (MedicalWebPage, FAQPage, LocalBusiness)
2. All meta tags (title, description, canonical, OG)
3. Google Analytics tracking code
4. All page copy/content
5. Internal links
6. Author bylines and CRPO credentials

### What to REPLACE
1. Hero section HTML structure
2. Header HTML structure (if using old pattern)
3. Body section classes (replace `.section` with Tailwind)
4. CTA box classes
5. Font imports (use Playfair + Inter only)

### What to REMOVE
1. Duplicate font imports (Cormorant Garamond, DM Sans)
2. Inline compatibility styles (the big `<style>` blocks)
3. Old CSS file references
4. Any `v4-design-system.css` or `nextstep-unified.css` references

---

## Fix Template

For each broken page:

### Step 1: Update Head Section
Replace old font/CSS with:
```html
<!-- Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Google Fonts - Playfair Display + Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Tailwind Config -->
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    navy: '#1e3a4f',
                    'navy-deep': '#152a3a',
                    'navy-light': '#2d4a5e',
                    sage: '#4a7c59',
                    'sage-light': '#5f9970',
                    'sage-soft': 'rgba(74, 124, 89, 0.08)',
                    'sage-medium': 'rgba(74, 124, 89, 0.15)',
                    ivory: '#fdfcfa',
                    cream: '#f8f6f3',
                    linen: '#f2efe9',
                    sand: '#e5e0d8',
                    stone: '#c9c3b8',
                },
                fontFamily: {
                    display: ['Playfair Display', 'Georgia', 'serif'],
                    body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                },
            },
        },
    }
</script>
```

### Step 2: Replace Header
Use the Gemini header from `index.html` or good template pages.

### Step 3: Replace Hero Section
Replace `<section class="hero">` or `<section class="hero-with-bg">` with:
```html
<section class="relative bg-gradient-to-br from-cream via-white to-sage/5 py-16 md:py-24 overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
        <!-- Hero content with Tailwind classes -->
    </div>
</section>
```

### Step 4: Update Body Sections
Replace `.section` classes with Tailwind padding/background classes.

### Step 5: Remove Inline Styles
Delete any `<style>` blocks with compatibility CSS.

---

## Verification Checklist

After fixing each page:

- [ ] Page loads without console errors
- [ ] Hero section displays with gradient background
- [ ] Header is sticky and styled correctly
- [ ] CTA buttons are visible (white on navy)
- [ ] Mobile layout is responsive
- [ ] Schema markup is intact (test with Rich Results)
- [ ] Meta tags are preserved
- [ ] Internal links still work

### Grep Commands for Verification

Check no old classes remain:
```bash
grep -l 'class="hero"' *.html  # Should decrease as pages are fixed
grep -l 'class="hero-with-bg"' *.html  # Should decrease
```

Check all pages have Tailwind:
```bash
grep -L 'cdn.tailwindcss.com' *.html  # Should be empty (except special pages)
```

Check all pages have Gemini fonts:
```bash
grep -L 'Playfair+Display' *.html  # Should be empty
```

---

## Tools Reference

### Browser MCP (Visual Testing)
```
mcp__claude-in-chrome__navigate - Navigate to page
mcp__claude-in-chrome__computer action="screenshot" - Capture visual
mcp__claude-in-chrome__read_page - Read page structure
```

### Design Reference Files
```
docs/branding/design/gemini-homepage-redesign/README.md
docs/branding/design/gemini-homepage-redesign/App.tsx
css/gemini-design.css
```

### Skills Reference
- `frontend-design` skill for component creation
- `meta-title-optimizer` for SEO preservation

---

## Execution Plan

### Phase 1: Critical Pages (P0)
Fix 10 high-traffic pages first:
1. faq.html
2. services.html
3. therapy-costs-ontario.html
4. counselling-services.html
5. life-transitions.html
6. jesse-cynamon-psychotherapist-ontario.html
7. student-mental-health-ontario.html
8. performance-anxiety-therapy-ontario.html
9. university-anxiety-therapy-ontario.html
10. workplace-stress-burnout-therapy.html

### Phase 2: High Priority (P1)
Fix 25 pages including depression, university, and city pages.

### Phase 3: Medium Priority (P2)
Fix 15 anxiety city and online therapy pages.

### Phase 4: Lower Priority (P3)
Fix remaining specialized therapy pages.

### Phase 5: Hero-with-bg Pages
Fix 41 pages using `hero-with-bg` class.

### Phase 6: Legacy Migration (Optional)
Consider migrating students/, virtual/, and blog/ folders to Gemini design.

---

## Notes

- Always test mobile layout after changes
- Preserve all E-E-A-T signals (CRPO #10979, author bylines)
- Keep schema markup intact
- Don't modify page content/copy during design fixes
- Commit frequently with descriptive messages
