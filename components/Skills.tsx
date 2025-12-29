"use client";

import { skillsData } from "@/lib/data";

export default function Skills() {
  // Group skills by category
  const categories = Array.from(new Set(skillsData.map(skill => skill.category)));

  return (
    <div className="space-y-8">
      {/* Grid Layout for all skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="group relative"
          >
            {/* Skill Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
                {skill.category && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300">
                    {skill.category}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
