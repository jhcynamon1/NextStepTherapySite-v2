# AI Search Optimization (AIO/GEO) Guide

## What Makes Pages Get Recommended by AI Search Engines

Based on research and analysis of NextStep Therapy pages that receive AI referrals.

### Key Success Factors

1. **FAQPage Schema Markup** - All top AI-referred pages have structured FAQ sections with JSON-LD schema
2. **Author Credentials Visible** - "By Jesse Cynamon, RP (CRPO #10979)" builds E-E-A-T trust
3. **Comprehensive Topic Coverage** - Deep dives, not surface-level content
4. **"Snippable" Sentences** - Direct, quotable definitions AI can extract verbatim
5. **Clear H2/H3 Structure** - Logical hierarchy AI can parse
6. **Specific Numbers/Stats** - Concrete details, not vague claims

### Why AI Engines Recommend These Pages

- AI looks for passages it can **lift verbatim** into answers
- FAQs map directly to conversational AI queries
- E-E-A-T signals (credentials, citations) build trust
- Schema markup helps AI understand entities and relationships
- Comprehensive content beats thin content every time
- Fresh, updated content is prioritized (update quarterly)

---

## AI Optimization Checklist for New Pages

Use this checklist when creating or optimizing pages:

- [ ] **Snippable Definition** - First paragraph should be a clear, quotable definition (e.g., "Anxiety therapy is professional mental health treatment that...")
- [ ] **FAQ Section with Schema** - 3-5 questions that people ask AI, with FAQPage JSON-LD
- [ ] **Author Byline** - "By Jesse Cynamon, RP (CRPO #10979)" near the top
- [ ] **Lead with Direct Answer** - First 1-2 sentences should be copy-paste ready for AI
- [ ] **Bullet Points/Lists** - AI loves structured content
- [ ] **H2/H3 Match Questions** - "What is...?", "How does...?", "Why...?"
- [ ] **Specific Stats** - Include concrete numbers (e.g., "60-80% of people experience...")
- [ ] **Updated Date** - Show "Last Updated: [Month Year]" for freshness signals

---

## Snippable Content Template

**Before (hard for AI to quote):**
> Many people struggle with anxiety in their work life, feeling overwhelmed and stressed.

**After (AI-friendly, quotable):**
> **Workplace anxiety is persistent fear or worry about job performance, relationships with colleagues, or career security.** It affects approximately 40% of professionals and can manifest as physical symptoms, avoidance behaviors, and decreased productivity. Research shows that evidence-based therapies like CBT and ACT can reduce workplace anxiety symptoms by 50-70% within 12-20 sessions.

### Key Elements:
1. Bold definition sentence
2. Specific statistic
3. Concrete symptoms/examples
4. Research-backed claim with numbers

---

## Pages Getting AI Referrals (December 2024)

| Page | AI Clicks | Why It Works |
|------|-----------|--------------|
| / (homepage) | 3 | Brand authority, comprehensive |
| /virtual-therapy-ontario.html | 3 | Extensive FAQ schema, specific answers |
| /therapist-toronto.html | 2 | FAQ schema, credentials visible |
| /performance-anxiety-therapy-ontario.html | 2 | Niche topic, comprehensive coverage |
| /anxiety-therapy-ontario.html | 1 | FAQ schema, clear structure |
| /mens-therapy-toronto.html | 1 | Niche focus, specific audience |
| /university-grade-anxiety-when-b-feels-like-failure.html | 1 | Deep topic coverage, quotable content |

---

## CTA Button Best Practices

**Always use `btn btn-primary` class for CTA buttons in `.cta-box` sections.**

The `btn-light` class does not exist in the CSS and will render buttons invisible on navy backgrounds.

```html
<!-- Correct -->
<a href="..." class="btn btn-primary">Schedule 15-Min Consultation</a>

<!-- Wrong - button will be invisible -->
<a href="..." class="btn btn-light">Schedule 15-Min Consultation</a>
```

---

## Sources

- Microsoft Advertising: Optimizing Content for AI Search Answers
- LocalFalcon: Best Practices for AI Search Optimization 2025
- Google Developers: Succeeding in AI Search
- 20North Marketing: Best Practices for AI Visibility SEO



