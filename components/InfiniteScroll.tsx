"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Skill {
  name: string;
  level: number;
  category?: string;
  logo?: string;
}

interface InfiniteScrollProps {
  items: string[] | Skill[];
  speed?: number;
  showLogos?: boolean;
  direction?: "left" | "right";
}

export default function InfiniteScroll({ items, speed = 50, showLogos = false, direction = "left" }: InfiniteScrollProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items twice to create seamless loop
  const duplicatedItems = [...items, ...items];
  
  // Helper function to get display text
  const getItemText = (item: string | Skill): string => {
    return typeof item === 'string' ? item : item.name;
  };

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-accent-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-accent-50 to-transparent z-10 pointer-events-none"></div>

      <div
        className="flex gap-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-10 flex-shrink-0"
          animate={{
            x: direction === "left" ? [0, "-50%"] : [0, "50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedItems.map((item, index) => {
            const hasLogo = typeof item === 'object' && 'logo' in item && item.logo;
            return (
              <motion.div
                key={index}
                className="px-8 py-4 bg-white border-2 border-accent-200 rounded-full text-black font-medium whitespace-nowrap text-lg  hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  {showLogos && hasLogo && 'logo' in item && item.logo && (
                    <div className="w-8 h-8 relative flex-shrink-0">
                      <Image
                        src={item.logo}
                        alt={getItemText(item)}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <span>{getItemText(item)}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
