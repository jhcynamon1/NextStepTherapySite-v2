# NextStepTherapy.ca Website Redesign PRD
## Product Requirements Document for Claude Code Generation

**Project Goal:** Transform NextStepTherapy.ca from an executive-focused therapy website into a neutral, modern, high-converting therapy platform that serves diverse mental health needs while maintaining professional credibility.

**Target Audience:** Individuals seeking therapy in Ontario, Canada - specifically men's mental health, ADHD adults, addiction recovery, imposter syndrome, and divorce support.

**Success Metrics:** Achieve 3% visitor-to-prospect conversion rate, 75.6% prospect-to-patient conversion rate, and 230-600% organic traffic growth within 6-12 months.

---

## 1. DESIGN SYSTEM & VISUAL IDENTITY

### Color Palette (Warm Professional 2025 Approach)
**Primary Colors:**
- Sage Green: `#8FA68E` (main brand color - calm, growth, healing)
- Soft Blue: `#6B9BD1` (trust, professionalism, calm)
- Professional Navy: `#1e3e72` (grounding, credibility)

**Accent Colors:**
- Warm Coral: `#E07A5F` (CTAs, highlights)
- Warm Gold: `#D4A574` (secondary CTAs, success states)
- Warm Orange: `#f37336` (urgent CTAs, energy)

**Neutral Colors:**
- Background White: `#F5F5F0` (soft off-white, not harsh white)
- Light Gray: `#F8F9FA` (section backgrounds)
- Medium Gray: `#6C757D` (secondary text)
- Dark Gray: `#343A40` (primary text)

**Accessibility Requirements:**
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text and UI components
- All colors must pass WCAG 2.1 AA standards

### Typography System
**Font Stack:**
- Headers: `'Poppins', 'Montserrat', sans-serif` (rounded, friendly, professional)
- Body: `'Source Sans Pro', 'Lato', sans-serif` (highly readable, clean)
- Fallback: `system-ui, -apple-system, sans-serif`

**Typography Scale:**
- H1: 48-56px desktop / 32-36px mobile (line-height: 1.2)
- H2: 32-40px desktop / 24-28px mobile (line-height: 1.3)
- H3: 24-28px desktop / 20-24px mobile (line-height: 1.4)
- Body: 16-18px all devices (line-height: 1.6)
- Small: 14px (line-height: 1.5)

**Spacing System (4px grid):**
- Base unit: 4px
- Small spacing: 8px (between related elements)
- Medium spacing: 16px (between sections)
- Large spacing: 32px (between major content blocks)
- XL spacing: 48-64px (between page sections)

### Visual Elements
**Buttons:**
- Primary: Rounded corners (8px radius), warm coral background, white text
- Secondary: Outlined style with sage green border, sage green text
- Minimum touch target: 44x44px
- Hover states: 100-150ms transition, subtle shadow elevation

**Cards & Containers:**
- Border radius: 8-12px (psychological safety through rounded shapes)
- Subtle shadows: `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`
- White backgrounds with soft gray borders when needed

**Icons:**
- Style: Outlined/stroke icons (Feather Icons or Heroicons)
- Size: 24px standard, 20px small, 32px large
- Color: Match text color or use sage green for emphasis

---

## 2. LAYOUT & USER EXPERIENCE ARCHITECTURE

### Header Design
**Desktop Header:**
- Logo: Left-aligned, Next Step Therapy with existing logo
- Navigation: Center-aligned horizontal menu
- Primary CTA: "Book Free Consultation" button (warm coral)
- Secondary CTA: Phone number with click-to-call
- Height: 80px, sticky on scroll

**Mobile Header:**
- Hamburger menu (right side)
- Logo (left side, smaller)
- Phone icon (click-to-call, center-right)
- Height: 60px, sticky on scroll

**Navigation Structure:**
```
Home | About | Services | Resources | Contact | Book Consultation
```

**Services Dropdown (Desktop):**
```
Individual Therapy
- Anxiety & Stress
- Men's Mental Health  
- ADHD Support
- Addiction Recovery
- Divorce & Life Transitions
- Imposter Syndrome

Specialized Programs
- Performance Coaching
- Mindfulness Training
- Crisis Support
```

### Homepage Layout Structure

**Section 1: Hero (Above the fold)**
- Headline: "Evidence-Based Therapy That Fits Your Life"
- Subheadline: "Professional mental health support for individuals ready to take their next step toward wellness"
- Two CTAs: "Book Free Consultation" (primary) + "Learn About Our Approach" (secondary)
- Background: Soft gradient from sage green to light gray
- Professional photo: Therapist in welcoming office setting (authentic, not stock)

**Section 2: Trust Indicators**
- CRPO Registration #10979 prominently displayed
- Insurance acceptance logos
- "Free 20-minute consultations"
- "Serving Ontario residents online and in-person"
- Response time guarantee: "We respond within 2 hours"

**Section 3: Services Grid**
- 3x2 grid on desktop, single column mobile
- Each service: Icon + Title + 2-line description + "Learn More" link
- Services: Anxiety Therapy, Men's Mental Health, ADHD Support, Addiction Recovery, Life Transitions, Performance Support

**Section 4: Why Choose Next Step**
- 3-column layout: Expertise, Accessibility, Results
- Include statistics: "85% of clients report improvement within 8 weeks"
- Emphasize evidence-based approaches and personalized care

**Section 5: About Preview**
- Professional headshot with brief bio
- Credentials and approach
- "Meet [Name]" CTA to full about page

**Section 6: Resources & Blog Preview**
- 3 latest blog posts with thumbnails
- "Free Mental Health Resources" section
- Newsletter signup with lead magnet

**Section 7: Contact & Booking**
- Embedded booking calendar or contact form
- Multiple contact methods: phone, email, booking link
- Office location and virtual session options

**Footer:**
- Contact information
- Quick links to services
- Privacy policy, terms, accessibility statement
- Social media (if applicable)
- Copyright and CRPO registration

### Mobile-First Responsive Design

**Breakpoints:**
- Mobile: 375px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+

**Mobile Optimizations:**
- Bottom navigation bar for key actions
- Thumb-friendly button placement (bottom third of screen)
- Simplified forms with progressive disclosure
- One-tap phone calling
- Collapsible sections to reduce scrolling

---

## 3. CONVERSION OPTIMIZATION REQUIREMENTS

### Form Optimization
**Contact Form Fields (Maximum 4):**
1. Name (required)
2. Email (required)
3. Phone (optional, but encouraged)
4. "How can we help?" (text area, optional)

**Multi-Step Intake Form (Post-Contact):**
- Step 1: Contact info (name, email, phone)
- Step 2: Preferred contact method and times
- Step 3: Brief concern description
- Step 4: Insurance and session preference
- Progress bar showing completion status

### Call-to-Action Strategy
**Primary CTAs:**
- "Book Your Free Consultation" (warm coral, prominent placement)
- "Call Now: [phone number]" (warm gold, mobile-friendly)

**Secondary CTAs:**
- "Download Free Anxiety Guide"
- "Take Our Wellness Assessment"  
- "Learn About Our Approach"

**CTA Placement:**
- Header: Primary booking CTA
- Hero section: Two CTAs (primary + secondary)
- Service sections: "Learn More" for each service
- About section: "Schedule a Call"
- Footer: Contact information and booking

### Trust Building Elements
**Social Proof:**
- Client testimonials (first name + initial only for privacy)
- Success statistics with specific numbers
- Professional credentials and certifications
- Media mentions or awards (if any)

**Security Indicators:**
- HTTPS padlock icon
- "Your privacy is protected" messaging
- HIPAA compliance statement
- Secure forms notation

**Credibility Signals:**
- Years of experience
- Number of clients helped
- Professional associations
- Continuing education credentials

---

## 4. CONTENT STRATEGY & MESSAGING

### Brand Voice & Tone
**Voice Characteristics:**
- Professional yet approachable
- Empathetic and understanding
- Clear and jargon-free
- Inclusive and non-judgmental
- Action-oriented but not pushy

**Messaging Framework:**
- Problem acknowledgment: "We understand seeking help takes courage"
- Solution presentation: "Evidence-based therapy tailored to your needs"  
- Outcome focus: "Tools and insights for lasting positive change"
- Call to action: "Take the first step toward feeling better"

### Content Neutralization Requirements
**Transform Executive Language:**
- OLD: "high-achieving professionals" → NEW: "individuals seeking support"
- OLD: "workplace performance" → NEW: "personal growth and wellness"
- OLD: "executive coaching" → NEW: "professional development support"
- OLD: "business leaders" → NEW: "people in leadership roles"

**Inclusive Language Guidelines:**
- Use "people" instead of gender-specific terms when possible
- Avoid assumptions about relationship status, career, or life situation
- Include diverse examples and scenarios
- Use person-first language for mental health conditions

### Page-Specific Content Requirements

**Homepage Content:**
- Headline emphasizing accessibility and evidence-based care
- Subheadlines addressing different visitor motivations
- Service descriptions that are condition-focused, not demographic-focused
- Testimonials representing diverse backgrounds and concerns

**Service Pages Content Structure:**
Each service page should include:
1. Condition overview (symptoms, impact)
2. How therapy helps (benefits, outcomes)
3. Treatment approach (modalities, process)
4. What to expect (session structure, timeline)
5. Getting started (booking, insurance, FAQ)

**About Page Content:**
- Professional background and credentials
- Therapeutic approach and philosophy
- Personal connection to mental health work
- Office/virtual session information
- Insurance and payment options

---

## 5. TECHNICAL SPECIFICATIONS

### Performance Requirements
**Core Web Vitals Targets:**
- Largest Contentful Paint (LCP): < 2.5 seconds
- Interaction to Next Paint (INP): < 200 milliseconds
- Cumulative Layout Shift (CLS): < 0.1

**Performance Budget:**
- Maximum JavaScript: 200KB
- Maximum CSS: 100KB
- Maximum HTTP requests: 50 per page
- Total page weight: < 1.5MB on mobile

**Image Optimization:**
- Format: WebP with JPEG fallback
- Compression: 80-85% for photos
- Lazy loading for below-fold images
- Responsive images with srcset attributes
- Alt text for all images (accessibility requirement)

### SEO & Schema Markup Requirements
**Schema Markup Implementation:**
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "name": "Next Step Therapy",
  "description": "Professional therapy services in Ontario",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "telephone": "[phone number]",
  "url": "https://nextsteptherapy.ca",
  "medicalSpecialty": "Psychotherapy",
  "priceRange": "$$"
}
```

**URL Structure:**
- Homepage: `/`
- Services: `/therapy/[specialty]/` (e.g., `/therapy/anxiety/`, `/therapy/mens-mental-health/`)
- Location pages: `/therapy/[specialty]/[location]/` (e.g., `/therapy/anxiety/toronto/`)
- About: `/about/`
- Resources: `/resources/`
- Blog: `/blog/`
- Contact: `/contact/`

### Accessibility Compliance (WCAG 2.1 AA)
**Required Features:**
- High contrast mode support
- Keyboard navigation for all interactive elements
- Screen reader compatibility
- Alt text for all images
- Proper heading hierarchy (H1-H6)
- Focus indicators for keyboard users
- Skip links for main content
- Form labels and error messages
- Adjustable text size up to 200%

**Testing Requirements:**
- Automated accessibility testing with axe-core
- Manual keyboard navigation testing
- Screen reader testing with NVDA/JAWS
- Color contrast validation
- Mobile accessibility testing

---

## 6. INTEGRATION REQUIREMENTS

### Booking System Integration
**Jane App Integration:**
- Embedded booking widget on key pages
- Real-time availability display
- Automated confirmation emails
- Calendar sync capabilities
- Payment processing integration

**Booking Flow:**
1. Service selection from dropdown
2. Therapist selection (if multiple)
3. Available time slots display
4. Client information form
5. Confirmation and calendar integration

### Analytics & Tracking
**Google Analytics 4 Setup:**
- Goal tracking for form submissions
- Event tracking for CTA clicks
- Conversion funnel analysis
- Therapy-specific custom events
- Mobile vs desktop performance tracking

**Conversion Tracking Events:**
- Contact form submissions
- Phone number clicks
- Booking widget interactions
- Resource downloads
- Email newsletter signups

### CRM Integration
**HubSpot Health Integration:**
- Lead capture from all forms
- Automated follow-up sequences
- Client journey tracking
- HIPAA-compliant data handling
- Appointment scheduling sync

---

## 7. CONTENT MANAGEMENT SYSTEM

### Blog/Resources Section
**Content Categories:**
- Anxiety & Stress Management
- Men's Mental Health
- ADHD Support
- Addiction Recovery
- Life Transitions
- Therapy Tips & Insights

**Content Types:**
- Educational articles (1000-1500 words)
- Quick tips and infographics
- Downloadable resources (PDFs)
- FAQ sections
- Video content (future consideration)

**SEO Optimization:**
- Target long-tail keywords for each niche
- Local SEO optimization for Ontario
- Internal linking strategy
- Meta descriptions and title tags
- Featured snippets optimization

---

## 8. LEGAL & COMPLIANCE REQUIREMENTS

### Privacy & Security
**HIPAA/PIPEDA Compliance:**
- Secure contact forms with encryption
- Privacy policy clearly displayed
- Cookie consent with opt-out options
- Minimal data collection practices
- Secure data storage and transmission

**Required Legal Pages:**
- Privacy Policy (PIPEDA compliant)
- Terms of Service
- Accessibility Statement
- Cookie Policy
- Disclaimer about therapy services

### Professional Compliance
**CRPO Requirements:**
- Registration number prominently displayed
- Scope of practice clearly stated
- No solicited testimonials or reviews
- Evidence-based treatment claims only
- Appropriate professional boundaries

---

## 9. TESTING & QUALITY ASSURANCE

### Pre-Launch Testing
**Functionality Testing:**
- All forms submit correctly
- Booking system works across devices
- Phone numbers are clickable on mobile
- Email links function properly
- Navigation works on all breakpoints

**Performance Testing:**
- Page load speed testing
- Mobile performance optimization
- Core Web Vitals measurement
- Cross-browser compatibility
- Device-specific testing

**Accessibility Testing:**
- Screen reader compatibility
- Keyboard navigation
- Color contrast validation
- Text scaling functionality
- Focus indicator visibility

### Post-Launch Optimization
**A/B Testing Priorities:**
1. Hero section headlines and CTAs
2. Contact form field combinations
3. Service page layouts
4. Trust signal placement
5. Mobile vs desktop conversion paths

**Ongoing Monitoring:**
- Weekly performance reports
- Monthly conversion analysis
- Quarterly accessibility audits
- User feedback collection
- Heat mapping analysis

---

## 10. SUCCESS METRICS & KPIs

### Primary Conversion Metrics
**Target Benchmarks:**
- Overall conversion rate: 3-5%
- Contact form completion: 15-25%
- Phone call conversions: 8-12%
- Booking widget usage: 20-30%
- Email signup rate: 10-15%

### Traffic & Engagement Metrics
**Growth Targets (6 months):**
- Organic traffic increase: 230-400%
- Average session duration: 3+ minutes
- Bounce rate: Under 60%
- Pages per session: 2.5+
- Return visitor rate: 25%+

### Technical Performance Metrics
**Ongoing Targets:**
- Page load time: Under 3 seconds
- Mobile usability score: 95+
- Accessibility score: 100% WCAG AA
- SEO score: 90+ (Lighthouse)
- Security score: A+ (SSL Labs)

---

## 11. IMPLEMENTATION TIMELINE

### Phase 1: Foundation (Week 1-2)
- Design system implementation
- Homepage redesign
- Mobile responsiveness
- Basic SEO setup
- Contact form optimization

### Phase 2: Content & Services (Week 3-4)
- Service page redesigns
- Content neutralization
- About page enhancement
- Resource section creation
- Blog setup

### Phase 3: Integration & Optimization (Week 5-6)
- Booking system integration
- Analytics implementation
- CRM connection
- Performance optimization
- Accessibility compliance

### Phase 4: Testing & Launch (Week 7-8)
- Comprehensive testing
- Content review and approval
- Soft launch with monitoring
- Performance tuning
- Full launch and promotion

---

## 12. DESIGN INSPIRATION & REFERENCES

### Award-Winning Examples to Emulate
**Kōwhai Therapy (Gold Design Award Winner):**
- Stacked layouts with mixed typography
- Personal, journal-like aesthetic
- Warm, natural color palette
- Generous spacing and mobile responsiveness

**Toronto Psychotherapy Space:**
- Dual CTAs in hero section
- Free consultation prominently featured
- Clear service icons and descriptions
- Resource offerings for lead capture

**Beaches Therapy Group:**
- Multiple location options clearly displayed
- Comprehensive service grid with visuals
- Free initial consultation messaging
- Blog section for SEO and education

### Visual Design Elements to Implement
**Photography Style:**
- Authentic photos of therapist in office setting
- Diverse client representation (with consent/models)
- Natural lighting and warm tones
- Professional yet approachable compositions

**Iconography:**
- Consistent stroke-style icons
- Nature-inspired elements where appropriate
- Clear, recognizable symbols for services
- Accessible color contrast for all icons

---

## FINAL IMPLEMENTATION NOTES

**Code Quality Requirements:**
- Clean, semantic HTML5
- Modern CSS with Flexbox/Grid
- Vanilla JavaScript or minimal framework usage
- Progressive enhancement approach
- Cross-browser compatibility (IE11+ support if needed)

**Content Management:**
- Easy-to-edit content sections
- Image optimization workflow
- Blog posting capabilities
- SEO-friendly URL structure
- Version control for content changes

**Maintenance Considerations:**
- Regular security updates
- Performance monitoring
- Content freshness strategy
- Legal compliance reviews
- User feedback incorporation

This PRD provides comprehensive guidance for creating a modern, conversion-optimized therapy website that balances professional credibility with emotional warmth while serving diverse mental health needs. The design should feel like "a warm handshake rather than a cold waiting room" while maintaining the clinical professionalism required for healthcare services.

**Success depends on execution quality - every element should feel intentional, accessible, and genuinely helpful to someone seeking mental health support.**
