import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../../components/project-card/project-card';
import { PROJECTS, Project } from '../../data/projects-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  allProjects = signal<Project[]>(PROJECTS);

  
  selectedCategory = signal<string>('All');

  filteredProjects = computed(() => {
    if (this.selectedCategory() === 'All') {
      return this.allProjects();
    }
    return this.allProjects().filter(project =>
      project.category === this.selectedCategory()
    );
  });


  filterByCategory(category: string) {
    this.selectedCategory.set(category);
  }


  get categories(): string[] {
  const categories = this.allProjects()
    .map(project => project.category ?? 'Uncategorized'); 
  return ['All', ...Array.from(new Set(categories))];
}
}