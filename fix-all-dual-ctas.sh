#!/bin/bash

# Comprehensive script to fix all dual CTA patterns
echo "Implementing comprehensive dual CTA strategy across ALL pages..."

fix_file() {
    local file="$1"
    local contact_path="$2"
    
    if [ ! -f "$file" ] || [ "$(basename "$file")" = "index.html" ]; then
        return
    fi
    
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "$file.backup"
    
    # Use sed to replace various dual phone CTA patterns
    # Pattern 1: Primary button with "Call (416) 306-2157" and secondary with just "(416) 306-2157"
    sed -i 's|<a href="tel:+14163062157" class="btn btn-primary">Call (416) 306-2157</a>\s*<a href="tel:+14163062157" class="btn btn-secondary">(416) 306-2157</a>|<a href="tel:+14163062157" class="btn btn-primary">Call or Text (416) 306-2157</a>\n                        <a href="'"$contact_path"'" class="btn btn-secondary">Get Help Today</a>|g' "$file"
    
    # Pattern 2: Both buttons with "Call (416) 306-2157"
    sed -i 's|<a href="tel:+14163062157" class="btn btn-primary">Call (416) 306-2157</a>\s*<a href="tel:+14163062157" class="btn btn-secondary">Call (416) 306-2157</a>|<a href="tel:+14163062157" class="btn btn-primary">Call or Text (416) 306-2157</a>\n                        <a href="'"$contact_path"'" class="btn btn-secondary">Get Help Today</a>|g' "$file"
    
    # Pattern 3: Different class structures - primary-cta and secondary-cta
    sed -i 's|<a href="tel:+14163062157" class="primary-cta">Call or Text (416) 306-2157</a>\s*<a href="tel:+14163062157" class="secondary-cta">Call or Text (416) 306-2157</a>|<a href="tel:+14163062157" class="primary-cta">Call or Text (416) 306-2157</a>\n                        <a href="'"$contact_path"'" class="secondary-cta">Get Help Today</a>|g' "$file"
    
    # Pattern 4: Handle any remaining "Send Message" that should be "Get Help Today"
    sed -i 's|>Send Message</a>|>Get Help Today</a>|g' "$file"
    
    # Clean up backup
    rm "$file.backup" 2>/dev/null || true
    
    echo "✓ Fixed: $file"
}

# Get the correct contact path for each directory level
echo "Fixing service pages..."
for file in /private/tmp/NextStepTherapySite-v2/services/*.html; do
    fix_file "$file" "../index.html#contact"
done

echo "Fixing SEO pages..."
for file in /private/tmp/NextStepTherapySite-v2/seo/*.html; do
    fix_file "$file" "../../index.html#contact"
done

echo "Fixing root level pages..."
for file in /private/tmp/NextStepTherapySite-v2/*.html; do
    if [ "$(basename "$file")" != "index.html" ]; then
        fix_file "$file" "index.html#contact"
    fi
done

echo ""
echo "Comprehensive dual CTA strategy implementation complete!"
echo "All pages should now have: Call/Text (phone) + Get Help Today (contact form)"