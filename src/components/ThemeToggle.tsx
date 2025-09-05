"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { themeActions } from "@/lib/store/theme-slice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/lib/store/store";

export default function ThemeToggle() {
  const dispatch = useDispatch<AppDispatch>();

  const [theme, setTheme] = useState<"dark" | "light">("dark");

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

  return (
    <button onClick={() => toggleTheme()} className="mr-3 ">
      {theme === "dark" ? (
        <Image
          className="sm:w-[20px]"
          src="/dark-mode/sun.png"
          alt="sun icon toggle light mode"
          width="16"
          height="16"
        />
      ) : (
        <Image
          className="sm:w-[20px]"
          src="/light-mode/moon.png"
          alt="moon icon toggle dark mode"
          width="16"
          height="16"
        />
      )}
    </button>
  );
}
