"use client";

import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Layout, Smartphone } from "lucide-react";

const webDesigns = [
  {
    src: "/images/showcase/thumbnail_ui.png",
    title: "Home Automation Dashboard UI",
    category: "Web Application"
  },
  {
    src: "/images/showcase/ui-1.png",
    title: "Home Automation Dashboard UI",
    category: "Web Application"
  },
  {
    src: "/images/showcase/ui-2.png",
    title: "Home Automation Dashboard UI",
    category: "Web Application"
  },
  {
    src: "/images/showcase/ui-3.png",
    title: "Home Automation Dashboard UI",
    category: "Web Application"
  },
  {
    src: "/images/showcase/web_app_1.png",
    title: "Messaging Dashboard UI",
    category: "Web Application"
  },
  {
    src: "/images/showcase/web_app_2.png",
    title: "Messaging Dashboard UI",
    category: "Web Application"
  },
  {
    src: "/images/showcase/web_app_3.png",
    title: "Messaging Dashboard UI",
    category: "Web Application"
  },
];

const mobileDesigns = [
  {
    src: "/images/showcase/Splash.png",
    title: "Clothing App",
    category: "E Commerce UI"
  },
  {
    src: "/images/showcase/Login.png",
    title: "Clothing App",
    category: "E Commerce UI"
  },
  {
    src: "/images/showcase/Login-Password.png",
    title: "Clothing App",
    category: "E Commerce UI"
  },
  {
    src: "/images/showcase/Login-Password-1.png",
    title: "Clothing App",
    category: "E Commerce UI"
  },
  {
    src: "/images/showcase/Password-Reset.png",
    title: "Clothing App",
    category: "E Commerce UI"
  },
  {
    src: "/images/showcase/Password-Reset-1.png",
    title: "Clothing App",
    category: "E Commerce UI"
  },
  {
    src: "/images/showcase/Onboarding.png",
    title: "Clothing App",
    category: "E Commerce UI"
  },
  {
    src: "/images/showcase/Homepage.png",
    title: "Clothing App",
    category: "E Commerce UI"
  },
  {
    src: "/images/showcase/Categories.png",
    title: "Clothing App",
    category: "E Commerce UI"
  },
  {
    src: "/images/showcase/Categories-1.png",
    title: "Clothing App",
    category: "E Commerce UI"
  },
];

export default function ShowcaseSection() {
  const [isWebHovered, setIsWebHovered] = useState(false);
  const [isMobileHovered, setIsMobileHovered] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden bg-white text-black">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#e8cfa3]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#e8cfa3]/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="container-custom relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest uppercase border border-[#e8cfa3] text-[#b49b6d] rounded-full bg-[#e8cfa3]/5"
          >
            Visual Portfolio
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Design <span className="relative inline-block">
              Showcase
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#e8cfa3]/30 -z-10" />
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl leading-relaxed">
            Exploring the intersection of <span className="text-black font-medium">aesthetics</span> and <span className="text-black font-medium">functionality</span> through high-fidelity prototypes.
          </p>
        </motion.div>
      </div>

      {/* Web Design Showcase */}
      <div className="mb-24">
        <div className="container-custom flex items-center gap-3 mb-12">
          <div className="p-2 rounded-lg bg-black text-white">
            <Layout size={20} />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tighter">Web App Designs</h3>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        <div 
          className="relative flex overflow-hidden py-4"
          onMouseEnter={() => setIsWebHovered(true)}
          onMouseLeave={() => setIsWebHovered(false)}
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: isWebHovered ? 120 : 40,
                ease: "linear",
              },
            }}
          >
            {[...webDesigns, ...webDesigns].map((item, index) => (
              <div
                key={`web-${index}`}
                className="flex-shrink-0 w-[360px] md:w-[560px] px-6"
              >
                {/* Browser Frame */}
                <div className="group relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(232,207,163,0.3)] hover:-translate-y-2">
                  {/* Browser Header */}
                  <div className="bg-[#f1f1f1] border-b border-gray-200 px-4 py-3 flex items-center gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="flex-grow flex justify-center">
                      <div className="bg-white rounded-md h-6 w-full max-w-md border border-gray-200 flex items-center px-3">
                        <div className="w-2 h-2 rounded-full bg-gray-200 mr-2" />
                        <div className="w-24 h-1.5 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="relative aspect-video overflow-hidden bg-white">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                      <span className="text-[#e8cfa3] text-sm font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</span>
                      <h4 className="text-white text-3xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h4>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="absolute top-8 right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150"
                      >
                        <ArrowUpRight className="text-black" size={24} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Design Showcase */}
      <div className="mt-16">
        <div className="container-custom flex items-center gap-3 mb-12 justify-end">
          <div className="flex-grow h-px bg-gray-200" />
          <h3 className="text-2xl font-bold uppercase tracking-tighter">Mobile UI Concepts</h3>
          <div className="p-2 rounded-lg bg-black text-white">
            <Smartphone size={20} />
          </div>
        </div>

        <div 
          className="relative flex overflow-hidden py-4"
          onMouseEnter={() => setIsMobileHovered(true)}
          onMouseLeave={() => setIsMobileHovered(false)}
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: isMobileHovered ? 100 : 35,
                ease: "linear",
              },
            }}
          >
            {[...mobileDesigns, ...mobileDesigns].map((item, index) => (
              <div
                key={`mobile-${index}`}
                className="flex-shrink-0 w-[200px] md:w-[280px] px-5"
              >
                {/* Mobile Frame (iPhone Style) */}
                <div className="group relative mx-auto transition-all duration-500 hover:-translate-y-4">
                  {/* Outer Bezel */}
                  <div className="relative border-[8px] md:border-[10px] border-[#f8f8f8] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-black aspect-[9/19.5]">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-10 z-30 flex justify-between items-end px-6 pb-1">
                      <span className="text-white text-[10px] font-bold">9:41</span>
                      <div className="flex gap-1 items-center">
                        <div className="flex gap-[1px]">
                          <div className="w-[1.5px] h-[5px] bg-white rounded-sm" />
                          <div className="w-[1.5px] h-[6.5px] bg-white rounded-sm" />
                          <div className="w-[1.5px] h-[8px] bg-white rounded-sm" />
                          <div className="w-[1.5px] h-[9.5px] bg-white rounded-sm" />
                        </div>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a11 11 0 0115.658 0" />
                        </svg>
                        <div className="w-4 h-2 border border-white/50 rounded-[2px] relative">
                          <div className="absolute inset-[1px] bg-white rounded-[1px]" />
                          <div className="absolute right-[-2.5px] top-1/2 -translate-y-1/2 w-1 h-1 bg-white/50 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Notch / Dynamic Island */}
                    <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-14 md:w-20 h-5 md:h-6 bg-black rounded-full z-40 border border-white/5" />

                    {/* Screen Content */}
                    <div className="relative h-full w-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden bg-white">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                        <span className="text-[#e8cfa3] text-xs font-bold uppercase tracking-widest mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</span>
                        <h4 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h4>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        >
                          <ExternalLink className="text-white" size={24} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#e8cfa3]/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-90" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-32 flex flex-col items-center">
        <p className="text-gray-400 text-sm mb-6 uppercase tracking-[0.3em]">Built with precision</p>
        <div className="h-20 w-px bg-gradient-to-b from-[#e8cfa3] to-transparent" />
      </div>
    </section>
  );
}
