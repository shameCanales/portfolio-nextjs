import HeroSection from "@/components/sections/HeroSection";
import GithubSection from "@/components/sections/GithubSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TechMarue from "@/components/sections/TechMarque";

export default function Home() {
  return (
    <div className="text-center">
      <HeroSection />
      <GithubSection />
      <FeaturedProjects />
      <TechMarue />
    </div>
  );
}
