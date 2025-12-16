#!/bin/bash

# Fix favicon on all HTML pages - v2 with proper sed syntax for macOS
echo "🔧 Fixing favicon on all HTML pages..."

fixed=0
skipped=0

# Process all HTML files
find . -name "*.html" -type f | while read file; do
    # Skip node_modules and other system directories
    if [[ "$file" == *"node_modules"* ]] || [[ "$file" == *"playwright_env"* ]]; then
        continue
    fi

    # Check if file already has favicon
    if grep -q 'rel="icon"' "$file"; then
        echo "✓ $file already has favicon"
        skipped=$((skipped + 1))
    else
        echo "🔧 Adding favicon to: $file"

        # Create temporary file
        temp_file=$(mktemp)

        # Insert favicon after <head> or <meta charset>
        if grep -q "<head>" "$file"; then
            # Insert after first <head> tag
            awk '/<head>/ && !inserted {print; print "    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"images/asset104.png\">"; print "    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"images/asset104.png\">"; print "    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"images/asset104-180.png\">"; inserted=1; next} 1' "$file" > "$temp_file"
        elif grep -q '<meta charset' "$file"; then
            # Insert after charset meta tag
            awk '/<meta charset/ && !inserted {print; print "    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"images/asset104.png\">"; print "    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"images/asset104.png\">"; print "    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"images/asset104-180.png\">"; inserted=1; next} 1' "$file" > "$temp_file"
        else
            # Insert at the beginning after DOCTYPE/html
            awk 'NR==2 && !inserted {print "    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"images/asset104.png\">"; print "    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"images/asset104.png\">"; print "    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"images/asset104-180.png\">"; inserted=1} 1' "$file" > "$temp_file"
        fi

        # Replace original file
        mv "$temp_file" "$file"
        fixed=$((fixed + 1))
    fi
done

echo "✅ Favicon fix complete!"
echo "🔧 Fixed: $fixed files"
echo "✓ Skipped: $skipped files"