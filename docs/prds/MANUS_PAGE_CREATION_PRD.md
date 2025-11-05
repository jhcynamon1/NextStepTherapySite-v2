# 🎯 MANUS PAGE CREATION PRD
*Standardized Process for Creating SEO-Optimized Therapy Landing Pages*

---

## 📋 COMMAND FORMAT

To create new therapy pages using this framework, use this exact format:

```
CREATE MANUS PAGE: [PAGE_TYPE] | [TARGET_KEYWORD] | [LOCATION] | [SPECIFIC_DETAILS]
```

**Example Commands:**
```
CREATE MANUS PAGE: service-city | anxiety therapy | Ottawa | Focus on professionals, include local university mentions
CREATE MANUS PAGE: student-location | student mental health | Hamilton | McMaster University focus, academic pressure
CREATE MANUS PAGE: condition-specific | ADHD therapy | Toronto | Executive function support, workplace challenges
```

---

## 🏗️ PAGE TYPES & TEMPLATES

### 1. **SERVICE-CITY Pages**
- **Format**: `[service]-[city].html`
- **Example**: `anxiety-therapy-ottawa.html`
- **Template**: `anxiety-therapy-toronto.html` (proven Manus standard)

### 2. **STUDENT-LOCATION Pages**
- **Format**: `students/student-mental-health-[city].html`
- **Example**: `students/student-mental-health-hamilton.html`
- **Template**: Custom student-focused template with university-specific content

### 3. **CONDITION-SPECIFIC Pages**
- **Format**: `[condition]-therapy-[location].html`
- **Example**: `adhd-therapy-toronto.html`
- **Template**: Service-specific with condition expertise

---

## ✅ MANUS DESIGN SYSTEM CHECKLIST

### **1. HTML Structure Standards**
- [ ] Clean, readable HTML formatting (not minified)
- [ ] Proper `data-astro-cid-*` attributes maintained
- [ ] Semantic section structure with proper containers

### **2. CTA Button Standards**
- [ ] **Main CTA**: `href="/#contact"` → Routes to homepage contact form
- [ ] **Secondary CTA**: `href="tel:+14163062157"` → Direct phone call
- [ ] **Styling**: `.manus-primary-cta` and `.manus-secondary-cta` classes
- [ ] **Colors**: Primary #6b8e6f, Secondary transparent with #6b8e6f border

### **3. Trust Elements**
- [ ] **CRPO Badge**: `CRPO #10979` prominently displayed
- [ ] **Trust Pills**: Licensed, Virtual Sessions, Insurance Receipts, Free Consultation
- [ ] **Phone Number**: (416) 306-2157 consistent across all elements

### **4. Content Structure**
- [ ] **Hero Section**: City-specific H1, conversational lead text, trust pills, dual CTAs
- [ ] **Problem Recognition**: "Does This Sound Like You?" with relatable bullet points
- [ ] **Understanding Section**: Explains the condition/situation in local context
- [ ] **How Therapy Helps**: ACT-based approach, practical outcomes
- [ ] **Local Context**: City-specific challenges, university mentions (if applicable)
- [ ] **About Therapist**: Jesse Cynamon, CRPO #10979, approach explanation
- [ ] **Getting Started**: Process, insurance, scheduling
- [ ] **FAQ Section**: 6 common questions with practical answers
- [ ] **Final CTA**: Contact section with dual CTAs

---

## 🔍 SEO OPTIMIZATION REQUIREMENTS

### **1. Meta Tags**
```html
<title>[Service] [City] | Professional Support - Next Step Therapy</title>
<meta name="description" content="[Service] in [City]. Virtual sessions, CRPO registered, insurance receipts. Book free consultation. Professional support for [specific issues].">
<link rel="canonical" href="https://nextsteptherapy.ca/[page-slug]">
```

### **2. Open Graph Tags**
```html
<meta property="og:title" content="[Service] [City] | Next Step Therapy">
<meta property="og:description" content="Professional [service] support in [City] with CRPO registered psychotherapist. Virtual sessions available throughout Ontario.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://nextsteptherapy.ca/[page-slug]">
```

### **3. JSON-LD Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "[Service] [City]",
  "description": "Professional [service] services in [City]. CRPO registered psychotherapist offering evidence-based support for [specific conditions].",
  "url": "https://nextsteptherapy.ca/[page-slug]",
  "provider": {
    "@type": "Psychologist",
    "name": "Jesse Cynamon, RP",
    "identifier": "CRPO #10979",
    "jobTitle": "Registered Psychotherapist"
  },
  "areaServed": {
    "@type": "City",
    "name": "[City]",
    "addressRegion": "ON",
    "addressCountry": "CA"
  }
}
```

### **4. Additional Schema for Student Pages**
```json
"audience": {
  "@type": "Audience",
  "audienceType": "University Students"
}
```

---

## 📍 LOCATION-SPECIFIC CONTENT REQUIREMENTS

### **City Context Database**
- **Toronto**: TTC, downtown pressure, career competition, urban overstimulation
- **Ottawa**: Government work stress, university pressure (uOttawa/Carleton), bilingual challenges
- **Hamilton**: McMaster University, industrial transition, healthcare sector stress
- **London**: Western University, economic transition, student population dynamics
- **Kingston**: Queen's University, small city pressures, academic intensity
- **Waterloo**: UWaterloo/Laurier, tech sector stress, academic competition
- **Mississauga**: Suburban isolation, commuter stress, diverse population needs

### **University-Specific Details**
- **McMaster**: Pre-med competition, Health Sciences pressure, research stress
- **Western**: Business program networking, social pressures, academic reputation
- **Queen's**: Elite institution pressure, social integration, academic competition
- **uOttawa/Carleton**: Government internship pressure, language requirements, political environment
- **UWaterloo/Laurier**: Co-op stress, tech industry pressure, academic rigor

---

## 🚀 DEPLOYMENT PROCESS

### **1. File Creation**
```bash
# Use existing template as base
cp anxiety-therapy-toronto.html [new-page-name].html

# For student pages
mkdir -p students
cp students/student-mental-health-hamilton.html students/student-mental-health-[city].html
```

### **2. Content Customization**
- [ ] Replace all city/location references
- [ ] Update university names and specific challenges
- [ ] Customize problem recognition bullets for local context
- [ ] Adjust "local considerations" section
- [ ] Update schema markup with correct location data

### **3. Quality Assurance**
- [ ] All CTAs link to `/#contact`
- [ ] Phone number is (416) 306-2157 throughout
- [ ] CRPO #10979 displayed in header and content
- [ ] No duplicate content from existing pages
- [ ] Proper Manus styling maintained

### **4. SEO Integration**
```bash
# Add to sitemap.xml
<url>
  <loc>https://nextsteptherapy.ca/[page-slug]</loc>
  <lastmod>[current-date]</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

### **5. Deployment**
```bash
git add [new-page].html sitemap.xml
git commit -m "✅ CREATE: [Page Title] - Manus compliant [service] page for [city]

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

git push
vercel --prod --force --yes
```

---

## 🎨 CONTENT WRITING GUIDELINES

### **Voice & Tone**
- **Conversational**: "You know that feeling when..."
- **Empathetic**: Acknowledge real struggles without minimizing
- **Professional**: Include credentials and evidence-based approaches
- **Local**: Reference specific city challenges and landmarks

### **Emotional Journey**
1. **Recognition**: "Sound familiar?" with relatable problems
2. **Understanding**: Normalize the experience, explain the context
3. **Hope**: Evidence-based solutions that work
4. **Action**: Clear, low-pressure next steps

### **Content Length Targets**
- **Hero Section**: 50-75 words lead text
- **Problem Recognition**: 8-10 specific bullet points
- **Understanding Section**: 200-300 words explaining local context
- **How Therapy Helps**: 6 practical outcomes in bulleted list
- **FAQ**: 6 questions, 30-50 word answers

---

## 🚨 COMPLIANCE REQUIREMENTS

### **CRPO Standards**
- [ ] Registration number #10979 visible in header and footer
- [ ] Professional credentials clearly stated
- [ ] Scope of practice accurate (psychotherapy, not psychology)
- [ ] Confidentiality statements included
- [ ] Insurance coverage information provided

### **Manus Brand Standards**
- [ ] Green color scheme (#6b8e6f) maintained
- [ ] Typography consistency (Playfair Display + Inter)
- [ ] Button styling matches established patterns
- [ ] Logo and branding elements consistent
- [ ] Mobile responsive design preserved

### **SEO Best Practices**
- [ ] One H1 per page with target keyword
- [ ] H2s structure content logically
- [ ] Meta description under 160 characters
- [ ] Title tags under 60 characters
- [ ] Image alt text descriptive and keyword-relevant
- [ ] Internal linking to relevant existing pages

---

## 📊 SUCCESS METRICS & VALIDATION

### **Page Performance Indicators**
- [ ] Google PageSpeed > 85 mobile/desktop
- [ ] All links functional (especially CTAs)
- [ ] Forms submission working
- [ ] Phone numbers clickable on mobile
- [ ] Schema markup validates in Google's tool

### **Content Quality Checks**
- [ ] No grammatical errors or typos
- [ ] Local references accurate and current
- [ ] University information up-to-date
- [ ] Professional claims substantiated
- [ ] Tone consistent with brand voice

### **Technical Validation**
- [ ] HTML validates without errors
- [ ] CSS doesn't break existing styles
- [ ] JavaScript functionality preserved
- [ ] Mobile viewport properly configured
- [ ] Accessibility standards maintained

---

## 💡 USAGE EXAMPLES

### **Example 1: Service-City Page**
```
CREATE MANUS PAGE: service-city | depression therapy | Hamilton | Focus on McMaster students and healthcare workers, mention CAMH connections
```
**Output**: `depression-therapy-hamilton.html` with McMaster-specific content, local healthcare context, and student mental health focus.

### **Example 2: Student Page**
```
CREATE MANUS PAGE: student-location | student mental health | London | Western University focus, residence life challenges, academic pressure
```
**Output**: `students/student-mental-health-london.html` with Western University specific challenges, residence life context, and academic stress management.

### **Example 3: Condition-Specific Page**
```
CREATE MANUS PAGE: condition-specific | trauma therapy | Ottawa | Government workers, PTSD focus, security clearance considerations
```
**Output**: `trauma-therapy-ottawa.html` with government worker specific trauma, security clearance sensitivity, and Ottawa-area resources.

---

## 🔄 CONTINUOUS IMPROVEMENT

### **Regular Updates Needed**
- [ ] University program changes and new offerings
- [ ] Local economic and social developments
- [ ] Insurance coverage changes
- [ ] New research or therapy approaches
- [ ] Seasonal content adjustments

### **Performance Monitoring**
- [ ] Google Search Console for keyword rankings
- [ ] Analytics for user engagement and conversions
- [ ] Page load speed monitoring
- [ ] Mobile usability testing
- [ ] Conversion rate tracking for CTAs

---

*This PRD ensures consistent, high-quality page creation that maintains Manus design standards while delivering SEO-optimized, locally-relevant therapy landing pages that convert visitors into consultations.*