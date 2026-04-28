"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Layout, Smartphone } from "lucide-react";

const webDesigns = [
  {
    src: "/images/showcase/web_app_showcase_1_1777280275408.png",
    title: "SaaS Dashboard",
    category: "Web Application"
  },
  {
    src: "/images/showcase/web_app_showcase_2_1777280298301.png",
    title: "Crypto Platform",
    category: "Fintech"
  },
  {
    src: "/images/showcase/web_app_showcase_3_1777280366472.png",
    title: "E-Commerce Luxury",
    category: "Retail"
  },
];

const mobileDesigns = [
  {
    src: "/images/showcase/mobile_app_showcase_1_1777280321265.png",
    title: "Fitness Tracker",
    category: "Health & Fitness"
  },
  {
    src: "/images/showcase/mobile_app_showcase_2_1777280343730.png",
    title: "Food Delivery",
    category: "Lifestyle"
  },
  {
    src: "/images/showcase/mobile_app_showcase_3_1777280390539.png",
    title: "Social Connect",
    category: "Communication"
  },
];

export default function ShowcaseSection() {
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
        
        <div className="relative flex overflow-hidden py-4">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
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
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
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

        <div className="relative flex overflow-hidden py-4">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
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
                  <div className="relative border-[8px] md:border-[12px] border-gray-200 rounded-[3rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.10)] bg-[#f1f1f1] aspect-[9/19.5]">
                    {/* Notch / Dynamic Island */}
                    <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-16 md:w-24 h-5 md:h-7 bg-[#1d1d1d] rounded-full z-20" />
                    
                    {/* Screen Content */}
                    <div className="relative h-full w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
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
                    <div className="absolute bottom-1.5 md:bottom-2 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 md:h-1.5 bg-gray-300/60 rounded-full z-20" />
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
