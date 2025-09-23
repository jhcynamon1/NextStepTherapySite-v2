# 🎯 MANUS PAGE CREATION PRD - COMPLETE VERSION
*Comprehensive Standardized Process for Creating SEO-Optimized Therapy Landing Pages*

---

## 📋 COMMAND FORMAT

To create new therapy pages using this framework, use this exact format:

```
CREATE MANUS PAGE: [PAGE_TYPE] | [TARGET_KEYWORD] | [LOCATION] | [SPECIFIC_DETAILS]
```

**Example Commands:**
```
CREATE MANUS PAGE: service-city | anxiety therapy | Ottawa | Focus on professionals, include local university mentions
CREATE MANUS PAGE: student-location | student mental health | Hamilton | McMaster University focus, academic pressure
CREATE MANUS PAGE: condition-specific | ADHD therapy | Toronto | Executive function support, workplace challenges
```

---

## 🎨 COMPLETE MANUS DESIGN SYSTEM SPECIFICATIONS

### **1. Visual Design Standards**

#### **Color Palette (EXACT VALUES)**
```css
/* Primary Brand Colors */
--manus-green-primary: #6B8E6F;    /* Main green - buttons, headers */
--manus-green-hover: #5A7D5E;      /* Darker green - hover states */
--manus-green-light: rgba(107, 142, 111, 0.1);  /* Light green - backgrounds */
--manus-green-border: rgba(107, 142, 111, 0.2); /* Green borders */

/* Text Colors */
--text-primary: #2C3E50;           /* Main body text */
--text-secondary: #5A6B7D;         /* Secondary text */
--text-white: #FFFFFF;             /* White text on dark backgrounds */

/* Background Colors */
--bg-primary: #FFFFFF;              /* Main background */
--bg-alternate: #F8F9FA;           /* Alternate section backgrounds */
--bg-card: #F8F9FA;                /* Card backgrounds */
```

#### **Typography System**
```css
/* Font Families */
--font-heading: 'Playfair Display', serif;  /* Headings */
--font-body: 'Inter', sans-serif;           /* Body text */

/* Font Sizes */
--h1-size: 2.5rem (40px);          /* Page title */
--h2-size: 2rem (32px);            /* Section headings */
--h3-size: 1.5rem (24px);          /* Subsection headings */
--h4-size: 1.25rem (20px);         /* Card headings */
--body-size: 1rem (16px);          /* Body text */
--small-size: 0.875rem (14px);     /* Small text/pills */

/* Font Weights */
--weight-light: 300;
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
```

#### **Spacing System**
```css
/* Consistent Spacing Variables */
--space-xs: 0.5rem (8px);
--space-sm: 1rem (16px);
--space-md: 1.5rem (24px);
--space-lg: 2rem (32px);
--space-xl: 3rem (48px);
--space-section: 5rem (80px);      /* Between sections */

/* Border Radius */
--radius-sm: 4px;                   /* Small elements */
--radius-md: 8px;                   /* Cards, inputs */
--radius-lg: 12px;                  /* Buttons */
--radius-pill: 50px;                /* Pills, badges */
```

### **2. Component Specifications**

#### **Header Component**
```html
<header class="header smart-sticky" data-astro-cid-[ID]>
  <div class="container">
    <div class="header-content">
      <div class="logo-section">
        <img src="/images/asset104.png" alt="Next Step Therapy Logo" class="logo" onerror="this.style.display='none'">
        <a href="/" class="logo-text">Next Step Therapy</a>
        <span class="credentials-badge-prominent">CRPO #10979</span>
      </div>
      <nav class="nav">
        <a href="/#approach">Approach</a>
        <a href="/#specializations">Services</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a href="tel:+14163062157" class="header-phone">(416) 306-2157</a>
    </div>
  </div>
</header>
```

**CRITICAL NAVIGATION RULES:**
- Navigation "Contact" link: MUST use `href="/#contact"` (routes to homepage contact)
- Main CTA buttons: MUST use `href="#contact"` (scrolls to same-page contact section)
- This ensures proper user flow: nav goes to homepage, CTAs stay on current page

#### **CTA Button Specifications**
```css
/* Primary CTA Button */
.manus-primary-cta {
  background: #6B8E6F !important;
  color: #FFFFFF !important;
  font-weight: 600 !important;
  padding: 1.25rem 2.5rem !important;
  border-radius: 12px !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
  display: inline-block !important;
  min-height: 48px !important;
  box-shadow: 0 2px 8px rgba(107, 142, 111, 0.2) !important;
}

.manus-primary-cta:hover {
  background: #5A7D5E !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(107, 142, 111, 0.3) !important;
}

/* Secondary CTA Button */
.manus-secondary-cta {
  background: transparent !important;
  color: #6B8E6F !important;
  border: 1.5px solid #6B8E6F !important;
  font-weight: 600 !important;
  padding: 1rem 2rem !important;
  border-radius: 12px !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
  display: inline-block !important;
  min-height: 48px !important;
}

.manus-secondary-cta:hover {
  background: #6B8E6F !important;
  color: #FFFFFF !important;
  transform: translateY(-2px) !important;
}
```

#### **Trust Pills Component**
```html
<div class="trust-pills">
  <span class="trust-pill">✓ CRPO #10979 Licensed</span>
  <span class="trust-pill">✓ Virtual Sessions Available</span>
  <span class="trust-pill">✓ Insurance Receipts Provided</span>
  <span class="trust-pill">✓ Free 15-Min Consultation</span>
</div>
```

```css
.trust-pill {
  background: rgba(107, 142, 111, 0.1);
  color: #6B8E6F;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(107, 142, 111, 0.2);
}
```

---

## 🔍 COMPLETE SEO OPTIMIZATION SPECIFICATIONS

### **1. Meta Tag Requirements**

#### **Essential Meta Tags (ALL REQUIRED)**
```html
<!-- Character Set & Viewport -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- SEO Title & Description -->
<title>[Service] [City] | Professional Support - Next Step Therapy</title>
<meta name="description" content="[Service] in [City]. Virtual sessions, CRPO registered, insurance receipts. Book free consultation. Professional support for [specific issues].">

<!-- Canonical URL -->
<link rel="canonical" href="https://nextsteptherapy.ca/[page-slug]">

<!-- Open Graph Tags -->
<meta property="og:title" content="[Service] [City] | Next Step Therapy">
<meta property="og:description" content="Professional [service] support in [City] with CRPO registered psychotherapist. Virtual sessions available throughout Ontario.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://nextsteptherapy.ca/[page-slug]">
<meta property="og:image" content="https://nextsteptherapy.ca/images/therapy-session-warm.jpg">
<meta property="og:site_name" content="Next Step Therapy">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Service] [City] | Next Step Therapy">
<meta name="twitter:description" content="Professional [service] support in [City]. CRPO registered. Book today.">
<meta name="twitter:image" content="https://nextsteptherapy.ca/images/therapy-session-warm.jpg">

<!-- Additional SEO Tags -->
<meta name="robots" content="index, follow">
<meta name="googlebot" content="index, follow">
<meta name="author" content="Jesse Cynamon, RP">
<meta name="publisher" content="Next Step Therapy">
<meta name="copyright" content="Next Step Therapy">
```

### **2. Complete JSON-LD Schema Markup**

#### **For Service Pages**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://nextsteptherapy.ca/[page-slug]#webpage",
      "url": "https://nextsteptherapy.ca/[page-slug]",
      "name": "[Service] [City] | Professional Support",
      "description": "Professional [service] services in [City]. CRPO registered psychotherapist offering evidence-based support.",
      "inLanguage": "en-CA",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://nextsteptherapy.ca/images/therapy-session-warm.jpg"
      },
      "datePublished": "2025-09-22",
      "dateModified": "2025-09-22",
      "provider": {
        "@type": "Psychologist",
        "@id": "https://nextsteptherapy.ca/#psychologist"
      }
    },
    {
      "@type": "Psychologist",
      "@id": "https://nextsteptherapy.ca/#psychologist",
      "name": "Jesse Cynamon, RP",
      "identifier": "CRPO #10979",
      "jobTitle": "Registered Psychotherapist",
      "telephone": "+14163062157",
      "email": "jesse@nextsteptherapy.ca",
      "url": "https://nextsteptherapy.ca",
      "image": "https://nextsteptherapy.ca/images/jesse-cynamon.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "areaServed": {
        "@type": "State",
        "name": "Ontario",
        "containsPlace": [
          {"@type": "City", "name": "[City]"},
          {"@type": "City", "name": "Toronto"},
          {"@type": "City", "name": "Ottawa"}
        ]
      },
      "knowsAbout": [
        "Anxiety Therapy",
        "Depression Treatment",
        "ACT Therapy",
        "Virtual Therapy",
        "Student Mental Health"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://nextsteptherapy.ca/#business",
      "name": "Next Step Therapy",
      "description": "Professional psychotherapy services throughout Ontario",
      "url": "https://nextsteptherapy.ca",
      "telephone": "+14163062157",
      "priceRange": "$$",
      "paymentAccepted": ["Insurance", "Credit Card", "E-Transfer"],
      "currenciesAccepted": "CAD",
      "openingHours": "Mo-Fr 08:00-20:00, Sa 09:00-17:00",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Therapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "[Service] Therapy",
            "description": "Professional [service] therapy sessions",
            "price": "175.00",
            "priceCurrency": "CAD",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is virtual therapy as effective as in-person?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Research consistently shows that virtual therapy is just as effective as in-person therapy for anxiety and depression disorders."
          }
        }
      ]
    }
  ]
}
```

#### **For Student Pages (Additional Schema)**
```json
{
  "audience": {
    "@type": "EducationalAudience",
    "educationalRole": "student",
    "audienceType": "University Students",
    "geographicArea": {
      "@type": "City",
      "name": "[City]"
    }
  },
  "educationalLevel": "Post-Secondary",
  "mentions": {
    "@type": "CollegeOrUniversity",
    "name": "[University Name]",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "[City]",
      "addressRegion": "ON"
    }
  }
}
```

### **3. Content SEO Requirements**

#### **Keyword Optimization**
- **Primary Keyword**: Must appear in:
  - [ ] H1 (once, exact match)
  - [ ] Meta title (beginning preferred)
  - [ ] Meta description (natural placement)
  - [ ] First paragraph (within first 100 words)
  - [ ] At least 2 H2 headings
  - [ ] 3-5 times naturally in body content

- **Secondary Keywords**: Include variations:
  - [ ] "[service] in [city]"
  - [ ] "[city] [service]"
  - [ ] "[service] near me" (for local intent)
  - [ ] "registered psychotherapist [city]"
  - [ ] "CRPO therapist [city]"

#### **Internal Linking Structure**
```html
<!-- Required Internal Links -->
<a href="/">Homepage</a>
<a href="/#contact">Contact Form</a>
<a href="/anxiety-therapy-ontario">Provincial Service Page</a>
<a href="/virtual-therapy-ontario">Virtual Therapy Option</a>
<a href="/student-mental-health-ontario">Student Services (if relevant)</a>
```

---

## 🏛️ CRPO COMPLIANCE REQUIREMENTS

### **1. Mandatory Display Elements**

#### **Registration Information**
- **Header Badge**: `CRPO #10979` must be visible in header
- **Footer Disclosure**: Full registration statement required
- **About Section**: Complete credentials disclosure

#### **Required Disclosure Text**
```html
<!-- Header Badge -->
<span class="credentials-badge-prominent">CRPO #10979</span>

<!-- Footer Professional Disclosure -->
<div class="professional-disclosure">
  <p><strong>Jesse Cynamon, RP</strong></p>
  <p>Registered Psychotherapist | CRPO Registration #10979</p>
  <p>Providing professional psychotherapy services throughout Ontario</p>
  <p>All services provided in compliance with CRPO standards and guidelines</p>
</div>
```

### **2. Scope of Practice Compliance**

#### **Approved Language**
- ✅ "Psychotherapy"
- ✅ "Mental health support"
- ✅ "Therapeutic support"
- ✅ "Evidence-based therapy"
- ✅ "Registered Psychotherapist"

#### **Prohibited Language**
- ❌ "Psychological services" (requires psychologist registration)
- ❌ "Diagnose" (outside scope)
- ❌ "Prescribe" (medical scope)
- ❌ "Cure" or "Fix" (outcome guarantees)
- ❌ "Medical treatment" (medical scope)

### **3. Professional Standards**

#### **Confidentiality Statement**
```html
<div class="confidentiality-notice">
  <h4>Confidentiality & Privacy</h4>
  <p>All therapy sessions are completely confidential in accordance with CRPO standards
  and Ontario privacy legislation. Information is only shared in very limited
  circumstances related to safety as required by law.</p>
</div>
```

#### **Insurance & Fees Transparency**
```html
<div class="fee-transparency">
  <h4>Investment & Insurance</h4>
  <p>Session Fee: $175 per 50-minute session</p>
  <p>Insurance: Most extended health plans cover Registered Psychotherapist services</p>
  <p>Receipts: Detailed insurance receipts provided for all sessions</p>
  <p>Payment: E-transfer, credit card, or direct billing where available</p>
</div>
```

---

## 📁 FILE STRUCTURE & NAMING CONVENTIONS

### **1. Page File Naming**
```
Root Level Pages:
/[service]-[city].html                    → anxiety-therapy-ottawa.html
/[condition]-therapy-[location].html      → adhd-therapy-toronto.html

Student Pages (Subdirectory):
/students/student-mental-health-[city].html → students/student-mental-health-hamilton.html

Special Pages:
/[specific-audience]-[service].html       → first-responders-trauma-therapy.html
```

### **2. Asset Organization**
```
/images/
  ├── asset104.png                        # Logo
  ├── asset104-180.png                    # Apple touch icon
  ├── therapy-session-warm.jpg            # Hero background
  └── jesse-cynamon.jpg                   # Therapist photo

/shared.min.css                           # Shared styles (DO NOT MODIFY)
/vercel.json                               # Deployment config
/sitemap.xml                               # SEO sitemap
```

### **3. URL Structure Requirements**
- **Clean URLs**: No .html extension in URLs (handled by Vercel)
- **Lowercase**: All URLs must be lowercase
- **Hyphens**: Use hyphens, not underscores
- **No Trailing Slash**: Configured in vercel.json

---

## 🧪 TESTING & VALIDATION PROCEDURES

### **1. Pre-Launch Checklist**

#### **Technical Validation**
- [ ] HTML validation: https://validator.w3.org/
- [ ] Schema testing: https://search.google.com/test/rich-results
- [ ] Mobile responsiveness: Chrome DevTools mobile view
- [ ] Page speed: https://pagespeed.web.dev/ (target > 85)
- [ ] Broken link check: All internal/external links
- [ ] CRPO compliance: Registration number visible

#### **Content Validation**
- [ ] Spell check completed
- [ ] Grammar check (Grammarly or similar)
- [ ] Local references accurate
- [ ] University information current
- [ ] Phone numbers clickable
- [ ] CTAs functional

#### **SEO Validation**
- [ ] Title tag < 60 characters
- [ ] Meta description < 160 characters
- [ ] H1 contains primary keyword
- [ ] Schema markup validates
- [ ] Canonical URL correct
- [ ] Image alt text present

### **2. Post-Launch Verification**

#### **Immediate Checks (0-24 hours)**
```bash
# Verify page is accessible
curl -I https://nextsteptherapy.ca/[new-page]

# Check for 200 status
# Should return: HTTP/2 200

# Verify in Google Search Console
# Submit URL for indexing
```

#### **Week 1 Monitoring**
- [ ] Google Search Console: Check for crawl errors
- [ ] Analytics: Monitor traffic and engagement
- [ ] CTA tracking: Conversion monitoring
- [ ] Speed monitoring: Page load times
- [ ] User feedback: Any reported issues

---

## 📝 CONTENT TEMPLATES

### **1. Hero Section Template**
```html
<h1>[Service] Therapy in [City]</h1>
<p class="lead-text">
  [Opening hook - relatable scenario].
  [Local context reference].
  [Value proposition].
  If you're living in [City] and struggling with [condition],
  you're not alone—and there are evidence-based approaches that can help.
</p>
```

### **2. Problem Recognition Template**
```html
<h2>Sound Familiar? You're Not Alone</h2>
<p>Living with [condition] in [City] brings unique challenges.
Whether it's [local challenge 1], [local challenge 2], or [local challenge 3],
[condition] can feel overwhelming.</p>

<div class="problem-list">
  <h3>"Does This Sound Like You?"</h3>
  <ul>
    <li><strong>[Symptom Name]:</strong> [Relatable description]</li>
    <li><strong>[Local Challenge]:</strong> [City-specific struggle]</li>
    <!-- 8-10 total items -->
  </ul>
</div>
```

### **3. Solution Section Template**
```html
<h2>How Therapy Helps with [Condition]</h2>
<p>Using evidence-based approaches like Acceptance and Commitment Therapy (ACT),
we focus on [specific outcomes]. Rather than [common misconception],
we [actual approach].</p>

<div class="benefits-list">
  <h3>What You'll Learn:</h3>
  <ul>
    <li><strong>[Skill 1]:</strong> [Practical application]</li>
    <li><strong>[Skill 2]:</strong> [Real-world benefit]</li>
    <!-- 6 total skills -->
  </ul>
</div>
```

---

## 🚀 DEPLOYMENT & GIT WORKFLOW

### **1. Complete Git Process**
```bash
# 1. Create and edit page
cp anxiety-therapy-toronto.html [new-page].html
# Edit content...

# 2. Update sitemap
# Add new <url> entry to sitemap.xml

# 3. Stage changes
git add [new-page].html sitemap.xml

# 4. Commit with standardized message
git commit -m "✅ CREATE: [Service] Therapy [City] - Manus compliant landing page

- Target keyword: [primary keyword]
- Location focus: [City] with [specific context]
- Schema markup: MedicalWebPage + LocalBusiness
- CRPO compliance: Registration #10979 displayed
- CTAs: Routing to homepage contact form

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# 5. Push to repository
git push origin main

# 6. Deploy to Vercel
vercel --prod --force --yes

# 7. Wait for propagation
sleep 60

# 8. Verify deployment
curl -I https://nextsteptherapy.ca/[new-page]
```

### **2. Rollback Process (If Needed)**
```bash
# Revert last commit
git revert HEAD
git push origin main

# Redeploy previous version
vercel --prod --force --yes
```

---

## 📊 ANALYTICS & TRACKING SETUP

### **1. Required Tracking Elements**

#### **Google Analytics 4 Events**
```javascript
// CTA Click Tracking
gtag('event', 'click', {
  'event_category': 'CTA',
  'event_label': '[Page Name] - [Button Type]',
  'value': '[Service]-[City]'
});

// Phone Click Tracking
gtag('event', 'click', {
  'event_category': 'Phone',
  'event_label': '[Page Name] - Phone Click',
  'value': '416-306-2157'
});
```

#### **Conversion Goals**
- Primary: Contact form submission
- Secondary: Phone call clicks
- Tertiary: 3+ minute page engagement

### **2. UTM Parameter Structure**
```
For campaigns:
?utm_source=[source]&utm_medium=[medium]&utm_campaign=[service]-[city]

Example:
?utm_source=google&utm_medium=organic&utm_campaign=anxiety-ottawa
```

---

## 🔄 MAINTENANCE & UPDATES

### **Monthly Review Checklist**
- [ ] Check Google Search Console for errors
- [ ] Review page rankings for target keywords
- [ ] Update any outdated local references
- [ ] Verify all links still functional
- [ ] Review and respond to any user feedback
- [ ] Update schema dateModified if changes made

### **Quarterly Updates**
- [ ] Refresh content with new research/approaches
- [ ] Update university program information
- [ ] Review competitor pages for new ideas
- [ ] A/B test CTA button text
- [ ] Update insurance coverage information
- [ ] Seasonal content adjustments

---

## 📚 APPENDIX: QUICK REFERENCE

### **Critical Values - NEVER CHANGE**
- **Phone**: (416) 306-2157
- **CRPO**: #10979
- **Email**: jesse@nextsteptherapy.ca
- **Domain**: https://nextsteptherapy.ca
- **Primary Color**: #6B8E6F
- **Font Heading**: Playfair Display
- **Font Body**: Inter

### **CTA Link Destinations**
- **Main CTA**: `href="#contact"`
- **Phone CTA**: `href="tel:+14163062157"`
- **Email CTA**: `href="mailto:jesse@nextsteptherapy.ca"`

### **File Locations**
- **Template**: `/anxiety-therapy-toronto.html`
- **Sitemap**: `/sitemap.xml`
- **Config**: `/vercel.json`
- **Styles**: `/shared.min.css` (DO NOT EDIT)

---

*This COMPLETE PRD ensures 100% consistency, compliance, and quality across all page creation efforts. Every aspect from design to deployment is documented and standardized.*

*Version 2.0 - Last Updated: September 2025*