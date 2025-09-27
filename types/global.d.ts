// Global type definitions for the portfolio project

export interface NavigationItem {
  name: string;
  href: string;
  id: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  category: 'fullstack' | 'web' | 'mobile';
  slug: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  startDate: string;
  endDate?: string;
  features: string[];
  challenges: string[];
  achievements: string[];
}

export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  slug: string;
  summary: string;
  description: string[];
  detailedDescription: string[];
  keyAchievements: string[];
  challenges: string[];
  technologies: string[];
  tools: string[];
  teamSize: string;
  reportingTo: string;
  keyMetrics: Record<string, string>;
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string;
  gpa?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
  url: string;
  tags: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  detailedBio: string;
  resumeUrl: string;
  highlights: string[];
  stats: {
    experience: string;
    projects: string;
    clients: string;
    technologies: string;
  };
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter: string;
    discord: string;
    youtube: string;
  };
}

// Performance monitoring types
export interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}

// Mouse position for interactive effects
export interface MousePosition {
  x: number;
  y: number;
}

// Theme variants for consistent styling
export type ThemeVariant = 'primary' | 'secondary' | 'accent' | 'neutral';

// Component size variants
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';

// Animation direction variants
export type AnimationDirection = 'left' | 'right' | 'top' | 'bottom';