# 🚀 Google Analytics 4 Setup Guide for NextStep Therapy

## Step-by-Step GA4 Setup (5 minutes)

### **Step 1: Go to Google Analytics**
1. Open your browser and go to: https://analytics.google.com/
2. Sign in with your Google account (use the same one you use for Google Search Console)

### **Step 2: Create Analytics Account**
If you don't have an Analytics account:
1. Click **"Start measuring"**
2. **Account name**: "NextStep Therapy"
3. **Account data sharing settings**: Keep defaults checked
4. Click **"Next"**

### **Step 3: Create Property**
1. **Property name**: "NextStep Therapy Website"
2. **Reporting time zone**: "Canada - Eastern Time"
3. **Currency**: "Canadian Dollar (CAD)"
4. Click **"Next"**

### **Step 4: Business Information**
1. **Industry category**: "Health & Fitness" or "Professional Services"
2. **Business size**: "Small (1-10 employees)"
3. **How do you intend to use Google Analytics**: Check all that apply:
   - ✅ "Examine user behavior"
   - ✅ "Measure advertising ROI"
   - ✅ "Get baseline reports"
4. Click **"Create"**

### **Step 5: Accept Terms**
1. **Country**: Canada
2. Read and accept the Google Analytics Terms of Service
3. Accept the Data Processing Amendment
4. Click **"I Accept"**

### **Step 6: Set Up Data Stream**
1. Choose **"Web"** (since you have a website)
2. **Website URL**: `https://nextsteptherapy.ca`
3. **Stream name**: "NextStep Therapy Main Site"
4. Click **"Create stream"**

### **Step 7: Get Your Measurement ID**
After creating the stream, you'll see:
- **Measurement ID**: `G-XXXXXXXXXX` (this is what you need!)
- Copy this ID - it looks like: `G-ABC123DEF4`

---

## 🎯 **WHAT TO DO WITH YOUR MEASUREMENT ID**

Once you have your `G-XXXXXXXXXX` ID:

### **Option 1: Use Our Setup Script**
```bash
node setup_tracking.js
# Enter your G-XXXXXXXXXX when prompted
```

### **Option 2: Manual Configuration**
Replace `G-XXXXXXXXXX` in these files:
- `tracking_implementation.js`
- `tracking_template.html`

---

## ⚙️ **ENHANCED CONVERSIONS SETUP**

After getting your Measurement ID:

### **Step 1: Enable Enhanced Conversions**
1. In GA4, go to **Admin** (bottom left)
2. Under **Property**, click **"Data display"** → **"Attribution"**
3. Click **"Enhanced conversions"**
4. Toggle **"Enhanced conversions for web"** to **ON**
5. Choose **"Google tag or Google Tag Manager"**
6. Click **"Save"**

### **Step 2: Set Up Conversion Events**
1. Go to **Admin** → **Events**
2. Click **"Create event"** 
3. Create these conversion events:

**Event 1: Form Submissions**
- Event name: `generate_lead`
- Mark as conversion: ✅ Yes
- Value: 150 (average consultation value)

**Event 2: Phone Calls**
- Event name: `phone_call`  
- Mark as conversion: ✅ Yes
- Value: 150

**Event 3: Booking Starts**
- Event name: `begin_checkout`
- Mark as conversion: ✅ Yes  
- Value: 200

---

## 📊 **VERIFY SETUP IS WORKING**

### **Real-Time Testing**
1. In GA4, go to **Reports** → **Realtime**
2. Visit your website in another browser tab
3. You should see:
   - Active users: 1
   - Page views being tracked
   - Events firing

### **Test Conversions**
1. Fill out a contact form on your site
2. Click a phone number
3. Check GA4 Realtime → **Conversions**
4. Should see conversion events appearing

---

## 🔗 **CONNECT TO GOOGLE SEARCH CONSOLE**

### **Link GSC to GA4**
1. In GA4, go to **Admin** → **Product links**
2. Click **"Search Console links"**
3. Click **"Link"**
4. Select your Search Console property: `nextsteptherapy.ca`
5. Choose data streams to link
6. Click **"Submit"**

**Benefit**: See which search queries drive conversions!

---

## 🎯 **CUSTOM DIMENSIONS FOR THERAPY BUSINESS**

Set up therapy-specific tracking:

### **Custom Dimensions to Create**
1. **Admin** → **Custom definitions** → **Custom dimensions**
2. Create these dimensions:

**Dimension 1: Therapy Type**
- Dimension name: `therapy_type`
- Scope: Event
- Parameter name: `therapy_type`

**Dimension 2: User Intent**  
- Dimension name: `user_intent`
- Scope: Event
- Parameter name: `user_intent`

**Dimension 3: Landing Page**
- Dimension name: `landing_page`
- Scope: Event  
- Parameter name: `landing_page`

---

## 📈 **REPORTS YOU'LL GET**

Once set up, you'll see:

### **Conversion Reports**
- Which pages generate the most leads
- Conversion rates by traffic source
- Revenue attribution by keyword (when linked to GSC)

### **Audience Reports**
- Demographics of people seeking therapy
- Behavior flow through your site
- Device and location data

### **Acquisition Reports**
- Which channels drive the most conversions
- Organic search performance
- Social media effectiveness

---

## 🚨 **IMPORTANT PRIVACY NOTES**

### **For Therapy Practice**
- ✅ GA4 data is anonymized by default
- ✅ No personal health information is tracked
- ✅ Only behavioral and conversion data
- ✅ Complies with CRPO requirements

### **Privacy Policy Update**
Add this to your privacy policy:
> "We use Google Analytics to understand how visitors use our website. This helps us improve our services. No personal health information is collected through this tracking."

---

## ⏱️ **TIMELINE**

- **Setup time**: 5-10 minutes
- **Data collection starts**: Immediately
- **Meaningful reports**: 1-2 weeks
- **Full attribution**: 2-4 weeks (need conversion volume)

---

## 🆘 **TROUBLESHOOTING**

### **Can't find Measurement ID?**
1. Go to **Admin** → **Data Streams**
2. Click on your web stream
3. Measurement ID is at the top: `G-XXXXXXXXXX`

### **Not seeing data?**
1. Check if tracking code is on all pages
2. Verify Measurement ID is correct
3. Test in incognito browser
4. Wait 24-48 hours for data processing

### **Conversions not tracking?**
1. Test form submissions manually
2. Check browser console for errors
3. Verify conversion events are set up
4. Ensure gtag is loading properly

---

## 📞 **NEXT STEPS AFTER GA4 SETUP**

1. ✅ Get your `G-XXXXXXXXXX` Measurement ID
2. ✅ Run `node setup_tracking.js` with your ID
3. ✅ Add tracking code to all pages
4. ✅ Test conversions (forms, phone clicks)
5. ✅ Set up weekly attribution reports

**Result**: Complete visibility into which SEO keywords drive actual therapy clients and revenue!

---

*This guide gets you from zero to full conversion tracking in under 10 minutes.*
