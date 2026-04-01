import HeroSection from "@/sections/HeroSection";
import About from "@/components/About";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import DesignCardsSection from "@/sections/DesignCardsSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <DesignCardsSection />
      <Contact />
    </>
  );
}
