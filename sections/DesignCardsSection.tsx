"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const designCards = [
  {
    title: "Mobile Navbar Exploration",
    description: "A mobile-first navigation concept focused on icon clarity, active-state emphasis, and contrast in both light and dark variants.",
    image: "/images/figma/mobile-navbar.png",
    alt: "Mobile navbar UI exploration",
  },
  {
    title: "Pizza Product Card UI",
    description: "A food-delivery card concept that balances image-led storytelling with clear action points and product highlights.",
    image: "/images/figma/Pizza.png",
    alt: "Pizza app product card UI concept",
  },
];

export default function DesignCardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

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
            UI Image Cards
          </h2>
          <p className="text-center text-gray-600 mt-5 mb-14 max-w-2xl mx-auto">
            Separate visual explorations placed right after projects.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {designCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                className="rounded-3xl border border-black/10 bg-white p-4 sm:p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
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

                <div className="pt-5 px-1">
                  <h3 className="text-2xl font-semibold text-black">{card.title}</h3>
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
