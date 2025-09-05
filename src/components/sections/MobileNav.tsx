"use client";

import Link from "next/link";
import Image from "next/image";
import ToggleMobileNav from "../ToggleMobileNav";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/lib/store/store";
import { uiActions } from "@/lib/store/ui-slice";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const links = [
  { route: "/", label: "Home" },
  { route: "/experience", label: "Experience" },
  { route: "/projects", label: "Projects" },
  { route: "/about", label: "About" },
];

export default function MobileNav() {
  const dispatch = useDispatch<AppDispatch>();
  const mobileNavIsOpen = useSelector(
    (state: RootState) => state.ui.mobileNavIsOpen
  );
  const pathname = usePathname();

  useEffect(() => {
    dispatch(uiActions.hideMobileNav());
  }, [pathname, dispatch]);

  // Container spring animation
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: { type: "spring", stiffness: 900, damping: 30 },
    },
  };

  // Links staggered animation
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 20 },
    },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <AnimatePresence>
      {mobileNavIsOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="md:hidden fixed top-0 w-full h-full bg-[rgba(17,17,17,0.56)] backdrop-blur-sm pt-8 text-center flex flex-col z-[99]"
        >
          <div className="text-right mr-7 sm:mr-11 sm:mt-3">
            <ToggleMobileNav>
              <Image
                className="sm:w-[26px]"
                src="/cancel.png"
                alt="close navigation button"
                width="22"
                height="22"
              />
            </ToggleMobileNav>
          </div>

          <motion.ul className="mt-10 sm:mt-8">
            {links.map((link) => (
              <motion.li
                key={link.route}
                variants={linkVariants}
                className={`mt-8 sm:mt-10 ${
                  pathname === link.route
                    ? "font-bold text-[#FFFFFF]"
                    : "text-[#C3C3C3]"
                }`}
              >
                <Link href={link.route}>
                  <p className="sm:text-lg">{link.label}</p>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
