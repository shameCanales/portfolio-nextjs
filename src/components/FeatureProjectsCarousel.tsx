"use client";

import { useState, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import FeaturedProjectItem from "./FeauredProjectItem";

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
    id: 3,
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
];

export default function FeatureProjectsCarousel() {
  const [current, setCurrent] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (index: number) => {
    setCurrent(index);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 100; // minimum drag distance to switch card
    if (info.offset.x < -threshold && current < featuredProjects.length - 1) {
      setCurrent(current + 1);
    } else if (info.offset.x > threshold && current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center w-full h-135 relative overflow-hidden"
    >
      {featuredProjects.map((project, index) => {
        const isCenter = index === current;

        // Horizontal offset
        const offset = (index - current) * 230;

        return (
          <motion.div
            key={project.id}
            animate={{ x: offset, scale: isCenter ? 1 : 0.7 }}
            transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
            className={`
              
               flex items-center justify-center h-auto
               shadow-lg cursor-pointer
            `}
            style={{ zIndex: isCenter ? 10 : 5 }}
            onClick={() => handleCardClick(index)}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
          >
            <FeaturedProjectItem project={project} />
          </motion.div>
        );
      })}
    </div>
  );
}
