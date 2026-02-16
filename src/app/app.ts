import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './section/home/home';
import { About } from './section/about/about';
import { Projects } from './section/projects/projects';
import { Experiences } from './section/experiences/experience';
import { Contact } from './section/contact/contact';


@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Projects, Experiences, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-basics');

  onProjectView() {
    console.log("app component - click event triggered ...");

  }
}
