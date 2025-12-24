# NextStep Therapy - Gemini Design System

> **CRITICAL REFERENCE**: This document defines ALL design patterns for the NextStep Therapy website. Reference this before creating or modifying ANY page.

**Last Updated**: December 2025
**Design System Version**: Gemini v1.0

---

## Table of Contents

1. [Quick Start - New Page Checklist](#quick-start---new-page-checklist)
2. [Technology Stack](#technology-stack)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Header Component](#header-component)
6. [Hero Patterns](#hero-patterns)
7. [Section Patterns](#section-patterns)
8. [CTA Components](#cta-components)
9. [Footer Component](#footer-component)
10. [Schema Markup Requirements](#schema-markup-requirements)
11. [Analytics & Tracking](#analytics--tracking)
12. [Internal Linking Strategy](#internal-linking-strategy)
13. [SEO Requirements](#seo-requirements)
14. [Complete Page Template](#complete-page-template)

---

## Quick Start - New Page Checklist

Before creating any new page, verify these items:

### Head Section
- [ ] Tailwind CSS CDN included
- [ ] Google Fonts (Playfair Display + Inter)
- [ ] Lucide Icons script
- [ ] Tailwind config with custom colors
- [ ] Meta title (under 60 chars, keyword-first)
- [ ] Meta description (under 160 chars)
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Google Analytics tracking
- [ ] MedicalWebPage schema
- [ ] FAQPage schema (if page has FAQ)

### Body Structure
- [ ] Gemini fixed header
- [ ] Main content with `pt-20` for header spacing
- [ ] Hero section (2-column for service pages)
- [ ] Content sections with proper hierarchy
- [ ] FAQ section with schema
- [ ] Contact CTA section
- [ ] Standard footer

### Content Requirements
- [ ] Author byline: "Jesse Cynamon, RP (CRPO #10979)"
- [ ] Last updated date
- [ ] Internal links to related pages
- [ ] CRPO compliance (no testimonials, no outcome guarantees)

---

## Technology Stack

### Required CDN Links

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
```

### Tailwind Configuration

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    // Primary Blues
                    navy: '#1e3a4f',
                    'navy-deep': '#152a3a',
                    'navy-light': '#2d4a5e',

                    // Accent Greens
                    sage: '#4a7c59',
                    'sage-light': '#5f9970',
                    'sage-soft': 'rgba(74, 124, 89, 0.08)',
                    'sage-medium': 'rgba(74, 124, 89, 0.15)',

                    // Warm Neutrals
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

---

## Color System

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Navy** | `#1e3a4f` | Primary brand, headers, buttons, text |
| **Navy Deep** | `#152a3a` | Hover states, footer |
| **Navy Light** | `#2d4a5e` | Secondary elements |

### Accent Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Sage** | `#4a7c59` | Badges, icons, success states |
| **Sage Light** | `#5f9970` | Hover states |
| **Sage Soft** | `rgba(74, 124, 89, 0.08)` | Backgrounds |

### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Ivory** | `#fdfcfa` | Page background |
| **Cream** | `#f8f6f3` | Hero backgrounds |
| **Linen** | `#f2efe9` | Alternate sections |
| **Sand** | `#e5e0d8` | Borders, dividers |
| **Stone** | `#c9c3b8` | Subtle elements |

---

## Typography

### Font Families

```css
/* Headings */
font-family: 'Playfair Display', Georgia, serif;
/* Tailwind: font-display */

/* Body Text */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
/* Tailwind: font-body */
```

### Heading Hierarchy

| Element | Classes | Size |
|---------|---------|------|
| H1 | `font-display text-4xl md:text-5xl lg:text-6xl font-medium text-navy` | 36px → 60px |
| H2 | `font-display text-3xl md:text-4xl font-semibold text-navy` | 30px → 36px |
| H3 | `font-display text-xl md:text-2xl font-semibold text-navy` | 20px → 24px |
| H4 | `font-display text-lg font-semibold text-navy` | 18px |

### Body Text

| Element | Classes |
|---------|---------|
| Lead | `text-lg md:text-xl text-gray-600 leading-relaxed` |
| Body | `text-base text-gray-600 leading-relaxed` |
| Small | `text-sm text-gray-500` |

---

## Header Component

### Standard Fixed Header

**ALWAYS use this exact header pattern on all pages:**

```html
<header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-sand/50">
    <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
                <a href="/" class="font-display text-xl font-semibold text-navy">Next Step Therapy</a>
                <span class="hidden sm:inline-block px-3 py-1 bg-sage/10 text-sage text-xs font-semibold rounded-full">CRPO #10979</span>
            </div>
            <nav class="hidden md:flex items-center gap-8">
                <a href="/#approach" class="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Approach</a>
                <a href="/#specializations" class="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Services</a>
                <a href="/#contact" class="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Contact</a>
            </nav>
            <div class="flex items-center gap-4">
                <a href="tel:+14163062157" class="hidden sm:block text-sm font-medium text-navy hover:text-sage transition-colors">(416) 306-2157</a>
                <a href="https://nextsteptherapy.janeapp.com/" class="bg-navy text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-light transition-colors shadow-sm">Book Now</a>
            </div>
        </div>
    </div>
</header>
```

### Key Header Features
- Fixed positioning with `backdrop-blur-md`
- CRPO badge visible on all devices (sm+)
- Phone number hidden on mobile
- Book Now CTA always visible
- z-50 to stay above content

---

## Hero Patterns

### Service Page Hero (2-Column)

Use this pattern for all service/therapy pages:

```html
<main class="pt-20">
    <section class="py-20 md:py-28 bg-gradient-to-br from-cream via-ivory to-sage/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <!-- Left Column: Content -->
                <div>
                    <!-- Category Badge -->
                    <span class="inline-block px-4 py-1.5 bg-sage/10 text-sage text-xs font-semibold rounded-full mb-6 tracking-wider">SERVICE CATEGORY</span>

                    <!-- H1 -->
                    <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-navy leading-tight mb-6">Page Title Here</h1>

                    <!-- Lead Text -->
                    <p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">Brief description of the service and value proposition.</p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-wrap gap-4 mb-8">
                        <a href="https://nextsteptherapy.janeapp.com/" class="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-navy-light transition-all shadow-lg">
                            <i data-lucide="calendar" class="w-5 h-5"></i>
                            Schedule 15-Min Call
                        </a>
                        <a href="tel:+14163062157" class="inline-flex items-center gap-2 bg-white border-2 border-navy text-navy px-8 py-4 rounded-xl text-base font-semibold hover:bg-navy hover:text-white transition-all">
                            <i data-lucide="phone" class="w-5 h-5"></i>
                            (416) 306-2157
                        </a>
                    </div>

                    <!-- Trust Badges -->
                    <div class="flex flex-wrap gap-3">
                        <span class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm border border-sand/50">
                            <i data-lucide="shield-check" class="w-4 h-4 text-sage"></i> CRPO #10979
                        </span>
                        <span class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm border border-sand/50">
                            <i data-lucide="dollar-sign" class="w-4 h-4 text-sage"></i> $175/session
                        </span>
                        <span class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm border border-sand/50">
                            <i data-lucide="calendar-check" class="w-4 h-4 text-sage"></i> Same-Week Available
                        </span>
                    </div>
                </div>

                <!-- Right Column: Feature Cards -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-white p-6 rounded-2xl shadow-md border border-sand/30 hover:shadow-lg transition-shadow">
                        <div class="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-4">
                            <i data-lucide="heart" class="w-6 h-6 text-sage"></i>
                        </div>
                        <h3 class="font-display text-lg font-semibold text-navy mb-2">Card Title</h3>
                        <p class="text-gray-600 text-sm">Brief description of the feature.</p>
                    </div>
                    <!-- Repeat for 3 more cards -->
                </div>
            </div>
        </div>
    </section>
</main>
```

### Feature Card Icons (Common)

| Service Type | Icon Options |
|--------------|--------------|
| Evidence-Based | `heart`, `brain`, `sparkles` |
| Virtual | `video`, `monitor`, `laptop` |
| Scheduling | `calendar`, `calendar-check`, `clock` |
| Location | `map-pin`, `home`, `building` |
| Pricing | `dollar-sign`, `wallet`, `receipt` |
| Credentials | `shield-check`, `award`, `badge` |
| Support | `users`, `message-circle`, `phone` |

---

## Section Patterns

### Standard Content Section

```html
<section class="py-16 md:py-24 bg-white">
    <div class="max-w-4xl mx-auto px-6">
        <h2 class="font-display text-3xl md:text-4xl font-semibold text-navy mb-8">Section Title</h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-6">Content paragraph...</p>
    </div>
</section>
```

### Alternate Background Section

```html
<section class="py-16 md:py-24 bg-cream">
    <!-- Same content structure -->
</section>
```

### Info Cards Grid

```html
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
    <div class="bg-white p-6 rounded-xl shadow-sm border border-sand/30">
        <div class="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center mb-4">
            <i data-lucide="icon-name" class="w-5 h-5 text-sage"></i>
        </div>
        <h3 class="font-display text-lg font-semibold text-navy mb-2">Card Title</h3>
        <p class="text-gray-600 text-sm">Card description text.</p>
    </div>
</div>
```

---

## CTA Components

### Primary CTA Button

```html
<a href="https://nextsteptherapy.janeapp.com/" class="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-navy-light transition-all shadow-lg">
    <i data-lucide="calendar" class="w-5 h-5"></i>
    Schedule 15-Min Call
</a>
```

### Secondary CTA Button

```html
<a href="tel:+14163062157" class="inline-flex items-center gap-2 bg-white border-2 border-navy text-navy px-8 py-4 rounded-xl text-base font-semibold hover:bg-navy hover:text-white transition-all">
    <i data-lucide="phone" class="w-5 h-5"></i>
    (416) 306-2157
</a>
```

### CTA Box (Full Width)

```html
<section class="py-16 md:py-24 bg-navy">
    <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="font-display text-3xl md:text-4xl font-semibold text-white mb-6">Ready to Take the Next Step?</h2>
        <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Brief supportive message about reaching out.</p>
        <div class="flex flex-wrap gap-4 justify-center">
            <a href="https://nextsteptherapy.janeapp.com/" class="inline-flex items-center gap-2 bg-sage text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-sage-light transition-all shadow-lg">
                <i data-lucide="calendar" class="w-5 h-5"></i>
                Book Free Consultation
            </a>
            <a href="tel:+14163062157" class="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-xl text-base font-semibold hover:bg-cream transition-all">
                <i data-lucide="phone" class="w-5 h-5"></i>
                (416) 306-2157
            </a>
        </div>
    </div>
</section>
```

---

## Footer Component

```html
<footer class="bg-navy-deep py-16">
    <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-12">
            <!-- Brand Column -->
            <div>
                <h3 class="font-display text-xl font-semibold text-white mb-4">Next Step Therapy</h3>
                <p class="text-gray-400 text-sm mb-4">Evidence-based therapy using ACT and CBT approaches. Serving Ontario since 2022.</p>
                <div class="flex gap-2">
                    <span class="px-3 py-1 bg-sage/20 text-sage text-xs font-medium rounded-full">CRPO #10979</span>
                    <span class="px-3 py-1 bg-sage/20 text-sage text-xs font-medium rounded-full">OAMHP Member</span>
                </div>
            </div>

            <!-- Services Column -->
            <div>
                <h4 class="font-semibold text-white mb-4">Services</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="/anxiety-therapy-ontario.html" class="text-gray-400 hover:text-white transition-colors">Anxiety Therapy</a></li>
                    <li><a href="/depression-therapy-ontario.html" class="text-gray-400 hover:text-white transition-colors">Depression Support</a></li>
                    <li><a href="/workplace-stress-burnout-therapy.html" class="text-gray-400 hover:text-white transition-colors">Workplace Stress</a></li>
                    <li><a href="/student-mental-health-ontario.html" class="text-gray-400 hover:text-white transition-colors">Student Mental Health</a></li>
                </ul>
            </div>

            <!-- Locations Column -->
            <div>
                <h4 class="font-semibold text-white mb-4">Locations</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="/online-therapy-toronto.html" class="text-gray-400 hover:text-white transition-colors">Toronto</a></li>
                    <li><a href="/therapy-ottawa-ontario.html" class="text-gray-400 hover:text-white transition-colors">Ottawa</a></li>
                    <li><a href="/anxiety-therapy-burlington.html" class="text-gray-400 hover:text-white transition-colors">Burlington</a></li>
                    <li><a href="/therapy-mississauga-ontario.html" class="text-gray-400 hover:text-white transition-colors">Mississauga</a></li>
                </ul>
            </div>

            <!-- Contact Column -->
            <div>
                <h4 class="font-semibold text-white mb-4">Contact</h4>
                <p class="text-gray-400 text-sm mb-2">
                    <a href="mailto:jesse@nextsteptherapy.ca" class="hover:text-white transition-colors">jesse@nextsteptherapy.ca</a>
                </p>
                <p class="text-gray-400 text-sm mb-4">
                    <a href="tel:+14163062157" class="hover:text-white transition-colors">(416) 306-2157</a>
                </p>
                <div class="p-3 bg-red-500/10 rounded-lg">
                    <p class="text-red-400 text-xs">For emergencies, call 911 or visit your nearest emergency room.</p>
                </div>
            </div>
        </div>

        <div class="border-t border-white/10 mt-12 pt-8 text-center">
            <p class="text-gray-500 text-sm">&copy; 2025 Next Step Therapy. All rights reserved.</p>
        </div>
    </div>
</footer>
```

---

## Schema Markup Requirements

### MedicalWebPage Schema (Required on ALL therapy pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Page Title Here",
  "description": "Page meta description here",
  "url": "https://nextsteptherapy.ca/page-url.html",
  "lastReviewed": "2025-12-01",
  "reviewedBy": {
    "@type": "Person",
    "name": "Jesse Cynamon, RP",
    "identifier": "CRPO #10979"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Next Step Therapy",
    "url": "https://nextsteptherapy.ca"
  }
}
</script>
```

### FAQPage Schema (Required when page has FAQ section)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text here (50-100 words)."
      }
    }
  ]
}
</script>
```

### LocalBusiness Schema (Homepage only)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Next Step Therapy",
  "description": "Professional psychotherapy services in Ontario",
  "url": "https://nextsteptherapy.ca",
  "telephone": "+14163062157",
  "email": "jesse@nextsteptherapy.ca",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "priceRange": "$$",
  "openingHours": "Mo-Fr 08:00-20:00, Sa 09:00-17:00"
}
</script>
```

---

## Analytics & Tracking

### Google Analytics 4 Setup

```html
<!-- Google Analytics 4 + Conversion Tracking -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-J8H4YBGSHR"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-J8H4YBGSHR', {
        'allow_enhanced_conversions': true,
        'send_page_view': true
    });

    // Track phone clicks
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', function() {
                gtag('event', 'phone_call', {
                    'event_category': 'conversion',
                    'value': 175,
                    'currency': 'CAD'
                });
            });
        });

        // Track booking clicks
        document.querySelectorAll('a[href*="janeapp.com"]').forEach(link => {
            link.addEventListener('click', function() {
                gtag('event', 'booking_click', {
                    'event_category': 'conversion',
                    'value': 175,
                    'currency': 'CAD'
                });
            });
        });
    });
</script>
```

### Ahrefs Analytics (Optional)

```html
<script src="https://analytics.ahrefs.com/analytics.js" data-key="O1gjE3UGMPbfTSmzGXA8Nw" async></script>
```

### Microsoft Clarity (Optional)

```html
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "u8v6vfikjr");
</script>
```

---

## Internal Linking Strategy

### Required Links Per Page Type

#### Service Pages (e.g., anxiety-therapy-ontario.html)
- Link to homepage
- Link to 2-3 related service pages
- Link to relevant city pages
- Link to costs page
- Link to FAQ page

#### City Pages (e.g., therapy-toronto-ontario.html)
- Link to homepage
- Link to main service pages (anxiety, depression)
- Link to 2-3 nearby city pages
- Link to costs page

#### Student Pages
- Link to main student mental health page
- Link to relevant university pages
- Link to anxiety/depression service pages

### Anchor Text Best Practices
- Use descriptive anchor text (not "click here")
- Include target keywords naturally
- Vary anchor text across pages
- Example: "anxiety therapy in Toronto" instead of "here"

---

## SEO Requirements

### Meta Title Formula

```
Service + Location | Differentiator | NextStep Therapy
```

**Examples:**
- `Anxiety Therapy Ontario | Same-Week Virtual | NextStep Therapy`
- `Depression Therapy Toronto | CRPO #10979 | NextStep Therapy`

**Rules:**
- Under 60 characters
- Keyword first
- Include differentiator (Same-Week, CRPO, Virtual)

### Meta Description Formula

```
[Problem acknowledgment]. [Solution offered]. [Credential]. [CTA hint].
```

**Example:**
```
Feeling overwhelmed by anxiety? Evidence-based virtual therapy for Ontario professionals. CRPO #10979 registered. Book a free 15-min consultation.
```

**Rules:**
- Under 160 characters
- Include primary keyword
- Mention CRPO #10979
- Soft CTA

### E-E-A-T Signals (Required on ALL pages)

1. **Author Byline**: "Jesse Cynamon, RP (CRPO #10979)"
2. **Last Updated**: Show date (e.g., "Last Updated: December 2025")
3. **Citations**: Link to CRPO, CMHA, research when relevant
4. **Contact Info**: Phone and email in footer
5. **Privacy Policy**: Link in footer

---

## Complete Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">

    <!-- SEO Meta Tags -->
    <title>Service + Location | Differentiator | NextStep Therapy</title>
    <meta name="description" content="Meta description under 160 characters.">
    <link rel="canonical" href="https://nextsteptherapy.ca/page-url.html">

    <!-- Open Graph -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="OG description">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://nextsteptherapy.ca/page-url.html">
    <meta property="og:image" content="https://nextsteptherapy.ca/images/therapy-session-warm.jpg">

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-J8H4YBGSHR"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-J8H4YBGSHR', {
            'allow_enhanced_conversions': true,
            'send_page_view': true
        });
    </script>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        navy: '#1e3a4f',
                        'navy-light': '#2d5066',
                        sage: '#4a7c59',
                        cream: '#f8f6f2',
                        sand: '#e5e0d8',
                        ivory: '#fdfcfa',
                    },
                    fontFamily: {
                        display: ['Playfair Display', 'serif'],
                        body: ['Inter', 'sans-serif'],
                    },
                },
            },
        }
    </script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Page Title",
      "description": "Page description",
      "url": "https://nextsteptherapy.ca/page-url.html",
      "lastReviewed": "2025-12-01",
      "reviewedBy": {
        "@type": "Person",
        "name": "Jesse Cynamon, RP",
        "identifier": "CRPO #10979"
      }
    }
    </script>
</head>
<body class="font-body bg-cream">

    <!-- Header (ALWAYS USE THIS EXACT PATTERN) -->
    <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-sand/50">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <a href="/" class="font-display text-xl font-semibold text-navy">Next Step Therapy</a>
                    <span class="hidden sm:inline-block px-3 py-1 bg-sage/10 text-sage text-xs font-semibold rounded-full">CRPO #10979</span>
                </div>
                <nav class="hidden md:flex items-center gap-8">
                    <a href="/#approach" class="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Approach</a>
                    <a href="/#specializations" class="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Services</a>
                    <a href="/#contact" class="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Contact</a>
                </nav>
                <div class="flex items-center gap-4">
                    <a href="tel:+14163062157" class="hidden sm:block text-sm font-medium text-navy hover:text-sage transition-colors">(416) 306-2157</a>
                    <a href="https://nextsteptherapy.janeapp.com/" class="bg-navy text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-light transition-colors shadow-sm">Book Now</a>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="pt-20">
        <!-- Hero Section -->
        <!-- Content Sections -->
        <!-- FAQ Section -->
        <!-- CTA Section -->
    </main>

    <!-- Footer -->
    <footer class="bg-navy-deep py-16">
        <!-- Footer content -->
    </footer>

    <!-- Initialize Lucide Icons -->
    <script>
        lucide.createIcons();
    </script>
</body>
</html>
```

---

## CRPO Compliance Reminders

**NEVER include:**
- Client testimonials
- Outcome guarantees ("You will feel better")
- Unverifiable claims
- Before/after comparisons

**ALWAYS include:**
- CRPO #10979 on every page
- Factual, verifiable statements
- Professional disclaimers where appropriate
- Emergency resources disclaimer

---

*This document is the single source of truth for NextStep Therapy website design. Update this document when design patterns change.*
