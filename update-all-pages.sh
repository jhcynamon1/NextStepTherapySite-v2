#!/bin/bash

# List of SEO and virtual therapy pages to update
pages=(
    "online-mental-health-support-ontario.html"
    "same-day-virtual-therapy-ontario.html"
    "mental-health-northern-ontario.html"
    "virtual-therapy-thunder-bay.html"
    "why-feel-anxious-all-time.html"
    "panic-attacks-driving-ontario.html"
    "therapist-available-today-ontario.html"
    "therapy-covered-insurance-ontario.html"
    "sunday-night-anxiety.html"
    "cant-stop-worrying-work.html"
    "constant-stress-from-job.html"
    "mental-health-ontario-professionals.html"
)

echo "Updating header structure and h1 styling for all SEO pages..."

for page in "${pages[@]}"; do
    if [[ -f "$page" ]]; then
        echo "Processing $page..."
        
        # Update header structure to include logo-section wrapper
        sed -i '' '
        /<div class="header-content">/,/<\/div>/ {
            /<img.*class="logo"/,/<\/nav>/ {
                /<img.*class="logo"/ {
                    s|<img|<div class="logo-section">\n                    <img|
                    s|width="200" height="40" loading="eager">|onerror="this.style.display='\''none'\''">|
                }
                /<a href="index.html" class="logo-text">/ {
                    a\
                    <span class="credentials-badge">CRPO #10979</span>\
                </div>\
                
                }
                /<nav class="nav">/,/<\/nav>/ {
                    s|<nav class="nav">|<nav class="nav">|
                    s|<a href="index.html">Home</a>.*|<a href="index.html">Home</a>\
                    <a href="index.html#contact">Contact</a>|
                    /<a href="index.html#contact">Contact<\/a>/,/<\/nav>/ {
                        /<\/nav>/!d
                    }
                }
            }
        }'
        
    else
        echo "Warning: $page not found"
    fi
done

echo "Header updates complete!"