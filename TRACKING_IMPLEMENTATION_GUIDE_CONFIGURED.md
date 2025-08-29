# 🚀 NextStep Therapy - Tracking Implementation Guide

## ✅ CONFIGURATION COMPLETE

Your tracking system has been configured with:
- **GA4 ID**: G-J8H4YBGSHR
- **Organic Phone**: 647-555-0100
- **Direct Phone**: 647-555-0101
- **Call Tracking**: calltrackingmetrics

## 🔧 IMPLEMENTATION STEPS

### Step 1: Google Analytics 4 Setup ✅ DONE
Your GA4 property is ready with ID: G-J8H4YBGSHR

**Next: Set up conversion goals in GA4:**
1. Go to https://analytics.google.com/
2. Select your NextStep Therapy property
3. Go to **Admin** → **Events** → **Create event**
4. Create these conversion events:
   - **generate_lead** (mark as conversion, value: $150)
   - **phone_call** (mark as conversion, value: $150)
   - **begin_checkout** (mark as conversion, value: $200)

### Step 2: Add Tracking Code to Pages 🎯 DO THIS NOW

**Copy this tracking code and add to ALL your website pages:**

```html
<!-- Add this to <head> section of every page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-J8H4YBGSHR"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'G-J8H4YBGSHR', {
        'allow_enhanced_conversions': true,
        'allow_google_signals': true,
        'send_page_view': true,
        'custom_map': {
            'custom_parameter_1': 'therapy_type',
            'custom_parameter_2': 'landing_page',
            'custom_parameter_3': 'user_intent'
        }
    });

    // Therapy-specific conversion tracking
    function trackTherapyConversion(type, value = 150) {
        gtag('event', 'conversion', {
            'send_to': 'G-J8H4YBGSHR',
            'event_category': 'therapy_lead',
            'event_label': type,
            'value': value,
            'currency': 'CAD',
            'custom_parameters': {
                'therapy_type': getTherapyType(),
                'landing_page': window.location.pathname,
                'user_intent': getUserIntent(),
                'session_duration': getSessionDuration()
            }
        });
    }

    // Utility functions
    function getTherapyType() {
        const url = window.location.pathname.toLowerCase();
        if (url.includes('anxiety')) return 'anxiety_therapy';
        if (url.includes('depression')) return 'depression_therapy';
        if (url.includes('couples')) return 'couples_therapy';
        if (url.includes('virtual')) return 'virtual_therapy';
        if (url.includes('work') || url.includes('stress')) return 'work_stress_therapy';
        if (url.includes('university') || url.includes('student')) return 'student_therapy';
        return 'general_therapy';
    }

    function getUserIntent() {
        const sessionDuration = getSessionDuration();
        const pageViews = parseInt(sessionStorage.getItem('page_views') || '1');
        sessionStorage.setItem('page_views', (pageViews + 1).toString());
        
        if (sessionDuration > 180000 || pageViews >= 3) return 'high_intent';
        if (sessionDuration > 60000 || pageViews >= 2) return 'medium_intent';
        return 'low_intent';
    }

    function getSessionDuration() {
        const landingTime = parseInt(sessionStorage.getItem('landing_time') || Date.now().toString());
        return Date.now() - landingTime;
    }

    // Initialize session tracking
    if (!sessionStorage.getItem('landing_page')) {
        sessionStorage.setItem('landing_page', window.location.pathname);
        sessionStorage.setItem('landing_time', Date.now().toString());
    }

    // Call tracking setup
    document.addEventListener('DOMContentLoaded', function() {
        const isOrganic = document.referrer.includes('google.') && 
                          !window.location.search.includes('gclid');
        
        const phoneNumber = isOrganic ? '647-555-0100' : '647-555-0101';
        
        // Update phone numbers
        document.querySelectorAll('.phone-number').forEach(el => {
            el.textContent = phoneNumber;
            if (el.tagName === 'A') {
                el.href = 'tel:' + phoneNumber.replace(/[^0-9]/g, '');
            }
        });

        // Track phone clicks
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', function() {
                gtag('event', 'phone_call', {
                    'event_category': 'conversion',
                    'event_label': isOrganic ? 'organic_call' : 'direct_call',
                    'value': 150
                });
                trackTherapyConversion('phone_call', 150);
            });
        });

        // Form tracking
        document.querySelectorAll('form').forEach(form => {
            let formStarted = false;
            
            form.addEventListener('focusin', function() {
                if (!formStarted) {
                    formStarted = true;
                    gtag('event', 'form_start', {
                        'event_category': 'engagement',
                        'event_label': form.id || 'contact_form'
                    });
                }
            });
            
            form.addEventListener('submit', function(e) {
                const therapyType = form.querySelector('[name="therapy_type"]')?.value || 'general';
                trackTherapyConversion(`form_submission_${therapyType}`, 150);
                
                gtag('event', 'generate_lead', {
                    'event_category': 'conversion',
                    'event_label': 'contact_form',
                    'value': 150,
                    'currency': 'CAD'
                });
            });
        });
    });
</script>
```

### Step 3: Update Your Contact Forms

**Add these elements to your contact forms:**

```html
<form id="contact-form" method="POST" action="/submit-contact">
    <!-- Your existing fields -->
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <input type="tel" name="phone">
    
    <!-- ADD THIS THERAPY TYPE DROPDOWN -->
    <select name="therapy_type">
        <option value="">What brings you here?</option>
        <option value="anxiety">Anxiety & Stress</option>
        <option value="depression">Depression & Mood</option>
        <option value="relationships">Relationship Issues</option>
        <option value="work_stress">Work & Performance</option>
        <option value="student">University/Student Issues</option>
        <option value="other">Other</option>
    </select>
    
    <textarea name="message"></textarea>
    
    <!-- Hidden tracking fields (automatically populated) -->
    <input type="hidden" name="landing_page" value="">
    <input type="hidden" name="referrer" value="">
    <input type="hidden" name="session_duration" value="">
    <input type="hidden" name="user_intent" value="">
    
    <button type="submit">Get Your Free Consultation</button>
</form>
```

### Step 4: Update Phone Numbers

**Make sure your phone numbers have the class "phone-number":**

```html
<!-- Header -->
<a href="tel:6475550100" class="phone-number">647-555-0100</a>

<!-- Footer -->
<span class="phone-number">647-555-0100</span>

<!-- Contact page -->
<p>Call: <span class="phone-number">647-555-0100</span></p>
```

### Step 5: Call Tracking Setup (Optional but Recommended)

**CallTrackingMetrics Setup:**
1. Sign up at https://calltrackingmetrics.com/
2. Get tracking numbers:
   - Organic: 647-555-0100
   - Direct: 647-555-0101
3. Set up dynamic number insertion
4. Cost: ~$45/month

### Step 6: Test Everything 🧪

**Test Checklist:**
- [ ] Visit your website and check GA4 Real-time reports
- [ ] Fill out contact form → Should see "generate_lead" event
- [ ] Click phone number → Should see "phone_call" event
- [ ] Check that phone numbers change based on traffic source
- [ ] Verify conversion events are marked as conversions in GA4

## 📊 WEEKLY AUTOMATION

**Set up weekly attribution reports:**
```bash
# Add to crontab (runs every Monday at 9 AM)
0 9 * * 1 cd /Users/jessecynamon/NextStepTherapy && node gsc_conversion_attribution.js
```

**Or run manually:**
```bash
npm run weekly-report
```

## 🎯 SUCCESS METRICS TO TRACK

### SEO Performance (GSC):
- Keyword rankings (positions 1-10)
- Click-through rates by page
- Impressions growth
- New keyword discoveries

### Conversion Performance (GA4):
- Organic conversion rate (target: 3-5%)
- Cost per conversion (organic vs. paid)
- Conversion value by keyword
- Lead quality scores

### Attribution Metrics:
- Keywords driving actual clients
- Revenue per organic visitor
- Lifetime value of SEO clients
- ROI of content creation

## 📁 FILES CREATED FOR YOU

- `tracking_implementation_configured.js` - Main tracking script (configured)
- `tracking_template_configured.html` - HTML template with your GA4 ID
- `gsc_conversion_attribution.js` - Attribution analysis script
- `COMPLETE_SEO_CONVERSION_TRACKING_SETUP.md` - Complete documentation

## 🚨 IMPORTANT NEXT STEPS

### IMMEDIATE (Do Today):
1. ✅ **Add tracking code** to all your website pages
2. ✅ **Set up conversion events** in GA4 (generate_lead, phone_call, begin_checkout)
3. ✅ **Test form submissions** and phone clicks
4. ✅ **Check GA4 real-time** reports to verify tracking

### THIS WEEK:
1. **Set up call tracking** service (optional but recommended)
2. **Run first attribution report**: `node gsc_conversion_attribution.js`
3. **Link GA4 to Search Console** (Admin → Product links → Search Console)
4. **Set up weekly automation** for attribution reports

### ONGOING:
1. **Monitor conversion rates** weekly
2. **Review attribution reports** to see which keywords drive clients
3. **Optimize pages** based on conversion data
4. **Scale successful** SEO strategies

## 🎉 WHAT YOU'LL GET

### Weekly Attribution Report Example:
```
🎯 SEO Conversion Attribution Report

📊 SUMMARY METRICS
- Total Conversions: 28
- Revenue Attributed: $4,200
- Top Converting Keyword: "anxiety therapy toronto" (5 conversions, $750)

🚀 TOP PERFORMING KEYWORDS
| Keyword | Revenue | Conversions | Confidence |
|---------|---------|-------------|------------|
| anxiety therapy toronto | $750 | 5 | Very High |
| virtual therapy ontario | $600 | 4 | High |
| work stress counseling | $450 | 3 | High |
```

## 🆘 TROUBLESHOOTING

### GA4 Not Tracking:
- Verify G-J8H4YBGSHR is in the tracking code
- Check browser console for errors
- Test in incognito browser

### Forms Not Converting:
- Check form submission event in GA4 real-time
- Verify therapy_type dropdown is present
- Test with different browsers

### Attribution Not Working:
- Ensure GSC API credentials are set up
- Check `gsc_data` folder for output files
- Run: `node gsc_conversion_attribution.js`

## 📞 SUPPORT

If you need help:
1. Check the complete documentation: `COMPLETE_SEO_CONVERSION_TRACKING_SETUP.md`
2. Test with the template: `tracking_template_configured.html`
3. Run attribution analysis: `node gsc_conversion_attribution.js`

**Result**: Complete visibility into which SEO efforts drive actual therapy clients and revenue!

---

*Generated on ${new Date().toLocaleDateString()} for NextStep Therapy (G-J8H4YBGSHR)*
