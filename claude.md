# Claude Assistant Reference Guide

## DataForSEO MCP Instructions

### When User Asks to Use DataForSEO MCP:

**ALWAYS refer to and follow**: `DATAFORSEO_MCP_COMPLETE_TROUBLESHOOTING_GUIDE.md`

#### Quick Action Steps:
1. **First**: Try MCP tools (may work intermittently)
2. **If MCP fails with 401 error**: Use direct API calls from the guide
3. **Always use**: Broad seed terms like "therapy", "anxiety" (not specific long-tail)
4. **Focus on**: Real data only (ignore null values)
5. **Filter for**: Ontario-specific terms in post-processing

#### Verified Working Credentials:
```
Username: jesse@nextsteptherapy.ca
Password: 1d54adc9ada19782
Base64: amVzc2VAbmV4dHN0ZXB0aGVyYXB5LmNhOjFkNTRhZGM5YWRhMTk3ODI=
```

#### Emergency Backup Command (ALWAYS WORKS):
```bash
curl -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_ideas/live" \
-H "Authorization: Basic amVzc2VAbmV4dHN0ZXB0aGVyYXB5LmNhOjFkNTRhZGM5YWRhMTk3ODI=" \
-H "Content-Type: application/json" \
-d '[{"keywords": ["therapy"], "location_name": "Canada", "language_code": "en", "limit": 100}]'
```

#### Key Files:
- **Complete Guide**: `DATAFORSEO_MCP_COMPLETE_TROUBLESHOOTING_GUIDE.md`
- **Quick Reference**: `DATAFORSEO_MCP_QUICK_REFERENCE.md`
- **Working Example**: `dataforseo_working_example.sh`

#### Status:
- ✅ **Credentials**: Verified working
- ⚠️ **MCP Tools**: Known 401 authentication issue
- ✅ **Direct API**: Always works perfectly
- 📅 **Last Verified**: August 28, 2025

---

## 🚨 VERCEL DEPLOYMENT - COMPLETE SOLUTION

### THE PROBLEM:
New HTML pages return 404 errors even when they exist locally and are committed to Git.

### THE SOLUTION (FOLLOW EXACTLY):

#### Step 1: Create Your HTML Page
```bash
# Create your page normally in the root directory
# Example: my-new-page.html
```

#### Step 2: Git Commit (CRITICAL)
```bash
git add my-new-page.html
git commit -m "Add new page"
git push
```

#### Step 3: Verify Correct Vercel Project
```bash
# Check you're linked to the RIGHT project (the one with your real homepage)
curl -s https://nextsteptherapy-fresh.vercel.app | grep "title"

# Should show: "Next Step Therapy Ontario | ACT Therapy & Mental Health"
# If not, relink:
rm -rf .vercel
vercel link --project nextsteptherapy-fresh --yes
```

#### Step 4: Deploy
```bash
vercel --prod --force --yes
```

#### Step 5: Test (Wait 5-10 minutes for DNS)
```bash
curl -I https://www.nextsteptherapy.ca/my-new-page
# Should return HTTP/2 200 (not 404)
```

### CRITICAL VERCEL.JSON CONFIGURATION:
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "cleanUrls": true,
  "trailingSlash": false,
  "outputDirectory": ".",
  "headers": [...]
}
```

### TROUBLESHOOTING:
- ❌ **404 Error**: File not committed to Git OR wrong Vercel project
- ❌ **All pages 404**: Wrong outputDirectory in vercel.json
- ❌ **Homepage works, others don't**: DNS propagation (wait 10 minutes)

### NEVER AGAIN CHECKLIST:
1. ✅ HTML file in root directory (not public/)
2. ✅ Git add, commit, push
3. ✅ Linked to nextsteptherapy-fresh project
4. ✅ outputDirectory: "." in vercel.json
5. ✅ cleanUrls: true for clean URLs
6. ✅ Force deploy with --force flag
7. ✅ Wait 5-10 minutes for DNS propagation

---

## Other MCP Tools

### When User Asks About Other MCPs:
- **Firecrawl MCP**: Working - use for web scraping
- **Perplexity MCP**: Working - use for research with citations
- **Playwright MCP**: Working - use for browser automation

---

## General Instructions

### Always:
1. Check the relevant guide files first
2. Use verified credentials and methods
3. Provide fallback options if primary method fails
4. Reference the specific documentation files
5. Focus on Ontario-specific strategies per user preferences [[memory:7307971]]

### Never:
1. Waste time troubleshooting without checking guides
2. Use unverified credentials or methods
3. Ignore the comprehensive documentation
4. Forget to mention backup methods when MCP fails
