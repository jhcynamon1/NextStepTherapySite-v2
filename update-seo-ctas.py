#!/usr/bin/env python3

import os
import glob

# Find all SEO HTML files
seo_files = glob.glob('/private/tmp/NextStepTherapySite-v2/seo/*.html')

for file_path in seo_files:
    print(f"Updating: {file_path}")
    
    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace Send Message with Get Help Today
    updated_content = content.replace('>Send Message</a>', '>Get Help Today</a>')
    
    # Write back if changes were made
    if updated_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print(f"✓ Updated: {file_path}")
    else:
        print(f"- No changes needed: {file_path}")

print("SEO CTA updates complete!")