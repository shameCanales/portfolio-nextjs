import Subheading from "../../ui/Subheading";
import FeatureProjectsCarousel from "../../FeatureProjectsCarousel";

export default function FeaturedProjects() {
  return (
    <div className="mt-15 sm:mt-17 md:mt-32 mx-[-20px]">
      <Subheading>Featured Projects</Subheading>
      <FeatureProjectsCarousel />
    </div>
  );
}
