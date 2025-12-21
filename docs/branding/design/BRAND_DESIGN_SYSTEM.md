# Next Step Therapy - Brand Design System

**Version:** 4.0
**Last Updated:** November 26, 2025
**Primary Reference:** `homepage-redesign-v4.html`

---

## Design Philosophy

**Clinical Executive** aesthetic - sophisticated, trustworthy, and warm. Positions therapy as professional performance optimization for high-functioning individuals while maintaining approachability and human warmth.

**Key Principles:**
- Premium without being cold
- Professional without being clinical
- Warm without being cheesy
- Distinctive without being distracting

---

## Color System

### Primary Colors

```css
/* Navy - Primary brand color, used for headers, CTAs, dark sections */
--navy: #1e3a4f;
--navy-deep: #152a3a;      /* Footer, darker variants */
--navy-light: #2d4a5e;     /* Hover states, gradients */
--charcoal: #3d4f5f;       /* Secondary dark */
```

### Accent Colors

```css
/* Sage Green - Trust, growth, calm. Used for highlights and accents */
--sage: #4a7c59;
--sage-light: #5f9970;
--sage-soft: rgba(74, 124, 89, 0.08);      /* Backgrounds */
--sage-medium: rgba(74, 124, 89, 0.15);    /* Borders, hover states */
--sage-glow: rgba(74, 124, 89, 0.25);      /* Glow effects */
```

### Neutral Colors

```css
/* Warm neutrals - NOT cold whites/grays */
--ivory: #fdfcfa;          /* Page background */
--cream: #f8f6f3;          /* Section backgrounds */
--linen: #f2efe9;          /* Card backgrounds, subtle contrast */
--sand: #e5e0d8;           /* Borders, dividers */
--stone: #c9c3b8;          /* Heavier borders */
--taupe: #9a9287;          /* Decorative elements */
```

### Text Colors

```css
--text-primary: #1e3a4f;   /* Headlines, important text */
--text-secondary: #4a5a6a; /* Body copy */
--text-tertiary: #6b7a8a;  /* Supporting text */
--text-muted: #8a939d;     /* Captions, meta info */
--text-inverse: #fdfcfa;   /* Text on dark backgrounds */
```

### Color Usage Guidelines

| Element | Color |
|---------|-------|
| Page background | `--ivory` |
| Section alternates | `--cream` or `white` |
| Primary buttons | `--navy` gradient |
| Secondary buttons | Transparent + `--sand` border |
| Accent buttons | `--sage` gradient |
| Links | `--sage` |
| Headlines | `--text-primary` |
| Body text | `--text-secondary` |
| Dark sections (Approach, Footer) | `--navy` / `--navy-deep` |

---

## Typography

### Font Families

```css
--font-display: 'Cormorant Garamond', Georgia, serif;
--font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Google Fonts Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 | Cormorant Garamond | clamp(2.5rem, 5.5vw, 4rem) | 400 | 1.15 |
| H2 | Cormorant Garamond | clamp(2rem, 4vw, 2.75rem) | 500 | 1.15 |
| H3 | Cormorant Garamond | clamp(1.375rem, 2.5vw, 1.625rem) | 500 | 1.15 |
| Body | DM Sans | 16px (1rem) | 400 | 1.7 |
| Body Large | DM Sans | 1.125rem | 400 | 1.85 |
| Small | DM Sans | 0.875rem | 400 | 1.7 |
| Caption | DM Sans | 0.8125rem | 400 | 1.5 |
| Eyebrow | DM Sans | 0.75rem | 700 | 1.2 |

### Typography Rules

- Headlines use `letter-spacing: -0.01em` to -0.02em
- Eyebrows use `letter-spacing: 0.15em` + `text-transform: uppercase`
- Body copy max-width: `68ch` for readability
- Italics in Cormorant Garamond for emphasis (hero tagline)

---

## Spacing System

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Spacing Guidelines

| Context | Spacing |
|---------|---------|
| Section padding | `--space-24` vertical |
| Section header to content | `--space-16` |
| Between cards | `--space-5` |
| Card internal padding | `--space-6` to `--space-8` |
| Form field margin | `--space-4` |
| Button padding | `--space-3` vertical, `--space-6` horizontal |
| Container max-width | 1240px |
| Container padding | `--space-6` (24px) |

---

## Border Radius

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-2xl: 32px;
--radius-full: 9999px;  /* Pills, avatars */
```

### Radius Usage

| Element | Radius |
|---------|--------|
| Buttons | `--radius-sm` to `--radius-md` |
| Cards | `--radius-lg` |
| Large panels | `--radius-xl` |
| Badges/pills | `--radius-full` |
| Form inputs | `--radius-sm` |
| Avatars | `--radius-md` |

---

## Shadows

```css
--shadow-xs: 0 1px 2px rgba(30, 58, 79, 0.04);
--shadow-sm: 0 2px 8px rgba(30, 58, 79, 0.06);
--shadow-md: 0 4px 16px rgba(30, 58, 79, 0.08);
--shadow-lg: 0 8px 32px rgba(30, 58, 79, 0.1);
--shadow-xl: 0 16px 48px rgba(30, 58, 79, 0.12);
--shadow-glow: 0 0 40px rgba(74, 124, 89, 0.15);  /* Sage glow */
```

### Shadow Usage

| Element | Shadow |
|---------|--------|
| Cards default | none or `--shadow-sm` |
| Cards on hover | `--shadow-xl` |
| Primary buttons | `--shadow-md` |
| Primary buttons hover | `--shadow-lg` |
| Featured elements | `--shadow-xl` |
| Floating CTA | `--shadow-xl` |

---

## Transitions & Animation

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

### Animation Patterns

**Hover lift:**
```css
transform: translateY(-4px) to translateY(-6px);
```

**Scroll reveal:**
```css
opacity: 0;
transform: translateY(40px);
transition: all 0.8s var(--ease-out);
```

**Hero stagger:**
```css
animation: hero-fade-in 0.9s var(--ease-out) forwards;
/* Delay children by 0.1s-0.15s increments */
```

**Pulse glow (availability dot):**
```css
@keyframes pulse-glow {
    0%, 100% {
        opacity: 1;
        box-shadow: 0 0 0 0 var(--sage-glow);
    }
    50% {
        opacity: 0.8;
        box-shadow: 0 0 0 6px transparent;
    }
}
```

---

## Components

### Buttons

**Primary Button:**
```css
.btn-primary {
    background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
    color: var(--text-inverse);
    padding: var(--space-3) var(--space-6);
    border-radius: var(--radius-sm);
    font-weight: 600;
    box-shadow: var(--shadow-md), inset 0 1px 0 rgba(255,255,255,0.1);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}
```

**Secondary Button:**
```css
.btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 1.5px solid var(--sand);
}

.btn-secondary:hover {
    border-color: var(--navy);
    background: rgba(30, 58, 79, 0.03);
}
```

**Sage Button:**
```css
.btn-sage {
    background: linear-gradient(135deg, var(--sage) 0%, var(--sage-light) 100%);
    color: white;
}

.btn-sage:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg), var(--shadow-glow);
}
```

**Large variant:** Add `--space-4` vertical, `--space-8` horizontal padding.

### Cards

**Standard Card:**
```css
background: white;
border-radius: var(--radius-lg);
padding: var(--space-6);
transition: all var(--duration-normal) var(--ease-out);

&:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-xl);
}
```

**Featured Card (dark):**
```css
background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
color: white;
```

**Card with accent bar:**
```css
&::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--sage) 0%, var(--sage-light) 100%);
    transform: scaleX(0);
    transition: transform var(--duration-normal);
}

&:hover::after {
    transform: scaleX(1);
}
```

### Badges

**Eyebrow/Section label:**
```css
font-size: 0.75rem;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.15em;
color: var(--sage);
```

**Credential badge:**
```css
font-size: 0.6875rem;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.04em;
padding: var(--space-2) var(--space-3);
background: var(--linen);
border-radius: var(--radius-sm);
```

**Primary badge:**
```css
background: var(--sage-soft);
color: var(--sage);
```

### Form Inputs

```css
padding: var(--space-3) var(--space-4);
border: 1px solid var(--sand);
border-radius: var(--radius-sm);
font-size: 1rem;
transition: border-color var(--duration-fast), box-shadow var(--duration-fast);

&:focus {
    outline: none;
    border-color: var(--sage);
    box-shadow: 0 0 0 3px var(--sage-soft);
}
```

---

## Section Patterns

### Light Section (Problems, Services, FAQ)
```css
background: white; /* or var(--cream) alternating */
padding: var(--space-24) 0;
```

### Dark Section (Approach, Footer)
```css
background: var(--navy);
color: var(--text-inverse);

/* Decorative gradient overlay */
&::before {
    background: radial-gradient(ellipse 60% 50% at 70% 30%, rgba(74, 124, 89, 0.12), transparent);
}
```

### Section Header
```css
text-align: center;
margin-bottom: var(--space-16);

.section-eyebrow {
    /* Eyebrow with flanking lines */
    &::before, &::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 24px;
        height: 1px;
        background: var(--sage-medium);
    }
}
```

---

## Layout Patterns

### Hero Grid
```css
display: grid;
grid-template-columns: 1fr 380px;
gap: var(--space-16);

@media (max-width: 1024px) {
    grid-template-columns: 1fr;
}
```

### Services/Problems Grid
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: var(--space-5);

@media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
```

### Contact Grid
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: var(--space-12);

@media (max-width: 1024px) {
    grid-template-columns: 1fr;
}
```

### Footer Grid
```css
display: grid;
grid-template-columns: 1.5fr repeat(4, 1fr);
gap: var(--space-8);
```

---

## Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1025px) { }

/* Tablet */
@media (max-width: 1024px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Small mobile */
@media (max-width: 480px) { }
```

---

## Header Component

**Fixed header with blur:**
```css
position: fixed;
background: rgba(253, 252, 250, 0.85);
backdrop-filter: blur(20px) saturate(180%);
border-bottom: 1px solid transparent;

&.scrolled {
    background: rgba(253, 252, 250, 0.95);
    border-bottom-color: var(--sand);
    box-shadow: var(--shadow-sm);
}
```

**Logo mark:**
```css
width: 44px;
height: 44px;
background: linear-gradient(135deg, var(--navy), var(--navy-light));
border-radius: var(--radius-md);
font-family: var(--font-display);
font-style: italic;
```

---

## Mobile Components

### Mobile Sticky CTA
```css
position: fixed;
bottom: 0;
left: 0;
right: 0;
background: white;
padding: var(--space-3);
box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
display: flex;
gap: var(--space-2);
```

### Mobile Menu
Full-screen overlay, slides in from top. Logo stays visible, hamburger animates to X.

---

## Icon Guidelines

- Use inline SVG for maximum flexibility
- Stroke-based icons, `stroke-width="1.5"` to `"2"`
- Color via `stroke="currentColor"`
- Standard size: 18-20px for inline, 32px for feature icons
- Service icons: 72x72px container

---

## Accessibility

- Focus states: `box-shadow: 0 0 0 3px var(--sage-soft)`
- Color contrast: All text meets WCAG AA
- Touch targets: Minimum 44px on mobile
- Reduced motion: Respect `prefers-reduced-motion`

---

## Implementation Checklist

When applying this design system to a new page:

1. [ ] Import Google Fonts (Cormorant Garamond + DM Sans)
2. [ ] Add CSS custom properties (copy from V4)
3. [ ] Use correct page background (`--ivory`)
4. [ ] Apply fixed header with scroll effect
5. [ ] Use section alternating backgrounds
6. [ ] Apply correct typography hierarchy
7. [ ] Use gradient buttons (not flat colors)
8. [ ] Add hover lift effects to cards
9. [ ] Include scroll reveal animations
10. [ ] Add mobile sticky CTA
11. [ ] Preserve all SEO elements (schema, meta, GA4)

---

## Quick Copy CSS Variables

```css
:root {
    /* Colors */
    --navy: #1e3a4f;
    --navy-deep: #152a3a;
    --navy-light: #2d4a5e;
    --sage: #4a7c59;
    --sage-light: #5f9970;
    --sage-soft: rgba(74, 124, 89, 0.08);
    --sage-medium: rgba(74, 124, 89, 0.15);
    --ivory: #fdfcfa;
    --cream: #f8f6f3;
    --linen: #f2efe9;
    --sand: #e5e0d8;
    --text-primary: #1e3a4f;
    --text-secondary: #4a5a6a;
    --text-tertiary: #6b7a8a;
    --text-muted: #8a939d;
    --text-inverse: #fdfcfa;

    /* Typography */
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;

    /* Spacing */
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-24: 6rem;

    /* Radius */
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 9999px;

    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(30, 58, 79, 0.06);
    --shadow-md: 0 4px 16px rgba(30, 58, 79, 0.08);
    --shadow-lg: 0 8px 32px rgba(30, 58, 79, 0.1);
    --shadow-xl: 0 16px 48px rgba(30, 58, 79, 0.12);

    /* Transitions */
    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --duration-normal: 300ms;
}
```

---

## Files Reference

- **Primary Template:** `/homepage-redesign-v4.html`
- **This Document:** `/docs/BRAND_DESIGN_SYSTEM.md`
- **Logo/Brand Assets:** `/images/`

---

*This design system should be applied consistently across all pages for a cohesive brand experience.*
