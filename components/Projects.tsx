"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { projectsData } from "@/lib/data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

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

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacing;
        const y = r * spacing;
        // unique phase per dot using a deterministic seed
        const phase = ((c * 7 + r * 13) % 100) / 100;
        // slow individual sine wave → smooth on/off
        const alpha = (Math.sin(now * 0.8 + phase * Math.PI * 2) + 1) / 2;
        // clamp so dots never fully disappear (keeps pattern visible)
        const minAlpha = 0.04;
        const maxAlpha = 0.28;
        const finalAlpha = minAlpha + alpha * (maxAlpha - minAlpha);

        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,0,0,${finalAlpha})`;
        ctx.fill();
      }
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden
    />
  );
}

/* ─── Category chip colours ─────────────────────────────────────────── */
const categoryAccent: Record<string, string> = {
  "UI/UX":   "bg-violet-100 text-violet-700",
  "Web App": "bg-sky-100 text-sky-700",
  "Mobile":  "bg-emerald-100 text-emerald-700",
  "Others":  "bg-amber-100  text-amber-700",
};

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

      {/* ── Subtle top/bottom fade ── */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none z-0" />

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
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.96 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative flex flex-col bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-400 hover:-translate-y-1 transition-all duration-300"
              >
                {/* ── Card top accent bar ── */}
                <div className="h-1 w-full bg-gradient-to-r from-gray-800 via-gray-500 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* ── Image / Placeholder ── */}
                <div className="relative h-44 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
                  {/* Large initial letter */}
                  <span className="text-7xl font-black text-gray-200 select-none group-hover:scale-110 transition-transform duration-500">
                    {project.title.charAt(0)}
                  </span>
                  {/* Category badge */}
                  <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold ${categoryAccent[project.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {project.category}
                  </span>
                </div>

                {/* ── Content ── */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-black transition-colors leading-tight">
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
                        className="px-2.5 py-1 text-[11px] font-medium bg-gray-100 text-gray-600 rounded-full"
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
                  <div className="flex items-center gap-3 pt-1 border-t border-gray-100">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-black transition-colors"
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
                        className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-black transition-colors ml-auto"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
