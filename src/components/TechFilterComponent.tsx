"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "@/lib/store/store";
import { categories, techStack } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function TechFilterComponent() {
  const theme = useSelector<RootState>((state) => state.theme.theme);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter tech stack based on category
  const filteredTechs =
    selectedCategory === "all"
      ? techStack
      : techStack.filter((t) => t.category === selectedCategory);

  return (
    <div className="w-full mt-5 lg:mb-35 2xl:mb-25 3xl:mb-40">
      {/* Categories */}
      <div className="flex overflow-x-auto gap-7 sm:gap-10 2xl:gap-5 justify-center-safe xl:rounded-xl py-2 3xl:py-3 scrollbar-hide mx-[-20px] md:mx-[-48px] sm:mx-[-32px] lg:mx-[-72px] xl:mx-0 2xl xl:mt-10 2xl:w-[920px] 3xl:w-[1100px] 2xl:mx-auto px-6 bg-[var(--color-card)]">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`whitespace-nowrap rounded-md text-xs md:text-sm lg:text-base 3xl:text-lg px-6 py-2 transition-colors
              ${
                selectedCategory === cat.name
                  ? "bg-[var(--color-bg)] text-[var(--color-text)] font-medium"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] font-normal"
              } ${inter.className}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tech Items */}
      <div className="lg:bg-[#050B20] lg:p-10 lg:px-15 pt-8 lg:mt-6 xl:mt-10 2xl:mx-auto 2xl:w-[910px] 3xl:w-[1100px] lg:rounded-xl ">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory} // 👈 forces re-render when category changes
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.05, // 👈 stagger on enter
                },
              },
              exit: {
                opacity: 0,
                y: -20,
                transition: { staggerChildren: 0.03, staggerDirection: -1 }, // 👈 stagger on exit
              },
            }}
            className="flex content-start flex-wrap gap-3 lg:gap-4 lg:pt-0 justify-center h-[370px] sm:h-[260px] lg:h-[200px] xl:h-[220px] xl:w-[820px] xl:mx-auto xl:my-auto"
          >
            {filteredTechs.map((tech) => (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                }}
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
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
