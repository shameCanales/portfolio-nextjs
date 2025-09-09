"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

export default function SeeMyWorkButton() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`border-[var(--color-text)] border-[0.5px]  p-2 lg:px-4 3xl:py-3 rounded-md flex items-center justify-center`}
    >
      <Link
        className={`text-[var(--color-text)] text-xs 2xl:text-sm font-medium ${poppins.className}`}
        href="/projects"
      >
        See My Work
      </Link>
      <Image
        className={`w-[14px] h-[14px] ml-3  3xl:ml-5`}
        src={`/${theme}-mode/right-arrow.png`}
        alt="download pdf button"
        width="15"
        height="15"
      />
    </div>
  );
}
