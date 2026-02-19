export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Student Trainee',
    company: 'Alliance Software, Inc.',
    duration: 'Aug - Dec 2025',
    description: 'Designed and developed the frontend interface for a Food Ordering System, ensuring a smooth and intuitive user experience. I also collaborated closely with a team of developers, which enhanced my communication, workflow, and problem-solving skills, while gaining practical experience in UI/UX design and frontend development best practices.'
  },
  {
    id: 2,
    role: 'Graphic Designer',
    company: 'CESAFI Esports League',
    duration: 'Apr 2024 - Aug 2025',
    description: 'Produced creative visual content for pre-season and Season 3 events, helping engage the Cebu gaming community. Managed design deliverables under tight deadlines, which strengthened my time management and creative problem-solving skills, and expanded my expertise in graphic design while learning to perform in high-pressure, live-event environments.'
  },
  {
    id: 3,
    role: 'Media Director',
    company: 'Philippine Society of Information Technology Students (PSITS) - UC-MAIN',
    duration: 'Sep 2023 - Present',
    description: 'Progressed from a media volunteer to Media Director, where I led a team in graphic design, photography, and video editing to support organizational communication. Developed and implemented media strategies to effectively share information with students and faculty, while mentoring team members to improve their technical skills and strengthen team collaboration.'
  },
  {
    id: 4,
    role: 'Asst. Undersecretary for Operations / Assistant Media Head',
    company: 'University of Cebu Council of Presidents - UC-MAIN',
    duration: 'Sep 2023 - Present',
    description: 'Supported the planning and execution of major university events by managing technical operations and media coverage. Also helped streamline event coordination and media workflows, while strengthening leadership, communication, and organizational skills through hands-on experience in large-scale projects.'
  }
];