# PPC Landing Page - Testing Checklist ✅

**Page:** `ads-anxiety-therapy-toronto.html`  
**Local URL:** http://localhost:8001/ads-anxiety-therapy-toronto.html  
**Date:** November 18, 2025

---

## ✅ IMAGE OPTIMIZATION COMPLETE

**Original:** `images/asset103.png` - 188KB  
**Optimized:**
- Hero (300x300): `images/optimized/jesse-hero-300.webp` - **4.8KB** ✅
- Hero retina (600x600): `images/optimized/jesse-hero-600.webp` - **10KB** ✅
- About (600x600): `images/optimized/jesse-about-600.webp` - **10KB** ✅

**Compression: 95%+ savings!**

---

## 🧪 MANUAL TESTING CHECKLIST

### Desktop Testing (Do Now):

**1. Visual Check:**
- [ ] Open http://localhost:8001/ads-anxiety-therapy-toronto.html
- [ ] Hero photo appears circular on right side?
- [ ] Trust signals (CRPO, $175, Insurance) stacked below photo?
- [ ] About section has larger photo on left?
- [ ] Sports ops background paragraph visible?
- [ ] All text readable and professional?

**2. Functionality Check:**
- [ ] Click "Book Your Free 15-Minute Call" button → Opens Jane booking?
- [ ] Click "Call (416) 306-2157" button → Attempts to open phone app?
- [ ] Click mid-page "Ready to Start?" CTA → Opens Jane?
- [ ] Click bottom "Book Free Consultation" → Opens Jane?
- [ ] Scroll to bottom → See emergency resources?
- [ ] Scroll to top → Header stays visible (sticky)?

**3. Content Review:**
- [ ] Read entire page - any typos?
- [ ] Check for CRPO compliance - no outcome guarantees?
- [ ] Sports ops background makes sense?
- [ ] Emergency resources all there?
- [ ] Virtual practice section lists cities?

### Mobile Testing (Do Now):

**4. Resize Browser (or open on phone):**
- [ ] Narrow browser to mobile width (375px)
- [ ] Hero photo moves above headline?
- [ ] Trust signals stack vertically?
- [ ] All buttons are tap-friendly (not too small)?
- [ ] About section: photo above text (not side-by-side)?
- [ ] Floating CTA button appears bottom-right?
- [ ] Click floating CTA → Opens Jane?
- [ ] All text readable (not too small)?
- [ ] No horizontal scrolling?

### Performance Testing:

**5. PageSpeed Insights (Do This Now):**

**Go to:** https://pagespeed.web.dev/

**Test URL:** `ads-anxiety-therapy-toronto.html` (after uploading to test server)

**OR test locally:**
```bash
# Install Lighthouse CLI (one-time)
npm install -g lighthouse

# Run test
lighthouse http://localhost:8001/ads-anxiety-therapy-toronto.html --only-categories=performance --view
```

**Target Scores:**
- [ ] Mobile: **80+** (PRD requirement)
- [ ] Desktop: **90+** 
- [ ] Largest Contentful Paint (LCP): **<2.5s**
- [ ] First Input Delay (FID): **<100ms**
- [ ] Cumulative Layout Shift (CLS): **<0.1**

**If scores are low, common fixes:**
- Defer JavaScript
- Reduce unused CSS
- Optimize images further
- Add caching headers

---

## 🔧 GA4 EVENT TESTING

### Test Conversion Tracking:

**6. Open GA4 DebugView:**
1. Go to: https://analytics.google.com/
2. Navigate to: Admin → Data Streams → Web Stream Details
3. Scroll down → Click "View tag details"
4. Click "Test traffic" or open DebugView

**7. Test Events Fire:**

**In your browser (with page open):**
- [ ] Click "Book Your Free 15-Minute Call"
  - **Expected GA4 event:** `begin_checkout`
  - **Value:** $50 CAD
  - **Item:** 'Free Consultation'

- [ ] Click "Call (416) 306-2157"
  - **Expected GA4 event:** `generate_lead`
  - **Value:** $60 CAD
  - **Lead source:** 'phone_click'

**Check DebugView:**
- Events should appear within 5-10 seconds
- If not appearing: Check browser console for errors

---

## 🚨 CRITICAL ISSUES TO FIX

### If you find ANY of these, STOP and fix:

**Visual Issues:**
- [ ] Images not loading (broken image icon)
- [ ] Text overlapping or cut off
- [ ] Colors look wrong (not professional)
- [ ] Layout broken on mobile
- [ ] CTA buttons not visible

**Functionality Issues:**
- [ ] Jane booking links don't work
- [ ] Phone links don't work
- [ ] Page doesn't load at all
- [ ] JavaScript errors in console
- [ ] GA4 events not firing

**Content Issues:**
- [ ] Typos or grammar errors
- [ ] CRPO violations (outcome guarantees, medical claims)
- [ ] Missing sections (emergency resources, etc.)
- [ ] Wrong information (phone number, pricing, etc.)

---

## 📊 BROWSER COMPATIBILITY

### Test in Multiple Browsers (Optional but Recommended):

- [ ] **Chrome** (most users)
- [ ] **Safari** (Mac/iPhone users)
- [ ] **Firefox** (some users)
- [ ] **Edge** (Windows users)

**What to check:**
- Images load correctly
- Layout looks the same
- CTA buttons work
- Mobile responsive

---

## 📱 ACTUAL MOBILE DEVICE TEST

### If you have iPhone/Android:

**8. Open on Real Phone:**

**Option A: Using local network:**
1. Find your computer's IP: `ipconfig getifaddr en0` (Mac) or `ipconfig` (Windows)
2. On phone browser: `http://YOUR_IP:8001/ads-anxiety-therapy-toronto.html`

**Option B: Upload to test server:**
1. Upload file to Vercel/Netlify
2. Open URL on phone
3. Test everything

**Mobile-Specific Checks:**
- [ ] Click-to-call actually calls your phone?
- [ ] Jane booking opens in mobile Safari/Chrome?
- [ ] Floating CTA doesn't block content?
- [ ] Scrolling is smooth (no lag)?
- [ ] Touch targets big enough (no mis-clicks)?

---

## ✅ FINAL PRE-LAUNCH CHECKLIST

### Before uploading to production:

**Content:**
- [ ] All text proofread (no typos)
- [ ] All links work (Jane booking, phone)
- [ ] CRPO compliant (no guarantees)
- [ ] Emergency resources correct

**Technical:**
- [ ] Images optimized (<30KB, <80KB)
- [ ] PageSpeed: 80+ mobile, 90+ desktop
- [ ] GA4 events firing correctly
- [ ] Mobile responsive (tested)
- [ ] No console errors

**Legal/Compliance:**
- [ ] Privacy policy linked (if required)
- [ ] CRPO #10979 visible
- [ ] Pricing accurate ($175/session)
- [ ] Insurance info correct

**Business:**
- [ ] Jane booking URL correct
- [ ] Phone number correct: (416) 306-2157
- [ ] Email correct: jesse@nextsteptherapy.ca
- [ ] Service area accurate (Toronto & Ontario)

---

## 🚀 LAUNCH READINESS

### You're ready to launch when:

✅ All checklists above completed  
✅ PageSpeed 80+ mobile  
✅ No critical issues found  
✅ Tested on desktop + mobile  
✅ GA4 events confirmed working  
✅ All CTAs link to correct places  

### What happens after launch:

**Day 1:**
- Check ad campaigns are live
- Monitor clicks hourly
- Respond to leads immediately

**Week 1:**
- Check daily: clicks, leads, Quality Score
- Goal: 10+ clicks, 1-2 leads
- Fix issues quickly

**Month 1:**
- Target: 80-140 clicks, 5-7 leads, 2-3 clients
- Adjust bids to keep CPC $3-6
- Pause poor keywords

---

## 📞 NEED HELP?

**If something's not working:**

1. **Check browser console** (F12) for errors
2. **Clear cache** and reload page
3. **Test in incognito mode** (fresh session)
4. **Try different browser** (Chrome, Safari, Firefox)
5. **Check GA4 DebugView** for tracking issues

**Common Fixes:**
- Images not loading → Check file paths
- Events not firing → Check JavaScript console
- Mobile layout broken → Test in responsive mode
- Links not working → Check URLs are correct

---

## 🎯 NEXT STEPS

After testing this page:

1. **Fix any issues found** ✓
2. **Run PageSpeed Insights** ✓
3. **Upload to production** (Vercel/Netlify)
4. **Build second page** (`ads-professional-workplace-therapy.html`)
5. **Set up Google Ads campaigns**
6. **LAUNCH!** 🚀

---

**Your page is 95% ready.** Test it now, fix any issues, then let's build the second page!








