import FeaturedProjectItem from "@/components/FeauredProjectItem";

interface Project {
  id: number;
  src: string;
  title: string;
  description: string;
  features: string[];
  techUsed: string[];
  liveLink: string;
  githubRepoLink: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore App",
    description:
      "Built frontend for FakeStore App and integrated the Fakestore Platzi API.",
    features: [
      "Implemented component-based architecture",
      "Used tailwind classes to style components",
      "Used Redux Toolkit to manage global state.",
    ],
    techUsed: [
      "React JS",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router V7",
      "Vite",
    ],
    liveLink: "#",
    githubRepoLink: "#",
  },
  {
    id: 2,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore App 2",
    description:
      "Built frontend for FakeStore App and integrated the Fakestore Platzi API.",
    features: [
      "Implemented component-based architecture",
      "Used tailwind classes to style components",
      "Used Redux Toolkit to manage global state.",
    ],
    techUsed: [
      "React JS",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router V7",
      "Vite",
    ],
    liveLink: "#",
    githubRepoLink: "#",
  },
  {
    id: 3,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore App 3",
    description:
      "Built frontend for FakeStore App and integrated the Fakestore Platzi API. 3",
    features: [
      "Implemented component-based architecture 3",
      "Used tailwind classes to style components",
      "Used Redux Toolkit to manage global state.",
    ],
    techUsed: [
      "React JS 3",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router V7",
      "Vite",
    ],
    liveLink: "#",
    githubRepoLink: "#",
  },
];

export default function FeaturedProjectsFixed() {
  return (
    <div className="hidden 2xl:flex justify-center mt-10 gap-6">
      {featuredProjects.map((proj) => (
        <FeaturedProjectItem key={proj.id} project={proj} />
      ))}
    </div>
  );
}
