"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";

export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-t from-[#e5cfa8] to-white">
      <Hero />
    </section>
  );
}
