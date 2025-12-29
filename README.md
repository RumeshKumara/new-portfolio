# Rumesh Kumara - Portfolio

A modern, minimal, professional developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant transitions and animations
- **Infinite Scrolling Skills**: Auto-looping horizontal skill badges with pause-on-hover
- **Responsive Design**: Mobile-first approach, looks great on all devices
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance**: Optimized for speed and Core Web Vitals
- **Clean Code**: Well-structured, typed, and documented

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── loading.tsx         # Loading state
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Footer.tsx          # Footer with social links
│   ├── Hero.tsx            # Hero component
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills display
│   ├── Projects.tsx        # Projects grid
│   ├── Experience.tsx      # Experience timeline
│   ├── Contact.tsx         # Contact form
│   └── InfiniteScroll.tsx  # Infinite scroll animation
├── sections/
│   ├── HeroSection.tsx     # Hero section wrapper
│   ├── SkillsSection.tsx   # Skills with infinite scroll
│   └── ProjectsSection.tsx # Projects section wrapper
├── lib/
│   ├── constants.ts        # Site constants
│   └── data.ts             # Portfolio data
└── public/
    └── images/             # Static images
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

- **Background**: White (#FFFFFF)
- **Text**: Black (#000000)
- **Accent**: Neutral gray shades
- **Style**: Minimal, modern, clean, premium
- **Layout**: Centered, large whitespace, grid-based

## 🔧 Customization

### Update Personal Info

Edit [lib/constants.ts](lib/constants.ts):
```typescript
export const SITE_NAME = "Your Name";
export const SITE_EMAIL = "your@email.com";
```

### Update Projects

Edit [lib/data.ts](lib/data.ts):
```typescript
export const projectsData: Project[] = [
  {
    title: "Your Project",
    description: "Description",
    technologies: ["React", "Next.js"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
  },
];
```

### Update Skills

Edit [lib/data.ts](lib/data.ts):
```typescript
export const skillsData = [
  "JavaScript",
  "TypeScript",
  // Add more skills...
];
```

### Update Experience

Edit [lib/data.ts](lib/data.ts):
```typescript
export const experienceData: Experience[] = [
  {
    position: "Your Position",
    company: "Company Name",
    period: "2020 - Present",
    description: "Description",
    technologies: ["React", "Node.js"],
  },
];
```

## 📱 Components

### InfiniteScroll
Smooth infinite horizontal scrolling animation with pause on hover.

```tsx
<InfiniteScroll items={skillsData} speed={25} />
```

### Navbar
Sticky navigation with smooth scroll and active section highlighting.

### Projects
Grid layout with hover animations and tech stack tags.

### Contact
Contact form with validation and styling.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 👤 Author

**Rumesh Kumara**
- Senior Frontend Engineer & UI/UX Designer
- Email: rumesh@example.com

---

Built with ❤️ using Next.js and TypeScript
