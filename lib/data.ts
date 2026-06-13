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
  figmaUrl?: string;
  pdfUrl?: string;
  image?: string;
  status?: "ongoing" | "upcoming" | "live" | "archived";
}

export const projectsData: Project[] = [
  {
    title: "Smart Home Automation Dashboard",
    description:
      "A comprehensive UI/UX design for a smart home automation dashboard, allowing users to control lighting, climate, security, and appliances from a single, intuitive interface.",
    technologies: ["Figma"],
    category: "UI/UX",
    image: "/images/home-dashboard.png",
    figmaUrl: "https://www.figma.com/design/tjrjGsWEFnOflss4Z2bWH0/Untitled?m=auto&t=eRWvGY76nxxHUNZF-6",
  },
  {
    title: "Mock Interview Web App",
    description:
      "Worked as part of a 3-person development team to design and develop a full-stack AI mock interview platform with dynamic question generation and live answer evaluation, achieving 95% positive user feedback during testing.",
    technologies: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM"],
    category: "Web App",
    image: "/images/interviewgenie.png",
    liveUrl: "upcoming",
    status: "ongoing",
    githubUrl: "https://github.com/InterviewGenie-SUSL/interview-mocker-application",
  },
  {
    title: "Smart Blood Bank Management System",
    description:
      "Collaborated in a 4-member team to develop a centralized blood bank management system for Ratnapura General Hospital, streamlining blood donor management, inventory tracking, and donation campaigns for improved operational efficiency.",
    technologies: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Firebase Authentication"],
    category: "Web App",
    image: "/images/blood-bank.png",
    liveUrl: "upcoming",
    status: "ongoing",
    githubUrl: "https://github.com/InterviewGenie-SUSL/interview-mocker-application",
  },
  {
    title: "UI Kit for Blood Bank Management System",
    description:
      "Designed a comprehensive UI kit for the Smart Blood Bank Management System, including intuitive dashboards for hospital staff, donor registration flows, and inventory management interfaces.",
    technologies: ["Figma"],
    category: "UI/UX",
    image: "/images/blood-bank.png",
    figmaUrl: "https://www.figma.com/design/G38YN8nMkc5vwMc3eLt2nT/Community-Project?m=auto&t=eRWvGY76nxxHUNZF-6",
  },
  {
    title: "Real-Time Messaging Dashboard",
    description:
      "Designed a sleek and modern real-time messaging dashboard with focus on user experience, featuring contact lists, chat interfaces, and media sharing capabilities.",
    technologies: ["Figma"],
    category: "UI/UX",
    image: "/images/message-dashboard.png",
    figmaUrl: "https://www.figma.com/design/3tRvWrcNNeTbCx2UtkQoY6/glass-dashboard?m=auto&t=eRWvGY76nxxHUNZF-6",
  },
  {
    title: "E Commerce Mobile App UI Design",
    description:
      "A clean and intuitive mobile app UI design for an e-commerce platform, focusing on seamless product discovery, easy checkout process, and personalized user profiles.",
    technologies: ["Figma"],
    category: "UI/UX",
    image: "/images/e-commerce.png",
    figmaUrl: "https://www.figma.com/design/EyiOjPxSDiYfUicTtnowFj/E-commerce-Mobile-App?m=auto&t=eRWvGY76nxxHUNZF-6",
  },
  {
    title: "VS Code Extension",
    description:
      "Collaborated in a 3-member team to design and develop an AI-powered Visual Studio Code extension that analyzed coding habits, productivity patterns, and developer activity, helping improve developer efficiency and well-being.",
    technologies: ["Chart.js", "TypeScript", "VS Code API",],
    category: "Others",
    image: "/images/vscode.png",
    liveUrl: "upcoming",
    status: "ongoing",
    githubUrl: "https://github.com/CodeFlow-SUSL/codeflow-ai-susl",
  },
  {
    title: "Smart Salon Appointment Booking System Web UI",
    description:
      "Designed a user-friendly web interface for a salon booking system, allowing clients to browse services, select stylists, and book appointments with ease.",
    technologies: ["Figma"],
    category: "UI/UX",
    image: "/images/salon.png",
    figmaUrl: "https://www.figma.com/design/Tj8A7K2lFVOjaXpDdSasUr/Salon?m=auto&t=eRWvGY76nxxHUNZF-6",
  },
  {
    title: "Developer Productivity Tool",
    description:
      "Built a productivity-focused developer tool that organized 100+ programming shortcuts and commands into a single searchable interface, reducing lookup time by 60%.",
    technologies: ["Next.js", "Node.js", "Firebase", "Express", "Tailwind CSS", "Gemini API"],
    category: "Web App",
    image: "/images/devkeys.png",
    liveUrl: "https://devkeys-plum.vercel.app/",
    githubUrl: "https://github.com/RumeshKumara/devkeys",
  },
  {
    title: "Briefly: AI Content Summarizer",
    description:
      "An AI-powered application that leverages the Gemini API to summarize long-form content, articles, and documents into concise, readable summaries.",
    technologies: ["Next.js", "Node.js", "Firebase", "Express", "Tailwind CSS", "Gemini API"],
    category: "Others",
    image: "/images/briefly.png",
    liveUrl: "upcoming",
    status: "ongoing",
    githubUrl: "https://github.com/RumeshKumara/briefly-ai-chrome-extension",
  },
  {
    title: "UI Kit for Chrome Extension",
    description:
      "Designed a versatile UI kit for a Chrome extension, featuring customizable components, clear navigation, and a modern aesthetic to enhance extension usability.",
    technologies: ["Figma"],
    category: "UI/UX",
    image: "/images/briefly.png",
    figmaUrl: "https://www.figma.com/design/gbGv6IvOTegOMUdMr7OeXl/Chrome-extension?t=eRWvGY76nxxHUNZF-0",
  },
  {
    title: "AI-powered personal productivity dashboard UI Kit",
    description:
      "AI-powered personal productivity dashboard built with React.js and Next.js featuring task management, smart notes, calendar planning, productivity analytics, Pomodoro focus mode, and AI chatbot integration.",
    technologies: ["Figma"],
    category: "UI/UX",
    image: "/images/lifeflow.png",
    figmaUrl: "https://www.figma.com/design/YTZYoLNQPZ1SpQHtkoX514/LifeFlow?node-id=1-48&t=GHFL3TgdWMJSRwpl-0",
  },
  {
    title: "SmartBank - AI-Enhanced Mobile Banking Experience",
    description:
      "A comprehensive mobile banking application with advanced security, AI-powered financial insights, personalized banking experience, seamless fund transfers, smart savings goals, and intuitive money management tools.",
    technologies: ["Figma"],
    category: "UI/UX",
    image: "/images/smartbank.png",
    figmaUrl: "https://www.figma.com/design/GbjyyD24CnTfT8LrRegM4K/Mobile-Bank-App?node-id=0-1&p=f&t=wdSMXwkIGyf74hz3-0",
    pdfUrl: "https://drive.google.com/drive/folders/1RJiX-MEb1ojZBfoO1bJzafU7dp6V4r8K",
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
    position: "Software Engineer Intern",
    company: "DirectFN Lanka",
    period: "Feb 2024 - Aug 2024",
    description:
      "Gained hands-on experience in full-stack development, contributing to the development of financial technology solutions and collaborating with cross-functional teams to deliver high-quality software.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Git"],
  },
  {
    position: "Freelance UI/UX Designer",
    company: "Self-employed",
    period: "2022 - Present",
    description:
      "Designing intuitive and visually appealing user interfaces for various web and mobile applications, focusing on user-centered design principles and creating seamless digital experiences.",
    technologies: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
  },
];
