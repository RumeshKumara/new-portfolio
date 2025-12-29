"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import InfiniteScroll from "@/components/InfiniteScroll";
import { skillsData } from "@/lib/data";

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

          <InfiniteScroll items={skillsData} />
        </motion.div>
      </div>
    </section>
  );
}
