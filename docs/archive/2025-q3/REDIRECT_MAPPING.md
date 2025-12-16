# URL Redirect Mapping for Clean URLs

## Overview
All SEO pages have been moved from `/seo/` directory to root directory for cleaner URLs.

## Redirect Rules Needed (301 Redirects)

### University Pages
```
/seo/university-exam-anxiety.html → /university-exam-anxiety.html
/seo/university-anxiety.html → /university-anxiety.html
/seo/university-depression.html → /university-depression.html
/seo/student-mental-health.html → /student-mental-health.html
/seo/students-with-anxiety.html → /students-with-anxiety.html
/seo/college-anxiety.html → /college-anxiety.html
/seo/college-stress.html → /college-stress.html
/seo/college-student-counseling.html → /college-student-counseling.html
/seo/study-anxiety.html → /study-anxiety.html
/seo/academic-stress-university.html → /academic-stress-university.html
/seo/first-year-university-anxiety.html → /first-year-university-anxiety.html
/seo/failing-university-anxiety.html → /failing-university-anxiety.html
/seo/university-counseling.html → /university-counseling.html
/seo/university-student-struggling.html → /university-student-struggling.html
/seo/university-student-therapy.html → /university-student-therapy.html
/seo/child-anxious-about-university.html → /child-anxious-about-university.html
/seo/help-university-student-depression.html → /help-university-student-depression.html
/seo/social-anxiety-university.html → /social-anxiety-university.html
/seo/panic-attacks-university.html → /panic-attacks-university.html
/seo/homesick-university.html → /homesick-university.html
```

### General SEO Pages
```
/seo/therapy-cost-without-insurance.html → /therapy-cost-without-insurance.html
/seo/therapy-covered-insurance-ontario.html → /therapy-covered-insurance-ontario.html
/seo/therapist-available-today-ontario.html → /therapist-available-today-ontario.html
/seo/same-week-therapy-appointment.html → /same-week-therapy-appointment.html
/seo/why-feel-anxious-all-time.html → /why-feel-anxious-all-time.html
/seo/cant-sleep-anxiety.html → /cant-sleep-anxiety.html
/seo/cant-stop-worrying-work.html → /cant-stop-worrying-work.html
/seo/constant-stress-from-job.html → /constant-stress-from-job.html
/seo/sunday-night-anxiety.html → /sunday-night-anxiety.html
/seo/panic-attacks-driving-ontario.html → /panic-attacks-driving-ontario.html
/seo/mental-health-ontario-professionals.html → /mental-health-ontario-professionals.html
/seo/online-counselling-remote-workers.html → /online-counselling-remote-workers.html
/seo/virtual-therapy-busy-parents.html → /virtual-therapy-busy-parents.html
```

### Virtual Pages
```
/virtual/virtual-therapy-ontario.html → /virtual-therapy-ontario.html
/virtual/same-day-virtual-therapy-ontario.html → /same-day-virtual-therapy-ontario.html
/virtual/virtual-therapy-thunder-bay.html → /virtual-therapy-thunder-bay.html
/virtual/online-mental-health-support-ontario.html → /online-mental-health-support-ontario.html
/virtual/mental-health-northern-ontario.html → /mental-health-northern-ontario.html
```

## Implementation Instructions

### For Apache (.htaccess)
```apache
RewriteEngine On

# Redirect all /seo/ URLs to root with 301 permanent redirect
RewriteRule ^seo/(.*)$ /$1 [R=301,L]

# Redirect all /virtual/ URLs to root with 301 permanent redirect  
RewriteRule ^virtual/(.*)$ /$1 [R=301,L]
```

### For Nginx
```nginx
# Redirect /seo/ URLs to root
rewrite ^/seo/(.*)$ /$1 permanent;

# Redirect /virtual/ URLs to root
rewrite ^/virtual/(.*)$ /$1 permanent;
```

### For Vercel (vercel.json)
```json
{
  "redirects": [
    {
      "source": "/seo/:path*",
      "destination": "/:path*",
      "permanent": true
    },
    {
      "source": "/virtual/:path*",
      "destination": "/:path*",
      "permanent": true
    }
  ]
}
```

## SEO Benefits
- **Cleaner URLs**: `/university-exam-anxiety.html` vs `/seo/university-exam-anxiety.html`
- **Better User Experience**: Shorter, more memorable URLs
- **Improved Link Equity**: Cleaner URL structure often performs better in search
- **Professional Appearance**: Removes technical directory structure from user-facing URLs

## Files Ready for Deployment
- ✅ All pages copied to root directory
- ✅ All canonical URLs updated to clean structure
- ✅ All internal links updated to use live website contact form
- ✅ All pages maintain V2 Mass PRD standards

## Next Steps for Live Deployment
1. Implement redirect rules on your hosting platform
2. Deploy the root directory files 
3. Test a few redirects to ensure they work properly
4. Monitor Google Search Console for any crawl issues
5. Update any external backlinks to use new clean URLs

## Notes
- 301 redirects preserve SEO value from old URLs
- Google will gradually update index to show new clean URLs
- Existing bookmarks and links will automatically redirect