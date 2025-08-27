#!/usr/bin/env python3

import os
import glob
import re

def find_hero_sections(content):
    """Find hero sections that contain CTAs"""
    
    # Common hero section patterns
    hero_patterns = [
        r'<section[^>]*class="[^"]*hero[^"]*"[^>]*>.*?</section>',
        r'<div[^>]*class="[^"]*hero[^"]*"[^>]*>.*?</div>',
        r'<section[^>]*hero[^>]*>.*?</section>',
        # Also check for sections right after H1 tags
        r'<h1[^>]*>.*?</h1>.*?<div[^>]*style="[^"]*flex[^"]*"[^>]*>.*?</div>',
    ]
    
    hero_sections = []
    for pattern in hero_patterns:
        matches = re.finditer(pattern, content, re.DOTALL | re.IGNORECASE)
        for match in matches:
            hero_sections.append({
                'pattern': pattern,
                'start': match.start(),
                'end': match.end(),
                'content': match.group(0)
            })
    
    return hero_sections

def has_dual_phone_ctas(hero_content):
    """Check if hero section has dual phone CTAs that need fixing"""
    
    # Look for patterns indicating dual phone CTAs
    phone_cta_patterns = [
        # Pattern 1: "Call (416) 306-2157" followed by "(416) 306-2157"
        r'Call \(416\) 306-2157.*?\(416\) 306-2157',
        # Pattern 2: Two tel: links close together
        r'href="tel:\+14163062157"[^>]*>Call \(416\) 306-2157</a>.*?href="tel:\+14163062157"[^>]*>\(416\) 306-2157</a>',
    ]
    
    for pattern in phone_cta_patterns:
        if re.search(pattern, hero_content, re.DOTALL):
            return True
    return False

def fix_hero_ctas(content, file_path):
    """Fix hero CTAs to use dual strategy"""
    
    # Determine contact path based on file location
    if '/services/' in file_path:
        contact_path = '../index.html#contact'
    elif '/seo/' in file_path:
        contact_path = '../../index.html#contact'
    else:
        contact_path = 'index.html#contact'
    
    # Fix multiple patterns of dual phone CTAs
    fixes = [
        # Pattern 1: Standard dual phone buttons
        (r'(<a[^>]*href="tel:\+14163062157"[^>]*class="btn btn-primary"[^>]*>)Call \(416\) 306-2157(</a>\s*<a[^>]*href="tel:\+14163062157"[^>]*class="btn btn-secondary"[^>]*>)\(416\) 306-2157(</a>)',
         fr'\1Call or Text (416) 306-2157\2Get Help Today\3'),
        
        # Pattern 2: Fix href of second button to contact form
        (r'(<a href="tel:\+14163062157" class="btn btn-secondary">Get Help Today</a>)',
         f'<a href="{contact_path}" class="btn btn-secondary">Get Help Today</a>'),
        
        # Pattern 3: Any remaining dual phone patterns
        (r'(<a[^>]*href="tel:\+14163062157"[^>]*>)Call \(416\) 306-2157(</a>[^<]*<a[^>]*href="tel:\+14163062157"[^>]*>)\(416\) 306-2157(</a>)',
         fr'\1Call or Text (416) 306-2157\2Get Help Today\3'),
        
        # Pattern 4: Fix second button href for contact form
        (r'(<a[^>]*href="tel:\+14163062157"[^>]*>Get Help Today</a>)',
         f'<a href="{contact_path}" class="btn btn-secondary">Get Help Today</a>'),
    ]
    
    for pattern, replacement in fixes:
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    return content

def process_file(file_path):
    """Process a single HTML file"""
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()
        
        # Find hero sections
        hero_sections = find_hero_sections(original_content)
        
        needs_fixing = False
        for hero in hero_sections:
            if has_dual_phone_ctas(hero['content']):
                needs_fixing = True
                break
        
        if needs_fixing:
            print(f"🔧 FIXING: {os.path.basename(file_path)}")
            fixed_content = fix_hero_ctas(original_content, file_path)
            
            if fixed_content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(fixed_content)
                return True
            else:
                print(f"   ⚠️  No changes made despite detection")
        else:
            print(f"✅ OK: {os.path.basename(file_path)}")
        
        return False
        
    except Exception as e:
        print(f"❌ ERROR: {os.path.basename(file_path)} - {e}")
        return False

def main():
    print("🚀 SYSTEMATIC HERO CTA FIX - Processing ALL non-homepage pages")
    print("=" * 60)
    
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
    
    print(f"📊 Found {total_files} files to check")
    print("=" * 60)
    
    for file_path in sorted(all_files):
        if process_file(file_path):
            fixed_count += 1
    
    print("=" * 60)
    print(f"🎉 SYSTEMATIC HERO CTA FIX COMPLETE!")
    print(f"📈 Fixed {fixed_count} out of {total_files} files")
    print(f"🎯 All hero CTAs should now be: Call/Text + Contact Form")

if __name__ == "__main__":
    main()