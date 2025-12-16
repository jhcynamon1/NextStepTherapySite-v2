# SEO Page Repair Prompt

You will receive a single broken URL from nextsteptherapy.ca (the BROKEN_URL). Your job is to fix or rebuild that page so it matches the site's existing design system, branding, tone, and CRPO compliance standards, and is fully SEO optimized—then deliver a preview link for approval and, upon approval, deploy via GitHub to Vercel.

## Inputs you can rely on
- BROKEN_URL: The exact URL to repair
- Reference docs (read and follow):
  - manus_seo_audit_findings.md
  - manus_seo_audit_critical_insights.md
  - manus_seo_ai_content_tools_evaluation.md
  - manus_final_execution_playbook.md
- Existing site pages and components (use to match layout, CSS, and tone)

## Assumptions and constraints
- Assume the project is a modern frontend hosted on Vercel with a GitHub repository. If the framework differs from Next.js, adapt the implementation accordingly and note your adjustments.
- Follow existing site templates, components, typography, spacing, and CSS/variables.
- Maintain accessibility (WCAG 2.1 AA), performance best practices, and mobile responsiveness.
- All content and UX must be CRPO-compliant (see Compliance Checklist below) and consistent with the site's brand voice.
- Do not introduce testimonials or unverifiable claims. Avoid superlatives and guarantees of outcomes.

## Your steps (show concise reasoning before final outputs)

### 1) Diagnose
- Check if the BROKEN_URL returns 404/410 or if the content is mismatched/placeholder.
- Infer the page intent from the URL structure and existing IA (e.g., service page, location page, therapist profile, blog, resource).
- Identify the closest matching live template/components and any existing related content to reuse.

### 2) Define the plan
- Decide "Fix in place" vs "Rebuild" with a brief rationale.
- Specify the target page type and its key elements (e.g., H1, hero, sections, CTAs, forms, FAQs, breadcrumbs, related content).

### 3) Create compliant, on-brand content
- Draft final copy that matches site tone and reading level, supports user intent, and adheres to CRPO rules.
- Include: clear H1 (≤60 chars), compelling intro, scannable H2/H3s, service details, who it helps, process/approach, benefits/limitations, FAQs if useful, and clear CTAs.
- Add emergency and limitations disclaimers where appropriate (see Compliance Checklist).
- Use inclusive, trauma-informed, non-alarmist language consistent with the site.

### 4) SEO and metadata
- Meta title (50–60 chars), meta description (140–160 chars), meta robots (index/follow as appropriate), canonical URL, Open Graph and Twitter tags, image alt text.
- If applicable: hreflang, pagination tags, noindex for thin/placeholder pages until ready.
- Internal links: add relevant cross-links and breadcrumbs consistent with site patterns; ensure descriptive anchor text.

### 5) Structured data (JSON-LD)
- Include appropriate types for the page:
  - WebPage (always)
  - BreadcrumbList (for all non-home pages)
  - Service (for service pages) and Organization/LocalBusiness wrapper for site-wide identity as appropriate
  - Article/BlogPosting for blog pages
  - FAQPage if FAQs present
- Validate fields (name, description, url, image, provider, areaServed, sameAs, address/geo if local).

### 6) Accessibility and performance
- Semantic headings, proper landmarks, label form controls, sufficient contrast, keyboard focus.
- Optimize images (responsive sizes, compression), lazy-load non-critical media, prefetch critical routes if framework supports it.
- Keep CLS low; avoid render-blocking assets; minify/treeshake.

### 7) Implementation details
- Identify the exact file(s) to add/modify to create/repair the route for BROKEN_URL.
- Use existing components and CSS/utilities; do not invent new design unless necessary.
- Add/update canonical tags, head metadata, schema, breadcrumbs, and internal links within the page file.
- If the URL should change, define 301 redirect rules to the new canonical URL (update next.config.js/vercel.json or the framework's routing config).

### 8) QA and testing
- Automated checks (where available): link validation, Lighthouse/perf snapshot, HTML validation, basic unit/render test for the page, visual regression snapshot against template.
- Manual checks: viewport responsiveness, keyboard navigation, copy proofread, schema validator output.
- List all tests executed with pass/fail and key scores.

### 9) Preview and approval
- Create a feature branch, commit changes with clear messages, open a PR.
- Provide a preview deployment link (prefer Vercel Preview URL). If not available, provide a temporary tunnel link to local dev.
- Await explicit approval before merging.

### 10) Deployment
- After approval, merge PR to main and confirm Vercel production deployment completion.
- Share the live URL and verify redirect/canonical behaviors.

## Compliance Checklist (CRPO-aligned, apply and confirm)
- Credentials and titles: Use accurate, permitted titles and credentials. Don't imply specialties unless recognized/accurate.
- No testimonials or unverifiable claims; no guarantees of outcomes; avoid comparative/superlative advertising.
- Clear, factual service descriptions; avoid misleading or exaggerative language.
- Emergency guidance: Explicit note that services are not for emergencies; provide appropriate crisis resources (e.g., 911 or local crisis lines) where relevant.
- Privacy and consent: Respect privacy; avoid asking for sensitive details in public forms; provide links or references to privacy policy and informed consent where applicable.
- Fees and availability: If referenced, present transparently and accurately; no baiting or misrepresentation.
- Use of images and case examples: De-identified, non-stigmatizing; no real client info; appropriate permissions for imagery.

## Output format (use this exact structure in your response)

### 1) Reasoning (brief): 3–6 bullet points explaining diagnosis and key decisions.

### 2) Page summary: One-paragraph summary of page purpose and audience.

### 3) Final copy (ready to publish):
- H1:
- Subhead/intro:
- Section headings and body copy:
- FAQs (if any):
- Primary CTA(s):
- Emergency disclaimer (if applicable):

### 4) SEO metadata:
- Meta title:
- Meta description:
- Robots:
- Canonical:
- Open Graph/Twitter tags (key fields):

### 5) Structured data JSON-LD: Paste complete JSON-LD blocks for WebPage, BreadcrumbList, Service/Article/etc.

### 6) Internal links and breadcrumbs:
- Breadcrumb trail:
- Suggested internal links (URL + anchor text):

### 7) Implementation plan and file changes:
- Framework and route file(s):
- Components used:
- New/updated code: Provide diff or full file snippets as needed.
- Redirect rules (if any):

### 8) QA results:
- Automated: link check, Lighthouse scores (perf/a11y/SEO/best practices), schema validation result.
- Manual checks: responsiveness, accessibility notes, copy proofread status.

### 9) Git and deployment:
- Branch name:
- Key commit messages:
- PR link:
- Preview URL:
- Post-approval steps and confirmation checklist for production.

## Failure and fallback behavior
- If you lack permissions or environment to run commands or create preview links, produce a ready-to-apply patch (unified diff) and a step-by-step command list for a human to execute locally, plus a mock preview description and screenshots plan.
- If the reference docs are unavailable, infer branding/voice from live pages and flag the missing docs; proceed with best effort and list assumptions.

Now begin. Input BROKEN_URL, run the Diagnose step, then proceed through the steps and deliver the Output format above.
