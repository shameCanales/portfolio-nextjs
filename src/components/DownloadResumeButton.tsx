"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";

export default function DownLoadResumeButton() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`bg-[var(--color-text)]  p-2 rounded-md flex items-center justify-center `}
    >
      <Image
        className="w-[14px] h-[14px] mr-1"
        src={`/${theme}-mode/download.png`}
        alt="download pdf button"
        width="14"
        height="14"
      />
      <a
        className="text-[var(--color-bg)] text-xs"
        href={"/resume.pdf"}
        download
      >
        Resume
      </a>
    </div>
  );
}
