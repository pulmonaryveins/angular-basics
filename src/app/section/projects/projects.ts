import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../../components/project-card/project-card';
import { PROJECTS_DB, Project } from '../../data/db-data';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = PROJECTS_DB;
}
