# Image Implementation Guide for Next Step Therapy Website
## EXACT INSTRUCTIONS FOR CLAUDE CODE - DO NOT DEVIATE

---

## 📁 FILE REFERENCE TABLE

| Image File | Purpose | Section | Implementation Priority |
|------------|---------|---------|------------------------|
| Generated Image August 27, 2025 - 10_34AM.jpeg | Hero Background | Hero Section | 1 (CRITICAL) |
| Generated Image August 27, 2025 - 10_39AM.jpeg | Anxiety Service Icon | Service Card 1 | 2 |
| Generated Image August 27, 2025 - 10_39AM (1).jpeg | Men's Mental Health Icon | Service Card 2 | 2 |
| Generated Image August 27, 2025 - 10_39AM (2).jpeg | Workplace Stress Icon | Service Card 3 | 2 |
| Generated Image August 27, 2025 - 10_39AM (3).jpeg | Life Transitions Icon | Service Card 4 | 2 |
| Generated Image August 27, 2025 - 10_39AM (4).jpeg | Depression Support Icon | Service Card 5 | 2 |
| Generated Image August 27, 2025 - 10_39AM (5).jpeg | Relationships Icon | Service Card 6 | 2 |
| Generated Image August 27, 2025 - 10_42AM.jpeg | About Section Background | About Section | 3 |
| Generated Image August 27, 2025 - 10_43AM.jpeg | Initial Connection Icon | Process Step 1 | 4 |
| Generated Image August 27, 2025 - 10_43AM (1).jpeg | Full Picture Icon | Process Step 2 | 4 |
| Generated Image August 27, 2025 - 10_43AM (2).jpeg | Toolkit Icon | Process Step 3 | 4 |
| Generated Image August 27, 2025 - 10_43AM (3).jpeg | Real Change Icon | Process Step 4 | 4 |
| Generated Image August 27, 2025 - 10_46AM.jpeg | Trust Section Background | Trust/Why Choose Section | 5 |

---

## 1. HERO BACKGROUND IMAGE

### File: `Generated Image August 27, 2025 - 10_34AM.jpeg`
### Rename to: `hero-background.jpg`
### Location: `/public/images/hero-background.jpg`

#### HTML Implementation:
```html
<section class="hero-section" style="position: relative; min-height: 600px;">
  <!-- Background Image Container -->
  <div class="hero-background" style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
  ">
    <img src="/images/hero-background.jpg" alt="" style="
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.3; /* CRITICAL: Keep at 30% opacity */
    ">
  </div>
  
  <!-- Hero Content (goes on top) -->
  <div class="hero-content" style="
    position: relative;
    z-index: 1;
    padding: 80px 20px;
  ">
    <h1>You Don't Have to Navigate This Alone</h1>
    <!-- Rest of hero content -->
  </div>
</section>
```

#### CSS (if using stylesheet):
```css
.hero-section {
  position: relative;
  min-height: 600px;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3; /* DO NOT change this - text must remain readable */
}

/* Mobile responsive */
@media (max-width: 768px) {
  .hero-background img {
    opacity: 0.2; /* Even lighter on mobile for readability */
  }
}
```

---

## 2. SERVICE CARD ICONS (6 IMAGES)

### CRITICAL: These are ICONS not backgrounds. Place INSIDE each service card.

#### Service Card 1: Anxiety & Stress Management
**File:** `Generated Image August 27, 2025 - 10_39AM.jpeg`  
**Rename to:** `icon-anxiety.jpg`  
**Location:** `/public/images/services/icon-anxiety.jpg`

#### Service Card 2: Men's Mental Health
**File:** `Generated Image August 27, 2025 - 10_39AM (1).jpeg`  
**Rename to:** `icon-mens-health.jpg`  
**Location:** `/public/images/services/icon-mens-health.jpg`

#### Service Card 3: Workplace Stress & Burnout
**File:** `Generated Image August 27, 2025 - 10_39AM (2).jpeg`  
**Rename to:** `icon-workplace.jpg`  
**Location:** `/public/images/services/icon-workplace.jpg`

#### Service Card 4: Life Transitions & Change
**File:** `Generated Image August 27, 2025 - 10_39AM (3).jpeg`  
**Rename to:** `icon-transitions.jpg`  
**Location:** `/public/images/services/icon-transitions.jpg`

#### Service Card 5: Depression & Mood Support
**File:** `Generated Image August 27, 2025 - 10_39AM (4).jpeg`  
**Rename to:** `icon-depression.jpg`  
**Location:** `/public/images/services/icon-depression.jpg`

#### Service Card 6: Relationship & Communication
**File:** `Generated Image August 27, 2025 - 10_39AM (5).jpeg`  
**Rename to:** `icon-relationships.jpg`  
**Location:** `/public/images/services/icon-relationships.jpg`

### Implementation for ALL Service Cards:
```html
<!-- Service Card Template -->
<div class="service-card" style="
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
">
  <!-- Icon Container -->
  <div class="service-icon" style="
    width: 80px;
    height: 80px;
    margin: 0 auto 16px;
  ">
    <img src="/images/services/icon-anxiety.jpg" alt="" style="
      width: 100%;
      height: 100%;
      object-fit: contain;
    ">
  </div>
  
  <h3>Anxiety & Stress Management</h3>
  <ul style="text-align: left; list-style: none; padding: 0;">
    <li>When your mind won't stop racing at 3am</li>
    <li>Practical tools for panic attacks and overwhelm</li>
    <li>Finally understand why you worry so much</li>
  </ul>
  <a href="#" class="learn-more">Learn more →</a>
</div>
```

### EXACT Service Card Order:
1. Anxiety & Stress Management - `icon-anxiety.jpg`
2. Men's Mental Health - `icon-mens-health.jpg`
3. Workplace Stress & Burnout - `icon-workplace.jpg`
4. Life Transitions & Change - `icon-transitions.jpg`
5. Depression & Mood Support - `icon-depression.jpg`
6. Relationship & Communication - `icon-relationships.jpg`

---

## 3. ABOUT SECTION BACKGROUND

### File: `Generated Image August 27, 2025 - 10_42AM.jpeg`
### Rename to: `about-texture.jpg`
### Location: `/public/images/about-texture.jpg`

#### Implementation:
```html
<section class="about-section" style="
  position: relative;
  padding: 60px 20px;
">
  <!-- Subtle Background Texture -->
  <div style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: url('/images/about-texture.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.05; /* EXTREMELY SUBTLE - barely visible */
  "></div>
  
  <!-- About Content -->
  <div style="position: relative; z-index: 1;">
    <h2>Your Therapist: Jesse Cynamon, RP</h2>
    <!-- Rest of about content -->
  </div>
</section>
```

---

## 4. PROCESS SECTION ICONS (4 IMAGES)

### THESE GO NEXT TO EACH PROCESS STEP

#### Step 1: Initial Connection
**File:** `Generated Image August 27, 2025 - 10_43AM.jpeg`  
**Rename to:** `process-1-connection.jpg`  
**Location:** `/public/images/process/process-1-connection.jpg`

#### Step 2: Getting the Full Picture
**File:** `Generated Image August 27, 2025 - 10_43AM (1).jpeg`  
**Rename to:** `process-2-understanding.jpg`  
**Location:** `/public/images/process/process-2-understanding.jpg`

#### Step 3: Building Your Toolkit
**File:** `Generated Image August 27, 2025 - 10_43AM (2).jpeg`  
**Rename to:** `process-3-toolkit.jpg`  
**Location:** `/public/images/process/process-3-toolkit.jpg`

#### Step 4: Real Change, Real Time
**File:** `Generated Image August 27, 2025 - 10_43AM (3).jpeg`  
**Rename to:** `process-4-change.jpg`  
**Location:** `/public/images/process/process-4-change.jpg`

### Implementation Template:
```html
<div class="process-step" style="
  display: flex;
  align-items: center;
  margin-bottom: 40px;
">
  <!-- Step Number Circle -->
  <div style="
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #8FA68E;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    margin-right: 20px;
    flex-shrink: 0;
  ">1</div>
  
  <!-- Process Icon -->
  <div style="
    width: 60px;
    height: 60px;
    margin-right: 20px;
    flex-shrink: 0;
  ">
    <img src="/images/process/process-1-connection.jpg" alt="" style="
      width: 100%;
      height: 100%;
      object-fit: contain;
    ">
  </div>
  
  <!-- Process Text -->
  <div>
    <h3>Initial Connection</h3>
    <p>We start with a free 15-minute call...</p>
  </div>
</div>
```

---

## 5. TRUST SECTION BACKGROUND

### File: `Generated Image August 27, 2025 - 10_46AM.jpeg`
### Rename to: `trust-background.jpg`
### Location: `/public/images/trust-background.jpg`

#### Implementation:
```html
<section class="trust-section" style="
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.95)
  ), url('/images/trust-background.jpg');
  background-size: cover;
  background-position: center;
  padding: 60px 20px;
">
  <h2>Why Clients Choose Next Step</h2>
  <!-- Trust content columns -->
</section>
```

---

## CRITICAL IMPLEMENTATION NOTES

### ⚠️ DO NOT:
- Use images as backgrounds for text without proper opacity
- Change the opacity values specified
- Use images at full opacity (except icons)
- Forget alt="" tags (empty for decorative images)
- Mix up the service card order
- Use the wrong image in the wrong location

### ✅ DO:
- Test text readability over all backgrounds
- Ensure all images load properly
- Use lazy loading for below-fold images: `loading="lazy"`
- Compress images if file sizes exceed 200KB
- Add proper responsive sizing
- Keep all opacity values EXACTLY as specified

### File Structure Required:
```
/public/images/
├── hero-background.jpg
├── about-texture.jpg
├── trust-background.jpg
├── services/
│   ├── icon-anxiety.jpg
│   ├── icon-mens-health.jpg
│   ├── icon-workplace.jpg
│   ├── icon-transitions.jpg
│   ├── icon-depression.jpg
│   └── icon-relationships.jpg
└── process/
    ├── process-1-connection.jpg
    ├── process-2-understanding.jpg
    ├── process-3-toolkit.jpg
    └── process-4-change.jpg
```

### Performance Optimization:
```html
<!-- Add to images below the fold -->
<img src="..." loading="lazy" alt="">

<!-- For background images in CSS, use: -->
.section {
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  will-change: transform; /* Helps with scroll performance */
}
```

### Mobile Responsive Requirements:
```css
/* Service cards should stack on mobile */
@media (max-width: 768px) {
  .service-grid {
    grid-template-columns: 1fr;
  }
  
  .process-step {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-background img {
    opacity: 0.2; /* Lighter on mobile for text readability */
  }
}
```

---

## VALIDATION CHECKLIST

After implementation, verify:
- [ ] Hero text is readable over background
- [ ] All service icons load and display correctly
- [ ] Service cards are in correct order
- [ ] Process icons align with their steps
- [ ] About section texture is barely visible
- [ ] Trust section background doesn't interfere with text
- [ ] Mobile view maintains readability
- [ ] All images have proper alt attributes
- [ ] File sizes are optimized (under 200KB each)
- [ ] Lazy loading implemented for below-fold images

---

## IF SOMETHING LOOKS WRONG:

1. **Text not readable**: Reduce background opacity further
2. **Icons too large**: Check container width is 80px max
3. **Background too prominent**: Reduce opacity to 0.05 or less
4. **Images not loading**: Check file paths match exactly
5. **Layout broken**: Ensure z-index values are correct (background: 0, content: 1)

THIS GUIDE IS ABSOLUTE. FOLLOW EXACTLY AS WRITTEN.
