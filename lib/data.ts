export interface Skill {
  name: string;
  level: number; // 0-100
  category?: string;
  logo?: string;
}

export const skillsData: Skill[] = [
  { name: "JavaScript", level: 95, category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", level: 90, category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", level: 95, category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", level: 92, category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Vue.js", level: 80, category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Node.js", level: 88, category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", level: 85, category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Tailwind CSS", level: 95, category: "Styling", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "CSS3", level: 90, category: "Styling", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "HTML5", level: 95, category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Git", level: 90, category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", level: 75, category: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "MySQL", level: 80, category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", level: 85, category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", level: 80, category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "GraphQL", level: 78, category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "REST API", level: 92, category: "Backend" },
  { name: "Spring Boot", level: 75, category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Java", level: 82, category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", level: 80, category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Figma", level: 85, category: "Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe XD", level: 80, category: "Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
  { name: "Framer Motion", level: 88, category: "Animation" },
  { name: "Redux", level: 85, category: "State Management", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Zustand", level: 82, category: "State Management" },
];

// Programming Languages
export const programmingLanguages: Skill[] = [
  { name: "JavaScript", level: 95, category: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", level: 90, category: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Java", level: 82, category: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", level: 80, category: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML5", level: 95, category: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", level: 90, category: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];

// Technologies & Frameworks
export const technologies: Skill[] = [
  { name: "React", level: 95, category: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", level: 92, category: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Vue.js", level: 80, category: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Node.js", level: 88, category: "Runtime", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", level: 85, category: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Tailwind CSS", level: 95, category: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Spring Boot", level: 75, category: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Redux", level: 85, category: "Library", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "MongoDB", level: 85, category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", level: 80, category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", level: 80, category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Docker", level: 75, category: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", level: 90, category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GraphQL", level: 78, category: "API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Figma", level: 85, category: "Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Webpack", level: 78, category: "Build Tool", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
  { name: "Vite", level: 85, category: "Build Tool", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "Jest", level: 80, category: "Testing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
  { name: "AWS", level: 70, category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Kubernetes", level: 65, category: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: "UI/UX" | "Web App" | "Mobile" | "Others";
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    category: "Web App",
    image: "/images/commertial.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rumeshkumara/ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
    category: "Web App",
    image: "/images/interviewgenie.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rumeshkumara/task-app",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics with beautiful charts, real-time data visualization, and export functionality.",
    technologies: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
    category: "UI/UX",
    image: "/images/tailwind.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rumeshkumara/dashboard",
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with location-based forecasts, detailed weather information, and interactive maps.",
    technologies: ["React", "TypeScript", "OpenWeather API", "CSS3"],
    category: "Mobile",
    image: "/images/travel.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rumeshkumara/weather-app",
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system for portfolio websites with drag-and-drop editor, SEO optimization, and responsive templates.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "Others",
    image: "/images/vscode.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rumeshkumara/portfolio-cms",
  },
  {
    title: "Fitness Tracker",
    description:
      "Comprehensive fitness tracking application with workout plans, progress tracking, nutrition logging, and goal setting.",
    technologies: ["React Native", "Node.js", "MongoDB", "Express"],
    category: "Mobile",
    image: "/images/login.png",
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
