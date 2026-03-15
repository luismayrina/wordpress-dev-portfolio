export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'Core' | 'Tools' | 'Design' | 'AI';
}

export interface AITool {
  name: string;
  useCase: string;
  category: 'Content' | 'Design' | 'Development' | 'SEO';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
