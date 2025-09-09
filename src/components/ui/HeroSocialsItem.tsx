"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import Image from "next/image";

interface SocialsProps {
  filename: string;
  href: string;
  alt: string;
}

export default function HeroSocialsItem({ item }: { item: SocialsProps }) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <li key={item.filename}>
      <a href={item.href}>
        <Image
          className="w-[26px] lg:w-[34px] 2xl:w-[40px]"
          src={`/${theme === "dark" ? "dark" : "light"}-mode/footer-socials/${
            item.filename
          }`}
          alt={item.alt}
          width="250"
          height="250"
        />
      </a>
    </li>
  );
}
