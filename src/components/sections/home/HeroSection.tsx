"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DownLoadResumeButton from "@/components/DownloadResumeButton";
import SeeMyWorkButton from "@/components/SeeMyWorkButton";
import { Inter } from "next/font/google";
import HeroSocialsItem from "@/components/ui/HeroSocialsItem";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

interface SocialIconLinks {
  filename: string;
  alt: string;
  href: string;
}

const socialsIcon: SocialIconLinks[] = [
  {
    filename: "linkedin.png",
    alt: "Linkedin Icon social",
    href: "#",
  },
  {
    filename: "github.png",
    alt: "Github Icon social",
    href: "#",
  },
  {
    filename: "email.png",
    alt: "Email Icon social",
    href: "#",
  },
  {
    filename: "facebook.png",
    alt: "Facebook Icon social",
    href: "#",
  },
  {
    filename: "phone-call.png",
    alt: "Phone Icon social",
    href: "#09813030091",
  },
];

export default function HeroSection() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:flex lg:gap-2 lg:justify-between lg:mt-35 2xl:mt-45 3xl:mt-55"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mx-auto lg:mx-0 lg:self-start rounded-full w-[120px] sm:w-[207px] lg:w-[340px] 2xl:w-[410px] 3xl:w-[500px] mt-15 md:mt-14 lg:mt-0 lg:order-2"
          src="/profile.png"
          alt="Profile picture"
          width="750"
          height="750"
        />

        <div className="mt-10 md:mt-14 lg:mt-0 text-center lg:text-left lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl  w-[245px] sm:w-[550px] lg:w-[400px] xl:w-[475px] 3xl:w-[615px] leading-tight mx-auto lg:mx-0 font-black ${inter.className}`}
          >
            Mark Aron Shame Canales
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className={`text-sm sm:text-base lg:text-lg xl:text-xl 3xl:text-2xl mt-3 sm:mt-2 2xl:mt-4 3xl:mt-5 font-semibold text-[var(--color-text-secondary)] ${inter.className}`}
          >
            Aspiring Frontend Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className={`text-xs xl:text-sm 2xl:text-base font-medium mt-3 sm:mt-5 lg:mt-3 xl:mt-4 2xl:mt-5 3xl:mt-7 mx-auto lg:mx-0 max-w-[425px] 2xl:max-w-[441px] leading-4.5 xl:leading-normal text-[var(--color-text-secondary)]  ${inter.className}`}
          >
            I build accessible, pixel-perfect digital experience for the web,
            Specializing in Frontend Development with NextJS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="mt-5 sm:mt-10 md:mt-6 lg:mt-5 2xl:mt-6 3xl:mt-7 grid lg:flex grid-cols-2 gap-3 sm:w-[276px] lg:w-auto mx-auto lg:mx-0"
          >
            <DownLoadResumeButton />
            <SeeMyWorkButton />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="flex gap-2 lg:gap-4 md:gap-3 justify-center lg:justify-start mt-5 lg:mt-6 xl:mt-4 2xl:mt-6 3xl:mt-8"
          >
            {socialsIcon.map((soc, index) => (
              <motion.li
                key={soc.filename}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <HeroSocialsItem item={soc} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
}
