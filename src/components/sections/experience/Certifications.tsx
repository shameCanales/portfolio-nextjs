"use client";

import { motion, Variants } from "framer-motion";
import MainHeading from "../../ui/MainHeading";
import MainParagraph from "../../ui/MainParagraph";
import CertificationItem from "../../CertificationItem";
import { certificationsData } from "@/lib/data";

export default function Certification() {
  // Container variants for staggered children
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // stagger each certification item
      },
    },
  };

  // Individual item animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="mt-30 sm:mt-25 lg:mt-28 xl:mt-32 3xl:mt-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible
    >
      {/* Main Heading */}
      <motion.div
        variants={itemVariants}
      >
        <MainHeading>Certifications</MainHeading>
      </motion.div>

      {/* Paragraph */}
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <MainParagraph>
          Pursued self-directed learning beyond academic requirements to deepen
          my knowledge in Web Development, demonstrating eagerness to master
          relevant technologies and stay industry-ready.
        </MainParagraph>
      </motion.div>

      {/* Certifications List */}
      <motion.ul
        className="mt-10 xl:mt-20 md:grid md:gap-5 md:grid-cols-2 md:items-stretch 2xl:grid-cols-3"
        variants={containerVariants}
      >
        {certificationsData.map((cert, index) => (
          <motion.li key={index} variants={itemVariants}>
            <CertificationItem item={cert} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
