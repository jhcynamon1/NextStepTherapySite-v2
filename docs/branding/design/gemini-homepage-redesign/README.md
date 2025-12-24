# Gemini Homepage Redesign - Design Reference

**Source:** Gemini AI Studio  
**Created:** December 23, 2024  
**Purpose:** Design reference for homepage visual refresh

## Overview

This folder contains the React/TypeScript design prototype from Gemini AI Studio. These files are for **design reference only** and will be adapted to the existing `index.html` homepage.

## Files

| File | Purpose |
|------|---------|
| `App.tsx` | Main component with all sections and design patterns |
| `constants.tsx` | Data/content constants (symptoms, services, steps, quiz) |
| `types.ts` | TypeScript interfaces |
| `index.html` | HTML entry with Tailwind config and custom CSS |
| `index.tsx` | React entry point |
| `metadata.json` | Project metadata |

## Key Design Elements

### Typography
- **Serif:** Playfair Display (headings)
- **Sans:** Inter (body text)

### Colors
- **Navy:** `#1a2c3d` (primary brand color)
- **Sage:** `#f1f4f1` (secondary/accent background)
- **Background:** `#fcfcf9` (warm off-white)

### Design Patterns
1. **Fixed navbar** with scroll-triggered shadow
2. **Two-column hero** with therapist card
3. **Interactive quiz** component
4. **Symptom recognition** cards with left border accent
5. **Philosophy section** with navy background
6. **Service cards** with hover animations
7. **Numbered steps** with timeline layout
8. **Large rounded CTA** section
9. **Multi-column footer**

## Implementation Notes

When applying to existing `index.html`:
- ✅ Keep all existing copy unchanged
- ✅ Keep all CTAs and links intact  
- ✅ Keep all schema markup
- ✅ Keep GA4 tracking
- ❌ Don't add the Quiz component (CRPO compliance concern)
- ✅ Apply visual styling only

## Tailwind Classes to Extract

Key utility patterns used:
- `rounded-2xl`, `rounded-3xl` - card and section rounding
- `shadow-xl`, `shadow-2xl` - depth
- `tracking-widest`, `tracking-[0.3em]` - label text
- `text-[10px]` - small labels
- `hover:scale-[1.02]` - button hover effects
- `transition-all duration-300` - smooth animations

