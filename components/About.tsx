"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Net / grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial fade so edges blend into white */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, white 100%)",
        }}
      />
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-accent-700">
            <p>
              I&apos;m a passionate Senior Frontend Engineer and UI/UX Designer with a
              keen eye for detail and a love for creating seamless user
              experiences. With years of experience in the industry, I
              specialize in building modern, performant web applications using
              cutting-edge technologies.
            </p>
            <p>
              My expertise lies in React, Next.js, TypeScript, and modern CSS
              frameworks. I believe in writing clean, maintainable code and
              following best practices to deliver exceptional products that not
              only look great but perform flawlessly.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new design trends,
              contributing to open-source projects, or sharing my knowledge with
              the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
