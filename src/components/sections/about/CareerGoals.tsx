import MainHeading from "../../ui/MainHeading";
import GoalCard from "../../GoalCard";
import AboutTitles from "@/components/ui/AboutTitle";

export const careerGoals = [
  {
    title: "Learn Constantly",
    desc: "Fuel my growth through curiosity. I aim to keep learning new tools, patterns, and technologies to stay sharp and relevant in a fast-evolving field.",
  },
  {
    title: "Grow Skillset",
    desc: "Strengthen both technical and soft skills by diving deeper into frontend development, expanding my backend knowledge, and building full-stack confidence.",
  },
  {
    title: "Contribute Value",
    desc: "Whether through clean code, thoughtful design, or teamwork, I want to create meaningful impact and bring value to projects and teams I work with.",
  },
  {
    title: "Solve Problem",
    desc: "I enjoy breaking down challenges and finsing solutions, not just to make things work, but to make them work better, smarter, and smoother.",
  },
];

export default function CareerGoals() {
  return (
    <div className="mt-15 sm:mt-18 md:mt-24">
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
