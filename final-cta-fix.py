#!/usr/bin/env python3

import os
import glob
import re

def fix_dual_ctas(file_path):
    """Fix dual phone CTA patterns in a single file"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Pattern 1: Both buttons with phone numbers, different text
    # "Call (416) 306-2157" and "(416) 306-2157"
    pattern1 = r'(<a href="tel:\+14163062157" class="btn btn-primary"[^>]*>)Call \(416\) 306-2157(</a>\s*<a href="tel:\+14163062157" class="btn btn-secondary"[^>]*>)\(416\) 306-2157(</a>)'
    
    replacement1 = r'\1Call or Text (416) 306-2157\2Get Help Today\3'
    content = re.sub(pattern1, replacement1, content)
    
    # Also fix the href of the second button to point to contact form
    content = re.sub(
        r'(<a href="tel:\+14163062157" class="btn btn-secondary"[^>]*>Get Help Today</a>)',
        get_contact_link(file_path, 'btn btn-secondary'),
        content
    )
    
    # Pattern 2: Handle any other variations
    # Look for consecutive phone CTAs and replace second with contact form
    pattern2 = r'(<a href="tel:\+14163062157"[^>]*class="btn btn-primary"[^>]*>Call or Text \(416\) 306-2157</a>\s*)<a href="tel:\+14163062157"([^>]*class="btn btn-secondary"[^>]*>)[^<]*306-2157[^<]*(</a>)'
    
    replacement2 = r'\1' + get_contact_link(file_path, 'btn btn-secondary', text_only=True)
    content = re.sub(pattern2, replacement2, content)
    
    return content, content != original_content

def get_contact_link(file_path, css_class, text_only=False):
    """Get appropriate contact form link based on file location"""
    
    if '/services/' in file_path:
        contact_path = '../index.html#contact'
    elif '/seo/' in file_path:
        contact_path = '../../index.html#contact'
    else:
        contact_path = 'index.html#contact'
    
    if text_only:
        return f'<a href="{contact_path}" class="{css_class}">Get Help Today</a>'
    else:
        return f'<a href="{contact_path}" class="{css_class}">Get Help Today</a>'

def main():
    print("🔧 Final CTA Fix - Finding and fixing ALL dual phone patterns...")
    
    # Find all HTML files except index.html
    all_files = []
    
    # Service pages
    all_files.extend(glob.glob('/private/tmp/NextStepTherapySite-v2/services/*.html'))
    
    # SEO pages
    all_files.extend(glob.glob('/private/tmp/NextStepTherapySite-v2/seo/*.html'))
    
    # Root pages (exclude index.html)
    root_files = glob.glob('/private/tmp/NextStepTherapySite-v2/*.html')
    all_files.extend([f for f in root_files if not f.endswith('/index.html')])
    
    fixed_count = 0
    
    for file_path in all_files:
        print(f"Processing: {os.path.basename(file_path)}")
        
        try:
            updated_content, was_changed = fix_dual_ctas(file_path)
            
            if was_changed:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                print(f"✅ FIXED: {os.path.basename(file_path)}")
                fixed_count += 1
            else:
                print(f"✓ OK: {os.path.basename(file_path)}")
                
        except Exception as e:
            print(f"❌ ERROR: {os.path.basename(file_path)} - {e}")
    
    print(f"\n🎉 Final CTA Fix Complete!")
    print(f"📊 Fixed {fixed_count} files with dual phone patterns")
    print(f"🎯 All pages now have: Call/Text + Contact Form strategy")

if __name__ == "__main__":
    main()