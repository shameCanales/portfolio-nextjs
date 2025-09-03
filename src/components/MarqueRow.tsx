"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"], // keep only the weights you actually use
  subsets: ["latin"],
  display: "swap",
});

interface RowItem {
  name: string;
  iconsrc: string;
}

interface MarqueeRowProps {
  direction?: "left" | "right";
  speed?: number;
  items: RowItem[];
}

export default function MarqueeRow({
  direction = "left",
  speed = 50,
  items,
}: MarqueeRowProps) {
  const animation = {
    x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
  };

  const transition = {
    repeat: Infinity,
    duration: speed,
    ease: "linear" as const,
  };

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-15"
        animate={animation}
        transition={transition}
      >
        {/* Repeat content twice for seamless marquee loop */}
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex gap-15">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Image
                  src={item.iconsrc}
                  alt={item.name}
                  width={17}
                  height={17}
                />
                <p
                  className={`${inter.className} font-medium text-xs text-[var(--color-text-secondary)]`}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
