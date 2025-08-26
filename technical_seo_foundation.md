# Technical SEO Foundation Implementation
## NextStepTherapy.ca Core Infrastructure for Programmatic Scaling

### Overview

This document outlines the technical SEO infrastructure needed to support the multi-niche programmatic SEO strategy, optimized for Core Web Vitals performance and search engine visibility.

## Schema Markup Implementation

### 1. LocalBusiness + MedicalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "name": "Next Step Therapy",
  "description": "Evidence-based therapy services for individuals seeking anxiety treatment and personal growth in Ontario",
  "url": "https://nextsteptherapy.ca",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "info@nextsteptherapy.ca",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "Ontario", 
    "addressCountry": "CA",
    "postalCode": "XXX XXX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.6532,
    "longitude": -79.3832
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Ontario"
    }
  ],
  "medicalSpecialty": [
    "Anxiety Therapy",
    "Mental Health Counselling", 
    "Psychotherapy",
    "Addiction Counselling",
    "ADHD Therapy",
    "Men's Mental Health",
    "Trauma Therapy"
  ],
  "priceRange": "$175",
  "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
  "currenciesAccepted": "CAD",
  "openingHours": "Mo,Tu,We,Th,Fr 09:00-21:00",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Therapy Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Individual Therapy Sessions",
          "description": "50-minute virtual therapy sessions"
        },
        "price": "175",
        "priceCurrency": "CAD"
      }
    ]
  },
  "makesOffer": {
    "@type": "Offer",
    "name": "Free Consultation",
    "description": "15-minute consultation to determine fit",
    "price": "0",
    "priceCurrency": "CAD"
  }
}
```

### 2. MedicalTherapy Schema for Specialty Pages
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "[Specialty] Therapy",
  "alternateName": "[Alternative names]",
  "description": "Evidence-based [specialty] therapy helping individuals [specific benefits]",
  "therapyType": "[CBT/ACT/etc]",
  "indication": {
    "@type": "MedicalCondition",
    "name": "[Condition treated]",
    "code": {
      "@type": "MedicalCode",
      "code": "XXX.XX",
      "codingSystem": "ICD-10"
    }
  },
  "contraindication": {
    "@type": "MedicalContraindication",
    "description": "No significant contraindications for talk therapy"
  },
  "provider": {
    "@type": "Person",
    "name": "Jesse Cynamon",
    "jobTitle": "Registered Psychotherapist",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "College of Registered Psychotherapists of Ontario"
      },
      "identifier": "RP #10979"
    }
  }
}
```

### 3. Person Schema for Therapist
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jesse Cynamon",
  "jobTitle": "Registered Psychotherapist",
  "description": "Registered Psychotherapist specializing in anxiety treatment and personal growth therapy",
  "url": "https://nextsteptherapy.ca/about",
  "image": "https://nextsteptherapy.ca/images/jesse-therapist.jpg",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "jesse@nextsteptherapy.ca",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Master's in Psychology",
      "credentialCategory": "Degree",
      "educationalLevel": "Graduate"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "name": "Registered Psychotherapist",
      "identifier": "RP #10979",
      "credentialCategory": "Professional License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "College of Registered Psychotherapists of Ontario",
        "url": "https://www.crpo.ca"
      }
    }
  ],
  "knowsAbout": [
    "Anxiety Therapy",
    "Acceptance and Commitment Therapy",
    "Cognitive Behavioral Therapy", 
    "Men's Mental Health",
    "ADHD Therapy",
    "Addiction Counselling"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "College of Registered Psychotherapists of Ontario"
  }
}
```

### 4. FAQ Schema for Each Landing Page
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How effective is [specialty] therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Research shows that [specific therapy approach] is highly effective for [condition], with [percentage]% of clients experiencing significant improvement within [timeframe]."
      }
    },
    {
      "@type": "Question", 
      "name": "How long does [specialty] therapy take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treatment length varies by individual needs, but most clients see meaningful progress within [timeframe]. We work collaboratively to set realistic goals and timelines."
      }
    },
    {
      "@type": "Question",
      "name": "Do you accept insurance for [specialty] therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide receipts for extended health insurance benefits. Sessions are $175 each, and many clients find their insurance covers a significant portion."
      }
    }
  ]
}
```

## Core Web Vitals Optimization

### 1. Largest Contentful Paint (LCP) < 2.5 seconds

#### Image Optimization Strategy
```html
<!-- Hero images with optimized loading -->
<img 
  src="/images/therapy-hero-800w.webp"
  srcset="/images/therapy-hero-400w.webp 400w,
          /images/therapy-hero-800w.webp 800w,
          /images/therapy-hero-1200w.webp 1200w"
  sizes="(max-width: 768px) 400px,
         (max-width: 1024px) 800px,
         1200px"
  alt="Evidence-based therapy services"
  loading="eager"
  fetchpriority="high"
  width="1200"
  height="600"
/>

<!-- Below-fold images with lazy loading -->
<img 
  src="/images/therapist-placeholder.webp"
  data-src="/images/therapist-bio.webp"
  alt="Jesse Cynamon, Registered Psychotherapist"
  loading="lazy"
  width="400"
  height="400"
/>
```

#### Font Loading Optimization
```html
<head>
  <!-- Preload critical fonts -->
  <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Font display optimization -->
  <style>
    @font-face {
      font-family: 'Inter';
      src: url('/fonts/inter-var.woff2') format('woff2-variations');
      font-display: swap;
      font-weight: 100 900;
    }
  </style>
</head>
```

#### Critical CSS Inline
```html
<head>
  <!-- Critical CSS for above-fold content -->
  <style>
    /* Hero section styles */
    .hero-section {
      min-height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .hero-title {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 700;
      color: white;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
    
    /* Critical navigation styles */
    .main-nav {
      position: sticky;
      top: 0;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 1000;
    }
  </style>
  
  <!-- Load non-critical CSS asynchronously -->
  <link rel="preload" href="/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/css/main.css"></noscript>
</head>
```

### 2. First Input Delay (FID) < 100ms

#### JavaScript Optimization
```html
<!-- Defer non-critical JavaScript -->
<script defer src="/js/analytics.js"></script>
<script defer src="/js/chat-widget.js"></script>

<!-- Critical JavaScript with minimal payload -->
<script>
  // Inline critical JavaScript only
  document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    
    if (menuToggle && menu) {
      menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
      });
    }
  });
</script>

<!-- Load heavy scripts after page load -->
<script>
  window.addEventListener('load', function() {
    // Load booking widget
    const script = document.createElement('script');
    script.src = '/js/booking-widget.js';
    document.head.appendChild(script);
  });
</script>
```

### 3. Cumulative Layout Shift (CLS) < 0.1

#### Prevent Layout Shifts
```css
/* Reserve space for images */
.image-container {
  aspect-ratio: 16 / 9;
  background-color: #f0f0f0;
}

/* Prevent font swap shifts */
.hero-title {
  font-display: swap;
  /* Fallback font with similar metrics */
  font-family: 'Inter', 'system-ui', -apple-system, sans-serif;
}

/* Reserve space for dynamic content */
.booking-widget {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Prevent ad/widget layout shifts */
.sidebar-widget {
  width: 300px;
  height: 250px;
  background: #f5f5f5;
  border: 1px solid #ddd;
}
```

## URL Structure Implementation

### 1. Next.js Dynamic Routing
```javascript
// pages/therapy/[specialty]/[location]/index.js
import { GetStaticPaths, GetStaticProps } from 'next'
import { generateSpecialtyContent } from '../../../utils/contentGenerator'
import { getSpecialties, getLocations } from '../../../utils/dataHelpers'

export default function SpecialtyLocationPage({ specialty, location, content }) {
  return (
    <div>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={`https://nextsteptherapy.ca/therapy/${specialty}/${location}/`} />
        
        {/* Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(content.schema) }}
        />
      </Head>
      
      <main>
        <section className="hero-section">
          <h1>{content.hero.title}</h1>
          <p>{content.hero.subtitle}</p>
          {/* Hero content */}
        </section>
        
        {/* Page sections */}
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const specialties = await getSpecialties()
  const locations = await getLocations()
  
  const paths = []
  
  specialties.forEach(specialty => {
    locations.forEach(location => {
      paths.push({
        params: { 
          specialty: specialty.slug, 
          location: location.slug 
        }
      })
    })
  })
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { specialty, location } = params
  
  const content = await generateSpecialtyContent(specialty, location)
  
  return {
    props: {
      specialty,
      location, 
      content
    }
  }
}
```

### 2. Sitemap Generation
```javascript
// utils/generateSitemap.js
import fs from 'fs'
import { getSpecialties, getLocations } from './dataHelpers'

export async function generateSitemap() {
  const specialties = await getSpecialties()
  const locations = await getLocations()
  
  const baseUrl = 'https://nextsteptherapy.ca'
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Static pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/about/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/therapy/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Specialty hub pages -->
`
  
  specialties.forEach(specialty => {
    sitemap += `
  <url>
    <loc>${baseUrl}/therapy/${specialty.slug}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  })
  
  // Location-specific pages
  specialties.forEach(specialty => {
    locations.forEach(location => {
      sitemap += `
  <url>
    <loc>${baseUrl}/therapy/${specialty.slug}/${location.slug}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    })
  })
  
  sitemap += `
</urlset>`
  
  fs.writeFileSync('./public/sitemap.xml', sitemap)
}
```

### 3. Robots.txt Optimization
```
# /public/robots.txt
User-agent: *
Allow: /

# Priority pages
Allow: /therapy/
Allow: /therapy/mens-mental-health/
Allow: /therapy/adhd-adults/
Allow: /therapy/addiction-counselling/
Allow: /therapy/imposter-syndrome/
Allow: /therapy/divorce-support/

# Sitemap location
Sitemap: https://nextsteptherapy.ca/sitemap.xml

# Block admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /thank-you/
```

## Technical Performance Monitoring

### 1. Core Web Vitals Tracking
```javascript
// utils/webVitals.js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

export function trackWebVitals() {
  function sendToAnalytics(metric) {
    // Send to Google Analytics
    gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    })
    
    // Send to custom analytics
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric)
    })
  }
  
  getCLS(sendToAnalytics)
  getFID(sendToAnalytics)  
  getFCP(sendToAnalytics)
  getLCP(sendToAnalytics)
  getTTFB(sendToAnalytics)
}
```

### 2. Performance Budget Configuration
```javascript
// lighthouse.config.js
module.exports = {
  ci: {
    assert: {
      assertions: {
        'largest-contentful-paint': ['error', {maxNumericValue: 2500}],
        'first-input-delay': ['error', {maxNumericValue: 100}],
        'cumulative-layout-shift': ['error', {maxNumericValue: 0.1}],
        'speed-index': ['error', {maxNumericValue: 3000}],
        'interactive': ['error', {maxNumericValue: 4000}]
      }
    }
  }
}
```

## Local SEO Implementation

### 1. Google Business Profile Integration
```html
<!-- Embed Google Business Profile -->
<div class="google-business-profile">
  <iframe 
    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJXXXXXXXXXXXXXXXX&key=YOUR_API_KEY"
    width="100%" 
    height="300" 
    frameborder="0" 
    style="border:0" 
    allowfullscreen
    loading="lazy">
  </iframe>
</div>
```

### 2. Local Business Schema with Service Areas
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Next Step Therapy",
  "areaServed": [
    {
      "@type": "City",
      "name": "Toronto",
      "containedInPlace": {
        "@type": "Province", 
        "name": "Ontario"
      }
    },
    {
      "@type": "City",
      "name": "Mississauga", 
      "containedInPlace": {
        "@type": "Province",
        "name": "Ontario"
      }
    },
    {
      "@type": "Province",
      "name": "Ontario",
      "containedInPlace": {
        "@type": "Country",
        "name": "Canada"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Therapy Services by Location",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Men's Mental Health Therapy Toronto",
          "areaServed": "Toronto"
        }
      }
    ]
  }
}
```

## Security and Privacy Implementation

### 1. HTTPS and Security Headers
```javascript
// next.config.js security headers
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options', 
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }
        ]
      }
    ]
  }
}
```

### 2. PHIPA Compliance Tracking
```html
<!-- Privacy-compliant analytics -->
<script>
  // Google Analytics with IP anonymization
  gtag('config', 'GA_MEASUREMENT_ID', {
    anonymize_ip: true,
    respect_dnt: true,
    allow_google_signals: false
  });
  
  // Cookie consent implementation
  if (localStorage.getItem('cookies-accepted') === 'true') {
    // Load analytics scripts
    loadAnalytics();
  }
</script>
```

## Implementation Timeline

### Phase 1: Core Infrastructure (Week 1)
- [ ] Next.js setup with dynamic routing
- [ ] Basic schema markup implementation
- [ ] Core Web Vitals optimization
- [ ] HTTPS and security headers

### Phase 2: SEO Foundation (Week 2)  
- [ ] Complete schema markup for all page types
- [ ] Sitemap generation
- [ ] Robots.txt optimization
- [ ] Local SEO setup

### Phase 3: Performance Optimization (Week 3)
- [ ] Image optimization pipeline
- [ ] Critical CSS extraction
- [ ] JavaScript code splitting
- [ ] Web vitals monitoring

### Phase 4: Testing and Monitoring (Week 4)
- [ ] Performance budget setup
- [ ] Analytics implementation
- [ ] Error monitoring
- [ ] SEO tracking setup

This technical foundation enables the programmatic SEO strategy to scale efficiently while maintaining optimal performance and search engine visibility.