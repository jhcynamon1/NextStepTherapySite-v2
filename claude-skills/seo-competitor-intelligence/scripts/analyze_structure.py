#!/usr/bin/env python3
"""
Analyze content structure of competitor pages.

Extracts:
- Heading hierarchy (H1-H6)
- Word count
- Readability metrics
- Link counts (internal/external)
- Content structure patterns
"""

import re
from bs4 import BeautifulSoup
from collections import Counter
import textstat

def analyze_structure(html_content, url):
    """
    Analyze the structural elements of a page.

    Args:
        html_content (str): Raw HTML of the page
        url (str): URL of the page (for context)

    Returns:
        dict: Structural analysis results
    """
    soup = BeautifulSoup(html_content, 'html.parser')

    # Extract all headings
    headings = {
        'h1': [h.get_text(strip=True) for h in soup.find_all('h1')],
        'h2': [h.get_text(strip=True) for h in soup.find_all('h2')],
        'h3': [h.get_text(strip=True) for h in soup.find_all('h3')],
        'h4': [h.get_text(strip=True) for h in soup.find_all('h4')],
        'h5': [h.get_text(strip=True) for h in soup.find_all('h5')],
        'h6': [h.get_text(strip=True) for h in soup.find_all('h6')],
    }

    # Get main content (remove nav, footer, header)
    for tag in soup(['nav', 'footer', 'header', 'script', 'style']):
        tag.decompose()

    # Extract text content
    text_content = soup.get_text(separator=' ', strip=True)

    # Clean text for analysis
    text_content = re.sub(r'\s+', ' ', text_content)

    # Word count
    word_count = len(text_content.split())

    # Readability metrics
    try:
        flesch_kincaid_grade = textstat.flesch_kincaid_grade(text_content)
        flesch_reading_ease = textstat.flesch_reading_ease(text_content)
    except:
        flesch_kincaid_grade = "Unable to calculate"
        flesch_reading_ease = "Unable to calculate"

    # Count paragraphs
    paragraphs = len(soup.find_all('p'))

    # Count lists
    lists = len(soup.find_all(['ul', 'ol']))

    # Count tables
    tables = len(soup.find_all('table'))

    # Analyze links
    all_links = soup.find_all('a', href=True)

    internal_links = 0
    external_links = 0

    for link in all_links:
        href = link['href']
        if href.startswith('http'):
            if url in href or href.startswith('/'):
                internal_links += 1
            else:
                external_links += 1
        elif href.startswith('/') or not href.startswith('#'):
            internal_links += 1

    # Count images
    images = len(soup.find_all('img'))

    return {
        'url': url,
        'word_count': word_count,
        'headings': {
            'h1_count': len(headings['h1']),
            'h2_count': len(headings['h2']),
            'h3_count': len(headings['h3']),
            'h4_count': len(headings['h4']),
            'h5_count': len(headings['h5']),
            'h6_count': len(headings['h6']),
            'h1_text': headings['h1'],
            'h2_text': headings['h2'],
            'h3_text': headings['h3'],
        },
        'readability': {
            'flesch_kincaid_grade': flesch_kincaid_grade,
            'flesch_reading_ease': flesch_reading_ease,
        },
        'content_elements': {
            'paragraphs': paragraphs,
            'lists': lists,
            'tables': tables,
            'images': images,
        },
        'links': {
            'internal': internal_links,
            'external': external_links,
            'total': internal_links + external_links,
        }
    }


def compare_structures(analyses):
    """
    Compare structural patterns across multiple competitor pages.

    Args:
        analyses (list): List of analysis results from analyze_structure

    Returns:
        dict: Comparative analysis
    """
    if not analyses:
        return {}

    word_counts = [a['word_count'] for a in analyses]
    h2_counts = [a['headings']['h2_count'] for a in analyses]
    h3_counts = [a['headings']['h3_count'] for a in analyses]

    return {
        'averages': {
            'word_count': sum(word_counts) / len(word_counts),
            'h2_count': sum(h2_counts) / len(h2_counts),
            'h3_count': sum(h3_counts) / len(h3_counts),
        },
        'ranges': {
            'word_count': {'min': min(word_counts), 'max': max(word_counts)},
            'h2_count': {'min': min(h2_counts), 'max': max(h2_counts)},
            'h3_count': {'min': min(h3_counts), 'max': max(h3_counts)},
        }
    }


if __name__ == "__main__":
    # This script is designed to be called by Claude
    # with HTML content passed as input
    print("Structure analysis script ready")
    print("Usage: Call from Claude with HTML content and URL")
