"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16 text-center">
            Experience
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            {experienceData.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }: { exp: typeof experienceData[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative pl-8 border-l-2 border-accent-300"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white"></div>

      <div className="space-y-2">
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-2xl font-bold text-black">
              {exp.position}
            </h3>
            <p className="text-lg text-accent-600 font-medium">
              {exp.company}
            </p>
          </div>
          <span className="text-sm text-accent-500 flex items-center gap-2">
            <Briefcase size={16} />
            {exp.period}
          </span>
        </div>

        <p className="text-accent-700 leading-relaxed">
          {exp.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {exp.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-sm bg-accent-100 text-accent-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
