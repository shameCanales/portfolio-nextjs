import MainHeading from "../../ui/MainHeading";
import ExperienceItem from "../../ExperienceItem";
import SectionSubheading from "../../ui/SectionSubheading";
import { experiences } from "@/lib/data";


export default function Experience() {
  return (
    <div className="mt-15 sm:mt-10 lg:mt-18">
      <MainHeading>Experience</MainHeading>
      <SectionSubheading>That exposed me to the IT industry</SectionSubheading>

      <ul className="mt-18 sm:mt-12 md:mt-14 2xl:mt-18 ">
        {experiences.map((exp) => (
          <li key={exp.date}>
            <ExperienceItem
              when={exp.date}
              as={exp.role}
              address={exp.address}
              where={exp.where}
              what={exp.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
