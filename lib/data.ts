export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "CSS3",
  "HTML5",
  "Git",
  "Docker",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "Spring Boot",
  "Java",
  "Python",
  "Figma",
  "Adobe XD",
  "Framer Motion",
  "Redux",
  "Zustand",
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rumeshkumara/ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rumeshkumara/task-app",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics with beautiful charts, real-time data visualization, and export functionality.",
    technologies: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rumeshkumara/dashboard",
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with location-based forecasts, detailed weather information, and interactive maps.",
    technologies: ["React", "TypeScript", "OpenWeather API", "CSS3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rumeshkumara/weather-app",
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system for portfolio websites with drag-and-drop editor, SEO optimization, and responsive templates.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rumeshkumara/portfolio-cms",
  },
  {
    title: "Fitness Tracker",
    description:
      "Comprehensive fitness tracking application with workout plans, progress tracking, nutrition logging, and goal setting.",
    technologies: ["React Native", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rumeshkumara/fitness-tracker",
  },
];

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    position: "Senior Frontend Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Leading frontend development team, architecting scalable React applications, mentoring junior developers, and implementing best practices across projects. Successfully delivered 15+ enterprise-level applications.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    position: "Frontend Engineer",
    company: "Digital Innovations Ltd.",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client-facing applications, collaborated with UX/UI designers to implement pixel-perfect designs, and optimized application performance resulting in 40% faster load times.",
    technologies: ["React", "Vue.js", "JavaScript", "SCSS", "Node.js"],
  },
  {
    position: "UI/UX Designer & Developer",
    company: "Creative Agency Co.",
    period: "2018 - 2020",
    description:
      "Designed and developed responsive websites and web applications, created design systems and component libraries, and conducted user research to improve product usability.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "Adobe XD"],
  },
  {
    position: "Junior Frontend Developer",
    company: "StartUp Hub",
    period: "2017 - 2018",
    description:
      "Assisted in building responsive web applications, worked closely with senior developers to learn best practices, and contributed to open-source projects to enhance team capabilities.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
  },
];
