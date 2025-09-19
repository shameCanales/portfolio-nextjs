"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Poppins, Outfit } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import TechItemProject from "@/components/ui/TechItemProject";
import { allProjects } from "@/lib/data";
import ProjectLinks from "@/components/ProjectLinks";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

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
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [current, setCurrent] = useState(0);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let closestIdx = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;
        const distance = Math.abs(cardCenter - screenCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIdx = index;
        }
      });

      setCurrent(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeProj = allProjects[current];

  return (
    <div className="hidden lg:block xl:mt-25">
      <div className="grid grid-cols-2 w-full mt-12 xl:mt-20 gap-12 px-6 ">
        {/* Cards list */}
        <div className="flex flex-col gap-15 xl:gap-25 3xl:gap-35 w-full pb-50">
          {allProjects.map((project, index) => (
            <motion.div
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: index === current ? 1.05 : 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={project.src}
                alt={project.title}
                width={420}
                height={420}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Info panel */}
        <div className="w-full 2xl:w-[515px] sticky top-24 2xl:top-44 3xl:top-60 self-start 2xl:pb-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProj.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
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
              <div className="mt-6">
                <ProjectLinks
                  liveLink={activeProj.liveLink}
                  githubRepoLink={activeProj.githubRepoLink}
                  theme={theme}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
