import { education } from "@/lib/data";
import EducationCard from "@/components/EducationCard";
import AboutTitles from "@/components/ui/AboutTitle";


export default function Education() {
  return (
    <div className="mt-15 sm:mt-20 md:mt-24 xl:mt-30 3xl:mt-40">
      <div className="sm:hidden">
        <AboutTitles>Education</AboutTitles>
      </div>
      <div className="hidden sm:block">
        <AboutTitles>Educational Background</AboutTitles>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 sm:gap-3 lg:gap-4 2xl:gap-6 mt-4 sm:mt-8 2xl:mt-12 2xl:mx-auto 2xl:max-w-[1180px]">
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
