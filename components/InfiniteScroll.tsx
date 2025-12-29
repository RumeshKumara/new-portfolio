"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface InfiniteScrollProps {
  items: string[];
  speed?: number;
}

export default function InfiniteScroll({ items, speed = 25 }: InfiniteScrollProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-accent-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-accent-50 to-transparent z-10 pointer-events-none"></div>

      <div
        className="flex gap-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6 flex-shrink-0"
          animate={{
            x: [0, -50 + "%"],
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
          {duplicatedItems.map((item, index) => (
            <motion.div
              key={index}
              className="px-8 py-4 bg-white border-2 border-accent-200 rounded-lg text-black font-medium whitespace-nowrap text-lg hover:border-black hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
