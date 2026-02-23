"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      setIsScrolled(window.scrollY > 50);

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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 flex justify-center">
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
        className={`relative star-border bg-white/40 backdrop-blur-xl rounded-full shadow-lg shadow-black/5 ${
          isScrolled ? "max-w-fit" : "max-w-6xl w-full"
        }`}
      >

        <div className={`flex items-center justify-between px-8 ${
          isScrolled ? "h-14" : "h-16"
        } transition-all duration-300`}>
          {/* Logo */}
          <AnimatePresence mode="popLayout">
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, width: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, width: "auto", filter: "blur(0px)" }}
                exit={{ opacity: 0, width: 0, filter: "blur(4px)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="overflow-hidden"
              >
                <Link href="/" className="flex items-center cursor-pointer mr-8" aria-label="Home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  <span className="text-2xl font-bold text-black whitespace-nowrap">RK</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 whitespace-nowrap ${
                  activeSection === item.href.slice(1)
                    ? "text-black"
                    : "text-accent-500 hover:text-black"
                }`}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="navActiveIndicator"
                    className="absolute inset-0 bg-accent-100 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            ))}
            
            {/* Blog Link */}
            <a
              href="https://medium.com/@rumeshk066"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium bg-black text-white hover:bg-accent-800 rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                isScrolled ? "px-5 py-2" : "px-6 py-2.5"
              }`}
              title="Visit my blog"
            >
              <BookOpen size={16} />
              <span>Blogs</span>
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
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="md:hidden absolute left-4 right-4 mt-2 bg-white/40 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 400, damping: 30 }}
                  className={`block py-2.5 px-4 rounded-xl text-lg font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-black bg-accent-100"
                      : "text-accent-500 hover:text-black hover:bg-accent-50"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Blog Link Mobile */}
              <a
                href="https://medium.com/@rumeshk066"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-lg font-medium bg-black text-white hover:bg-accent-800 rounded-full transition-all w-fit"
              >
                <BookOpen size={20} />
                <span>Blogs</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
