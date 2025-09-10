import FeaturedProjectItem from "@/components/FeauredProjectItem";
import { featuredProjects } from "@/lib/data";

export default function FeaturedProjectsFixed() {
  return (
    <div className="hidden 2xl:flex justify-center mt-10 gap-6 3xl:gap-5">
      {featuredProjects.map((proj) => (
        <FeaturedProjectItem key={proj.id} project={proj} />
      ))}
    </div>
  );
}
