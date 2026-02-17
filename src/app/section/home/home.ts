import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = 'Vince Bryant';
  title = 'UI/UX Designer & Frontend Developer';
  tagline = 'Turning complex ideas into clean, functional, and intuitive digital experiences.';
}
