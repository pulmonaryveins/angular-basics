import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with Angular and CSS.',
      image: 'assets/projects/angular.png'
    },

    {
      title: 'Todo App',
      description: 'A simple todo list application to manage daily tasks.',
      image: 'assets/projects/angular.png'
    },

    {
      title: 'Weather App',
      description: 'Display current weather using a weather API.',
      image: 'assets/projects/angular.png'
    }
  ];
}
