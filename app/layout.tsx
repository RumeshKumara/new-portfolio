import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rumesh Kumara | Senior Frontend Engineer & UI/UX Designer",
  description: "Portfolio of Rumesh Kumara - Senior Frontend Engineer and UI/UX Designer specializing in modern web development with React, Next.js, and TypeScript.",
  keywords: ["Rumesh Kumara", "Frontend Engineer", "UI/UX Designer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Rumesh Kumara" }],
  openGraph: {
    title: "Rumesh Kumara | Senior Frontend Engineer & UI/UX Designer",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
