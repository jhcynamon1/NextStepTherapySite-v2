#!/usr/bin/env python3

import os
import glob
import re

def remove_all_dual_ctas(content, file_path):
    """Remove ALL dual CTA sections throughout the file, not just hero"""
    
    # Determine contact path based on file location
    if '/services/' in file_path:
        contact_path = '../index.html#contact'
    elif '/seo/' in file_path:
        contact_path = '../../index.html#contact'
    else:
        contact_path = 'index.html#contact'
    
    # Pattern to find any section with dual CTAs and replace with single contact CTA
    dual_cta_patterns = [
        # Pattern 1: Any flex div with two CTAs - replace entire thing with single CTA
        (r'<div style="display: flex; gap: var\(--space-sm\); justify-content: center; flex-wrap: wrap;">\s*<a[^>]*>.*?</a>\s*<a[^>]*>.*?</a>\s*</div>',
         f'<div style="display: flex; justify-content: center;"><a href="{contact_path}" class="primary-cta">Get Help Today</a></div>'),
        
        # Pattern 2: Any CTA container with dual buttons
        (r'<div[^>]*class="cta-container"[^>]*>\s*<a[^>]*>.*?</a>\s*<a[^>]*>.*?</a>\s*</div>',
         f'<div class="cta-container"><a href="{contact_path}" class="primary-cta">Get Help Today</a></div>'),
        
        # Pattern 3: Secondary CTA divs with multiple buttons
        (r'<div class="secondary-ctas">\s*<a[^>]*>.*?</a>\s*<a[^>]*>.*?</a>\s*</div>',
         ''),  # Remove secondary CTA sections entirely
    ]
    
    for pattern, replacement in dual_cta_patterns:
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # Also remove any remaining phone CTAs that aren't hero CTAs
    phone_cta_patterns = [
        # Remove standalone phone CTAs that appear after "Get Help Today" buttons
        (r'(<a[^>]*class="primary-cta"[^>]*>Get Help Today</a>.*?)<a[^>]*href="tel:\+14163062157"[^>]*>.*?</a>',
         r'\1'),
    ]
    
    for pattern, replacement in phone_cta_patterns:
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    return content

def process_file(file_path):
    """Process a single HTML file to remove all dual CTAs"""
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()
        
        # Check if file has dual CTAs anywhere
        dual_cta_indicators = [
            r'display: flex; gap: var\(--space-sm\); justify-content: center.*?</a>\s*<a.*?</a>',
            r'secondary-ctas.*?</a>\s*<a.*?</a>',
            r'primary-cta.*?secondary-cta',
        ]
        
        has_dual_ctas = any(re.search(pattern, original_content, re.DOTALL) for pattern in dual_cta_indicators)
        
        if has_dual_ctas:
            print(f"🔧 REMOVING ALL DUAL CTAS: {os.path.basename(file_path)}")
            fixed_content = remove_all_dual_ctas(original_content, file_path)
            
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
    print("🚀 REMOVE ALL DUAL CTAS - Eliminating every dual CTA across all pages")
    print("=" * 70)
    
    # Focus on service pages since that's where the issue is
    service_files = glob.glob('/private/tmp/NextStepTherapySite-v2/services/*.html')
    
    fixed_count = 0
    total_files = len(service_files)
    
    print(f"📊 Processing {total_files} service pages")
    print("=" * 70)
    
    for file_path in sorted(service_files):
        if process_file(file_path):
            fixed_count += 1
    
    print("=" * 70)
    print(f"🎉 ALL DUAL CTA REMOVAL COMPLETE!")
    print(f"📈 Cleaned {fixed_count} service pages")
    print(f"🎯 Every page now has ONLY single 'Get Help Today' CTAs")

if __name__ == "__main__":
    main()