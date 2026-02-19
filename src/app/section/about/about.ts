import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  fullname = 'Vince Bryant Cabunilas';
  role = 'UI/UX Designer & Frontend Developer';
  location = 'Based in Cebu City, Philippines';
  profileImage = 'images/profile/noob.png';
  
  description = "I'm a passionate Information Technology student with a focus on UI/UX design, frontend development, and media-related work including graphic design and video editing. I have a solid foundation in UI/UX and frontend development, strengthened through industry experience as a student trainee at Alliance Software Inc., where I collaborated with teams to deliver quality software projects.";
  
  description2 = "I also bring leadership experience, having been involved in multiple student organizations focused on media and creative work. I'm constantly exploring the IT and creative fields, and I'm eager to learn and grow in every opportunity that comes my way.";

  skills = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'MySQL', 'Vite', 'GitHub', 'Git', 'Figma', 'Photoshop', 'Premiere Pro'];

  softSkills = ['Communication', 'Team Collaboration', 'Problem Solving', 'Time Management', 'Adaptability', 'Leadership', 'Critical Thinking', 'Creativity'];

  education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'University of Cebu Main Campus',
      year: '2022 - Present',
      description: 'Specializing UI/UX design, frontend development, and media-related work.'
    }
  ];

  email = 'vincebryant42@gmail.com';
  phone = '+63 968 200 1034';
}
