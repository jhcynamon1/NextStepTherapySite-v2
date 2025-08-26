# Implementation Checklist - NextStepTherapy.ca Transformation
## Detailed Task List with File Locations & Line Numbers

### **CRITICAL: BACKUP FIRST**
- [ ] **BACKUP:** Create full website backup before any changes
- [ ] **GIT:** Commit current state to version control
- [ ] **STAGING:** Set up staging environment for testing

---

## **WEEK 1: CRITICAL CONTENT CHANGES (5 Days)**

### **Day 1: Meta Tags & Titles (2 hours)**

#### **Task A1: Homepage Meta Description**
- **File:** `/index.html`
- **Line:** 619
- **Current:** `<meta name="description" content="Manage anxiety &amp; stress with online therapy for business professionals in Ontario. Next Step Therapy offers accessible support to help you thrive. Learn more.">`
- **Change:** Replace "business professionals" → "individuals seeking support"
- **New:** `<meta name="description" content="Manage anxiety &amp; stress with online therapy for individuals seeking support in Ontario. Next Step Therapy offers accessible, evidence-based care to help you thrive.">`
- **Status:** ⏳ Ready to implement

#### **Task A2: Homepage Twitter Description**
- **File:** `/index.html`
- **Line:** 623
- **Current:** `<meta name="twitter:description" content="Manage anxiety &amp; stress with online therapy for business professionals in Ontario. Next Step Therapy offers accessible support to help you thrive. Learn more.">`
- **Change:** Replace "business professionals" → "individuals seeking support"
- **New:** `<meta name="twitter:description" content="Manage anxiety &amp; stress with online therapy for individuals seeking support in Ontario. Next Step Therapy offers accessible, evidence-based care to help you thrive.">`
- **Status:** ⏳ Ready to implement

#### **Task A3: Homepage OG Description**
- **File:** `/index.html`
- **Line:** 624
- **Current:** `<meta property="og:description" content="Manage anxiety &amp; stress with online therapy for business professionals in Ontario. Next Step Therapy offers accessible support to help you thrive. Learn more.">`
- **Change:** Replace "business professionals" → "individuals seeking support"
- **New:** `<meta property="og:description" content="Manage anxiety &amp; stress with online therapy for individuals seeking support in Ontario. Next Step Therapy offers accessible, evidence-based care to help you thrive.">`
- **Status:** ⏳ Ready to implement

#### **Task A4: About Page Meta Description**
- **File:** `/about.html`
- **Location:** `<head>` section
- **Current:** `<meta name="description" content="Next Step Therapy helps professionals manage work anxiety. Schedule your secure online session today!">`
- **Change:** Replace "professionals manage work anxiety" → "individuals manage anxiety and stress"
- **New:** `<meta name="description" content="Next Step Therapy helps individuals manage anxiety and stress. Schedule your secure online therapy session today!">`
- **Status:** ⏳ Ready to implement

#### **Task A5: About Page Twitter Title**
- **File:** `/about.html`
- **Location:** `<head>` section  
- **Current:** `<meta name="twitter:title" content="Online Therapy for Business Professionals | Next Step Therapy | Ontario">`
- **Change:** Remove "Business Professionals" → generic "Services"
- **New:** `<meta name="twitter:title" content="Online Therapy Services | Next Step Therapy | Ontario">`
- **Status:** ⏳ Ready to implement

### **Day 2: Homepage Hero Content (3 hours)**

#### **Task B1: Main Practice Description**
- **File:** `/index.html`
- **Line:** 737
- **Element:** Main description paragraph
- **Current:** `"Next Step Therapy is a psychotherapy practice specializing in anxiety treatment and personal growth for professionals in Ontario."`
- **Change:** Remove "for professionals"
- **New:** `"Next Step Therapy is a psychotherapy practice specializing in anxiety treatment and personal growth in Ontario."`
- **Status:** ⏳ Ready to implement

#### **Task B2: Service Description Block**
- **File:** `/index.html`
- **Line:** 749
- **Element:** Service description paragraph
- **Current:** `"We provide virtual therapy sessions designed to support high achievers facing work stress, burnout, and performance anxiety."`
- **Change:** Replace "high achievers facing work stress, burnout, and performance anxiety" → "individuals facing stress, anxiety, and life challenges"
- **New:** `"We provide virtual therapy sessions designed to support individuals facing stress, anxiety, and life challenges."`
- **Status:** ⏳ Ready to implement

#### **Task B3: Navigation Menu Text**
- **File:** `/index.html` (and all other pages)
- **Line:** 693
- **Element:** Navigation menu item
- **Current:** `<span class="navItemText ">EXECUTIVE & PROFESSIONAL PERFORMANCE ENHANCEMENT</span>`
- **Change:** Transform to neutral alternative
- **New:** `<span class="navItemText ">PERSONAL GROWTH & CONFIDENCE BUILDING</span>`
- **Status:** ⏳ Ready to implement
- **Note:** Must update on ALL pages with this navigation

### **Day 3: About Page Content (3 hours)**

#### **Task C1: About Page Hero Title**
- **File:** `/about.html`
- **Element:** Main H1 tag
- **Current:** `<h1 class="text-align-center m-size-30"><span style="display: initial; color: var(--color_2);" m-font-size-set="true" class="m-font-size-30">Work Anxiety Therapy</span></h1>`
- **Change:** Broaden from work-specific to general
- **New:** `<h1 class="text-align-center m-size-30"><span style="display: initial; color: var(--color_2);" m-font-size-set="true" class="m-font-size-30">Anxiety & Stress Therapy</span></h1>`
- **Status:** ⏳ Ready to implement

#### **Task C2: About Page Hero Subtitle**
- **File:** `/about.html`
- **Element:** Hero subtitle paragraph
- **Current:** `"Next Step Therapy helps high-achieving professionals who feel overwhelmed despite their success transform anxiety into a catalyst for meaningful growth."`
- **Change:** Remove professional context, add personal wellbeing focus
- **New:** `"Next Step Therapy helps individuals who feel overwhelmed transform anxiety into a catalyst for meaningful growth and personal wellbeing."`
- **Status:** ⏳ Ready to implement

#### **Task C3: Main Practice Description**
- **File:** `/about.html`
- **Element:** Main description paragraph after hero
- **Current:** `"Next Step Therapy helps high-achieving professionals who feel overwhelmed despite their success transform anxiety into a catalyst for meaningful growth. Our approach addresses both the immediate challenges you face and their root causes, creating lasting change that enhances both your performance and wellbeing."`
- **Change:** Remove professional context, focus on personal growth
- **New:** `"Next Step Therapy helps individuals who feel overwhelmed transform anxiety into a catalyst for meaningful growth. Our approach addresses both the immediate challenges you face and their root causes, creating lasting change that enhances both your personal wellbeing and life satisfaction."`
- **Status:** ⏳ Ready to implement

### **Day 4: Services Page Headers (2 hours)**

#### **Task D1: Services Page Title Tag**
- **File:** `/services.html`
- **Element:** `<title>` tag in head
- **Current:** `<title>Manage performance anxiety, Performance anxiety therapy services</title>`
- **Change:** Remove performance focus, make general
- **New:** `<title>Anxiety & Stress Therapy Services | Next Step Therapy</title>`
- **Status:** ⏳ Ready to implement

#### **Task D2: Services Main Header**
- **File:** `/services.html`
- **Element:** Main H1 tag
- **Current:** `<h1 class="m-text-align-center"><span style="display: initial;">Performance Anxiety Therapy Services for Professionals in Ontario<br></span></h1>`
- **Change:** Remove performance and professional focus
- **New:** `<h1 class="m-text-align-center"><span style="display: initial;">Anxiety & Stress Therapy Services in Ontario<br></span></h1>`
- **Status:** ⏳ Ready to implement

### **Day 5: Footer & Summary Content (2 hours)**

#### **Task B4: Homepage Footer Summary**
- **File:** `/index.html`
- **Line:** 831
- **Element:** Footer description paragraph
- **Current:** `"Next Step Therapy offers performance-focused virtual therapy for high-achieving professionals in Ontario, helping them manage stress, anxiety, and burnout. Using evidence-based approaches like Acceptance and Commitment Therapy (ACT) and mindfulness, they focus on long-term change rather than just symptom management. Our secure online sessions provide flexible support tailored to demanding careers."`
- **Change:** Remove performance/professional focus, emphasize personal approach
- **New:** `"Next Step Therapy offers evidence-based virtual therapy for individuals in Ontario, helping them manage stress, anxiety, and life challenges. Using proven approaches like Acceptance and Commitment Therapy (ACT) and mindfulness, we focus on long-term change rather than just symptom management. Our secure online sessions provide flexible support tailored to your unique needs."`
- **Status:** ⏳ Ready to implement

---

## **WEEK 2: STRUCTURAL CHANGES (5 Days)**

### **Day 6: URL Structure & Redirects (4 hours)**

#### **Task E1: File Renaming**
- **Current File:** `/executive-professional-performance-enhancement.html`
- **New File:** `/personal-growth-confidence-building.html`
- **Action:** Rename file and update content
- **Status:** ⏳ Ready to implement

#### **Task E2: 301 Redirect Setup**
- **File:** Create `.htaccess` or configure server redirects
- **Redirects Needed:**
  ```
  /executive-professional-performance-enhancement.html → /personal-growth-confidence-building.html
  /work-anxiety-and-stress.html → /anxiety-stress-therapy.html
  /performance-anxiety-therapy-services.html → /anxiety-therapy-services.html
  ```
- **Status:** ⏳ Ready to implement

#### **Task E3: Internal Link Updates**
- **Files:** All pages linking to renamed files
- **Action:** Update all internal links to point to new filenames
- **Search Pattern:** `href="executive-professional-performance-enhancement.html"`
- **Replace With:** `href="personal-growth-confidence-building.html"`
- **Status:** ⏳ Ready to implement

### **Day 7-8: Image Alt Text Mass Update (6 hours)**

#### **Task G1: Homepage Image Alt Text**
- **File:** `/index.html`
- **Current Pattern:** `alt="performance anxiety therapy, ontario, Manage performance anxiety"`
- **New Pattern:** `alt="anxiety therapy services, ontario, mental health support"`
- **Action:** Find and replace all instances
- **Status:** ⏳ Ready to implement

#### **Task G2: About Page Image Alt Text**  
- **File:** `/about.html`
- **Action:** Update all image alt attributes to neutral language
- **Status:** ⏳ Ready to implement

#### **Task G3: Services Page Image Alt Text**
- **File:** `/services.html`  
- **Action:** Update all image alt attributes to neutral language
- **Status:** ⏳ Ready to implement

### **Day 9-10: Remaining Content Cleanup (6 hours)**

#### **Task B5: Contact Section Update**
- **File:** `/index.html`
- **Line:** 895
- **Current:** `"Our flexible, secure online sessions are designed for busy professionals."`
- **New:** `"Our flexible, secure online sessions are designed for individuals seeking meaningful change."`
- **Status:** ⏳ Ready to implement

#### **Task C4: Therapist Bio Neutralization**
- **File:** `/about.html`
- **Current:** References to "high-performers," "ambitious professionals," "performance settings"
- **Action:** Replace with neutral alternatives focusing on "individuals," "people," "personal growth"
- **Status:** ⏳ Ready to implement

---

## **WEEK 3: TECHNICAL IMPLEMENTATION (5 Days)**

### **Day 11-12: Schema Markup Implementation (6 hours)**

#### **Task F1: Homepage LocalBusiness Schema**
- **File:** `/index.html`
- **Location:** Before closing `</head>` tag
- **Action:** Add complete LocalBusiness + MedicalBusiness schema
- **Code:** See technical_seo_foundation.md for complete JSON-LD
- **Status:** ⏳ Ready to implement

#### **Task F2: Person Schema for Therapist**
- **File:** `/about.html`
- **Location:** Before closing `</head>` tag  
- **Action:** Add Person schema for Jesse Cynamon with credentials
- **Status:** ⏳ Ready to implement

#### **Task F3: FAQ Schema Implementation**
- **Files:** All major pages
- **Action:** Add FAQ schema for common questions
- **Status:** ⏳ Ready to implement

### **Day 13: Sitemap & Robots.txt (3 hours)**

#### **Task H1: Generate New Sitemap**
- **File:** Create `/sitemap.xml`
- **Action:** Generate comprehensive sitemap with new URL structure
- **Include:** All pages, blog posts, new neutral URLs
- **Status:** ⏳ Ready to implement

#### **Task H2: Update Robots.txt**
- **File:** `/robots.txt`
- **Action:** Add new priority pages, update sitemap location
- **Status:** ⏳ Ready to implement

### **Day 14-15: Visual Content Updates (6 hours)**

#### **Task G4: Replace Executive Stock Photos**
- **Files:** Multiple image files
- **Action:** Replace business/office imagery with diverse, therapeutic visuals  
- **Priority Images:**
  - Hero background images
  - About page therapist photos
  - Service page illustrations
- **Status:** ⏳ Ready to implement

---

## **WEEK 4: OPTIMIZATION & TESTING (5 Days)**

### **Day 16-17: Performance Optimization (6 hours)**

#### **Task H3: Image Optimization**
- **Files:** All image files
- **Actions:**
  - Convert to WebP format
  - Add responsive srcset
  - Implement lazy loading
  - Optimize file sizes
- **Status:** ⏳ Ready to implement

#### **Task H4: Critical CSS Implementation**
- **Files:** All HTML files
- **Action:** Inline critical CSS, defer non-critical stylesheets
- **Status:** ⏳ Ready to implement

### **Day 18: Quality Assurance Testing (4 hours)**

#### **Task QA1: Link Testing**
- [ ] Test all internal links work correctly
- [ ] Verify all 301 redirects function properly  
- [ ] Check external links still work
- **Status:** ⏳ Ready to test

#### **Task QA2: Content Review**
- [ ] Verify zero "executive/professional/high-achiever" references remain
- [ ] Confirm inclusive language throughout
- [ ] Check professional credibility maintained
- **Status:** ⏳ Ready to review

#### **Task QA3: Technical Validation**
- [ ] Validate schema markup with Google's Rich Results Test
- [ ] Test Core Web Vitals with PageSpeed Insights
- [ ] Verify mobile responsiveness
- **Status:** ⏳ Ready to validate

### **Day 19-20: Final Review & Launch (4 hours)**

#### **Task L1: Cross-Browser Testing**
- [ ] Test in Chrome, Firefox, Safari, Edge
- [ ] Verify mobile functionality on iOS/Android
- [ ] Check tablet responsiveness
- **Status:** ⏳ Ready to test

#### **Task L2: SEO Final Check**
- [ ] Submit updated sitemap to Google Search Console
- [ ] Monitor for crawl errors
- [ ] Check keyword ranking impacts
- **Status:** ⏳ Ready to monitor

---

## **DEPENDENCIES & CRITICAL PATH**

### **Must Complete Before Other Tasks:**
1. **Backup & Version Control** → All other tasks depend on this
2. **Meta Tags (A1-A5)** → Affects SEO immediately 
3. **URL Redirects (E1-E3)** → Must complete before link updates
4. **File Renaming** → Must complete before internal link updates

### **Can Run In Parallel:**
- Image alt text updates (G1-G3)
- Content neutralization (B1-B5, C1-C4)
- Schema markup implementation (F1-F3)

### **Final Phase Dependencies:**
- Performance optimization requires all content changes complete
- Quality assurance requires all technical changes complete
- Launch requires successful QA testing

---

## **ROLLBACK PLAN**

### **If Issues Arise:**
1. **Immediate:** Restore from backup
2. **Partial:** Use version control to revert specific changes
3. **SEO Impact:** Re-implement old URLs temporarily
4. **Performance Issues:** Disable new optimizations

### **Monitoring Alerts:**
- [ ] Set up uptime monitoring
- [ ] Configure Google Search Console alerts  
- [ ] Monitor Core Web Vitals scores
- [ ] Track organic traffic changes

---

**Ready to begin implementation?** We can start with Day 1 tasks (Meta Tags & Titles) and work through systematically, testing each change before moving to the next.