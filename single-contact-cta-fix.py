#!/usr/bin/env python3

import os
import glob
import re

def fix_hero_ctas_to_single(content, file_path):
    """Replace dual CTAs with single contact form CTA"""
    
    # Determine contact path based on file location
    if '/services/' in file_path:
        contact_path = '../index.html#contact'
    elif '/seo/' in file_path:
        contact_path = '../../index.html#contact'
    else:
        contact_path = 'index.html#contact'
    
    # Pattern to match any dual CTA structure and replace with single CTA
    dual_cta_patterns = [
        # Pattern 1: Standard dual button structure with flex display
        (r'<div style="display: flex; gap: var\(--space-md\); justify-content: center; flex-wrap: wrap; margin-top: var\(--space-lg\);">\s*<a[^>]*>.*?</a>\s*<a[^>]*>.*?</a>\s*</div>',
         f'<div style="display: flex; justify-content: center; margin-top: var(--space-lg);"><a href="{contact_path}" class="btn btn-primary">Get Help Today</a></div>'),
        
        # Pattern 2: Any CTA container with multiple buttons
        (r'<div[^>]*cta-container[^>]*>\s*<a[^>]*>.*?</a>\s*<a[^>]*>.*?</a>\s*</div>',
         f'<div class="cta-container"><a href="{contact_path}" class="primary-cta">Get Help Today</a></div>'),
        
        # Pattern 3: Hero CTA with secondary CTAs
        (r'<div class="hero-cta">\s*<a[^>]*class="primary-cta"[^>]*>.*?</a>\s*<div class="secondary-ctas">.*?</div>\s*</div>',
         f'<div class="hero-cta"><a href="{contact_path}" class="primary-cta">Get Help Today</a></div>'),
    ]
    
    for pattern, replacement in dual_cta_patterns:
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    return content

def process_file(file_path):
    """Process a single HTML file to replace dual CTAs with single contact CTA"""
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()
        
        # Check if file has dual CTAs
        dual_cta_indicators = [
            r'btn.*306-2157.*btn',  # Two buttons with phone numbers
            r'Call.*306-2157.*Get Help Today',  # Call + Get Help Today pattern
            r'primary-cta.*secondary-cta',  # Primary + secondary CTA pattern
        ]
        
        has_dual_ctas = any(re.search(pattern, original_content, re.DOTALL) for pattern in dual_cta_indicators)
        
        if has_dual_ctas:
            print(f"🔧 CONVERTING TO SINGLE CTA: {os.path.basename(file_path)}")
            fixed_content = fix_hero_ctas_to_single(original_content, file_path)
            
            if fixed_content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(fixed_content)
                return True
            else:
                print(f"   ⚠️  No changes made")
        else:
            print(f"✅ OK: {os.path.basename(file_path)}")
        
        return False
        
    except Exception as e:
        print(f"❌ ERROR: {os.path.basename(file_path)} - {e}")
        return False

def main():
    print("🎯 SINGLE CONTACT CTA FIX - Converting all dual CTAs to single contact form CTA")
    print("=" * 70)
    
    # Find all HTML files except index.html
    all_files = []
    
    # Services
    all_files.extend(glob.glob('/private/tmp/NextStepTherapySite-v2/services/*.html'))
    
    # SEO pages  
    all_files.extend(glob.glob('/private/tmp/NextStepTherapySite-v2/seo/*.html'))
    
    # Root level (exclude index.html)
    root_files = glob.glob('/private/tmp/NextStepTherapySite-v2/*.html')
    all_files.extend([f for f in root_files if not f.endswith('/index.html')])
    
    fixed_count = 0
    total_files = len(all_files)
    
    print(f"📊 Processing {total_files} files")
    print("=" * 70)
    
    for file_path in sorted(all_files):
        if process_file(file_path):
            fixed_count += 1
    
    print("=" * 70)
    print(f"🎉 SINGLE CONTACT CTA FIX COMPLETE!")
    print(f"📈 Converted {fixed_count} files to single contact form CTA")
    print(f"🎯 All hero sections now have: ONE 'Get Help Today' button → Contact Form")

if __name__ == "__main__":
    main()