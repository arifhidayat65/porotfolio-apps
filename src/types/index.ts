export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: 'Web' | 'Design';
}

export interface Education {
  name: string;
  place: string;
  date: string;
  degree: string;
  description: string;
  skills: string[];
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  image?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}
