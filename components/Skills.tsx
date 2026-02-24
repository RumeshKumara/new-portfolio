"use client";

import { programmingLanguages, technologies } from "@/lib/data";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Skills() {
  return (
    <div className="space-y-12">
      {/* Overall Description */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          With years of experience in full-stack development, I've mastered a diverse set of technologies 
          that enable me to build scalable, performant, and user-friendly applications. From frontend frameworks 
          to backend systems and cloud infrastructure, I'm passionate about leveraging the right tools for each project.
        </p>
      </div>

      {/* Programming Languages Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Programming Languages
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {programmingLanguages.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {skill.logo && (
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">
                {skill.name}
              </span>
              
              {/* Progress Bar */}
              <div className="w-full mt-3">
                <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-500 to-accent-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block text-center">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies & Frameworks Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Technologies & Frameworks
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {skill.logo && (
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">
                {skill.name}
              </span>
              
              {/* Category Badge */}
              {skill.category && (
                <span className="text-xs px-2 py-0.5 mt-2 rounded-full bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300">
                  {skill.category}
                </span>
              )}
              
              {/* Progress Bar */}
              <div className="w-full mt-3">
                <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-500 to-accent-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block text-center">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
