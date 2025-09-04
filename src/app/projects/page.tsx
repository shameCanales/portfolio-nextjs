import Projects from "@/components/sections/Projects";
import MainHeading from "@/components/ui/MainHeading";
import SectionSubheading from "@/components/ui/SectionSubheading";

export default function ProjectsPage() {
  return (
    <div className="mt-15">
      <MainHeading>Projects</MainHeading>
      <SectionSubheading>
        That helped to become what I am today.
      </SectionSubheading>
      <Projects />
    </div>
  );
}
