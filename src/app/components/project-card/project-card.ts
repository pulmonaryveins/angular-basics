import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../data/db-data';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() project!: Project;

  onViewProject() {
    console.log('View project:', this.project.title);
  }
}
