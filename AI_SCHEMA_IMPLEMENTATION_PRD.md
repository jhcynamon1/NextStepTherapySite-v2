# AI Schema Implementation PRD for NextStepTherapy.ca

## Project Overview

### Objective
Implement AI-generated schema markup across NextStepTherapy.ca to achieve #1 Google rankings for target therapy keywords, following the proven methodology that generated 12K+ monthly organic visitors for other sites.

### Success Metrics
- **Primary**: Achieve top 3 rankings for 20+ target therapy keywords within 90 days
- **Secondary**: Increase organic traffic by 300% within 6 months
- **Tertiary**: Generate 50+ new therapy inquiries per month from organic search

## Current State Analysis

### Existing Schema Status
Based on our therapy website, we likely need to audit and enhance:
- Organization schema for NextStepTherapy business
- LocalBusiness schema for therapy practice locations
- Service schema for different therapy types
- FAQ schema for common therapy questions
- Article schema for blog/informational content

### Priority Content Types for Schema Enhancement
1. **Therapy Service Pages** (anxiety, depression, ADHD, etc.)
2. **Location-Based Pages** (Toronto, Ottawa, Hamilton, etc.)
3. **FAQ Pages** (therapy process, insurance, etc.)
4. **Blog/Educational Content**
5. **About/Contact Pages**

## Implementation Strategy

### Phase 1: Schema Audit and Competitor Analysis (Week 1)

#### Tasks
1. **Current Schema Audit**
   - Use `validator.schema.org` to analyze existing schema on key pages
   - Document current implementation gaps
   - Identify pages with missing or incomplete schema

2. **Competitor Schema Analysis**
   - Analyze top 5 competitors ranking for target keywords
   - Document their schema implementations
   - Identify patterns and opportunities

3. **Priority Page Identification**
   - List top 20 pages that need schema enhancement
   - Prioritize based on traffic potential and current rankings

#### Deliverables
- Schema audit report
- Competitor analysis document
- Prioritized page list with schema requirements

### Phase 2: AI Schema Generation System (Week 2)

#### Schema Types to Generate

1. **LocalBusiness Schema Template**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[PRACTICE_NAME]",
  "description": "[SERVICE_DESCRIPTION]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[STREET_ADDRESS]",
    "addressLocality": "[CITY]",
    "addressRegion": "[PROVINCE]",
    "postalCode": "[POSTAL_CODE]",
    "addressCountry": "CA"
  },
  "telephone": "[PHONE_NUMBER]",
  "url": "[WEBSITE_URL]",
  "openingHours": "[HOURS]",
  "priceRange": "[PRICE_RANGE]"
}
```

2. **MedicalBusiness/PsychologicalService Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "[PRACTICE_NAME]",
  "medicalSpecialty": "Psychology",
  "serviceType": "[THERAPY_TYPE]",
  "availableService": {
    "@type": "MedicalTherapy",
    "name": "[SPECIFIC_THERAPY]",
    "description": "[THERAPY_DESCRIPTION]"
  }
}
```

3. **FAQ Schema Template**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[QUESTION_TEXT]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[ANSWER_TEXT]"
      }
    }
  ]
}
```

#### AI Prompts for Schema Generation

**Initial Analysis Prompt:**
```
I'm trying to write schema for my therapy website nextsteptherapy.ca and my goal is to rank number one in Google for therapy-related keywords in Ontario, Canada. The site offers anxiety therapy, depression therapy, ADHD therapy, and other mental health services. Tell me which schemas I should implement into my site without writing any code.
```

**Service Page Schema Prompt:**
```
Write me schema markup for a therapy service page that offers [THERAPY_TYPE] in [CITY], Ontario. The page should include LocalBusiness, MedicalBusiness, and Service schema types. Use script tags and include placeholders for easy customization.
```

**FAQ Schema Prompt:**
```
Generate FAQ schema for a therapy website that answers common questions about [THERAPY_TYPE]. Include questions about process, cost, insurance, duration, and effectiveness. Use script tags and placeholders.
```

### Phase 3: Manual Implementation (Weeks 3-4)

#### Implementation Process
1. **Generate Schema for Priority Pages**
   - Use Claude AI with therapy-specific prompts
   - Create templates for each content type
   - Validate all generated schema

2. **Page-by-Page Implementation**
   - Start with highest-priority pages
   - Add schema to custom code sections
   - Test each implementation with validator

3. **Quality Assurance**
   - Validate all schema implementations
   - Ensure schema matches page content accurately
   - Check for CRPO compliance in schema content

#### Priority Implementation Order
1. Homepage (Organization + LocalBusiness schema)
2. Main service pages (anxiety, depression, ADHD therapy)
3. Location pages (Toronto, Ottawa, Hamilton)
4. FAQ pages
5. Blog/educational content

### Phase 4: Automation Setup (Weeks 5-6)

#### Automation Goals
- Generate schema for new location pages automatically
- Create consistent schema for blog posts
- Scale FAQ schema across multiple service types

#### Tools and Workflow
1. **Zapier Integration**
   - Trigger: New page creation or content update
   - Action: Generate appropriate schema via Claude AI
   - Output: Formatted schema ready for implementation

2. **Template System**
   - Create reusable schema templates
   - Standardize placeholder naming conventions
   - Document implementation procedures

## Technical Requirements

### Schema Implementation Standards
- **Format**: JSON-LD with script tags
- **Placement**: In `<head>` section of each page
- **Validation**: All schema must pass schema.org validator
- **Compliance**: Must align with CRPO guidelines for therapy marketing

### Content Requirements
- **Accuracy**: Schema must match actual page content
- **Completeness**: Include all relevant schema properties
- **Localization**: Use Canadian address formats and terminology
- **Professional Language**: Avoid prohibited marketing terms

## Risk Mitigation

### Compliance Risks
- **CRPO Compliance**: Ensure all schema content follows professional guidelines
- **Accuracy Requirements**: Schema must reflect actual services offered
- **Privacy Considerations**: Avoid including sensitive client information

### Technical Risks
- **Implementation Errors**: Thorough testing and validation required
- **Site Performance**: Monitor page load times after schema addition
- **Maintenance Overhead**: Plan for ongoing schema updates

## Success Tracking

### Monitoring Tools
- Google Search Console for ranking tracking
- Schema.org validator for technical validation
- Analytics for traffic and conversion tracking

### Key Performance Indicators
1. **Ranking Improvements**
   - Track position changes for target keywords
   - Monitor rich snippet appearances
   - Measure click-through rate improvements

2. **Traffic Metrics**
   - Organic traffic growth
   - New user acquisition
   - Geographic traffic distribution

3. **Business Metrics**
   - Therapy consultation requests
   - Contact form submissions
   - Phone call inquiries

## Timeline and Milestones

### Week 1: Analysis and Planning
- Complete schema audit
- Analyze competitor implementations
- Finalize priority page list

### Week 2: Schema Generation
- Generate all required schema templates
- Create implementation documentation
- Begin manual implementation on priority pages

### Weeks 3-4: Implementation
- Implement schema on all priority pages
- Validate and test all implementations
- Monitor initial ranking changes

### Weeks 5-6: Automation and Scale
- Set up automation workflows
- Implement schema on remaining pages
- Create maintenance procedures

### Ongoing: Monitoring and Optimization
- Weekly ranking and traffic monitoring
- Monthly schema audits and updates
- Quarterly strategy reviews and adjustments

## Questions for Clarification

1. **Current Schema Status**: Do we have any existing schema markup that needs to be preserved or updated?

2. **Priority Services**: Which therapy services should we prioritize for schema implementation first?

3. **Geographic Focus**: Should we prioritize certain cities/regions for location-based schema?

4. **Automation Preference**: Do you want to start with manual implementation or jump directly to automation?

5. **Compliance Review**: Do we need legal/CRPO review of schema content before implementation?

6. **Resource Allocation**: How much time can be dedicated to this project weekly?

This PRD provides a comprehensive roadmap for implementing AI-generated schema markup to achieve significant SEO improvements for NextStepTherapy.ca, following the proven methodology outlined in the video transcript.
