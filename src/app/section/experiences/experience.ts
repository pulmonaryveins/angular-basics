import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES, Experience } from '../../data/experience-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class Experiences {
  experiences: Experience[] = EXPERIENCES;
}