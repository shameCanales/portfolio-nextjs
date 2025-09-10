import AboutTitles from "@/components/ui/AboutTitle";
import DevJourItem from "@/components/DevJourItem";
import { devJourney } from "@/lib/data";

export default function DevJourney() {
  return (
    <div className="mt-15 sm:mt-18 md:mt-24 3xl:mt-45 mb-20">
      <div className="sm:hidden">
        <AboutTitles>Dev Journey</AboutTitles>
      </div>
      <div className="hidden sm:block">
        <AboutTitles>Developer Journey</AboutTitles>
      </div>

      <div className="mt-7 sm:mt-10 2xl:mt-15 2xl:max-w-[1120px] 2xl:mx-auto">
        {devJourney.map((journ) => (
          <DevJourItem
            key={journ.title}
            title={journ.title}
            desc={journ.desc}
          />
        ))}
      </div>
    </div>
  );
}
