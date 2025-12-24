---
name: Design Fix Plan Doc
overview: Create a comprehensive markdown document in /docs/ that catalogs all broken vs good pages, references relevant tools and skills for fixing them, and provides a clear action plan for Claude Code to follow.
todos:
  - id: create-plan-doc
    content: Create docs/DESIGN-FIX-PLAN.md with full audit and instructions
    status: pending
---

# Design Consistency Fix Plan

## Document to Create

Create [`docs/DESIGN-FIX-PLAN.md`](docs/DESIGN-FIX-PLAN.md) containing the full audit and fix instructions.---

## Content Structure

### 1. Problem Summary

- 71 pages have broken hero/body styling (old CSS classes with no definitions)
- 40 pages are correctly styled
- Root cause: Partial design update left pages in hybrid state

### 2. Good Pages Reference (40 total)

Tag these as "REFERENCE" - use as templates:

- [`index.html`](index.html) - Homepage (best reference)
- [`anxiety-therapy-ontario.html`](anxiety-therapy-ontario.html) - Service page template
- [`bay-street-burnout.html`](bay-street-burnout.html)
- [`imposter-syndrome-therapy.html`](imposter-syndrome-therapy.html)
- Plus 36 others listed

### 3. Broken Pages Inventory (71 total)

Organized by priority:

- **P0 - Critical (10)**: Main service pages, FAQ, costs
- **P1 - High (20)**: City pages, depression pages
- **P2 - Medium (25)**: Anxiety city pages, online therapy
- **P3 - Lower (16)**: Remaining service pages

### 4. Fix Instructions

- What to keep: schema, meta, tracking, copy, links
- What to replace: hero HTML structure, body section classes
- What to remove: duplicate font imports

### 5. Tools and Skills Reference

- **Firecrawl MCP**: `mcp_firecrawl-mcp_firecrawl_scrape` for live site verification
- **Browser MCP**: `mcp_cursor-ide-browser_browser_navigate`, `browser_snapshot` for visual testing
- **Reference Skills**: Point to [`CLAUDE.md`](CLAUDE.md) SEO Competitor Intelligence skill
- **Design Reference**: [`docs/branding/design/gemini-homepage-redesign/`](docs/branding/design/gemini-homepage-redesign/)

### 6. Verification Checklist

- Use Firecrawl to confirm live pages render correctly
- Use browser snapshot to check visual consistency
- Grep commands to verify no old classes remain

---