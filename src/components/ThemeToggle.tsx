"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { themeActions } from "@/lib/store/theme-slice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/lib/store/store";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const dispatch = useDispatch<AppDispatch>();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Initialize theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "dark"
      | "light"
      | null;

    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(prefersLight ? "light" : "dark");
    }

    dispatch(themeActions.setTheme(theme));
  }, [dispatch]);

  // Update DOM and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
    dispatch(themeActions.setTheme(theme));
  }, [theme, dispatch]);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  // Animation variants for icon
  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: { rotate: 360, scale: 1.2 },
    exit: { rotate: 0, scale: 1 },
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="mr-3"
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              className="w-[16px] sm:w-[20px]"
              src="/dark-mode/sun.png"
              alt="sun icon toggle light mode"
              width={250}
              height={250}
            />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              className="w-[16px] sm:w-[20px]"
              src="/light-mode/moon.png"
              alt="moon icon toggle dark mode"
              width={250}
              height={250}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
