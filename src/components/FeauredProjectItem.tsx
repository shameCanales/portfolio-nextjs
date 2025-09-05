"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import Link from "next/link";
import { Inter } from "next/font/google";

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
      className={`absolute cursor-pointer w-[260px] sm:w-[320px] lg:w-[366px] backdrop-blur-md bg-[var(--color-card)] rounded-lg lg:rounded-2xl p-3.5 text-left  ${
        theme === "dark" ? "border-[0.5px] border-[var(--color-border)]" : ""
      }`}
    >
      <Image
        className="rounded-lg sm:w-[283px] lg:w-[351px] mx-auto"
        src={project.src}
        alt={project.description}
        width="228"
        height="130"
      />
      <p className={`font-bold text-sm lg:text-base mt-4 lg:mt-5`}>
        {project.title}
      </p>
      <p
        className={`text-xs lg:text-sm text-[var(--color-text-secondary)] leading-4.5 lg:leading-normal mt-2 sm:mt-1 font-normal ${inter.className}`}
      >
        {project.description}
      </p>

      <ul className="mt-3 lg:mt-5">
        {project.features.map((feat) => (
          <div key={feat} className="flex items-start mt-0.5 sm:mt-1.5">
            <Image
              className="sm:w-[18px] lg:w-[21px]"
              src="/checklist.png"
              alt="checklist icon"
              width="15"
              height="15"
            />
            <p
              className={`text-xs lg:text-sm text-[var(--color-text-secondary)] leading-4.5 ml-2 font-normal ${inter.className}`}
            >
              {feat}
            </p>
          </div>
        ))}
      </ul>

      <ul className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3">
        {project.techUsed.map((tech) => (
          <p
            key={tech}
            className={`bg-[var(--color-accent)] inline py-1 px-2 rounded-2xl text-[#FFFCEE] text-xs font-light ${inter.className}`}
          >
            {tech}
          </p>
        ))}
      </ul>

      <div className="flex gap-2 mt-7">
        <Link href={project.liveLink}>
          <Image
            className="sm:w-[18px]"
            src={`/${theme === "dark" ? "dark" : "light"}-mode/external.png`}
            alt="go to live link"
            width="12"
            height="12"
          />
        </Link>
        <Link href={project.liveLink}>
          <Image
            className="sm:w-[18px]"
            src={`/${theme === "dark" ? "dark" : "light"}-mode/github-logo.png`}
            alt="go to live link"
            width="12"
            height="12"
          />
        </Link>
      </div>
    </div>
  );
}
