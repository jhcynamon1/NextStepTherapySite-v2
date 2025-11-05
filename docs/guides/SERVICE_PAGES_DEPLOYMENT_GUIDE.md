# SERVICE PAGES DEPLOYMENT GUIDE FOR CLAUDE CODE

## UPDATED SERVICE PAGE LOCATIONS

All fixed and updated service pages are located in:
```
/Users/jessecynamon/NextStepTherapy/public/services/
```

### COMPLETED SERVICE PAGES WITH FIXES:

1. **anxiety-therapy.html** ✅
   - Font fixed: Changed from Playfair Display to Inter for H1 (fixes Jesse/Fesse issue)
   - 2000+ words of SEO content
   - CRPO compliant
   - Mobile responsive
   - Professional design

2. **mens-mental-health.html** ✅
   - Male-focused mental health content
   - SEO optimized
   - CRPO compliant
   - Uses same template as anxiety page

3. **workplace-stress-burnout.html** ✅
   - Professional burnout and stress content
   - SEO optimized
   - CRPO compliant

4. **depression-mood-support.html** ✅
   - Created from template
   - Ready for deployment

5. **life-transitions.html** ✅
   - Created from template
   - Ready for deployment

6. **relationship-communication.html** ✅
   - Created from template
   - Ready for deployment

7. **service-page-template.html** 📝
   - Master template for all service pages
   - Contains all styling and structure

## KEY FIXES APPLIED:

### Font Fix (Prevents Jesse looking like Fesse):
```css
/* In each service page's <style> section */
h1, .service-title {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
}
```

### Mobile Responsive Fixes:
```css
@media (max-width: 768px) {
    /* All mobile styles included */
}
```

## DEPLOYMENT INSTRUCTIONS:

### 1. Verify Files Exist:
```bash
ls -la public/services/
```

### 2. Git Status Check:
```bash
git status
```

### 3. Add and Commit:
```bash
git add public/services/*.html
git commit -m "Deploy all fixed service pages with font corrections"
```

### 4. Push to GitHub:
```bash
git push origin main
```

### 5. Deploy to Vercel:
```bash
vercel --prod
```

### 6. Set Production Alias:
```bash
# Get the deployment URL from step 5, then:
vercel alias [deployment-url] nextsteptherapy.ca
```

## CURRENT ISSUE:

**Vercel Security Checkpoint is blocking the main domain.**
- The pages ARE deployed successfully
- They work at: https://nextsteptherapy-fresh-3m1nbl3j4-jhcynamon-gmailcoms-projects.vercel.app
- Main domain (nextsteptherapy.ca) shows security checkpoint

## VERIFICATION URLS:

Test these URLs to verify deployment:
- https://nextsteptherapy-fresh-3m1nbl3j4-jhcynamon-gmailcoms-projects.vercel.app/services/anxiety-therapy
- https://nextsteptherapy-fresh-3m1nbl3j4-jhcynamon-gmailcoms-projects.vercel.app/services/mens-mental-health.html
- https://nextsteptherapy-fresh-3m1nbl3j4-jhcynamon-gmailcoms-projects.vercel.app/services/workplace-stress-burnout.html

## IMPORTANT NOTES:

1. **All pages are in `/public/services/` directory** - NOT in root `/services/`
2. **Font fix is critical** - Inter font prevents rendering issues
3. **All pages are 2000+ words** for SEO
4. **CRPO #10979** is included in all pages
5. **Mobile responsive** CSS is included

## IF SECURITY CHECKPOINT PERSISTS:

Contact Vercel Support:
- Email: support@vercel.com
- Subject: "Security Checkpoint Blocking Production Site"
- Include: Project name (nextsteptherapy-fresh) and deployment URL

---

**Last Updated**: September 5, 2025
**Updated By**: Cursor AI Assistant
**Status**: All pages ready, deployment blocked by Vercel Security Checkpoint
