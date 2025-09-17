"use client";

import { useState, useRef, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import FeaturedProjectItem from "./FeauredProjectItem";
import { featuredProjects } from "@/lib/data";

export default function FeatureProjectsCarousel() {
  const [current, setCurrent] = useState<number>(0);
  const [scaleThres, setScaleThres] = useState<number>(0.7);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (index: number) => {
    setCurrent(index);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 100; // minimum drag distance to switch card
    if (info.offset.x < -threshold && current < featuredProjects.length - 1) {
      setCurrent(current + 1);
    } else if (info.offset.x > threshold && current > 0) {
      setCurrent(current - 1);
    }
  };

  const [cardOffset, setCardOffset] = useState(230);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth < 640) {
        setCardOffset(230); // mobile
        setCurrent(1);
      } else if (window.innerWidth < 768) {
        setCardOffset(300); //sm
        setCurrent(1);
      } else if (window.innerWidth < 1024) {
        setCardOffset(300);
        setCurrent(1);
      } else if (window.innerWidth < 1280) {
        setCardOffset(350);
        setCurrent(1);
      } else if (window.innerWidth < 1536) {
        setScaleThres(0.9);
        setCardOffset(380);
        setCurrent(1);
      }
    };

    updateOffset(); // set on mount
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex 2xl:hidden items-center justify-center w-full h-165 lg:h-170 relative overflow-hidden z-1 lg:mt-3"
    >
      {featuredProjects.map((project, index) => {
        const isCenter = index === current;

        // Horizontal offset
        const offset = (index - current) * cardOffset;

        return (
          <motion.div
            key={project.id}
            animate={{ x: offset, scale: isCenter ? 1 : scaleThres }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 0.8,
            }}
            className={`
               flex items-center justify-center h-auto
               shadow-lg cursor-pointer
            `}
            style={{ zIndex: isCenter ? 10 : 5 }}
            onClick={() => handleCardClick(index)}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
          >
            <FeaturedProjectItem project={project} />
          </motion.div>
        );
      })}
    </div>
  );
}
