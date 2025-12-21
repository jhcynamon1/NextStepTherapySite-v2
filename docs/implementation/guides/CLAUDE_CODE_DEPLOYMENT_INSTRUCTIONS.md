# DEPLOYMENT INSTRUCTIONS FOR CLAUDE CODE

## CRITICAL: DO NOT DEPLOY YET - ONLY UPDATE CODE

### OVERVIEW
All service pages need professional updates. The CSS framework is ready at `public/services/professional-service-styles.css`. 
Pages need to be updated to use this new CSS and have their content improved.

## FILE LOCATIONS
- **Service Pages**: `/Users/jessecynamon/NextStepTherapy/public/services/`
- **Professional CSS**: `/Users/jessecynamon/NextStepTherapy/public/services/professional-service-styles.css`

## COMPLETED PAGES
1. ✅ **life-transitions.html** - FULLY UPDATED with professional design and complete content
2. ✅ **professional-service-styles.css** - Complete CSS framework ready

## PAGES THAT NEED FIXING

### 1. anxiety-therapy.html
**Current Issues:**
- Old CSS styling inline
- Font still using mixed Playfair/Inter incorrectly
- Spacing issues
- Not using professional-service-styles.css

**Required Changes:**
1. Add link to professional-service-styles.css:
```html
<link rel="stylesheet" href="professional-service-styles.css">
```

2. Remove or minimize the inline `<style>` block - let professional-service-styles.css handle it

3. Update HTML structure to use new CSS classes:
   - Change `service-hero` to `hero`
   - Change `service-title` to just use `h1`
   - Change `content-section` to `section`
   - Change `feature-card` to `card`
   - Use `btn btn-primary` for buttons
   - Use `container` or `container-narrow` for width control

4. Fix the hero section:
```html
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <h1>Professional Anxiety Therapy with Jesse Cynamon, RP</h1>
            <p class="hero-subtitle">...</p>
            <a href="#contact" class="btn btn-primary btn-large">Book Your Free Consultation</a>
        </div>
    </div>
</section>
```

### 2. mens-mental-health.html
**Current Issues:**
- Still has placeholder content in some sections
- Not using professional CSS
- Inconsistent formatting

**Required Changes:**
- Same structural updates as anxiety-therapy.html
- Ensure all placeholder text is replaced with real content
- Add professional-service-styles.css link
- Update classes to match new CSS framework

### 3. workplace-stress-burnout.html
**Current Issues:**
- Incomplete content
- Old styling
- Missing professional polish

**Required Changes:**
- Complete all content sections
- Add professional-service-styles.css
- Update HTML structure to use new classes

### 4. depression-mood-support.html
**Current Issues:**
- Still has [SERVICE NAME] placeholders
- No real content
- Not styled properly

**Required Changes:**
- Write complete content (2000+ words)
- Use professional-service-styles.css
- Follow the structure of life-transitions.html

### 5. relationship-communication.html
**Current Issues:**
- Template placeholders throughout
- No real content
- Unstyled

**Required Changes:**
- Complete content writing
- Professional styling
- Follow life-transitions.html structure

## CSS FRAMEWORK CLASSES TO USE

### Layout
- `container` - Max width 1200px with padding
- `container-narrow` - Max width 800px for text content
- `section` - Standard section padding
- `section-alt` - Alternate background section

### Typography
- `h1`, `h2`, `h3` - Auto-styled headings
- `lead` - Larger intro text
- `text-center`, `text-left`, `text-right` - Alignment
- `text-primary`, `text-secondary`, `text-muted` - Colors

### Components
- `hero` - Hero section with gradient
- `hero-content` - Content wrapper in hero
- `hero-subtitle` - Subtitle text in hero
- `card` - Card component
- `card-icon` - Icon in card
- `card-title` - Card heading
- `card-description` - Card text
- `btn btn-primary` - Primary button
- `btn btn-secondary` - Secondary button
- `btn-large` - Larger button
- `feature-grid` - Grid for features
- `timeline` - Timeline component
- `timeline-item` - Timeline entry
- `timeline-marker` - Timeline number
- `timeline-content` - Timeline text

### Forms
- `form-group` - Form field wrapper
- `form-label` - Label styling
- `form-input` - Input field
- `form-select` - Select dropdown
- `form-textarea` - Textarea

### CTA Section
- `cta-section` - Call-to-action section
- `cta-content` - CTA content wrapper
- `cta-title` - CTA heading
- `cta-description` - CTA text

## DEPLOYMENT STEPS (AFTER ALL FIXES)

1. **Test Locally First**:
```bash
python3 -m http.server 8000
# Visit http://localhost:8000/public/services/anxiety-therapy.html
```

2. **Commit Changes**:
```bash
git add public/services/*.html
git commit -m "Professional redesign of all service pages with complete content"
```

3. **Push to GitHub**:
```bash
git push origin main
```

4. **Deploy to Vercel**:
```bash
vercel --prod
```

## QUALITY CHECKLIST

Before deploying, ensure each page has:
- [ ] Professional typography (Inter for body, proper sizing)
- [ ] Consistent spacing using CSS variables
- [ ] Mobile responsive design
- [ ] 2000+ words of quality content
- [ ] No placeholder text ([SERVICE NAME] etc.)
- [ ] CRPO #10979 prominently displayed
- [ ] Clear CTAs with proper buttons
- [ ] Professional color scheme from CSS variables
- [ ] Proper semantic HTML structure
- [ ] Forms that work with FormSubmit
- [ ] Internal links to other services
- [ ] Footer with all service links

## EXAMPLE TO FOLLOW

Use `/Users/jessecynamon/NextStepTherapy/public/services/life-transitions.html` as the gold standard. 
This page has:
- Complete professional content
- Proper CSS framework usage
- Perfect responsive design
- All sections properly structured
- No placeholders or incomplete content

## IMPORTANT NOTES

1. **DO NOT DEPLOY** until all pages are fixed
2. **Font Fix**: Always use Inter for h1 titles (prevents Jesse/Fesse issue)
3. **Remove inline styles** where possible - use CSS classes
4. **Test mobile view** for each page
5. **Ensure all content is complete** - no placeholders

---

**Created by**: Cursor Assistant (Acting as $10k/hour developer)
**Date**: September 5, 2025
**Status**: Ready for Claude Code to implement
