# Internal Linking Strategy - Pass Authority to Weak Pages

## Current State Analysis

### High Authority Pages (Pass links FROM these):
1. **index.html** (Homepage) - Likely highest authority
   - Currently links to: anxiety-therapy-ontario, depression-therapy-ontario
   - Missing links to: virtual-therapy-ontario, online-therapy-burlington, anxiety-therapy-burlington

2. **anxiety-therapy-ontario.html** - Good authority
   - Currently links to: virtual-therapy-ontario (4x), depression-therapy-ontario, others
   - ✅ Already doing well with internal linking
   - Could add: online-therapy-burlington, anxiety-therapy-burlington

3. **depression-therapy-ontario.html** - Good authority
   - Currently links to: virtual-therapy-ontario (4x), anxiety-therapy-ontario, others
   - ✅ Already doing well with internal linking
   - Could add: online-therapy-burlington

### Weak Pages (Need links TO these):
1. **online-therapy-burlington.html** - Position 16-32, 754 impressions
   - ❌ ZERO internal links to other pages (minified, hard to edit)
   - 🎯 **Priority**: Get links FROM homepage, anxiety page, depression page

2. **virtual-therapy-ontario.html** - Position 84, 419 impressions
   - ✅ Already gets 4 links from anxiety page
   - ✅ Already gets 4 links from depression page
   - Could use 1-2 more from homepage

3. **anxiety-therapy-burlington.html** - Position 45, 123 impressions
   - Need to audit (probably needs links)
   - 🎯 **Priority**: Get links FROM homepage, anxiety-therapy-ontario

---

## Proposed Internal Link Additions

### 1. Homepage (index.html) - Add 5 links

**Location 1: In "Virtual therapy" mention (around line 45)**
Current: "Professional virtual therapy for anxiety, stress, and life's challenging moments."
Add link: "Professional <a href="/virtual-therapy-ontario">virtual therapy</a> for anxiety, stress, and life's challenging moments."

**Location 2: In specializations section (around line 490)**
Current: "Performance anxiety support with practical tools for managing panic and overwhelm."
Add: "Whether you're in Toronto, <a href="/online-therapy-burlington">Burlington</a>, or anywhere in Ontario, performance anxiety support is available with practical tools."

**Location 3: In virtual therapy FAQ (around line 702)**
Current: "Virtual therapy Toronto sessions are conducted through secure..."
Change to: "<a href="/virtual-therapy-ontario">Virtual therapy</a> sessions are conducted through secure..."

**Location 4: New sentence in about section**
Add: "Serving clients throughout Ontario including <a href="/anxiety-therapy-burlington">anxiety therapy in Burlington</a> and surrounding areas."

**Location 5: In footer or contact section**
Add: "Virtual therapy available across Ontario - <a href="/virtual-therapy-ontario">learn more about online sessions</a>."

---

### 2. anxiety-therapy-ontario.html - Add 3 links

**Location 1: In virtual therapy section (line 777)**
Current: "<a href="/virtual-therapy-ontario.html">Virtual therapy</a> isn't a compromise..."
Keep this, add AFTER: "Many Burlington residents find <a href="/online-therapy-burlington">online therapy</a> particularly convenient for avoiding commute stress."

**Location 2: In location section (line 1068)**
Current: "Whether you're in Toronto's downtown core, Ottawa's government district, Hamilton's diverse neighborhoods, London's university area..."
Add: "Whether you're in Toronto's downtown core, <a href="/online-therapy-burlington">Burlington's lakefront community</a>, Ottawa's government district..."

**Location 3: In anxiety types section (around line 798)**
Current mentions professional stress
Add: "If you're specifically in Burlington, <a href="/anxiety-therapy-burlington">anxiety therapy Burlington</a> services are available with flexible virtual scheduling."

---

### 3. depression-therapy-ontario.html - Add 2 links

**Location 1: In virtual therapy section (line 777)**
Current: "<a href="/virtual-therapy-ontario.html">Virtual therapy</a> isn't a compromise..."
Keep this, add AFTER: "For Burlington residents managing depression, <a href="/online-therapy-burlington">online therapy</a> eliminates commute stress and integrates seamlessly into your routine."

**Location 2: In location section (line 1074)**
Current: "Whether you're in Toronto's bustling downtown, Ottawa's government district, Hamilton's diverse neighborhoods..."
Add: "Whether you're in Toronto's bustling downtown, <a href="/online-therapy-burlington">Burlington's growing community</a>, Ottawa's government district..."

---

## Expected Impact

**After adding these 10 internal links:**

### online-therapy-burlington.html:
- **Current incoming links:** 0
- **New incoming links:** 4 (2 from homepage, 1 from anxiety page, 1 from depression page)
- **Expected result:** Position 16-32 → Top 10 within 2-3 weeks
- **Traffic gain:** +75-150 clicks/month

### virtual-therapy-ontario.html:
- **Current incoming links:** 8+ (already good)
- **New incoming links:** +2 from homepage
- **Expected result:** Position 84 → 40-50 within 3-4 weeks
- **Traffic gain:** +20-40 clicks/month

### anxiety-therapy-burlington.html:
- **Current incoming links:** Unknown (need to audit)
- **New incoming links:** +2 from homepage, +1 from anxiety page
- **Expected result:** Position 45 → Top 20 within 2-3 weeks
- **Traffic gain:** +10-20 clicks/month

**Total expected traffic gain:** +105-210 clicks/month from internal linking alone

---

## Implementation Priority

**Phase 1 (Today):** Homepage links
- Add 5 links from homepage to weak pages
- Impact: Immediate authority transfer from highest-authority page

**Phase 2 (Tomorrow):** Service page links
- Add 3 links from anxiety-therapy-ontario.html
- Add 2 links from depression-therapy-ontario.html
- Impact: Additional authority from second-tier pages

**Phase 3 (Next week):** Monitor results
- Check GSC for position improvements
- Add more links if needed

---

## Best Practices Applied

✅ **Contextual relevance** - Links fit naturally in content
✅ **Anchor text variety** - Not over-optimized, reads naturally
✅ **User experience** - Links genuinely helpful for users
✅ **Authority flow** - From high to low authority pages
✅ **Geographic relevance** - Burlington mentions in Burlington link context

---

## Technical Notes

- All links use relative paths (e.g., `/virtual-therapy-ontario` not full URLs)
- Links open in same window (standard for internal links)
- No nofollow attributes (we WANT to pass authority)
- Anchor text includes location + service keywords where natural

---

**Ready to implement Phase 1 (Homepage links)?**
