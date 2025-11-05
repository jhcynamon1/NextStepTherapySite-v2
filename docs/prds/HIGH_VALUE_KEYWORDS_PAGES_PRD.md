# Product Requirements Document (PRD)
## High-Value Keyword Landing Pages
### Digital Landlord Revenue Optimization - Next Step Therapy

---

## 1. EXECUTIVE SUMMARY

### Objective
Create 5 high-priority landing pages targeting the highest-value keyword opportunities identified in the gap analysis. These pages will capture 400+ monthly searches worth $2,100-$3,500 in potential monthly revenue.

### Critical Requirements
- **MUST** use existing page templates for consistency
- **MUST** be CRPO compliant (Registration #10979)
- **MUST** be SEO-optimized (2000+ words)
- **MUST** include consistent CTAs across all pages
- **MUST** follow existing design system (professional-service-styles.css)

### Priority Pages (Immediate Creation)
1. **Toronto Depression Therapy** - 210 searches/month, $8.21 CPC
2. **Online Depression Therapy** - 50 searches/month, $9.80 CPC  
3. **Depression Therapy Goals** - 40 searches/month, Educational
4. **Psychotherapy & Counselling for Depression** - 30 searches/month
5. **Depression Family Therapy** - 10 searches/month

---

## 2. PAGE SPECIFICATIONS

### 2.1 TEMPLATE STRUCTURE (Use Existing)

**Reference Template**: `/public/services/life-transitions.html` (Gold Standard)

Each page MUST include:
```html
<!-- Standard Structure -->
1. Header with navigation
2. Hero section with H1 and immediate CTA
3. Understanding section (problem awareness)
4. ACT Approach section (solution)
5. What We Address section (conditions/symptoms)
6. Therapy Process section (what to expect)
7. FAQ section (5-7 questions)
8. Final CTA section
9. Footer with contact info
```

### 2.2 CRPO COMPLIANCE REQUIREMENTS

**MANDATORY on Every Page:**
```html
<!-- In Hero Section -->
<p class="credentials">Jesse Cynamon, RP (CRPO #10979)</p>

<!-- In Footer -->
<p>Jesse Cynamon is a Registered Psychotherapist (CRPO #10979) 
authorized to provide psychotherapy services in Ontario.</p>

<!-- In Schema Markup -->
"hasCredential": {
  "@type": "EducationalOccupationalCredential",
  "identifier": "CRPO #10979",
  "recognizedBy": "College of Registered Psychotherapists of Ontario"
}
```

**Language Requirements:**
- Use "psychotherapy" not "treatment"
- Use "support" not "cure"
- Include evidence-based approach mentions
- No guarantees of outcomes

### 2.3 SEO OPTIMIZATION REQUIREMENTS

**Each Page MUST Have:**
- **Word Count**: 2000-2500 words minimum
- **Keyword Density**: Primary keyword 1-2%, LSI keywords throughout
- **Meta Title**: 55-60 characters with primary keyword
- **Meta Description**: 150-155 characters with CTA
- **H1**: One unique H1 with primary keyword
- **H2s**: 5-7 section headers with variations
- **H3s**: 2-3 subsections under main sections
- **Internal Links**: 5-8 links to related services
- **Schema Markup**: MedicalTherapy + LocalBusiness (for location pages)

---

## 3. INDIVIDUAL PAGE REQUIREMENTS

### PAGE 1: Toronto Depression Therapy
**URL**: `/locations/toronto/depression-therapy`
**Target Keyword**: "therapist toronto depression"
**Monthly Searches**: 210
**Priority**: P0 - HIGHEST

**Meta Tags:**
```html
<title>Depression Therapist Toronto | Evidence-Based ACT Therapy | Next Step</title>
<meta name="description" content="Looking for a depression therapist in Toronto? Jesse Cynamon, RP (CRPO #10979) offers evidence-based ACT therapy. Virtual & in-person. Book your free consultation today.">
```

**H1**: "Toronto Depression Therapist - Evidence-Based Support That Works"

**Unique Content Focus:**
- Toronto-specific mental health statistics
- Local resources and crisis lines
- Toronto workplace stress factors
- Accessibility from all Toronto neighborhoods
- Virtual options for GTA residents

**Schema Requirements:**
```json
{
  "@type": "MedicalBusiness",
  "areaServed": {
    "@type": "City",
    "name": "Toronto",
    "containedInPlace": {
      "@type": "Province",
      "name": "Ontario"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.653226,
    "longitude": -79.3831843
  }
}
```

### PAGE 2: Online Depression Therapy
**URL**: `/online-therapy-depression`
**Target Keyword**: "online therapy for depression"
**Monthly Searches**: 50
**Priority**: P0 - HIGH

**Meta Tags:**
```html
<title>Online Therapy for Depression Ontario | Virtual Sessions Today</title>
<meta name="description" content="Start online therapy for depression today. Ontario-wide virtual sessions with Jesse Cynamon, RP (CRPO #10979). Evidence-based ACT approach. Book your free consultation.">
```

**H1**: "Online Therapy for Depression - Start Today from Anywhere in Ontario"

**Unique Content Focus:**
- Benefits of virtual therapy for depression
- Technology requirements (simple setup)
- Privacy and confidentiality online
- Effectiveness research for online therapy
- Same-day availability emphasis

### PAGE 3: Depression Therapy Goals
**URL**: `/therapy-goals-depression`
**Target Keyword**: "goals for therapy depression"
**Monthly Searches**: 40
**Priority**: P1 - MEDIUM-HIGH

**Meta Tags:**
```html
<title>Depression Therapy Goals | What to Expect in Treatment | Next Step</title>
<meta name="description" content="Learn about realistic goals for depression therapy. Understand the therapy process, timeline, and what success looks like with ACT approach. Free consultation available.">
```

**H1**: "Goals for Depression Therapy - Your Roadmap to Feeling Better"

**Unique Content Focus:**
- SMART goals for depression therapy
- Week-by-week progression expectations
- Measuring progress in therapy
- Common milestones and breakthroughs
- Downloadable goal-setting worksheet (lead magnet)

### PAGE 4: Psychotherapy & Counselling for Depression
**URL**: `/psychotherapy-counselling-depression`
**Target Keyword**: "psychotherapy and counselling for depression"
**Monthly Searches**: 30
**Priority**: P1 - MEDIUM

**Meta Tags:**
```html
<title>Psychotherapy & Counselling for Depression | Ontario | Next Step</title>
<meta name="description" content="Evidence-based psychotherapy and counselling for depression in Ontario. ACT approach with Jesse Cynamon, RP (CRPO #10979). Virtual sessions available. Book today.">
```

**H1**: "Psychotherapy and Counselling for Depression - Evidence-Based Support"

### PAGE 5: Depression Family Therapy
**URL**: `/family-therapy-depression`
**Target Keyword**: "depression family therapy"
**Monthly Searches**: 10
**Priority**: P2 - LOWER

**Meta Tags:**
```html
<title>Family Therapy for Depression | Supporting Loved Ones | Next Step</title>
<meta name="description" content="Family therapy for depression support. Help your loved one while caring for yourself. Jesse Cynamon, RP (CRPO #10979). Ontario-wide virtual sessions available.">
```

**H1**: "Family Therapy for Depression - Supporting Your Loved One Together"

---

## 4. CONSISTENT CTA STRATEGY

### Primary CTA (All Pages)
```html
<div class="cta-section">
  <h2>Ready to Take the Next Step?</h2>
  <p>You don't have to face depression alone. Book your free 15-minute consultation today.</p>
  <a href="https://nextsteptherapy.janeapp.com/" class="cta-button">
    Book Free Consultation
  </a>
  <p class="urgency">Same-week appointments available</p>
</div>
```

### Secondary CTAs (Rotate Throughout Page)
- "Start Your Journey Today"
- "Get Support Now"
- "Book Your Free Consultation"
- "Take the First Step"

### Contact Information (Consistent)
```html
<div class="contact-info">
  <p>Questions? Call <a href="tel:+14163062157">(416) 306-2157</a></p>
  <p>Email: <a href="mailto:jesse@nextsteptherapy.ca">jesse@nextsteptherapy.ca</a></p>
</div>
```

---

## 5. CONTENT GUIDELINES

### Tone & Voice
- Professional yet approachable
- Empathetic and understanding
- Evidence-based but not academic
- Hope-inspiring without false promises
- Ontario-Canadian spelling and terminology

### Required Sections for Each Page

**1. Opening Hook (100-150 words)**
- Acknowledge the struggle
- Validate their search
- Promise of support

**2. Understanding Depression (400-500 words)**
- Symptoms and experiences
- Local/demographic specific challenges
- Normalize seeking help

**3. The ACT Approach (400-500 words)**
- How ACT helps with depression
- Evidence and research
- What makes it different

**4. What We Address (300-400 words)**
- Specific depression symptoms
- Related conditions
- Life situations

**5. The Therapy Process (400-500 words)**
- First session expectations
- Typical progression
- Timeline (no guarantees)

**6. Why Choose Next Step (200-300 words)**
- Jesse's credentials (CRPO #10979)
- Same-week availability
- Virtual convenience
- Evidence-based approach

**7. FAQs (300-400 words)**
- 5-7 common questions
- Include keyword variations
- Address objections

---

## 6. TECHNICAL REQUIREMENTS

### Performance
- Page load < 3 seconds
- Mobile-first responsive design
- Optimized images (WebP format)
- Lazy loading for below-fold content

### Tracking
```javascript
// GA4 Event Tracking
gtag('event', 'page_view', {
  'page_type': 'landing_page',
  'keyword_target': '[PRIMARY_KEYWORD]',
  'page_category': 'depression_therapy'
});

// Conversion Tracking on CTA clicks
gtag('event', 'generate_lead', {
  'value': 175,
  'currency': 'CAD',
  'lead_source': '[PAGE_URL]'
});
```

### CSS Classes (Use Existing)
```css
/* From professional-service-styles.css */
.hero-section
.service-title
.understanding-section
.approach-section
.process-section
.faq-section
.cta-section
.cta-button
.credentials
```

---

## 7. QUALITY CHECKLIST

Before deploying each page, verify:

- [ ] CRPO #10979 mentioned at least 3 times
- [ ] 2000+ words of unique content
- [ ] Primary keyword in title, H1, first paragraph
- [ ] 5-8 internal links to related pages
- [ ] Schema markup implemented
- [ ] Mobile responsive tested
- [ ] Page speed < 3 seconds
- [ ] GA4 tracking configured
- [ ] All CTAs link to Jane App booking
- [ ] Contact info: (416) 306-2157
- [ ] No medical claims or guarantees
- [ ] Canadian spelling throughout
- [ ] Meta tags within character limits
- [ ] Images optimized and alt-tagged

---

## 8. SUCCESS METRICS

### Month 1 Targets
- Ranking in top 10 for primary keywords
- 50+ organic visits per page
- 3-5% conversion rate
- 2-3 bookings per page

### Month 3 Targets
- Top 3 ranking for "therapist toronto depression"
- 200+ organic visits to Toronto page
- 5-7% conversion rate
- 10-15 total bookings from new pages

### Month 6 Targets
- #1 ranking for 2-3 target keywords
- 500+ total organic visits
- $2,100+ monthly revenue attribution
- 20+ monthly bookings

---

## 9. IMPLEMENTATION TIMELINE

### Week 1 (IMMEDIATE)
1. Create Toronto Depression Therapy page
2. Create Online Depression Therapy page
3. Deploy and test both pages
4. Submit to Google Search Console

### Week 2
1. Create Depression Therapy Goals page
2. Create Psychotherapy & Counselling page
3. Internal linking optimization
4. Monitor initial rankings

### Week 3
1. Create Family Therapy Depression page
2. Content refinements based on data
3. A/B test CTAs
4. Build backlinks

### Week 4
1. Performance optimization
2. Ranking check and adjustments
3. Conversion rate optimization
4. Plan next batch of pages

---

## 10. NOTES FOR IMPLEMENTATION

**Use These Existing Files as Reference:**
- Template: `/public/services/life-transitions.html`
- Styles: `/public/services/professional-service-styles.css`
- Schema: Check `/public/index.html` for examples

**Critical Reminders:**
1. NEVER promise cure or guaranteed outcomes
2. ALWAYS include CRPO #10979
3. ALWAYS use evidence-based language
4. ALWAYS link to Jane App for bookings
5. ALWAYS include phone: (416) 306-2157

**File Naming Convention:**
- Location pages: `/locations/[city]/[service]`
- Service pages: `/[service-keyword]`
- No .html extensions (clean URLs enabled)

---

## APPROVAL & SIGN-OFF

This PRD creates the foundation for capturing $2,100-$3,500 in monthly recurring revenue through strategic keyword targeting.

**Next Steps:**
1. Review and approve PRD
2. Begin implementation with Toronto Depression page
3. Deploy within 48 hours to capture opportunity

**Revenue at Risk**: Every day without these pages = ~$70-115 in lost potential revenue

---

*Document Version: 1.0*
*Created: September 2024*
*Priority: URGENT - Revenue Opportunity*
