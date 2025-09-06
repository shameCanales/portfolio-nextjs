"use client";

import ThemeToggle from "../ThemeToggle";
import ToggleMobileNav from "../ToggleMobileNav";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";
import { usePathname } from "next/navigation";
import NavbarLink from "../ui/NavbarLink";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const links = [
  { route: "/", label: "Home" },
  { route: "/experience", label: "Experience" },
  { route: "/projects", label: "Projects" },
  { route: "/about", label: "About" },
];

export default function NavBar() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const pathname = usePathname();

  return (
    <div
      className={`sticky top-4.5 z-11 shadow-md flex justify-between items-center px-3 py-1 sm:py-2 sm:mt-8 mx-8 md:mx-12 lg:mx-[72px] xl:mx-[120px] rounded-sm sm:rounded-lg xl:rounded-[10px] backdrop-blur-xs bg-[var(--color-card)] ${
        theme === "dark" ? "border-[.5px] border-[rgba(255,255,255,.2)]" : ""
      }`}
    >
      <p className={`${poppins.className} font-semibold text-xl sm:text-2xl `}>
        SC
      </p>
      <ul className="hidden md:flex md:gap-2 lg:gap-8">
        {links.map((link) => (
          <NavbarLink
            key={link.route}
            isActive={pathname === link.route}
            href={link.route}
            label={link.label}
          />
        ))}
      </ul>
      <div className="flex">
        <ThemeToggle />
        <ToggleMobileNav>
          <Image
            className="md:hidden sm:w-[20px]"
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
