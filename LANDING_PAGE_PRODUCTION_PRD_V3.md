# 🎯 LANDING PAGE PRODUCTION PRD V3 - CONVERSION OPTIMIZED | NextStepTherapy.ca
*Production Requirements Document - September 2025*

## 📋 Executive Summary

Create high-converting, SEO-optimized therapy landing pages using validated demand data. Each page targets specific therapy specialties with minimal navigation to maximize conversion rates while maintaining full CRPO compliance.

---

## 🚨 CRITICAL FIXES FROM PERFECTIONISM PAGE ISSUES

### **HEADER REQUIREMENTS**
- **USE MINIMAL HEADER** - Research shows landing pages convert better with minimal navigation
- **NO FULL SITE NAVIGATION** - Reduces distractions and exit points
- **ONLY INCLUDE:** Logo + CRPO badge + Single CTA button
- **ANCHOR LINKS:** Header CTA should link to `#contact-cta` section

### **CONTACT INFORMATION - NEVER USE FAKE DATA**
- **REAL PHONE:** `(416) 306-2157` 
- **REAL EMAIL:** `info@nextsteptherapy.ca`
- **VERIFY:** Always check existing pages for current contact info
- **NO FAKE RESEARCH:** Use conservative language like "has been shown" not "research proves"

### **INTERNAL LINKING - ONLY LINK TO LIVE PAGES**
- **VERIFY ALL LINKS:** Check that target pages return 200 (not 404) before linking
- **LIVE PAGES CONFIRMED:**
  - `university-anxiety.html` ✅
  - `college-anxiety.html` ✅
  - `virtual-therapy-ontario.html` ✅
  - `about.html` ✅ (minimal content)
- **NEVER LINK TO:** Any page that returns 404 errors
- **TEST LINKS:** Use firecrawl to verify pages are live before adding internal links

### **CENTERING ISSUES**
- **ALL TEXT ELEMENTS:** Must include `margin-left: auto; margin-right: auto;` for proper centering
- **BUTTON GROUPS:** Use flexbox centering with `justify-content: center`
- **HERO TEXT:** Use `text-align: center` + auto margins

---

## 📁 Template Structure

### **MASTER TEMPLATE**
**File:** `university-anxiety.html` (WORKING TEMPLATE)
**Location:** `/Users/jessecynamon/NextStepTherapy/university-anxiety.html`

### **HEADER TEMPLATE (MINIMAL)**
```html
<!-- Minimal Landing Page Header -->
<header class="header minimal-header">
    <div class="container">
        <div class="header-content">
            <div class="logo-section">
                <a href="/" class="logo-text">Next Step Therapy</a>
                <span class="credentials-badge-prominent">CRPO #10979</span>
            </div>
            
            <a href="#contact-cta" class="header-cta">
                Book Consultation
            </a>
        </div>
    </div>
</header>
```

### **REQUIRED CSS FOR MINIMAL HEADER**
```css
/* Minimal Landing Page Header */
.header {
    background: var(--background-primary);
    padding: var(--space-sm) 0;
    border-bottom: 1px solid #e5e7eb;
    position: sticky;
    top: 0;
    z-index: 100;
}

.minimal-header .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-cta {
    background: linear-gradient(135deg, #2E7D32, #4CAF50);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-md);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
}

.header-cta:hover {
    background: linear-gradient(135deg, #1B5E20, #388E3C);
    transform: translateY(-1px);
    color: white;
}
```

---

## 🎯 CONTENT REQUIREMENTS

### **WORD COUNT**
- **MINIMUM:** 2,500 words
- **VERIFY:** Use `wc -w filename.html` to check

### **SEO OPTIMIZATION**
- **H1:** Include target keyword exactly
- **H2/H3:** Include related keywords naturally
- **Meta Title:** Target keyword + location + CRPO #10979
- **Meta Description:** Compelling, under 160 characters
- **Internal Links:** 3-5 contextual links to related pages

### **SCHEMA MARKUP (REQUIRED)**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Page Topic]: Professional Support for [Target Audience]",
  "description": "Comprehensive guide to understanding and managing [condition]",
  "wordCount": "2500",
  "author": {
    "@type": "Person",
    "@id": "https://nextsteptherapy.ca/#jessecynamon",
    "name": "Jesse Cynamon, RP",
    "identifier": "CRPO #10979",
    "jobTitle": "Registered Psychotherapist"
  }
}
```

### **FAQ SCHEMA (REQUIRED)**
- **MINIMUM:** 5 questions
- **TARGET:** Featured snippets
- **FORMAT:** JSON-LD schema markup

---

## 🏥 CRPO COMPLIANCE CHECKLIST

### **MANDATORY LANGUAGE**
- ✅ "CRPO #10979" prominently displayed
- ✅ Process-focused language ("develop," "learn," "work together")
- ✅ Evidence-based approaches mentioned
- ✅ Educational tone throughout

### **PROHIBITED CONTENT**
- ❌ NO outcome guarantees ("cure," "eliminate," "fix")
- ❌ NO testimonials or client stories
- ❌ NO superlatives ("best," "top," "leading")
- ❌ NO fake research claims or statistics

### **CONSERVATIVE RESEARCH LANGUAGE**
- ✅ "has been shown to be effective"
- ✅ "clinical experience suggests"
- ✅ "research indicates"
- ❌ "research proves" or "studies show" (unless citing specific studies)

---

## 📱 TECHNICAL REQUIREMENTS

### **GA4 TRACKING (REQUIRED)**
```javascript
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
});
```

### **CONTACT INFORMATION**
- **Phone:** `(416) 306-2157`
- **Email:** `info@nextsteptherapy.ca`
- **Text:** Same as phone number
- **CTA Links:** `https://nextsteptherapy.ca/#contact`

### **MOBILE OPTIMIZATION**
- ✅ Responsive design with mobile-first approach
- ✅ Mobile sticky CTA
- ✅ Touch-friendly buttons (min 44px)
- ✅ Fast loading (under 3 seconds)

---

## 🎨 DESIGN STANDARDS

### **BRAND COLORS (CSS VARIABLES)**
```css
:root {
    --primary-soft-blue: #4A6B7A;
    --primary-light: #6B89A0;
    --primary-deep: #2C4A5A;
    --accent-warm: #8FA68E;
    --accent-gold: #B8956A;
    --background-primary: #FEFEFE;
    --neutral-soft: #F8F9FA;
    --neutral-cream: #F5F6F7;
    --text-primary: #1a1a1a;
    --text-secondary: #4A5568;
}
```

### **TYPOGRAPHY**
- **Display Font:** 'Playfair Display' (headings)
- **Body Font:** 'Inter' (content)
- **H1:** clamp(2.5rem, 5vw, 4rem) - italic, weight 600
- **H2:** clamp(2rem, 4vw, 2.75rem) - weight 600
- **Body:** 17px, line-height 1.7

### **CTA BUTTONS**
```css
.cta-primary {
    background: linear-gradient(135deg, var(--accent-warm), var(--primary-light));
    color: white;
    padding: 16px 32px;
    border-radius: 8px;
    font-size: 1.125rem;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(143, 166, 142, 0.3);
    transition: all 0.2s ease;
    display: inline-block;
    min-width: 200px;
    text-align: center;
}
```

---

## 🔍 INTERNAL LINKING STRATEGY

### **CONTEXTUAL LINKS (3-5 PER PAGE)**
- Link to related therapy specialties
- Link to broader topic pages
- Link to location-specific pages
- Use natural anchor text
- Open in same window

### **EXAMPLE INTERNAL LINKS**
```html
<!-- Natural integration -->
<p>Many high achievers also struggle with 
<a href="performance-anxiety.html" style="color: var(--primary-soft-blue); text-decoration: underline;">performance anxiety</a>, 
which compounds the perfectionist cycle.</p>
```

---

## 📊 QUALITY ASSURANCE CHECKLIST

### **PRE-DEPLOYMENT**
- [ ] Word count 2,500+ (`wc -w filename.html`)
- [ ] Real phone number `(416) 306-2157`
- [ ] Minimal header with single CTA
- [ ] All text properly centered
- [ ] GA4 tracking code included
- [ ] CRPO compliance verified
- [ ] Schema markup validated
- [ ] Internal links functional
- [ ] Mobile responsive tested

### **POST-DEPLOYMENT**
- [ ] Page loads under 3 seconds
- [ ] All CTAs functional
- [ ] Phone tracking works
- [ ] Schema validates (Google Rich Results Test)
- [ ] Mobile usability passes
- [ ] No console errors

---

## 🚀 DEPLOYMENT PROCESS

### **LOCAL TESTING**
1. Create page using template
2. Test locally: `python3 -m http.server 8080`
3. Review at `http://localhost:8080/filename.html`
4. Fix any issues before deployment

### **LIVE DEPLOYMENT**
1. Upload to live site
2. Update sitemap.xml
3. Submit to Google Search Console
4. Monitor for indexing issues

---

## 📈 SUCCESS METRICS

### **SEO TARGETS**
- **Impressions:** 50+ within 30 days
- **Average Position:** Under 50 within 60 days
- **Click-through Rate:** 2%+ within 90 days

### **CONVERSION TARGETS**
- **Phone Calls:** 2+ per month per page
- **Form Submissions:** 1+ per month per page
- **Overall Conversion Rate:** 2-4%

---

## 🔄 CONTINUOUS IMPROVEMENT

### **MONTHLY REVIEW**
- Analyze GSC performance data
- Review conversion tracking
- Update content based on performance
- A/B test CTA placement and copy

### **QUARTERLY UPDATES**
- Refresh content for seasonality
- Update internal linking
- Review CRPO compliance
- Optimize for new keywords

---

*This PRD ensures all future landing pages avoid the issues found in the perfectionism page while maximizing conversion potential and maintaining CRPO compliance.*
