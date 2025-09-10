"use client";

import { motion } from "framer-motion";
import Subheading from "@/components/ui/Subheading";
import MainParagraph from "@/components/ui/MainParagraph";
import GithubStats from "@/components/GitHubStats";

export default function GithubSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-23 sm:mt-26 xl:mt-40 2xl:mt-50 3xl:mt-45"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Subheading>GitHub Contribution Activity</Subheading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <MainParagraph>
          Learned and started using git and GitHub as my version control system
          for the projects that i am building and it is really a game changer
          for every developer like me. I’m consistently updating my repositories
          as you can see in my contribution calendar and
          <a
            href="https://github.com/shameCanales"
            className="underline underline-offset-4"
            target="_blank"
          >
            {" GitHub Account"}
          </a>
          .
        </MainParagraph>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <GithubStats />
      </motion.div>
    </motion.div>
  );
}
