"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from "lucide-react";
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

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-black leading-tight">
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
            Specialized in React, Next.js, and TypeScript.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={handleViewProjects}
              className="group px-8 py-4 bg-black text-white rounded-full hover:bg-accent-800 transition-all flex items-center gap-2"
            >
              View Projects
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={handleContact}
              className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all flex items-center gap-2"
            >
              Download CV
              <Download size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center gap-6 pt-8"
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
        </div>
      </div>
    </div>
  );
}
