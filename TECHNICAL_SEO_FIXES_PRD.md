# Technical SEO & Performance Optimization PRD
**Version:** 1.0  
**Date:** January 6, 2025  
**Priority:** CRITICAL - Losing 25-35% of conversions

## Executive Summary
70% of traffic is mobile but site isn't optimized. This PRD provides non-breaking fixes to capture $5,000-$8,000/month in lost revenue.

## Phase 1: Emergency Fixes (Week 1)

### 1.1 Image Optimization
**Problem**: Large images causing slow load  
**Solution**: Compress all images to <100KB

```bash
# Backup originals first
cp -r public/images public/images_backup

# Install compression tool
npm install -g imagemin-cli

# Compress images
imagemin public/images/*.{jpg,png} --out-dir=public/images
```

### 1.2 Enable Browser Caching
**Add to vercel.json**:
```json
{
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [{
        "key": "Cache-Control",
        "value": "public, max-age=31536000"
      }]
    }
  ]
}
```

### 1.3 Minify CSS/JS
```bash
# Keep originals as .bak files
cp public/shared.css public/shared.css.bak

# Minify
npm install -g clean-css-cli
cleancss -o public/shared.min.css public/shared.css
```

## Phase 2: Mobile Optimization (Week 2)

### 2.1 Mobile CSS Fixes
**Add to all CSS files**:
```css
/* Mobile touch targets */
@media (max-width: 768px) {
  .btn {
    min-height: 48px;
    font-size: 16px;
  }
  
  input, textarea {
    font-size: 16px; /* Prevents zoom */
    padding: 12px;
  }
}
```

### 2.2 Lazy Loading Images
**Update all img tags**:
```html
<!-- Before -->
<img src="image.jpg" alt="...">

<!-- After -->
<img src="image.jpg" alt="..." loading="lazy">
```

## Phase 3: Core Web Vitals (Week 3)

### 3.1 Inline Critical CSS
**Add to <head> of all pages**:
```html
<style>
/* Minimal above-fold styles */
body{margin:0;font-family:Inter,sans-serif}
.header{background:#fff;padding:1rem}
.hero{padding:2rem 1rem}
</style>

<!-- Async load full CSS -->
<link rel="preload" href="/shared.min.css" as="style" onload="this.rel='stylesheet'">
```

### 3.2 Reduce JavaScript
- Defer non-critical scripts
- Remove unused code
- Combine multiple files

## Phase 4: Healthcare Compliance (Week 4)

### 4.1 Security Headers
**Add to vercel.json**:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {"key": "X-Frame-Options", "value": "DENY"},
        {"key": "X-Content-Type-Options", "value": "nosniff"},
        {"key": "Strict-Transport-Security", "value": "max-age=31536000"}
      ]
    }
  ]
}
```

### 4.2 Medical Schema
**Add to homepage**:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Next Step Therapy",
  "telephone": "+14163062157",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Ontario"
  }
}
</script>
```

## Success Metrics

| Metric | Current | Week 1 | Month 1 |
|--------|---------|--------|---------|
| Page Load | 3-5s | <3s | <2s |
| Mobile Score | <60 | 70+ | 90+ |
| Conversion | 2-3% | 3% | 4-5% |

## Testing Protocol

1. **Before Each Change**: Save backup
2. **Test Locally**: Check functionality
3. **Deploy to Staging**: Verify no breaks
4. **Monitor for 24hrs**: Check analytics

## Rollback Plan

Every change keeps originals:
- Images: `images_backup/`
- CSS: `.css.bak` files
- Config: Git history

## Expected ROI

- **Month 1**: +$2,500 (25% conversion boost)
- **Month 3**: +$5,000 (40% traffic increase)
- **Month 6**: +$10,000 (market leader position)

## Next Steps

1. **Today**: Run PageSpeed test baseline
2. **Tomorrow**: Start Phase 1
3. **Week 1**: Deploy emergency fixes
4. **Month 1**: Complete all phases

---
*All changes are non-breaking and reversible*