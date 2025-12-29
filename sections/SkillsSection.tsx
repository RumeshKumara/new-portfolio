"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import InfiniteScroll from "@/components/InfiniteScroll";
import { programmingLanguages, technologies } from "@/lib/data";
import Image from "next/image";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-accent-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16 text-center">
            Skills & Technologies
          </h2>

          <div className="space-y-12">
            {/* Programming Languages - Scrolling */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6 text-center">
                Programming Languages
              </h3>
              <InfiniteScroll items={programmingLanguages} showLogos={true} direction="left" />
            </div>

            {/* Technologies & Frameworks - Card Grid */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-8 text-center">
                Technologies & Frameworks
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative bg-white border-2 border-accent-200 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      {tech.logo && (
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="text-sm font-medium text-black">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
