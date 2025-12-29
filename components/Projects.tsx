"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type Category = "All" | "UI/UX" | "Web App" | "Mobile" | "Others";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const categories: Category[] = ["All", "UI/UX", "Web App", "Mobile", "Others"];

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-accent-800 text-white shadow-lg"
                : "bg-accent-100 text-accent-800 hover:bg-accent-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={index}
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          className="group bg-white border border-accent-200 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Project Image */}
          <div className="relative h-48 bg-accent-100 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-accent-300">
              {project.title.charAt(0)}
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-black group-hover:text-accent-800 transition-colors">
              {project.title}
            </h3>
            <p className="text-accent-700 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs bg-accent-100 text-accent-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-black hover:text-accent-600 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-black hover:text-accent-600 transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
      </div>
    </div>
  );
}
