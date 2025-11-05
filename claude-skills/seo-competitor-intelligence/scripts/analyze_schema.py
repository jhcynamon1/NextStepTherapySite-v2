#!/usr/bin/env python3
"""
Analyze schema markup on competitor pages.

Extracts and compares:
- Schema types used (MedicalWebPage, LocalBusiness, FAQ, Review, etc.)
- Schema format (JSON-LD, microdata, RDFa)
- Completeness of schema properties
- Opportunities for competitive advantage
"""

import json
import re
from bs4 import BeautifulSoup


def extract_jsonld_schema(html_content):
    """
    Extract all JSON-LD schema blocks from HTML.

    Args:
        html_content (str): Raw HTML content

    Returns:
        list: List of schema objects found
    """
    soup = BeautifulSoup(html_content, 'html.parser')
    schemas = []

    # Find all JSON-LD script tags
    script_tags = soup.find_all('script', type='application/ld+json')

    for script in script_tags:
        try:
            schema_data = json.loads(script.string)
            schemas.append(schema_data)
        except json.JSONDecodeError:
            continue

    return schemas


def identify_schema_types(schemas):
    """
    Identify the types of schema markup present.

    Args:
        schemas (list): List of schema objects

    Returns:
        dict: Schema types found with counts
    """
    schema_types = []

    for schema in schemas:
        if isinstance(schema, dict):
            # Handle single schema object
            schema_type = schema.get('@type', None)
            if schema_type:
                schema_types.append(schema_type)

            # Handle @graph arrays (multiple schemas in one)
            if '@graph' in schema:
                for item in schema['@graph']:
                    item_type = item.get('@type', None)
                    if item_type:
                        schema_types.append(item_type)

        elif isinstance(schema, list):
            # Handle array of schemas
            for item in schema:
                item_type = item.get('@type', None)
                if item_type:
                    schema_types.append(item_type)

    # Count occurrences
    from collections import Counter
    type_counts = Counter(schema_types)

    return dict(type_counts)


def check_healthcare_schema(schemas):
    """
    Check for healthcare-specific schema types.

    Args:
        schemas (list): List of schema objects

    Returns:
        dict: Healthcare schema presence
    """
    healthcare_schemas = {
        'MedicalWebPage': False,
        'MedicalEntity': False,
        'MedicalCondition': False,
        'MedicalSpecialty': False,
        'Physician': False,
        'MedicalBusiness': False,
    }

    all_types = identify_schema_types(schemas)

    for schema_type in all_types.keys():
        if schema_type in healthcare_schemas:
            healthcare_schemas[schema_type] = True

    return healthcare_schemas


def check_local_schema(schemas):
    """
    Check for local business schema presence.

    Args:
        schemas (list): List of schema objects

    Returns:
        dict: Local business schema details
    """
    local_schema = {
        'LocalBusiness': False,
        'ProfessionalService': False,
        'has_address': False,
        'has_geo': False,
        'has_telephone': False,
        'has_openingHours': False,
    }

    for schema in schemas:
        if isinstance(schema, dict):
            schema_type = schema.get('@type', '')

            if 'LocalBusiness' in str(schema_type) or 'ProfessionalService' in str(schema_type):
                local_schema['LocalBusiness'] = True

                # Check for address
                if 'address' in schema:
                    local_schema['has_address'] = True

                # Check for geo coordinates
                if 'geo' in schema or 'GeoCoordinates' in str(schema):
                    local_schema['has_geo'] = True

                # Check for telephone
                if 'telephone' in schema:
                    local_schema['has_telephone'] = True

                # Check for opening hours
                if 'openingHours' in schema or 'openingHoursSpecification' in schema:
                    local_schema['has_openingHours'] = True

    return local_schema


def check_rich_snippet_schema(schemas):
    """
    Check for schema types that enable rich snippets.

    Args:
        schemas (list): List of schema objects

    Returns:
        dict: Rich snippet schema presence
    """
    rich_snippet_schemas = {
        'FAQPage': False,
        'Review': False,
        'AggregateRating': False,
        'HowTo': False,
        'QAPage': False,
        'BreadcrumbList': False,
    }

    all_types = identify_schema_types(schemas)

    for schema_type in all_types.keys():
        if schema_type in rich_snippet_schemas:
            rich_snippet_schemas[schema_type] = True

    return rich_snippet_schemas


def analyze_schema(html_content, url):
    """
    Complete schema analysis for a page.

    Args:
        html_content (str): Raw HTML content
        url (str): URL of the page

    Returns:
        dict: Complete schema analysis
    """
    schemas = extract_jsonld_schema(html_content)

    return {
        'url': url,
        'schema_count': len(schemas),
        'schema_types': identify_schema_types(schemas),
        'healthcare_schema': check_healthcare_schema(schemas),
        'local_schema': check_local_schema(schemas),
        'rich_snippet_schema': check_rich_snippet_schema(schemas),
        'has_jsonld': len(schemas) > 0,
    }


def compare_schemas(analyses):
    """
    Compare schema usage across multiple competitors.

    Args:
        analyses (list): List of schema analyses

    Returns:
        dict: Comparative schema analysis
    """
    if not analyses:
        return {}

    total = len(analyses)

    # Count how many use each schema type
    faq_count = sum(1 for a in analyses if a['rich_snippet_schema']['FAQPage'])
    review_count = sum(1 for a in analyses if a['rich_snippet_schema']['Review'])
    medical_count = sum(1 for a in analyses if a['healthcare_schema']['MedicalWebPage'])
    local_count = sum(1 for a in analyses if a['local_schema']['LocalBusiness'])

    return {
        'total_competitors': total,
        'schema_usage': {
            'FAQPage': f"{faq_count}/{total}",
            'Review': f"{review_count}/{total}",
            'MedicalWebPage': f"{medical_count}/{total}",
            'LocalBusiness': f"{local_count}/{total}",
        },
        'opportunities': {
            'FAQ': faq_count < total,
            'Review': review_count == 0,  # Big opportunity if none use it
            'MedicalWebPage': medical_count < total / 2,  # Opportunity if less than half
            'LocalBusiness': local_count < total,
        }
    }


if __name__ == "__main__":
    print("Schema analysis script ready")
    print("Usage: Call from Claude with HTML content and URL")
