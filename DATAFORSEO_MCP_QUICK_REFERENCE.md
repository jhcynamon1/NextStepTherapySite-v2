# 🚀 DataForSEO MCP Quick Reference Guide

## 📋 ESSENTIAL INFO - ALWAYS USE THIS

### **✅ VERIFIED WORKING CREDENTIALS** (Aug 28, 2025)
```
Login: jesse@nextsteptherapy.ca
Password: 1d54adc9ada19782
Base64: amVzc2VAbmV4dHN0ZXB0aGVyYXB5LmNhOjFkNTRhZGM5YWRhMTk3ODI=
Status: ✅ TESTED & CONFIRMED WORKING
```

### **MCP Configuration Location**
```
/Users/jessecynamon/.cursor/mcp.json
```

### **⚠️ MCP STATUS: KNOWN ISSUE**
- **MCP Tools**: Return "HTTP error! status: 401" 
- **Direct API**: ✅ WORKS PERFECTLY (verified)
- **Root Cause**: MCP server authentication handling
- **Solution**: Use direct API calls below

### **✅ WORKING API METHOD (ALWAYS USE THIS)**
```bash
curl -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_ideas/live" \
-H "Authorization: Basic amVzc2VAbmV4dHN0ZXB0aGVyYXB5LmNhOjFkNTRhZGM5YWRhMTk3ODI=" \
-H "Content-Type: application/json" \
-d '[{"keywords": ["SEED_TERMS"], "location_name": "Canada", "language_code": "en", "limit": 100}]'
```

## 🎯 KEYWORD FOR KEYWORD STRATEGY

### **Always Use Broad Seed Terms**
❌ DON'T: Use specific long-tail keywords as seeds
✅ DO: Use broad terms that generate related keywords

**Good Seed Terms:**
- "therapy", "anxiety", "virtual", "online"
- "counseling", "therapist", "stress", "depression"
- "performance", "workplace", "professional"

### **Location Targeting**
- **Location:** "Canada" (covers Ontario)
- **Language:** "en"
- **Focus:** Filter results for Ontario-specific terms

## 🔧 TROUBLESHOOTING

### **If MCP Tools Don't Work:**
1. Use direct curl commands (always works)
2. Check MCP server status
3. Verify credentials in mcp.json

### **If No Results:**
1. Use broader seed terms
2. Remove volume filters initially
3. Try different keyword combinations

## 📊 DATA INTERPRETATION

### **Real Volume Indicators:**
- ✅ Actual numbers (10, 50, 140, 1900, 4400)
- ❌ "null" or "0" = no real data

### **Competition Levels:**
- **LOW** = Easy to rank
- **MEDIUM** = Moderate effort
- **HIGH** = Difficult to rank
- **null** = No competition data

### **CPC Values:**
- Real dollar amounts = validated commercial intent
- null = no advertiser data

## 🎯 ONTARIO FOCUS FILTERS

**Include Keywords With:**
- ontario, toronto, ottawa, hamilton, mississauga, london
- virtual, online, remote, teletherapy
- crpo, registered, licensed

**Exclude Keywords With:**
- canada (too broad)
- US cities
- Non-therapy terms

## 🚀 QUICK COMMANDS

### **Basic Keyword Research:**
```bash
curl -X POST https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_ideas/live \
-H "Authorization: Basic amVzc2VAbmV4dHN0ZXB0aGVyYXB5LmNhOjFkNTRhZGM5YWRhMTk3ODI=" \
-H "Content-Type: application/json" \
-d '[{"keywords": ["therapy", "anxiety"], "location_name": "Canada", "language_code": "en", "limit": 50}]'
```

### **With Volume Filter:**
```bash
curl -X POST https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_ideas/live \
-H "Authorization: Basic amVzc2VAbmV4dHN0ZXB0aGVyYXB5LmNhOjFkNTRhZGM5YWRhMTk3ODI=" \
-H "Content-Type: application/json" \
-d '[{"keywords": ["therapy", "anxiety"], "location_name": "Canada", "language_code": "en", "limit": 100, "filters": [["keyword_info.search_volume", ">", 20]]}]'
```

---

**💡 REMEMBER:** Always start with broad seed terms and let the API find related keywords. The "Keywords for Keywords" approach works best with simple, broad terms that generate hundreds of related suggestions.
