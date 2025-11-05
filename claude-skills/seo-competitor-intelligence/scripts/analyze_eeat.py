#!/usr/bin/env python3
"""
Analyze E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals.

For healthcare/therapy content (YMYL), E-E-A-T is critical for rankings.

Detects:
- Author credentials and bio
- Expert verification badges
- Citations to authoritative sources
- Patient testimonials/reviews
- Freshness signals (last updated dates)
- Trust indicators (privacy, contact info)
"""

import re
from bs4 import BeautifulSoup
from datetime import datetime


def detect_credentials(html_content):
    """
    Detect therapist/medical credentials on page.

    Args:
        html_content (str): Raw HTML content

    Returns:
        dict: Credential detection results
    """
    soup = BeautifulSoup(html_content, 'html.parser')
    text = soup.get_text().lower()

    credentials = {
        'crpo': bool(re.search(r'crpo\s*#?\s*\d+', text, re.IGNORECASE)),
        'registered_psychotherapist': 'registered psychotherapist' in text or 'rp' in text,
        'licensed': 'licensed' in text or 'licence' in text or 'license' in text,
        'certified': 'certified' in text or 'certification' in text,
        'phd': 'ph.d' in text or 'phd' in text or 'doctor' in text,
        'masters': 'masters' in text or 'ma' in text or 'msc' in text,
    }

    # Check if credentials are in visible, prominent locations
    # (header, about section, author box)
    prominent = False
    for section in ['header', 'author', 'about', 'bio']:
        section_element = soup.find(class_=re.compile(section, re.IGNORECASE))
        if section_element:
            section_text = section_element.get_text().lower()
            if any(cred in section_text for cred in ['crpo', 'registered', 'licensed']):
                prominent = True
                break

    credentials['prominent_display'] = prominent

    return credentials


def detect_author_bio(html_content):
    """
    Detect author bio or about section.

    Args:
        html_content (str): Raw HTML content

    Returns:
        dict: Author bio detection
    """
    soup = BeautifulSoup(html_content, 'html.parser')

    # Look for author-related sections
    author_indicators = [
        soup.find('section', class_=re.compile('author', re.IGNORECASE)),
        soup.find('div', class_=re.compile('author', re.IGNORECASE)),
        soup.find('div', class_=re.compile('bio', re.IGNORECASE)),
        soup.find('section', id=re.compile('about', re.IGNORECASE)),
    ]

    has_author_section = any(indicator for indicator in author_indicators)

    # Check for author meta tag
    author_meta = soup.find('meta', attrs={'name': 'author'})
    has_author_meta = author_meta is not None

    # Look for detailed bio (300+ characters)
    detailed_bio = False
    if any(indicator for indicator in author_indicators):
        for indicator in author_indicators:
            if indicator:
                bio_text = indicator.get_text(strip=True)
                if len(bio_text) > 300:
                    detailed_bio = True
                    break

    return {
        'has_author_section': has_author_section,
        'has_author_meta': has_author_meta,
        'has_detailed_bio': detailed_bio,
    }


def detect_citations(html_content):
    """
    Detect citations to authoritative sources.

    Args:
        html_content (str): Raw HTML content

    Returns:
        dict: Citation detection
    """
    soup = BeautifulSoup(html_content, 'html.parser')

    # Authoritative sources for therapy/mental health
    authoritative_domains = [
        'crpo.ca',  # College of Registered Psychotherapists of Ontario
        'cmha.ca',  # Canadian Mental Health Association
        'canada.ca',  # Government of Canada
        'ontario.ca',  # Government of Ontario
        'nih.gov',  # National Institutes of Health
        'pubmed',  # Research database
        'ncbi.nlm.nih.gov',  # National Center for Biotechnology Information
        'apa.org',  # American Psychological Association
        'psychology.org.au',  # Australian Psychological Society
    ]

    external_links = soup.find_all('a', href=True)

    citations = {
        'total_external_links': 0,
        'authoritative_citations': 0,
        'citation_domains': [],
    }

    for link in external_links:
        href = link['href'].lower()
        if href.startswith('http'):
            # Check if not internal link
            citations['total_external_links'] += 1

            # Check if to authoritative source
            for domain in authoritative_domains:
                if domain in href:
                    citations['authoritative_citations'] += 1
                    citations['citation_domains'].append(domain)
                    break

    return citations


def detect_testimonials(html_content):
    """
    Detect patient testimonials or reviews.

    Args:
        html_content (str): Raw HTML content

    Returns:
        dict: Testimonial detection
    """
    soup = BeautifulSoup(html_content, 'html.parser')
    text = soup.get_text().lower()

    testimonial_indicators = [
        'testimonial' in text,
        'review' in text and 'patient' in text,
        'client says' in text or 'client said' in text,
        'success story' in text or 'success stories' in text,
    ]

    # Look for testimonial sections
    testimonial_section = soup.find(class_=re.compile('testimonial|review', re.IGNORECASE))

    # Look for blockquotes (often used for testimonials)
    blockquotes = soup.find_all('blockquote')

    return {
        'has_testimonials': any(testimonial_indicators),
        'has_testimonial_section': testimonial_section is not None,
        'blockquote_count': len(blockquotes),
    }


def detect_freshness_signals(html_content):
    """
    Detect content freshness indicators.

    Args:
        html_content (str): Raw HTML content

    Returns:
        dict: Freshness detection
    """
    soup = BeautifulSoup(html_content, 'html.parser')
    text = soup.get_text().lower()

    # Look for "last updated" or "updated" dates
    date_patterns = [
        r'last updated:?\s*(\d{4})',
        r'updated:?\s*(\w+\s+\d+,?\s+\d{4})',
        r'reviewed:?\s*(\w+\s+\d+,?\s+\d{4})',
    ]

    found_dates = []
    for pattern in date_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        found_dates.extend(matches)

    # Check for current year (2025)
    current_year = datetime.now().year
    has_current_year = str(current_year) in text

    # Check for meta tags
    meta_modified = soup.find('meta', attrs={'property': 'article:modified_time'})
    meta_published = soup.find('meta', attrs={'property': 'article:published_time'})

    return {
        'has_update_date': len(found_dates) > 0,
        'found_dates': found_dates,
        'mentions_current_year': has_current_year,
        'has_meta_modified': meta_modified is not None,
        'has_meta_published': meta_published is not None,
    }


def detect_trust_signals(html_content):
    """
    Detect trust indicators.

    Args:
        html_content (str): Raw HTML content

    Returns:
        dict: Trust signal detection
    """
    soup = BeautifulSoup(html_content, 'html.parser')
    text = soup.get_text().lower()

    # Look for trust indicators
    trust_signals = {
        'has_privacy_policy': 'privacy policy' in text or 'privacy' in text,
        'has_contact_page': 'contact' in text or 'contact us' in text,
        'has_phone_number': bool(re.search(r'\(\d{3}\)\s*\d{3}-\d{4}', text)),
        'has_email': bool(re.search(r'[\w\.-]+@[\w\.-]+\.\w+', text)),
        'has_address': 'ontario' in text and ('address' in text or 'location' in text),
        'ssl_implied': True,  # Would need actual URL check
    }

    return trust_signals


def analyze_eeat(html_content, url):
    """
    Complete E-E-A-T analysis.

    Args:
        html_content (str): Raw HTML content
        url (str): URL of the page

    Returns:
        dict: Complete E-E-A-T analysis
    """
    return {
        'url': url,
        'credentials': detect_credentials(html_content),
        'author_bio': detect_author_bio(html_content),
        'citations': detect_citations(html_content),
        'testimonials': detect_testimonials(html_content),
        'freshness': detect_freshness_signals(html_content),
        'trust_signals': detect_trust_signals(html_content),
    }


def compare_eeat(analyses):
    """
    Compare E-E-A-T signals across competitors.

    Args:
        analyses (list): List of E-E-A-T analyses

    Returns:
        dict: Comparative E-E-A-T analysis
    """
    if not analyses:
        return {}

    total = len(analyses)

    # Count presence of key signals
    credentials_count = sum(1 for a in analyses if a['credentials']['prominent_display'])
    author_bio_count = sum(1 for a in analyses if a['author_bio']['has_detailed_bio'])
    citations_count = sum(1 for a in analyses if a['citations']['authoritative_citations'] > 0)
    testimonials_count = sum(1 for a in analyses if a['testimonials']['has_testimonials'])
    freshness_count = sum(1 for a in analyses if a['freshness']['has_update_date'])

    return {
        'total_competitors': total,
        'eeat_usage': {
            'prominent_credentials': f"{credentials_count}/{total}",
            'detailed_author_bio': f"{author_bio_count}/{total}",
            'authoritative_citations': f"{citations_count}/{total}",
            'testimonials': f"{testimonials_count}/{total}",
            'freshness_signals': f"{freshness_count}/{total}",
        },
        'opportunities': {
            'credentials': credentials_count < total,
            'author_bio': author_bio_count < total / 2,
            'citations': citations_count < total,
            'testimonials_with_schema': testimonials_count > 0,  # They have testimonials but likely no Review schema
            'freshness': freshness_count < total / 2,
        }
    }


if __name__ == "__main__":
    print("E-E-A-T analysis script ready")
    print("Usage: Call from Claude with HTML content and URL")
