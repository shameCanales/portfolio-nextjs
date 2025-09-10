"use client";

import { motion } from "framer-motion";
import Subheading from "../../ui/Subheading";
import FeatureProjectsCarousel from "../../FeatureProjectsCarousel";
import FeaturedProjectsFixed from "./FeaturedProjectsFixed";

export default function FeaturedProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // animates once when 20% is visible
      className="mt-15 sm:mt-17 md:mt-32 xl:mt-40 mx-[-20px] sm:mx-[-32px] md:mx-[-48px]"
    >
      <Subheading>Recent Projects</Subheading>
      <FeatureProjectsCarousel />
      <FeaturedProjectsFixed />
    </motion.div>
  );
}
