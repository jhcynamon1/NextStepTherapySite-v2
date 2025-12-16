# 🚀 SEO PAGE CREATION COMMAND

## COMMAND SYNTAX

```
./seopage [SERVICE] [CITY] [FOCUS]
```

## EXAMPLES

```
./seopage "anxiety therapy" "Burlington" "working professionals and commuters"
./seopage "ADHD therapy" "Mississauga" "adults with executive function challenges"
./seopage "trauma therapy" "Ottawa" "first responders and government workers"
./seopage "student mental health" "Guelph" "University of Guelph students"
```

## WHAT THIS COMMAND DOES

When you run `./seopage`, I will:

1. **Read the PRD**: Automatically load `MANUS_PAGE_CREATION_PRD_COMPLETE.md`
2. **Analyze the keyword**: Determine page type (service-city, student, condition-specific)
3. **Select template**: Use `anxiety-therapy-toronto.html` as base template
4. **Create the page**: Generate fully compliant content following all standards
5. **Implement SEO**: Add all meta tags, schema markup, proper H1/H2 structure
6. **Apply Manus design**: Use exact colors, fonts, spacing, CTA styles
7. **Ensure CRPO compliance**: Add registration #10979, proper language
8. **Set up CTAs**: Main CTA → `/#contact`, Phone → `tel:+14163062157`
9. **Update sitemap**: Add new page entry with proper priority
10. **Test validity**: Check HTML, schema, and compliance
11. **Commit to Git**: With standardized commit message
12. **Deploy to Vercel**: Push live to production
13. **Verify deployment**: Confirm page is accessible

## AUTOMATED WORKFLOW

```bash
# You type:
./seopage "depression therapy" "London" "Western University students and healthcare workers"

# I automatically:
1. Read MANUS_PAGE_CREATION_PRD_COMPLETE.md ✓
2. Create depression-therapy-london.html ✓
3. Customize all content for London/Western ✓
4. Add proper schema and SEO markup ✓
5. Update sitemap.xml ✓
6. Git add, commit, push ✓
7. Deploy via Vercel ✓
8. Provide live URL ✓
```

## OUTPUT STRUCTURE

Based on the service and city, the command will create:

- **Service-City Pages**: `[service]-[city].html`
  - Example: `anxiety-therapy-burlington.html`

- **Student Pages**: `students/student-mental-health-[city].html`
  - Example: `students/student-mental-health-guelph.html`

- **Condition Pages**: `[condition]-therapy-[city].html`
  - Example: `adhd-therapy-mississauga.html`

## WHAT YOU GET

✅ **Fully Manus-compliant page** with exact design standards
✅ **Complete SEO optimization** with schema markup
✅ **CRPO compliance** with registration #10979
✅ **Local context** specific to the city/university
✅ **Working CTAs** that route to homepage contact
✅ **Sitemap integration** for search indexing
✅ **Git history** with proper commit messages
✅ **Live deployment** on nextsteptherapy.ca
✅ **Verification** that page is accessible

## CITIES SUPPORTED

**Major Cities:**
- Toronto, Ottawa, Hamilton, London, Kingston, Waterloo, Mississauga, Burlington, Oakville, Kitchener

**University Cities:**
- Guelph (University of Guelph)
- St. Catharines (Brock University)
- Thunder Bay (Lakehead University)
- Sudbury (Laurentian University)
- Windsor (University of Windsor)
- Peterborough (Trent University)

## SERVICES SUPPORTED

**Anxiety Conditions:**
- anxiety therapy, social anxiety therapy, panic disorder therapy, generalized anxiety therapy

**Mood Conditions:**
- depression therapy, bipolar support, mood disorder therapy

**Trauma & PTSD:**
- trauma therapy, PTSD therapy, childhood trauma therapy

**Neurodevelopmental:**
- ADHD therapy, autism support, executive function therapy

**Specific Populations:**
- student mental health, workplace stress, relationship therapy, grief counselling

## COMMAND FLAGS (OPTIONAL)

```bash
# Skip deployment (create locally only)
./seopage "anxiety therapy" "Burlington" "professionals" --local

# Create in student directory
./seopage "student support" "Guelph" "university students" --student

# High priority page (0.9 in sitemap)
./seopage "anxiety therapy" "Toronto" "downtown professionals" --priority=high

# Custom meta description
./seopage "ADHD therapy" "Ottawa" "government workers" --meta="Custom meta description here"
```

## QUICK START

Just type:
```
./seopage "[your service]" "[your city]" "[your focus audience]"
```

And I'll handle EVERYTHING else according to the comprehensive PRD standards.

---

*This command automates the entire page creation process while maintaining 100% compliance with Manus design, SEO best practices, and CRPO regulations.*