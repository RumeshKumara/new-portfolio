"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react";

import { SOCIAL_LINKS } from "@/lib/constants";
import { useState, useEffect } from "react";

interface HeroProps {
  onViewProjects?: () => void;
  onContact?: () => void;
}

const jobTitles = [
  "Software Engineer",
  "Full Stack Developer",
  "UI/UX Designer"
];



export default function Hero({ onViewProjects, onContact }: HeroProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const handleViewProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    onViewProjects?.();
  };

  const handleContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    onContact?.();
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const lines = [
    { top: "8%",  width: 160, duration: 9,  delay: 0,    ltr: true  },
    { top: "14%", width: 100, duration: 13, delay: 2,    ltr: false },
    { top: "22%", width: 140, duration: 11, delay: 5,    ltr: true  },
    { top: "30%", width: 80,  duration: 8,  delay: 1.5,  ltr: false },
    { top: "38%", width: 120, duration: 14, delay: 3,    ltr: true  },
    { top: "46%", width: 90,  duration: 10, delay: 6.5,  ltr: false },
    { top: "54%", width: 160, duration: 12, delay: 0.5,  ltr: true  },
    { top: "62%", width: 110, duration: 9,  delay: 4,    ltr: false },
    { top: "70%", width: 130, duration: 15, delay: 2.5,  ltr: true  },
    { top: "78%", width: 95,  duration: 11, delay: 7,    ltr: false },
    { top: "86%", width: 150, duration: 10, delay: 1,    ltr: true  },
    { top: "93%", width: 105, duration: 13, delay: 5.5,  ltr: false },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {lines.map((line, i) => (
          <span
            key={i}
            className={`bg-line ${line.ltr ? "bg-line-ltr" : "bg-line-rtl"}`}
            style={{
              top: line.top,
              width: line.width,
              animationDuration: `${line.duration}s`,
              animationDelay: `${line.delay}s`,
            }}
          />
        ))}
      </div>
      <motion.div
        className="container-custom relative z-10"
       
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-sweep">
              Rumesh Kumara
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="h-16 md:h-20 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTitleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-medium text-accent-700"
              >
                {jobTitles[currentTitleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-accent-600 max-w-2xl mx-auto"
          >
            Crafting exceptional digital experiences with modern technologies.
            Specialized in{" "}
            <span className="font-semibold text-black">React</span>,{" "}
            <span className="font-semibold text-black">Next.js</span>, and{" "}
            <span className="font-semibold text-black">TypeScript</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={handleViewProjects}
              className="group px-8 py-4 bg-black text-white rounded-full hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              View Projects
              <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={handleContact}
              className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black duration-200 hover:text-white transition-all flex items-center gap-2"
            >
              Download CV
              <Download size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center gap-6 pt-2"
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="text-accent-600 hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="pt-2"
          >
            <button
              onClick={handleScrollToAbout}
              className="animate-bounce text-accent-600 hover:text-black transition-colors"
              aria-label="Scroll to About section"
            >
              <ChevronDown size={32} />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
