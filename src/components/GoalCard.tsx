"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "600", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

interface CardProps {
  title: string;
  description: string;
}

export default function GoalCard({ title, description }: CardProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div
      className={`rounded-md sm:rounded-xl md:rounded-xl text-center mt-3 sm:mt-0 p-5 lg:p-6 sm:py-4  sm:px-3 md:px-8 ${
        theme === "dark" ? "border-[var(--color-border)] border-[.5px]" : ""
      } bg-[var(--color-card)]`}
    >
      <h3
        className={`text-sm sm:text-base lg:text-lg tracking-wider font-semibold text-[var(--color-text)] ${outfit.className}`}
      >
        {title}
      </h3>

      <p
        className={`text-xs lg:text-sm mt-2 sm:mt-3 lg:mt-2 leading-normal text-[var(--color-text-secondary)] ${outfit.className}`}
      >
        {description}
      </p>
    </div>
  );
}
