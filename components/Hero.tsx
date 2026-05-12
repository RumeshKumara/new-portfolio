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

const marqueeItems = [
  "React",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Three.js",
  "UI & UX",
  "Python",
  "Figma",
];



export default function Hero({ onViewProjects, onContact }: HeroProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [showCVPopup, setShowCVPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    if (!showCVPopup) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#cv-popup-wrapper")) setShowCVPopup(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showCVPopup]);
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

  const handleDownloadCV = (type: "se" | "uiux") => {
    const files = {
      se: { href: "/cv/Rumesh_SE_CV.pdf", name: "Rumesh_SE_CV.pdf" },
      uiux: { href: "/cv/Rumesh_UIUX_CV.pdf", name: "Rumesh_UIUX_CV.pdf" },
    };
    const { href, name } = files[type];
    const link = document.createElement("a");
    link.href = href;
    link.download = name;
    link.click();
    setShowCVPopup(false);
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
    <div className="min-h-screen pt-20 relative overflow-hidden flex flex-col">
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
        className="container-custom relative z-10 flex-1 flex items-center justify-center pb-12"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 w-full mt-[4rem]">
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
            className="text-lg md:text-xl text-accent-600 max-w-2xl mx-auto leading-loose"
          >
            Crafting exceptional digital experiences with modern technologies.
            Specialized in{" "}
            <span className="font-bold text-black brush-highlight">React</span>,{" "}
            <span className="font-bold text-black brush-highlight">Next.js</span>, and{" "}
            <span className="font-bold text-black brush-highlight">TypeScript</span>.
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
            {/* CV Download with popup */}
            <div id="cv-popup-wrapper" className="relative">
              <button
                onClick={() => setShowCVPopup((prev) => !prev)}
                className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black duration-200 hover:text-white transition-all flex items-center gap-2"
              >
                Download CV
                <Download size={20} />
              </button>

<AnimatePresence>
                {showCVPopup && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="fixed inset-0 z-40 cursor-default"
                      onClick={() => setShowCVPopup(false)}
                    />
                    {/* Centered popup */}
                    <motion.div
                      initial={{ opacity: 0, y: 16, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 16, scale: 0.95 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50"
                    >
                      {/* Header */}
                      <div className="px-5 pt-4 pb-2">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Choose CV Type</p>
                      </div>

                      <div className="py-2 px-2 flex flex-col gap-1">
                        <button
                          id="cv-se-download"
                          onClick={() => handleDownloadCV("se")}
                          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors group"
                        >
                          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                            SE
                          </span>
                          <div className="text-left">
                            <p className="font-semibold text-black leading-tight">Software Engineering</p>
                            <p className="text-xs text-gray-500">Full-stack &amp; dev CV</p>
                          </div>
                          <Download size={14} className="ml-auto text-gray-400" />
                        </button>

                        <button
                          id="cv-uiux-download"
                          onClick={() => handleDownloadCV("uiux")}
                          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors group"
                        >
                          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                            UX
                          </span>
                          <div className="text-left">
                            <p className="font-semibold text-black leading-tight">UI/UX Design</p>
                            <p className="text-xs text-gray-500">Design &amp; product CV</p>
                          </div>
                          <Download size={14} className="ml-auto text-gray-400" />
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
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

      <div className="hero-marquee-shell relative z-10" aria-label="Core technologies and skills">
        <div className="hero-marquee-track">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="hero-marquee-group"
              aria-hidden={groupIndex === 1}
            >
              {marqueeItems.map((item) => (
                <div key={`${groupIndex}-${item}`} className="hero-marquee-item">
                  <span>{item}</span>
                  <span className="hero-marquee-separator">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
