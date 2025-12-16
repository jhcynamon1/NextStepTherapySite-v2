#!/bin/bash

# Generate comprehensive sitemap including ALL legitimate HTML pages

echo '<?xml version="1.0" encoding="UTF-8"?>'
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
echo

# Homepage - highest priority
echo '  <!-- Homepage -->'
echo '  <url>'
echo '    <loc>https://nextsteptherapy.ca/</loc>'
echo '    <lastmod>2025-09-19</lastmod>'
echo '    <changefreq>weekly</changefreq>'
echo '    <priority>1.0</priority>'
echo '  </url>'
echo

# Core pages
echo '  <!-- Core Service Pages -->'
for page in services contact counselling-ontario anxiety-therapy-ontario depression-therapy-ontario virtual-therapy-ontario life-transitions; do
    if [ -f "${page}.html" ]; then
        echo "  <url>"
        echo "    <loc>https://nextsteptherapy.ca/${page}</loc>"
        echo "    <lastmod>2025-09-19</lastmod>"
        echo "    <changefreq>weekly</changefreq>"
        echo "    <priority>0.9</priority>"
        echo "  </url>"
    fi
done
echo

# All other legitimate HTML files
echo '  <!-- All Other SEO Pages -->'
for file in *.html; do
    # Skip if no HTML files or if it's a backup/template file
    [ -f "$file" ] || continue

    # Skip backup and template files
    case "$file" in
        "CRITICAL_HOMEPAGE_BACKUP_"*) continue ;;
        "critical-css.html") continue ;;
        "D4_page_template.html") continue ;;
        "index.html") continue ;;  # Already handled as homepage
        "services.html") continue ;;  # Already handled in core pages
        "contact.html") continue ;;  # Already handled in core pages
        "counselling-ontario.html") continue ;;  # Already handled in core pages
        "anxiety-therapy-ontario.html") continue ;;  # Already handled in core pages
        "depression-therapy-ontario.html") continue ;;  # Already handled in core pages
        "virtual-therapy-ontario.html") continue ;;  # Already handled in core pages
        "life-transitions.html") continue ;;  # Already handled in core pages
    esac

    # Extract filename without extension
    slug=$(basename "$file" .html)

    # Determine priority based on page type
    priority="0.7"
    changefreq="weekly"

    # Higher priority for key service pages
    case "$slug" in
        *anxiety*|*depression*|*therapy*ontario*|*virtual-therapy*|*counselling*)
            priority="0.8"
            ;;
        *toronto*|*mississauga*|*ottawa*|*hamilton*)
            priority="0.75"
            ;;
        *university*|*student*|*workplace*)
            priority="0.75"
            ;;
    esac

    echo "  <url>"
    echo "    <loc>https://nextsteptherapy.ca/${slug}</loc>"
    echo "    <lastmod>2025-09-19</lastmod>"
    echo "    <changefreq>${changefreq}</changefreq>"
    echo "    <priority>${priority}</priority>"
    echo "  </url>"
done

# Student pages in subdirectory
if [ -d "students" ]; then
    echo
    echo '  <!-- Student Support Pages -->'
    for file in students/*.html; do
        [ -f "$file" ] || continue
        filename=$(basename "$file" .html)
        echo "  <url>"
        echo "    <loc>https://nextsteptherapy.ca/students/${filename}</loc>"
        echo "    <lastmod>2025-09-19</lastmod>"
        echo "    <changefreq>weekly</changefreq>"
        echo "    <priority>0.8</priority>"
        echo "  </url>"
    done
fi

echo
echo '</urlset>'