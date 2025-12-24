import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

export interface SymptomCardProps {
  title: string;
  description: string;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

