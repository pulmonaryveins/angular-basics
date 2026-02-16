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
    role: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2020 - Present',
    description: 'Developed and maintained user-friendly web applications using Angular, TypeScript, and SCSS. Collaborated with designers and backend developers to deliver high-quality products.'
  },
  {
    id: 2,
    role: 'UI/UX Designer',
    company: 'Creative Studio',
    duration: 'Jun 2018 - Dec 2019',
    description: 'Designed intuitive user interfaces and improved user experiences for web and mobile applications. Conducted user research and usability testing to enhance product design.'
  },
  {
    id: 3,
    role: 'Web Developer Intern',
    company: 'Startup Hub',
    duration: 'Jan 2017 - May 2018',
    description: 'Assisted in developing responsive websites and landing pages. Gained hands-on experience with HTML, CSS, and JavaScript.'
  }
];