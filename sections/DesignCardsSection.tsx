"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Figma, Linkedin, Heart } from "lucide-react";

const designCards = [
  {
    title: "Mobile Navbar Exploration",
    tag: "Mobile UI Design",
    description: "A mobile-first navigation concept focused on icon clarity, active-state emphasis, and contrast in both light and dark variants.",
    image: "/images/figma/mobile-navbar.png",
    alt: "Mobile navbar UI exploration",
    figmaUrl: "https://www.figma.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    title: "Pizza Product Card UI",
    tag: "Product Card Design",
    description: "A food-delivery card concept that balances image-led storytelling with clear action points and product highlights.",
    image: "/images/figma/Pizza.png",
    alt: "Pizza app product card UI concept",
    figmaUrl: "https://www.figma.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    title: "Pizza Product Card UI",
    tag: "Product Card Design",
    description: "A food-delivery card concept that balances image-led storytelling with clear action points and product highlights.",
    image: "/images/figma/avatar.png",
    alt: "Pizza app product card UI concept",
    figmaUrl: "https://www.figma.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    title: "Pizza Product Card UI",
    tag: "Product Card Design",
    description: "A food-delivery card concept that balances image-led storytelling with clear action points and product highlights.",
    image: "/images/figma/interests.png",
    alt: "Pizza app product card UI concept",
    figmaUrl: "https://www.figma.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    title: "Pizza Product Card UI",
    tag: "Product Card Design",
    description: "A food-delivery card concept that balances image-led storytelling with clear action points and product highlights.",
    image: "/images/figma/online-shopping.png",
    alt: "Pizza app product card UI concept",
    figmaUrl: "https://www.figma.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    title: "Pizza Product Card UI",
    tag: "Product Card Design",
    description: "A food-delivery card concept that balances image-led storytelling with clear action points and product highlights.",
    image: "/images/figma/travel_card.png",
    alt: "Pizza app product card UI concept",
    figmaUrl: "https://www.figma.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
];

export default function DesignCardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [liked, setLiked] = useState<boolean[]>(designCards.map(() => false));

  return (
    <section id="design-cards" className="py-24 bg-[#f7f7f8]">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black text-center">
            Design Work
          </h2>
          <p className="text-center text-gray-600 mt-5 mb-14 max-w-2xl mx-auto">
            Separate visual explorations placed right after projects.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {designCards.map((card, index) => (
              <motion.article
                key={card.image}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                className="relative h-fit rounded-3xl border border-black/10 bg-white p-4 sm:p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
              >
                <motion.button
                  onClick={() =>
                    setLiked((prev) =>
                      prev.map((v, i) => (i === index ? !v : v))
                    )
                  }
                  aria-label={liked[index] ? "Unlike" : "Like"}
                  className="absolute top-8 right-8 z-10 w-12 h-12 inline-flex items-center justify-center rounded-full border bg-white/15 backdrop-blur-2xl"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  animate={
                    liked[index]
                      ? { scale: 1, opacity: 1 }
                      : { scale: [1, 1.06, 1], opacity: 1 }
                  }
                  transition={
                    liked[index]
                      ? { duration: 0.2 }
                      : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                  }
                  style={
                    liked[index]
                      ? {
                          color: "#ef4444",
                          borderColor: "#fca5a5",
                          boxShadow: "0 10px 30px rgba(239,68,68,0.28)",
                        }
                      : {
                          color: "#ffffff",
                          borderColor: "rgba(255,255,255,0.42)",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                        }
                  }
                >
                  <motion.span
                    variants={{
                      idle: { scale: 1, rotate: 0 },
                      liked: {
                        scale: [1, 1.2, 1],
                        rotate: [0, -10, 10, -8, 8, 0],
                      },
                    }}
                    animate={liked[index] ? "liked" : "idle"}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="inline-flex"
                  >
                    <Heart size={20} fill={liked[index] ? "#ef4444" : "none"} />
                  </motion.span>
                </motion.button>

                <div className="relative w-full overflow-hidden rounded-2xl border border-black/5 bg-white">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={1400}
                    height={1000}
                    className="h-auto w-full object-cover"
                    priority={index === 0}
                  />
                </div>

                <div className="mt-4 px-1">
                  <span className="inline-block mb-3 px-4 py-3 text-xs font-semibold tracking-wide rounded-full bg-white text-black border border-black/10">
                    {card.tag}
                  </span>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-semibold text-black">{card.title}</h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={card.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${card.title} on Figma`}
                        className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-black/10 text-gray-700 hover:bg-black hover:text-white transition-colors"
                      >
                        <Figma size={16} />
                      </a>
                      <a
                        href={card.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${card.title} on LinkedIn`}
                        className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-black/10 text-gray-700 hover:bg-[#0A66C2] hover:text-white transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
