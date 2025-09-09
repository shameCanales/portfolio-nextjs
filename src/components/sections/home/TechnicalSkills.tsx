import MainParagraph from "@/components/ui/MainParagraph";
import TechFilterComponent from "@/components/TechFilterComponent";
import Subheading from "@/components/ui/Subheading";

export default function TechnicalSkills() {
  return (
    <div className="mt-18 2xl:mt-30 3xl:mt-45">
      <Subheading>Technical Skills</Subheading>
      <MainParagraph>
        {`These are the technologies that i'm currently using on software
        engineering and I'm eager to add more technologies to my skillset that
        will make me a better software engineer and would potentially make me
        stand out to the rest.`}
      </MainParagraph>
      <TechFilterComponent />
    </div>
  );
}
