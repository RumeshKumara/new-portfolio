"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { projectsData } from "@/lib/data";
import { Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Category = "All" | "UI/UX" | "Web App" | "Mobile" | "Others";

/* ─── Animated Dots Background ─────────────────────────────────────── */
function DotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const spacing = 28;
    const cols = Math.ceil(canvas.width / spacing) + 1;
    const rows = Math.ceil(canvas.height / spacing) + 1;
    const now = performance.now() / 1000;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Wave travels left → right across the full canvas width
    const waveSpeed  = 0.9;   // seconds per full sweep cycle
    const waveCount  = 2.5;   // how many wave crests fit across the width

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacing;
        const y = r * spacing;

        // Primary left-to-right wave
        const phase = (x / canvas.width) * Math.PI * 2 * waveCount;
        const wave  = (Math.sin(now * waveSpeed * Math.PI * 2 - phase) + 1) / 2;

        // Subtle per-row variation so rows don't look identical
        const rowShift = (Math.sin(now * 0.4 + r * 0.6) + 1) / 2 * 0.15;

        const minAlpha = 0.04;
        const maxAlpha = 0.30;
        const finalAlpha = minAlpha + (wave + rowShift) * (maxAlpha - minAlpha);

        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,0,0,${Math.min(finalAlpha, maxAlpha)})`;
        ctx.fill();
      }
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight ?? window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      ro.disconnect();
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-1/2 -translate-x-1/2 h-full pointer-events-none z-0"
      style={{ width: "100vw" }}
      aria-hidden
    />
  );
}

/* ─── Category chip colours ─────────────────────────────────────────── */
const categoryAccent: Record<string, string> = {
  "UI/UX":   "bg-violet-100 text-violet-700",
  "Web App": "bg-sky-100 text-sky-700",
  "Mobile":  "bg-emerald-100 text-emerald-700",
  "Others":  "bg-amber-100 text-amber-700",
};

/* ─── Per-category animated border + hover config ───────────────────── */
const categoryConfig: Record<string, {
  borderGradient: string;
  titleGradient: string;
  techBg: string;
  techText: string;
  linkColor: string;
}> = {
  "UI/UX": {
    borderGradient:
      "conic-gradient(from 0deg, transparent 0%, #7c3aed 18%, #a855f7 40%, #ec4899 62%, #7c3aed 80%, transparent 100%)",
    titleGradient: "linear-gradient(to right, #7c3aed, #a855f7, #ec4899)",
    techBg: "#f5f3ff",
    techText: "#6d28d9",
    linkColor: "#7c3aed",
  },
  "Web App": {
    borderGradient:
      "conic-gradient(from 0deg, transparent 0%, #0ea5e9 18%, #3b82f6 40%, #06b6d4 62%, #0ea5e9 80%, transparent 100%)",
    titleGradient: "linear-gradient(to right, #0ea5e9, #3b82f6, #06b6d4)",
    techBg: "#f0f9ff",
    techText: "#0369a1",
    linkColor: "#0ea5e9",
  },
  "Mobile": {
    borderGradient:
      "conic-gradient(from 0deg, transparent 0%, #10b981 18%, #22c55e 40%, #14b8a6 62%, #10b981 80%, transparent 100%)",
    titleGradient: "linear-gradient(to right, #10b981, #22c55e, #14b8a6)",
    techBg: "#ecfdf5",
    techText: "#047857",
    linkColor: "#10b981",
  },
  "Others": {
    borderGradient:
      "conic-gradient(from 0deg, transparent 0%, #f59e0b 18%, #f97316 40%, #ef4444 62%, #f59e0b 80%, transparent 100%)",
    titleGradient: "linear-gradient(to right, #f59e0b, #f97316, #ef4444)",
    techBg: "#fffbeb",
    techText: "#b45309",
    linkColor: "#f59e0b",
  },
};

const fallbackConfig = categoryConfig["Others"];

/* ─── Project Card ──────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projectsData)[0];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const config = categoryConfig[project.category] ?? fallbackConfig;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.96 }}
      exit={{ opacity: 0, y: -20, scale: 0.96 }}
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative rounded-2xl p-[2px] overflow-hidden shadow-sm hover:shadow-2xl cursor-default"
      style={{ willChange: "transform" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Spinning gradient border — unique colour per category ── */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}
        aria-hidden
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square animate-spin-slow"
          style={{ background: config.borderGradient }}
        />
      </div>

      {/* ── Static border fallback (non-hover) ── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border border-gray-200/80 transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
        aria-hidden
      />

      {/* ── Inner card ── */}
      <div className="relative flex flex-col bg-white rounded-[14px] overflow-hidden h-full">

        {/* ── Image / Placeholder ── */}
        <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out"
              style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
            />
          ) : (
            <span
              className="text-8xl font-black text-gray-200 select-none transition-transform duration-500"
              style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
            >
              {project.title.charAt(0)}
            </span>
          )}

          {/* Dark overlay on hover */}
          <div
            className="absolute inset-0 transition-colors duration-300"
            style={{ background: hovered ? "rgba(0,0,0,0.08)" : "transparent" }}
          />

          {/* Category badge */}
          <span
            className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold z-10 ${
              categoryAccent[project.category] ?? "bg-gray-100 text-gray-600"
            }`}
          >
            {project.category}
          </span>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Title with category-specific gradient on hover */}
          <h3
            className="text-lg font-bold leading-tight transition-all duration-300"
            style={
              hovered
                ? {
                    color: "transparent",
                    backgroundImage: config.titleGradient,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }
                : { color: "#111827" }
            }
          >
            {project.title}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, ti) => (
              <span
                key={ti}
                className="px-2.5 py-1 text-[11px] font-medium rounded-full transition-colors duration-300"
                style={
                  hovered
                    ? { backgroundColor: config.techBg, color: config.techText }
                    : { backgroundColor: "#f3f4f6", color: "#4b5563" }
                }
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 text-[11px] font-medium bg-gray-100 text-gray-500 rounded-full">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                style={{ color: hovered ? config.linkColor : "#4b5563" }}
              >
                <ArrowUpRight size={14} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 ml-auto"
                style={{ color: hovered ? config.linkColor : "#4b5563" }}
              >
                <Github size={14} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main component ────────────────────────────────────────────────── */
export default function Projects() {
  const sectionRef = useRef(null);
  const gridRef   = useRef(null);
  const isInView  = useInView(gridRef, { once: true, margin: "-80px" });
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const categories: Category[] = ["All", "UI/UX", "Web App", "Mobile", "Others"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative w-full">
      {/* ── Full-width dots background ── */}
      <DotsBackground />

      {/* ── Subtle top/bottom fade (also full-width) ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-0" style={{ width: "100vw" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none z-0" style={{ width: "100vw" }} />

      <div ref={sectionRef} className="relative z-10 px-4 py-12 sm:px-8">

        {/* ── Filter Buttons ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none ${
                selectedCategory === cat
                  ? "bg-black text-white shadow-lg shadow-black/20 scale-105"
                  : "bg-white/80 text-gray-700 border border-gray-200 hover:border-black hover:text-black hover:bg-white"
              }`}
            >
              {selectedCategory === cat && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 rounded-full bg-black -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* ── Projects Grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
