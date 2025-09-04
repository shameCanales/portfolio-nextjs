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

  const dummyItem = {
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
  };

  return (
    <div
      className={`absolute cursor-pointer w-[260px] backdrop-blur-md bg-[var(--color-card)] rounded-lg p-3.5 text-left  ${
        theme === "dark" ? "border-[0.5px] border-[var(--color-card)]" : ""
      }`}
    >
      <Image
        className="rounded-lg"
        src={dummyItem.src}
        alt={dummyItem.description}
        width="228"
        height="130"
      />
      <p className={`font-bold text-sm mt-4`}>{dummyItem.title}</p>
      <p
        className={`text-xs text-[var(--color-text-secondary)] leading-4.5 mt-2 font-normal ${inter.className}`}
      >
        {dummyItem.description}
      </p>

      <ul className="mt-3">
        {dummyItem.features.map((feat) => (
          <div key={feat} className="flex items-start mt-0.5">
            <Image
              src="/checklist.png"
              alt="checklist icon"
              width="15"
              height="15"
            />
            <p
              className={`text-xs text-[var(--color-text-secondary)] leading-4.5 ml-2 font-normal ${inter.className}`}
            >
              {feat}
            </p>
          </div>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-2">
        {dummyItem.techUsed.map((tech) => (
          <p
            key={tech}
            className={`bg-[var(--color-accent)] inline py-1 px-2 rounded-2xl text-[#FFFCEE] text-xs font-light ${inter.className}`}
          >
            {tech}
          </p>
        ))}
      </ul>

      <div className="flex gap-2 mt-7">
        <Link href={dummyItem.liveLink}>
          <Image
            src="/dark-mode/external.png"
            alt="go to live link"
            width="12"
            height="12"
          />
        </Link>
        <Link href={dummyItem.liveLink}>
          <Image
            src="/dark-mode/github-logo.png"
            alt="go to live link"
            width="12"
            height="12"
          />
        </Link>
      </div>
    </div>
  );
}
