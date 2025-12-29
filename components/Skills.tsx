"use client";

import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="px-6 py-3 bg-white border border-accent-200 rounded-lg text-black font-medium hover:shadow-lg transition-shadow"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
