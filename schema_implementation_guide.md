# Complete Schema Markup Implementation Guide for NextStepTherapy.ca

## Overview: Schema as Your CRPO-Compliant Trust Builder

Schema markup is structured data that explicitly tells search engines what your content means. For therapy practices restricted by CRPO advertising standards, schema becomes your primary method of building trust without testimonials or superlatives.

## The 7 Essential Schema Types for Therapy Practice

### 1. Organization + HealthBusiness Schema (For Homepage)

This establishes your practice identity and credentials:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HealthBusiness",
  "@id": "https://nextsteptherapy.ca/#organization",
  "name": "Next Step Therapy",
  "alternateName": "NextStep Therapy",
  "description": "Registered Psychotherapy practice providing evidence-based virtual therapy throughout Ontario. Specializing in anxiety, stress management, and life transitions.",
  "url": "https://nextsteptherapy.ca",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "info@nextsteptherapy.ca",
  "logo": {
    "@type": "ImageObject",
    "url": "https://nextsteptherapy.ca/images/logo.png",
    "width": 600,
    "height": 60
  },
  "image": [
    "https://nextsteptherapy.ca/images/office-1.jpg",
    "https://nextsteptherapy.ca/images/therapy-room.jpg"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA",
    "postalCode": "M5V XXX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.6532,
    "longitude": -79.3832
  },
  "openingHours": [
    "Mo-Fr 09:00-20:00",
    "Sa 10:00-16:00"
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "E-Transfer", "Credit Card"],
  "currenciesAccepted": "CAD",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Ontario",
    "containedInPlace": {
      "@type": "Country",
      "name": "Canada"
    }
  },
  "sameAs": [
    "https://www.linkedin.com/in/jessecynamon/",
    "https://twitter.com/nextsteptherapy"
  ],
  "founder": {
    "@type": "Person",
    "@id": "https://nextsteptherapy.ca/#jessecynamon"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional License",
    "recognizedBy": {
      "@type": "Organization",
      "name": "College of Registered Psychotherapists of Ontario"
    },
    "identifier": "10979"
  }
}
</script>
```

### 2. Person Schema (For About Page & Author Attribution)

This builds your personal E-E-A-T:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://nextsteptherapy.ca/#jessecynamon",
  "name": "Jesse Cynamon",
  "honorificPrefix": "RP",
  "honorificSuffix": "M.A.",
  "jobTitle": "Registered Psychotherapist",
  "worksFor": {
    "@type": "HealthBusiness",
    "@id": "https://nextsteptherapy.ca/#organization"
  },
  "description": "Registered Psychotherapist (CRPO #10979) specializing in ACT therapy for anxiety, workplace stress, and life transitions. Providing virtual therapy throughout Ontario.",
  "url": "https://nextsteptherapy.ca/about",
  "image": "https://nextsteptherapy.ca/images/jesse-cynamon.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/jessecynamon/",
    "https://members.crpo.ca/public-register/10979"
  ],
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "[Your University]",
      "sameAs": "[University URL]"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "educationalLevel": "Master's Degree",
      "name": "M.A. Psychology",
      "recognizedBy": {
        "@type": "CollegeOrUniversity",
        "name": "[Your University]"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Registered Psychotherapist",
      "identifier": "10979",
      "recognizedBy": {
        "@type": "Organization",
        "name": "College of Registered Psychotherapists of Ontario",
        "url": "https://crpo.ca"
      },
      "validIn": {
        "@type": "AdministrativeArea",
        "name": "Ontario"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Advanced ACT Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "[Certifying Body]"
      }
    }
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Psychotherapist",
    "occupationLocation": {
      "@type": "AdministrativeArea",
      "name": "Ontario"
    },
    "estimatedSalary": {
      "@type": "MonetaryAmountDistribution",
      "currency": "CAD",
      "duration": "P1Y"
    },
    "experienceRequirements": "10+ years"
  },
  "knowsAbout": [
    "Acceptance and Commitment Therapy (ACT)",
    "Anxiety Treatment",
    "Stress Management",
    "Workplace Mental Health",
    "Virtual Therapy",
    "Evidence-Based Psychotherapy"
  ]
}
</script>
```

### 3. Service Schema (For Each Service Page)

For your service pages (anxiety, stress, etc.):

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Anxiety Therapy",
  "name": "Evidence-Based Anxiety Therapy in Ontario",
  "description": "Virtual anxiety therapy using evidence-based approaches including ACT. Available throughout Ontario via secure video sessions.",
  "provider": {
    "@type": "Person",
    "@id": "https://nextsteptherapy.ca/#jessecynamon"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Ontario"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Therapy Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Individual Therapy Session",
          "description": "50-minute virtual therapy session"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free 15-Minute Consultation",
          "description": "Complimentary consultation to discuss your needs"
        }
      }
    ]
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://nextsteptherapy.ca/book",
    "servicePhone": "+1-XXX-XXX-XXXX",
    "availableLanguage": ["en", "fr"]
  }
}
</script>
```

### 4. FAQPage Schema (For Building Trust Without Reviews)

This is crucial for getting featured snippets:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Registered Psychotherapist in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Registered Psychotherapist (RP) is a mental health professional regulated by the College of Registered Psychotherapists of Ontario (CRPO). RPs must meet strict education, training, and ethical standards. You can verify any RP's registration status using their CRPO number on the public register."
      }
    },
    {
      "@type": "Question",
      "name": "How does virtual therapy work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Virtual therapy sessions are conducted via secure, encrypted video platforms. Sessions are typically 50 minutes long, just like in-person therapy. You'll need a private space, reliable internet connection, and a device with camera and microphone. Research shows virtual therapy can be as effective as in-person sessions for many concerns."
      }
    },
    {
      "@type": "Question",
      "name": "Is therapy covered by OHIP in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Psychotherapy provided by Registered Psychotherapists is not covered by OHIP. However, many extended health insurance plans cover psychotherapy services. We provide official receipts for insurance claims. Some employers also offer Employee Assistance Programs (EAPs) that cover therapy."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if I need therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common signs that therapy might be helpful include: persistent anxiety or worry, difficulty managing stress, feeling stuck or overwhelmed, relationship challenges, work-life balance issues, or simply wanting support through life transitions. A free consultation can help determine if therapy is right for your current needs."
      }
    },
    {
      "@type": "Question",
      "name": "What happens in the first therapy session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The first session typically involves discussing what brings you to therapy, your goals, and relevant background information. We'll explore your current challenges and begin developing a collaborative approach. There's no pressure to share more than you're comfortable with. The session helps us determine if we're a good therapeutic fit."
      }
    }
  ]
}
</script>
```

### 5. WebSite Schema with SearchAction (For Sitelinks)

This helps Google understand your site structure:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Next Step Therapy",
  "url": "https://nextsteptherapy.ca",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nextsteptherapy.ca/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "About",
      "url": "https://nextsteptherapy.ca/about"
    },
    {
      "@type": "WebPage",
      "name": "Services",
      "url": "https://nextsteptherapy.ca/services"
    },
    {
      "@type": "WebPage",
      "name": "Contact",
      "url": "https://nextsteptherapy.ca/contact"
    }
  ]
}
</script>
```

### 6. BreadcrumbList Schema (For Navigation)

For every page except homepage:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://nextsteptherapy.ca"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://nextsteptherapy.ca/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Anxiety Therapy",
      "item": "https://nextsteptherapy.ca/anxiety-therapy"
    }
  ]
}
</script>
```

### 7. Article Schema (For Blog Posts)

For educational content:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Understanding Sunday Night Anxiety: Why It Happens and How to Cope",
  "description": "Learn about Sunday night anxiety, why it affects professionals, and evidence-based strategies for managing work-related stress.",
  "image": "https://nextsteptherapy.ca/images/sunday-anxiety.jpg",
  "author": {
    "@type": "Person",
    "@id": "https://nextsteptherapy.ca/#jessecynamon"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://nextsteptherapy.ca/#organization"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://nextsteptherapy.ca/sunday-night-anxiety"
  },
  "keywords": "sunday night anxiety, work anxiety, weekend stress, anticipatory anxiety",
  "articleSection": "Mental Health",
  "wordCount": 2500,
  "about": {
    "@type": "Thing",
    "name": "Anxiety Disorders"
  },
  "mentions": [
    {
      "@type": "Thing",
      "name": "Acceptance and Commitment Therapy"
    }
  ]
}
</script>
```

## Implementation Instructions for Claude/Cursor

### Step-by-Step Implementation Guide

```markdown
## Task: Implement Schema Markup on NextStepTherapy.ca

### Phase 1: Homepage Schema (Priority 1)
1. Open index.html
2. Add the HealthBusiness + WebSite schema in the <head> section
3. Update all placeholder values:
   - Phone number
   - Email
   - Address details
   - GPS coordinates (use Google Maps to find exact coordinates)
   - Logo URL
   - Social media URLs

### Phase 2: About Page Schema
1. Open about.html
2. Add Person schema for Jesse Cynamon
3. Update:
   - Educational credentials
   - Certifications
   - Years of experience
   - Professional associations

### Phase 3: Service Pages Schema
For each service page (anxiety-therapy.html, stress-and-burnout.html, etc.):
1. Add Service schema
2. Add FAQPage schema with 5 relevant questions
3. Add BreadcrumbList schema
4. Ensure provider links back to Person schema using @id

### Phase 4: Blog/SEO Pages Schema
For each of your 20 SEO pages:
1. Add Article schema
2. Link author to Person schema
3. Add relevant keywords
4. Include word count
5. Add BreadcrumbList

### Implementation Notes:
- Place all schema in <script type="application/ld+json"> tags
- Put schema in the <head> section of each page
- Validate each implementation using Google's Rich Results Test
- Use @id references to link related schemas (don't duplicate data)
- Ensure all URLs are absolute (https://nextsteptherapy.ca/...)

### CRPO Compliance Checklist:
✓ No review or rating properties used
✓ No testimonial content included
✓ Only factual credentials and qualifications
✓ No comparative or superlative language
✓ Focus on process and education, not outcomes

### Testing Process:
1. Implement schema on one page
2. Test using: https://developers.google.com/search/docs/appearance/structured-data/intro
3. Check for errors or warnings
4. Fix any issues
5. Replicate across similar pages
```

## Claude-Specific Prompts for Implementation

### Prompt 1: Generate Schema for Specific Page

```
Generate complete JSON-LD schema markup for a therapy service page about anxiety therapy. Include:
- Service schema for "Anxiety Therapy in Ontario"
- FAQPage schema with 5 questions about anxiety therapy (no testimonials or guarantees)
- BreadcrumbList schema
- Link to provider using @id: "https://nextsteptherapy.ca/#jessecynamon"
- CRPO Registration #10979 should be visible
- Ensure all content is factual and educational, avoiding any superlatives or outcome promises
```

### Prompt 2: Validate and Fix Schema

```
Review this schema markup for CRPO compliance and technical correctness:
[Paste your schema here]

Check for:
1. Any testimonial or review-related properties
2. Superlative or comparative language
3. Outcome guarantees or promises
4. Proper JSON-LD syntax
5. Required properties for each schema type
6. Proper use of @id for linking entities

Fix any issues and explain what was changed.
```

### Prompt 3: Create Dynamic Schema Template

```
Create a JavaScript function that generates dynamic schema markup for therapy location pages. 
Input variables:
- cityName (e.g., "Toronto")
- primaryService (e.g., "anxiety therapy")
- pageURL

The function should:
1. Generate LocalBusiness schema with service area
2. Include CRPO registration #10979
3. Add FAQ schema with location-specific questions
4. Ensure CRPO compliance (no reviews, testimonials, or guarantees)
5. Return valid JSON-LD

Make it reusable for programmatic SEO pages.
```

## Testing and Validation

### Tools for Testing:
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Google Search Console**: Monitor for schema errors after implementation

### Validation Checklist:
- [ ] No errors in Rich Results Test
- [ ] All required properties included
- [ ] @id references working correctly
- [ ] URLs are absolute and correct
- [ ] No duplicate schemas on same page
- [ ] CRPO compliance verified
- [ ] Schema appears in page source

## Expected Results

### What You'll See:
1. **Knowledge Panel**: Your credentials and practice info in sidebar
2. **Rich Snippets**: FAQ answers directly in search results
3. **Sitelinks**: Navigation links under your main result
4. **Breadcrumbs**: Navigation path in search results
5. **Enhanced CTR**: 20-30% improvement from rich results

### Timeline:
- Implementation: 2-3 hours
- Google Recognition: 2-14 days
- Full Rich Results: 2-4 weeks

## Common Mistakes to Avoid

1. **Don't include aggregateRating** - This implies reviews
2. **Don't use "award" or "best" properties** - Violates CRPO
3. **Don't duplicate schemas** - Use @id to reference
4. **Don't forget to update** - Schema needs maintenance
5. **Don't mix schema types incorrectly** - Each type has specific use

## Advanced: Programmatic Schema Generation

For your 125+ pSEO pages, create a schema generator:

```javascript
function generateLocationSchema(city, service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service} in ${city}, Ontario`,
    "provider": {
      "@type": "Person",
      "@id": "https://nextsteptherapy.ca/#jessecynamon"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Ontario"
      }
    },
    "description": `Evidence-based ${service.toLowerCase()} available to ${city} residents via secure virtual sessions. Provided by Jesse Cynamon, RP (CRPO #10979).`
  };
}
```

This allows you to generate schema for all location pages automatically while maintaining CRPO compliance.
