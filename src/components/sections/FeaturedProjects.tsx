import Subheading from "../ui/Subheading";
import FeatureProjectsCarousel from "../FeatureProjectsCarousel";
import FeaturedProjectItem from "../FeauredProjectItem";

export default function FeaturedProjects() {
  return (
    <div className="mt-15 mx-[-20px]">
      <Subheading>Featured Projects</Subheading>
      <FeatureProjectsCarousel />
    </div>
  );
}
