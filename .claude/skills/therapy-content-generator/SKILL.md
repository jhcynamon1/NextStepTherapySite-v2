---
name: therapy-content-generator
description: Generate YMYL-compliant therapy page content with E-E-A-T signals, schema markup, and Ontario-specific elements. Creates 2000+ word pages following pillar/cluster architecture. Includes author byline (Jesse Cynamon, RP CRPO #10979), citations to CRPO/CMHA, MedicalWebPage schema, FAQPage schema, and strategic internal linking. Use when user asks to "create therapy page", "write content for [condition/city]", or when expanding content for competitive keywords.
---

# Therapy Content Generator

## Purpose
Generate expert-level, YMYL-compliant therapy content that meets Google's E-E-A-T standards for healthcare content while maintaining CRPO compliance.

## When to Use This Skill
- User asks to "create a therapy page" or "write content for [condition]"
- User mentions specific city + therapy type (e.g., "anxiety therapy Sudbury")
- Creating new service pages or location pages
- Expanding thin content for competitive keywords
- Building out topic clusters

## Research Foundation

### Why This Matters (2024 Data)
- 70% of new patients use the internet to find a therapist
- 3+ million monthly searches for therapists online
- Healthcare industry conversion rate average: 3%
- Optimized therapy pages: 4%+ conversion
- YMYL content requires "extremely high" E-E-A-T signals

**Sources:**
- [SEO for Therapists 2024 Guide](https://mytherapyflow.com/seo-for-therapists/)
- [Mental Health Marketing Strategies](https://mytherapyflow.com/mental-health-marketing/)
- [Healthcare E-E-A-T Requirements](https://healthcaresuccess.com/blog/healthcare-marketing/google-e-a-t-and-healthcare-content-how-to-deliver-the-quality-google-demands.html)

---

## Quick Start Workflow

### Step 1: Gather Information

**Required from user:**
```
1. Page type: [service/location/student/professional]
2. Target keyword: [primary keyword to rank for]
3. City (if location page): [city name]
4. Condition focus: [anxiety/depression/trauma/etc.]
5. Word count target: [2000 minimum for competitive, 2500+ for high-competition]
```

**Request from user:**
```
Do you have Ahrefs data for this keyword? I need:
- Search volume
- Keyword difficulty
- Related keywords/questions
- Top 5 competitor URLs

Also helpful:
- GSC data for related pages
- Any existing content to expand
```

### Step 2: Determine Content Architecture

**Page Types & Requirements:**

| Type | Word Count | Schema Required | Key Elements |
|------|------------|-----------------|--------------|
| **Service (Provincial)** | 2500+ | MedicalWebPage, FAQPage | Comprehensive condition coverage |
| **Location (City)** | 2000+ | MedicalWebPage, FAQPage, LocalBusiness | City-specific content |
| **Student** | 2000+ | MedicalWebPage, FAQPage | Academic stress focus |
| **Professional** | 2000+ | MedicalWebPage, FAQPage | Workplace/career focus |

### Step 3: Generate Content Structure

**Standard Page Architecture:**

```markdown
# [H1: Primary Keyword + Location] (max 60 chars)

## Introduction (200-300 words)
- Hook addressing pain point
- Empathy statement
- Preview of what page covers
- CRPO credential display

## Understanding [Condition] (400-500 words)
- What is [condition]
- Signs and symptoms
- How it affects daily life
- Ontario-specific statistics (if available)

## [H2: How Therapy Helps with [Condition]] (400-500 words)
- Evidence-based treatment overview
- ACT therapy approach (NextStep's specialization)
- What to expect in sessions
- Timeline for improvement (realistic, not guaranteed)

## [H2: Virtual Therapy for [Condition] in [Location]] (300-400 words)
- Benefits of virtual therapy
- How NextStep's virtual sessions work
- Same-week availability
- Evening/weekend options

## [H2: Our Approach: Acceptance and Commitment Therapy] (300-400 words)
- What is ACT
- Why ACT for [condition]
- Evidence base
- How it differs from other approaches

## [H2: What to Expect in Your First Session] (300-400 words)
- Booking process
- Intake and assessment
- Goal setting
- Confidentiality and privacy

## [H2: Frequently Asked Questions] (600-800 words)
- 10-12 questions with answers
- Common concerns addressed
- Insurance and payment questions
- Logistics (scheduling, cancellation, etc.)

## [H2: Take the First Step Today] (150-200 words)
- Empathetic CTA
- Same-week availability highlight
- Contact options
- Insurance receipt mention

## Author Byline & Last Updated
- Jesse Cynamon, RP (CRPO #10979)
- Last Updated: [Current Month Year]
```

### Step 4: E-E-A-T Signal Integration

**MANDATORY for all therapy content:**

#### Experience
- [ ] Specific therapeutic approach mentioned (ACT)
- [ ] Session format described (virtual, individual)
- [ ] Real-world scenarios addressed

#### Expertise
- [ ] Author byline with credentials: "Jesse Cynamon, RP (CRPO #10979)"
- [ ] Professional registration clearly stated
- [ ] Specialization areas noted

#### Authoritativeness
- [ ] Citations to authoritative sources (CRPO, CMHA, research)
- [ ] Links to related professional content
- [ ] Contact information provided

#### Trustworthiness
- [ ] Privacy policy linked
- [ ] Clear contact information
- [ ] Professional credentials verifiable
- [ ] Last updated date displayed

### Step 5: CRPO Compliance Check

**BEFORE GENERATING ANY CONTENT:**

✅ **Allowed:**
- Factual statements about services
- Description of therapeutic approaches
- Professional credentials (RP, CRPO #10979)
- Appointment availability information
- Insurance receipt offerings
- Evidence-based treatment descriptions

❌ **PROHIBITED:**
- Client testimonials
- Outcome guarantees ("cure your anxiety")
- Superlatives ("best therapist")
- Before/after claims
- Specific success rates (unless from published research)
- Endorsements or reviews

**CRPO Advertising Standard 6.2 Requirements:**
- All statements must be factual and verifiable
- Cannot exaggerate conditions treated
- Cannot suggest CRPO endorsement
- Must use proper credential display (RP prominently)

### Step 6: Schema Markup Generation

**MedicalWebPage Schema (Required):**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "[Page Title]",
  "description": "[Meta description]",
  "url": "https://nextsteptherapy.ca/[page-slug]",
  "author": {
    "@type": "Person",
    "name": "Jesse Cynamon",
    "jobTitle": "Registered Psychotherapist",
    "credential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "Registered Psychotherapist",
      "recognizedBy": {
        "@type": "Organization",
        "name": "College of Registered Psychotherapists of Ontario"
      }
    }
  },
  "dateModified": "[YYYY-MM-DD]",
  "datePublished": "[YYYY-MM-DD]",
  "reviewedBy": {
    "@type": "Person",
    "name": "Jesse Cynamon",
    "credential": "CRPO #10979"
  },
  "specialty": "[Condition focus]",
  "lastReviewed": "[YYYY-MM-DD]"
}
```

**FAQPage Schema (Required):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer 1]"
      }
    }
    // ... 10-12 questions
  ]
}
```

**LocalBusiness Schema (for location pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "NextStep Therapy",
  "description": "Virtual psychotherapy services across Ontario",
  "@id": "https://nextsteptherapy.ca",
  "url": "https://nextsteptherapy.ca",
  "telephone": "[Phone Number]",
  "priceRange": "$$",
  "areaServed": {
    "@type": "State",
    "name": "Ontario",
    "containsPlace": {
      "@type": "City",
      "name": "[City Name]"
    }
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional License",
    "name": "CRPO #10979"
  }
}
```

### Step 7: Internal Linking Strategy

**Topic Cluster Approach:**

For anxiety therapy content:
```
PILLAR: anxiety-therapy-ontario.html
  └── CLUSTER: anxiety-therapy-toronto.html
  └── CLUSTER: anxiety-therapy-burlington.html
  └── CLUSTER: anxiety-therapy-ottawa.html
  └── CLUSTER: students/university-anxiety.html
  └── CLUSTER: professionals/performance-anxiety.html
  └── CLUSTER: blog/managing-anxiety-at-work.html
```

**Linking Rules:**
- Every cluster page links to its pillar page (1-2 times)
- Pillar pages link to relevant clusters
- Use keyword-rich anchor text (not "click here")
- Link to 3-5 related internal pages per piece of content
- Include at least 1 link to a professional resource (CTA/booking)

### Step 8: Content Freshness Signals

**Required on all pages:**
```html
<p class="author-byline">
  <span class="author-name">Jesse Cynamon, RP</span>
  <span class="author-credential">(CRPO #10979)</span>
</p>
<p class="last-updated">
  Last Updated: <time datetime="2024-12-09">December 2024</time>
</p>
```

**Freshness best practices:**
- Update date when content is revised
- Quarterly content audits recommended
- Year in title/meta for trending topics
- Reference current statistics when available

---

## Content Templates

### Template 1: City Location Page

```markdown
# [Condition] Therapy [City] | Same-Week Sessions | NextStep

Are you struggling with [condition] and looking for professional support
in [City], Ontario? NextStep Therapy offers virtual psychotherapy
with same-week appointments, making it easier than ever to get the
help you need.

As a CRPO registered psychotherapist (RP #10979), I specialize in
helping [City] residents overcome [condition] using evidence-based
approaches like Acceptance and Commitment Therapy (ACT).

## Understanding [Condition] in [City]

[400-500 words on condition, local context if relevant]

## Virtual Therapy for [City] Residents

[300-400 words on virtual therapy benefits, accessibility]

...

## FAQs About [Condition] Therapy in [City]

### How much does therapy cost in [City]?
[Answer - mention insurance receipts provided]

### Can I do therapy online in Ontario?
[Answer - yes, virtual therapy across Ontario]

...

---

**About the Author**
Jesse Cynamon is a Registered Psychotherapist (CRPO #10979)
specializing in Acceptance and Commitment Therapy.

Last Updated: December 2024
```

### Template 2: Service Page (Provincial)

```markdown
# [Condition] Therapy Ontario | Virtual Sessions | NextStep

Living with [condition] doesn't have to control your life.
NextStep Therapy provides virtual psychotherapy for Ontarians
struggling with [condition], with same-week appointments and
flexible evening and weekend scheduling.

## What Is [Condition]?

[Comprehensive overview - 500 words]
- Definition
- Common symptoms
- How it affects daily life
- Ontario statistics (if available)

## Evidence-Based Treatment for [Condition]

[400 words on treatment approaches]
- Why therapy helps
- ACT approach
- What research shows

...
```

---

## Quality Checklist

### Before Submitting Content

**CRPO Compliance:**
- [ ] No testimonials or reviews
- [ ] No outcome guarantees
- [ ] No superlatives (best, top, leading)
- [ ] Credentials properly displayed (RP #10979)
- [ ] All claims factual and verifiable

**E-E-A-T Signals:**
- [ ] Author byline with credentials
- [ ] Last updated date
- [ ] Citations to authoritative sources (CRPO, CMHA)
- [ ] Contact information accessible
- [ ] Privacy policy linked

**SEO Requirements:**
- [ ] Primary keyword in H1, title, meta description
- [ ] H2/H3 hierarchy logical
- [ ] 2000+ word count (2500+ for competitive)
- [ ] 10-12 FAQs included
- [ ] Internal links to 3-5 related pages
- [ ] MedicalWebPage schema
- [ ] FAQPage schema
- [ ] LocalBusiness schema (if location page)

**Conversion Elements:**
- [ ] Clear CTA in introduction
- [ ] CTA box after major sections
- [ ] Same-week availability mentioned
- [ ] Insurance receipts mentioned
- [ ] Booking/contact options clear

---

## Data Requests

**Always ask user for:**

1. **Ahrefs data:**
   - Search volume for target keyword
   - Keyword difficulty score
   - Related keywords and questions
   - Top 5 competitor URLs for analysis

2. **GSC data:**
   - Current rankings for related pages
   - Impressions and CTR
   - Pages that might cannibalize

3. **Existing content:**
   - Any thin pages to expand
   - Related blog posts
   - FAQ content from other sources

---

## Error Handling

**If target keyword is too competitive:**
"The keyword '[keyword]' has high difficulty ([X]). I recommend:
1. Create a long-tail variant page first
2. Build topic cluster around it
3. Target the main keyword after establishing authority"

**If content might cannibalize existing page:**
"Warning: You have an existing page targeting similar keywords:
[existing URL]. Consider:
1. Consolidating into one stronger page
2. Targeting different search intent
3. Using this new page as a cluster to the existing pillar"

**If city has no specific content angle:**
"For [City] location pages, differentiate with:
1. Local statistics or context
2. City-specific FAQ questions
3. Mention of serving surrounding areas
4. Local landmarks in accessibility context"

---

## Sources

**Therapy SEO Best Practices:**
- [SEO for Therapists 2024](https://mytherapyflow.com/seo-for-therapists/)
- [Private Practice SEO](https://privatepracticeseo.com/)
- [Therapist SEO Guide](https://www.sixthcitymarketing.com/therapist-seo/)

**E-E-A-T & YMYL:**
- [Healthcare E-E-A-T Guide](https://healthcaresuccess.com/blog/healthcare-marketing/google-e-a-t-and-healthcare-content-how-to-deliver-the-quality-google-demands.html)
- [YMYL SEO Guide](https://ignitevisibility.com/ymyl-pages-what-are-ymyl-google-seo-pages/)

**Schema Markup:**
- [Google MedicalWebPage](https://schema.org/MedicalWebPage)
- [Google FAQPage](https://developers.google.com/search/docs/appearance/structured-data/faqpage)

**CRPO Compliance:**
- [CRPO Advertising Standards](https://crpo.ca/practice-standards/business-practices/advertising/)
- [CRPO Testimonials Policy](https://crpo.ca/resource-articles/advertising-testimonials-endorsements-and-community-voting-awards/)

**Content Freshness:**
- [Content Freshness 2024 Guide](https://www.oakemarketing.com/blog/content-freshness-definitive-guide-seo-2024)
- [Healthcare SEO Trends](https://www.cardinaldigitalmarketing.com/healthcare-resources/blog/seo-trends-2024/)
