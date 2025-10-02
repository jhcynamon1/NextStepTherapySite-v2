# 🎯 MANUS PAGE CREATION PRD - COMPLETE VERSION v4.0
*Comprehensive Standardized Process for Creating SEO-Optimized, High-Converting Therapy Landing Pages*

**VERSION 4.0 UPDATE (October 2025):**
✅ **Conversion Optimization Framework Added** - Research-backed CTA strategy (15-25% conversion target)
✅ **Jane App Direct Booking Integration** - Reduces friction, 15% lower no-show rates
✅ **Mobile Sticky CTA Bar** - 20% conversion boost for 65% of traffic
✅ **Strategic Trust Signal Placement** - 36% conversion improvement
✅ **Progressive CTA Flow** - 10-15x better than random placement

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

**CRITICAL NAVIGATION RULES (UPDATED v4.0):**
- Navigation "Contact" link: MUST use `href="/#contact"` (routes to homepage contact)
- **Primary CTA buttons**: MUST use `href="https://nextsteptherapy.janeapp.com/"` (DIRECT BOOKING)
- **Secondary CTA (phone)**: MUST use `href="tel:+14163062157"` (click-to-call)
- **Tertiary CTA (contact)**: MUST use `href="/#contact"` (homepage contact form)
- **CONVERSION STRATEGY**: Dual-path approach maximizes conversions (booking + phone)
  - Jane App = 24/7 instant booking (2.4% conversion, 15% lower no-shows)
  - Phone = 88% conversion for those who call (but only 1-3% call)
  - Contact form = fallback for detailed inquiries

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

### **1. CONVERSION-FOCUSED TITLE & META OPTIMIZATION FRAMEWORK**

#### **Framework Overview**
This framework balances high click-through rates with CRPO compliance requirements, ensuring your therapy practice attracts the right clients while maintaining professional standards.

#### **Title Tag Optimization (50-60 characters)**

**Primary Title Structure Formulas:**

**Formula 1: Condition + Location + Credential**
```
[Condition] Therapy [City] ON | Registered Psychotherapist
```
Example: `Anxiety Therapy Toronto ON | Registered Psychotherapist`

**Formula 2: Audience + Service + Location**
```
[Target Audience] [Service] [City] Ontario | [Credential]
```
Example: `Professional Stress Therapy Ottawa ON | CRPO Registered`

**Formula 3: Solution-Focused + Geographic**
```
[Solution] Support [City] | Virtual Therapy Ontario
```
Example: `Career Transition Support Toronto | Virtual Therapy ON`

**Title Optimization by Audience:**

**High-Achieving Professionals:**
- `Executive Stress Management Toronto | Virtual Therapy`
- `Performance Anxiety Support Ottawa | Registered Therapist`
- `Workplace Burnout Therapy Ontario | Evidence-Based Care`

**University Students:**
- `Student Mental Health Support Ontario | Virtual Therapy`
- `University Anxiety Help Toronto | Registered Therapist`
- `College Stress Management ON | Professional Support`

**Geographic Targeting:**
- `[Service] [Specific City] Ontario | [Credential]`
- `Virtual Therapy [Region] ON | [Specialization]`
- `[Condition] Support [City] | Ontario Psychotherapist`

#### **Meta Description Framework (150-160 characters)**

**Core Structure:**
- Opening Hook (20-30 chars): Relatable problem statement
- Solution Bridge (40-50 chars): How therapy helps
- Credibility Marker (30-40 chars): Professional credentials
- Action Prompt (20-30 chars): Clear next step

**High-Converting Description Templates:**

**Template 1: Problem-Solution-Credential-Action**
```
Struggling with [specific challenge]? Professional virtual therapy helps [target audience] manage [condition] with evidence-based approaches. CRPO registered. Book free consultation.
```

**Template 2: Audience-Benefit-Method-CTA**
```
[Target audience] deserve support that fits your schedule. Virtual therapy throughout Ontario using proven CBT & ACT methods. Same-week appointments available. Call today.
```

**Template 3: Empathy-Solution-Differentiation-Action**
```
You don't have to navigate [challenge] alone. Specialized virtual therapy for [audience] with flexible evening & weekend hours. Registered psychotherapist. Free consultation.
```

**High-Converting Description Examples:**

**For Anxiety:**
`Anxiety doesn't have to control your life. Professional virtual therapy helps ambitious individuals manage stress using evidence-based CBT & ACT. CRPO registered. Book free consultation.`

**For Professionals:**
`High-achieving professionals deserve mental health support that gets it. Virtual therapy for workplace stress, burnout & career transitions. Evening appointments available. Call now.`

**For Students:**
`University stress overwhelming you? Virtual therapy throughout Ontario helps students manage anxiety & academic pressure. Insurance accepted. Same-week appointments available.`

**Location-Specific Examples:**

**Toronto:**
`Anxiety therapy in Toronto with registered psychotherapist. Virtual sessions, same-week availability, insurance accepted. Free consultation.`

**Ottawa:**
`Professional therapy support in Ottawa. Specialized in anxiety, stress, workplace challenges. Same-week appointments, evening availability.`

**Burlington:**
`Virtual therapy serving Burlington professionals and students. Evidence-based treatment for anxiety and stress. Free consultation call.`

#### **Conversion Psychology Integration**

**Emotional Trigger Framework for Titles & Descriptions:**

**Relief Triggers:**
- "You don't have to navigate this alone"
- "Professional support that understands"
- "Evidence-based help is available"

**Empowerment Triggers:**
- "Take control of your [condition]"
- "Ready to move beyond coping to thriving?"
- "Professional support for ambitious individuals"

**Urgency Triggers (Ethical):**
- "Same-week appointments available"
- "Free consultation - limited availability"
- "Evening & weekend hours for busy professionals"

**Trust-Building Elements:**

**Credential Integration:**
- "CRPO Registered Psychotherapist"
- "Evidence-based CBT & ACT approaches"
- "Master's in Psychology (MPsy)"

**Social Proof Indicators:**
- "Serving professionals across Ontario"
- "Insurance coverage accepted"
- "Specialized training in [approach]"

#### **CRPO Compliance for Titles & Descriptions**

**Mandatory Elements Hierarchy:**

**Must Include (Priority 1):**
- Registered Psychotherapist designation
- CRPO registration number when space allows
- Geographic scope (Ontario)
- Evidence-based approach mentions

**Should Include (Priority 2):**
- Specific credentials (MPsy)
- Insurance coverage acceptance
- Virtual delivery method

**Nice to Have (Priority 3):**
- Specialized training mentions
- Response time guarantees

**Approved Therapeutic Claims:**
- "Evidence-based support for..."
- "Professional therapy to help manage..."
- "Specialized treatment approaches for..."
- "Clinical support for individuals experiencing..."

**Avoid These Phrases:**
- "Cure" or "fix" language
- Guaranteed outcomes
- Medical diagnostic claims
- Comparison superiority statements

#### **Technical Implementation Guidelines**

**Character Count Optimization:**

**Title Tags:**
- Target: 50-55 characters for mobile optimization
- Maximum: 60 characters before truncation
- Test across devices for display consistency

**Meta Descriptions:**
- Target: 150-155 characters for full display
- Maximum: 160 characters before truncation
- Include primary keyword within first 120 characters

**Keyword Integration Strategy:**

**Primary Keywords (High Priority):**
- [Condition] + therapy + [location]
- Virtual therapy + Ontario
- Registered psychotherapist + [city]

**Secondary Keywords (Medium Priority):**
- [Audience] + mental health + support
- Evidence-based + [approach] + therapy
- [Specific challenge] + professional + help

**Long-tail Keywords (Conversion Focus):**
- [Specific situation] + therapy + [location]
- [Professional context] + stress + management
- [Student context] + anxiety + support

#### **Essential Meta Tags (ALL REQUIRED)**
```html
<!-- Character Set & Viewport -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- CONVERSION-OPTIMIZED SEO Title & Description -->
<title>[Use Framework Above - 50-60 characters]</title>
<meta name="description" content="[Use Template Above - 150-160 characters]">

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

### **2. Complete JSON-LD Schema Markup (UPDATED WITH VIRTUOUS CIRCLE LEARNINGS)**

**Note:** Virtuous Circle uses WordPress/Elementor which auto-generates some schema. We'll implement manually for maximum control.

#### **For Service Pages - Complete Schema**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://nextsteptherapy.ca/[page-slug]#webpage",
      "url": "https://nextsteptherapy.ca/[page-slug]",
      "name": "[Service] [City] | Next Step Therapy",
      "description": "Professional [service] services in [City]. CRPO registered psychotherapist offering evidence-based support.",
      "inLanguage": "en-CA",
      "isPartOf": {
        "@id": "https://nextsteptherapy.ca/#website"
      },
      "about": {
        "@type": "MedicalTherapy",
        "name": "[Service] Therapy"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "@id": "https://nextsteptherapy.ca/images/therapy-session-warm.jpg",
        "url": "https://nextsteptherapy.ca/images/therapy-session-warm.jpg",
        "width": 800,
        "height": 534
      },
      "datePublished": "2025-10-01",
      "dateModified": "2025-10-01"
    },
    {
      "@type": "WebSite",
      "@id": "https://nextsteptherapy.ca/#website",
      "url": "https://nextsteptherapy.ca",
      "name": "Next Step Therapy",
      "description": "Professional psychotherapy services throughout Ontario",
      "publisher": {
        "@id": "https://nextsteptherapy.ca/#organization"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Organization",
      "@id": "https://nextsteptherapy.ca/#organization",
      "name": "Next Step Therapy",
      "url": "https://nextsteptherapy.ca",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://nextsteptherapy.ca/images/asset104.png",
        "url": "https://nextsteptherapy.ca/images/asset104.png",
        "width": 180,
        "height": 180
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-416-306-2157",
        "contactType": "customer service",
        "email": "jesse@nextsteptherapy.ca",
        "areaServed": "CA-ON",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.psychologytoday.com/profile/[your-profile]"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://nextsteptherapy.ca/#person",
      "name": "Jesse Cynamon",
      "givenName": "Jesse",
      "familyName": "Cynamon",
      "jobTitle": "Registered Psychotherapist",
      "honorificSuffix": "RP",
      "worksFor": {
        "@id": "https://nextsteptherapy.ca/#organization"
      },
      "telephone": "+14163062157",
      "email": "jesse@nextsteptherapy.ca",
      "url": "https://nextsteptherapy.ca",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "[Your University]"
      },
      "knowsAbout": [
        "Anxiety Therapy",
        "Depression Treatment",
        "ACT Therapy",
        "CBT Therapy",
        "Virtual Therapy",
        "Student Mental Health",
        "Workplace Stress",
        "Trauma Therapy"
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "College of Registered Psychotherapists of Ontario",
        "identifier": "CRPO #10979"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nextsteptherapy.ca/[page-slug]#service",
      "serviceType": "[Service] Therapy",
      "provider": {
        "@id": "https://nextsteptherapy.ca/#person"
      },
      "areaServed": {
        "@type": "State",
        "name": "Ontario",
        "containsPlace": [
          {"@type": "City", "name": "[Primary City]"},
          {"@type": "City", "name": "Toronto"},
          {"@type": "City", "name": "Ottawa"},
          {"@type": "City", "name": "Hamilton"},
          {"@type": "City", "name": "Mississauga"}
        ]
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceType": "Virtual Therapy",
        "serviceLocation": {
          "@type": "Place",
          "name": "Ontario, Canada"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "175.00",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://nextsteptherapy.ca/#contact"
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

**Schema Strategy Notes:**
- Use `@graph` to combine multiple schema types in one block
- Virtuous Circle focuses on LocalBusiness + Organization + Person
- We add Service schema for better therapy-specific SEO
- FAQPage schema is separate (add after main content FAQs)
- Keep schema updated when page content changes

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

## 📝 CONTENT TEMPLATES (BASED ON VIRTUOUS CIRCLE'S #1 RANKING PAGES)

### **PROVEN CONTENT STRUCTURE FROM $1.5M+ CLINIC**

Based on analysis of Virtuous Circle Counselling's top-performing pages (2,700 monthly visitors, DR 27), the following structure is proven to rank and convert:

---

### **UNIVERSAL PAGE STRUCTURE (ALL SERVICE PAGES)**

```
H1: [Service] Therapy [Location]

H2: [Service] in [Location] [Benefit Hook]
├─ Opening paragraph (2-3 sentences, empathy + authority)
├─ Link to team/about page (trust building)
├─ Educational paragraph (what is this service?)
├─ Statistics or research mention (credibility)
├─ Bullet list of therapy approaches available (3-5 items)

H2: We Provide [Service] Treatments That Help You
├─ 2-3 paragraphs explaining approach
├─ Link to related therapy method page
├─ [CTA Button: "Talk With A Therapist"]
├─ [IMAGE]

H2: What Are The [X] Types of [Condition]?
├─ Educational intro paragraph
├─ Bullet list (5-7 types/symptoms)
├─ Closing paragraph with CTA link

H2: All [Condition] Have Certain Symptoms In Common
├─ Intro paragraph
├─ Bullet list (5-7 common symptoms)

H2: Some People May Also Experience Physical Symptoms
├─ 2-3 paragraphs about physical manifestations
├─ [IMAGE]

H2: [Service] Questions (FAQ Mini-Section)
├─ 3 FAQ questions as H3 or bold text
├─ Short answers (2-3 sentences each)

SIDEBAR (ALWAYS PRESENT):
├─ Services Section (6 links)
├─ Specialties Section (7 links)
├─ Models of Therapy Section (5 links)
├─ Google Reviews Button
└─ "Book Your Appointment Online" CTA
```

**Key learnings:**
- Word count: 1,800-2,500 words (BEFORE our Phase 1 & 2 SEO additions)
- Bullet lists everywhere (easier scanning)
- 2 images minimum
- FAQ integrated into main content (not just at bottom)
- "Talk With A Therapist" CTA mid-page
- Heavy internal linking (18+ sidebar links)

---

### **1. Hero Section Template (UPDATED)**

```html
<h1>[Service] Therapy [Location]</h1>

<div class="hero-content">
  <p class="lead-text">
    [Empathy hook - acknowledge the struggle]. [Service] can be a debilitating
    [condition/challenge] – which is why it's important that people in [Location]
    know what their therapy options are when it comes to seeking professional support.
  </p>

  <p>
    From a clinical perspective, [condition] refers to [brief definition with
    authority]. These are just some of the determinants of this [condition].
    There are specific types and subtypes with respect to its characteristics.
  </p>

  <p>
    [Condition] is one of the most common mental health challenges in Ontario.
    About [statistic] Canadians will experience [condition] at some point in their life.
  </p>

  <p>
    There are several therapeutic techniques that have been developed to treat
    [condition] and have evolved over time. Some of the more effective approaches include:
  </p>

  <ul class="therapy-approaches">
    <li><a href="/act-therapy-ontario.html">Acceptance and Commitment Therapy (ACT)</a></li>
    <li><a href="/cbt-therapy-techniques-ontario.html">Cognitive Behavioral Therapy (CBT)</a></li>
    <li>Psychodynamic Therapies</li>
    <li>Mindfulness-Based Approaches</li>
  </ul>
</div>
```

### **2. Treatment Approach Section (UPDATED)**

```html
<h2>We Provide [Service] That Helps You</h2>

<p>
  The first thing to understand is that your treatment will consist of evidence-based
  approaches with your Ontario therapist providing you with strategies and feedback on
  progress. This may include techniques for [specific benefit 1], [specific benefit 2],
  as well as learning various behavioral skills specific to your situation.
</p>

<p>
  Your therapist at Next Step Therapy will help you understand why you're experiencing
  [challenge] through their training in <a href="/act-therapy-ontario.html">ACT therapy</a>.
  They'll help you become aware of the way you think and feel, as well as understand the
  patterns that may be keeping you stuck. You can use this knowledge to shape your thoughts
  and actions in a more aligned and values-based direction.
</p>

<div class="cta-inline">
  <a href="/#contact" class="manus-primary-cta">Talk With A Therapist</a>
</div>

<div class="content-image">
  <img src="/images/therapy-session-warm.jpg" alt="[Service] in [Location]" loading="lazy">
</div>
```

### **3. Types/Symptoms Section (UPDATED - Virtuous Circle Pattern)**

```html
<h2>What Are The [X] Types of [Condition]?</h2>

<p>
  There are many different types of [condition]. Understanding which one(s) you
  may be experiencing can help you better manage your symptoms. The [X] major
  types of [condition] include:
</p>

<ul class="types-list">
  <li><strong>[Type 1]:</strong> [Brief description]</li>
  <li><strong>[Type 2]:</strong> [Brief description]</li>
  <li><strong>[Type 3]:</strong> [Brief description]</li>
  <li><strong>[Type 4]:</strong> [Brief description]</li>
  <li><strong>[Type 5]:</strong> [Brief description]</li>
</ul>

<p>
  If your [condition] is affecting your life and you feel it's time to seek support,
  learning about the therapy options in [Location] and trying evidence-based techniques
  may be beneficial. <a href="/#contact">Contact a therapist</a> to get started on the
  path to [positive outcome] today.
</p>
```

### **4. Common Symptoms Section (NEW - From Virtuous Circle)**

```html
<h2>All [Condition] Have Certain Symptoms In Common</h2>

<p>
  [Condition] is a universal human experience that can be described as [definition].
  It's understandable this experience can be so broad, as it can lead to some common
  symptoms including:
</p>

<ul class="symptoms-list">
  <li>[Symptom 1]</li>
  <li>[Symptom 2]</li>
  <li>[Symptom 3]</li>
  <li>[Symptom 4]</li>
  <li>[Symptom 5]</li>
  <li>[Symptom 6]</li>
</ul>

<p>
  These symptoms are often debilitating and affect our ability to function during our
  daily routines and responsibilities. Despite its challenges, [condition] can be managed
  with the right support and some effective coping strategies.
</p>
```

### **5. Physical Symptoms Section (NEW - From Virtuous Circle)**

```html
<h2>Some People May Also Experience Physical Symptoms of [Condition]</h2>

<p>
  [Condition] isn't always obvious, and this can make it confusing for family members,
  friends, and coworkers to spot the signs that someone they know may be struggling.
  In fact, [condition] can cause physical symptoms even before people realize they need support.
</p>

<p>
  The physical symptoms of [condition] can occur before, during, or after challenging
  situations. For example, an individual may experience [physical symptom example 1]
  before [triggering situation]. Or during [difficult moment], they may [physical symptom example 2].
</p>

<p>
  These physical symptoms can be unsettling, but once a person learns about why these
  symptoms are happening, it typically leads to increased understanding and relief.
</p>
```

### **6. Mini-FAQ Section (UPDATED - Virtuous Circle Pattern)**

```html
<h2>[Service] Questions</h2>

<div class="mini-faq">
  <div class="faq-item">
    <h3>Will therapy help with my [condition]?</h3>
    <p>
      There are many options to consider when it comes to treating [condition].
      Therapy, such as ACT or CBT, can be an effective option for people experiencing
      [specific challenges]. Research shows that [evidence-based claim].
    </p>
  </div>

  <div class="faq-item">
    <h3>How does [service] work?</h3>
    <p>
      Therapy works by helping people understand how their thoughts influence their
      feelings and behaviors, and teaches them how to [specific skill]. [Therapy approach]
      can help people develop skills to better manage [specific challenge].
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I find the right therapist in [Location]?</h3>
    <p>
      A good way to start is by reaching out for a free consultation. At Next Step Therapy,
      we offer a <a href="/#contact">free 15-minute consultation</a> to ensure we're a
      good fit for your needs. Your comfort and connection with your therapist is essential
      for progress.
    </p>
  </div>
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

## 🎯 ADVANCED SEO OPTIMIZATION (PHASE 1 MANDATORY)

### **1. FAQ Section - REQUIRED FOR ALL PAGES**

Every page MUST include a comprehensive FAQ section with 15 questions targeting "People Also Ask" boxes.

#### **Implementation Pattern:**
```html
<!-- FAQ Section -->
<section class="section alternate-bg">
    <div class="container">
        <h2 class="section-title">Frequently Asked Questions About [Service] in [Location]</h2>

        <div class="faq-grid">
            <div class="faq-item">
                <h3 class="faq-question">[Question text]</h3>
                <div class="faq-answer">
                    <p>[Answer 40-80 words with internal links where relevant]</p>
                </div>
            </div>
            <!-- Repeat for 15 questions -->
        </div>
    </div>
</section>
```

#### **FAQ CSS (Required):**
```css
/* FAQ Section Styles */
.faq-grid {
    display: grid;
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
}

.faq-item {
    background: var(--bg-primary);
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid var(--primary-green);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.faq-question {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
    font-weight: 600;
}

.faq-answer p {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
}

.faq-answer a {
    color: var(--primary-green);
    text-decoration: none;
    font-weight: 500;
}
```

#### **Standard FAQ Questions Template:**
```
For [Service] Pages:
1. How long does [service] typically take?
2. What happens in the first [service] session?
3. Is virtual [service] as effective as in-person?
4. How much does [service] cost in [location]?
5. What's the difference between [approach A] and [approach B]?
6. Can [service] help with [related issue]?
7. Do I need a referral for [service] in [location]?
8. What if I'm too anxious to start [service]?
9. How do I know if I need [service]?
10. Can [service] help with [specific symptom]?
11. What should I expect from [service] homework?
12. How often should I attend [service] sessions?
13. Can [service] help with work-related stress?
14. What if my [condition] gets worse during [service]?
15. How do I prepare for my first [service] session?
```

### **2. FAQPage Schema Markup - REQUIRED**

Add structured data in the `<head>` section for Google rich results.

```html
<!-- FAQPage Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text from FAQ]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text without HTML]"
      }
    }
    // Include 8-15 questions
  ]
}
</script>
```

**Rules:**
- Include 8-15 most important FAQs
- Remove all HTML from answer text
- Keep answers under 200 characters for schema
- Place AFTER MedicalWebPage schema

### **3. Featured Snippet Optimization Blocks - REQUIRED**

Add 3-5 definition blocks near the top of content targeting position 0.

```html
<!-- Featured Snippet Blocks -->
<section class="section" style="padding: 3rem 0;">
    <div class="container">
        <div class="content-grid">
            <div class="snippet-target">
                <h3>What is [service]?</h3>
                <p>[35-50 word definition with key terms and internal link]</p>
            </div>

            <div class="snippet-target">
                <h3>How much does [service] cost in [location]?</h3>
                <p>[35-50 word answer with pricing and insurance info]</p>
            </div>

            <div class="snippet-target">
                <h3>What happens in your first [service] session?</h3>
                <p>[35-50 word process description]</p>
            </div>
        </div>
    </div>
</section>
```

#### **Snippet Block CSS (Required):**
```css
/* Featured Snippet Styles */
.snippet-target {
    background: rgba(107, 142, 111, 0.08);
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    border-left: 4px solid var(--primary-green);
}

.snippet-target h3 {
    font-family: var(--font-heading);
    font-size: 1.375rem;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
    font-weight: 600;
}

.snippet-target p {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0;
}
```

### **4. Internal Linking Strategy - REQUIRED**

Every page MUST include 15-20 contextual internal links.

#### **Link Categories:**
```
Service Cross-Links (5-7 links):
- Related therapy services
- Related conditions
- Treatment approaches

Location-Based Links (3-5 links):
- Other cities/regions
- University-specific pages
- Workplace-specific pages

Resource Links (3-5 links):
- FAQ pages
- About pages
- Virtual therapy info

Process Links (2-3 links):
- How therapy works
- Getting started
- Insurance information
```

#### **Internal Linking Rules:**
1. Use descriptive anchor text with keywords
2. Links must be contextually relevant
3. Spread naturally throughout content
4. No link clustering (max 2 links per paragraph)
5. Always link to existing pages only
6. Use relative paths (`/page.html` not full URLs)

### **5. Content Length Requirements**

**Minimum Word Count:**
- Service pages: 3,500+ words
- Location pages: 3,000+ words
- Condition pages: 3,500+ words
- Topic pages: 2,500+ words

**Achieve through:**
- 15-question FAQ section (~1,200 words)
- 3 featured snippet blocks (~150 words)
- Original content (~2,000-2,500 words)

### **6. SEO Checklist - Validate Before Deployment**

```markdown
- [ ] 15-question FAQ section present
- [ ] FAQPage schema in <head>
- [ ] 3-5 featured snippet blocks
- [ ] 15-20 internal links verified working
- [ ] 3,000+ word count achieved
- [ ] Single H1 tag only
- [ ] H2 tags for all major sections
- [ ] CRPO compliant (no superlatives)
- [ ] Mobile responsive verified
- [ ] All links tested and working
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

## 🎯 ADVANCED SEO OPTIMIZATION (PHASE 1 & 2 - MANDATORY FOR ALL NEW PAGES)

### **Overview: Proven #1 Ranking Formula**

Based on successful optimization of anxiety-therapy-ontario.html, depression-therapy-ontario.html, and virtual-therapy-ontario.html (Sept 2025), these SEO enhancements are now MANDATORY for all new pages. This formula achieved:
- 53% word count increase (2,888 → 4,432+ words)
- 150% internal link increase (8 → 20+ links)
- Expected 5-10 PAA captures within 3 weeks
- Expected 3-5 featured snippets within 4 weeks
- Expected 40-60% traffic increase within 8 weeks

### **Phase 1: FAQ, Schema, Featured Snippets, Internal Links**

#### **1. FAQ Section (15 Questions - MANDATORY)**

Add before closing `</main>` tag:

```html
<section class="section alternate-bg">
    <div class="container">
        <h2 class="section-title">Frequently Asked Questions About [Service] in Ontario</h2>
        <div class="faq-grid">
            <!-- 15 FAQ items here - see question bank below -->
            <div class="faq-item">
                <h3 class="faq-question">[Question targeting PAA box]</h3>
                <div class="faq-answer">
                    <p>[Answer with internal links, 50-100 words, natural language]</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

**FAQ CSS (Add to <style> section):**
```css
.faq-grid {
    display: grid;
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
}

.faq-item {
    background: var(--bg-primary);
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid var(--primary-green);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.faq-question {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
    font-weight: 600;
}

.faq-answer p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
}
```

#### **2. FAQPage Schema (8 Questions - MANDATORY)**

Add to `<head>` section after existing schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question from FAQ section]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Same answer as FAQ section, 50-100 words]"
      }
    }
    // ... 7 more questions (total 8)
  ]
}
</script>
```

#### **3. Featured Snippet Blocks (3 Minimum - MANDATORY)**

Add throughout main content, targeting position 0:

```html
<div class="snippet-target">
    <h3>What is [service]?</h3>
    <p>[Direct answer, 35-50 words, defines service clearly]</p>
</div>

<div class="snippet-target">
    <h3>How much does [service] cost in Ontario?</h3>
    <p>[Direct answer, 35-50 words, mentions insurance, typical range]</p>
</div>

<div class="snippet-target">
    <h3>What happens in your first [service] session?</h3>
    <p>[Direct answer, 35-50 words, describes first session process]</p>
</div>
```

**Snippet Target CSS:**
```css
.snippet-target {
    background: rgba(107, 142, 111, 0.1);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 2rem 0;
    border-left: 4px solid var(--primary-green);
}

.snippet-target h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
}

.snippet-target p {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
}
```

#### **4. Internal Linking Strategy (15-20 Links - MANDATORY)**

**Link Distribution Pattern:**
- 5-7 links to related service pages (anxiety, depression, virtual therapy, counselling)
- 3-5 links to specific condition pages (university anxiety, workplace stress)
- 2-4 links to approach/method pages (CBT, ACT, virtual therapy)
- 2-3 links to location pages (therapy-toronto, therapy-ottawa)
- 1-2 links to resource pages (FAQ, about)

**Examples:**
```html
<!-- Service cross-linking -->
<p>Many clients find that anxiety and <a href="/depression-therapy-ontario.html">depression</a> occur together.</p>

<!-- Location linking -->
<p>Whether you're in <a href="/anxiety-therapy-toronto.html">Toronto</a>, <a href="/anxiety-therapy-ottawa.html">Ottawa</a>, or anywhere across Ontario...</p>

<!-- Method linking -->
<p>Learn more about our <a href="/cbt-therapy-ontario.html">CBT therapy techniques</a> or <a href="/virtual-therapy-ontario.html">virtual therapy</a> options.</p>
```

**Internal Linking Rules:**
1. Use descriptive anchor text (keywords, not "click here")
2. Distribute naturally throughout content
3. Link in first 25% of content (2-3 links above fold)
4. Every major section should have 1-2 relevant links
5. Link to both higher-authority pages and supporting pages

### **Phase 2: Comparison Tables, Location Content, Process Steps**

#### **1. Comparison Table (1 Table - MANDATORY FOR SERVICE PAGES)**

Add before FAQ section:

**For Therapy Approach Pages (Anxiety, Depression, etc.):**
```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Therapy Approaches for [Condition]: CBT vs ACT</h2>

        <div class="comparison-table-wrapper">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>Cognitive Behavioral Therapy (CBT)</th>
                        <th>Acceptance and Commitment Therapy (ACT)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Primary Focus</strong></td>
                        <td>[CBT focus for this condition]</td>
                        <td>[ACT focus for this condition]</td>
                    </tr>
                    <tr>
                        <td><strong>Core Philosophy</strong></td>
                        <td>[CBT philosophy]</td>
                        <td>[ACT philosophy]</td>
                    </tr>
                    <tr>
                        <td><strong>Typical Duration</strong></td>
                        <td>[CBT duration for condition]</td>
                        <td>[ACT duration for condition]</td>
                    </tr>
                    <tr>
                        <td><strong>Between-Session Work</strong></td>
                        <td>[CBT homework examples]</td>
                        <td>[ACT practices]</td>
                    </tr>
                    <tr>
                        <td><strong>Best Suited For</strong></td>
                        <td>[Specific CBT applications]</td>
                        <td>[Specific ACT applications]</td>
                    </tr>
                    <tr>
                        <td><strong>Evidence Base</strong></td>
                        <td>[CBT research summary]</td>
                        <td>[ACT research summary]</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p style="margin-top: 2rem; text-align: center; color: var(--text-secondary);">Both approaches are evidence-based and highly effective. We'll collaborate to determine which approach—or combination—best supports your goals.</p>
    </div>
</section>
```

**For Virtual/Format Pages:**
```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Virtual Therapy vs In-Person Therapy</h2>

        <div class="comparison-table-wrapper">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Virtual Therapy</th>
                        <th>In-Person Therapy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Convenience</strong></td>
                        <td>High - from home/office</td>
                        <td>Medium - travel required</td>
                    </tr>
                    <tr>
                        <td><strong>Privacy</strong></td>
                        <td>High - your own space</td>
                        <td>Medium - office setting</td>
                    </tr>
                    <tr>
                        <td><strong>Effectiveness</strong></td>
                        <td>Equal for most conditions per research</td>
                        <td>Equal for most conditions per research</td>
                    </tr>
                    <tr>
                        <td><strong>Technology</strong></td>
                        <td>Requires stable internet</td>
                        <td>No technology needed</td>
                    </tr>
                    <tr>
                        <td><strong>Accessibility</strong></td>
                        <td>Ontario-wide availability</td>
                        <td>Limited by geography</td>
                    </tr>
                    <tr>
                        <td><strong>Comfort</strong></td>
                        <td>Familiar environment</td>
                        <td>Professional therapeutic space</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
```

**Comparison Table CSS:**
```css
.comparison-table-wrapper {
    overflow-x: auto;
    margin: 2rem 0;
}

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--bg-primary);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.comparison-table th {
    background: var(--primary-green);
    color: white;
    padding: 1rem;
    font-family: var(--font-heading);
    font-weight: 600;
    text-align: left;
}

.comparison-table td {
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
    font-size: 0.95rem;
    color: var(--text-secondary);
}

.comparison-table tr:nth-child(even) {
    background: var(--bg-alternate);
}

.comparison-table tr:hover {
    background: rgba(107, 142, 111, 0.05);
}
```

#### **2. Location-Specific Content (4 Regions - MANDATORY)**

Add after comparison table:

```html
<section class="section alternate-bg">
    <div class="container">
        <h2 class="section-title">[Service] Across Ontario</h2>

        <div class="location-grid">
            <div class="location-card">
                <h3>Greater Toronto Area</h3>
                <p>Serving Toronto, Mississauga, Brampton, Markham, Vaughan, and surrounding communities. [Service-specific benefit for GTA residents].</p>
                <ul>
                    <li>[GTA-specific population 1]</li>
                    <li>[GTA-specific population 2]</li>
                    <li>[University students at U of T, TMU, York]</li>
                    <li>[GTA-specific population 4]</li>
                </ul>
            </div>

            <div class="location-card">
                <h3>Ottawa & Eastern Ontario</h3>
                <p>Supporting government workers, university students, and families in the National Capital Region. [Service-specific benefit for Ottawa residents].</p>
                <ul>
                    <li>Federal and provincial government employees</li>
                    <li>University of Ottawa and Carleton students</li>
                    <li>[Ottawa-specific population 3]</li>
                    <li>[Ottawa-specific population 4]</li>
                </ul>
            </div>

            <div class="location-card">
                <h3>Hamilton & Golden Horseshoe</h3>
                <p>Serving Hamilton, Burlington, St. Catharines, Oakville, Niagara, and surrounding areas. [Service-specific benefit for Golden Horseshoe].</p>
                <ul>
                    <li>McMaster University students and healthcare workers</li>
                    <li>Hamilton Health Sciences professionals</li>
                    <li>[Golden Horseshoe population 3]</li>
                    <li>[Golden Horseshoe population 4]</li>
                </ul>
            </div>

            <div class="location-card">
                <h3>Southwestern Ontario</h3>
                <p>Supporting individuals in London, Windsor, Kitchener-Waterloo, Guelph, and throughout southwestern Ontario. [Service benefit].</p>
                <ul>
                    <li>University students at Western, Waterloo, Guelph</li>
                    <li>Tech sector professionals in Waterloo corridor</li>
                    <li>[SW Ontario population 3]</li>
                    <li>[SW Ontario population 4]</li>
                </ul>
            </div>
        </div>

        <p style="margin-top: 2rem; text-align: center; color: var(--text-secondary);">No matter where you are in Ontario, professional [service] is accessible through secure virtual sessions. <a href="/virtual-therapy-ontario.html">Learn more about virtual therapy</a>.</p>
    </div>
</section>
```

**Location Cards CSS:**
```css
.location-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.location-card {
    background: var(--bg-primary);
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid var(--primary-green);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.location-card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.location-card p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
}

.location-card ul {
    list-style: none;
    padding: 0;
}

.location-card li {
    padding: 0.5rem 0;
    color: var(--text-secondary);
    position: relative;
    padding-left: 1.5rem;
    font-size: 0.95rem;
}

.location-card li::before {
    content: "✓";
    color: var(--primary-green);
    font-weight: bold;
    position: absolute;
    left: 0;
}
```

#### **3. Process Steps Section (5 Steps - MANDATORY)**

Add after location section:

```html
<section class="section">
    <div class="container">
        <h2 class="section-title">5 Steps to Start [Service] in Ontario</h2>

        <div class="process-steps">
            <div class="step-item">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h3>Initial Contact</h3>
                    <p>[Service-specific first step description, 30-50 words]</p>
                </div>
            </div>

            <div class="step-item">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h3>Brief Consultation (15 minutes)</h3>
                    <p>We'll have a short conversation to understand your concerns, answer questions, and determine if we're a good fit. No pressure, no commitment—just information.</p>
                </div>
            </div>

            <div class="step-item">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h3>Schedule First Session</h3>
                    <p>Book your first 50-minute session at a convenient time. Sessions available during business hours and evenings, both virtually and in-person across Ontario.</p>
                </div>
            </div>

            <div class="step-item">
                <div class="step-number">4</div>
                <div class="step-content">
                    <h3>Comprehensive Assessment</h3>
                    <p>[Service-specific assessment description, what happens in first session, 30-50 words]</p>
                </div>
            </div>

            <div class="step-item">
                <div class="step-number">5</div>
                <div class="step-content">
                    <h3>Begin Your Journey</h3>
                    <p>[Service-specific journey description, typical timeline, progress expectations, 30-50 words]</p>
                </div>
            </div>
        </div>

        <div class="cta-box" style="margin-top: 3rem;">
            <p>Ready to take the first step toward [benefit]?</p>
            <a href="/#contact" class="manus-primary-cta">Get Started Today</a>
            <br><br>
            <a href="tel:+14163062157" class="secondary-cta">Call (416) 306-2157</a>
        </div>
    </div>
</section>
```

**Process Steps CSS:**
```css
.process-steps {
    max-width: 700px;
    margin: 2rem auto;
}

.step-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2.5rem;
    position: relative;
}

.step-item:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 24px;
    top: 60px;
    width: 2px;
    height: calc(100% + 1rem);
    background: #e5e7eb;
}

.step-number {
    background: var(--primary-green);
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.5rem;
    margin-right: 1.5rem;
    flex-shrink: 0;
    z-index: 1;
    position: relative;
}

.step-content h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.step-content p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
}
```

### **Mobile Responsive CSS (REQUIRED FOR ALL SECTIONS)**

Add to end of `<style>` section:

```css
/* Mobile Responsive - Phase 1 & 2 SEO Sections */
@media (max-width: 768px) {
    .comparison-table {
        font-size: 0.85rem;
    }

    .comparison-table th,
    .comparison-table td {
        padding: 0.75rem 0.5rem;
    }

    .location-grid {
        grid-template-columns: 1fr;
    }

    .step-number {
        width: 40px;
        height: 40px;
        font-size: 1.25rem;
    }

    .step-item:not(:last-child)::after {
        left: 20px;
    }

    .faq-item {
        padding: 1rem;
    }

    .snippet-target {
        padding: 1rem;
    }
}
```

### **Content Length Requirements**

**Minimum Word Counts (Including All SEO Sections):**
- Service pages (anxiety, depression, etc.): 4,000+ words
- Location pages (therapy-toronto, therapy-ottawa): 3,500+ words
- Condition-specific pages (university anxiety, workplace stress): 3,000+ words
- Supporting pages (CBT, ACT, virtual therapy): 3,500+ words

**Section Breakdown:**
- Hero + intro: 200-300 words
- Main content sections: 1,500-2,000 words
- FAQ section (15 questions): 1,000-1,200 words
- Comparison table section: 300-400 words
- Location section: 400-500 words
- Process steps section: 300-400 words
- Additional CTAs and supporting content: 300-400 words

### **SEO Pre-Deployment Checklist**

Before deploying any new page, verify:

**Phase 1 SEO:**
- [ ] 15-question FAQ section present
- [ ] FAQPage schema in `<head>` (8 Q&As minimum)
- [ ] 3-5 featured snippet blocks with proper formatting
- [ ] 15-20 internal links verified working
- [ ] All internal links use descriptive anchor text

**Phase 2 SEO:**
- [ ] 1 comparison table present (CBT vs ACT or Virtual vs In-person)
- [ ] 4 location cards (GTA, Ottawa, Hamilton, SW Ontario)
- [ ] 5-step process section with numbered circles
- [ ] All CSS for tables, location cards, and steps added
- [ ] Mobile responsive styles included (@768px breakpoint)

**Content Quality:**
- [ ] 3,000+ word count achieved (4,000+ for major service pages)
- [ ] Single H1 tag only
- [ ] Proper heading hierarchy (H1 > H2 > H3)
- [ ] No superlatives or CRPO-non-compliant language
- [ ] Ontario-specific geography and institutions mentioned
- [ ] Internal links distributed naturally throughout

**Technical SEO:**
- [ ] Meta description under 160 characters
- [ ] Canonical URL set correctly
- [ ] All images have alt text
- [ ] Page loads in under 3 seconds
- [ ] Mobile responsive verified

### **Expected Results Timeline**

**Week 1-2:**
- Google indexes new content
- Begin appearing in PAA boxes (2-3 captures expected)
- Impressions increase by 15-20%

**Week 3-4:**
- Featured snippet captures (1-2 expected)
- PAA appearances increase (5-7 total)
- Rankings improve by 1-2 positions on average
- Impressions increase by 25-35%

**Week 5-8:**
- Multiple #1-3 rankings achieved
- Featured snippets stabilize (3-5 total)
- PAA boxes abundant (10-15 total)
- Traffic increase 40-60% from baseline
- Improved CTR (+0.5-1.0%)

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

### **CTA Link Destinations (UPDATED v4.0 - Conversion Optimized)**

**PRIMARY CTA (Highest Priority):**
- **Booking Link**: `href="https://nextsteptherapy.janeapp.com/"`
- **Button Text**: "Schedule Free 15-Minute Call" (NOT "Book Free Consultation")
- **Why**: Specific time-bound offer = 40% conversion boost
- **Research**: Free consultation calls convert at 25-60% to paid clients

**SECONDARY CTA (Phone - 88% conversion):**
- **Phone Link**: `href="tel:+14163062157"`
- **Button Text**: "Call (416) 306-2157" or "Call Now"
- **Why**: Phone conversations = 10-15x more revenue than web leads
- **Critical**: Click-to-call on mobile, always prominent

**TERTIARY CTA (Fallback):**
- **Contact Form**: `href="/#contact"` (homepage contact form)
- **Button Text**: "Send Message" or "Email Us"
- **Why**: For detailed inquiries or those hesitant to book/call
- **Email Backup**: `href="mailto:jesse@nextsteptherapy.ca"` (rarely used)

---

## 📈 CONVERSION OPTIMIZATION FRAMEWORK (v4.0 - CRITICAL)

**Research Base:** Therapy Website CRO Study - Industry benchmark: 15-25% conversion rate
**Current Target:** Transform 0% conversion pages into 10-15% converters
**Expected Impact:** 122-203 consultations/month from high-traffic pages

### **1. STRATEGIC CTA PLACEMENT (10-15x Better Than Random)**

**CRITICAL RULE:** CTAs must appear AFTER decision points, not at random intervals.

**Required CTA Flow (6 CTAs per page):**

**CTA #1 - Hero Section (Soft Entry):**
```html
<a href="https://nextsteptherapy.janeapp.com/" class="manus-primary-cta">
  Schedule Free 15-Minute Call
</a>
```
- **Placement**: Above the fold, immediately after hero text
- **Psychology**: Low-commitment introduction, specific time (reduces anxiety)
- **Trust signals below**: "No pressure, just conversation" + "Book online in 2 minutes"

**CTA #2 - After Problem Recognition (~700 words):**
```html
<div style="text-align: center; margin-top: 2rem; padding: 1.5rem; background: white; border-radius: 8px;">
  <p style="margin-bottom: 1rem; font-weight: 500;">Ready to remove these barriers?</p>
  <a href="https://nextsteptherapy.janeapp.com/" class="manus-primary-cta">
    Schedule Your Free Call
  </a>
  <div style="margin-top: 0.75rem; font-size: 0.875rem; color: #5A6B7D;">
    ✓ Quick 15-minute conversation &nbsp; ✓ Available within 24-48 hours
  </div>
</div>
```
- **Placement**: Immediately after user recognizes their pain points
- **Psychology**: Strike while emotional readiness is high
- **Research**: Response under 1 hour = 80% higher conversion

**CTA #3 - After Solution Explanation (~1500 words):**
```html
<div style="text-align: center; margin-top: 2rem; padding: 1.5rem; background: rgba(107, 142, 111, 0.05); border-radius: 8px;">
  <p style="margin-bottom: 1rem; font-weight: 500;">Experience therapy that works around your life, not against it.</p>
  <a href="https://nextsteptherapy.janeapp.com/" class="manus-primary-cta">
    Book Your Free 15-Minute Call
  </a>
  <div style="margin-top: 0.75rem; font-size: 0.875rem; color: #5A6B7D;">
    ✓ Same-day booking available &nbsp; ✓ Virtual sessions Ontario-wide
  </div>
</div>
```
- **Placement**: After benefits and advantages explained
- **Psychology**: They understand the value, ready to commit

**CTA #4 - After Addressing Concerns (~2800 words):**
```html
<div style="text-align: center; margin-top: 2rem; padding: 1.5rem; background: white; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
  <p style="margin-bottom: 1rem; font-weight: 500;">Ready to experience the convenience of virtual therapy?</p>
  <a href="https://nextsteptherapy.janeapp.com/" class="manus-primary-cta">
    Book Free 15-Minute Call
  </a>
  <div style="margin-top: 0.75rem; font-size: 0.875rem; color: #5A6B7D;">
    ✓ Confidential consultation &nbsp; ✓ No commitment required
  </div>
</div>
```
- **Placement**: After objections handled (technology, privacy, effectiveness)
- **Psychology**: Concerns addressed, final push needed

**CTA #5 - After Benefits Section (~3200 words):**
```html
<div style="text-align: center; margin-top: 2rem; padding: 1.5rem; background: rgba(107, 142, 111, 0.05); border-radius: 8px;">
  <p style="margin-bottom: 1rem; font-weight: 500;">See if virtual therapy is right for you.</p>
  <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
    <a href="https://nextsteptherapy.janeapp.com/" class="manus-primary-cta">Schedule Free Call</a>
    <a href="tel:+14163062157" class="manus-secondary-cta">Call (416) 306-2157</a>
  </div>
</div>
```
- **Placement**: After all value propositions delivered
- **Psychology**: Dual options (book OR call) captures both audiences

**CTA #6 - Final Contact Section (Bottom):**
```html
<section class="contact-highlight" id="contact">
  <h3>Start Virtual Therapy in [City] Today</h3>
  <p>Professional support that fits your life...</p>
  <h4>Free 15-Minute Consultation</h4>
  <p>Discover if we're a good fit...</p>
  <a href="https://nextsteptherapy.janeapp.com/" class="manus-primary-cta">
    Schedule Your Free 15-Minute Call
  </a>
  <div class="secondary-ctas">
    <a href="tel:+14163062157" class="manus-secondary-cta">(416) 306-2157</a>
    <a href="/#contact" class="manus-secondary-cta">Send Message</a>
  </div>
  <div style="margin-top: 1rem; font-size: 0.875rem; color: #5A6B7D;">
    ✓ Book online in 2 minutes &nbsp; ✓ Available 7 days a week &nbsp; ✓ 100% confidential
  </div>
</section>
```
- **Placement**: Final opportunity, strong action-oriented close
- **Psychology**: Multiple pathways (book, call, message) = no excuses

---

### **2. TRUST SIGNALS FRAMEWORK (36% Conversion Improvement)**

**CRITICAL RULE:** Trust signals must appear NEAR CTAs, not just in hero section.

**Hero Section Trust Badges (Above Fold):**
```html
<div class="trust-indicators">
  <span class="trust-indicator">CRPO #10979 Licensed</span>
  <span class="trust-indicator">Free 15-Min Consultation</span>
  <span class="trust-indicator">Insurance Receipts Provided</span>
  <span class="trust-indicator">Respond Within 1 Hour</span>
</div>
```

**CTA Trust Signals (Under EVERY CTA button):**
```html
<div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 0.75rem; font-size: 0.875rem; color: #5A6B7D;">
  <span>✓ No pressure, just conversation</span>
  <span>✓ Book online in 2 minutes</span>
  <span>✓ Evening hours available</span>
</div>
```

**Rotate Trust Signals By CTA Location:**
- **CTA #1 (Hero)**: "No pressure" + "Book in 2 min" + "Evening hours"
- **CTA #2 (Problem)**: "15-min conversation" + "Available 24-48 hrs" + "CRPO licensed"
- **CTA #3 (Solution)**: "Same-day booking" + "Virtual Ontario-wide" + "Insurance covered"
- **CTA #4 (Concerns)**: "Confidential" + "No commitment" + "PHIPA compliant"
- **CTA #5 (Benefits)**: "Licensed therapist" + "Free consultation" + "Flexible scheduling"
- **CTA #6 (Final)**: "Book in 2 min" + "7 days a week" + "100% confidential"

**Why This Works:**
- Addresses specific objections at each decision point
- Reduces booking anxiety with reassurance
- Builds credibility through repetition
- Research: 36% conversion improvement

---

### **3. MOBILE STICKY CTA BAR (20% Conversion Boost)**

**CRITICAL RULE:** Mobile = 65% of traffic. Sticky bar is MANDATORY.

**Implementation:**
```html
<!-- Mobile Sticky CTA Bar - Fixed at bottom -->
<div class="mobile-cta-bar">
  <a href="https://nextsteptherapy.janeapp.com/" class="mobile-cta-book">
    📅 Book Free Call
  </a>
  <a href="tel:+14163062157" class="mobile-cta-phone">
    📞 Call Now
  </a>
</div>

<style>
/* Mobile Sticky Bar - Always visible on mobile */
.mobile-cta-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  padding: 0.75rem;
  z-index: 999;
  display: none;
  gap: 0.5rem;
  border-top: 2px solid #6B8E6F;
}

.mobile-cta-bar a {
  flex: 1;
  padding: 0.875rem 1rem;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9375rem;
  min-height: 48px; /* CRITICAL: 48px minimum for thumb-friendly tapping */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
}

.mobile-cta-book {
  background: linear-gradient(135deg, #6B8E6F, #7A9D7E);
  color: white;
}

.mobile-cta-phone {
  background: rgba(107, 142, 111, 0.08);
  color: #6B8E6F;
  border: 1.5px solid #6B8E6F;
}

@media (max-width: 768px) {
  .mobile-cta-bar {
    display: flex; /* Show only on mobile */
  }

  /* Add padding to body to prevent content overlap */
  body {
    padding-bottom: 70px;
  }
}
</style>
```

**Requirements:**
- ✅ Fixed position at bottom
- ✅ 48x48px minimum touch targets (Apple/Google guidelines)
- ✅ Dual buttons (book + call) for maximum coverage
- ✅ Always visible while scrolling
- ✅ Clean design, doesn't obstruct content
- ✅ Research: 20% conversion improvement on mobile

---

### **4. DESKTOP FLOATING CTA (Persistent Visibility)**

**CRITICAL RULE:** Desktop users need persistent CTA access too.

**Implementation:**
```html
<!-- Floating CTA for Desktop - Bottom Right -->
<a href="https://nextsteptherapy.janeapp.com/" class="floating-cta">
  📅 Schedule Free Call
</a>

<style>
.floating-cta {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  background: linear-gradient(135deg, #6B8E6F, #7A9D7E);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  box-shadow: 0 4px 20px rgba(107, 142, 111, 0.3);
  transition: all 0.3s ease;
  min-height: 48px;
  align-items: center;
  gap: 0.5rem;
}

.floating-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(107, 142, 111, 0.4);
  color: white;
}

@media (max-width: 768px) {
  .floating-cta {
    display: none; /* Hide on mobile, use sticky bar instead */
  }
}
</style>
```

**Why This Works:**
- Always visible during scroll (no need to scroll back up)
- Unobtrusive but accessible
- Links to booking (highest-converting action)
- Research: Maintains conversion opportunities throughout page

---

### **5. ANALYTICS TRACKING (CRITICAL FOR OPTIMIZATION)**

**MUST ADD to every page:**
```javascript
// Track booking clicks (NEW in v4.0)
document.querySelectorAll('a[href*="janeapp.com"]').forEach(link => {
  link.addEventListener('click', function() {
    gtag('event', 'booking_click', {
      'event_category': 'conversion',
      'value': 175,
      'currency': 'CAD'
    });
  });
});

// Track phone clicks (existing)
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', function() {
    gtag('event', 'phone_call', {
      'event_category': 'conversion',
      'value': 175,
      'currency': 'CAD'
    });
  });
});
```

**Metrics to Monitor:**
- Booking link clicks (target: 2-5% of visitors)
- Phone clicks (target: 1-3% of visitors)
- Mobile vs desktop engagement
- Best-performing CTA location
- Consultation → client conversion (target: 65%)

---

### **6. CONVERSION BENCHMARKS & SUCCESS METRICS**

**Industry Standards (Therapy Websites):**
- Top performers: 15-25% conversion rate
- Industry median: 3.6%
- Your target: 10-15% (realistic with optimization)

**Per-Page Revenue Potential:**
Example: Burlington page (812 impressions/month)
- At 10% conversion: 81 consultations → 53 clients → $7,950/month
- At 15% conversion: 122 consultations → 79 clients → $11,850/month
- At 20% conversion: 162 consultations → 105 clients → $15,750/month

**Success Timeline:**
- Week 1-2: Validate tracking works, baseline metrics
- Week 3-4: Expect 5-10% conversion if optimizations working
- Month 2-3: Target 10-15% conversion with iteration
- Month 4+: Maintain 15-20% with ongoing optimization

---

### **7. CTA BUTTON TEXT VARIATIONS (A/B Testing)**

**Primary Options (Use "Schedule" not "Book"):**
1. "Schedule Free 15-Minute Call" ✅ RECOMMENDED
2. "Book Your Free Consultation"
3. "Talk With A Therapist - Free 15 Min"
4. "Schedule Free Consultation Call"

**Why "Schedule" Beats "Book":**
- More professional, less transactional
- Implies planned commitment (vs. impulse "booking")
- "15-Minute" reduces anxiety with specific time

**Secondary CTA (Phone):**
1. "Call (416) 306-2157" ✅ RECOMMENDED
2. "Call Now"
3. "Speak With A Therapist"

**Tertiary CTA (Contact):**
1. "Send Message"
2. "Email Us"
3. "Get In Touch"

---

### **8. MOBILE-SPECIFIC REQUIREMENTS**

**CRITICAL MOBILE OPTIMIZATIONS:**

✅ **Touch Targets**: Minimum 48x48px (Apple) or 48x48dp (Google)
✅ **Thumb Zone**: CTAs in lower half of screen where thumbs naturally rest
✅ **Sticky Bar**: Always visible at bottom (20% conversion boost)
✅ **Click-to-Call**: Primary action on mobile (88% conversion for callers)
✅ **Fast Loading**: Mobile users abandon >3 seconds
✅ **No Popups**: Intrusive on small screens
✅ **Simplified Forms**: Minimize fields (name, phone, concern only)

**Mobile CTA Hierarchy:**
1. Sticky bar (📅 Book + 📞 Call) - Always visible
2. In-content CTAs - Touch-friendly, 48px minimum
3. Floating button - HIDDEN (sticky bar replaces it)

---

### **File Locations**
- **Template**: `/anxiety-therapy-toronto.html`
- **Sitemap**: `/sitemap.xml`
- **Config**: `/vercel.json`
- **Styles**: `/shared.min.css` (DO NOT EDIT)

---

## 🏆 VIRTUOUS CIRCLE SIDEBAR STRATEGY (CRITICAL FOR RANKINGS)

### **The Internal Linking Powerhouse**

Virtuous Circle's sidebar appears on EVERY page and contains 18 strategic internal links. This is a core part of their SEO success.

### **Sidebar Structure to Implement:**

```html
<aside class="sidebar">
  <!-- Services Section -->
  <div class="sidebar-section">
    <h3>Services</h3>
    <ul>
      <li><a href="/individual-counselling-ontario.html">Individual Counselling</a></li>
      <li><a href="/virtual-therapy-ontario.html">Virtual Therapy</a></li>
      <li><a href="/student-mental-health-ontario.html">Student Support</a></li>
      <li><a href="/workplace-stress-therapy-ontario.html">Workplace Therapy</a></li>
      <li><a href="/anxiety-therapy-ontario.html">Anxiety Support</a></li>
      <li><a href="/depression-therapy-ontario.html">Depression Support</a></li>
    </ul>
  </div>

  <!-- Specialties Section -->
  <div class="sidebar-section">
    <h3>Specialties</h3>
    <ul>
      <li><a href="/anxiety-therapy-ontario.html">Anxiety Therapy</a></li>
      <li><a href="/depression-therapy-ontario.html">Depression Counselling</a></li>
      <li><a href="/trauma-therapy-ontario.html">Trauma Therapy</a></li>
      <li><a href="/workplace-stress-therapy-ontario.html">Workplace Stress</a></li>
      <li><a href="/university-anxiety-therapy-ontario.html">University Anxiety</a></li>
      <li><a href="/performance-anxiety-therapy-ontario.html">Performance Anxiety</a></li>
      <li><a href="/impostor-syndrome-therapy-ontario.html">Impostor Syndrome</a></li>
    </ul>
  </div>

  <!-- Models of Therapy Section -->
  <div class="sidebar-section">
    <h3>Therapy Approaches</h3>
    <ul>
      <li><a href="/act-therapy-ontario.html">ACT Therapy</a></li>
      <li><a href="/cbt-therapy-techniques-ontario.html">CBT Therapy</a></li>
      <li><a href="/mindfulness-therapy-ontario.html">Mindfulness Therapy</a></li>
      <li><a href="/virtual-therapy-ontario.html">Virtual Therapy</a></li>
    </ul>
  </div>

  <!-- CTA Section -->
  <div class="sidebar-cta">
    <h3>Book Your Appointment Online</h3>
    <p>We're currently accepting new clients. Book a free 15-minute consultation to see if we're a good fit.</p>
    <a href="/#contact" class="manus-primary-cta">Get Started</a>
  </div>
</aside>
```

### **Sidebar CSS:**

```css
.sidebar {
  background: var(--bg-alternate);
  padding: 2rem;
  border-radius: 8px;
  position: sticky;
  top: 100px;
}

.sidebar-section {
  margin-bottom: 2rem;
}

.sidebar-section h3 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--primary-green);
  padding-bottom: 0.5rem;
}

.sidebar-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-section li {
  margin-bottom: 0.75rem;
}

.sidebar-section a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  display: block;
}

.sidebar-section a:hover {
  color: var(--primary-green);
  padding-left: 5px;
}

.sidebar-cta {
  background: var(--primary-green);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.sidebar-cta h3 {
  color: white;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
}

.sidebar-cta p {
  color: white;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  opacity: 0.95;
}

@media (max-width: 968px) {
  .sidebar {
    position: relative;
    top: 0;
    margin-top: 3rem;
  }
}
```

---

## 📊 WORD COUNT TARGETS (UPDATED WITH VIRTUOUS CIRCLE DATA)

Based on Virtuous Circle's top pages:

**Before Phase 1 & 2 SEO additions:**
- Service pages: 1,800-2,500 words (Virtuous Circle baseline)

**After Phase 1 & 2 SEO additions:**
- Service pages: 4,000-4,500 words (our enhanced version)
- Location pages: 3,500-4,000 words
- Condition pages: 3,500-4,000 words

**Section breakdown:**
- Hero + intro (Virtuous Circle pattern): 400-500 words
- Treatment approach section: 300-400 words
- Types/symptoms sections: 400-500 words
- Physical symptoms section: 200-300 words
- Mini-FAQ (3 questions): 200-300 words
- **Subtotal before our SEO additions: ~1,800-2,500 words**
- FAQ section (15 questions - our addition): 1,000-1,200 words
- Comparison table section (our addition): 300-400 words
- Location section (our addition): 400-500 words
- Process steps section (our addition): 300-400 words
- **Total with our enhancements: 4,000-4,500 words**

---

*This COMPLETE PRD ensures 100% consistency, compliance, and quality across all page creation efforts. Every aspect from design to deployment is documented and standardized.*

*Version 3.0 - Last Updated: October 2025*
*Includes Virtuous Circle Counselling proven patterns (DR 27, 2,700 monthly visitors, $1.5M+ revenue)*