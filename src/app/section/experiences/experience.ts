import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES, Experience } from '../../data/experience-data';
import { ExperienceCard } from '../../components/experience-card/experience-card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ExperienceCard],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class Experiences {
  experiences: Experience[] = EXPERIENCES;
}