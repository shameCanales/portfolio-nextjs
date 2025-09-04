"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import ToggleMobileNav from "./ToggleMobileNav";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function NavBar() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  console.log(theme);

  return (
    <div
      className={`sticky top-4.5 z-2 shadow-md flex justify-between items-center px-3 py-1 mx-4 rounded-xs backdrop-blur-xs bg-[var(--color-card)] ${
        theme === "dark" ? "border-[.5px] border-[rgba(255,255,255,.2)]" : ""
      }`}
    >
      <p className={`${poppins.className} font-semibold text-xl`}>SC</p>
      <ul className="hidden md:block">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>

        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div>
        <ThemeToggle />
        <ToggleMobileNav>
          <Image
            className="md:hidden"
            src={`/${theme}-mode/menu.png`}
            alt="toggle mobile menu"
            width="16"
            height="16"
          />
        </ToggleMobileNav>
      </div>
    </div>
  );
}
