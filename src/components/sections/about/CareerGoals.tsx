import MainHeading from "../../ui/MainHeading";
import GoalCard from "../../GoalCard";

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
    <div className="mt-15">
      <MainHeading>Career Goals</MainHeading>

      <div className="mt-5">
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
