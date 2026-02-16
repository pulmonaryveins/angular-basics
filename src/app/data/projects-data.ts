export interface Project {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
  tools: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Angular and CSS.',
    iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'TypeScript', 'CSS', 'HTML']
  },
  {
    id: 2,
    title: 'Todo App',
    description: 'A simple todo list application to manage daily tasks.',
    iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'TypeScript', 'CSS']
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'Display current weather using a weather API.',
    iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'API Integration', 'RxJS', 'CSS']
  },
  {
    id: 4,
    title: 'E-Commerce Site',
    description: 'A full-featured online shopping platform.',
    iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'TypeScript', 'Firebase', 'Stripe']
  },
  {
    id: 5,
    title: 'Chat Application',
    description: 'Real-time chat application using WebSockets.',
    iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'WebSockets', 'Node.js', 'CSS']
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'A blogging platform with user authentication and CRUD operations.',
    iconUrl: 'images/projects/angular.jpg',
    tools: ['Angular', 'TypeScript', 'Firebase', 'CSS']
  }
];