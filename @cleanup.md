# File Organization Cleanup Plan

**Created:** 2024-12-20
**Status:** In Progress
**Purpose:** Reorganize docs/data files for easier discovery by humans and agents

---

## New Folder Structure

```
/docs/
├── seo/
│   ├── strategies/           # Active SEO strategies, roadmaps, action plans
│   ├── keywords/
│   │   ├── ahrefs/           # Ahrefs exports
│   │   ├── gsc/              # Google Search Console data
│   │   └── research/         # Manual keyword research, analysis
│   ├── competitor-intel/     # Competitor analysis reports
│   ├── audits/               # Site audits, schema checks
│   ├── chrome-workflows/     # Claude Chrome extension workflows
│   └── archive/              # Superseded SEO docs only
│
├── branding/
│   ├── voice/                # Voice DNA, brand voice docs
│   ├── design/               # Design system, visual identity
│   └── archive/
│
├── content/
│   ├── calendars/            # Content calendars, schedules
│   ├── briefs/               # Content briefs, outlines
│   └── archive/
│
├── marketing/
│   ├── ppc/                  # PPC campaigns, landing pages
│   ├── email/                # Email sequences, nurture
│   └── archive/
│
├── research/
│   ├── market/               # Market analysis, competitor research
│   ├── customers/            # User research, personas
│   └── archive/
│
├── implementation/
│   ├── guides/               # How-to guides
│   ├── checklists/           # QA checklists
│   └── prds/                 # Product requirement docs
│
└── sessions/                 # Session summaries (archive when superseded)
    └── archive/

/data/
├── analytics/                # GA, tracking data
├── exports/                  # Raw data exports
└── client-tracking/          # Client source tracking
```

---

## Files Already Moved (Completed)

### SEO Strategies → `docs/seo/strategies/`
- [x] `SEO_90_DAY_ROADMAP.md`
- [x] `SEO_TURNAROUND_PRD_NOV_2025.md`
- [x] `SEO_AUDIT_ACTION_PLAN_NOV_11_2025.md`
- [x] `REALISTIC_RANKING_TIMELINE_NOV_16.md`
- [x] `BACKLINK_ACQUISITION_STRATEGY_NOV_2025.md`

### SEO Archive → `docs/seo/archive/`
- [x] `SEO_PROJECT_STATUS_NOV_4_2025.md`

### Competitor Intel → `docs/seo/competitor-intel/`
- [x] `SEO-COMPETITOR-INTELLIGENCE-DEC2025.md`
- [x] `STRATEGIC_FRAMEWORK_AUDIT_NOV_13.md`
- [x] `BORING_MARKETING_FRAMEWORK_AUDIT_NOV_14.md`

### Keyword Research → `docs/seo/keywords/research/`
- [x] All files from `research/keywords/*.md`
- [x] All files from `research/keywords/*.csv`
- [x] `keyword_research_nov_2025.csv`
- [x] `keyword-research-list-dec2024.md`

### Ahrefs Data → `docs/seo/keywords/ahrefs/`
- [x] `ahrefs-keywords.csv`

### SEO Audits → `docs/seo/audits/`
- [x] Files from `docs/archive/seo-audits/`
- [x] Files from root `audits/` folder

---

## Files To Move (Pending)

### Branding/Voice → `docs/branding/voice/`

| Current Location | File | New Location |
|------------------|------|--------------|
| `docs/` | `JESSE-VOICE-DNA-COMPLETE.md` | `docs/branding/voice/` |
| `docs/` | `Jesse-Voice-Discovery-Plan.md` | `docs/branding/voice/` |
| `docs/` | `Jesse-Brand-Discovery-Interview.md` | `docs/branding/voice/` |
| `docs/` | `AAA-Framework-Workshop-Transcript.md` | `docs/branding/voice/` |
| `docs/` | `AAA-Framework.md` | `docs/branding/voice/` |
| `docs/` | `VOICE-DISCOVERY-README.md` | `docs/branding/voice/` |
| `docs/` | `VOICE-PATTERNS-EMERGING.md` | `docs/branding/voice/` |

### Branding/Design → `docs/branding/design/`

| Current Location | File | New Location |
|------------------|------|--------------|
| `docs/` | `BRAND_DESIGN_SYSTEM.md` | `docs/branding/design/` |

### Content/Calendars → `docs/content/calendars/`

| Current Location | File | New Location |
|------------------|------|--------------|
| `docs/` | `CONTENT_CALENDAR_52_WEEKS_HYBRID_PATH.md` | `docs/content/calendars/` |
| `docs/` | `BLOG_CONTENT_CALENDAR_6_MONTHS_NOV_2025.md` | `docs/content/calendars/` |

### Content/Briefs → `docs/content/briefs/`

| Current Location | File | New Location |
|------------------|------|--------------|
| `docs/briefs/` | All files | `docs/content/briefs/` |
| `research/outlines/` | `01-spending-christmas-alone-outline.md` | `docs/content/briefs/` |
| `research/outlines/` | `02-grief-during-holidays-outline.md` | `docs/content/briefs/` |
| `research/outlines/` | `03-holiday-depression-outline.md` | `docs/content/briefs/` |
| `research/outlines/` | `04-january-blues-outline.md` | `docs/content/briefs/` |

### Marketing/PPC → `docs/marketing/ppc/`

| Current Location | File | New Location |
|------------------|------|--------------|
| `docs/ppc/` | All files | `docs/marketing/ppc/` |
| `docs/archive/` | `PPC_LANDING_PAGE_V1_COMPLETE.md` | `docs/marketing/ppc/archive/` |
| `docs/archive/` | `PPC_PAGE_REDESIGN_COMPLETE.md` | `docs/marketing/ppc/archive/` |

### Research/Market → `docs/research/market/`

| Current Location | File | New Location |
|------------------|------|--------------|
| `research/market/` | All files | `docs/research/market/` |
| `research/competitors/` | All files | `docs/research/market/competitors/` |
| `research/` | `business_model_overview_v1.md` | `docs/research/market/` |
| `research/` | `gap_analysis_prompt_strategy.md` | `docs/research/market/` |
| `research/` | `gemini_final_synthesis.md` | `docs/research/market/` |
| `research/` | `gemini_reports_context.md` | `docs/research/market/` |
| `research/` | `master_deep_research_prompt.md` | `docs/research/archive/` |
| `research/` | `final_red_team_prompt.md` | `docs/research/archive/` |
| `research/` | `alex_hormozi_prompt.md` | `docs/research/archive/` |
| `research/` | `full_context_review.md` | `docs/research/archive/` |
| `research/` | `holiday-keywords-ahrefs.md` | `docs/seo/keywords/research/` |
| `research/` | `holiday-symptom-keywords-ahrefs.md` | `docs/seo/keywords/research/` |

### Implementation/Guides → `docs/implementation/guides/`

| Current Location | File | New Location |
|------------------|------|--------------|
| `docs/guides/` | All files | `docs/implementation/guides/` |
| `docs/` | `FIRECRAWL_MCP_COMMANDS.md` | `docs/implementation/guides/` |
| `docs/` | `GOOGLE_BUSINESS_PROFILE_UPDATE_NOV_2025.md` | `docs/implementation/guides/` |

### Implementation/Checklists → `docs/implementation/checklists/`

| Current Location | File | New Location |
|------------------|------|--------------|
| `docs/checklists/` | All files | `docs/implementation/checklists/` |

### Implementation/PRDs → `docs/implementation/prds/`

| Current Location | File | New Location |
|------------------|------|--------------|
| `docs/archive/prds/` | All files | `docs/implementation/prds/` |
| `docs/` | `DECEMBER_2025_ACTION_PLAN.md` | `docs/implementation/prds/` |
| `docs/` | `PRD_CONVERSION_OPTIMIZATION_CRPO_COMPLIANT.md` | `docs/implementation/prds/` |
| `docs/` | `HONEST_TRAFFIC_PROJECTIONS.md` | `docs/implementation/prds/` |

### Sessions → `docs/sessions/`

| Current Location | File | New Location |
|------------------|------|--------------|
| `docs/archive/` | `SESSION_COMPLETE_*.md` | `docs/sessions/archive/` |
| `docs/archive/` | `DAY_*_PROGRESS_*.md` | `docs/sessions/archive/` |
| `docs/archive/` | `IMPLEMENTATION_COMPLETE_*.md` | `docs/sessions/archive/` |
| `docs/archive/` | `FRAMEWORK_*.md` | `docs/sessions/archive/` |
| `docs/archive/` | `CONVERSION_WORK_COMPLETE_TODAY.md` | `docs/sessions/archive/` |
| `docs/archive/` | `NOVEMBER_2025_SEO_PROGRESS.md` | `docs/sessions/archive/` |
| `docs/archive/` | `BORING_MARKETING_SESSION_SUMMARY_NOV_14-16.md` | `docs/sessions/archive/` |

### Archive Folders to Process

| Folder | Action |
|--------|--------|
| `docs/archive/2025-q3/` | Move to appropriate category archives |
| `docs/archive/2025-q4/` | Move to appropriate category archives |
| `docs/archive/october-2025/` | Move to appropriate category archives |
| `docs/archive/september-2025/` | Move to appropriate category archives |
| `docs/archive/keyword-research/` | Move to `docs/seo/keywords/archive/` |
| `docs/archive/strategies/` | Move to `docs/seo/archive/` |

---

## Files to Keep in Place

| File | Reason |
|------|--------|
| `docs/README.md` | Entry point for docs folder |
| `docs/seo/chrome-workflows/` | Already in correct location |
| `docs/seo/ai-search-optimization-guide.md` | Move to strategies |
| `docs/seo/meta-title-recommendations-dec2024.md` | Move to strategies |
| `docs/CLAUDE_SKILLS_RECOMMENDATIONS.md` | Move to `.claude/skills/` |
| `docs/JOB_POSTING_HEALTHCARE_COPYWRITER.md` | Keep or delete? |
| `docs/AUDIT_EXECUTIVE_SUMMARY.md` | Move to `seo/audits/` |

---

## Files to Delete (User Decision)

| File | Reason |
|------|--------|
| `docs/claude.md` | Duplicate of root CLAUDE.md |
| `docs/current/` | Empty or minimal - check contents |
| Old quarterly archive folders | After moving contents |

---

## Data Folder Cleanup

| Current | New Location |
|---------|--------------|
| `data/keywords/` | Remove (contents moved to docs/seo/keywords/) |
| `data/exports/` | Keep - raw data exports |
| `data/analytics/` | Keep - GA data |
| `data/client_source_tracking.csv` | Keep in place |
| `data/archive/` | Remove if empty |

---

## Root Research Folder Cleanup

After moving all files from `/research/` to `/docs/research/`:

| Folder | Action |
|--------|--------|
| `research/keywords/` | Remove (contents moved) |
| `research/market/` | Remove (contents moved) |
| `research/competitors/` | Remove (contents moved) |
| `research/outlines/` | Remove (contents moved) |
| `research/` | Remove entire folder |

---

## Commands to Execute

### Step 1: Move Branding Files
```bash
mv docs/JESSE-VOICE-DNA-COMPLETE.md docs/branding/voice/
mv docs/Jesse-Voice-Discovery-Plan.md docs/branding/voice/
mv docs/Jesse-Brand-Discovery-Interview.md docs/branding/voice/
mv docs/AAA-Framework-Workshop-Transcript.md docs/branding/voice/
mv docs/AAA-Framework.md docs/branding/voice/
mv docs/VOICE-DISCOVERY-README.md docs/branding/voice/
mv docs/VOICE-PATTERNS-EMERGING.md docs/branding/voice/
mv docs/BRAND_DESIGN_SYSTEM.md docs/branding/design/
```

### Step 2: Move Content Files
```bash
mv docs/CONTENT_CALENDAR_52_WEEKS_HYBRID_PATH.md docs/content/calendars/
mv docs/BLOG_CONTENT_CALENDAR_6_MONTHS_NOV_2025.md docs/content/calendars/
mv docs/briefs/* docs/content/briefs/
mv research/outlines/* docs/content/briefs/
```

### Step 3: Move Marketing Files
```bash
mv docs/ppc/* docs/marketing/ppc/
mkdir -p docs/marketing/ppc/archive
mv docs/archive/PPC_LANDING_PAGE_V1_COMPLETE.md docs/marketing/ppc/archive/
mv docs/archive/PPC_PAGE_REDESIGN_COMPLETE.md docs/marketing/ppc/archive/
```

### Step 4: Move Research Files
```bash
mv research/market/* docs/research/market/
mkdir -p docs/research/market/competitors
mv research/competitors/* docs/research/market/competitors/
mv research/business_model_overview_v1.md docs/research/market/
mv research/gap_analysis_prompt_strategy.md docs/research/market/
mv research/gemini_final_synthesis.md docs/research/market/
mv research/gemini_reports_context.md docs/research/market/
mv research/holiday-keywords-ahrefs.md docs/seo/keywords/research/
mv research/holiday-symptom-keywords-ahrefs.md docs/seo/keywords/research/
mv research/master_deep_research_prompt.md docs/research/archive/
mv research/final_red_team_prompt.md docs/research/archive/
mv research/alex_hormozi_prompt.md docs/research/archive/
mv research/full_context_review.md docs/research/archive/
```

### Step 5: Move Implementation Files
```bash
mv docs/guides/* docs/implementation/guides/
mv docs/checklists/* docs/implementation/checklists/
mv docs/archive/prds/* docs/implementation/prds/
mv docs/DECEMBER_2025_ACTION_PLAN.md docs/implementation/prds/
mv docs/PRD_CONVERSION_OPTIMIZATION_CRPO_COMPLIANT.md docs/implementation/prds/
mv docs/HONEST_TRAFFIC_PROJECTIONS.md docs/implementation/prds/
mv docs/FIRECRAWL_MCP_COMMANDS.md docs/implementation/guides/
mv docs/GOOGLE_BUSINESS_PROFILE_UPDATE_NOV_2025.md docs/implementation/guides/
```

### Step 6: Move Session Files
```bash
mv docs/archive/SESSION_COMPLETE_*.md docs/sessions/archive/
mv docs/archive/DAY_*_PROGRESS_*.md docs/sessions/archive/
mv docs/archive/IMPLEMENTATION_COMPLETE_*.md docs/sessions/archive/
mv docs/archive/FRAMEWORK_*.md docs/sessions/archive/
mv docs/archive/CONVERSION_WORK_COMPLETE_TODAY.md docs/sessions/archive/
mv docs/archive/NOVEMBER_2025_SEO_PROGRESS.md docs/sessions/archive/
mv docs/archive/BORING_MARKETING_SESSION_SUMMARY_NOV_14-16.md docs/sessions/archive/
```

### Step 7: Cleanup Remaining SEO Files
```bash
mv docs/seo/ai-search-optimization-guide.md docs/seo/strategies/
mv docs/seo/meta-title-recommendations-dec2024.md docs/seo/strategies/
mv docs/AUDIT_EXECUTIVE_SUMMARY.md docs/seo/audits/
mv docs/CLAUDE_SKILLS_RECOMMENDATIONS.md .claude/skills/
```

### Step 8: Clean Up Empty Folders
```bash
rmdir research/keywords research/market research/competitors research/outlines 2>/dev/null
rmdir research 2>/dev/null
rmdir data/keywords 2>/dev/null
rmdir docs/briefs docs/guides docs/checklists docs/ppc docs/current 2>/dev/null
rmdir docs/archive/seo-audits docs/archive/prds 2>/dev/null
```

---

## Post-Cleanup Verification

After all moves:

1. [ ] Run `find docs -type f -name "*.md" | wc -l` to count files
2. [ ] Verify no broken internal links
3. [ ] Update CLAUDE.md with new structure
4. [ ] Test that agents can find files correctly

---

## Update to CLAUDE.md

Add this section to CLAUDE.md after cleanup:

```markdown
## Documentation Structure

All documentation lives in `/docs/` organized by purpose:

### `/docs/seo/`
- `strategies/` - Active SEO strategies, roadmaps, timelines
- `keywords/ahrefs/` - Ahrefs exports
- `keywords/gsc/` - Google Search Console data
- `keywords/research/` - Manual keyword analysis
- `competitor-intel/` - Competitor analysis reports
- `audits/` - Site audits, schema validation
- `chrome-workflows/` - Claude Chrome extension workflows
- `archive/` - Superseded SEO docs

### `/docs/branding/`
- `voice/` - Jesse's Voice DNA, brand voice guidelines
- `design/` - Design system, visual identity
- `archive/` - Old branding docs

### `/docs/content/`
- `calendars/` - Content calendars, publishing schedules
- `briefs/` - Content briefs, blog outlines
- `archive/` - Old content plans

### `/docs/marketing/`
- `ppc/` - PPC campaigns, landing pages
- `email/` - Email sequences, nurture campaigns
- `archive/` - Old marketing docs

### `/docs/research/`
- `market/` - Market analysis, competitor deep dives
- `customers/` - User research, personas
- `archive/` - Old research

### `/docs/implementation/`
- `guides/` - How-to guides, tutorials
- `checklists/` - QA and launch checklists
- `prds/` - Product requirement documents

### `/docs/sessions/`
- Active session summaries
- `archive/` - Completed session logs

### `/data/`
- `analytics/` - Google Analytics exports
- `exports/` - Raw data exports
- `client_source_tracking.csv` - Client acquisition data
```

---

## Questions for User

1. **Delete `docs/JOB_POSTING_HEALTHCARE_COPYWRITER.md`?** (Seems outdated)
2. **Delete `docs/claude.md`?** (Duplicate of root CLAUDE.md)
3. **Move MANUS files to archive?** (Historical audits from Manus AI)
4. **What about quarterly folders in archive?** (2025-q3, 2025-q4 - distribute contents?)

---

*Ready to execute when approved. Run commands in order.*
