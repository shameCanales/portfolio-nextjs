"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "@/lib/store/store";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const categories = [
  { label: "All", name: "all" },
  { label: "Languages", name: "languages" },
  { label: "Frontend", name: "frontend" },
  { label: "UI & Styling", name: "styling" },
  { label: "Tools", name: "tools" },
  { label: "Backend (Exploring)", name: "backend" },
];

const techStack = [
  {
    name: "JavaScript (ES6+)",
    iconsrc: "/logos/javascript.png",
    category: "languages",
  },
  {
    name: "TypeScript",
    iconsrc: "/logos/typescriptLogo.png",
    category: "languages",
  },
  { name: "HTML", iconsrc: "/logos/html5.png", category: "languages" },
  { name: "CSS/Sass", iconsrc: "/logos/css3.png", category: "languages" },
  { name: "React JS", iconsrc: "/logos/reactjs.png", category: "frontend" },
  { name: "Next JS", iconsrc: "/logos/nextjs.png", category: "frontend" },
  {
    name: "Tailwind CSS",
    iconsrc: "/logos/tailwindcss.png",
    category: "styling",
  },
  { name: "Figma", iconsrc: "/logos/figma.png", category: "styling" },
  {
    name: "Framer Motion",
    iconsrc: "/logos/framermotion.png",
    category: "styling",
  },
  { name: "Git", iconsrc: "/logos/git.png", category: "tools" },
  { name: "GitHub", iconsrc: "/logos/github.png", category: "tools" },
  { name: "Jest", iconsrc: "/logos/jest.png", category: "tools" },
  {
    name: "React Testing Library",
    iconsrc: "/logos/testinglibrary.png",
    category: "tools",
  },
  { name: "Node JS", iconsrc: "/logos/nodejs.png", category: "backend" },
  { name: "Firebase", iconsrc: "/logos/firebase.png", category: "backend" },
  { name: "MySQL", iconsrc: "/logos/mysql.png", category: "backend" },
  {
    name: "MongoDB Atlas",
    iconsrc: "/logos/monggodb.png",
    category: "backend",
  },
  { name: "Prisma", iconsrc: "/logos/prisma.png", category: "backend" },
  { name: "PostgreSQL", iconsrc: "/logos/postgres.png", category: "backend" },
];

export default function TechFilterComponent() {
  const theme = useSelector<RootState>((state) => state.theme.theme);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter tech stack based on category
  const filteredTechs =
    selectedCategory === "all"
      ? techStack
      : techStack.filter((t) => t.category === selectedCategory);

  return (
    <div className="w-full mt-5 lg:mb-35 2xl:mb-25">
      <div className="flex overflow-x-auto gap-7 sm:gap-10 lg:gap-16 2xl:gap-20  justify-center-safe lg:rounded-xl  py-2 scrollbar-hide mx-[-20px] md:mx-[-48px] sm:mx-[-32px]  lg:mx-0 xl:mt-10 px-6 bg-[var(--color-card)]">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`whitespace-nowrap  rounded-md text-xs md:text-sm lg:text-base transition-colors
              ${
                selectedCategory === cat.name
                  ? "bg-[var(--color-bg)] text-[var(--color-text)] px-6 py-2 font-medium"
                  : " text-[var(--color-text-secondary)] hover:bg-[var(--color-accent)] font-normal"
              } ${inter.className}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="2xl:bg-[#050B20] lg:p-10 lg:px-15 pt-8 lg:mt-6 xl:mt-10 lg:rounded-xl ">
        <div className="flex content-start flex-wrap gap-3 lg:gap-4 lg:pt-0 justify-center h-[370px] sm:h-[260px] lg:h-[200px] xl:h-[220px] xl:w-[820px] xl:mx-auto xl:my-auto">
          {filteredTechs.map((tech) => (
            <div
              key={tech.name}
              className={`flex items-center gap-2 px-2 py-2 rounded-sm lg:rounded-lg  ${
                theme === "dark"
                  ? "border-[0.5px] border-[rgba(255,255,255,0.29)]"
                  : " bg-[rgba(255,266,266,0.29)] text-[var(--color-bg)]"
              }`}
            >
              <Image
                className="lg:w-[16px]"
                src={tech.iconsrc}
                alt={tech.name}
                width={14}
                height={14}
              />
              <p className="text-xs lg:text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
