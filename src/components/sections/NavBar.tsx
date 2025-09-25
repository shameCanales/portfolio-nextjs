"use client";

import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`3xl:w-[1180px] 3xl:mx-auto sticky top-4.5 z-11 shadow-md flex justify-between items-center px-3 2xl:px-7 py-1 sm:py-2 sm:mt-8 mx-5 sm:mx-8 md:mx-12 lg:mx-[72px] xl:mx-[120px] 2xl:mx-[200px] rounded-sm sm:rounded-lg xl:rounded-[10px] 2xl:rounded-[13px] backdrop-blur-xs bg-[var(--color-card)] ${
        theme === "dark" ? "border-[.5px] border-[rgba(255,255,255,.2)]" : ""
      }`}
    >
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`${poppins.className} font-semibold text-xl sm:text-2xl 2xl:text-[32px]`}
      >
        FE
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hidden md:flex md:gap-2 lg:gap-8 relative"
      >
        {links.map((link) => {
          const isActive = pathname === link.route;
          return (
            <motion.li
              key={link.route}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <NavbarLink
                isActive={isActive}
                href={link.route}
                label={link.label}
              />
              {isActive && (
                <motion.div
                  layoutId="activeLink" // shared id for smooth sliding
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--color-accent)] rounded-full"
                />
              )}
            </motion.li>
          );
        })}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-1"
      >
        <ThemeToggle />
        <ToggleMobileNav>
          <Image
            className="md:hidden w-[23px] sm:w-[20px]"
            src={`/${theme}-mode/menu.png`}
            alt="toggle mobile menu"
            width="250"
            height="250"
          />
        </ToggleMobileNav>
      </motion.div>
    </motion.div>
  );
}
