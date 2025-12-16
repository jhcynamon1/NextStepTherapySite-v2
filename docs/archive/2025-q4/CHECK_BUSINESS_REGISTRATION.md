# How to Check Your Ontario Business Registration

## Option 1: Ontario Business Registry (OBR)
**Website**: https://www.ontario.ca/page/ontario-business-registry

**What to check**:
- If you registered a business name (like "Next Step Therapy")
- Your registration details
- Business name expiry date

**Note**: If you're operating as a sole proprietor under your own name (Jesse Cynamon), you may not need a separate business name registration.

---

## Option 2: CRPO Public Register
**Website**: https://www.crpo.ca/resources/registered-psychotherapist-status-check/

**What this shows**:
- Your CRPO registration (#10979)
- Your registered professional name
- Any registered business name you've submitted to CRPO

**Important**: CRPO requires you to use your name as it appears in their public register on official documents.

---

## Option 3: Check Old Documents
Look for:
- **Tax returns** (business name section)
- **Business bank account** application
- **Insurance documents** (professional liability)
- **CRPO registration certificate**
- **Initial business registration confirmation** (if you registered)

These will show if you registered a business name.

---

## Do You Need a Business Name Registration?

**You DON'T need one if**:
- Operating as "Jesse Cynamon, RP"
- Using your personal name for all services

**You DO need one if**:
- Operating as "Next Step Therapy"
- Want to use a business name on invoices/marketing

**Cost**: ~$60 for 5 years in Ontario

---

## For Schema Markup Purposes:

**We can use**:
```json
"name": "Next Step Therapy Ontario" (or just "Jesse Cynamon, RP")
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Ontario",
  "addressRegion": "ON",
  "addressCountry": "CA"
}
"telephone": "+14163062157"
"hasCredential": "CRPO #10979"
```

This is accurate whether or not you have a formal business name registration.
