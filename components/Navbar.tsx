"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, BookOpen, MapPin, Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
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
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setShowProfile(false);
      }
    };
    if (showProfile) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showProfile]);

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
              className={`flex items-center gap-2 text-sm font-medium bg-black text-white  rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                isScrolled ? "px-5 py-2" : "px-6 py-2.5"
              }`}
              title="Visit my blog"
            >
              <BookOpen size={16} />
              <span>Blogs</span>
            </a>

            {/* Avatar */}
            <div className="flex items-center ml-1 relative" ref={profileRef}>
              <button
                onClick={() => setShowProfile((v) => !v)}
                className="avatar-spin-border cursor-pointer hover:scale-105 transition-transform shadow-md flex-shrink-0 focus:outline-none"
                title="Rumesh Kumara"
              >
                <div className={`rounded-full overflow-hidden ${
                  isScrolled ? "w-8 h-8" : "w-9 h-9"
                }`}>
                  <Image
                    src="/images/rumesh.jpg"
                    alt="Rumesh Kumara"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </button>

              {/* Profile Popup */}
              <AnimatePresence>
                {showProfile && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute right-0 top-12 w-72 bg-white/80 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden z-50"
                  >
                    {/* Banner */}
                    <div className="h-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 relative">
                      <button
                        onClick={() => setShowProfile(false)}
                        className="absolute top-2 right-2 p-1 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    {/* Avatar */}
                    <div className="px-5 pb-4">
                      <div className="-mt-8 mb-3">
                        <div className="avatar-spin-border w-fit shadow-lg">
                          <div className="w-16 h-16 rounded-full overflow-hidden">
                            <Image
                              src="/images/rumesh.jpg"
                              alt="Rumesh Kumara"
                              width={64}
                              height={64}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Name & Title */}
                      <div className="mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-bold text-black">Rumesh Kumara</h3>
                          <span className="text-[10px] font-semibold px-2 py-0.5 bg-green-100 text-green-700 rounded-full border border-green-200">
                            ● Available
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">Senior Frontend Engineer &amp; UI/UX Designer</p>
                      </div>

                      {/* Info */}
                      <div className="space-y-1.5 mb-4">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <MapPin size={12} className="text-gray-400 flex-shrink-0" />
                          <span>Sri Lanka</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Mail size={12} className="text-gray-400 flex-shrink-0" />
                          <a href="mailto:rumesh@example.com" className="hover:text-black transition-colors">rumesh@example.com</a>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center gap-2 mb-4">
                        <a href="https://github.com/rumeshkumara" target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-600 transition-all">
                          <Github size={14} />
                        </a>
                        <a href="https://linkedin.com/in/rumeshkumara" target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 transition-all">
                          <Linkedin size={14} />
                        </a>
                        <a href="https://twitter.com/rumeshkumara" target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-sky-500 hover:text-white text-gray-600 transition-all">
                          <Twitter size={14} />
                        </a>
                        <a href="https://medium.com/@rumeshk066" target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-600 transition-all">
                          <BookOpen size={14} />
                        </a>
                      </div>

                      {/* CTA */}
                      <a
                        href="#contact"
                        onClick={(e) => { handleClick(e as React.MouseEvent<HTMLAnchorElement>, "#contact"); setShowProfile(false); }}
                        className="flex items-center justify-center gap-2 w-full py-2 bg-black text-white text-xs font-semibold rounded-full hover:bg-gray-800 transition-colors"
                      >
                        <ExternalLink size={12} />
                        Get In Touch
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

              {/* Avatar Mobile */}
              <div className="flex items-center gap-3 pt-2 border-t border-black/10 mt-1">
                <div className="avatar-spin-border shadow-md flex-shrink-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/images/rumesh.jpg"
                      alt="Rumesh Kumara"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-accent-500">Rumesh Kumara</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
