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

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/pulmonaryveins' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/pulmonaryveins' },
    { name: 'Facebook', url: 'https://facebook.com/pulmonaryveins' }
  ];
}