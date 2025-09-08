"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

export default function DownLoadResumeButton() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`p-2 lg:px-5 rounded-md flex items-center justify-center bg-[var(--color-text)]`}
    >
      <Image
        className="w-[14px] h-[14px] mr-1 2xl:mr-2"
        src={`/${theme}-mode/download.png`}
        alt="download pdf button"
        width="14"
        height="14"
      />
      <a
        className={`text-xs 2xl:text-sm text-[var(--color-bg)] font-medium ${poppins.className}`}
        href={"/resume.pdf"}
        download
      >
        Resume
      </a>
    </div>
  );
}
