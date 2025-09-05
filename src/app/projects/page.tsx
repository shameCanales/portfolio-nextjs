import Projects from "@/components/sections/projects/Projects";
import ProjectsLarge from "@/components/sections/projects/ProjectsLarge";
import MainHeading from "@/components/ui/MainHeading";
import SectionSubheading from "@/components/ui/SectionSubheading";

export default function ProjectsPage() {
  return (
    <div className="mt-15 sm:mt-10">
      <MainHeading>Projects</MainHeading>
      <SectionSubheading>
        That helped to become what I am today.
      </SectionSubheading>
      <Projects />
      <ProjectsLarge />
    </div>
  );
}
