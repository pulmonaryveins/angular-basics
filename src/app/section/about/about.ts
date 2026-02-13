import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  fullname = 'Vince Bryant Cabunilas';
  role = 'Web Developer & UI Designer';
  description = 'I am a passionate web developer and UI designer with over 3 years of experience in creating stunning websites and applications. I specialize in front-end development, using technologies like HTML, CSS, JavaScript, and Angular to build responsive and user-friendly interfaces.';

  skills = ['HTML', 'CSS', 'JavaScript', 'Angular', 'UI Design']

  email = 'vincebryant42@gmail.com';
  phone = '+63 968 200 1034';
}
