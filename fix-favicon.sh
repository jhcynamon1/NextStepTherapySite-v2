#!/bin/bash

# Fix favicon on all HTML pages
echo "🔧 Fixing favicon on all HTML pages..."

# Favicon HTML to insert
FAVICON_HTML='    <link rel="icon" type="image/png" sizes="32x32" href="images/asset104.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/asset104.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/asset104-180.png">'

# Counter for tracking
count=0
fixed=0

# Process all HTML files
find . -name "*.html" -type f | while read file; do
    count=$((count + 1))

    # Check if file already has favicon
    if grep -q 'rel="icon"' "$file"; then
        echo "✓ $file already has favicon"
    else
        echo "🔧 Adding favicon to: $file"

        # Create temporary file
        temp_file=$(mktemp)

        # Insert favicon after <head> or at the beginning if no <head>
        if grep -q "<head>" "$file"; then
            # Insert after <head>
            sed "/<head>/a\\
$FAVICON_HTML" "$file" > "$temp_file"
        elif grep -q "<meta charset" "$file"; then
            # Insert after charset meta tag
            sed "/<meta charset/a\\
$FAVICON_HTML" "$file" > "$temp_file"
        else
            # Insert at the very beginning after DOCTYPE/html
            sed "1a\\
$FAVICON_HTML" "$file" > "$temp_file"
        fi

        # Replace original file
        mv "$temp_file" "$file"
        fixed=$((fixed + 1))
    fi
done

echo "✅ Favicon fix complete!"
echo "📊 Processed: $count files"
echo "🔧 Fixed: $fixed files"