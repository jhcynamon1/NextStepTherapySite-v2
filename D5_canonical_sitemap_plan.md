# D5: Canonical & Sitemap Implementation Plan

## Canonical URL Policy (Strict Enforcement)

### Format Requirements
- **Host:** `https://nextsteptherapy.ca` (non-www only)
- **Path:** Extensionless (no .html)
- **Trailing Slash:** None
- **Example:** `https://nextsteptherapy.ca/virtual-therapy-ontario`

### Implementation Steps

#### 1. Fix All Canonical Tags
```html
<!-- CORRECT -->
<link rel="canonical" href="https://nextsteptherapy.ca/services">

<!-- WRONG - DO NOT USE -->
<link rel="canonical" href="https://www.nextsteptherapy.ca/services.html">
<link rel="canonical" href="https://nextsteptherapy.ca/services/">
```

#### 2. Update Script for Bulk Canonical Fix
```bash
#!/bin/bash
# fix-canonicals.sh

for file in *.html; do
    # Extract filename without extension
    slug=$(basename "$file" .html)

    # Map special cases
    case "$slug" in
        "index") canonical_path="/" ;;
        *) canonical_path="/$slug" ;;
    esac

    # Replace any existing canonical tag
    sed -i '' "s|<link rel=\"canonical\".*>|<link rel=\"canonical\" href=\"https://nextsteptherapy.ca${canonical_path}\">|g" "$file"
done
```

## Sitemap.xml Update Plan

### Structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Only canonical URLs, no duplicates -->
  <url>
    <loc>https://nextsteptherapy.ca/</loc>
    <lastmod>2025-09-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Core Pages -->
  <url>
    <loc>https://nextsteptherapy.ca/services</loc>
    <lastmod>2025-09-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://nextsteptherapy.ca/contact</loc>
    <lastmod>2025-09-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Service Pages -->
  <url>
    <loc>https://nextsteptherapy.ca/virtual-therapy-ontario</loc>
    <lastmod>2025-09-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>

  <!-- Continue for all canonical pages... -->
</urlset>
```

### Validation Rules
1. No www subdomain URLs
2. No .html extensions
3. No trailing slashes
4. No duplicate entries
5. No redirect source URLs
6. Only include pages that return 200 status

## Robots.txt Configuration
```
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://nextsteptherapy.ca/sitemap.xml

# Block duplicate paths if they exist
Disallow: /*.html$
Disallow: /*/index.html
```

## Vercel.json Canonical Enforcement
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Link",
          "value": "<https://nextsteptherapy.ca/$1>; rel=\"canonical\""
        }
      ]
    }
  ]
}
```

## Implementation Checklist
- [ ] Run canonical fix script on all HTML files
- [ ] Manually verify high-priority pages
- [ ] Generate new sitemap with only canonical URLs
- [ ] Update robots.txt with sitemap location
- [ ] Configure vercel.json for clean URLs
- [ ] Test www → non-www redirect
- [ ] Test .html → extensionless redirect
- [ ] Verify no redirect loops
- [ ] Submit updated sitemap to Google Search Console