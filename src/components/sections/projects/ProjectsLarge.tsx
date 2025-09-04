"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { Poppins, Outfit } from "next/font/google";

const poppins = Poppins({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  weight: ["300", "400", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

interface TechStackItem {
  name: string;
  src: string;
}

interface Project {
  id: number;
  src: string;
  title: string;
  description: string;
  features: string[];
  techstack: TechStackItem[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore React App",
    description:
      "A modern e-commerce platform built with React that simulates real-world shopping experiences using the FakeStore API. Designed with performance, scalability, and user experience in mind, it showcases advanced state management, routing, and UI techniques.",
    features: [
      "Implemented dynamic product browsing with search, filtering, and category-based navigation.",
      "Developed Role-based authentication with protected routes for admin and customer.",
      "Enhanced product display using an interactive image carousel and pagination.",
      "Improved user engagement with responsive UI, toast notifications, and smooth navigation.",
    ],
    techstack: [
      { name: "React", src: "/logos/reactjs.png" },
      { name: "TailwindCSS", src: "/logos/reactjs.png" },
      { name: "Redux Toolkit", src: "/logos/reactjs.png" },
      { name: "React Router V7", src: "/logos/reactjs.png" },
      { name: "React Fakestore API", src: "/logos/reactjs.png" },
      { name: "TypeScript", src: "/logos/reactjs.png" },
      { name: "Tanstack Query", src: "/logos/reactjs.png" },
    ],
  },
  {
    id: 2,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore App 2",
    description:
      "Another advanced project demonstrating e-commerce features with real-world best practices in React.",
    features: [
      "Product filtering and search",
      "Shopping cart with persistence",
      "Authentication and roles",
    ],
    techstack: [
      { name: "React", src: "/logos/reactjs.png" },
      { name: "React 2", src: "/logos/reactjs.png" },
      { name: "React 3", src: "/logos/reactjs.png" },
    ],
  },
  {
    id: 3,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore App 3",
    description:
      "Enhanced version with more features like image carousel, pagination, and responsive UI.",
    features: [
      "Carousel and pagination",
      "Responsive design",
      "Modern UI patterns",
    ],
    techstack: [
      { name: "React 1", src: "/logos/reactjs.png" },
      { name: "React 2", src: "/logos/reactjs.png" },
    ],
  },
];

export default function FeatureProjectsCarousel() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [current, setCurrent] = useState(0);

  // Ref for cards
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const idx = Number(visible.target.getAttribute("data-index"));
          setCurrent(idx);
        }
      },
      { threshold: 0.6 }
    );

    // Capture current refs in local variable for cleanup safety
    const currentCards = cardRefs.current;

    currentCards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const activeProj = featuredProjects[current];

  return (
    <div className="hidden lg:block">
      <div className="flex w-full mt-12 gap-12 px-6 xl:px-24">
        {/* Cards list */}
        <div className="flex flex-col gap-12 w-full xl:w-1/2 pb-40">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardRefs.current[index] = el; // Safe assignment
              }}
              data-index={index}
              className="w-full sm:w-[400px] lg:w-[480px] xl:w-[520px] aspect-square bg-gray-800 dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden mx-auto"
            >
              <Image
                src={project.src}
                alt={project.title}
                width={520}
                height={520}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Info panel */}
        <div className="w-full xl:w-1/2 sticky top-24 self-start">
          <h2
            className={`text-3xl xl:text-4xl font-extrabold text-[var(--color-text)] ${poppins.className}`}
          >
            {activeProj.title}
          </h2>
          <p
            className={`mt-4 text-base xl:text-lg text-[var(--color-text-secondary)] ${outfit.className}`}
          >
            {activeProj.description}
          </p>

          <ul className="mt-6 space-y-3">
            {activeProj.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3">
                <Image src="/checklist.png" alt="check" width={20} height={20} />
                <p className={`text-base ${outfit.className}`}>{feat}</p>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-3 mt-6">
            {activeProj.techstack.map((tech) => (
              <li
                key={tech.name}
                className={`flex items-center gap-2 bg-[var(--color-card)] px-3 py-1.5 rounded-full text-sm font-semibold ${
                  theme === "dark" ? "border border-[rgba(255,255,255,0.2)]" : ""
                }`}
              >
                <Image src={tech.src} alt={tech.name} width={16} height={16} />
                <span>{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
