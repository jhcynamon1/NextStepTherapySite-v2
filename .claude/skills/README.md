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

## Development Status

### All Skills Complete ✅

| Skill | Status | Expert Level |
|-------|--------|--------------|
| meta-title-optimizer | ✅ Complete | Yes - CTR scoring, CRPO compliance |
| seo-competitor-intelligence | ✅ Complete | Yes - E-E-A-T analysis, gap detection |
| therapy-content-generator | ✅ Complete | Yes - 2000+ word YMYL content |
| faq-schema-generator | ✅ Complete | Yes - Schema validation, templates |
| keyword-research | ✅ Complete | Yes - Priority scoring, cannibalization |
| conversion-optimizer | ✅ Complete | Yes - Adapted frameworks for therapy |

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

## Usage Examples

### Meta Title Optimization
```
User: "Optimize the meta title for anxiety-therapy-ontario.html"

Skill activates: meta-title-optimizer
Output: 5 CTR-scored title variations + meta descriptions
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

---

**Last Updated:** December 9, 2024
**Skills Count:** 6 (all complete at expert level)
**Total Development Time Saved:** Estimated 20-30 hours/month
**Research Sources:** 15+ therapy SEO, conversion optimization, and YMYL compliance sources
