"use client";

import { motion, Variants } from "framer-motion";
import { education } from "@/lib/data";
import EducationCard from "@/components/EducationCard";
import AboutTitles from "@/components/ui/AboutTitle";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger each card
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Education() {
  return (
    <motion.div
      className="mt-15 sm:mt-20 md:mt-24 xl:mt-30 3xl:mt-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }} // only when fully visible
    >
      {/* Section Titles */}
      <motion.div
        className="sm:hidden"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AboutTitles>Education</AboutTitles>
      </motion.div>

      <motion.div
        className="hidden sm:block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AboutTitles>Educational Background</AboutTitles>
      </motion.div>

      {/* Education Cards Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 sm:gap-3 lg:gap-4 2xl:gap-6 mt-4 sm:mt-8 2xl:mt-12 2xl:mx-auto 2xl:max-w-[1180px]"
        variants={containerVariants}
      >
        {education.map((educ) => (
          <motion.div
            key={educ.schoolYear}
            variants={itemVariants}
            viewport={{ once: true, amount: 1 }} // animate when fully visible
          >
            <EducationCard
              title={educ.title}
              year={educ.schoolYear}
              course={educ.course}
              name={educ.schoolName}
              address={educ.address}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
