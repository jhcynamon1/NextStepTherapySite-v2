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
