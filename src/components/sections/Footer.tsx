"use client";

import FooterSocialLinks from "../ui/FooterSocialLinks";
import FooterTitle from "../ui/FooterTItle";
import FooterParagraph from "../ui/FooterParagraph";
import FooterLink from "../ui/FooterLink";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";
import { Poppins } from "next/font/google";
import { motion, Variants, easeOut } from "framer-motion";
import { socialsIcon } from "@/lib/data";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});



// ✅ Use easing functions instead of strings
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: easeOut },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function Footer() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={`mt-10 text-center sm:text-left pt-1 sm:pt-5 pb-8 px-5 sm:px-8 md:px-12 lg:px-18 xl:px-[120px] 2xl:px-[200px] 3xl:px-[220px] bg-[var(--color-card)] ${
        theme === "dark" ? "border-t-[.5px] border-[var(--color-border)]" : ""
      }`}
    >
      {/* Top Section */}
      <div className="sm:grid lg:flex lg:justify-between sm:grid-cols-2 lg:grid-cols-3 sm:text-left sm:gap-2">
        <motion.div variants={itemVariants}>
          <FooterTitle>Mark Aron Shame Canales</FooterTitle>
          <FooterParagraph>
            Frontend Developer and UI/UX enthusiast based in Pasig, Manila.
            Specializing in designing and building modern web applications and
            exploring full stack development.
          </FooterParagraph>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="sm:text-right lg:text-left"
        >
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
        </motion.div>

        <motion.div variants={itemVariants}>
          <FooterTitle>Connect with Me</FooterTitle>
          <ul className="flex justify-center sm:justify-start mt-4 gap-3 lg:gap-4">
            {socialsIcon.map((soc, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FooterSocialLinks filename={soc.filename} link={soc.href} />
              </motion.div>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={itemVariants}
        className={`border-t-[0.5px] mt-10 md:mt-12 lg:pt-2 sm:flex sm:justify-between ${
          theme === "dark" ? "border-[var(--color-border)]" : "border-[#4E4E4E]"
        }`}
      >
        <p
          className={`md:w-[320px] lg:w-auto text-xs 2xl:text-sm mt-3 leading-4.5 xl:leading-normal text-[var(--color-text-secondary)] ${poppins.className}`}
        >
          ©2025 Mark Aron Shame B. Canales. All rights reserved.
        </p>
        <p
          className={`md:w-[320px] lg:w-auto text-xs 2xl:text-sm mt-3 leading-4.5 sm:text-right xl:leading-normal text-[var(--color-text-secondary)] ${poppins.className}`}
        >
          Built with NextJS, TailwindCSS, and Framer Motion.
        </p>
      </motion.div>
    </motion.div>
  );
}
