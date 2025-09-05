import MainHeading from "../../ui/MainHeading";
import EducationCard from "@/components/EducationCard";

export const education = [
  {
    title: "Tertiary Education",
    schoolName: "Romblon State University - SFC",
    course: "Bachelor of Science in Information Technology",
    schoolYear: "S.Y. 2021-2025",
    address: "Poblacion, San Fernando, Romblon",
  },
  {
    title: "Secondary Education - Senior",
    schoolName: "Don Carlos M. Mejias Memorial NHS",
    course: "Information Communication Technology",
    schoolYear: "S.Y. 2019-2021",
    address: "Panangcalan, San Fernando, Romblon",
  },
  {
    title: "Secondary Education - Junior",
    schoolName: "Don Carlos M. Mejias Memorial NHS",
    course: "",
    schoolYear: "S.Y. 2015-2019",
    address: "Panangcalan, San Fernando, Romblon",
  },
  {
    title: "Primary Education",
    schoolName: "Campalingo Elementary School",
    course: "",
    schoolYear: "S.Y. 2008-2015",
    address: "Campalingo, San Fernando, Romblon",
  },
];

export default function Education() {
  return (
    <div className="mt-15 sm:mt-20">
      <div className="sm:hidden">
        <MainHeading>Education</MainHeading>
      </div>
      <div className="hidden sm:block">
        <MainHeading>Educational Background</MainHeading>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 2xl:gap-6 mt-4 sm:mt-8 2xl:mt-12 2xl:mx-auto 2xl:max-w-[1180px]">
        {education.map((educ) => (
          <EducationCard
            key={educ.schoolYear}
            title={educ.title}
            year={educ.schoolYear}
            course={educ.course}
            name={educ.schoolName}
            address={educ.address}
          />
        ))}
      </div>
    </div>
  );
}
