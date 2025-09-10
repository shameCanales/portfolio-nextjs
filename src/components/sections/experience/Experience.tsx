"use client";

import MainHeading from "../../ui/MainHeading";
import ExperienceItem from "../../ExperienceItem";
import SectionSubheading from "../../ui/SectionSubheading";
import { experiences } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-15 sm:mt-10 lg:mt-18"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <MainHeading>Experience</MainHeading>
      </motion.div>

      {/* Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SectionSubheading>
          That exposed me to the IT industry
        </SectionSubheading>
      </motion.div>

      {/* Timeline Items */}
      <ul className="mt-18 sm:mt-12 md:mt-14 2xl:mt-18">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.date}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            viewport={{ once: true }}
          >
            <ExperienceItem
              when={exp.date}
              as={exp.role}
              address={exp.address}
              where={exp.where}
              what={exp.description}
            />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
