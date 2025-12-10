#!/usr/bin/env python3
"""
CTR Scorer for Meta Titles
Scores meta titles based on CTR optimization best practices (2024 research)
"""

import re
from typing import Dict, List

class CTRScorer:
    """Score meta titles for click-through rate potential"""

    # Positive sentiment words (4.1% higher CTR)
    POSITIVE_WORDS = [
        "help", "support", "professional", "compassionate", "caring",
        "expert", "specialized", "dedicated", "personalized", "effective",
        "convenient", "accessible", "available", "flexible", "immediate",
        "same-week", "evening", "weekend", "virtual", "online"
    ]

    # Negative/clinical words (lower CTR)
    NEGATIVE_WORDS = [
        "problem", "suffering", "disorder", "diagnosis", "treatment-resistant",
        "chronic", "severe", "crisis"
    ]

    # Power words for emotional appeal
    POWER_WORDS = [
        "professional", "registered", "certified", "evidence-based",
        "specialized", "personalized", "confidential", "safe"
    ]

    def __init__(self):
        self.breakdown = {}

    def score_title(self, title: str, keyword: str = None) -> Dict:
        """
        Score a meta title based on CTR optimization factors

        Returns:
            Dictionary with overall score and component scores
        """
        scores = {
            "keyword_placement": self._score_keyword_placement(title, keyword),
            "length_optimization": self._score_length(title),
            "emotional_appeal": self._score_emotional_appeal(title),
            "differentiation": self._score_differentiation(title)
        }

        total = sum(scores.values())

        return {
            "total_score": total,
            "grade": self._get_grade(total),
            "scores": scores,
            "breakdown": self.breakdown,
            "estimated_ctr_lift": self._estimate_ctr_lift(total)
        }

    def _score_keyword_placement(self, title: str, keyword: str = None) -> int:
        """Score based on keyword placement (0-25 points)"""
        if not keyword:
            self.breakdown["keyword_placement"] = "No keyword provided"
            return 15  # Neutral score

        title_lower = title.lower()
        keyword_lower = keyword.lower()

        if keyword_lower not in title_lower:
            self.breakdown["keyword_placement"] = f"Keyword '{keyword}' not found"
            return 0

        position = title_lower.find(keyword_lower)

        if position == 0:
            self.breakdown["keyword_placement"] = "Front-loaded (optimal for CTR)"
            return 25
        elif position <= 15:
            self.breakdown["keyword_placement"] = "Early in title (good)"
            return 15
        else:
            self.breakdown["keyword_placement"] = "Late in title (poor for CTR)"
            return 5

    def _score_length(self, title: str) -> int:
        """Score based on title length (0-25 points)"""
        length = len(title)

        if 50 <= length <= 60:
            self.breakdown["length_optimization"] = f"{length} chars (optimal for desktop & mobile)"
            return 25
        elif 45 <= length < 50:
            self.breakdown["length_optimization"] = f"{length} chars (good, could be slightly longer)"
            return 20
        elif 60 < length <= 65:
            self.breakdown["length_optimization"] = f"{length} chars (may truncate on mobile)"
            return 15
        elif 40 <= length < 45:
            self.breakdown["length_optimization"] = f"{length} chars (too short, missing value prop)"
            return 10
        else:
            self.breakdown["length_optimization"] = f"{length} chars (poor length for CTR)"
            return 5

    def _score_emotional_appeal(self, title: str) -> int:
        """Score based on emotional appeal and sentiment (0-25 points)"""
        title_lower = title.lower()
        words = set(title_lower.split())

        # Count positive vs negative words
        positive_count = sum(1 for word in words if word in self.POSITIVE_WORDS)
        negative_count = sum(1 for word in words if word in self.NEGATIVE_WORDS)
        power_count = sum(1 for word in words if word in self.POWER_WORDS)

        # Check for all caps (spammy)
        if title.isupper():
            self.breakdown["emotional_appeal"] = "All caps (appears spammy, reduces trust)"
            return 5

        # Score based on sentiment
        if positive_count >= 2 and negative_count == 0:
            self.breakdown["emotional_appeal"] = f"Positive, empathetic tone ({positive_count} positive words)"
            return 25
        elif positive_count > negative_count:
            self.breakdown["emotional_appeal"] = f"Moderately positive ({positive_count} positive, {negative_count} negative)"
            return 18
        elif power_count >= 1 and negative_count == 0:
            self.breakdown["emotional_appeal"] = f"Professional, trustworthy ({power_count} power words)"
            return 20
        elif negative_count > positive_count:
            self.breakdown["emotional_appeal"] = f"Negative tone ({negative_count} negative words) - reduces CTR"
            return 8
        else:
            self.breakdown["emotional_appeal"] = "Neutral tone (lacks emotional appeal)"
            return 12

    def _score_differentiation(self, title: str) -> int:
        """Score based on unique value proposition (0-25 points)"""
        title_lower = title.lower()

        # NextStep differentiators
        differentiators = {
            "same-week": "Immediate availability",
            "evening": "Flexible scheduling",
            "weekend": "Flexible scheduling",
            "virtual": "Modern delivery",
            "online": "Modern delivery",
            "crpo": "Professional credential",
            "registered": "Professional credential",
            "#10979": "Specific credential",
            "act": "Specialized approach",
            "acceptance and commitment": "Specialized approach",
            "ontario": "Location-specific"
        }

        found_differentiators = []
        for key, value in differentiators.items():
            if key in title_lower:
                found_differentiators.append(value)

        # Remove duplicates
        unique_diffs = list(set(found_differentiators))

        if len(unique_diffs) >= 2:
            self.breakdown["differentiation"] = f"Strong differentiation ({', '.join(unique_diffs)})"
            return 25
        elif len(unique_diffs) == 1:
            self.breakdown["differentiation"] = f"Moderate differentiation ({unique_diffs[0]})"
            return 18
        else:
            self.breakdown["differentiation"] = "Generic title (no clear differentiator)"
            return 5

    def _get_grade(self, score: int) -> str:
        """Convert score to letter grade"""
        if score >= 90:
            return "A+ (Excellent CTR potential)"
        elif score >= 85:
            return "A (Very good CTR potential)"
        elif score >= 80:
            return "B+ (Good CTR potential)"
        elif score >= 75:
            return "B (Above average CTR potential)"
        elif score >= 70:
            return "C+ (Fair CTR potential)"
        elif score >= 60:
            return "C (Acceptable, room for improvement)"
        else:
            return "D (Needs significant improvement)"

    def _estimate_ctr_lift(self, score: int) -> str:
        """Estimate CTR improvement based on score"""
        if score >= 90:
            return "+15-25% vs. generic title"
        elif score >= 80:
            return "+10-18% vs. generic title"
        elif score >= 70:
            return "+5-12% vs. generic title"
        elif score >= 60:
            return "+2-7% vs. generic title"
        else:
            return "Minimal improvement expected"

def score_title(title: str, keyword: str = None) -> Dict:
    """Main function to score a title"""
    scorer = CTRScorer()
    return scorer.score_title(title, keyword)

def compare_titles(titles: List[str], keyword: str = None) -> List[Dict]:
    """Score and rank multiple title variations"""
    scorer = CTRScorer()
    results = []

    for title in titles:
        result = scorer.score_title(title, keyword)
        result["title"] = title
        results.append(result)

    # Sort by score (highest first)
    results.sort(key=lambda x: x["total_score"], reverse=True)

    return results

if __name__ == "__main__":
    import sys
    import json

    if len(sys.argv) < 2:
        print("Usage: python ctr_scorer.py 'Your Title Here' [optional_keyword]")
        sys.exit(1)

    title = sys.argv[1]
    keyword = sys.argv[2] if len(sys.argv) > 2 else None

    result = score_title(title, keyword)

    print(f"\n{'='*70}")
    print(f"CTR SCORE ANALYSIS")
    print(f"{'='*70}")
    print(f"\nTitle: {title}")
    if keyword:
        print(f"Keyword: {keyword}")

    print(f"\n📊 OVERALL SCORE: {result['total_score']}/100")
    print(f"📈 GRADE: {result['grade']}")
    print(f"🎯 ESTIMATED CTR LIFT: {result['estimated_ctr_lift']}")

    print(f"\n📋 COMPONENT SCORES:")
    for component, score in result['scores'].items():
        breakdown = result['breakdown'].get(component, "")
        print(f"  • {component.replace('_', ' ').title()}: {score}/25")
        if breakdown:
            print(f"    → {breakdown}")

    print(f"\n{'='*70}\n")
