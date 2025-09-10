"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Poppins, Outfit } from "next/font/google";
import TechItemProject from "@/components/ui/TechItemProject";
import { allProjects } from "@/lib/data";

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

export default function FeatureProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  // Ref for cards
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const idx = Number(visible.target.getAttribute("data-index"));
          setCurrent(idx);
        }
      },
      { threshold: 1 }
    );

    const currentCards = cardRefs.current;

    currentCards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const activeProj = allProjects[current];

  return (
    <div className="hidden lg:block xl:mt-25">
      <div className="grid grid-cols-2 w-full mt-12 xlmt:mt20 gap-12  px-6">
        {/* Cards list */}
        <div className="flex flex-col gap-15 xl:gap-25 3xl:gap-35 w-full pb-40">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              data-index={index}
              className={`w-full lg:w-[350px] xl:w-[484px] aspect-square rounded-2xl overflow-hidden mx-auto transition-shadow duration-300
                ${
                  index === current
                    ? "shadow-[0_0_25px_rgba(59,130,246,0.7)] border-2 border-blue-500"
                    : "shadow-lg bg-gray-800 dark:bg-gray-700"
                }`}
            >
              <Image
                src={project.src}
                alt={project.title}
                width={420}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Info panel */}
        <div className="w-full 2xl:w-[515px] sticky top-24 2xl:top-44 3xl:top-60 self-start 2xl:pb-40">
          <h2
            className={`text-xl xl:text-2xl font-bold text-[var(--color-text)] ${poppins.className}`}
          >
            {activeProj.title}
          </h2>
          <p
            className={`mt-2 text-sm leading-normal text-[var(--color-text-secondary)] ${outfit.className}`}
          >
            {activeProj.description}
          </p>

          <ul className="mt-3 space-y-3">
            {activeProj.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <Image
                  className="mt-0.5"
                  src="/checklist.png"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className={`text-sm leading-normal ${outfit.className}`}>
                  {feat}
                </p>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-3 mt-6">
            {activeProj.techstack.map((tech) => (
              <TechItemProject key={tech.name} tech={tech} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
