# PRD: Programmatic SEO Landing Page Production (Batch 1)

**Version:** 1.0
**For:** Claude (AI Code Agent)
**Objective:** To programmatically create, adapt, and deploy 10 new high-performance SEO landing pages based on a perfected master template and pre-approved content.

---

## 1. Scope: Pages to be Created

You are to create the following 10 new HTML files within the `public/` directory:

1.  `public/therapist-toronto-depression.html`
2.  `public/anxiety-therapy-toronto.html`
3.  `public/workplace-stress-counselling-hamilton.html`
4.  `public/couples-counselling-ottawa.html`
5.  `public/mens-mental-health-therapy-london-ontario.html`
6.  `public/depression-therapy-ottawa.html`
7.  `public/virtual-therapy-burlington.html`
8.  `public/act-therapy-toronto.html`
9.  `public/therapy-for-high-achieving-professionals-toronto.html`
10. `public/free-therapy-consultation-ontario.html`

---

## 2. Core Instructions & Process

Follow this procedure for each of the 10 pages listed above.

### Step 2.1: Use the Master Template

The file `public/virtual-therapy-ontario.html` is the **Master Template**. For each new page you create, you must **first make an exact copy** of this file and rename it to the target filename from the list above. **Do not start from a blank file.**

### Step 2.2: Use the Content Library

The source for the body content for each new page is located in the main project PRD: `digital_landlord_prd.md`, under **"Appendix K: Full SEO-Ready Page Content Library"**.

Locate the corresponding content block in Appendix K for the page you are building. You will use this content to replace the body content of your copied template.

### Step 2.3: Execute the Adaptation Checklist

After copying the template and the new body content, you must meticulously update the following elements in each new file to match its specific target keyword and location.

**CRITICAL CHECKLIST:**

-   **[ ] `<title>` Tag:** Update to match the new page's specific topic and location (e.g., "Therapist Toronto Depression | Evidence-Based Support | CRPO #10979").
-   **[ ] Meta Description:** Update the `<meta name="description">` content to be a compelling 1-2 sentence summary of the new page, including the primary keyword.
-   **[ ] `<h1>` Headline:** Update the main `<h1>` headline to match the primary target keyword of the new page.
-   **[ ] Localize All Body Content:** Read through the entire page content. Find and replace all mentions of the *old* location/topic (e.g., "Virtual Therapy," "Ontario") with the *new* specific location/topic (e.g., "Depression Therapy," "Toronto"). Be precise.
-   **[ ] Update Main Schema Script (`LocalBusiness`):**
    -   Find the first `<script type="application/ld+json">` tag in the `<head>`.
    -   Update the `"name"` field to the new business service title (e.g., "Next Step Therapy - Depression Support Toronto").
    -   Update the `"description"` to a summary of the new page's service.
    -   Update the `"url"` to the new page's final production URL (e.g., `https://www.nextsteptherapy.ca/therapist-toronto-depression.html`).
-   **[ ] Update FAQ Schema Script:**
    -   Find the second `<script type="application/ld+json">` tag (the `"@type": "FAQPage"`).
    -   Ensure the questions and answers in this schema are relevant to the new page's topic. If the source content in Appendix K has an FAQ section, use that. If not, select the most relevant questions from the Master Template.

---

## 3. Deployment Protocol

Once all 10 pages have been created and have passed the Adaptation Checklist, they are ready for deployment.

1.  **Commit Files:** Add and commit all 10 new HTML files to the Git repository. Use the commit message: `feat: create 10 new pSEO landing pages`.
2.  **Push to Production:** Push the commit to the `main` branch to trigger the production deployment.
3.  **Verify:** Confirm that the deployment was successful and that the new pages are live at their respective URLs.

---

## 4. Final Quality Assurance

Before final deployment, spot-check at least three of the newly created pages to ensure every item on the **Adaptation Checklist (Step 2.3)** has been completed accurately. Accuracy is critical for the SEO performance of these assets.
