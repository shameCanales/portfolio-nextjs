"use client";

import { motion, Variants } from "framer-motion";
import GoalCard from "../../GoalCard";
import AboutTitles from "@/components/ui/AboutTitle";
import { careerGoals } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger goal card animations
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CareerGoals() {
  return (
    <motion.div
      className="mt-15 sm:mt-18 md:mt-24 3xl:mt-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }} // trigger only when fully visible
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AboutTitles>Career Goals</AboutTitles>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 items-stretch sm:grid-cols-2 2xl:grid-cols-4 md:gap-4 mt-4 sm:mt-6 md:mt-8 2xl:mt-12"
        variants={containerVariants}
      >
        {careerGoals.map((goal) => (
          <motion.div
            key={goal.title}
            variants={itemVariants}
            viewport={{ once: true, amount: 1 }} // each card animates when fully visible
       
          >
            <GoalCard title={goal.title} description={goal.desc} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
