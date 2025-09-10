"use client";

import { motion } from "framer-motion";
import MainParagraph from "@/components/ui/MainParagraph";
import TechFilterComponent from "@/components/TechFilterComponent";
import Subheading from "@/components/ui/Subheading";

export default function TechnicalSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
      className="mt-18 2xl:mt-30 3xl:mt-45"
    >
      <Subheading>Technical Skills</Subheading>
      <MainParagraph>
        {`These are the technologies that i'm currently using on software
        engineering and I'm eager to add more technologies to my skillset that
        will make me a better software engineer and would potentially make me
        stand out to the rest.`}
      </MainParagraph>
      <TechFilterComponent />
    </motion.div>
  );
}
