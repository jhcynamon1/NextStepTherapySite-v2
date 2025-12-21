# 🚀 Google Search Console API Setup - 2025 Updated Instructions

**Current as of 2025 - Reflects latest Google Cloud Console interface**

---

## 📋 **STEP-BY-STEP SETUP**

### **Step 1: Create Google Cloud Project**
1. **Go to:** https://console.cloud.google.com/
2. **Click project dropdown** (top left) → **New Project**
3. **Project name:** "NextStep GSC Extractor"
4. **Click:** "Create"
5. **Wait for creation** → Make sure new project is selected (check top toolbar)

### **Step 2: Enable Google Search Console API**
1. **Left menu:** APIs & Services → **Library**
2. **Search:** "Google Search Console API"
3. **Click the result** → Click blue **"Enable"** button
4. **Wait for API to enable**

### **Step 3: Configure OAuth Consent Screen (Required in 2025)**
1. **Go to:** APIs & Services → **OAuth consent screen**
2. **User Type:** External → **Create**
3. **Fill required fields:**
   - **App name:** "NextStep GSC Extractor"
   - **User support email:** Your email
   - **Developer contact:** Your email
4. **Click:** Save and Continue
5. **Skip:** Scopes, Test users (click Save and Continue)
6. **Click:** Back to Dashboard

### **Step 4: Create OAuth 2.0 Credentials**
1. **Go to:** APIs & Services → **Credentials**
2. **Click:** + Create Credentials (top center)
3. **Select:** OAuth Client ID
4. **Application Type:** Desktop app
5. **Name:** "Desktop Keyword Extractor"
6. **Click:** Create

### **Step 5: Download Credentials**
1. **Dialog appears** with your credentials
2. **Click:** "Download JSON"
3. **Save file as:** `gsc_credentials.json` in your project folder
4. **Keep secure** - don't commit to public repos

---

## 🔧 **UPDATED NODE.JS CODE**

The script I created uses the latest googleapis library (v128+) and follows current best practices:

```javascript
// Already included in gsc_automated_extractor.js
const { google } = require('googleapis');

// Uses current OAuth2 flow
this.auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// Current API endpoint
this.webmasters = google.webmasters({ version: 'v3', auth: this.auth });
```

---

## ⚡ **WHAT'S CHANGED IN 2025**

### **✅ New Requirements:**
- **OAuth Consent Screen** now required for ALL desktop apps
- **External user type** is standard (even for personal use)
- **Minimal consent info** required before creating credentials

### **✅ Same Process:**
- Desktop app credentials still work for scripts
- JSON download process unchanged
- API scopes and permissions same

### **✅ Current API Version:**
- **Search Console API:** v3 (latest)
- **googleapis library:** v128+ recommended

---

## 🚀 **READY TO RUN**

Once you have `gsc_credentials.json` in your folder:

```bash
# Test the setup
npm run extract
```

**First run:** You'll authorize the app (one-time)  
**Future runs:** Fully automated!

---

## 🎯 **NEXT STEPS**

1. **Follow steps 1-5 above** to get `gsc_credentials.json`
2. **Save the file** in `/Users/jessecynamon/NextStepTherapy/`
3. **Run:** `npm run extract`
4. **Authorize** when prompted (one-time)
5. **Get ALL your keyword data** automatically!

The script will pull **ALL your keywords** from Google Search Console in one go - no manual searching required!
