import { Project, Product, Service, Testimonial } from './types';
export const projects: Project[] = [{
  id: '1',
  slug: 'fintech-dashboard',
  title: 'Nova Finance Dashboard',
  client: 'Nova Inc.',
  description: 'A comprehensive financial analytics platform for enterprise clients.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
  year: '2023',
  services: ['UI/UX Design', 'Development'],
  industry: 'Fintech',
  content: {
    overview: 'Nova needed a complete overhaul of their legacy financial dashboard.',
    problem: 'Users found the old interface cluttered and difficult to navigate, leading to high churn.',
    solution: 'We simplified the information architecture and introduced a modular widget system.',
    outcome: 'User engagement increased by 40% within the first month of launch.'
  },
  gallery: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800']
}, {
  id: '2',
  slug: 'eco-commerce',
  title: 'GreenLeaf E-commerce',
  client: 'GreenLeaf',
  description: 'Sustainable shopping experience for eco-conscious consumers.',
  image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1600',
  year: '2023',
  services: ['Branding', 'Web Design'],
  industry: 'E-commerce',
  content: {
    overview: 'GreenLeaf wanted to launch a D2C brand for sustainable home goods.',
    problem: 'The market is crowded, and they needed a distinct visual identity.',
    solution: 'We created an earthy, minimal brand language that speaks to transparency.',
    outcome: 'Successful launch with $50k revenue in the first week.'
  },
  gallery: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800']
}, {
  id: '3',
  slug: 'art-gallery-app',
  title: 'Muse Virtual Gallery',
  client: 'Muse Art',
  description: 'AR-enabled mobile application for virtual art exhibitions.',
  image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=1600',
  year: '2022',
  services: ['Mobile App', 'Strategy'],
  industry: 'Art & Culture',
  content: {
    overview: 'Bringing the gallery experience to users homes via AR.',
    problem: 'Physical attendance was down, and digital engagement was low.',
    solution: 'An immersive AR app allowing users to place art on their walls.',
    outcome: '100k+ downloads and featured in the App Store.'
  },
  gallery: ['https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800']
}, {
  id: '4',
  slug: 'tech-conference',
  title: 'Future Tech 2024',
  client: 'TechGlobal',
  description: 'Brand identity and web portal for a major tech conference.',
  image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600',
  year: '2024',
  services: ['Branding', 'Web Design'],
  industry: 'Events',
  content: {
    overview: 'Rebranding the worlds largest future tech summit.',
    problem: 'The old brand felt dated and corporate.',
    solution: 'A dynamic, glitch-art inspired identity system.',
    outcome: 'Ticket sales increased by 25% year-over-year.'
  },
  gallery: ['https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800']
}, {
  id: '5',
  slug: 'wellness-platform',
  title: 'Zenith Wellness',
  client: 'Zenith',
  description: 'Holistic health tracking platform with AI insights.',
  image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1600',
  year: '2023',
  services: ['Product Design', 'Development'],
  industry: 'Healthcare',
  content: {
    overview: 'AI-powered wellness tracking for the modern era.',
    problem: 'Existing apps were too manual and lacked actionable insights.',
    solution: 'Automated tracking with personalized AI recommendations.',
    outcome: 'Acquired by a major healthcare provider.'
  },
  gallery: ['https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800']
}, {
  id: '6',
  slug: 'architecture-firm',
  title: 'Structura Architects',
  client: 'Structura',
  description: 'Minimalist portfolio for a high-end architecture firm.',
  image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1600',
  year: '2022',
  services: ['Web Design', 'Photography'],
  industry: 'Architecture',
  content: {
    overview: 'Showcasing architectural masterpieces online.',
    problem: 'Their previous site did not reflect the quality of their physical work.',
    solution: 'A photo-first, minimalist design that lets the buildings speak.',
    outcome: 'Awarded Site of the Day on Awwwards.'
  },
  gallery: ['https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800']
}];
export const products: Product[] = [{
  id: '1',
  title: 'Minimalist UI Kit',
  price: 49,
  image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?auto=format&fit=crop&q=80&w=800',
  category: 'UI Kits',
  description: 'A clean, versatile UI kit for modern web applications.',
  features: ['200+ Components', 'Figma & Sketch', 'Dark Mode'],
  license: 'Standard'
}, {
  id: '2',
  title: 'Abstract 3D Shapes',
  price: 29,
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
  category: 'Assets',
  description: 'High-resolution abstract 3D renders for backgrounds.',
  features: ['4K Resolution', 'PNG & OBJ', '20 Unique Shapes'],
  license: 'Standard'
}, {
  id: '3',
  title: 'Agency Notion Template',
  price: 39,
  image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=800',
  category: 'Templates',
  description: 'Manage your agency projects and clients with ease.',
  features: ['Project Tracker', 'CRM', 'Invoice Generator'],
  license: 'Standard'
}, {
  id: '4',
  title: 'Editorial Font Pack',
  price: 59,
  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
  category: 'Fonts',
  description: 'A collection of 5 serif fonts for editorial design.',
  features: ['OTF & TTF', 'Webfonts', 'Multilingual Support'],
  license: 'Extended'
}, {
  id: '5',
  title: 'Social Media Mockups',
  price: 24,
  image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
  category: 'Mockups',
  description: 'Realistic device mockups for social media posts.',
  features: ['iPhone & Android', 'High Res', 'Smart Objects'],
  license: 'Standard'
}, {
  id: '6',
  title: 'Icon Set: Line',
  price: 19,
  image: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?auto=format&fit=crop&q=80&w=800',
  category: 'Icons',
  description: '400+ line icons for interface design.',
  features: ['SVG & PNG', 'Figma Component', 'Stroke Adjustable'],
  license: 'Standard'
}, {
  id: '7',
  title: 'Portfolio Template',
  price: 69,
  image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
  category: 'Templates',
  description: 'React & Tailwind portfolio template for creatives.',
  features: ['Next.js Ready', 'Dark Mode', 'Animations'],
  license: 'Extended'
}, {
  id: '8',
  title: 'Texture Pack: Paper',
  price: 15,
  image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800',
  category: 'Assets',
  description: 'High-quality paper textures for overlay effects.',
  features: ['50 Textures', 'High Res', 'Seamless'],
  license: 'Standard'
}];
export const services: Service[] = [{
  id: '1',
  slug: 'design',
  title: 'Product Design',
  description: 'We craft intuitive and beautiful digital products that solve real problems.',
  icon: 'PenTool',
  details: ['UI/UX Design', 'Design Systems', 'Prototyping', 'User Research'],
  process: [{
    title: 'Discovery',
    description: 'Understanding your goals and users.'
  }, {
    title: 'Concept',
    description: 'Exploring visual directions and flows.'
  }, {
    title: 'Design',
    description: 'Crafting the final interface and interactions.'
  }]
}, {
  id: '2',
  slug: 'development',
  title: 'Development',
  description: 'Robust and scalable engineering for web and mobile applications.',
  icon: 'Code',
  details: ['Frontend', 'Backend', 'Mobile Apps', 'CMS Integration'],
  process: [{
    title: 'Architecture',
    description: 'Planning the technical foundation.'
  }, {
    title: 'Build',
    description: 'Agile development sprints.'
  }, {
    title: 'QA',
    description: 'Rigorous testing and refinement.'
  }]
}, {
  id: '3',
  slug: 'branding',
  title: 'Branding',
  description: 'Building distinct identities that resonate with your audience.',
  icon: 'Palette',
  details: ['Logo Design', 'Visual Identity', 'Brand Strategy', 'Guidelines'],
  process: [{
    title: 'Strategy',
    description: 'Defining your brand voice and position.'
  }, {
    title: 'Identity',
    description: 'Creating the visual system.'
  }, {
    title: 'Assets',
    description: 'Delivering all brand collateral.'
  }]
}, {
  id: '4',
  slug: 'strategy',
  title: 'Digital Strategy',
  description: 'Data-driven insights to guide your digital transformation.',
  icon: 'TrendingUp',
  details: ['Market Analysis', 'Product Strategy', 'Growth', 'Analytics'],
  process: [{
    title: 'Audit',
    description: 'Analyzing current performance.'
  }, {
    title: 'Plan',
    description: 'Developing a roadmap for growth.'
  }, {
    title: 'Execute',
    description: 'Implementing strategic initiatives.'
  }]
}];
export const testimonials: Testimonial[] = [{
  id: '1',
  content: 'The team transformed our vision into a reality that exceeded our expectations. The attention to detail is unmatched.',
  author: 'Sarah Jenkins',
  role: 'CEO',
  company: 'Nova Inc.',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
}, {
  id: '2',
  content: "Working with this agency was a game-changer for our brand. We've seen a 200% increase in engagement.",
  author: 'Michael Chen',
  role: 'Marketing Director',
  company: 'GreenLeaf',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
}, {
  id: '3',
  content: 'Professional, creative, and technically proficient. They delivered on time and on budget.',
  author: 'Elena Rodriguez',
  role: 'Product Manager',
  company: 'TechGlobal',
  avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
}];