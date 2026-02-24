"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "@/lib/data";
import { Calendar, Star } from "lucide-react";

// Per-card light color palettes
const CARD_ACCENTS = [
  {
    cardBg: "bg-sky-50",
    border: "border-sky-200",
    topBar: "from-sky-300 to-sky-500",
    dot: "bg-sky-400",
    ring: "ring-sky-300",
    company: "text-sky-600",
    period: "text-sky-400",
    divider: "via-sky-200",
    badge: "bg-sky-100 text-sky-700 border-sky-200",
    shadow: "shadow-sky-100",
    hover: "hover:shadow-sky-200",
    sparkle: "bg-sky-400",
    indexBg: "bg-sky-100 text-sky-600 border-sky-200",
  },
  {
    cardBg: "bg-rose-50",
    border: "border-rose-200",
    topBar: "from-rose-300 to-rose-500",
    dot: "bg-rose-400",
    ring: "ring-rose-300",
    company: "text-rose-600",
    period: "text-rose-400",
    divider: "via-rose-200",
    badge: "bg-rose-100 text-rose-700 border-rose-200",
    shadow: "shadow-rose-100",
    hover: "hover:shadow-rose-200",
    sparkle: "bg-rose-400",
    indexBg: "bg-rose-100 text-rose-600 border-rose-200",
  },
  {
    cardBg: "bg-emerald-50",
    border: "border-emerald-200",
    topBar: "from-emerald-300 to-emerald-500",
    dot: "bg-emerald-400",
    ring: "ring-emerald-300",
    company: "text-emerald-600",
    period: "text-emerald-400",
    divider: "via-emerald-200",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    shadow: "shadow-emerald-100",
    hover: "hover:shadow-emerald-200",
    sparkle: "bg-emerald-400",
    indexBg: "bg-emerald-100 text-emerald-600 border-emerald-200",
  },
  {
    cardBg: "bg-amber-50",
    border: "border-amber-200",
    topBar: "from-amber-300 to-amber-500",
    dot: "bg-amber-400",
    ring: "ring-amber-300",
    company: "text-amber-600",
    period: "text-amber-400",
    divider: "via-amber-200",
    badge: "bg-amber-100 text-amber-700 border-amber-200",
    shadow: "shadow-amber-100",
    hover: "hover:shadow-amber-200",
    sparkle: "bg-amber-400",
    indexBg: "bg-amber-100 text-amber-600 border-amber-200",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden bg-white">

      {/* ── Net / mesh background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        {/* diagonal cross lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(-45deg, rgba(0,0,0,0.025) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* SVG nodes + animated lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ng1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[
            [140,140],[280,70],[420,210],[70,350],[350,350],[490,140],
            [210,490],[560,280],[630,70],[700,350],[770,140],[840,490],
            [980,140],[1050,350],[1120,70],[1260,280],[1330,490],[1400,140],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="12" fill="url(#ng1)">
                <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2.5 + (i % 5) * 0.6}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
                <animate attributeName="r" values="8;14;8" dur={`${2.5 + (i % 5) * 0.6}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
              </circle>
              <circle cx={cx} cy={cy} r="2" fill="#1f2937" opacity="0.4" />
            </g>
          ))}
          {[
            { x1: 70, y1: 70, x2: 700, y2: 70 },
            { x1: 0, y1: 350, x2: 1400, y2: 350 },
            { x1: 350, y1: 0, x2: 350, y2: 600 },
            { x1: 700, y1: 0, x2: 700, y2: 600 },
            { x1: 1050, y1: 0, x2: 1050, y2: 600 },
          ].map((l, i) => (
            <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#000000" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.03;0.12;0.03" dur={`${4 + i * 0.8}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </line>
          ))}
        </svg>

        {/* subtle gray blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gray-200/60 blur-[120px] animate-pulse-slowest" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-gray-200/60 blur-[100px] animate-pulse-slower" />
      </div>

      <div className="relative z-10 container-custom">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-400 mb-4">
            Career Path
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6">
            My{" "}
            <span className="">
              Experience
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-black/30" />
            <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-black/30" />
          </div>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="max-w-4xl mx-auto relative">

          {/* vertical spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px origin-top bg-gradient-to-b from-transparent via-black/25 to-transparent"
          />

          <div className="space-y-16">
            {experienceData.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof experienceData)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];

  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -80 : 80, y: 20, scale: 0.95 },
    visible: {
      opacity: 1, x: 0, y: 0, scale: 1,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: index * 0.15 },
    },
  };

  return (
    <div ref={ref} className="relative flex items-center md:grid md:grid-cols-2 md:gap-12 pl-16 md:pl-0">

      {/* timeline dot */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
          className={`w-5 h-5 rounded-full ${accent.dot} ring-4 ${accent.ring} ring-offset-2 ring-offset-white shadow-md`}
        />
      </div>

      {/* left col (even) */}
      <div className={`hidden md:flex md:justify-end ${isLeft ? "order-1" : "order-2 pointer-events-none"}`}>
        {isLeft && (
          <motion.div variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="w-full max-w-sm">
            <ExperienceCard exp={exp} index={index} accent={accent} />
          </motion.div>
        )}
      </div>

      {/* right col (odd) */}
      <div className={`hidden md:flex md:justify-start ${isLeft ? "order-2 pointer-events-none" : "order-1"}`}>
        {!isLeft && (
          <motion.div variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="w-full max-w-sm">
            <ExperienceCard exp={exp} index={index} accent={accent} />
          </motion.div>
        )}
      </div>

      {/* mobile */}
      <motion.div variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="md:hidden w-full">
        <ExperienceCard exp={exp} index={index} accent={accent} />
      </motion.div>
    </div>
  );
}

function ExperienceCard({
  exp,
  index,
  accent,
}: {
  exp: (typeof experienceData)[0];
  index: number;
  accent: (typeof CARD_ACCENTS)[0];
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative group rounded-2xl border ${accent.border} ${accent.cardBg} shadow-lg ${accent.shadow} ${accent.hover} overflow-hidden transition-shadow duration-300`}
    >
      {/* colored top bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${accent.topBar}`} />

      {/* corner sparkle */}
      <div
        className={`absolute top-5 right-4 w-1.5 h-1.5 rounded-full ${accent.sparkle} animate-flash-bg opacity-70`}
        style={{ animationDelay: `${index * 0.4}s` }}
      />

      <div className="p-6">

        {/* index badge */}
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold tracking-wider mb-4 ${accent.indexBg}`}>
          <Star size={11} />
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* position */}
        <h3 className="text-xl font-black text-black mb-1 leading-tight">
          {exp.position}
        </h3>

        {/* company */}
        <p className={`text-base font-semibold ${accent.company} mb-3`}>
          {exp.company}
        </p>

        {/* period */}
        <div className={`flex items-center gap-1.5 text-sm mb-4 ${accent.period}`}>
          <Calendar size={13} />
          <span>{exp.period}</span>
        </div>

        {/* divider */}
        <div className={`h-px bg-gradient-to-r from-transparent ${accent.divider} to-transparent mb-4`} />

        {/* description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {exp.description}
        </p>

        {/* tech badges */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech, i) => (
            <span
              key={i}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${accent.badge}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}