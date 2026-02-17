export interface Project {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
  tools: string[];
  category?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Angular and CSS.',
    iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'TypeScript', 'CSS', 'HTML'],
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Todo App',
    description: 'A simple todo list application to manage daily tasks.',
    iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'TypeScript', 'LocalStorage', 'CSS'],
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'Display current weather using a weather API.',
    iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'API Integration', 'RxJS', 'CSS'],
    category: 'Mobile App'
  },
  {
    id: 4,
    title: 'E-Commerce Site',
    description: 'A full-featured online shopping platform.',
    iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'TypeScript', 'Firebase', 'Stripe API'],
    category: 'Web Development'
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A blogging platform with rich text editor and image uploads.',
    iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'Markdown', 'Firebase', 'Material UI'],
    category: 'Content Management'
  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics.',
      iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'Chart.js', 'TypeScript', 'CSS Grid'],
    category: 'Data Visualization'
  }
];