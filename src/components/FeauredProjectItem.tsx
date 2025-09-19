"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import Link from "next/link";
import { Inter } from "next/font/google";
import ProjectLinks from "./ProjectLinks";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export interface Project {
  id: number;
  src: string;
  title: string;
  description: string;
  features: string[];
  techUsed: string[];
  liveLink: string;
  githubRepoLink: string;
}

export default function FeaturedProjectItem({ project }: { project: Project }) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`absolute 2xl:static cursor-pointer w-[260px] sm:w-[320px] lg:w-[366px] 3xl:w-[480px] backdrop-blur-md bg-[var(--color-card)] rounded-lg lg:rounded-2xl p-3.5 3xl:p-8 text-left  ${
        theme === "dark" ? "border-[0.5px] border-[var(--color-border)]" : ""
      }`}
    >
      <Image
        className="rounded-lg sm:w-[283px] lg:w-[351px] 3xl:w-[411px] mx-auto aspect-video"
        src={project.src}
        alt={project.description}
        width="228"
        height="130"
      />
      <p
        className={`font-bold text-sm lg:text-base 3xl:text-lg mt-4 lg:mt-5 3xl:mt-6`}
      >
        {project.title}
      </p>
      <p
        className={`text-xs lg:text-sm 3xl:text-base text-[var(--color-text-secondary)] leading-4.5 3xl:leading-normal lg:leading-normal mt-2 sm:mt-1 2xl:mt-2 font-normal ${inter.className}`}
      >
        {project.description}
      </p>

      <ul className="mt-3 lg:mt-5 3xl:mt-6">
        {project.features.map((feat) => (
          <div key={feat} className="flex items-start mt-0.5 sm:mt-1.5">
            <Image
              className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] lg:w-[21px] lg:h-[21px] 3xl:w-[25px] 3xl:h-[25px] aspect-square"
              src="/checklist.png"
              alt="checklist icon"
              width="15"
              height="15"
            />
            <p
              className={`text-xs lg:text-sm 3xl:text-base text-[var(--color-text-secondary)] leading-normal ml-2 3xl:ml-3 font-normal ${inter.className}`}
            >
              {feat}
            </p>
          </div>
        ))}
      </ul>

      <ul className="mt-4 sm:mt-5 3xl:mt-7 flex flex-wrap gap-2 sm:gap-3">
        {project.techUsed.map((tech) => (
          <p
            key={tech}
            className={`bg-[var(--color-accent)] inline py-1 3xl:py-1.5 px-2 3xl:px-3 rounded-2xl text-[#FFFCEE] text-xs font-light ${inter.className}`}
          >
            {tech}
          </p>
        ))}
      </ul>

      <div className=" pt-7 3xl:pt-12">
        <ProjectLinks
          liveLink={project.liveLink}
          githubRepoLink={project.githubRepoLink}
          theme={theme}
        />
      </div>
    </div>
  );
}
