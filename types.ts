export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  color: string; // Tailwind color class for the accent
}

export interface Education {
  id: string;
  year: string;
  title: string;
  institution: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}

export interface Language {
  language: string;
  level: string;
  percentage: number; // For visual progress bar
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  hobbies: string[];
}