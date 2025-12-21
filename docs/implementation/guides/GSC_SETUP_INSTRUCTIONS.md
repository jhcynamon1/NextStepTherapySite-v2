# 🚀 Google Search Console Automated Extractor - Setup Guide

**Get ALL your keyword data automatically - no manual searching!**

---

## 📋 **QUICK SETUP (5 Minutes)**

### **Step 1: Install Dependencies**
```bash
npm install
```

### **Step 2: Get Google API Credentials**

1. **Go to Google Cloud Console:** https://console.developers.google.com/
2. **Create/Select Project:** "NextStep GSC Extractor"
3. **Enable API:** Search for "Google Search Console API" → Enable
4. **Create Credentials:**
   - Click "Create Credentials" → "OAuth 2.0 Client ID"
   - Application type: "Desktop application"
   - Name: "GSC Extractor"
   - Download JSON file
5. **Save Credentials:** Rename downloaded file to `gsc_credentials.json` and put in this folder

### **Step 3: Run the Extractor**
```bash
npm run extract
```

**First run:** You'll need to authorize the app (one-time setup)  
**Future runs:** Fully automated!

---

## 🎯 **WHAT YOU GET**

### **Automated Data Export:**
- **ALL keywords** your site ranks for in Canada
- **Impressions, clicks, CTR, position** for each keyword
- **Opportunity scores** (which keywords to target first)
- **CSV export** for analysis
- **Summary report** with insights

### **Sample Output:**
```
✅ Retrieved 15,847 keyword records
✅ Processed 12,234 high-opportunity keywords
📁 Exported to: ./gsc_data/ontario_therapy_keywords.csv
📋 Summary report: ./gsc_data/keyword_summary_report.md
```

---

## ⚡ **AUTOMATION OPTIONS**

### **Option 1: Manual Run (When Needed)**
```bash
npm run extract
```

### **Option 2: Daily Automation**
```bash
npm run schedule-daily
```
*Runs every day at 9 AM*

### **Option 3: Weekly Automation**
```bash
npm run schedule-weekly
```
*Runs every Monday at 9 AM*

### **Option 4: Custom Schedule**
Edit crontab manually:
```bash
crontab -e
# Add: 0 9 * * 1 cd /Users/jessecynamon/NextStepTherapy && npm run extract
```

---

## 📊 **OUTPUT FILES**

### **1. ontario_therapy_keywords.csv**
Complete keyword data with:
- Keyword
- Country (Canada)
- Device type
- Impressions
- Clicks
- CTR
- Average position
- Opportunity score

### **2. keyword_summary_report.md**
Insights report with:
- Top 20 opportunity keywords
- Summary metrics
- Quick win recommendations
- Content optimization suggestions

---

## 🔧 **CONFIGURATION**

Edit `gsc_automated_extractor.js` to customize:

```javascript
const CONFIG = {
    SITE_URL: 'https://nextsteptherapy.ca/',  // Your website
    START_DATE: '2024-01-01',                 // Data start date
    END_DATE: 'today',                        // Data end date
    ROW_LIMIT: 25000,                         // Max keywords
    MIN_IMPRESSIONS: 1,                       // Filter threshold
};
```

---

## 🎉 **BENEFITS**

### **✅ No More Manual Work**
- Pulls ALL keywords automatically
- No need to search individual terms
- Scheduled automation

### **✅ Real Data from Google**
- Actual search queries from your GSC
- Real impressions, clicks, positions
- Canada/Ontario filtered

### **✅ Actionable Insights**
- Opportunity scoring
- Quick win identification
- Content gap analysis

### **✅ Export Ready**
- CSV for spreadsheet analysis
- Markdown reports for sharing
- API-ready data format

---

## 🚨 **TROUBLESHOOTING**

### **"Missing credentials file" Error**
- Make sure `gsc_credentials.json` is in the project folder
- Download from Google Cloud Console (see Step 2 above)

### **"No data found" Error**
- Verify your website is added to Google Search Console
- Check date range in CONFIG
- Ensure site has search traffic

### **Authentication Issues**
- Delete `gsc_token.json` and re-run
- Check OAuth consent screen is configured
- Verify API is enabled in Google Cloud

---

## 🎯 **NEXT STEPS**

1. **Run setup:** `npm install`
2. **Get credentials:** Follow Step 2 above
3. **First extraction:** `npm run extract`
4. **Set automation:** `npm run schedule-weekly`
5. **Analyze results:** Check `./gsc_data/` folder

**You'll never manually search keywords again!** 🎉
