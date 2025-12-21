# NextStep Therapy - Claude Skills

This directory contains custom Agent Skills built specifically for optimizing NextStep Therapy's SEO, content creation, and client acquisition.

## Installed Skills

### 1. ✅ meta-title-optimizer
**Status:** Complete (Expert Level)
**Purpose:** Generate CTR-optimized meta titles and descriptions
**Auto-triggers on:** "meta title", "meta description", "optimize for CTR", "improve SERP"
**Key features:**
- Follows NextStep formula (Service + Location | Differentiator | Brand)
- CRPO compliance built-in with auto-flagging
- Generates 5 variations with CTR scores (0-100)
- SERP preview simulation
- Mobile-safe length optimization (50-60 chars)
- Differentiators library with CRPO-safe options
- Python validation scripts included

### 2. ✅ seo-competitor-intelligence
**Status:** Complete (Expert Level)
**Purpose:** Reverse-engineer competitor pages, identify content gaps
**Auto-triggers on:** "competitor analysis", competitor URLs provided, "why am I not ranking"
**Key features:**
- Analyzes 3-5 competitors simultaneously
- E-E-A-T signal detection for YMYL content
- Schema markup audit (MedicalWebPage, FAQPage, LocalBusiness)
- Content gap identification with topic clustering
- Local SEO signal detection (Ontario-specific)
- Generates actionable "beat the competition" brief
- Seasonal opportunity detection

### 3. ✅ therapy-content-generator
**Status:** Complete (Expert Level)
**Purpose:** Generate YMYL-compliant therapy page content
**Auto-triggers on:** "create therapy page", "write content for [condition/city]"
**Key features:**
- Author byline: Jesse Cynamon, RP (CRPO #10979)
- E-E-A-T signals automatically included (4-checkpoint system)
- MedicalWebPage + FAQPage + LocalBusiness schema templates
- Pillar/cluster architecture with internal linking strategy
- Content freshness signals
- Ontario-specific content with local statistics
- 2000-2800 word targets based on competition
- Templates for service, location, student, professional pages
- Always requests Ahrefs data before generating

### 4. ✅ faq-schema-generator
**Status:** Complete (Expert Level)
**Purpose:** Generate FAQ sections with proper FAQPage schema
**Auto-triggers on:** "add FAQ", "FAQ schema", "improve rich snippets"
**Key features:**
- 10-12 questions per page (optimal for SERP features)
- 50-100 word answers (schema-optimized)
- JSON-LD FAQPage schema with full 10-question examples
- CRPO-compliant safe language patterns
- Templates by page type: anxiety, location, student, professional
- Validation instructions for Google Rich Results Test
- Healthcare sites still eligible for FAQ rich results

### 5. ✅ keyword-research
**Status:** Complete (Expert Level)
**Purpose:** Identify high-value, low-competition keywords
**Auto-triggers on:** "keyword research", "what keywords should I target"
**Key features:**
- Priority score formula: (Volume × 0.30) + (Difficulty × 0.35) + (Intent × 0.20) + (Value × 0.15)
- Quick win criteria: difficulty < 40, volume > 50
- Cannibalization detection methodology
- Topic cluster mapping with pillar/cluster architecture
- Ontario therapy keyword database with difficulty estimates
- Seasonal trend awareness (Jan=SAD, Sep=university)
- Tiered keyword priority system (Tier 1-3)
- Always requests Ahrefs/GSC data

### 6. ✅ conversion-optimizer
**Status:** Complete (Expert Level)
**Purpose:** Optimize CTA copy for higher conversions
**Auto-triggers on:** "CTA", "conversion rate", "improve button text", "more bookings"
**Key features:**
- Therapy-adapted PAS, AIDA, BAB frameworks (not aggressive)
- Hero section optimization template with trust signals
- CTA button copy tested effective vs. too pushy
- A/B test variation generation (5 variations per CTA)
- Conversion scoring algorithm (0-100 with rubric)
- CRPO compliance built-in (no testimonials, no guarantees)
- 2024 therapy conversion benchmarks (3% avg, 4%+ optimized)
- Friction reduction checklist

### 7. ✅ positioning-angles-therapy
**Status:** Complete (Expert Level)
**Purpose:** Find CRPO-compliant positioning angles for therapy services
**Auto-triggers on:** "find angles for [service]", "how should I position", "what's the hook", "differentiate this"
**Key features:**
- CRPO compliance filter on every angle generated
- 3-5 positioning options with headline directions
- Therapy-specific angle types (Relational, Availability, Relatability, Anti-Expert, Specificity, Integration)
- Process-focused language (no outcome guarantees)
- Forbidden angles list (CRPO violations documented)
- Market sophistication assessment (Schwartz awareness levels)
- Pre-built angles for anxiety, professional, student pages

### 8. ✅ email-welcome-sequence-therapy
**Status:** Complete (Expert Level)
**Purpose:** Create CRPO-compliant welcome email sequences (no sales pressure)
**Auto-triggers on:** "create welcome sequence", "nurture new leads", "reduce no-shows", "warm up cold leads"
**Key features:**
- 5-7 email welcome sequence (no aggressive sales sequences)
- Education-first approach (what to expect in therapy)
- Jesse's personal story template
- Common questions answered (FAQ email)
- Gentle reminder emails (no guilt trips, no urgency)
- Crisis resources included
- Soft CTAs ("ready when you are")
- Unsubscribe compliance built-in

### 9. ✅ lead-magnet-therapy
**Status:** Complete (Expert Level)
**Purpose:** Create CRPO-compliant lead magnets (no diagnostic assessments)
**Auto-triggers on:** "create lead magnet", "build email list", "free resource ideas", "content upgrade"
**Key features:**
- 6 therapy-safe lead magnet types (decision framework, skill worksheet, email mini-course, resource library, explainer guide, video workshop)
- NO diagnostic quizzes or psychological assessments
- Educational PDF guide templates
- Landing page copy structure
- Email delivery sequence (3 emails)
- CRPO compliance checklist for lead magnets
- Crisis resource disclaimer templates
- Lead magnet concepts by audience (students, professionals, men's mental health, general anxiety)

### 10. ✅ direct-response-copy-therapy
**Status:** Complete (Expert Level)
**Purpose:** Write CRPO-compliant therapy copy that converts without pressure
**Auto-triggers on:** "write copy for [service]", "help me sell [service]", "make this convert", "write landing page"
**Key features:**
- 40% tone reduction from traditional direct response
- CRPO compliance filter (mandatory for all output)
- Therapy-adapted PAS (Problem→Agitate→Solution) - validates, doesn't amplify
- Empathetic opening lines (not dramatic or pushy)
- Trust-building elements without bragging
- Therapy-appropriate headline formulas
- Service page template (CRPO-compliant)
- Common therapy copy mistakes and fixes
- AI detection avoidance built-in

### 11. ✅ brand-voice-therapy
**Status:** Complete (Expert Level)
**Purpose:** Apply Jesse Cynamon's Voice DNA to ensure all content sounds authentically like him
**Auto-triggers on:** "check voice match", "sounds like AI", "doesn't sound like me", "voice consistency", writing any content
**Key features:**
- Complete 5-layer Voice DNA reference (condensed from 545 lines)
- Apply Mode: Uses voice patterns when writing content
- Verify Mode: 7-question checklist for checking existing content
- Voice Formula: Disclaimer → Concrete example → Theory → Authority → Circle back → Check-in
- CRPO-safe voice guardrails (detects outcome promises disguised as voice)
- Signature phrases library ("WITH the client, not ahead of the client")
- Red flag detection for voice breaks
- Jesse's core tensions as marketing features (aspiration vs. reality)
- Read-aloud test guidance

### 12. ✅ therapy-orchestrator
**Status:** Complete (Expert Level)
**Purpose:** Master coordinator that routes users to correct skills with proper context
**Auto-triggers on:** "help me with [ambiguous]", "where do I start", "what should I do first", complex multi-skill requests
**Key features:**
- Diagnostic intake questions (4 quick questions to route correctly)
- Complete skill registry with dependency mapping (12 skills across 5 layers)
- Context Paradox rules (selective context passing - critical for output quality)
- State tracking template for session progress
- Handoff protocol format for skill-to-skill transfers
- 5 pre-built therapy workflows (New Page, Optimize, Email List, Research, Refresh)
- Quick routing reference table
- Prevents context overload that degrades AI output
- Anti-patterns documentation (what NOT to do)

## Development Status

### All Skills Complete ✅

| Skill | Status | Expert Level |
|-------|--------|--------------|
| meta-title-optimizer | ✅ Complete | Yes - CTR scoring, CRPO compliance |
| seo-competitor-intelligence | ✅ Complete | Yes - E-E-A-T analysis, gap detection |
| therapy-content-generator | ✅ Complete | Yes - 2000+ word YMYL content + Humanize |
| faq-schema-generator | ✅ Complete | Yes - Schema validation, templates |
| keyword-research | ✅ Complete | Yes - Priority scoring, cannibalization |
| conversion-optimizer | ✅ Complete | Yes - Adapted frameworks for therapy |
| positioning-angles-therapy | ✅ Complete | Yes - CRPO-compliant angles, no outcomes |
| email-welcome-sequence-therapy | ✅ Complete | Yes - 5-7 emails, education-first |
| lead-magnet-therapy | ✅ Complete | Yes - No assessments, 6 safe types |
| direct-response-copy-therapy | ✅ Complete | Yes - 40% tone reduction, CRPO filters |
| brand-voice-therapy | ✅ Complete | Yes - 5-layer Voice DNA, verify mode |
| therapy-orchestrator | ✅ Complete | Yes - Context Paradox, 5 workflows |

### Optional Future Enhancements

Based on research, these additional skills could be valuable:
- **internal-linking-optimizer** - Automate pillar/cluster link strategy
- **content-freshness-auditor** - Identify stale pages needing updates
- **gbp-optimizer** - Google Business Profile optimization
- **local-citation-checker** - NAP consistency across directories

## CRPO Compliance

**ALL skills include built-in CRPO compliance checks:**

### Prohibited Content (Auto-flagged):
- ❌ Testimonials from clients
- ❌ Outcome guarantees
- ❌ Unverifiable superlatives ("best", "top-rated")
- ❌ Misleading claims

### Required Elements (Auto-included):
- ✅ Jesse Cynamon, RP (CRPO #10979)
- ✅ Factual, verifiable statements only
- ✅ Professional tone
- ✅ Evidence-based language

## Skill Workflow & Integration

### When to Use Which Skill

**Creating a New Service Page:**
```
1. keyword-research → Validate keyword, check difficulty
2. positioning-angles-therapy → Find 3-5 angle options
3. seo-competitor-intelligence → Analyze top 5 competitors
4. direct-response-copy-therapy → Write hero section + CTAs
5. therapy-content-generator → Write full page (2000+ words)
6. faq-schema-generator → Add FAQ section with schema
7. meta-title-optimizer → Optimize title + meta description
```

**Building Email List:**
```
1. lead-magnet-therapy → Create concept (guide, mini-course, worksheet)
2. direct-response-copy-therapy → Write landing page copy
3. email-welcome-sequence-therapy → Set up 5-7 email nurture
```

**Optimizing Existing Page:**
```
1. meta-title-optimizer → Check/improve title + description
2. conversion-optimizer → Improve CTAs and hero section
3. faq-schema-generator → Add/expand FAQ section
4. therapy-content-generator (Humanize) → Rewrite to sound less AI
```

**Competitor Strategy:**
```
1. seo-competitor-intelligence → Analyze competitor pages
2. keyword-research → Find gaps they're missing
3. positioning-angles-therapy → Find unique angle to differentiate
4. therapy-content-generator → Create superior content
```

## Usage Examples

### Meta Title Optimization
```
User: "Optimize the meta title for anxiety-therapy-ontario.html"

Skill activates: meta-title-optimizer
Output: 5 CTR-scored title variations + meta descriptions
```

### Positioning a Service
```
User: "Find positioning angles for professional burnout therapy"

Skill activates: positioning-angles-therapy
Output: 3-5 angle options (Relational, Availability, Specificity, etc.)
```

### Competitor Analysis
```
User: "Why is [competitor URL] outranking me for 'depression therapy ontario'?"

Skill activates: seo-competitor-intelligence
Output: Content gap analysis + actionable brief
```

### Content Creation
```
User: "Create a therapy page for anxiety in Sudbury"

Skill activates: therapy-content-generator
Output: 2500+ word YMYL-compliant page with schema
```

### Writing Persuasive Copy
```
User: "Write a hero section for my ACT therapy page"

Skill activates: direct-response-copy-therapy
Output: CRPO-compliant hero with empathetic tone, trust signals, CTA
```

### Building Email Nurture
```
User: "Create a welcome sequence for new contact form submissions"

Skill activates: email-welcome-sequence-therapy
Output: 5-7 email sequence (education-focused, no pressure)
```

### Lead Magnet Creation
```
User: "I want to create a free guide to build my email list"

Skill activates: lead-magnet-therapy
Output: CRPO-safe lead magnet concept + landing page structure
```

## Research Foundation

All skills built on 2024 SEO research:
- Meta titles: [Lyon Content CTR Guide](https://lyoncontentagency.com/how-to-write-meta-titles-that-increase-ctrs/)
- YMYL/E-E-A-T: [Healthcare E-E-A-T Guide](https://healthcaresuccess.com/blog/healthcare-marketing/google-e-a-t-and-healthcare-content-how-to-deliver-the-quality-google-demands.html)
- Schema markup: [Google FAQPage Documentation](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- Competitor analysis: [Backlinko SEO Competitor Analysis](https://backlinko.com/seo-competitor-analysis)
- CRPO rules: [CRPO Advertising Standards](https://crpo.ca/practice-standards/business-practices/advertising/)

## Skill Architecture

Each skill follows the progressive disclosure model:

**Level 1:** Metadata (always loaded)
- `name` and `description` in YAML frontmatter
- ~100 tokens

**Level 2:** Instructions (loaded when triggered)
- Main SKILL.md workflow
- <5k tokens

**Level 3:** Resources (loaded as needed)
- Scripts (Python)
- Data files (YAML/CSV)
- Templates
- Zero tokens until accessed

## Testing

### Manual Testing
```bash
# Test meta title validator
python .claude/skills/meta-title-optimizer/scripts/validate_title.py "Anxiety Therapy Ontario | Same-Week Sessions | NextStep" "anxiety therapy ontario"

# Test CTR scorer
python .claude/skills/meta-title-optimizer/scripts/ctr_scorer.py "Virtual Therapy Ontario | CRPO Registered | NextStep" "therapy ontario"
```

### Integration Testing
Skills automatically activate based on conversation triggers. No manual invocation required.

## Maintenance

### Monthly Tasks
- [ ] Update keyword research data
- [ ] Review CRPO compliance rules for changes
- [ ] Add new high-performing title examples
- [ ] Update CTR benchmarks with GSC data

### Quarterly Tasks
- [ ] Audit skill effectiveness (track CTR improvements, ranking changes)
- [ ] Refine scoring algorithms based on results
- [ ] Add new competitor analysis templates

## Contributing

When adding new skills:
1. Follow the existing structure (SKILL.md + scripts/ + data/)
2. Include CRPO compliance checks
3. Document triggers clearly in description
4. Add to CLAUDE.md auto-trigger section
5. Test with real NextStep content before deployment

## Support

For skill-related questions:
- Check CLAUDE.md for trigger phrases
- Review individual SKILL.md files for workflows
- Test scripts directly for debugging
- Track performance in Google Search Console

## Recent Updates (December 2024)

### December 20, 2024 - Voice & Orchestration Layer
**Added 2 new skills adapted from Vibe Marketer Skills Pack:**
- brand-voice-therapy (applies Jesse's 545-line Voice DNA, verify mode)
- therapy-orchestrator (master coordinator with Context Paradox awareness)

**Key innovations:**
- **Context Paradox** - Selective context passing prevents output degradation
- **Voice DNA Integration** - Connects to AAA Framework voice discovery
- **5 Pre-Built Workflows** - New Page, Optimize, Email List, Research, Refresh
- **State Tracking** - Session-based progress tracking across skills

**Skills Not Adapted from Creative Pack (Why):**
- ai-creative-strategist, ai-image-generation, ai-product-photo, ai-product-video, ai-social-graphics, ai-talking-head - Therapy marketing is text-based, CRPO limits visual claims

---

### December 17, 2024 - Vibe Marketer Skills Integration
**Added 4 new skills adapted from Vibe Marketer Skills Pack:**
- positioning-angles-therapy (CRPO-compliant positioning)
- email-welcome-sequence-therapy (welcome sequence only, no sales)
- lead-magnet-therapy (no diagnostic assessments)
- direct-response-copy-therapy (40% tone reduction, CRPO filters)

**Enhanced existing skill:**
- therapy-content-generator: Added "Humanizing Therapy Content" section (anti-AI detection from Vibe's seo-content Phase 5)

**Documentation:**
- Created VIBE-SKILLS-ADAPTED-README.md (comprehensive adaptation guide)
- Updated CLAUDE.md with skill workflows
- Updated this README with integration workflows

### Skills Not Adapted (Why)
- **content-atomizer** - Therapy doesn't fit TikTok/short-form, CRPO limits short claims
- **newsletter** - Not priority for therapy practice, email sequences more valuable
- **seo-content** - Already covered by therapy-content-generator, only merged Humanize section

---

**Last Updated:** December 20, 2024
**Skills Count:** 12 (all complete at expert level)
**Total Development Time Saved:** Estimated 30-40 hours/month
**Research Sources:** 20+ therapy SEO, conversion optimization, YMYL compliance, and direct response sources
