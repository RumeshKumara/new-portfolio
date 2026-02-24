import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
        secondary: "#000000",
        accent: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        "spin-slower": "spin 5s linear infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "pulse-slower": "pulse-slow 6s ease-in-out infinite",
        "pulse-slowest": "pulse-slow 8s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out infinite 2s",
        "flash-bg": "flash-bg 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        "orbit": "orbit 12s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.15)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-10px)" },
        },
        "flash-bg": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.45" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.4), 0 0 40px rgba(99,102,241,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(99,102,241,0.8), 0 0 80px rgba(99,102,241,0.4)" },
        },
        "orbit": {
          from: { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
