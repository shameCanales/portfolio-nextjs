import Subheading from "../../ui/Subheading";
import FeatureProjectsCarousel from "../../FeatureProjectsCarousel";
import FeaturedProjectsFixed from "./FeaturedProjectsFixed";

export default function FeaturedProjects() {
  return (
    <div className="mt-15 sm:mt-17 md:mt-32 xl:mt-40 mx-[-20px] sm:mx-[-32px] md:mx-[-48px]">
      <Subheading>Featured Projects</Subheading>
      <FeatureProjectsCarousel />
      <FeaturedProjectsFixed />
    </div>
  );
}
