import React from 'react';
import { 
  Cloud, 
  Mountain, 
  Sun, 
  Wind, 
  MessageCircle, 
  Heart,
  CheckCircle,
  Briefcase,
  Users
} from 'lucide-react';
import { NavItem, ServiceCardProps, SymptomCardProps, StepProps, QuizQuestion } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SYMPTOMS: SymptomCardProps[] = [
  {
    title: "The Sunday Night Feeling",
    description: "Your chest gets tight thinking about Monday. That sense of dread that won't go away."
  },
  {
    title: "The 3am Mind Race",
    description: "Lying awake replaying conversations, worrying about things you can't control right now."
  },
  {
    title: "Nothing Feels Enjoyable",
    description: "Things you used to love don't bring joy anymore. Everything feels flat or grey."
  },
  {
    title: "Snapping at People You Love",
    description: "Small frustrations trigger big reactions. You're apologizing more than usual."
  },
  {
    title: "The Same Patterns Repeating",
    description: "Same relationship issues with different people. Same work conflicts at every job."
  },
  {
    title: "Decision Paralysis",
    description: "Even simple choices feel overwhelming. Analysis paralysis on basic decisions."
  }
];

export const SERVICES: ServiceCardProps[] = [
  {
    title: "Performance Anxiety & Stress Management",
    description: "When your mind won't stop racing at 3am or before big presentations. Performance anxiety support with practical tools.",
    link: "#",
    icon: <Wind className="w-6 h-6" />
  },
  {
    title: "Men's Mental Health",
    description: "A space where 'I'm fine' isn't the only option. Direct conversations about stress and relationships. Practical strategies.",
    link: "#",
    icon: <Mountain className="w-6 h-6" />
  },
  {
    title: "Work Stress & Burnout",
    description: "Professional work stress support beyond 'just take a vacation'. Burnout support for remote workers.",
    link: "#",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Life Transitions & Change",
    description: "When everything feels like it's shifting. Finding your footing when life feels unrecognizable.",
    link: "#",
    icon: <Cloud className="w-6 h-6" />
  },
  {
    title: "Depression & Mood Support",
    description: "When nothing feels quite right anymore. More than 'just think positive'. Reconnecting with what matters to you.",
    link: "#",
    icon: <Sun className="w-6 h-6" />
  },
  {
    title: "Relationship & Communication",
    description: "When arguments keep happening. Understanding your patterns and building on what's already working.",
    link: "#",
    icon: <Heart className="w-6 h-6" />
  }
];

export const STEPS: StepProps[] = [
  {
    number: 1,
    title: "Initial Connection",
    description: "We start with a free 15-minute call – just a conversation about what's bringing you together and whether we'd work well together. No pressure, no obligations."
  },
  {
    number: 2,
    title: "Getting the Full Picture",
    description: "Our first few sessions are about understanding your whole story – not just the problem, but what makes you you. We'll identify patterns without pathologizing your entire existence."
  },
  {
    number: 3,
    title: "Building Your Toolkit",
    description: "This is where we get practical. Using proven approaches, we'll develop strategies that actually work when you're in the middle of a panic attack, not just in theory."
  },
  {
    number: 4,
    title: "Real Change, Real Time",
    description: "Change isn't linear – some weeks are breakthroughs, others feel stuck. I'm here for all of it, adjusting our approach as life happens."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How often do you feel overwhelmed by daily tasks or responsibilities?",
    options: ["Rarely or never", "Sometimes", "Often", "Most of the time"]
  },
  {
    id: 2,
    question: "Do you find yourself replaying conversations or worrying about future events?",
    options: ["Never", "Occasionally", "Frequently", "Almost constantly"]
  },
  {
    id: 3,
    question: "How is your sleep quality recently?",
    options: ["Excellent", "Average", "Restless", "Consistently poor"]
  }
];

