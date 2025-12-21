# Non-Critical Issues - PR Remediation Plan

**Date:** 2025-09-19
**Status:** Critical fixes completed ✅
**Next Phase:** PR creation for non-critical improvements

---

## ✅ CRITICAL FIXES COMPLETED

### Soft 404s Resolved
- **8 pages** removed from sitemap and redirected to 410.html
- Empty files deleted from repository
- All soft 404s now return proper 410 Gone responses
- **Impact:** Eliminated indexing of blank pages, improved crawl budget

---

## 📋 NON-CRITICAL ISSUES REQUIRING PRS

### Priority 1: Template Violations (42 pages)

Pages not using MANUS template with shared.min.css:

#### **High-Priority Service Pages (10 pages)**
1. `/counselling-ontario` - 1794 words, missing template
2. `/virtual-therapy-ontario` - 1529 words, missing template
3. `/addiction-therapy-toronto` - 1344 words, missing template
4. `/adhd-therapy-toronto` - 1811 words, missing template
5. `/anxiety-therapy-mississauga` - 1327 words, missing template
6. `/burlington-online-therapy` - 1170 words, missing template
7. `/cbt-therapy-techniques-ontario` - 1595 words, missing template
8. `/depression-therapy-hamilton` - 1476 words, missing template
9. `/depression-therapy-mississauga` - 1859 words, missing template
10. `/online-counselling-remote-workers` - 1148 words, missing template

#### **Location-Specific Pages (15 pages)**
1. `/anxiety-therapy-london-ontario` - 1477 words, missing CRPO + template
2. `/depression-therapy-london-ontario` - 1566 words, missing CRPO + template
3. `/executive-stress-management-therapy` - 1598 words, missing CRPO + template
4. `/virtual-therapy-effectiveness-research` - 1707 words, missing CRPO + template
5. `/student-mental-health-ontario` - 1655 words, missing CRPO + template
6. `/child-anxious-about-university` - 696 words, missing template
7. `/grief-counselling-toronto` - 1230 words, missing template
8. `/mens-mental-health-therapy-london-ontario` - 1227 words, missing template
9. `/online-therapy-burlington` - 1747 words, missing template
10. `/perfectionism-and-burnout-therapy-toronto` - 1431 words, missing template
11. `/therapist-toronto-depression` - 1798 words, missing template
12. `/toronto-anxiety-therapy` - 1803 words, missing template
13. `/trauma-counselling-toronto` - 1737 words, missing template
14. `/university-anxiety-therapy-ontario` - 1533 words, missing template
15. `/virtual-therapy-burlington` - 2440 words, missing template

#### **Comprehensive Q&A Pages (5 pages)**
1. `/life-transitions-qa-comprehensive` - 2709 words, missing template
2. `/therapist-mississauga-qa-comprehensive` - 3315 words, missing template
3. `/virtual-therapy-ontario-qa-comprehensive` - 3618 words, missing template
4. `/virtual-therapy-ontario-qa` - 940 words, missing template + insufficient content
5. `/workplace-stress-counselling-hamilton` - 1797 words, missing template

#### **Working Pages Needing Content Enhancement (12 pages)**
1. `/` - 2063 words, flagged as placeholder content
2. `/anxiety-therapy-ontario` - 2039 words, insufficient content
3. `/depression-therapy-ontario` - 2468 words, insufficient content
4. `/life-transitions` - 2402 words, insufficient content
5. `/counselling-services` - 2374 words, insufficient content
6. `/depression-therapy-ottawa` - 1432 words, insufficient content
7. `/faq` - 2055 words, insufficient content
8. `/first-year-university-anxiety` - 2243 words, insufficient content
9. `/mens-mental-health` - 2199 words, insufficient content
10. `/sunday-night-anxiety` - 2462 words, insufficient content
11. `/workplace-stress-burnout-therapy` - 2444 words, insufficient content
12. `/workplace-stress-therapy-ontario` - 2043 words, insufficient content

---

## 🎯 PR BATCHING STRATEGY

### **Batch 1: Core Service Template Fixes (5 pages)**
**PR Title:** `feat: Standardize core service pages to MANUS template`
- `/counselling-ontario`
- `/virtual-therapy-ontario`
- `/addiction-therapy-toronto`
- `/adhd-therapy-toronto`
- `/anxiety-therapy-mississauga`

### **Batch 2: Location-Specific Template Fixes (8 pages)**
**PR Title:** `feat: Apply MANUS template to location-specific therapy pages`
- `/anxiety-therapy-london-ontario`
- `/depression-therapy-london-ontario`
- `/depression-therapy-hamilton`
- `/depression-therapy-mississauga`
- `/grief-counselling-toronto`
- `/online-therapy-burlington`
- `/toronto-anxiety-therapy`
- `/trauma-counselling-toronto`

### **Batch 3: Specialized Services Template Fixes (7 pages)**
**PR Title:** `feat: MANUS template for specialized therapy services`
- `/cbt-therapy-techniques-ontario`
- `/executive-stress-management-therapy`
- `/perfectionism-and-burnout-therapy-toronto`
- `/therapist-toronto-depression`
- `/university-anxiety-therapy-ontario`
- `/virtual-therapy-burlington`
- `/workplace-stress-counselling-hamilton`

### **Batch 4: Content Enhancement (12 pages)**
**PR Title:** `feat: Enhance content quality to meet MANUS 2500+ word standard`
- All pages with insufficient content (<2500 words)
- Focus on expanding existing content while maintaining quality

### **Batch 5: CRPO Compliance (8 pages)**
**PR Title:** `feat: Add CRPO #10979 compliance to missing pages`
- `/anxiety-therapy-london-ontario`
- `/burlington-online-therapy`
- `/cbt-therapy-techniques-ontario`
- `/depression-therapy-london-ontario`
- `/executive-stress-management-therapy`
- `/student-mental-health-ontario`
- `/virtual-therapy-effectiveness-research`

---

## 🛠 IMPLEMENTATION REQUIREMENTS

### **MANUS Template Compliance**
Every page must include:
```html
<link rel="stylesheet" href="/shared.min.css">
<header class="header smart-sticky">
<div class="container">
<section class="hero">
```

### **Content Standards**
- **Minimum:** 2500+ words per page
- **CRPO Compliance:** "CRPO #10979" visible
- **Schema:** Valid JSON-LD structured data
- **Meta Tags:** Title, description, canonical
- **H1 Structure:** Single H1 per page

### **Quality Checklist Per PR**
- [ ] MANUS template structure implemented
- [ ] shared.min.css properly linked
- [ ] 2500+ word content requirement met
- [ ] CRPO #10979 compliance (where missing)
- [ ] Valid schema markup
- [ ] Single H1 tag present
- [ ] Complete meta tags
- [ ] Mobile responsiveness verified

---

## 📊 EXPECTED OUTCOMES

### **SEO Impact**
- **Template Standardization:** Improved Core Web Vitals
- **Content Enhancement:** Better search rankings
- **CRPO Compliance:** Regulatory compliance maintained
- **Schema Implementation:** Rich snippets potential

### **User Experience**
- **Consistent Design:** MANUS template across all pages
- **Better Performance:** Shared CSS optimization
- **Professional Appearance:** Standardized layout
- **Clear CTAs:** Consistent conversion paths

### **Technical Benefits**
- **Maintenance:** Easier to update/modify
- **Performance:** Optimized shared resources
- **Accessibility:** MANUS accessibility standards
- **SEO:** Consistent technical implementation

---

## ⏱ IMPLEMENTATION TIMELINE

- **Week 1:** Batches 1-2 (13 pages template fixes)
- **Week 2:** Batches 3-4 (19 pages template + content)
- **Week 3:** Batch 5 + QA (8 pages CRPO + testing)
- **Week 4:** Final validation and monitoring

**Total Pages to Fix:** 42 template violations + 12 content enhancements = **54 pages**

---

## 🎯 SUCCESS METRICS

### **Before (Current State)**
- 42 template violations
- 12 content quality issues
- 8 CRPO compliance gaps
- Inconsistent user experience

### **After (Target State)**
- 0 template violations ✅
- 0 content quality issues ✅
- 0 CRPO compliance gaps ✅
- Consistent MANUS experience ✅

---

*All critical soft 404 issues have been resolved. This plan addresses remaining non-critical improvements to achieve full MANUS compliance.*