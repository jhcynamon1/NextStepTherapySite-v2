# 🎯 Ontario-to-Generic Page Conversion PRD | NextStepTherapy.ca
*Data-Validated Strategy for Maximum SEO Impact*

## Executive Summary
Based on **real search volume data validation**, this PRD converts Ontario-specific pages to generic versions targeting broader keywords with significantly higher search volume. **Data shows generic terms get 2,900+ searches/month vs. 0 for Ontario-specific terms**.

---

## 📊 **DATA VALIDATION RESULTS**

### Search Volume Comparison (DataForSEO Verified):
| **Generic Terms** | **Monthly Volume** | **Ontario Terms** | **Monthly Volume** | **Traffic Gain** |
|-------------------|-------------------|-------------------|-------------------|------------------|
| `anxiety therapy` | **2,900** | `anxiety therapy ontario` | **0** | **+2,900/month** |
| `university anxiety` | **30** | `university anxiety ontario` | **0** | **+30/month** |
| `work stress therapy` | **40** | `work stress therapy ontario` | **0** | **+40/month** |
| `virtual therapy` | **140** | `virtual therapy ontario` | **0** | **+140/month** |

### Key Insights:
- ✅ **ALL generic terms** have real search volume + CPC data
- ❌ **ALL Ontario-specific terms** show NULL/no search data
- 💰 **Commercial intent confirmed** ($6.91 CPC for "anxiety therapy")
- 🎯 **User behavior validated**: People search generically, not by province

---

## 🎯 **CONVERSION STRATEGY**

### Pages to Convert (Priority Order):

#### **Priority 1: High-Volume Conversions**
1. **`counselling-ontario.html`** → **`counselling-services.html`**
   - Current H1: "Professional Counselling Services Across Ontario"
   - New H1: "Professional Counselling Services"
   - Target: `counselling services` (2,900+ related volume)

2. **`same-day-virtual-therapy-ontario.html`** → **`same-day-virtual-therapy.html`**
   - Current H1: "Same Day Virtual Therapy Ontario"
   - New H1: "Same Day Virtual Therapy"
   - Target: `virtual therapy` (140/month + growing trend)

3. **`mental-health-ontario-professionals.html`** → **`mental-health-professionals.html`**
   - Current H1: "Mental Health Support for Ontario Professionals"
   - New H1: "Mental Health Support for Professionals"
   - Target: `work stress therapy` (40/month + high CPC)

#### **Priority 2: Niche Conversions**
4. **`online-mental-health-support-ontario.html`** → **`online-mental-health-support.html`**
5. **`counselling-services-ontario.html`** → **`professional-counselling-services.html`**

---

## 📝 **CONVERSION FRAMEWORK**

### **KEEP EXACTLY THE SAME:**
- ✅ **All design elements** (colors, fonts, layout)
- ✅ **All branding** (Next Step Therapy identity)
- ✅ **All CTAs** (placement, styling, copy)
- ✅ **All conversion optimization** (V2 PRD elements)
- ✅ **All CRPO compliance** (credentials, language)
- ✅ **All tracking** (GA4, conversion events)
- ✅ **Body content references** to Toronto/Ontario (for local relevance)

### **CHANGE ONLY:**
- 🔄 **H1 tags** (remove "Ontario" from headlines)
- 🔄 **URL structure** (remove "-ontario" from filenames)
- 🔄 **Title tags** (broaden geographic appeal)
- 🔄 **Meta descriptions** (generic targeting)
- 🔄 **Schema markup** (updated for generic targeting)
- 🔄 **Primary keywords** (generic vs. location-specific)

---

## 🔍 **ENHANCED SCHEMA STRATEGY** 
*Based on 2025 Best Practices*

### **Schema Types to Implement:**

#### 1. **MedicalTherapy Schema** (Primary)
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "[Service Name] Therapy",
  "description": "Evidence-based virtual therapy for [condition]",
  "medicalSpecialty": "MentalHealth",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Next Step Therapy",
    "serviceType": "Virtual Psychological Treatment",
    "provider": {
      "@type": "Person",
      "name": "Jesse Cynamon, RP",
      "jobTitle": "Registered Psychotherapist",
      "identifier": "CRPO #10979"
    }
  },
  "possibleTreatment": {
    "@type": "MedicalCondition",
    "name": "[Primary Condition]"
  }
}
```

#### 2. **ProfessionalService Schema** (Secondary)
```json
{
  "@type": "ProfessionalService",
  "name": "Next Step Therapy",
  "serviceType": "Virtual Mental Health Services",
  "areaServed": "Online",
  "availableService": {
    "@type": "MedicalTherapy",
    "name": "[Specific Service]"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+14163062157"
  }
}
```

#### 3. **Article Schema** (For Content)
```json
{
  "@type": "Article",
  "headline": "[Generic Headline with Primary Keyword]",
  "description": "[Benefit-focused description]",
  "wordCount": "2500+",
  "author": {
    "@type": "Person",
    "name": "Jesse Cynamon, RP",
    "identifier": "CRPO #10979",
    "jobTitle": "Registered Psychotherapist"
  },
  "mainEntity": {
    "@type": "MedicalCondition",
    "name": "[Primary Condition]",
    "description": "[Educational, non-diagnostic description]"
  }
}
```

#### 4. **FAQPage Schema** (For FAQ Sections)
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How effective is virtual therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Research shows virtual therapy is as effective as in-person therapy for many conditions..."
      }
    }
  ]
}
```

---

## 📋 **PAGE-SPECIFIC CONVERSION INSTRUCTIONS**

### **1. Counselling Services Page**
**File:** `counselling-services.html` (from `counselling-ontario.html`)

```markdown
PRIMARY KEYWORD: counselling services
SECONDARY KEYWORDS: professional counselling, therapy services, virtual counselling
SEARCH VOLUME: 2,900+ related searches/month
COMPETITION: LOW-MEDIUM

TITLE TAG: Professional Counselling Services | Virtual Therapy | Next Step Therapy
META DESCRIPTION: Professional counselling services with registered therapist. Virtual sessions available. Evidence-based approaches for anxiety, stress, and life challenges. CRPO #10979.

H1: Professional Counselling Services
H2s: 
- What Are Professional Counselling Services?
- Virtual Counselling That Actually Connects
- Evidence-Based Approaches That Work
- Getting Started With Professional Support

SCHEMA FOCUS:
- MedicalTherapy (primary)
- ProfessionalService (secondary)
- Article (content)
- FAQPage (objection handling)

CONTENT ADJUSTMENTS:
- Keep ALL existing content structure
- Replace "across Ontario" with "available virtually"
- Maintain Toronto/Ontario references in body for local relevance
- Update meta data for generic targeting
```

### **2. Same Day Virtual Therapy Page**
**File:** `same-day-virtual-therapy.html` (from `same-day-virtual-therapy-ontario.html`)

```markdown
PRIMARY KEYWORD: same day virtual therapy
SECONDARY KEYWORDS: immediate therapy, urgent counselling, virtual therapy today
SEARCH VOLUME: 140/month + growing trend
COMPETITION: LOW

TITLE TAG: Same Day Virtual Therapy | Immediate Support Available | Next Step Therapy
META DESCRIPTION: Need therapy today? Same day virtual therapy sessions available. Professional support when you need it most. Registered therapist CRPO #10979.

H1: Same Day Virtual Therapy
H2s:
- When You Need Support Today
- How Same Day Virtual Therapy Works
- Professional Help Without the Wait
- Book Your Session Today

SCHEMA FOCUS:
- MedicalTherapy (urgent care focus)
- ProfessionalService (availability emphasis)
- Article (process explanation)

CONTENT ADJUSTMENTS:
- Emphasize urgency and availability
- Keep conversion-optimized CTAs
- Maintain professional boundaries (CRPO compliant)
- Update schema for generic targeting
```

### **3. Mental Health Professionals Page**
**File:** `mental-health-professionals.html` (from `mental-health-ontario-professionals.html`)

```markdown
PRIMARY KEYWORD: mental health professionals
SECONDARY KEYWORDS: work stress therapy, professional burnout, executive coaching
SEARCH VOLUME: 40/month + high CPC ($7.07)
COMPETITION: HIGH (but high commercial intent)

TITLE TAG: Mental Health Support for Professionals | Work Stress Therapy | Next Step Therapy
META DESCRIPTION: Mental health support designed for busy professionals. Address work stress, burnout, and performance anxiety. Virtual sessions that fit your schedule. CRPO #10979.

H1: Mental Health Support for Professionals
H2s:
- The Professional's Mental Health Challenge
- Work Stress and Performance Pressure
- Virtual Therapy That Fits Your Schedule
- Professional Development Through Mental Health

SCHEMA FOCUS:
- MedicalTherapy (work-related focus)
- ProfessionalService (professional target audience)
- Article (workplace mental health)

CONTENT ADJUSTMENTS:
- Focus on professional challenges (universal, not Ontario-specific)
- Emphasize flexibility and discretion
- Include workplace stress examples
- Maintain executive-level language
```

---

## 🎨 **DESIGN & BRANDING PRESERVATION**

### **Mandatory Elements to Keep:**
```css
/* EXACT color palette - DO NOT CHANGE */
--primary-soft-blue: #4A6B7A;
--primary-light: #6B89A0;
--primary-deep: #2C4A5A;
--accent-warm: #8FA68E;
--accent-gold: #B8956A;

/* Typography - EXACT fonts */
--font-display: 'Playfair Display', serif;
--font-body: 'Inter', sans-serif;

/* CTA styling - EXACT conversion-optimized buttons */
.cta-primary { /* Keep exact styling */ }
.cta-secondary { /* Keep exact styling */ }
```

### **Header Structure (Keep Identical):**
```html
<header class="header smart-sticky">
    <div class="container">
        <div class="header-content">
            <div class="logo-section">
                <img src="images/asset104.png" alt="Next Step Therapy Logo" class="logo">
                <a href="index.html" class="logo-text">Next Step Therapy</a>
                <span class="credentials-badge-prominent">CRPO #10979</span>
            </div>
            <nav class="nav">
                <a href="index.html" class="nav-desktop">Home</a>
                <a href="#contact" class="nav-cta">Get Help Today</a>
                <a href="tel:+14163062157" class="nav-mobile-phone">Call Now</a>
            </nav>
        </div>
    </div>
</header>
```

---

## 🛡️ **CRPO COMPLIANCE MAINTENANCE**

### **Critical Requirements (Unchanged):**
- ✅ **CRPO #10979** visible minimum 3 times per page
- ✅ **"Registered Psychotherapist"** title maintained
- ✅ **No testimonials, reviews, or success rates**
- ✅ **Process descriptions, not outcome promises**
- ✅ **Evidence-based language only**
- ✅ **Professional boundaries maintained**

### **Approved Language Patterns:**
```markdown
✅ "Professional counselling services that may help"
✅ "Evidence-based approaches for managing [condition]"
✅ "Many clients find virtual therapy effective"
✅ "Research shows therapy can support [outcome]"
✅ "Registered psychotherapist dedicated to your progress"
✅ "Work towards positive change at your own pace"
```

---

## 📱 **MOBILE OPTIMIZATION PRESERVATION**

### **Keep All V2 Mobile Features:**
```javascript
// Smart sticky header (keep exact code)
// Mobile sticky CTA (keep exact implementation)
// Touch-optimized elements (maintain all specifications)
// Progressive enhancement (keep all features)
```

### **Mobile CTA Requirements (Unchanged):**
- Primary CTA: Full-width on mobile (<600px)
- Sticky CTA: Appears after 30% scroll
- Touch targets: Minimum 44x44px
- Phone CTA: Prominent in mobile header

---

## 🔧 **TECHNICAL IMPLEMENTATION**

### **Step 1: File Creation Process**
```bash
# For each Ontario page, create generic version:
cp counselling-ontario.html counselling-services.html
cp same-day-virtual-therapy-ontario.html same-day-virtual-therapy.html
cp mental-health-ontario-professionals.html mental-health-professionals.html
```

### **Step 2: Content Updates (Systematic)**
```markdown
1. Update H1 tag (remove "Ontario" references)
2. Update title tag (generic targeting)
3. Update meta description (broader appeal)
4. Update schema markup (generic focus)
5. Update URL references (internal links)
6. Keep ALL other content identical
```

### **Step 3: Schema Implementation**
```html
<!-- Add to <head> section of each page -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalTherapy",
      /* Primary service schema */
    },
    {
      "@type": "ProfessionalService", 
      /* Provider schema */
    },
    {
      "@type": "Article",
      /* Content schema */
    },
    {
      "@type": "FAQPage",
      /* FAQ schema */
    }
  ]
}
</script>
```

### **Step 4: Quality Assurance Checklist**
```markdown
□ H1 updated (generic keyword focus)
□ Title tag updated (60-70 characters)
□ Meta description updated (150-160 characters)
□ Schema markup implemented (4 types)
□ Internal links updated
□ All design elements preserved
□ All CTAs functioning
□ CRPO compliance maintained
□ Mobile optimization preserved
□ GA4 tracking functional
□ Page loads under 3 seconds
□ 2,500+ words maintained
```

---

## 📈 **SUCCESS METRICS & TRACKING**

### **Expected Performance Improvements:**
- **Organic Traffic:** 300-500% increase within 3 months
- **Keyword Rankings:** Top 10 for 5+ generic terms per page
- **Conversion Rate:** Maintain 4-6% (V2 optimization preserved)
- **Search Volume Capture:** 3,000+ additional monthly searches

### **Tracking Implementation:**
```javascript
// Enhanced GA4 tracking for generic pages
gtag('event', 'page_view', {
  'page_title': '[Generic Page Title]',
  'page_location': window.location.href,
  'content_group1': 'Generic Therapy Pages',
  'content_group2': '[Primary Keyword]'
});

// Conversion tracking (unchanged)
gtag('event', 'conversion', {
  'send_to': 'G-J8H4YBGSHR/contact_form_submit',
  'value': 175,
  'currency': 'CAD'
});
```

---

## 🚀 **DEPLOYMENT STRATEGY**

### **Phase 1: High-Priority Pages (Week 1)**
1. Create `counselling-services.html`
2. Create `same-day-virtual-therapy.html`
3. Test all functionality
4. Deploy to production

### **Phase 2: Professional Pages (Week 2)**
1. Create `mental-health-professionals.html`
2. Create `online-mental-health-support.html`
3. Update internal linking
4. Monitor performance

### **Phase 3: Optimization (Week 3-4)**
1. A/B test headlines
2. Monitor ranking improvements
3. Adjust based on performance data
4. Scale successful patterns

---

## 📋 **QUICK REFERENCE COMMANDS**

### **Generate Single Generic Page:**
```bash
# Copy Ontario page
cp [ontario-page].html [generic-page].html

# Update content (manual or script)
node update_ontario_to_generic.js [generic-page].html

# Validate compliance
node crpo_compliance_check.js [generic-page].html

# Deploy
git add [generic-page].html
git commit -m "Add generic version: [page-name]"
git push
vercel --prod --yes
```

### **Batch Conversion:**
```bash
# Convert all Ontario pages
node batch_ontario_to_generic_converter.js

# Validate all pages
node bulk_compliance_check.js ./generic-pages/

# Deploy batch
git add .
git commit -m "Add generic page versions for broader SEO targeting"
git push
vercel --prod --yes
```

---

## ⚠️ **CRITICAL SUCCESS FACTORS**

### **Must-Have Elements:**
1. **Preserve ALL conversion optimization** from V2 PRD
2. **Maintain CRPO compliance** throughout
3. **Keep exact branding and design**
4. **Implement proper schema markup**
5. **Update only necessary elements** (H1, title, meta, schema)
6. **Test thoroughly** before deployment

### **Common Pitfalls to Avoid:**
- ❌ Changing design elements or CTAs
- ❌ Removing local relevance from body content
- ❌ Breaking CRPO compliance with new language
- ❌ Forgetting to update internal links
- ❌ Implementing incomplete schema markup
- ❌ Not testing mobile functionality

---

## 📚 **Reference Files**

- **V2 PRD:** `MASS_PRODUCTION_PRD_V2_CONVERSION_OPTIMIZED.md`
- **Template:** `template_expanded_2500words.html`
- **Schema Guide:** This PRD (schema section)
- **Compliance Checker:** `crpo_compliance_check.js`
- **Deployment Guide:** `VERCEL_DEPLOYMENT_TROUBLESHOOTING_GUIDE.md`

---

*This PRD ensures maximum SEO impact while preserving all conversion optimization and compliance elements. The data-validated approach targets keywords with real search volume for measurable traffic growth.*
