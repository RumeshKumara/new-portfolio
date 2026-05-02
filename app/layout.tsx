import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rumesh Kumara | Frontend Engineer & UI/UX Designer",
  description: "Portfolio of Rumesh Kumara - Frontend Engineer and UI/UX Designer specializing in modern web development with React, Next.js, and TypeScript.",
  keywords: ["Rumesh Kumara", "Frontend Engineer", "UI/UX Designer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Rumesh Kumara" }],
  openGraph: {
    title: "Rumesh Kumara | Frontend Engineer & UI/UX Designer",
    description: "Portfolio of Rumesh Kumara - Senior Frontend Engineer and UI/UX Designer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <NavbarWrapper />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
