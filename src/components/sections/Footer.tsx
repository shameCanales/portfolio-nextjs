"use client";

import FooterSocialLinks from "../ui/FooterSocialLinks";
import FooterTitle from "../ui/FooterTItle";
import FooterParagraph from "../ui/FooterParagraph";
import FooterLink from "../ui/FooterLink";
import { useSelector, UseSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";

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
      className={`mt-10 bg-[var(--color-card)] text-center pt-1 pb-8 px-5 ${
        theme === "dark" ? "border-t-[.5px] border-[var(--color-border)]" : ""
      }`}
    >
      <div>
        <div>
          <FooterTitle>Mark Aron Shame Canales</FooterTitle>
          <FooterParagraph>
            Frontend Developer and UI/UX enthusiast based in Pasig, Manila.
            Specializing in designing and building modern web applications and
            exploring full stack development.
          </FooterParagraph>
        </div>

        <div>
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

          <ul className="flex justify-center mt-4 gap-3">
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
        className={`border-t-[0.5px] mt-10 ${
          theme === "dark" ? "border-[var(--color-border)]" : "border-[#4E4E4E]"
        }`}
      >
        <FooterParagraph>
          ©2025 Mark Aron Shame B. Canales. All rights reserved.
        </FooterParagraph>
        <FooterParagraph>
          Built with Nextjs, Tailwind, and Framer Motion.
        </FooterParagraph>
      </div>
    </div>
  );
}
