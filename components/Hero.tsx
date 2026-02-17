"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiNextdotjs, SiSpringboot, SiExpress, SiMysql, SiFigma } from "react-icons/si";
import { FaJava } from "react-icons/fa";
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

const programmingIcons = [
  SiHtml5,      // HTML
  SiCss3,       // CSS
  SiJavascript, // JavaScript
  SiReact,      // React
  SiTypescript, // TypeScript
  SiNextdotjs,  // Next.js
  SiSpringboot, // Spring Boot
  FaJava,       // Java
  SiExpress,    // Express
  SiMysql,      // MySQL
  SiFigma       // Figma
];

const FloatingIcon = ({ Icon, delay }: { Icon: any; delay: number }) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDuration = 20 + Math.random() * 15;
  const randomRotation = Math.random() > 0.5 ? 360 : -360;
  const randomScale = 0.8 + Math.random() * 0.4;

  return (
    <motion.div
      className="absolute text-accent-600"
      style={{ transformOrigin: 'center' }}
      initial={{
        x: `${randomX}vw`,
        y: `${randomY}vh`,
        scale: randomScale,
        rotate: 0,
        opacity: 0
      }}
      animate={{
        x: [
          `${randomX}vw`,
          `${randomX + 15 + Math.random() * 10}vw`,
          `${randomX - 5 - Math.random() * 10}vw`,
          `${randomX + 8 + Math.random() * 5}vw`,
          `${randomX}vw`
        ],
        y: [
          `${randomY}vh`,
          `${randomY - 20 - Math.random() * 15}vh`,
          `${randomY + 10 + Math.random() * 10}vh`,
          `${randomY - 5 - Math.random() * 5}vh`,
          `${randomY}vh`
        ],
        rotate: [0, randomRotation * 0.5, randomRotation, randomRotation * 1.5, randomRotation * 2],
        scale: [randomScale, randomScale * 1.1, randomScale * 0.9, randomScale * 1.05, randomScale],
        opacity: [0, 0.08, 0.12, 0.08, 0], // Smooth fade in/out with peak visibility
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth easing
        delay: delay,
        times: [0, 0.25, 0.5, 0.75, 1], // Control timing of keyframes
      }}
    >
      <Icon size={32} />
    </motion.div>
  );
};

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

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {programmingIcons.map((Icon, index) => (
          <FloatingIcon key={index} Icon={Icon} delay={index * 0.8} />
        ))}
        {programmingIcons.map((Icon, index) => (
          <FloatingIcon key={`duplicate-${index}`} Icon={Icon} delay={(index + 6) * 0.7} />
        ))}
        {programmingIcons.map((Icon, index) => (
          <FloatingIcon key={`third-${index}`} Icon={Icon} delay={(index + 11) * 0.6} />
        ))}
      </div>

      <motion.div
        className="container-custom relative z-10"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
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
