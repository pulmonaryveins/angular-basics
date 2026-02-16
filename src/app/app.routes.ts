import { Routes } from '@angular/router';
import { Home } from './section/home/home';
import { About } from './section/about/about';
import { Projects } from './section/projects/projects';
import { Experiences } from './section/experiences/experience';



export const routes: Routes = [
  { path: '', component: Home,  },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'experiences', component: Experiences }
];
