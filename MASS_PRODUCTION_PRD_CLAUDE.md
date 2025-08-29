# 🎯 Mass Production PRD for Claude Code - NextStepTherapy.ca

## Executive Summary
This PRD enables you to mass-produce SEO-optimized, CRPO-compliant therapy pages using our proven template. Each page should be 2,500+ words, follow our brand guidelines exactly, and be ready for immediate deployment.

---

## 📁 Template Location & Structure

### Master Template File
**Location:** `/Users/jessecynamon/NextStepTherapy/template_expanded_2500words.html`

### Template Components to Customize:
1. **Meta Data** (Lines 10-20)
   - Title tag (60-70 characters)
   - Meta description (150-160 characters)
   - Open Graph tags
   - Canonical URL

2. **Schema Markup** (Lines 25-100)
   - Article schema
   - FAQ schema (5 questions minimum)
   - Person schema (Jesse Cynamon, RP, CRPO #10979)

3. **Content Sections** (2,500+ words total)
   - Hero (300 words)
   - Sound Familiar (400 words)
   - Understanding Section (500 words)
   - How Therapy Helps (450 words)
   - Immediate Strategies (500 words)
   - Success Without Sacrifice (400 words)
   - What to Expect (350 words)
   - About Therapist (250 words)
   - Getting Started (200 words)

### ⚠️ CRITICAL: Header Structure (MUST USE EXACTLY)
**Updated August 2025** - Following logo distortion fixes

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

**Required CSS:**
```css
.logo-section {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.logo {
    height: 42px;
    width: auto; /* Preserves aspect ratio - CRITICAL */
}

.logo-text {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 400;
    font-style: italic;
    color: var(--primary-soft-blue);
    text-decoration: none;
    letter-spacing: -0.01em;
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

**❌ DO NOT USE** (causes logo distortion):
- `width: 40px; height: 40px; border-radius: 50%`
- `font-weight: 600` for logo text
- Services link in navigation

---

## ✍️ Copywriting Requirements

### Voice & Tone
- **Empathetic:** "You're not alone in this"
- **Professional:** Evidence-based language
- **Conversational:** Like talking to a supportive friend
- **Action-oriented:** Clear next steps

### Content Structure
1. **Open with empathy** - Acknowledge their struggle
2. **Validate feelings** - Normalize their experience  
3. **Educate gently** - Explain the science simply
4. **Provide value** - Give immediate strategies
5. **Build trust** - Share credentials without bragging
6. **Clear CTA** - Make next step obvious

### Writing Rules
- Use "you" and "your" frequently
- Short paragraphs (3-4 sentences max)
- Mix sentence lengths for rhythm
- Include specific Ontario/GTA references
- Use present tense for current struggles
- Use future tense for positive outcomes
- NO jargon unless immediately explained

### Keywords Integration
- **Primary keyword:** 2-3% density (appear 50-75 times)
- **Natural placement** in:
  - H1, H2, H3 headers
  - First paragraph
  - Alt text (when images added)
  - FAQ questions and answers
  - Throughout body naturally

---

## 🔍 SEO Optimization Specifications

### On-Page SEO Checklist
```markdown
□ Title Tag: [Primary Keyword] | [Secondary] | Next Step Therapy
□ Meta Description: Include primary keyword in first 160 characters
□ H1: One per page, includes primary keyword
□ H2s: 5-8 subheadings, 2-3 include keywords
□ H3s: Support H2s with long-tail variations
□ URL: /primary-keyword-slug (lowercase, hyphens)
□ Internal Links: 3-5 to relevant service pages
□ External Links: 1-2 to authoritative sources (optional)
□ Word Count: 2,500+ words minimum
□ Readability: Grade 8-10 reading level
□ FAQ Schema: 5 questions minimum
□ Article Schema: Complete with word count
```

### Schema Requirements
Every page MUST include:
1. **Article Schema**
   - headline
   - description  
   - wordCount (2500+)
   - author (Jesse Cynamon, RP)
   - datePublished
   - dateModified

2. **FAQ Schema**
   - Minimum 5 questions
   - Target "People Also Ask" queries
   - 100-150 word answers
   - Natural keyword inclusion

3. **Person Schema**
   - name: "Jesse Cynamon, RP"
   - identifier: "CRPO #10979"
   - jobTitle: "Registered Psychotherapist"

4. **Optional: Service Schema**
   - For service-specific pages
   - Include serviceType
   - areaServed: "Ontario, Canada"

---

## 🛡️ CRPO Compliance - CRITICAL

### ❌ NEVER USE (Automatic Rejection)
```
❌ "Best therapist"          → Use: "Experienced therapist"
❌ "Top-rated"              → Use: "Registered psychotherapist"
❌ "Guaranteed results"      → Use: "Work towards"
❌ "Cure your anxiety"       → Use: "Manage anxiety"
❌ "Eliminate depression"    → Use: "Address depression"
❌ "Better than others"      → Use: "Dedicated to helping"
❌ Client testimonials       → Use: Process descriptions
❌ Success statistics       → Use: General research stats
❌ "Diagnose"               → Use: "Explore" or "Understand"
❌ "Treat"                  → Use: "Support" or "Address"
❌ Fear-based appeals       → Use: Hope-based messaging
```

### ✅ ALWAYS INCLUDE
```
✅ CRPO Registration #10979 (minimum 3 times per page)
✅ "Registered Psychotherapist" title
✅ Educational information about conditions
✅ Process descriptions (what happens in therapy)
✅ "May help" instead of "will help"
✅ "Many clients find" instead of testimonials
✅ Evidence-based approaches
✅ Professional boundaries language
```

### Compliance Check Function
```javascript
function checkCRPOCompliance(content) {
  const prohibited = [
    'best', 'top', 'guaranteed', 'cure', 'eliminate',
    'testimonial', 'review', 'rated', 'diagnosis',
    'prescribe', 'medical', 'psychiatric', 'doctor'
  ];
  
  const required = [
    'CRPO #10979',
    'Registered Psychotherapist',
    'Jesse Cynamon, RP'
  ];
  
  // Return false if any prohibited terms found
  // Return false if missing required terms
  // Return true if compliant
}
```

---

## 🎨 Brand Guidelines

### Visual Identity
```css
/* MANDATORY Color Palette - DO NOT CHANGE */
--primary-soft-blue: #4A6B7A;
--primary-light: #6B89A0;
--primary-deep: #2C4A5A;
--accent-warm: #8FA68E;
--accent-gold: #B8956A;
--background-primary: #FEFEFE;
--neutral-soft: #F8F9FA;
--neutral-cream: #F5F6F7;

/* Typography - EXACTLY AS SPECIFIED */
--font-display: 'Playfair Display', serif; /* Headers */
--font-body: 'Inter', sans-serif;          /* Body text */

/* Spacing System */
--space-section: 80px;  /* Between sections */
--space-xl: 48px;      /* Major spacing */
--space-lg: 32px;      /* Component spacing */
```

### Design Requirements
1. **Hero Background:** EXACTLY 30% opacity
2. **Trust Pills:** Below hero, 4 items
3. **CTA Hierarchy:**
   - Primary: `/contact` (form)
   - Secondary: `tel:+14163062157` 
   - Tertiary: `sms:+14163062157`
4. **Info Cards:** Grid layout for session details
5. **Mobile:** Floating CTA button

### Image Guidelines (When Added)
- Professional, calming imagery
- Toronto/Ontario landmarks when relevant
- Diverse representation
- Natural lighting preferred
- 30% opacity in hero sections
- Alt text with keywords

---

## 📝 Page Generation Process

### Step 1: Keyword Research
```markdown
For each keyword:
1. Search volume (use 0-volume keywords too)
2. User intent (informational, navigational, transactional)
3. Competition level
4. Related long-tail variations
5. "People Also Ask" questions
```

### Step 2: Content Generation
```markdown
For each section:
1. Write first draft focusing on value
2. Add keyword naturally (don't force)
3. Check CRPO compliance
4. Ensure Ontario/local relevance
5. Add internal links to services
6. Include practical strategies
```

### Step 3: Technical Implementation
```javascript
// For each page:
1. Copy template_expanded_2500words.html
2. Replace all variables:
   - {{PAGE_TITLE}}
   - {{META_DESCRIPTION}}
   - {{H1_TITLE}}
   - {{CONTENT_SECTIONS}}
   - {{FAQ_QUESTIONS}}
3. Update schema markup
4. Generate URL slug
5. Run compliance check
6. Save as: keyword-slug.html
```

### Step 4: Quality Checklist
```markdown
Before publishing each page:
□ 2,500+ words
□ CRPO compliant (no prohibited terms)
□ Schema implemented correctly
□ CTAs point to /contact, phone, or text
□ Trust indicators present (CRPO #10979)
□ Mobile responsive
□ Page loads under 3 seconds
□ No broken links
□ Keyword density 2-3%
□ FAQ schema with 5+ questions
```

---

## 🚀 Mass Production Instructions

### Batch Generation Strategy
1. **Longtail Keywords** (Priority 1)
   - Generate 20 natural language pages
   - Examples: "can't stop worrying about work"
   - Use CSV: `longtail_pages_data.csv`

2. **Location Pages** (Priority 2)
   - City × Service combinations
   - 10 cities × 5 services = 50 pages
   - Use CSV: `location_pages_data.csv`

3. **Problem-Specific** (Priority 3)
   - Address specific conditions
   - 30-40 targeted pages
   - Focus on high-intent searches

### CSV Input Format
```csv
page_title,meta_description,h1_title,primary_keyword,content_sections...
"Can't Sleep Due to Anxiety","When anxiety keeps you awake...","Can't Sleep? Anxiety May Be Why","anxiety insomnia","[content]"
```

### Output Structure
```
/seo/
  ├── cant-sleep-anxiety.html
  ├── sunday-night-anxiety.html
  ├── work-stress-overwhelming.html
  └── [generated-pages].html

/virtual/
  ├── toronto-anxiety-therapy.html
  ├── mississauga-stress-management.html
  └── [location-pages].html
```

---

## 🎯 Success Metrics

### Page Quality Metrics
- **Word Count:** 2,500+ ✓
- **Keyword Density:** 2-3% ✓
- **CRPO Compliance:** 100% ✓
- **Schema Valid:** Pass Google Test ✓
- **Mobile Ready:** 100% responsive ✓

### SEO Performance Targets
- **Month 1:** 50 pages indexed
- **Month 2:** 200+ keywords ranking
- **Month 3:** 500+ organic visits/month
- **Month 6:** 2,000+ organic visits/month

---

## 📋 Quick Reference Commands

### Generate Single Page
```bash
# Use template to create new page
cp template_expanded_2500words.html new-keyword-page.html
# Edit with your keyword data
# Run compliance check
node check_crpo_compliance.js new-keyword-page.html
```

### Generate Batch
```bash
# Generate from CSV
node pseo_generator.js longtail
# Check all generated pages
node bulk_compliance_check.js ./seo/
```

### Validate Schema
```bash
# Test in Google Rich Results Tool
https://search.google.com/test/rich-results
```

---

## ⚠️ Critical Reminders

1. **EVERY page must have CRPO #10979** visible
2. **NO testimonials, reviews, or success rates**
3. **CTAs go to /contact, not /book**
4. **2,500+ words is MINIMUM**
5. **Test every page for compliance**
6. **Keep 30% hero image opacity**
7. **Use exact brand colors**
8. **Include 5+ FAQ questions**

---

## 🔗 Reference Files

- **Template:** `template_expanded_2500words.html`
- **Generator Script:** `pseo_generator.js`
- **Longtail Data:** `longtail_pages_data.csv`
- **Location Data:** `location_pages_data.csv`
- **Compliance Checker:** In `pseo_generator.js`
- **Brand Guidelines:** This document + existing pages
- **CRPO Rules:** https://crpo.ca/advertising/

---

## Example Generation Prompt for Claude

```markdown
Using the template at template_expanded_2500words.html, create a new page for the keyword "panic attacks while driving Ontario".

Requirements:
1. 2,500+ words following our content structure
2. CRPO compliant (no testimonials, guarantees)
3. Include 5 FAQ questions targeting related searches
4. Primary CTA: /contact form
5. Include CRPO #10979 at least 3 times
6. Focus on Ontario-specific content (401 highway, Toronto traffic, etc.)
7. Natural keyword density 2-3%
8. Complete schema markup

Generate the full HTML page ready for deployment.
```

---

*Use this PRD to generate unlimited CRPO-compliant, SEO-optimized pages that match our brand perfectly. Each page should drive organic traffic while maintaining professional standards.*
