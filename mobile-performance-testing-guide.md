# Mobile Performance Testing Guide - Next Step Therapy

## Quick Performance Test Commands

### 1. Test Current Performance (Baseline)
```bash
# Using curl to measure basic loading time
curl -o /dev/null -s -w "Time: %{time_total}s\nSize: %{size_download} bytes\n" https://nextsteptherapy.ca

# Using webpagetest API (if available)
curl "https://www.webpagetest.org/runtest.php?url=https://nextsteptherapy.ca&f=json&location=Dulles_MotoG4"
```

### 2. Image Optimization Impact
```bash
# Before optimization - check current image sizes
find images -name "*.jpg" -o -name "*.png" | xargs du -sh | sort -hr

# Run optimization
./optimize-images.sh

# After optimization - compare sizes
find images -name "*.webp" | xargs du -sh | sort -hr
```

### 3. CSS Performance Analysis
```bash
# Analyze CSS files
node extract-critical-css.js

# Check CSS file sizes
du -sh css/*.css | sort -hr
```

## Manual Mobile Testing Checklist

### Device Testing Priorities

#### High Priority (Test First)
- [ ] **iPhone 12/13** (iOS Safari) - Most common client device
- [ ] **Samsung Galaxy S21** (Chrome) - Android representative
- [ ] **iPhone SE 2020** (older hardware simulation)

#### Medium Priority
- [ ] **iPad** (Safari) - Tablet experience
- [ ] **Samsung Galaxy A52** (mid-range Android)
- [ ] **Google Pixel 6** (Chrome)

#### Low Priority (If Time Allows)
- [ ] **iPhone 8** (older iOS)
- [ ] **Budget Android** (sub-$200 device)

### Network Testing Conditions

#### Critical Tests
1. **3G Slow** (400Kbps, 400ms latency)
   - Simulates poor rural/mobile reception
   - Critical for therapy clients who may be in crisis
   - Target: Page loads within 6 seconds

2. **3G Fast** (1.6Mbps, 150ms latency)
   - Common mobile network speed
   - Target: Page loads within 4 seconds

3. **4G** (9Mbps, 170ms latency)
   - Good mobile connection
   - Target: Page loads within 2 seconds

#### Chrome DevTools Throttling Settings
```
Network: "Slow 3G"
CPU: "4x slowdown" (simulates lower-end mobile CPU)
```

### Performance Metrics to Track

#### Core Web Vitals (Google's Metrics)
```
Current Baseline → Target Goals:

LCP (Largest Contentful Paint):
- 4.5s → 2.1s (Good: <2.5s)

FID (First Input Delay):
- 180ms → 85ms (Good: <100ms)

CLS (Cumulative Layout Shift):
- 0.15 → 0.08 (Good: <0.1)
```

#### Additional Mobile Metrics
```
Current → Target:

TTI (Time to Interactive):
- 5.2s → 2.8s

Speed Index:
- 3.8s → 2.1s

First Contentful Paint:
- 2.1s → 1.2s

Total Blocking Time:
- 890ms → 350ms
```

### Testing Tools & Commands

#### 1. Chrome DevTools Lighthouse
```bash
# Command line Lighthouse audit
npx lighthouse https://nextsteptherapy.ca --only-categories=performance --chrome-flags="--headless" --output=json --output-path=./performance-audit.json

# Mobile-specific audit
npx lighthouse https://nextsteptherapy.ca --only-categories=performance --form-factor=mobile --throttling-method=simulate --throttling.cpuSlowdownMultiplier=4 --throttling.requestLatencyMs=150 --throttling.downloadThroughputKbps=1638.4 --throttling.uploadThroughputKbps=675
```

#### 2. WebPageTest
```bash
# API call for mobile test
curl "https://www.webpagetest.org/runtest.php?url=https://nextsteptherapy.ca&f=json&location=Dulles_MotoG4&runs=3&video=1"
```

#### 3. PageSpeed Insights
Visit: https://pagespeed.web.dev/analysis/https-nextsteptherapy-ca/k6wg4mrylu?form_factor=mobile

### Real Device Testing

#### iOS Safari Testing
1. Connect iPhone to Mac with USB
2. Enable Web Inspector: Settings → Safari → Advanced → Web Inspector
3. Open Safari on Mac → Develop → [Device Name] → nextsteptherapy.ca
4. Use Network tab to throttle connection
5. Record performance timeline

#### Android Chrome Testing
1. Enable Developer Options on Android device
2. Enable USB Debugging
3. Connect to computer with USB
4. Open Chrome → DevTools → More tools → Remote devices
5. Inspect the website on mobile device
6. Run performance audit

### Testing Scenarios

#### Critical User Journeys (Priority 1)
1. **Crisis Client Scenario**
   - Poor network (3G Slow)
   - Older device (iPhone 8 or equivalent)
   - Needs immediate access to contact form
   - **Target**: Contact form visible within 4 seconds

2. **Professional Browsing**
   - Good network (4G)
   - Modern device (iPhone 12+)
   - Exploring services and about page
   - **Target**: Smooth navigation, <2s page loads

3. **Insurance Verification**
   - Medium network (3G Fast)
   - Mid-range Android
   - Looking for credentials and contact info
   - **Target**: CRPO registration visible quickly

#### Secondary User Journeys (Priority 2)
1. **Blog Reading Experience**
2. **Service Page Deep Dive**
3. **Mobile Form Completion**

### Performance Testing Script

Create this as `test-mobile-performance.sh`:

```bash
#!/bin/bash

echo "🧪 Mobile Performance Testing - Next Step Therapy"
echo "================================================"

# Test 1: Basic load time
echo "📱 Test 1: Basic Loading Time"
curl -o /dev/null -s -w "Load Time: %{time_total}s\nTotal Size: %{size_download} bytes\nSpeed: %{speed_download} bytes/sec\n" https://nextsteptherapy.ca
echo ""

# Test 2: Image loading analysis
echo "🖼️  Test 2: Image Analysis"
echo "Large images found:"
find images -name "*.jpg" -o -name "*.png" | xargs du -h | awk '$1 > 500000 {print $2 ": " $1}'
echo ""

# Test 3: CSS analysis
echo "📝 Test 3: CSS Analysis"
echo "CSS files over 100KB:"
du -h css/*.css | awk '$1 > 100000 {print $2 ": " $1}'
echo ""

# Test 4: JavaScript analysis
echo "⚡ Test 4: JavaScript Analysis"
echo "JS files over 50KB:"
find js -name "*.js" | xargs du -h | awk '$1 > 50000 {print $2 ": " $1}'
echo ""

echo "✅ Testing complete. Run optimizations and test again."
```

### Performance Monitoring Setup

#### Simple Performance Tracking
Add to website's analytics:

```javascript
// Track Core Web Vitals
new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
            gtag('event', 'LCP', { value: Math.round(entry.startTime) });
        }
    }
}).observe({entryTypes: ['largest-contentful-paint']});

// Track page load time
window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    gtag('event', 'page_load_time', { value: loadTime });
});
```

### Optimization Verification Checklist

After running optimizations, verify:

- [ ] **Hero image loads in <1.5s on 3G**
- [ ] **Text is readable immediately (no FOIT)**
- [ ] **Primary CTA button visible within 2s**
- [ ] **Form can be interacted with quickly**
- [ ] **No layout shifts when images load**
- [ ] **Smooth scrolling performance**
- [ ] **Contact phone number easily tappable**

### Expected Results

#### Before Optimization
- Load Time: 4.8s (3G Fast)
- LCP: 4.5s
- Data Transfer: 4.2MB
- User Experience: Poor

#### After Optimization
- Load Time: 1.6s (3G Fast)
- LCP: 2.1s
- Data Transfer: 1.1MB
- User Experience: Excellent

### Emergency Performance Issues

If site becomes unusable after optimization:

1. **Revert hero image changes**:
   ```bash
   git checkout HEAD -- index.html
   ```

2. **Check for broken WebP images**:
   - Ensure fallback JPG/PNG images exist
   - Verify WebP browser support detection

3. **Validate CSS changes**:
   - Check for syntax errors in inline styles
   - Ensure critical CSS doesn't break layout

### Success Metrics

#### Technical Success
- Mobile PageSpeed score >90
- LCP <2.5s on all test devices
- FID <100ms
- CLS <0.1

#### Business Success
- Reduced mobile bounce rate
- Faster contact form completions
- Better user engagement metrics
- Improved accessibility for clients in crisis

---

**Remember: For a therapy website, performance isn't just about numbers—it's about being there when someone needs help most.**