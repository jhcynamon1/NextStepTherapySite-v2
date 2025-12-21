# ONTARIO KEYWORD FIX PRD
**Product Requirements Document for Fixing Location-Specific SEO Issues**

---

## 🎯 **PROBLEM STATEMENT**

**Critical Issue**: 81 HTML files contain "ontario" keywords, with 20+ pages targeting primary keywords like "therapy ontario", "virtual therapy ontario", "counselling ontario" that have **0 search volume**. People don't search with provincial location modifiers.

**Business Impact**: 
- Pages targeting 0-volume keywords = 0 organic traffic
- Wasted SEO potential on high-volume opportunities
- Poor user experience with location-heavy titles
- Missing opportunities for 27,100/month "counselling", 33,100/month "therapy" keywords

---

## 📊 **RESEARCH FINDINGS**

### **What People Actually Search:**
✅ **High Volume Terms (REAL DataForSEO Data):**
- "therapy": 33,100/month
- "counselling": 27,100/month  
- "mental health": 27,100/month
- "virtual therapy": Moderate volume
- "anxiety therapy": 2,900/month

❌ **Zero Volume Terms:**
- "therapy ontario": 0 searches
- "counselling ontario": 0 searches
- "virtual therapy ontario": 0 searches
- "mental health ontario": 0 searches

### **SEO Expert Recommendations:**
1. **Keep location signals** but move away from provincial modifiers
2. **Target city-level** if doing local SEO ("therapy toronto")
3. **For virtual practices**: Focus on broad, high-volume terms
4. **Don't redirect** - modify existing pages in place
5. **Maintain local relevance** through content, not forced keywords

---

## 🎯 **SOLUTION STRATEGY**

### **Approach: BROAD KEYWORD OPTIMIZATION**
**Rationale**: As a virtual practice serving all of Ontario, target broad, high-volume terms that people actually search for, then use content and schema to signal geographic relevance.

### **Three-Tier Fix Strategy:**

#### **TIER 1: HIGH-IMPACT FIXES (6 pages)**
Target pages where "ontario" is the primary keyword:

1. **`counselling-ontario.html`** → Target "counselling" (27,100/month)
2. **`virtual-therapy-ontario.html`** → Target "virtual therapy" 
3. **`online-mental-health-support-ontario.html`** → Target "mental health support"
4. **`same-day-virtual-therapy-ontario.html`** → Target "same day therapy"
5. **`mental-health-northern-ontario.html`** → Target "mental health services"
6. **`mental-health-ontario-professionals.html`** → Target "mental health professionals"

#### **TIER 2: MEDIUM-IMPACT FIXES (6 pages)**
Pages with "ontario" as secondary modifier:

7. **`therapist-available-today-ontario.html`** → Target "therapist available today"
8. **`therapy-cost-without-insurance.html`** → Target "therapy without insurance"
9. **`therapy-covered-insurance-ontario.html`** → Target "therapy covered by insurance"
10. **`panic-attacks-driving-ontario.html`** → Target "panic attacks driving"
11. **`university-student-struggling.html`** → Target "university student struggling"
12. **`mens-mental-health.html`** → Target "mens mental health"

#### **TIER 3: LOW-IMPACT FIXES (8+ pages)**
Pages where "ontario" appears in title but main keyword is different:

13-20. Various pages with "ontario" in supporting text

---

## 🛠️ **IMPLEMENTATION REQUIREMENTS**

### **For Each Page Fix:**

#### **1. Title Tag Changes**
**Before**: `<title>Professional Counselling Services in Ontario | Next Step Therapy</title>`
**After**: `<title>Professional Counselling Services | Next Step Therapy | CRPO #10979</title>`

**Pattern**: Remove "in Ontario", "Ontario", keep core keyword + brand + credentials

#### **2. H1 Changes**
**Before**: `<h1>Professional Counselling Services Across Ontario</h1>`
**After**: `<h1>Professional Counselling Services</h1>`

**Pattern**: Remove location modifier, keep core service term

#### **3. Content Modifications**
- **Keep geographic relevance** in body content
- **Maintain "serving Ontario" messaging** in paragraphs
- **Update meta descriptions** to remove "ontario" keyword stuffing
- **Preserve local schema markup** (LocalBusiness, areaServed)

#### **4. URL Strategy**
- **Keep existing URLs** (don't redirect)
- **Maintain file names** for link equity preservation
- **Update internal linking** to reflect new focus keywords

#### **5. Schema Markup Preservation**
```json
{
  "@type": "LocalBusiness",
  "areaServed": {
    "@type": "State", 
    "name": "Ontario"
  }
}
```
**Keep geographic signals in structured data, not in primary keywords**

---

## 📋 **EXECUTION CHECKLIST**

### **Pre-Implementation:**
- [ ] Backup all files before changes
- [ ] Document current rankings for affected pages
- [ ] Create redirect mapping (if needed)
- [ ] Test local server deployment process

### **Implementation Process:**
- [ ] **Phase 1**: Fix Tier 1 pages (highest impact)
- [ ] **Phase 2**: Fix Tier 2 pages (medium impact)  
- [ ] **Phase 3**: Fix Tier 3 pages (low impact)
- [ ] **Phase 4**: Update internal linking across site
- [ ] **Phase 5**: Submit updated sitemap to GSC

### **Post-Implementation:**
- [ ] Monitor GSC for indexing issues
- [ ] Track ranking changes for new target keywords
- [ ] Verify local search visibility maintained
- [ ] Update Google Business Profile if needed

---

## 🎯 **SUCCESS METRICS**

### **Primary KPIs:**
1. **Organic traffic increase** from targeting real search volume keywords
2. **Keyword ranking improvements** for "counselling", "virtual therapy", "mental health"
3. **Click-through rate improvements** from better titles
4. **Maintained local visibility** in "therapy near me" searches

### **Secondary KPIs:**
1. **Reduced bounce rate** from better keyword-content match
2. **Increased session duration** from relevant traffic
3. **Improved conversion rate** from high-intent keywords

---

## ⚠️ **RISKS & MITIGATION**

### **Risk 1: Temporary ranking drops**
**Mitigation**: Implement in phases, monitor closely, rollback if needed

### **Risk 2: Loss of local relevance**
**Mitigation**: Maintain geographic content and schema markup

### **Risk 3: Internal linking disruption**
**Mitigation**: Update all internal links to reflect new keyword focus

---

## 🚀 **PRIORITY IMPLEMENTATION ORDER**

### **Week 1: High-Impact Pages (Tier 1)**
1. `counselling-ontario.html` → "counselling" (27,100/month opportunity)
2. `virtual-therapy-ontario.html` → "virtual therapy"
3. `online-mental-health-support-ontario.html` → "mental health support"

### **Week 2: Medium-Impact Pages (Tier 2)**
4. `same-day-virtual-therapy-ontario.html` → "same day therapy"
5. `mental-health-northern-ontario.html` → "mental health services"
6. `therapist-available-today-ontario.html` → "therapist available today"

### **Week 3: Remaining Pages & Optimization**
7. Complete Tier 2 and Tier 3 fixes
8. Update internal linking sitewide
9. Monitor and optimize based on early results

---

## 📊 **EXPECTED OUTCOMES**

### **Traffic Impact:**
- **27,100/month** potential from "counselling" optimization
- **Additional volume** from "virtual therapy", "mental health" terms
- **Improved CTR** from relevant titles matching search intent

### **Business Impact:**
- **Higher quality traffic** from people actually searching these terms
- **Better conversion rates** from intent-matched keywords
- **Stronger SEO foundation** for future page creation

### **Timeline:**
- **Week 1**: Implement high-impact fixes
- **Week 2-3**: Complete remaining fixes
- **Week 4**: Monitor results and optimize
- **Month 2**: Measure full impact and iterate

---

**This PRD addresses the critical issue of targeting 0-volume keywords and repositions the site to capture real search demand while maintaining local relevance for the Ontario market.**
