"use client";

import { motion, Variants } from "framer-motion";
import MainHeading from "../../ui/MainHeading";
import IntroParagraph from "@/components/ui/IntroParagraph";
import SectionSubheading from "@/components/ui/SectionSubheading";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger child animations
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Introduction() {
  return (
    <motion.div
      className="text mt-16 sm:mt-7 md:mt-15 3xl:mt-25"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <MainHeading>Hi! I&apos;m Shame.</MainHeading>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SectionSubheading>An Aspiring Frontend Engineer</SectionSubheading>
      </motion.div>

      <motion.div className="md:mt-6 2xl:mt-10" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <IntroParagraph>
            I&apos;m a fresh IT graduate and self-taught developer passionate
            about turning ideas into interactive, user-friendly web experiences.
            With certifications in React, JavaScript, HTML, CSS, and UI/UX
            design, I&apos;ve built a strong foundation for creating clean,
            component-driven interfaces that perform beautifully across devices.
            Currently, I&apos;m focused on mastering frontend development with
            React, Next.js, Tailwind CSS, Redux Toolkit, and TanStack Query,
            while also exploring backend technologies to become a well-rounded
            developer.
          </IntroParagraph>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-4">
          <IntroParagraph>
            I thrive at the intersection of design and development—crafting
            sleek, minimalist UIs that balance creativity and functionality.
            From leading the development of a Web-Based Water Billing Management
            System as a capstone project to building hands-on personal projects,
            I enjoy solving real-world problems, writing clean reusable code,
            and continuously sharpening my skills. Driven by curiosity and
            consistency, I aim to contribute, grow, and create meaningful
            digital solutions one project at a time.
          </IntroParagraph>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
