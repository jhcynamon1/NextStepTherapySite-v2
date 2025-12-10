# Homepage Formatting Audit - November 11, 2025

## Issues Found in Screenshot

### Issue #1: Text Centering - "If 3 or more..." Section
**Location**: Line 939
**Problem**: Text "If 3 or more of these resonate, therapy can help you develop skills to manage these patterns." is breaking awkwardly with "manage these patterns." on second line appearing oddly indented/not centered
**Fix Needed**: Improve text wrapping and ensure proper centering

### Issue #2: Subtext Below Buttons
**Location**: Line 949
**Problem**: "Evidence-based techniques you can use in 60 seconds when panic or overwhelm hits" - text breaking awkwardly
**Fix Needed**: Better text wrapping or shorter line

## Systematic Page Review

### Hero Section (Lines 845-902)
- [ ] Check h1 centering
- [ ] Check lead-text alignment
- [ ] Check CTA button alignment
- [ ] Check therapist showcase alignment

### Problem Recognition Section (Lines 904-952)
- [x] Issue: Line 939 - awkward text break **PRIORITY FIX**
- [x] Issue: Line 949 - awkward text break **PRIORITY FIX**
- [ ] Check trust-grid alignment
- [ ] Check button spacing

### Approach Section (Lines 954-1020)
- [ ] Check section header centering
- [ ] Check approach-grid layout
- [ ] Check image alignment

### Specializations Section
- [ ] Check card alignment
- [ ] Check icon positioning
- [ ] Check text centering in cards

### Process Section
- [ ] Check steps alignment
- [ ] Check timeline layout

### Trust Section
- [ ] Check trust-item alignment
- [ ] Check badges positioning

### Contact Section
- [ ] Check form alignment
- [ ] Check button spacing
- [ ] Check input field widths

## Root Causes

1. **Long text strings without proper max-width constraints**
2. **Inline styles overriding global text-align**
3. **Flex container wrapping issues**
4. **Missing responsive text sizing**

## Fix Strategy

1. Add max-width to centered text paragraphs
2. Use margin: 0 auto for better centering
3. Break up long text strings
4. Add proper line-height and letter-spacing
5. Test at multiple screen widths
