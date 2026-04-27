"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const webDesigns = [
  "/images/showcase/web_app_showcase_1_1777280275408.png",
  "/images/showcase/web_app_showcase_2_1777280298301.png",
  "/images/showcase/web_app_showcase_3_1777280366472.png",
];

const mobileDesigns = [
  "/images/showcase/mobile_app_showcase_1_1777280321265.png",
  "/images/showcase/mobile_app_showcase_2_1777280343730.png",
  "/images/showcase/mobile_app_showcase_3_1777280390539.png",
];

export default function ShowcaseSection() {
  return (
    <section className="py-24 overflow-hidden bg-black text-white">
      <div className="container-custom mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Design <span className="text-[#e8cfa3]">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A glimpse into my design process, featuring high-fidelity web and mobile application interfaces.
          </p>
        </motion.div>
      </div>

      {/* Web Design Showcase - Left to Right */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...webDesigns, ...webDesigns].map((src, index) => (
            <div
              key={`web-${index}`}
              className="flex-shrink-0 w-[400px] md:w-[600px] px-4"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                <Image
                  src={src}
                  alt={`Web Design ${index}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-sm font-medium tracking-wider uppercase">Web Application Design</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Design Showcase - Right to Left */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...mobileDesigns, ...mobileDesigns].map((src, index) => (
            <div
              key={`mobile-${index}`}
              className="flex-shrink-0 w-[200px] md:w-[300px] px-4"
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                <Image
                  src={src}
                  alt={`Mobile Design ${index}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-medium tracking-wider uppercase">Mobile App UI</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="mt-20 flex justify-center">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#e8cfa3] to-transparent" />
      </div>
    </section>
  );
}
