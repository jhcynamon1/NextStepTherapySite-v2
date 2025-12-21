# Claude Skills - Quick Reference Guide

**Last Updated:** December 17, 2024

---

## When Claude Should Use Skills (Auto-Trigger Guide)

### 🔍 SEO & Research Triggers

| User Says... | Claude Uses... |
|-------------|----------------|
| "Optimize meta title" | meta-title-optimizer |
| "Why isn't this ranking?" | seo-competitor-intelligence |
| "What keywords should I target?" | keyword-research |
| "Research this competitor" | seo-competitor-intelligence |

### ✍️ Content Creation Triggers

| User Says... | Claude Uses... |
|-------------|----------------|
| "Create a therapy page" | 1. keyword-research<br>2. positioning-angles-therapy<br>3. therapy-content-generator |
| "Write content for [city/condition]" | therapy-content-generator |
| "Add FAQ section" | faq-schema-generator |
| "This sounds too AI" | therapy-content-generator (Humanize) |

### 🎯 Marketing & Conversion Triggers

| User Says... | Claude Uses... |
|-------------|----------------|
| "How should I position this?" | positioning-angles-therapy |
| "Write copy for [service]" | 1. positioning-angles-therapy<br>2. direct-response-copy-therapy |
| "Improve conversions" | conversion-optimizer |
| "People aren't booking" | 1. conversion-optimizer<br>2. direct-response-copy-therapy |

### 📧 Email & Lead Gen Triggers

| User Says... | Claude Uses... |
|-------------|----------------|
| "Build my email list" | 1. lead-magnet-therapy<br>2. direct-response-copy-therapy<br>3. email-welcome-sequence-therapy |
| "People ghost after inquiry" | email-welcome-sequence-therapy |
| "Create a free guide" | lead-magnet-therapy |
| "Reduce no-shows" | email-welcome-sequence-therapy |

---

## Complete Workflow Examples

### Creating a New Service Page (Full Flow)

```
User: "Create an anxiety therapy page for Toronto"

Claude should automatically:
1. keyword-research → Validate "anxiety therapy toronto"
2. positioning-angles-therapy → Generate 3-5 angles
3. seo-competitor-intelligence → Analyze top 5 competitors
4. [Ask user to pick angle]
5. direct-response-copy-therapy → Write hero + CTAs
6. therapy-content-generator → Write full 2500-word page
7. faq-schema-generator → Add FAQ section
8. meta-title-optimizer → Optimize title/meta
9. [Present complete page]
```

### Building Email Funnel (Full Flow)

```
User: "I want to build my email list"

Claude should automatically:
1. lead-magnet-therapy → Generate 3-5 concepts
2. [Ask user to pick concept]
3. direct-response-copy-therapy → Write landing page
4. email-welcome-sequence-therapy → Create 5-7 email sequence
5. [Present complete funnel]
```

### Optimizing Existing Page (Full Flow)

```
User: "This page isn't converting well"

Claude should automatically:
1. meta-title-optimizer → Check title/meta
2. conversion-optimizer → Audit CTAs
3. therapy-content-generator (Humanize) → Check if sounds AI
4. faq-schema-generator → Check FAQ section
5. [Present recommendations with priorities]
```

---

## Skill Capabilities Summary

| Skill | Primary Output | CRPO-Compliant | Auto-Triggers |
|-------|---------------|----------------|---------------|
| **meta-title-optimizer** | 5 title variations + CTR scores | ✅ Yes | "meta title", "optimize title" |
| **keyword-research** | Priority-scored keyword list | ✅ Yes | "keyword research", "what keywords" |
| **seo-competitor-intelligence** | Content gap analysis | ✅ Yes | competitor URLs, "why not ranking" |
| **therapy-content-generator** | 2000+ word page + schema | ✅ Yes | "create page", "write content" |
| **faq-schema-generator** | 10-12 Q&As + JSON-LD | ✅ Yes | "add FAQ", "FAQ schema" |
| **conversion-optimizer** | CTA variations + scores | ✅ Yes | "CTA", "improve conversions" |
| **positioning-angles-therapy** | 3-5 positioning angles | ✅ Yes | "how should I position", "find angle" |
| **direct-response-copy-therapy** | Hero/CTA copy (CRPO-safe) | ✅ Yes | "write copy", "make this convert" |
| **lead-magnet-therapy** | Lead magnet concepts | ✅ Yes | "build email list", "free guide" |
| **email-welcome-sequence-therapy** | 5-7 email sequence | ✅ Yes | "welcome sequence", "nurture leads" |

---

## CRPO Compliance Across All Skills

### ✅ Always Allowed
- Factual service descriptions
- Credentials (RP, CRPO #10979)
- Therapeutic approaches (ACT, CBT)
- Appointment availability
- Geographic service area
- Process descriptions

### ❌ Always Prohibited
- Outcome guarantees
- Testimonials
- Success rates (unless published research)
- Superlatives ("best", "top")
- Before/after transformations
- Urgency/scarcity tactics

---

## Skill Files Location

```
.claude/skills/
├── meta-title-optimizer/
├── keyword-research/
├── seo-competitor-intelligence/
├── therapy-content-generator/        ← Enhanced with Humanize section
├── faq-schema-generator/
├── conversion-optimizer/
├── positioning-angles-therapy/       ← NEW (Vibe adapted)
├── direct-response-copy-therapy/     ← NEW (Vibe adapted)
├── lead-magnet-therapy/              ← NEW (Vibe adapted)
├── email-welcome-sequence-therapy/   ← NEW (Vibe adapted)
├── README.md                         ← Full documentation
├── VIBE-SKILLS-ADAPTED-README.md     ← Vibe adaptation guide
└── SKILLS-QUICK-REFERENCE.md         ← This file
```

---

## Documentation Files

| File | Purpose |
|------|---------|
| **CLAUDE.md** | Main project guide + skill triggers |
| **.claude/skills/README.md** | Complete skill documentation |
| **VIBE-SKILLS-ADAPTED-README.md** | Vibe Marketer adaptations explained |
| **SKILLS-QUICK-REFERENCE.md** | This quick reference (triggers + workflows) |

---

## Key Differences: Vibe vs NextStep Adaptations

| Vibe Original | NextStep Therapy |
|---------------|------------------|
| Outcome-focused angles | Process-focused angles |
| Urgency/scarcity tactics | Patient, calm tone |
| Sales sequences | Education-first nurture |
| Diagnostic assessments | Decision frameworks only |
| Aggressive persuasion | Empathetic trust-building |
| General direct response | 40% tone reduction + CRPO filters |

---

## When NOT to Use Skills

**Don't use skills for:**
- Basic file reading (use Read tool)
- Simple code questions
- General conversation
- Tasks outside therapy/marketing context

**Do use skills for:**
- ANY SEO work
- ANY content creation
- ANY marketing/positioning
- ANY copywriting
- ANY conversion optimization

---

**Quick Tip:** When in doubt, use a skill. It's better to over-utilize skills than under-utilize them. Skills have built-in CRPO compliance and therapy-specific knowledge that generic responses lack.
