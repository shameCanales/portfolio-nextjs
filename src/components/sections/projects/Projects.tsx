"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { Poppins, Outfit } from "next/font/google";

const poppins = Poppins({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  weight: ["300", "400", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

interface TechStackItem {
  name: string;
  src: string;
}

interface Project {
  id: number;
  src: string;
  title: string;
  description: string;
  features: string[];
  techstack: TechStackItem[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore React App",
    description:
      "A modern e-commerce platform built with React that simulates real-world shopping experiences using the FakeStore API. Designed with performance, scalability, and user experience in mind, it showcases advanced state management, routing, and UI techniques.",
    features: [
      "Implemented dynamic product browsing with search, filtering, and category-based navigation.",
      "Developed Role-based authentication with protected routes for admin and customer.",
      "Enhanced product display using an interactive image carousel and pagination.",
      "Improved user engagement with responsive UI, toast notifications, and smooth navigation.",
    ],
    techstack: [
      { name: "React", src: "/logos/reactjs.png" },
      { name: "TailwindCSS", src: "/logos/reactjs.png" },
      { name: "Redux Toolkit", src: "/logos/reactjs.png" },
      { name: "React Router V7", src: "/logos/reactjs.png" },
      { name: "React Fakestore API", src: "/logos/reactjs.png" },
      { name: "TypeScript", src: "/logos/reactjs.png" },
      { name: "Tanstack Query", src: "/logos/reactjs.png" },
    ],
  },
  {
    id: 2,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore App 2",
    description:
      "A modern e-commerce platform built with React that simulates real-world shopping experiences using the FakeStore API. Designed with performance, scalability, and user experience in mind, it showcases advanced state management, routing, and UI techniques.",
    features: [
      "Implemented dynamic product browsing with search, filtering, and category-based navigation.",
      "Developed Role-based authentication with protected routes for admin and customer.",
      "Enhanced product display using an interactive image carousel and pagination.",
      "Improved user engagement with responsive UI, toast notifications, and smooth navigation.",
    ],
    techstack: [
      { name: "React", src: "/logos/reactjs.png" },
      { name: "React 2 ", src: "/logos/reactjs.png" },
      { name: "Reac 3t", src: "/logos/reactjs.png" },
      { name: "React 4", src: "/logos/reactjs.png" },
      { name: "React 5", src: "/logos/reactjs.png" },
      { name: "React6 ", src: "/logos/reactjs.png" },
    ],
  },
  {
    id: 3,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore App 3",
    description:
      "A modern e-commerce platform built with React that simulates real-world shopping experiences using the FakeStore API. Designed with performance, scalability, and user experience in mind, it showcases advanced state management, routing, and UI techniques.",
    features: [
      "Implemented dynamic product browsing with search, filtering, and category-based navigation.",
      "Developed Role-based authentication with protected routes for admin and customer.",
      "Enhanced product display using an interactive image carousel and pagination.",
      "Improved user engagement with responsive UI, toast notifications, and smooth navigation.",
    ],
    techstack: [
      { name: "React 1", src: "/logos/reactjs.png" },
      { name: "React 2", src: "/logos/reactjs.png" },
      { name: "React 3", src: "/logos/reactjs.png" },
      { name: "React 4", src: "/logos/reactjs.png" },
      { name: "React 5", src: "/logos/reactjs.png" },
      { name: "React 6", src: "/logos/reactjs.png" },
    ],
  },
];

export default function FeatureProjectsCarousel() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [current, setCurrent] = useState(0);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50; // minimal drag distance
    if (info.offset.x < -threshold && current < featuredProjects.length - 1) {
      setCurrent((prev) => prev + 1);
    } else if (info.offset.x > threshold && current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const activeProj = featuredProjects[current];

  return (
    <div className="lg:hidden">
      <div className=" flex-col items-center w-full mt-8">
        <div className="relative flex w-full overflow-hidden h-[180px] md:h-[280px]">
          {featuredProjects.map((project, index) => {
            const isCenter = index === current;
            const offset = (index - current) * 230; // card width + gap

            return (
              <motion.div
                key={project.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                onClick={() => setCurrent(index)} // 🔥 CLICK to select
                animate={{
                  x: offset,
                  scale: isCenter ? 1 : 0.8,
                  opacity: isCenter ? 1 : 0.5,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={`absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer`}
                style={{ zIndex: isCenter ? 10 : 5 }}
              >
                <div
                  className={`w-[240px] aspect-video bg-gray-800 rounded-xl shadow-lg p-2 ${
                    isCenter ? "border-2 z-[0]" : "z-[-5]"
                  }`}
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={240}
                    height={160}
                    className="rounded-lg object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4">
          <p
            className={` font-bold text-base text-[var(--color-text)] ${poppins.className}`}
          >
            {activeProj.title}
          </p>
          <p
            className={`text-xs mt-1.5 font-normal leading-4.5 text-[var(--color-text-secondary)] ${outfit.className}`}
          >
            {activeProj.description}
          </p>

          <ul className="mt-4">
            {activeProj.features.map((feat, index) => (
              <li key={index} className="flex items-start gap-2 mt-1">
                <Image
                  src="/checklist.png"
                  alt="checklist icon"
                  width="20"
                  height="20"
                />
                <p
                  className={`text-xs leading-4.5 mt-[2px] font-normal ${outfit.className}`}
                >
                  {feat}
                </p>
              </li>
            ))}
          </ul>

          <ul className="flex content-start flex-wrap gap-1.5 justify-start h-[130px] mt-5">
            {activeProj.techstack.map((tech) => (
              <li
                key={tech.name}
                className={`flex items-center gap-2 bg-[var(--color-card)] px-2 py-1 rounded-sm ${
                  theme === "dark"
                    ? "border-[0.5px] border-[rgba(255,255,255,0.29)]"
                    : ""
                }`}
              >
                <Image src={tech.src} alt={tech.name} width={14} height={14} />
                <p className={`text-[10px] font-semibold ${outfit.className}`}>
                  {tech.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
