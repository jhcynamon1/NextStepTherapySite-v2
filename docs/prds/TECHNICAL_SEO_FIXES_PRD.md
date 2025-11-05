# Product Requirements Document (PRD)
## Technical SEO & Site Architecture Fixes
### Next Step Therapy - Digital Landlord Foundation

---

## 1. EXECUTIVE SUMMARY

### Objective
Fix critical technical SEO gaps and restructure site architecture to enable the digital landlord model to scale from supporting 5 therapists to 50+ therapists across multiple Ontario cities.

### Current State
- No technical SEO foundation (missing sitemap, robots.txt, schema)
- Flat URL structure preventing scalability
- Inconsistent URL patterns harming SEO
- No framework for partner/location expansion

### Target State
- Complete technical SEO implementation
- Hierarchical URL structure supporting multi-location/partner model
- 25-40% organic traffic increase
- 50-70% local search visibility improvement
- Infrastructure supporting 25-50 partner therapists

### Timeline
- Phase 1 (Week 1): Critical Technical Fixes
- Phase 2 (Week 2-3): URL Structure Standardization
- Phase 3 (Week 4): Location & Service Hierarchy
- Phase 4 (Month 2): Partner Infrastructure

---

## 2. REQUIREMENTS

### PHASE 1: CRITICAL TECHNICAL FIXES (Week 1)

#### 1.1 Create sitemap.xml
**Priority**: P0 - CRITICAL
**Description**: Generate comprehensive XML sitemap with all site pages
**Acceptance Criteria**:
- [ ] sitemap.xml accessible at /sitemap.xml
- [ ] All pages included with correct priorities
- [ ] Lastmod dates accurate
- [ ] Submit to Google Search Console
- [ ] Auto-update when pages added/modified

**Implementation**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nextsteptherapy.ca/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://nextsteptherapy.ca/services/anxiety-therapy</loc>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>
  <!-- All other pages -->
</urlset>
```

#### 1.2 Create robots.txt
**Priority**: P0 - CRITICAL
**Description**: Add robots.txt for crawl control
**Acceptance Criteria**:
- [ ] robots.txt accessible at /robots.txt
- [ ] Sitemap reference included
- [ ] Proper crawl directives
- [ ] Block admin/private pages

**Implementation**:
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /*.pdf$

Sitemap: https://nextsteptherapy.ca/sitemap.xml
```

#### 1.3 Implement Schema Markup
**Priority**: P0 - CRITICAL
**Description**: Add structured data for rich snippets
**Acceptance Criteria**:
- [ ] LocalBusiness schema on homepage
- [ ] MedicalBusiness schema on service pages
- [ ] Person schema for Jesse Cynamon
- [ ] Service schema for each therapy type
- [ ] Review schema when testimonials added
- [ ] Validate with Google Rich Results Test

**Implementation**:
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Next Step Therapy",
  "description": "Professional psychotherapy services in Ontario",
  "url": "https://nextsteptherapy.ca",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "priceRange": "$$",
  "medicalSpecialty": "Psychotherapy",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "CRPO #10979"
  }
}
```

#### 1.4 Standardize Contact Information
**Priority**: P1 - HIGH
**Description**: Consistent contact details across all pages
**Acceptance Criteria**:
- [ ] Single phone number across all pages
- [ ] Consistent email address
- [ ] Standardized business hours
- [ ] Uniform CRPO registration display

---

### PHASE 2: URL STRUCTURE STANDARDIZATION (Week 2-3)

#### 2.1 Remove .html Extensions
**Priority**: P0 - CRITICAL
**Description**: Clean all URLs removing .html extensions
**Acceptance Criteria**:
- [ ] Identify all pages with .html
- [ ] Create 301 redirects from old to new URLs
- [ ] Update all internal links
- [ ] Test all redirects work properly
- [ ] Update sitemap with new URLs

**Pages to Fix**:
- /college-anxiety.html → /students/college-anxiety
- /first-year-university-anxiety.html → /students/first-year-anxiety
- All other .html pages

#### 2.2 Implement URL Hierarchy
**Priority**: P1 - HIGH
**Description**: Create logical URL structure
**Acceptance Criteria**:
- [ ] Services under /services/
- [ ] Location pages under /locations/
- [ ] Student content under /students/
- [ ] Professional content under /professionals/
- [ ] Resources under /resources/

**New Structure**:
```
/services/
  /anxiety-therapy
  /depression-therapy
  /workplace-stress
  /mens-mental-health
  /life-transitions
  /relationship-therapy

/locations/
  /toronto/
  /ottawa/
  /hamilton/
  /london/
  /waterloo/

/students/
  /university-anxiety
  /college-stress
  /first-year-support

/professionals/
  /workplace-burnout
  /performance-anxiety
  /executive-coaching
```

---

### PHASE 3: LOCATION & SERVICE HIERARCHY (Week 4)

#### 3.1 Create Location Landing Pages
**Priority**: P1 - HIGH
**Description**: City-specific landing pages for local SEO
**Acceptance Criteria**:
- [ ] Template for location pages created
- [ ] 5 priority cities launched (Toronto, Ottawa, Hamilton, London, Waterloo)
- [ ] Local schema markup on each
- [ ] Unique content per location (300+ words)
- [ ] Local keywords integrated

**Template Structure**:
```
/locations/[city]/
  - H1: Therapy Services in [City], Ontario
  - Local service description
  - Virtual availability message
  - Local testimonials (when available)
  - City-specific keywords
  - Contact form with city pre-selected
```

#### 3.2 Service Directory Structure
**Priority**: P1 - HIGH
**Description**: Organized service pages with clear hierarchy
**Acceptance Criteria**:
- [ ] Parent /services/ page as directory
- [ ] Individual service pages properly nested
- [ ] Cross-linking between related services
- [ ] Service comparison table
- [ ] Clear CTAs to book consultation

---

### PHASE 4: PARTNER INFRASTRUCTURE (Month 2)

#### 4.1 Partner Directory Framework
**Priority**: P2 - MEDIUM
**Description**: Structure for partner therapist profiles
**Acceptance Criteria**:
- [ ] /partners/ directory created
- [ ] Individual therapist profile template
- [ ] Search/filter functionality planned
- [ ] Attribution tracking implemented
- [ ] Partner onboarding documentation

**Structure**:
```
/partners/
  /therapists/
    /[therapist-name]/
      - Profile page
      - Specializations
      - Availability
      - Booking link (tracked)
  /join-our-network/
    - Partner application
    - Benefits overview
    - Revenue share model
```

#### 4.2 Corporate/B2B Section
**Priority**: P2 - MEDIUM
**Description**: Workplace wellness and corporate partnerships
**Acceptance Criteria**:
- [ ] /corporate/ section created
- [ ] Workplace wellness programs page
- [ ] Corporate pricing/packages
- [ ] B2B lead capture forms
- [ ] Case studies/testimonials

---

## 3. TECHNICAL SPECIFICATIONS

### 301 Redirect Map
```
Old URL → New URL
/college-anxiety.html → /students/college-anxiety
/first-year-university-anxiety.html → /students/first-year-anxiety
/general-anxiety-and-stress-therapy → /services/anxiety-therapy
/performance-anxiety → /professionals/performance-anxiety
/counselling-ontario → /services/general-counselling
```

### Canonical URL Strategy
- Self-referencing canonicals on all pages
- Cross-domain canonicals for partner content
- Parameter handling for tracking codes

### Internal Linking Requirements
- Minimum 3 internal links per page
- Service pages link to related services
- Location pages link to relevant services
- Blog/resources link to service pages

---

## 4. SUCCESS METRICS

### Technical KPIs (30 Days)
- [ ] 100% pages indexed in Google
- [ ] Core Web Vitals: All "Good"
- [ ] Page Speed: <3 seconds load time
- [ ] Mobile Friendly: 100% pass rate
- [ ] Schema validation: 0 errors

### SEO Performance (90 Days)
- [ ] Organic traffic: +25-40%
- [ ] Local pack rankings: Top 3 for target keywords
- [ ] Click-through rate: +15-20%
- [ ] Bounce rate: -10-15%

### Business Impact (6 Months)
- [ ] Partner therapists onboarded: 5-10
- [ ] Cities with location pages: 5
- [ ] Lead attribution accuracy: 95%+
- [ ] Conversion rate: +15-25%

---

## 5. IMPLEMENTATION TIMELINE

### Week 1
- Day 1-2: Create sitemap.xml and robots.txt
- Day 3-4: Implement schema markup
- Day 5: Standardize contact information

### Week 2-3
- Remove all .html extensions
- Set up 301 redirects
- Update internal links
- Create service directory structure

### Week 4
- Launch 5 location landing pages
- Implement location schema
- Create location page template

### Month 2
- Build partner directory framework
- Create therapist profile template
- Launch corporate section
- Implement attribution tracking

---

## 6. DEPENDENCIES & RISKS

### Dependencies
- Access to hosting/server for redirects
- Google Search Console access
- Analytics tracking codes
- Content for location pages

### Risks
- **SEO Impact**: Temporary ranking fluctuation during URL changes
  - *Mitigation*: Proper 301 redirects and sitemap updates
- **Partner Readiness**: Infrastructure ready before partners recruited
  - *Mitigation*: Phase rollout, test with 1-2 partners first
- **Content Creation**: Need unique content for each location
  - *Mitigation*: Create template with variable content blocks

---

## 7. DEFINITION OF DONE

### Phase 1 Complete When:
- [ ] Sitemap.xml live and submitted to Google
- [ ] Robots.txt properly configured
- [ ] Schema markup on all pages
- [ ] Contact info standardized

### Phase 2 Complete When:
- [ ] Zero .html extensions in URLs
- [ ] All redirects functioning
- [ ] New URL structure implemented
- [ ] Internal links updated

### Phase 3 Complete When:
- [ ] 5 location pages live
- [ ] Service directory structured
- [ ] Local schema implemented
- [ ] Cross-linking optimized

### Phase 4 Complete When:
- [ ] Partner directory framework ready
- [ ] Attribution tracking tested
- [ ] Corporate section launched
- [ ] Onboarding documentation complete

---

**Document Version**: 1.0
**Created**: September 5, 2025
**Owner**: Next Step Therapy Technical Team
**Status**: READY FOR IMPLEMENTATION
