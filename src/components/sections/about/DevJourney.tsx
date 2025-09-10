"use client";

import { motion, Variants } from "framer-motion";
import AboutTitles from "@/components/ui/AboutTitle";
import DevJourItem from "@/components/DevJourItem";
import { devJourney } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger animation for each DevJourItem
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DevJourney() {
  return (
    <motion.div
      className="mt-15 sm:mt-18 md:mt-24 3xl:mt-45 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }} // trigger only when fully visible
    >
      {/* Section Titles */}
      <motion.div
        className="sm:hidden"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AboutTitles>Dev Journey</AboutTitles>
      </motion.div>

      <motion.div
        className="hidden sm:block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AboutTitles>Developer Journey</AboutTitles>
      </motion.div>

      {/* Dev Journey Items */}
      <motion.div
        className="mt-7 sm:mt-10 2xl:mt-15 2xl:max-w-[1120px] 2xl:mx-auto"
        variants={containerVariants}
      >
        {devJourney.map((journ) => (
          <motion.div
            key={journ.title}
            variants={itemVariants}
            viewport={{ once: true, amount: 1 }} // animate when fully visible
          >
            <DevJourItem title={journ.title} desc={journ.desc} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
