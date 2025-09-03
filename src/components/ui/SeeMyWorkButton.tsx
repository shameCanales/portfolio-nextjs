"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";
import Link from "next/link";

export default function SeeMyWorkButton() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`border-[var(--color-text)] border-[0.5px]  p-2 rounded-md flex items-center justify-center`}
    >
      <Link className={`text-[var(--color-text)] text-xs`} href="/projects">
        See My Work
      </Link>
      <Image
        className="w-[14px] h-[14px] ml-3"
        src={`/${theme}-mode/right-arrow.png`}
        alt="download pdf button"
        width="15"
        height="15"
      />
    </div>
  );
}
