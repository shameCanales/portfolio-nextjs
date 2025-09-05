"use client";

import { Outfit } from "next/font/google";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

interface EducCardProps {
  title: string;
  course: string;
  year: string;
  name: string;
  address: string;
}

export default function EducationCard({
  title,
  course,
  year,
  name,
  address,
}: EducCardProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`p-4 sm:px-10 sm:py-5 md:py-7 lg:py-8 rounded-lg sm:rounded-xl bg-[var(--color-card)] ${
        outfit.className
      } ${theme === "dark" ? "border-[var(--color-border)] border-[1px]" : ""}`}
    >
      <h1 className=" text-sm sm:text-base md:text-xl lg:text-xl font-bold text-[var(--color-text)]">
        {title}
      </h1>
      <p className={`text-xs md:text-sm mt-0 text-[var(--color-text)] font-normal`}>
        {course}
      </p>
      <p className="text-xs sm:text-sm leading-tight mt-2 md:mt-3 sm:mt-1 text-[var(--color-text-secondary)]">
        {name}
        <br />
        {year}
        <br />
        {address}
      </p>
    </div>
  );
}
