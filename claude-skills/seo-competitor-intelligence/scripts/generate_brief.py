#!/usr/bin/env python3
"""
Generate "Beat the Competition" content brief.

Takes all analysis results and formats them into an actionable brief.
"""


def generate_competitive_brief(
    target_keyword,
    structure_analysis,
    schema_analysis,
    eeat_analysis,
    topic_clusters,
    user_advantages
):
    """
    Generate a complete competitive brief.

    Args:
        target_keyword (str): Target keyword
        structure_analysis (dict): Results from analyze_structure
        schema_analysis (dict): Results from analyze_schema
        eeat_analysis (dict): Results from analyze_eeat
        topic_clusters (dict): Topic cluster analysis
        user_advantages (list): User's unique differentiators

    Returns:
        str: Formatted competitive brief in markdown
    """

    brief = f"""# COMPETITIVE BRIEF: {target_keyword}

## COMPETITOR BENCHMARKS

### Structure
- **Average word count:** {structure_analysis['averages']['word_count']:.0f} words
- **Average H2 count:** {structure_analysis['averages']['h2_count']:.0f}
- **Average H3 count:** {structure_analysis['averages']['h3_count']:.0f}
- **Word count range:** {structure_analysis['ranges']['word_count']['min']:.0f} - {structure_analysis['ranges']['word_count']['max']:.0f}

### Schema Usage
- **FAQPage schema:** {schema_analysis['schema_usage']['FAQPage']} competitors use it
- **MedicalWebPage schema:** {schema_analysis['schema_usage']['MedicalWebPage']} competitors use it
- **Review schema:** {schema_analysis['schema_usage']['Review']} competitors use it
- **LocalBusiness schema:** {schema_analysis['schema_usage']['LocalBusiness']} competitors use it

### E-E-A-T Signals
- **Prominent credentials:** {eeat_analysis['eeat_usage']['prominent_credentials']} competitors show them
- **Detailed author bio:** {eeat_analysis['eeat_usage']['detailed_author_bio']} competitors have one
- **Authoritative citations:** {eeat_analysis['eeat_usage']['authoritative_citations']} competitors cite sources
- **Testimonials:** {eeat_analysis['eeat_usage']['testimonials']} competitors have them
- **Freshness signals:** {eeat_analysis['eeat_usage']['freshness_signals']} competitors show update dates

---

## YOUR ADVANTAGES

"""

    for advantage in user_advantages:
        brief += f"✓ {advantage}\n"

    brief += "\n---\n\n"

    brief += """## TOPIC CLUSTERS

### Core Topics (covered by most/all competitors)
You MUST cover these to be competitive:

"""

    if 'core' in topic_clusters:
        for topic in topic_clusters['core']:
            brief += f"- {topic}\n"

    brief += "\n### Secondary Topics (covered by some competitors)\n"
    brief += "Include these to match better performers:\n\n"

    if 'secondary' in topic_clusters:
        for topic in topic_clusters['secondary']:
            brief += f"- {topic}\n"

    brief += "\n### CONTENT GAPS (opportunities)\n"
    brief += "These topics are underserved - BIG opportunities:\n\n"

    if 'gaps' in topic_clusters:
        for gap in topic_clusters['gaps']:
            brief += f"❌ {gap}\n"

    brief += "\n---\n\n"

    brief += """## SCHEMA OPPORTUNITIES

Add these schemas for competitive advantage:

"""

    if schema_analysis['opportunities'].get('FAQ'):
        brief += "⚠️ **FAQPage:** Some competitors use it - you should too\n"

    if schema_analysis['opportunities'].get('Review'):
        brief += "🔥 **Review schema:** NO competitors use it - HUGE OPPORTUNITY\n"

    if schema_analysis['opportunities'].get('MedicalWebPage'):
        brief += "⚠️ **MedicalWebPage:** Less than half use it - strong advantage\n"

    if schema_analysis['opportunities'].get('LocalBusiness'):
        brief += "⚠️ **LocalBusiness:** Not all competitors have it - add for local SEO\n"

    brief += "\n---\n\n"

    brief += """## E-E-A-T OPPORTUNITIES

Strengthen these trust signals:

"""

    if eeat_analysis['opportunities'].get('credentials'):
        brief += "✓ **Display specific credentials prominently** (CRPO #, license #)\n"

    if eeat_analysis['opportunities'].get('author_bio'):
        brief += "✓ **Add detailed author bio** (300+ characters with credentials)\n"

    if eeat_analysis['opportunities'].get('citations'):
        brief += "✓ **Cite authoritative sources** (CRPO, CMHA, research)\n"

    if eeat_analysis['opportunities'].get('testimonials_with_schema'):
        brief += "🔥 **Add Review schema to testimonials** (competitors have testimonials but no schema!)\n"

    if eeat_analysis['opportunities'].get('freshness'):
        brief += "✓ **Show 'Last Updated' date** (only some competitors do this)\n"

    brief += "\n---\n\n"

    brief += f"""## RECOMMENDED WORD COUNT

**Target:** {int(structure_analysis['averages']['word_count'] * 1.05):.0f} - {int(structure_analysis['averages']['word_count'] * 1.15):.0f} words

This beats the average ({structure_analysis['averages']['word_count']:.0f}) by 5-15% without being excessive.

---

## NEXT STEPS

1. **Create outline** covering all core topics + gaps
2. **Add schema markup** for identified opportunities
3. **Strengthen E-E-A-T** with credentials, bio, citations
4. **Hit word count target** with comprehensive, valuable content
5. **Internal linking strategy** to related service/blog pages
6. **Optimize for featured snippets** with FAQ schema

---

## EXPECTED IMPACT

Based on gaps identified, this content should:

- ✓ **Rank higher** due to superior schema markup
- ✓ **Better user trust** through stronger E-E-A-T signals
- ✓ **Capture featured snippets** through FAQ/Review schema
- ✓ **Fill content gaps** that competitors miss
- ✓ **Local SEO advantage** through Ontario-specific content

"""

    return brief


if __name__ == "__main__":
    print("Brief generator script ready")
    print("Usage: Call from Claude with analysis results")
