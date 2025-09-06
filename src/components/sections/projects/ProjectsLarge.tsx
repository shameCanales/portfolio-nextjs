"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Poppins, Outfit } from "next/font/google";
import TechItemProject from "@/components/ui/TechItemProject";

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
    title: "Fakestore App",
    description:
      "A modern e-commerce platform built with React that simulates real-world shopping experiences using the FakeStore API. Designed with performance, scalability, and user experience in mind, it showcases advanced state management, routing, and UI techniques.",
    features: [
      "Implemented dynamic product browsing with search, filtering, and category-based navigation.",
      "Developed Role-based authentication with protected routes for admin and customer.",
      "Enhanced product display using an interactive image carousel and pagination.",
      "Improved user engagement with responsive UI, toast notifications, and smooth navigation.",
    ],
    techstack: [
      { name: "React 1", src: "/logos/reactjs.png" },
      { name: "React 2", src: "/logos/reactjs.png" },
      { name: "React 3", src: "/logos/reactjs.png" },
      { name: "React 4", src: "/logos/reactjs.png" },
      { name: "React 5", src: "/logos/reactjs.png" },
      { name: "React 6", src: "/logos/reactjs.png" },
    ],
  },
  {
    id: 2,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore React App 2",
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
    id: 3,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore App 3",
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
    id: 4,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore App 4",
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
  {
    id: 5,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore App",
    description:
      "A modern e-commerce platform built with React that simulates real-world shopping experiences using the FakeStore API. Designed with performance, scalability, and user experience in mind, it showcases advanced state management, routing, and UI techniques.",
    features: [
      "Implemented dynamic product browsing with search, filtering, and category-based navigation.",
      "Developed Role-based authentication with protected routes for admin and customer.",
      "Enhanced product display using an interactive image carousel and pagination.",
      "Improved user engagement with responsive UI, toast notifications, and smooth navigation.",
    ],
    techstack: [
      { name: "React 1", src: "/logos/reactjs.png" },
      { name: "React 2", src: "/logos/reactjs.png" },
      { name: "React 3", src: "/logos/reactjs.png" },
      { name: "React 4", src: "/logos/reactjs.png" },
      { name: "React 5", src: "/logos/reactjs.png" },
      { name: "React 6", src: "/logos/reactjs.png" },
    ],
  },
];

export default function FeatureProjectsCarousel() {
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
      { threshold: 1 }
    );

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
    <div className="hidden lg:block xl:mt-25">
      <div className="grid grid-cols-2 w-full mt-12 xlmt:mt20 gap-12  px-6">
        {/* Cards list */}
        <div className="flex flex-col gap-15 xl:gap-25 w-full pb-40">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              data-index={index}
              className={`w-full lg:w-[350px] xl:w-[484px] aspect-square rounded-2xl overflow-hidden mx-auto transition-shadow duration-300
                ${
                  index === current
                    ? "shadow-[0_0_25px_rgba(59,130,246,0.7)] border-2 border-blue-500"
                    : "shadow-lg bg-gray-800 dark:bg-gray-700"
                }`}
            >
              <Image
                src={project.src}
                alt={project.title}
                width={420}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Info panel */}
        <div className="w-full sticky top-24 self-start">
          <h2
            className={`text-xl xl:text-2xl font-bold text-[var(--color-text)] ${poppins.className}`}
          >
            {activeProj.title}
          </h2>
          <p
            className={`mt-2 text-sm leading-normal text-[var(--color-text-secondary)] ${outfit.className}`}
          >
            {activeProj.description}
          </p>

          <ul className="mt-3 space-y-3">
            {activeProj.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <Image
                  className="mt-0.5"
                  src="/checklist.png"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className={`text-sm leading-normal ${outfit.className}`}>
                  {feat}
                </p>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-3 mt-6">
            {activeProj.techstack.map((tech) => (
              <TechItemProject key={tech.name} tech={tech} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
