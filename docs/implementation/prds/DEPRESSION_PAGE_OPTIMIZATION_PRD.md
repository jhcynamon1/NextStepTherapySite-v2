# Product Requirements Document (PRD)
## Depression Service Page Optimization
### Keyword & Conversion Optimization - Next Step Therapy

---

## 1. EXECUTIVE SUMMARY

### Objective
Optimize the existing `/services/depression-mood-support` page to capture high-value keyword opportunities while maintaining the exact service page template and structure currently in use.

### Constraints
- **MUST NOT** change the page structure or template
- **MUST** maintain existing section order and design
- **MUST** keep all current CRPO compliance elements
- **MUST** preserve professional-service-styles.css implementation

### Target Keywords to Add
1. **"online therapy for depression"** - 50 searches/month, $9.80 CPC
2. **"virtual therapy for depression"** - 10 searches/month, LOW competition
3. **"psychotherapy and counselling for depression"** - 30 searches/month
4. **"therapist for depression and anxiety"** - 90 searches/month (partial)
5. **"depression therapy ontario"** - Already targeted, needs reinforcement

### Expected Impact
- **Traffic Increase**: 30-50% within 60 days
- **Revenue Potential**: $200-400/month additional
- **Conversion Rate**: 2-3% improvement with enhanced CTAs

---

## 2. OPTIMIZATION REQUIREMENTS

### 2.1 META TAGS OPTIMIZATION

**Current Title (56 chars):**
```html
<title>Depression Therapy Ontario | Evidence-Based Mood Support | CRPO #10979</title>
```

**Optimized Title (58 chars):**
```html
<title>Online Depression Therapy Ontario | Virtual Sessions | CRPO #10979</title>
```

**Current Description (157 chars):**
```html
<meta name="description" content="Professional depression therapy in Ontario with Jesse Cynamon, RP. Evidence-based ACT approach for depression, low mood, and emotional challenges. Book a free consultation.">
```

**Optimized Description (155 chars):**
```html
<meta name="description" content="Online therapy for depression in Ontario. Virtual psychotherapy & counselling with Jesse Cynamon, RP (CRPO #10979). Same-day response. Book free consultation.">
```

### 2.2 H1 OPTIMIZATION

**Current H1:**
```html
<h1>Depression & Mood Support Therapy with Jesse Cynamon, RP</h1>
```

**Optimized H1:**
```html
<h1>Online Depression Therapy & Counselling with Jesse Cynamon, RP</h1>
```

### 2.3 HERO SUBTITLE ENHANCEMENT

**Add keywords naturally to existing subtitle:**
```html
<p class="hero-subtitle">
    Professional online depression therapy that goes beyond symptom management. As a Registered Psychotherapist 
    (CRPO #10979) specializing in mood disorders, I provide virtual therapy for depression and anxiety across Ontario. 
    Using evidence-based Acceptance and Commitment Therapy, I help you build lasting strategies to overcome depression 
    and create a meaningful life – all from the comfort of your home with same-day response available.
</p>
```

---

## 3. CONTENT ADDITIONS (Within Existing Sections)

### 3.1 Understanding Depression Section

**Add paragraph about online therapy effectiveness:**

After the existing third paragraph, add:
```html
<p>
    Research shows that online therapy for depression is just as effective as in-person sessions, 
    with the added benefits of accessibility, convenience, and comfort. Virtual psychotherapy and 
    counselling for depression removes barriers like travel time, scheduling conflicts, and geographic 
    limitations – making it easier to get the help you need when you need it. Whether you're in Toronto, 
    Ottawa, or anywhere else in Ontario, professional depression support is just a click away.
</p>
```

### 3.2 ACT Approach Section

**Add virtual therapy benefits subsection:**

After the existing content, add:
```html
<div class="highlight-box mt-xl">
    <h3>Why Virtual ACT Therapy Works for Depression</h3>
    <p>
        Online therapy for depression using ACT has unique advantages. You can practice mindfulness 
        exercises in your own space, implement behavioral activation strategies in your real environment, 
        and access therapy from wherever you feel most comfortable. Virtual sessions eliminate commute 
        stress and allow for more flexible scheduling – crucial when depression makes leaving home difficult.
    </p>
</div>
```

### 3.3 Types of Depression Section

**Update introduction to include virtual/online keywords:**

```html
<p class="lead text-center mb-xl">
    I provide specialized online therapy and virtual counselling for various types of depression. 
    Whether you're dealing with seasonal changes, life transitions, or chronic mood challenges, 
    evidence-based psychotherapy for depression can help – all through secure, confidential video sessions.
</p>
```

### 3.4 What to Expect Section

**Add "Virtual Session Setup" box:**

After the timeline, add:
```html
<div class="info-box">
    <h3>Virtual Therapy Setup Made Simple</h3>
    <ul>
        <li>Secure, PHIPA-compliant video platform</li>
        <li>Works on any device with internet</li>
        <li>No downloads or complicated setup required</li>
        <li>Same-day response for urgent needs</li>
        <li>Evening and weekend availability</li>
    </ul>
</div>
```

---

## 4. CTA OPTIMIZATIONS

### 4.1 Primary CTA Enhancement

**Current CTA:**
```html
<a href="#contact" class="btn btn-primary btn-large">Book Your Free 15-Minute Consultation</a>
```

**Optimized CTA:**
```html
<a href="#contact" class="btn btn-primary btn-large">Start Online Therapy Today - Free Consultation</a>
```

### 4.2 Secondary CTA Addition

**Add urgency messaging to CTA section:**
```html
<p class="urgency-text">Same-day response available • Virtual sessions across Ontario</p>
```

### 4.3 Final CTA Section Update

**Update the CTA section heading:**
```html
<h2 class="cta-title">Ready to Start Online Depression Therapy?</h2>
<p class="cta-description">
    You don't have to face depression alone. Virtual therapy makes professional support 
    accessible from anywhere in Ontario. Book your free consultation today and take the 
    first step toward feeling better.
</p>
```

---

## 5. SCHEMA MARKUP ADDITIONS

**Add to existing page (in <head> section):**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Online Depression Therapy",
  "alternateName": ["Virtual Depression Therapy", "Depression Counselling Online"],
  "description": "Evidence-based online therapy for depression using ACT approach. Virtual psychotherapy and counselling services available across Ontario.",
  "provider": {
    "@type": "Person",
    "name": "Jesse Cynamon, RP",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "identifier": "CRPO #10979"
    }
  },
  "availableService": {
    "@type": "MedicalService",
    "name": "Virtual Depression Therapy Sessions",
    "serviceType": ["Psychotherapy", "Counselling", "Online Therapy"],
    "areaServed": {
      "@type": "State",
      "name": "Ontario"
    }
  }
}
</script>
```

---

## 6. INTERNAL LINKING STRATEGY

### Add These Internal Links Within Existing Content:

1. In "Understanding Depression" section:
   - Link "anxiety" to `/services/anxiety-therapy`
   - Link "workplace stress" to `/services/workplace-stress-burnout`

2. In "Types of Depression" section:
   - Link "life transitions" to `/services/life-transitions`
   - Link "relationship issues" to `/services/relationship-communication`

3. In "What to Expect" section:
   - Link "free consultation" to `/contact`
   - Link "evidence-based approach" to `/index.html#approach`

---

## 7. KEYWORD DENSITY TARGETS

### Primary Keywords (1-2% density):
- "online therapy for depression" - 5-7 mentions
- "virtual therapy" - 4-6 mentions
- "depression therapy Ontario" - 3-4 mentions

### Secondary Keywords (0.5-1% density):
- "psychotherapy and counselling" - 3-4 mentions
- "depression and anxiety" - 2-3 mentions
- "same-day response" - 2-3 mentions
- "CRPO #10979" - Maintain existing 3+ mentions

### LSI Keywords to Sprinkle:
- "video therapy sessions"
- "remote mental health support"
- "teletherapy"
- "virtual counselling"
- "online psychotherapy"

---

## 8. IMPLEMENTATION CHECKLIST

### Required Changes:
- [ ] Update meta title and description
- [ ] Optimize H1 tag
- [ ] Enhance hero subtitle with keywords
- [ ] Add online therapy effectiveness paragraph
- [ ] Add virtual ACT benefits box
- [ ] Update depression types introduction
- [ ] Add virtual session setup info box
- [ ] Update all CTAs with online/virtual language
- [ ] Add schema markup
- [ ] Implement internal linking
- [ ] Add same-day response messaging (3 locations minimum)

### DO NOT Change:
- [ ] Page URL (keep as /services/depression-mood-support)
- [ ] Section structure or order
- [ ] Design classes or CSS
- [ ] Navigation or header/footer
- [ ] Existing CRPO compliance elements
- [ ] Core ACT therapy messaging

---

## 9. TESTING & VALIDATION

### Pre-Launch Checks:
1. Keyword density analysis (use SEO tool)
2. Mobile responsiveness maintained
3. Page speed unchanged (< 3 seconds)
4. All internal links working
5. Schema markup validates
6. CRPO #10979 appears 3+ times
7. CTAs link to correct booking page

### Post-Launch Monitoring:
- Track rankings for target keywords weekly
- Monitor organic traffic increase
- Measure conversion rate changes
- A/B test CTA variations
- Track same-day response messaging impact

---

## 10. SUCCESS METRICS

### 30-Day Targets:
- Rank in top 20 for "online therapy for depression"
- 20% increase in organic traffic to page
- 2-3 consultation bookings from optimized keywords

### 60-Day Targets:
- Rank in top 10 for primary keywords
- 30-50% traffic increase
- 5-8 monthly bookings attributed to page

### 90-Day Targets:
- Top 5 ranking for "online therapy for depression Ontario"
- $200-400 monthly revenue attribution
- 10+ monthly consultations booked

---

## IMPLEMENTATION NOTES

**Time Required**: 1-2 hours
**Risk Level**: Low (content additions only)
**Dependencies**: None
**Rollback Plan**: Keep backup of current page

**Remember**: This is optimization, not redesign. Every change should enhance, not replace.

---

*PRD Version: 1.0*
*Created: September 2024*
*Page: /services/depression-mood-support*
