import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  // Contact details data
  contactInfo = {
    email: 'vincebryant42@gmail.com',
    phone: '+63 968 200 1034',
    location: 'Cebu City, Philippines'
  };

  // Social links
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Facebook', url: 'https://facebook.com/yourusername' }
  ];
}