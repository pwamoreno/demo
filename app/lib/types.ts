export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  description: string;
  image: string;
  year: string;
  services: string[];
  industry: string;
  content: {
    overview: string;
    problem: string;
    solution: string;
    outcome: string;
  };
  gallery: string[];
}
export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  license: string;
}
export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  process: {
    title: string;
    description: string;
  }[];
}
export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}