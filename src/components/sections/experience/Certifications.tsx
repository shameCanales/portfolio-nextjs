"use client";

import { motion } from "framer-motion";
import MainHeading from "../../ui/MainHeading";
import MainParagraph from "../../ui/MainParagraph";
import CertificationItem from "../../CertificationItem";
import { certificationsData } from "@/lib/data";

export default function Certification() {
  // Motion variants for the container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // stagger the children animation
      },
    },
  };

  // Motion variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="mt-30 sm:mt-25 lg:mt-28 xl:mt-32 3xl:mt-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // animate when 20% visible
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <MainHeading>Certifications</MainHeading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <MainParagraph>
          Pursued self-directed learning beyond academic requirements to deepen
          my knowledge in Web Development, demonstrating eagerness to master
          relevant technologies and stay industry-ready.
        </MainParagraph>
      </motion.div>

      <motion.ul
        className="mt-10 xl:mt-20 md:grid md:gap-5 md:grid-cols-2 2xl:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
