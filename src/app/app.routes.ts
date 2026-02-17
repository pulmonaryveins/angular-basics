import { Routes } from '@angular/router';
import { Home } from './section/home/home';
import { About } from './section/about/about';
import { Projects } from './section/projects/projects';
import { Experiences } from './section/experiences/experience';
import { Contact } from './section/contact/contact';
import { Footer } from './section/footer/footer';




export const routes: Routes = [
  { path: '', component: Home,  },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'experiences', component: Experiences },
  { path: 'contact', component: Contact },
  { path: 'footer', component: Footer }
];
