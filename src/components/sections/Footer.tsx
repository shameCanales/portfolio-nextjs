"use client";

import FooterSocialLinks from "../ui/FooterSocialLinks";
import FooterTitle from "../ui/FooterTItle";
import FooterParagraph from "../ui/FooterParagraph";
import FooterLink from "../ui/FooterLink";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const socialLinks = [
  {
    filename: "linkedin.png",
    link: "#",
  },
  {
    filename: "github.png",
    link: "#",
  },
  {
    filename: "email.png",
    link: "#",
  },
  {
    filename: "facebook.png",
    link: "#",
  },
  {
    filename: "phone-call.png",
    link: "09813030091",
  },
];

export default function Footer() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`mt-10 text-center sm:text-left pt-1 sm:pt-5 pb-8 px-5 sm:px-8 md:px-12 lg:px-18 xl:px-[120px] bg-[var(--color-card)] ${
        theme === "dark" ? "border-t-[.5px] border-[var(--color-border)]" : ""
      }`}
    >
      <div className="sm:grid lg:flex lg:justify-between sm:grid-cols-2 lg:grid-cols-3 sm:text-left sm:gap-2">
        <div>
          <FooterTitle>Mark Aron Shame Canales</FooterTitle>
          <div className="">
            <FooterParagraph>
              Frontend Developer and UI/UX enthusiast based in Pasig, Manila.
              Specializing in designing and building modern web applications and
              exploring full stack development.
            </FooterParagraph>
          </div>
        </div>

        <div className="sm:text-right lg:text-left">
          <FooterTitle>Quick Links</FooterTitle>

          <ul>
            <li>
              <FooterLink link="/" label="Home" />
            </li>
            <li>
              <FooterLink link="/about" label="About Me" />
            </li>
            <li>
              <FooterLink link="/projects" label="Projects" />
            </li>
            <li>
              <FooterLink link="/experience" label="Experiences" />
            </li>
          </ul>
        </div>

        <div>
          <FooterTitle>Connect with Me</FooterTitle>

          <ul className="flex justify-center sm:justify-start mt-4 gap-3 lg:gap-4">
            {socialLinks.map((soc, index) => (
              <FooterSocialLinks
                key={index}
                filename={soc.filename}
                link="soc.link"
              />
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`border-t-[0.5px] mt-10 md:mt-12 lg:pt-2 sm:flex sm:justify-between ${
          theme === "dark" ? "border-[var(--color-border)]" : "border-[#4E4E4E]"
        }`}
      >
        <p
          className={`md:w-[320px] lg:w-[343px]  text-xs mt-3 leading-4.5 xl:leading-normal text-[var(--color-text-secondary)] ${poppins.className}`}
        >
          ©2025 Mark Aron Shame B. Canales. All rights reserved.
        </p>
        <p
          className={`md:w-[320px] lg:w-[343px]  text-xs mt-3 leading-4.5 sm:text-right xl:leading-normal text-[var(--color-text-secondary)] ${poppins.className}`}
        >
          Built with NextJS, TailwindCSS, and Framer motion.
        </p>
      </div>
    </div>
  );
}
