import HeroSection from "@/components/sections/home/HeroSection";
import GithubSection from "@/components/sections/home/GithubSection";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import TechMarue from "@/components/sections/home/TechMarque";
import TechnicalSkills from "@/components/sections/home/TechnicalSkills";

export default function Home() {
  return (
    <div className="text-center">
      <HeroSection />
      <GithubSection />
      <FeaturedProjects />
      <TechMarue />
      <TechnicalSkills />
    </div>
  );
}
