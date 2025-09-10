import GoalCard from "../../GoalCard";
import AboutTitles from "@/components/ui/AboutTitle";
import { careerGoals } from "@/lib/data";

export default function CareerGoals() {
  return (
    <div className="mt-15 sm:mt-18 md:mt-24 3xl:mt-30">
      <AboutTitles>Career Goals</AboutTitles>

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 md:gap-4 mt-4 sm:mt-6 md:mt-8 2xl:mt-12">
        {careerGoals.map((goal) => (
          <GoalCard
            key={goal.title}
            title={goal.title}
            description={goal.desc}
          />
        ))}
      </div>
    </div>
  );
}
