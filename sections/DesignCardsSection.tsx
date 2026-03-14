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
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                className="h-fit rounded-3xl border border-black/10 bg-white p-4 sm:p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
              >
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
                      <button
                        onClick={() =>
                          setLiked((prev) =>
                            prev.map((v, i) => (i === index ? !v : v))
                          )
                        }
                        aria-label={liked[index] ? "Unlike" : "Like"}
                        className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-black/10 transition-colors"
                        style={liked[index] ? { background: "#fee2e2", color: "#ef4444", borderColor: "#fca5a5" } : { color: "#9ca3af" }}
                      >
                        <motion.span
                          key={liked[index] ? "filled" : "empty"}
                          initial={{ scale: 0.6 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          className="inline-flex"
                        >
                          <Heart size={16} fill={liked[index] ? "#ef4444" : "none"} />
                        </motion.span>
                      </button>
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
