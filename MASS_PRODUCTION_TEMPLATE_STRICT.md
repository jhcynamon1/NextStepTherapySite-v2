# ⚠️ CRITICAL: Mass Production Template Requirements
## MUST Follow EXACTLY - No Variations Allowed

---

## ❌ **CURRENT PROBLEM: Pages Don't Match Template**

The implemented pages are using:
- **Wrong class names**: `hero-section` instead of `hero`, `primary-cta` instead of `btn-primary`
- **Missing elements**: No info cards, no trust bar, no mobile CTA
- **Different structure**: Completely different HTML layout
- **No consistency**: Each page looks different

**This is unacceptable for mass production.**

---

## ✅ **THE SOLUTION: Strict Template Enforcement**

### **File Created:** `/Users/jessecynamon/NextStepTherapy/EXACT_page_template.html`

**Every page MUST use this EXACT structure. No exceptions.**

---

## 📋 **MANDATORY PAGE STRUCTURE**

### **0. Header Section (FIXED August 2025 - MUST USE EXACTLY)**
```html
<header class="header">
    <div class="container">
        <div class="header-content">
            <div class="logo-section">
                <img src="images/asset104.png" alt="Next Step Therapy Logo" class="logo" onerror="this.style.display='none'">
                <a href="index.html" class="logo-text">Next Step Therapy</a>
                <span class="credentials-badge">CRPO #10979</span>
            </div>
            
            <nav class="nav">
                <a href="index.html">Home</a>
                <a href="index.html#contact">Contact</a>
            </nav>
        </div>
    </div>
</header>
```

**❌ CRITICAL ERRORS TO AVOID:**
- Using `width: 40px; height: 40px; border-radius: 50%` (causes circular distortion)
- Including "Services" link in navigation
- Missing logo-section wrapper
- Missing credentials badge
- Wrong font-weight (600) for logo text

**✅ REQUIRED CSS:**
```css
.logo-section {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.logo {
    height: 42px;
    width: auto; /* CRITICAL: Preserves aspect ratio */
}

.credentials-badge {
    background: linear-gradient(135deg, var(--primary-soft-blue), var(--primary-light));
    color: white;
    padding: 0.375rem 0.875rem;
    border-radius: var(--radius-lg);
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.025em;
}
```

**Enhanced H1 Styling (Based on ACT page):**
```css
.hero h1 {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 600;
    font-style: italic;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    line-height: 1.2;
    letter-spacing: -0.025em;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

### **1. Hero Section (EXACTLY as shown)**
```html
<section class="hero"> <!-- NOT "hero-section" -->
    <div class="hero-content">
        <h1>[HEADLINE FROM service_pages_copy.md]</h1>
        <p class="lead-text">[SUBHEADLINE]</p>
        
        <div class="trust-bar"> <!-- MANDATORY -->
            <span class="trust-pill">CRPO #10979</span>
            <span class="trust-pill">Virtual Sessions</span>
            <span class="trust-pill">Insurance Receipts</span>
        </div>
        
        <div class="cta-group">
            <a href="tel:+14163062157" class="btn-primary">Book Free Consultation</a>
            <a href="#contact" class="btn-secondary">(416) 306-2157</a>
        </div>
    </div>
</section>
```

### **2. Info Cards Section (MANDATORY - NO TABLES)**
```html
<section class="service-overview">
    <div class="info-cards"> <!-- NOT a table -->
        <div class="info-card">
            <span class="label">Format</span>
            <span class="value">Virtual Sessions</span>
        </div>
        <div class="info-card">
            <span class="label">Duration</span>
            <span class="value">50 minutes</span>
        </div>
        <div class="info-card">
            <span class="label">Frequency</span>
            <span class="value">Weekly/Bi-weekly</span>
        </div>
        <div class="info-card">
            <span class="label">Investment</span>
            <span class="value">$150/session</span>
        </div>
    </div>
</section>
```

---

## 🎨 **EXACT CSS REQUIREMENTS**

### **Critical Values (DO NOT CHANGE)**
```css
/* These EXACT values on EVERY page */
.hero::before {
    opacity: 0.3; /* EXACTLY 30% - not 0.25, not 0.35 */
}

.lead-text {
    max-width: 700px; /* EXACTLY 700px */
    margin: 0 auto 32px auto; /* AUTO margins for centering */
}

.btn-primary {
    background: #6B8E6F; /* EXACT color */
    color: white;
    font-weight: 600; /* For readability */
}

.btn-primary:hover {
    background: #5A7D5E; /* 10% darker */
}

@media (max-width: 768px) {
    .mobile-cta {
        min-height: 48px; /* Touch target WCAG */
    }
}
```

---

## 🔢 **CTA PLACEMENT RULES**

**EXACTLY 5 CTAs per page in these positions:**

1. **Hero Section** - 2 buttons (primary + secondary)
2. **After Problem Recognition** - 1 button
3. **Mid-Page CTA Box** - 2 buttons
4. **End of Content** - 2 buttons
5. **Mobile Floating** - 1 button (mobile only)

---

## 📝 **COPY IMPLEMENTATION PROCESS**

### **Step 1: Get the Approved Copy**
```
Open: /Users/jessecynamon/NextStepTherapy/service_pages_copy.md
Find: The section for your service (e.g., lines 106-210 for Men's Mental Health)
Copy: EXACTLY as written (no edits)
```

### **Step 2: Use the Template**
```
Open: /Users/jessecynamon/NextStepTherapy/EXACT_page_template.html
Replace: [PLACEHOLDERS] with approved copy
Keep: All HTML structure and class names EXACTLY
```

### **Step 3: Pre-Deployment Check**
```
□ Search for "actually helps" → Must not exist
□ Search for "treatment" → Replace with "therapy"
□ Check opacity: 0.3 (not any other value)
□ Check lead-text: max-width: 700px
□ Count CTAs: Exactly 5 (desktop) or 6 (with mobile)
□ Verify trust-bar exists
□ Verify info-cards exist (not table)
```

---

## 🚫 **VIOLATIONS = REJECTION**

**Any page that doesn't match the template will be rejected:**

| Violation | Result |
|-----------|--------|
| Wrong class names | REJECTED |
| Missing info cards | REJECTED |
| Wrong opacity (not 0.3) | REJECTED |
| Tables instead of cards | REJECTED |
| Less than 5 CTAs | REJECTED |
| No mobile CTA | REJECTED |
| Unapproved copy | REJECTED |

---

## ✅ **CHECKLIST FOR EVERY PAGE**

Before deploying ANY page, verify:

### **Structure**
- [ ] Uses `class="hero"` NOT `class="hero-section"`
- [ ] Uses `class="btn-primary"` NOT `class="primary-cta"`
- [ ] Has trust-bar with 3 pills
- [ ] Has info-cards section (4 cards)
- [ ] Has mobile-cta for phones

### **Visual**
- [ ] Hero background at 0.3 opacity
- [ ] Lead text with max-width: 700px
- [ ] Lead text with margin: 0 auto
- [ ] Sage green (#6B8E6F) for primary buttons
- [ ] 48px minimum touch targets

### **Content**
- [ ] Copy matches service_pages_copy.md EXACTLY
- [ ] No "actually helps" or similar violations
- [ ] CRPO #10979 visible
- [ ] 2,500+ words total

### **CTAs**
- [ ] Hero: 2 CTAs
- [ ] After problem: 1 CTA
- [ ] Mid-page box: 2 CTAs
- [ ] End section: 2 CTAs
- [ ] Mobile floating: 1 CTA

---

## 🚀 **MASS PRODUCTION STEPS**

### **For Service Pages (6 total)**
1. Open `EXACT_page_template.html`
2. Open `service_pages_copy.md`
3. Find the service section
4. Replace placeholders with exact copy
5. Save as `services/[service-name].html`
6. Run pre-deployment check

### **For SEO Pages (20 total)**
1. Open `EXACT_page_template.html`
2. Use PRD headlines/structure
3. Write 2,500+ words following brand voice
4. Ensure all template elements present
5. Run pre-deployment check

### **For Virtual/Location Pages (30 total)**
1. Open `EXACT_page_template.html`
2. Follow virtual_location_pages_prd.md
3. Adapt copy for virtual/regional context
4. Ensure all template elements present
5. Run pre-deployment check

---

## ⛔ **DO NOT**

- Create your own HTML structure
- Use different class names
- Skip the info cards section
- Use tables anywhere
- Change the opacity from 0.3
- Edit the approved copy
- Use less than 5 CTAs
- Deploy without the checklist

---

## ✅ **EXPECTED RESULT**

Every page should:
1. Look EXACTLY like the anxiety page template
2. Have identical structure and styling
3. Only differ in copy content and images
4. Pass all checklist items
5. Be immediately deployable

---

## 📁 **Required Files**

- Template: `/Users/jessecynamon/NextStepTherapy/EXACT_page_template.html`
- Copy: `/Users/jessecynamon/NextStepTherapy/service_pages_copy.md`
- Main PRD: `/Users/jessecynamon/NextStepTherapy/comprehensive_seo_pages_prd.md`
- Virtual PRD: `/Users/jessecynamon/NextStepTherapy/virtual_location_pages_prd.md`

**Follow the template EXACTLY or pages will be rejected.**
