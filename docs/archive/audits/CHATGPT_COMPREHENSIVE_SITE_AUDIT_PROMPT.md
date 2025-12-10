# ChatGPT Site Audit Prompt - Next Step Therapy

Copy and paste this entire prompt into ChatGPT with browser access (Atlas):

---

I need you to conduct a comprehensive SEO audit of my therapy website: **https://nextsteptherapy.ca**

## BUSINESS CONTEXT

**Business:** Next Step Therapy - Virtual psychotherapy practice in Ontario, Canada
**Practitioner:** Jesse Cynamon, Registered Psychotherapist (CRPO #10979)
**Services:** Virtual therapy for anxiety, depression, workplace stress, university student anxiety
**Target Market:** Ontario residents (Toronto, Burlington, Mississauga, Ottawa, Hamilton, London, Brampton, Oshawa)
**Compliance:** Must follow CRPO (College of Registered Psychotherapists of Ontario) advertising standards

## THE PROBLEM

Despite 3+ months of intensive SEO work, our traffic is STAGNANT:
- **Current:** 110-150 impressions/day
- **Peak (Oct 19):** 450 impressions/day (brief spike)
- **Pre-spike baseline:** ~50 impressions/day
- **Target:** 1,000 impressions/day

### Work Already Completed:
1. ✅ **Schema Markup Fixes** (Oct 14-15):
   - Fixed 48 pages with critical schema errors
   - Corrected phone format, address locality, professional designation
   - All pages now pass Google Rich Results Test

2. ✅ **WWW Canonical Fix** (Oct 15):
   - Fixed 706 pages with www vs non-www canonical issues
   - Updated internal links from www to non-www
   - Submitted updated sitemap to Google Search Console

3. ✅ **Content Optimization** (Oct 14-21):
   - Optimized 10+ high-priority pages with data-driven keyword research
   - Added FAQ schema to major pages
   - Enhanced E-A-T signals (CRPO credentials, expertise)
   - Localized content for Ontario cities

4. ✅ **Technical SEO** (Oct 2-21):
   - Fixed 70+ 404 errors with 301 redirects
   - Removed 212 broken internal links
   - Cleaned sitemap (removed phantom pages)
   - Added structured data (MedicalWebPage, Service, FAQPage, Person schemas)

5. ✅ **On-Page Optimization**:
   - Title tag optimization
   - Meta description enhancement
   - H1-H6 heading structure
   - Keyword density optimization
   - Internal linking strategy

6. ✅ **Conversion Optimization** (v4.0):
   - Jane App booking integration
   - Mobile sticky CTA bars
   - Strategic CTA placement
   - Trust signal optimization

### Result: NOTHING. Traffic is flat at 110-150 impressions/day.

## YOUR MISSION

I need you to crawl my site systematically and find what we're missing. Something is fundamentally wrong that we haven't identified yet.

### START HERE:
1. **Sitemap:** https://nextsteptherapy.ca/sitemap.xml
2. **Homepage:** https://nextsteptherapy.ca
3. **Priority Pages:**
   - https://nextsteptherapy.ca/virtual-therapy-ontario.html
   - https://nextsteptherapy.ca/therapist-toronto.html
   - https://nextsteptherapy.ca/burlington-online-therapy.html
   - https://nextsteptherapy.ca/anxiety-therapy-ontario.html
   - https://nextsteptherapy.ca/how-to-find-therapist-ontario.html
   - https://nextsteptherapy.ca/anxiety-therapy-mississauga.html
   - https://nextsteptherapy.ca/therapy-brampton-ontario.html
   - https://nextsteptherapy.ca/mens-therapy-toronto.html

## AUDIT CHECKLIST (CHECK EVERY ITEM)

### 1. TECHNICAL SEO AUDIT

#### A. Schema Markup (CRITICAL)
For each page you visit:
- [ ] Open page source (View Source)
- [ ] Search for `<script type="application/ld+json">`
- [ ] Copy ALL schema blocks and validate at: https://validator.schema.org/
- [ ] Check for:
  - Missing required fields
  - Incorrect telephone format (should be +14163062157, NOT +1-416-306-2157)
  - Incorrect addressLocality (should be "Toronto", not "Burlington" or "Ontario")
  - Incorrect addressRegion (should be "ON", not "Ontario")
  - Wrong professional designation (should be "Person" not "Physician")
  - Missing @id fields
  - Broken schema references
  - Duplicate schemas
- [ ] **For EACH error found:** Document the exact page URL, exact error, and exact location in code

#### B. Canonical Tags
For each page:
- [ ] Check `<link rel="canonical">` tag
- [ ] Verify it points to https://nextsteptherapy.ca (NOT www.)
- [ ] Check for conflicting canonicals
- [ ] Look for self-referential canonical issues

#### C. Meta Tags
For each priority page:
- [ ] Title tag exists and under 60 characters
- [ ] Meta description exists and under 160 characters
- [ ] Title includes primary keyword
- [ ] Meta description includes primary keyword
- [ ] og:title, og:description, og:url present and correct
- [ ] No keyword stuffing in titles/descriptions

#### D. Heading Structure
For each page:
- [ ] One H1 tag only
- [ ] H1 includes primary keyword
- [ ] Logical H2-H6 hierarchy (no skipped levels)
- [ ] Headings are descriptive and keyword-rich
- [ ] No duplicate H1s across pages

#### E. Internal Linking
- [ ] Check 5 random pages for broken internal links
- [ ] Look for orphan pages (no internal links pointing to them)
- [ ] Verify homepage links to key service pages
- [ ] Check for over-optimization (too many exact-match anchor texts)
- [ ] Verify footer navigation is consistent

#### F. Mobile Responsiveness
- [ ] Test homepage on mobile (use browser dev tools)
- [ ] Check font sizes (minimum 16px for body)
- [ ] Test touch target sizes (minimum 48x48px)
- [ ] Check mobile sticky bar functionality
- [ ] Verify no horizontal scrolling

#### G. Page Speed
- [ ] Test 3 priority pages at https://pagespeed.web.dev/
- [ ] Check Core Web Vitals scores
- [ ] Look for render-blocking resources
- [ ] Check image optimization
- [ ] Identify any critical performance issues

### 2. CONTENT QUALITY AUDIT

#### A. Keyword Targeting
For each priority page:
- [ ] Identify what keyword the page is targeting (from title/H1)
- [ ] Search Google for that keyword
- [ ] Compare our page to top 3 results:
  - How does our content length compare?
  - How does our content depth compare?
  - What topics do top pages cover that we don't?
  - What unique angles do they have?
- [ ] Check keyword density in first 100 words (should be 3-5%)

#### B. Content Depth & Intent Satisfaction
For homepage and 3 priority pages:
- [ ] Does the page provide a COMPLETE answer to the search query?
- [ ] Does it answer common follow-up questions?
- [ ] Is there practical, actionable advice?
- [ ] Are there examples or case studies?
- [ ] Is the content too thin or too generic?
- [ ] Does it differentiate from competitors?

#### C. E-A-T Signals (Critical for YMYL Healthcare Content)
For each page:
- [ ] Is Jesse Cynamon identified as the author/provider?
- [ ] Is CRPO #10979 credential displayed?
- [ ] Are there citations to authoritative sources (CAMH, CPA, research)?
- [ ] Is there an "About" section with Jesse's qualifications?
- [ ] Is there transparency about virtual therapy process?
- [ ] Are there patient testimonials or social proof?
- [ ] Is there a clear privacy policy link?
- [ ] Is contact information easily accessible?

#### D. Local SEO Optimization
For location pages (Toronto, Burlington, Mississauga, Brampton, Oshawa):
- [ ] Does content mention specific local landmarks or areas?
- [ ] Are there local pain points addressed (e.g., "TTC commute stress")?
- [ ] Is the city name in title, H1, and first 100 words?
- [ ] Are there local business schema with correct address?
- [ ] Are there links to local resources or organizations?

### 3. COMPETITIVE ANALYSIS

#### A. Top Competitors
Search these terms and analyze top 3 results:
1. "virtual therapy ontario"
2. "therapist toronto"
3. "anxiety therapy ontario"
4. "online counselling ontario"

For EACH competitor page:
- [ ] What is their domain authority? (use Moz bar or similar)
- [ ] How many backlinks do they have?
- [ ] What schema markup do they use?
- [ ] What is their content length?
- [ ] What unique features do they have?
- [ ] What topics do they cover that we don't?
- [ ] How do they present their credentials?
- [ ] What is their CTA strategy?

#### B. SERP Features
For each search term above:
- [ ] Are there featured snippets? (if yes, what format?)
- [ ] Are there "People Also Ask" boxes? (list questions)
- [ ] Are there local pack results?
- [ ] Are there video results?
- [ ] Are there image results?
- [ ] What other SERP features appear?
- [ ] Which features could we target?

### 4. INDEXING & CRAWLABILITY

#### A. Robots.txt
- [ ] Visit https://nextsteptherapy.ca/robots.txt
- [ ] Check if it exists and is configured correctly
- [ ] Verify it's not blocking important pages
- [ ] Check if XML sitemap is referenced

#### B. Sitemap Analysis
- [ ] Visit https://nextsteptherapy.ca/sitemap.xml
- [ ] Count total URLs in sitemap
- [ ] Spot check 10 random URLs to verify they return 200 status
- [ ] Look for patterns in URL structure
- [ ] Check if all priority pages are included
- [ ] Verify lastmod dates are present and recent

#### C. Crawl Test
Using browser network tools:
- [ ] Visit 5 random pages from sitemap
- [ ] Check HTTP status codes (should all be 200)
- [ ] Look for redirect chains
- [ ] Check response times
- [ ] Verify no 404 or 500 errors

### 5. CONVERSION OPTIMIZATION AUDIT

#### A. CTA Analysis
For 3 priority pages:
- [ ] Count number of CTAs on page
- [ ] Check CTA text (is it specific and compelling?)
- [ ] Test if Jane App booking link works
- [ ] Check if phone number is clickable on mobile
- [ ] Verify sticky mobile bar is visible and functional
- [ ] Look for trust signals near CTAs

#### B. User Experience
- [ ] Is the value proposition clear immediately?
- [ ] Is navigation intuitive?
- [ ] Are there any pop-ups or interstitials?
- [ ] Is the booking process frictionless?
- [ ] Are there any form errors or broken buttons?

### 6. POTENTIAL PENALTIES OR ALGORITHMIC ISSUES

#### A. Over-Optimization Check
For 3 random pages:
- [ ] Check for keyword stuffing (density > 5%)
- [ ] Look for unnatural exact-match anchor text patterns
- [ ] Check for hidden text or cloaking
- [ ] Verify no doorway pages
- [ ] Check for duplicate content between pages

#### B. Quality Signals
- [ ] Are there thin content pages (< 300 words)?
- [ ] Are there auto-generated pages?
- [ ] Is content unique or scraped from elsewhere?
- [ ] Are there user-generated content sections?
- [ ] Is there excessive advertising?

#### C. Manual Actions
- Check Google Search Console for manual actions (you may need to ask me for this)

### 7. BACKLINK PROFILE

#### A. Backlink Analysis
Using a tool like Ahrefs, Moz, or Semrush:
- [ ] How many total backlinks?
- [ ] How many referring domains?
- [ ] What is the domain rating/authority?
- [ ] Are there any toxic/spammy backlinks?
- [ ] What are the top 5 referring domains?
- [ ] Are backlinks from relevant healthcare/therapy sites?

*Note: You may need to ask me for backlink data if you can't access these tools*

### 8. STRUCTURED DATA DEEP DIVE

#### A. Rich Results Test
Test these pages in Google Rich Results Test:
1. Homepage
2. https://nextsteptherapy.ca/virtual-therapy-ontario.html
3. https://nextsteptherapy.ca/therapist-toronto.html

For each:
- [ ] Screenshot any errors or warnings
- [ ] List all schema types detected
- [ ] Check which rich results are eligible
- [ ] Verify all required properties are present

#### B. Schema Types Present
Document which schema types are used across the site:
- [ ] Organization
- [ ] LocalBusiness / MedicalBusiness
- [ ] ProfessionalService
- [ ] Service
- [ ] Person
- [ ] FAQPage
- [ ] MedicalWebPage
- [ ] HowTo
- [ ] Review / AggregateRating (if present)

### 9. SPECIFIC ONTARIO THERAPY MARKET RESEARCH

#### A. Keyword Gap Analysis
Search these Ontario-specific terms and tell me:
1. "psychotherapy ontario" - Are we ranking? What's missing?
2. "virtual counselling ontario" - Same questions
3. "online therapy ontario crpo" - Same questions
4. "therapy toronto anxiety" - Same questions
5. "find therapist ontario" - Same questions

For each term:
- [ ] Do we have a page targeting it?
- [ ] If yes, what position are we at?
- [ ] What are top 3 results doing that we're not?

#### B. CRPO Compliance Check
- [ ] Is Jesse listed as "Registered Psychotherapist" (not therapist/counsellor/psychologist)?
- [ ] Is CRPO #10979 displayed on every service page?
- [ ] Are there any comparative claims (e.g., "better than" other therapists)?
- [ ] Are there any outcome guarantees (CRPO violation)?
- [ ] Is advertising language professional and non-misleading?

## OUTPUT FORMAT

Please provide your findings in this format:

### EXECUTIVE SUMMARY
- 3-5 bullet points of most critical issues found
- Overall site health score (0-100)
- Primary hypothesis for why traffic is stagnant

### CRITICAL ISSUES (Fix Immediately)
List any issues that are severely impacting SEO:
1. Issue name
   - Where it occurs (specific URLs)
   - Why it's critical
   - Exact fix needed
   - Estimated impact (low/medium/high)

### MAJOR ISSUES (Fix This Week)
Same format as above

### MINOR ISSUES (Fix Eventually)
Same format as above

### COMPETITIVE GAPS
What are competitors doing that we're not?

### OPPORTUNITY AREAS
What could we improve that would have the biggest impact?

### SPECIFIC RECOMMENDATIONS
Prioritized list of actions with:
- Action item
- Expected impact
- Effort required
- Timeline

### SCHEMA AUDIT RESULTS
For EACH page checked:
- URL
- Schema types present
- Errors found (exact error messages)
- Warnings
- Fix needed

### QUESTIONS FOR CLARIFICATION
Any data you need from me (GSC, Analytics, etc.)

## IMPORTANT NOTES

1. **Be Specific:** Don't just say "fix schema errors" - tell me EXACTLY which page, which schema block, which field, and what the error is.

2. **Prioritize:** Focus on issues that would actually impact rankings/traffic. Don't waste time on minor formatting issues.

3. **Compare to Winners:** For any issue you find, check if top-ranking competitors have the same issue. If they do, it might not be the problem.

4. **Think Fresh:** We've done "standard" SEO fixes. Look for unconventional issues - maybe our content is TOO optimized, or we're missing something fundamental about search intent.

5. **Healthcare YMYL:** Remember this is a healthcare site. E-A-T signals are CRITICAL. Any credibility issues could be fatal.

6. **Ontario Context:** This is a local service business. National SEO best practices might not apply. Focus on Ontario-specific optimization.

7. **Be Brutally Honest:** If the content sucks, tell me. If we're targeting the wrong keywords, tell me. I need truth, not reassurance.

## START YOUR AUDIT NOW

Begin by visiting the sitemap, then systematically work through the checklist. Take your time - I'd rather have a thorough audit in 30 minutes than a rushed one in 5 minutes.

**MOST IMPORTANT:** For any issue you identify, ask yourself: "Would fixing this actually move the needle on traffic, or is this just SEO theatre?" Focus on the former.

Good luck. Find out what the hell we're missing.
