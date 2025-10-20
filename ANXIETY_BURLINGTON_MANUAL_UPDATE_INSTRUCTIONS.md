# Anxiety Burlington FAQ Update - Manual Instructions

## 🎯 WHAT THIS DOES:
Updates anxiety-therapy-burlington.html with 12 high-search-volume FAQs (up from 6) + comprehensive FAQ schema for featured snippets.

**Expected impact**: 300-500 monthly impressions from FAQ featured snippets for anxiety therapy Burlington queries.

---

## ✅ STEP 1: Replace FAQ HTML Content

**File to edit**: `anxiety-therapy-burlington.html`

**What to replace**: Lines 386-409 (the 6 existing FAQ items)

**Replace with**: Content from `ANXIETY_BURLINGTON_NEW_FAQ_HTML.html`

### How to do it:
1. Open `anxiety-therapy-burlington.html` in your editor
2. Go to line 386 (first `<div class="faq-item"`)
3. Select everything from line 386 through line 409 (all 6 faq-item divs)
4. Delete the selected content
5. Copy ALL content from `ANXIETY_BURLINGTON_NEW_FAQ_HTML.html`
6. Paste it where you just deleted

---

## ✅ STEP 2: Add FAQ Schema to <head>

**File to edit**: `anxiety-therapy-burlington.html`

**Where to add**: After line 90 (after the closing `</script>` tag of the Standalone Service Schema)

**Add**: Content from `ANXIETY_BURLINGTON_FAQ_SCHEMA.html`

### How to do it:
1. In `anxiety-therapy-burlington.html`, go to line 90
2. You should see `</script>` (closing tag of Service schema)
3. Place your cursor at the end of line 90
4. Press Enter to create a new line
5. Copy ALL content from `ANXIETY_BURLINGTON_FAQ_SCHEMA.html`
6. Paste it on the new line (line 91)

---

## ✅ STEP 3: Commit and Deploy

```bash
git add anxiety-therapy-burlington.html ANXIETY_BURLINGTON_FINAL_FAQ_LIST.md
git commit -m "📊 Add 12 High-Volume FAQs to Anxiety Burlington Page (373 Impressions Priority)

**Diesel Dudes Replication - FAQ Expansion Complete**

✅ **What Changed**:
- Expanded from 6 FAQs → 12 FAQs based on Perplexity search volume research
- Added comprehensive FAQPage schema markup for featured snippet opportunities
- Prioritized VERY HIGH and HIGH search volume questions

🎯 **FAQ Optimization**:
- FAQ #1: Does anxiety therapy work? (VERY HIGH volume)
- FAQ #2: Types of therapy approaches (HIGH volume)
- FAQ #3: Cost/pricing (VERY HIGH volume)
- FAQ #4: Confidentiality/privacy (HIGH volume)
- FAQ #5: First session expectations (HIGH volume)
- FAQ #6: Timeline to see results (HIGH volume)
- FAQ #7: Panic attacks/social anxiety help (MODERATE-HIGH volume)
- FAQ #8: Need for referral (MODERATE volume)
- FAQ #9: Virtual therapy availability (HIGH volume)
- FAQ #10: Choosing right therapist (HIGH volume)
- FAQ #11: Medication vs therapy (MODERATE volume)
- FAQ #12: Signs to seek therapy (MODERATE volume)

📈 **Expected SEO Impact**:
- Target: 300-500 monthly impressions from FAQ featured snippets alone
- Each FAQ = featured snippet opportunity in Google
- Strategic targeting of actual user search queries from Perplexity data

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

vercel --prod --force --yes
```

---

## 📊 VERIFICATION:

After deploying, verify the changes:

1. **Check HTML FAQs**: Visit https://nextsteptherapy.ca/anxiety-therapy-burlington
2. **Check Schema**: View page source, search for `"@type": "FAQPage"`
3. **Test Schema**: Use Google's Rich Results Test: https://search.google.com/test/rich-results

---

## 🎯 BOTH PAGES NOW COMPLETE:

### ✅ Remote Workers Page (Position 8):
- 12 high-volume FAQs ✓
- Comprehensive FAQ schema ✓
- Deployed ✓

### ⏸️ Anxiety Burlington Page (373 Impressions):
- 12 high-volume FAQs (manual update needed)
- Comprehensive FAQ schema (manual update needed)
- Deploy after manual updates

---

## 💡 WHY MANUAL UPDATE?

The anxiety-therapy-burlington.html file has minified CSS inline and complex Astro attributes that made automated editing risky. Manual copy/paste ensures no formatting issues.

Total time: ~5 minutes to manually update both sections.
