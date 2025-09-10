"use client";

import { motion } from "framer-motion";
import MarqueeRow from "../../MarqueRow";
import { techRow1, techRow2, techRow3 } from "@/lib/data";

export default function TechMarue() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
      className="flex flex-col gap-4 md:gap-8 lg:gap-10 xl:gap-12 bg-[var(--color-card)] mx-[-20px] sm:mx-[-32px] md:mx-[-48px] lg:mx-[-72px] xl:mx-[-120px] 2xl:mx-0 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 3xl:py-15 mt-16 sm:mt-12 md:mt-14 lg:mt-18 xl:mt-22 2xl:mt-28 2xl:rounded-2xl"
    >
      <MarqueeRow direction="left" speed={20} items={techRow1} />
      <MarqueeRow direction="right" speed={20} items={techRow2} />
      <MarqueeRow direction="left" speed={20} items={techRow3} />
    </motion.div>
  );
}
