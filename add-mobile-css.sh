#!/bin/bash

# Add mobile CSS to key pages
pages=(
    "index.html"
    "public/toronto-depression-therapy.html"
    "public/online-therapy-depression.html"
    "public/therapy-goals-depression.html"
    "public/psychotherapy-counselling-depression.html"
    "public/services/anxiety-therapy.html"
    "public/services/depression-mood-support.html"
    "public/services/life-transitions.html"
    "public/services/mens-mental-health.html"
    "public/services/relationship-therapy.html"
    "public/services/workplace-stress-burnout.html"
)

for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        # Check if mobile CSS is already included
        if ! grep -q "mobile-optimizations.css" "$page"; then
            # Add mobile CSS link after shared.min.css
            sed -i '' '/<link rel="stylesheet" href="[^"]*shared.min.css">/a\
    <link rel="stylesheet" href="/mobile-optimizations.css">
' "$page"
            echo "✅ Added mobile CSS to $page"
        else
            echo "⏭️  Mobile CSS already in $page"
        fi
    fi
done
