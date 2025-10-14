# 🚨 SCHEMA MARKUP - CRITICAL CHECKLIST (ZERO TOLERANCE FOR ERRORS)

**CREATED:** October 14, 2025
**REASON:** Schema errors cost $2,625-$5,250/month in lost revenue + weeks of ranking recovery
**VERIFIED AGAINST:** Ontario Business Registry BIN 1001072925

---

## ⚠️ CRITICAL: READ THIS FIRST

**Schema errors are NOT minor issues. They cause:**
- ❌ Lost rich snippets in search results
- ❌ Google deindexing pages entirely
- ❌ Weeks/months of ranking recovery time
- ❌ Thousands in lost revenue per month

**ZERO TOLERANCE POLICY:**
- Every schema field MUST be correct
- Triple-check BEFORE deploying
- Test in Google Rich Results Test
- Audit regularly

---

## 📋 ONTARIO BUSINESS REGISTRY FACTS (BIN 1001072925)

**THESE ARE THE ONLY CORRECT VALUES - USE NOWHERE ELSE:**

```json
{
  "telephone": "+14163062157",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  }
}
```

### ⚠️ COMMON MISTAKES TO AVOID:

❌ **WRONG**: `"+1-416-306-2157"` (has hyphens)
✅ **CORRECT**: `"+14163062157"` (no hyphens, E.164 format)

❌ **WRONG**: `"addressLocality": "Burlington"` (page is about Burlington)
✅ **CORRECT**: `"addressLocality": "Toronto"` (business registered location)

❌ **WRONG**: `"addressLocality": "Ontario"` (province, not city)
✅ **CORRECT**: `"addressLocality": "Toronto"` (city name)

❌ **WRONG**: `"addressRegion": "Ontario"` (full name)
✅ **CORRECT**: `"addressRegion": "ON"` (2-letter code)

❌ **WRONG**: `"@type": "Physician"` (Jesse is NOT a medical doctor)
✅ **CORRECT**: `"@type": "Person"` (Registered Psychotherapist)

---

## 🎯 SCHEMA TYPE GUIDELINES

### **Person Schema (For Jesse Cynamon)**

```json
{
  "@type": "Person",
  "name": "Jesse Cynamon, RP",
  "jobTitle": "Registered Psychotherapist",
  "identifier": "CRPO #10979",
  "telephone": "+14163062157",
  "email": "jesse@nextsteptherapy.ca",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  }
}
```

**❌ NEVER USE:**
- `"@type": "Physician"` (medical doctors only)
- `"@type": "MedicalPractitioner"` (not applicable to RPs)
- `"@type": "Psychologist"` (different credential)

**✅ ALWAYS USE:**
- `"@type": "Person"` (correct for Registered Psychotherapist)

---

### **MedicalBusiness Schema**

```json
{
  "@type": "MedicalBusiness",
  "name": "Next Step Therapy",
  "telephone": "+14163062157",
  "email": "jesse@nextsteptherapy.ca",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "areaServed": {
    "@type": "State",
    "name": "Ontario"
  }
}
```

**REQUIRED FIELDS:**
- ✅ `telephone` (E.164 format, no hyphens)
- ✅ `address` (complete PostalAddress object)
- ✅ `address.addressLocality` (MUST be "Toronto")
- ✅ `address.addressRegion` (MUST be "ON")
- ✅ `address.addressCountry` (MUST be "CA")

---

### **LocalBusiness Schema**

```json
{
  "@type": "LocalBusiness",
  "@id": "https://nextsteptherapy.ca/#business",
  "name": "Next Step Therapy",
  "telephone": "+14163062157",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "priceRange": "$$",
  "areaServed": {
    "@type": "State",
    "name": "Ontario"
  }
}
```

**REQUIRED FIELDS:**
- ✅ `telephone` (E.164 format, no hyphens)
- ✅ `address` (complete PostalAddress object)
- ✅ `address.addressLocality` (MUST be "Toronto")
- ✅ `address.addressRegion` (MUST be "ON")
- ✅ `address.addressCountry` (MUST be "CA")

---

### **ProfessionalService Schema**

```json
{
  "@type": "ProfessionalService",
  "name": "Next Step Therapy",
  "telephone": "+14163062157",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  }
}
```

**REQUIRED FIELDS:**
- ✅ `telephone` (E.164 format, no hyphens)
- ✅ `address` (complete PostalAddress object)
- ✅ `address.addressLocality` (MUST be "Toronto")
- ✅ `address.addressRegion` (MUST be "ON")
- ✅ `address.addressCountry` (MUST be "CA")

---

## 🔍 VIRTUAL BUSINESS STRATEGY

**KEY CONCEPT:** For virtual-only businesses:
- `address` = **Registered business location** (Toronto - from Ontario Business Registry)
- `areaServed` = **Service delivery area** (varies by page - can be Ontario, specific cities, etc.)

**Example for Burlington page:**
```json
{
  "@type": "LocalBusiness",
  "name": "Next Step Therapy",
  "telephone": "+14163062157",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",      // ← Business registration location
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "areaServed": [
    {"@type": "City", "name": "Burlington"},  // ← Service area (page topic)
    {"@type": "City", "name": "Toronto"}
  ]
}
```

---

## ✅ PRE-DEPLOYMENT CHECKLIST

**BEFORE deploying ANY page with schema markup:**

### 1. **Manual Code Review**
- [ ] Phone number is `"+14163062157"` (no hyphens)
- [ ] addressLocality is `"Toronto"` (not Burlington, Ottawa, Hamilton, etc.)
- [ ] addressRegion is `"ON"` (not "Ontario")
- [ ] addressCountry is `"CA"`
- [ ] No `"@type": "Physician"` anywhere in the file
- [ ] Using `"@type": "Person"` for Jesse Cynamon
- [ ] No duplicate `"@type"` fields in same object

### 2. **Schema Validation**
- [ ] Copy entire schema block
- [ ] Paste into https://search.google.com/test/rich-results
- [ ] Verify **ZERO critical errors**
- [ ] Check warnings (address non-critical ones)
- [ ] Test mobile rendering

### 3. **Production Deployment**
- [ ] Run audit script: `/tmp/audit_localbusiness_v2.sh` (or appropriate script)
- [ ] Verify 100% pass rate
- [ ] Git commit with clear message
- [ ] Deploy to Vercel production
- [ ] Test live URLs in Google Rich Results Test

---

## 🛠️ AUDIT SCRIPTS

### **Audit All LocalBusiness Schemas**
```bash
#!/bin/bash
files=($(grep -l '"@type": "LocalBusiness"' *.html))

for file in "${files[@]}"; do
  telephone=$(grep -A 20 '"@type": "LocalBusiness"' "$file" | grep "telephone" | head -1 | sed 's/.*"telephone": "\([^"]*\)".*/\1/')
  locality=$(grep -A 20 '"@type": "LocalBusiness"' "$file" | grep "addressLocality" | head -1 | sed 's/.*"addressLocality": "\([^"]*\)".*/\1/')

  if [[ "$telephone" != "+14163062157" ]]; then
    echo "❌ $file - WRONG PHONE: $telephone"
  fi

  if [[ "$locality" != "Toronto" ]]; then
    echo "❌ $file - WRONG LOCALITY: $locality"
  fi
done
```

### **Find All Physician References**
```bash
grep -r '"@type": "Physician"' *.html
# Should return ZERO results
```

---

## 📊 SCHEMA ERROR HISTORY (LESSONS LEARNED)

### **October 14, 2025 - Complete Schema Audit**

**Errors Found:**
- 13 pages: Wrong phone format (+1-416-306-2157 instead of +14163062157)
- 17 pages: Missing addressLocality entirely
- 4 pages: Wrong addressLocality (Hamilton, Ottawa, London instead of Toronto)
- 10 pages: Using "Physician" instead of "Person"
- 1 page: Duplicate "@type": "PostalAddress"

**Impact:**
- Weeks of ranking decline
- Lost rich snippets
- Estimated revenue loss: $2,625-$5,250/month

**Fixes Applied:**
- All 48 pages corrected and verified
- 100% audit pass rate
- Deployed October 14, 2025

**Lesson:** Schema errors compound over time. Fix immediately, verify thoroughly, audit regularly.

---

## 🚨 RED FLAGS TO WATCH FOR

### **During Development:**
- ⚠️ Copy-pasting schema from old pages (may have errors)
- ⚠️ Using city name from page topic for addressLocality
- ⚠️ Adding hyphens to phone number for "readability"
- ⚠️ Using "Physician" because it sounds more professional
- ⚠️ Skipping schema validation "to save time"

### **During Audits:**
- ⚠️ Any addressLocality != "Toronto"
- ⚠️ Any telephone != "+14163062157"
- ⚠️ Any "@type": "Physician" references
- ⚠️ Missing address fields in business schemas
- ⚠️ Duplicate @type declarations

---

## 📚 REFERENCE DOCUMENTATION

**Official Schema.org Docs:**
- Person: https://schema.org/Person
- MedicalBusiness: https://schema.org/MedicalBusiness
- LocalBusiness: https://schema.org/LocalBusiness
- ProfessionalService: https://schema.org/ProfessionalService

**Testing Tools:**
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

**Business Registration:**
- Ontario Business Registry BIN: 1001072925
- CRPO Registration: #10979

---

## 🎯 WHEN TO USE EACH SCHEMA TYPE

| Schema Type | Use Case |
|------------|----------|
| **Person** | Jesse Cynamon (therapist profile) |
| **MedicalBusiness** | Homepage, main business pages |
| **LocalBusiness** | City-specific service pages |
| **ProfessionalService** | Service-specific pages (anxiety therapy, etc.) |
| **FAQPage** | Any page with 3+ FAQ questions |

---

## ✅ FINAL CHECKLIST

**Before marking ANY page as complete:**

- [ ] Schema validates with ZERO critical errors
- [ ] Phone: +14163062157 (no hyphens)
- [ ] addressLocality: "Toronto"
- [ ] addressRegion: "ON"
- [ ] No "Physician" references
- [ ] Using "Person" for Jesse Cynamon
- [ ] Tested in Google Rich Results Test
- [ ] Deployed and re-tested live URL

**Remember:** One schema error can cost thousands in revenue. Take the extra 2 minutes to verify everything is perfect.
