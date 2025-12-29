"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BookOpen, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-accent-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            RK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === item.href.slice(1)
                    ? "text-black"
                    : "text-accent-600 hover:text-black"
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            
            {/* Blog Link - Focused */}
            <a
              href="https://medium.com/@rumeshkumara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent-100 text-black hover:bg-accent-200 rounded-full transition-all hover:scale-105 border border-accent-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              title="Visit my blog"
            >
              <BookOpen size={18} />
              <span>Blog</span>
            </a>
            
            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-4 bg-black text-white rounded-full hover:bg-accent-800 transition-colors text-sm font-medium"
              title="Download CV"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-accent-200"
          >
            <div className="container-custom py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`block py-2 text-lg font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-black"
                      : "text-accent-600"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Blog Link Mobile - Focused */}
              <a
                href="https://medium.com/@rumeshkumara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-lg font-medium bg-accent-100 text-black hover:bg-accent-200 rounded-full transition-all w-fit border border-accent-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                <BookOpen size={20} />
                <span>Blog</span>
              </a>
              
              {/* Download CV Button Mobile */}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-4 bg-black text-white rounded-full hover:bg-accent-800 transition-colors text-lg font-medium w-fit"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
