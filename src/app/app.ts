import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './section/home/home';
import { About } from './section/about/about';
import { Projects } from './section/projects/projects';
import { Experiences } from './section/experiences/experience';
import { PROJECTS } from './data/projects-data';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Projects, Experiences],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-basics');

  onProjectView() {
    console.log("app component - click event triggered ...");

  }
}
