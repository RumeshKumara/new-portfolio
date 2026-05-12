"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Figma, Linkedin, Heart } from "lucide-react";

const designCards = [
  {
    title: "Smart Home Dashboard: Theme Exploration",
    tag: "Dashboard UI Design",
    description: "A comprehensive exploration of a smart home interface across three distinct styles: modern Glassmorphism, a clean Light UI, and a high-contrast Dark mode.",
    image: "/images/figma/thumbnail-ui.png",
    alt: "Comparison of Glassmorphism, Light, and Dark Smart Home UI designs",
    figmaUrl: "https://www.figma.com/design/tjrjGsWEFnOflss4Z2bWH0/Untitled?node-id=0-1&p=f&t=eRWvGY76nxxHUNZF-0",
    linkedinUrl: "https://www.linkedin.com/posts/rumesh-kumara-166bb72a5_which-smart-home-ui-do-you-like-most-activity-7459447160560979968-pwsn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmuvx4BaPiDfJySGo51uhKWGJWsWw4IjFI6bb72a5_uiux-uidesign-uxdesign-activity-7436980304327790593-6dHH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmuvx4BaPiDfJySGo51uhKWGJWsWw4IjFI",
  },
  {
    title: "Travel Card Design ",
    tag: "UX/UI Case Study",
    description: "A travel app card concept that emphasizes destination imagery, concise information hierarchy, and clear call-to-action elements.",
    image: "/images/figma/travel_card.png",
    alt: "Travel app card UI concept",
    figmaUrl: "https://www.figma.com/design/HYg142GDqepDD1HzqaoOkJ/Linkedin?m=auto&t=eRWvGY76nxxHUNZF-6",
    linkedinUrl: "https://www.linkedin.com/posts/rumesh-kumara-166bb72a5_uiux-uidesign-uxdesign-activity-7435893041242071040-a6dt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmuvx4BaPiDfJySGo51uhKWGJWsWw4IjFI",
  },
  {
    title: "Pizza Product Card UI",
    tag: "UX/UI Case Study",
    description: "A food-delivery card concept that balances image-led storytelling with clear action points and product highlights.",
    image: "/images/figma/avatar.png",
    alt: "Pizza app product card UI concept",
    figmaUrl: "https://www.figma.com/design/HYg142GDqepDD1HzqaoOkJ/Linkedin?m=auto&t=eRWvGY76nxxHUNZF-6",
    linkedinUrl: "https://www.linkedin.com/posts/rumesh-kumara-166bb72a5_uxdesign-uiux-productdesign-activity-7440964585064656896-wR8h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmuvx4BaPiDfJySGo51uhKWGJWsWw4IjFI",
  },
  {
    title: "Mobile Navbar Exploration",
    tag: "UX/UI Case Study",
    description: "A mobile-first navigation concept focused on icon clarity, active-state emphasis, and contrast in both light and dark variants.",
    image: "/images/figma/mobile-navbar.png",
    alt: "Mobile navbar UI exploration",
    figmaUrl: "https://www.figma.com/design/HYg142GDqepDD1HzqaoOkJ/Linkedin?m=auto&t=eRWvGY76nxxHUNZF-6",
    linkedinUrl: "https://www.linkedin.com/posts/rumesh-kumara-166bb72a5_uiux-uidesign-uxdesign-activity-7436980304327790593-6dHH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmuvx4BaPiDfJySGo51uhKWGJWsWw4IjFI",
  },
  {
    title: "Pizza Product Card UI",
    tag: "UX/UI Case Study",
    description: "A food-delivery card concept that balances image-led storytelling with clear action points and product highlights.",
    image: "/images/figma/interests.png",
    alt: "Pizza app product card UI concept",
    figmaUrl: "https://www.figma.com/design/HYg142GDqepDD1HzqaoOkJ/Linkedin?m=auto&t=eRWvGY76nxxHUNZF-6",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    title: "Pizza Product Card UI",
    tag: "UX/UI Case Study",
    description: "A food-delivery card concept that balances image-led storytelling with clear action points and product highlights.",
    image: "/images/figma/online-shopping.png",
    alt: "Pizza app product card UI concept",
    figmaUrl: "https://www.figma.com/design/HYg142GDqepDD1HzqaoOkJ/Linkedin?m=auto&t=eRWvGY76nxxHUNZF-6",
    linkedinUrl: "https://www.linkedin.com/",
  },
  
  {
    title: "Profile UX Case Study",
    tag: "UX/UI Case Study",
    description: "A comprehensive redesign of the LinkedIn mobile profile, transforming a cluttered interface into a modern, content-first experience.",
    image: "/images/figma/social.jpg",
    alt: "Profile UX case study showcasing a LinkedIn profile redesign",
    figmaUrl: "https://www.figma.com/design/HYg142GDqepDD1HzqaoOkJ/Linkedin?m=auto&t=eRWvGY76nxxHUNZF-6",
    linkedinUrl: "https://www.linkedin.com/posts/rumesh-kumara-166bb72a5_uxdesign-uiux-productdesign-activity-7446399675420614657-wzcP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmuvx4BaPiDfJySGo51uhKWGJWsWw4IjFI",
  },
  {
    title: "Travel Card: Solid vs. Glassmorphism",
    tag: "Visual Exploration",
    description: "A side-by-side UI comparison exploring the impact of glassmorphism on readability and depth versus a clean, solid card layout..",
    image: "/images/figma/glass_card.png",
    alt: "Comparison of solid and glassmorphism travel card UI",
    figmaUrl: "https://www.figma.com/design/HYg142GDqepDD1HzqaoOkJ/Linkedin?m=auto&t=eRWvGY76nxxHUNZF-6",
    linkedinUrl: "https://www.linkedin.com/posts/rumesh-kumara-166bb72a5_uiux-uidesign-uxdesign-activity-7448574516059979776-WQCJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmuvx4BaPiDfJySGo51uhKWGJWsWw4IjFI",
  },
  
];

interface DesignCardsSectionProps {
  showAll?: boolean;
}

export default function DesignCardsSection({ showAll = false }: DesignCardsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const visibleCards = showAll ? designCards : designCards.slice(0, 2);
  const [liked, setLiked] = useState<boolean[]>(visibleCards.map(() => false));

  return (
    <section id="design-cards" className="py-24 bg-[#f7f7f8]">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <h2 className="text-5xl md:text-6xl font-bold text-black text-center">
              Design Work
            </h2>
            <a 
              href="https://linkedin.com/in/rumeshkumara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#0a66c2] border border-gray-200 shadow-sm hover:shadow-md hover:border-[#e5cfa8]/30 transition-all duration-300 group"
            >
              <Linkedin className="w-8 h-8 text-[#ffffff] group-hover:scale-110 transition-transform" />
            </a>
          </div>
          <p className="text-center text-gray-600 mt-5 mb-14 max-w-2xl mx-auto">
            Separate visual explorations placed right after projects.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {visibleCards.map((card, index) => (
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

          {!showAll && (
            <div className="mt-12 flex justify-center">
              <Link
                href="/design-work"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-black px-10 py-3.5 text-sm tracking-widest text-white transition-all duration-300 hover:bg-black/90 hover:scale-105 active:scale-95 hover:shadow-xl shadow-md"
              >
                See More
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
