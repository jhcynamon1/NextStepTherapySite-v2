#!/usr/bin/env python3

import os
import re

# List of files that might still have dual phone patterns
files_to_check = [
    '/private/tmp/NextStepTherapySite-v2/general-anxiety-and-stress-therapy.html',
    '/private/tmp/NextStepTherapySite-v2/work-anxiety-and-stress.html',
    '/private/tmp/NextStepTherapySite-v2/personal-growth-confidence-building.html',
    '/private/tmp/NextStepTherapySite-v2/work-stress-assessment.html',
    '/private/tmp/NextStepTherapySite-v2/contact.html',
]

def fix_specific_patterns(content, file_path):
    """Fix any remaining dual phone patterns"""
    
    # Get appropriate contact path
    if '/services/' in file_path:
        contact_path = '../index.html#contact'
    elif '/seo/' in file_path:
        contact_path = '../../index.html#contact'
    else:
        contact_path = 'index.html#contact'
    
    # Pattern for any button structure with duplicate phone numbers
    patterns_to_fix = [
        # Pattern 1: Standard btn structure
        (r'(<a[^>]*href="tel:\+14163062157"[^>]*class="btn btn-primary"[^>]*>)Call \(416\) 306-2157(</a>\s*<a[^>]*href="tel:\+14163062157"[^>]*class="btn btn-secondary"[^>]*>)\(416\) 306-2157(</a>)', 
         r'\1Call or Text (416) 306-2157\2Get Help Today\3'),
        
        # Pattern 2: Any two consecutive phone links
        (r'(<a[^>]*href="tel:\+14163062157"[^>]*>)Call \(416\) 306-2157(</a>[^<]*<a[^>]*href="tel:\+14163062157"[^>]*>)\(416\) 306-2157(</a>)',
         r'\1Call or Text (416) 306-2157\2Get Help Today\3'),
         
        # Pattern 3: dmButtonLink structure (older templates)
        (r'(<a[^>]*dmButtonLink[^>]*href="tel:\+14163062157"[^>]*>.*?)Call \(416\) 306-2157(.*?</a>.*?<a[^>]*dmButtonLink[^>]*href="tel:\+14163062157"[^>]*>.*?)\(416\) 306-2157(.*?</a>)',
         r'\1Call or Text (416) 306-2157\2Get Help Today\3'),
    ]
    
    for pattern, replacement in patterns_to_fix:
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # Fix any remaining tel: links that should be contact form links for "Get Help Today"
    content = re.sub(
        r'(<a[^>]*href="tel:\+14163062157"[^>]*>)Get Help Today(</a>)',
        f'<a href="{contact_path}" class="btn btn-secondary">Get Help Today</a>',
        content
    )
    
    return content

def main():
    print("🔧 Fixing remaining dual phone patterns...")
    
    fixed_count = 0
    
    for file_path in files_to_check:
        if not os.path.exists(file_path):
            print(f"⚠️  File not found: {file_path}")
            continue
            
        print(f"Checking: {os.path.basename(file_path)}")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                original_content = f.read()
            
            # Check if it has the problematic pattern
            if 'Call (416) 306-2157' in original_content and '(416) 306-2157' in original_content:
                print(f"  → Found dual phone pattern, fixing...")
                
                fixed_content = fix_specific_patterns(original_content, file_path)
                
                if fixed_content != original_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(fixed_content)
                    print(f"✅ FIXED: {os.path.basename(file_path)}")
                    fixed_count += 1
                else:
                    print(f"⚠️  Pattern found but no changes made: {os.path.basename(file_path)}")
            else:
                print(f"✓ OK: {os.path.basename(file_path)}")
                
        except Exception as e:
            print(f"❌ ERROR: {os.path.basename(file_path)} - {e}")
    
    print(f"\n🎉 Final fix complete!")
    print(f"📊 Fixed {fixed_count} additional files")

if __name__ == "__main__":
    main()