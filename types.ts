export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  socials: SocialLink[];
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}