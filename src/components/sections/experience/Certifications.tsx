import MainHeading from "../../ui/MainHeading";
import MainParagraph from "../../ui/MainParagraph";
import CertificationItem from "../../CertificationItem";

const certificationsData = [
  {
    thumbnail: "/certThumbnails/react.webp",
    title: "React - The Complete Guide 2025 (Includes Next.js, Redux)",
    description:
      "Comprehensive training on modern React development covering core concepts, hooks, state management with redux, and fullstack application development with Next.js.",
    did: [
      "Built a fullstack web app using React and Next.js",
      "Implemented Authentication and Protected Routes",
      "Managed global state with Redux Toolkit and Tanstack",
      "Designed responsive UIs with Tailwindcss",
      "Integrated REST APIs and handled async data fetching",
    ],
    learned: [
      "ReactJS",
      "TailwindCSS",
      "Redux Toolkit",
      "React Router V7",
      "Jest",
      "NextJS",
      "APIs",
      "Tanstack Query",
      "Framer Motion",
    ],
    certLink:
      "https://www.udemy.com/certificate/UC-8f474679-6550-48ba-85d6-c17204a7e028/",
  },
  {
    thumbnail: "/certThumbnails/react.webp",
    title: "React - The Complete Guide 2025 (Includes Next.js, Redux)",
    description:
      "Comprehensive training on modern React development covering core concepts, hooks, state management with redux, and fullstack application development with Next.js.",
    did: [
      "Built a fullstack web app using React and Next.js",
      "Implemented Authentication and Protected Routes",
      "Managed global state with Redux Toolkit and Tanstack",
      "Designed responsive UIs with Tailwindcss",
      "Integrated REST APIs and handled async data fetching",
    ],
    learned: [
      "ReactJS",
      "TailwindCSS",
      "Redux Toolkit",
      "React Router V7",
      "Jest",
      "NextJS",
      "APIs",
      "Tanstack Query",
      "Framer Motion",
    ],
    certLink:
      "https://www.udemy.com/certificate/UC-8f474679-6550-48ba-85d6-c17204a7e028/",
  },
  {
    thumbnail: "/certThumbnails/react.webp",
    title: "React - The Complete Guide 2025 (Includes Next.js, Redux)",
    description:
      "Comprehensive training on modern React development covering core concepts, hooks, state management with redux, and fullstack application development with Next.js.",
    did: [
      "Built a fullstack web app using React and Next.js",
      "Implemented Authentication and Protected Routes",
      "Managed global state with Redux Toolkit and Tanstack",
      "Designed responsive UIs with Tailwindcss",
      "Integrated REST APIs and handled async data fetching",
    ],
    learned: [
      "ReactJS",
      "TailwindCSS",
      "Redux Toolkit",
      "React Router V7",
      "Jest",
      "NextJS",
      "APIs",
      "Tanstack Query",
      "Framer Motion",
    ],
    certLink:
      "https://www.udemy.com/certificate/UC-8f474679-6550-48ba-85d6-c17204a7e028/",
  },
  {
    thumbnail: "/certThumbnails/react.webp",
    title: "React - The Complete Guide 2025 (Includes Next.js, Redux)",
    description:
      "Comprehensive training on modern React development covering core concepts, hooks, state management with redux, and fullstack application development with Next.js.",
    did: [
      "Built a fullstack web app using React and Next.js",
      "Implemented Authentication and Protected Routes",
      "Managed global state with Redux Toolkit and Tanstack",
      "Designed responsive UIs with Tailwindcss",
      "Integrated REST APIs and handled async data fetching",
    ],
    learned: [
      "ReactJS",
      "TailwindCSS",
      "Redux Toolkit",
      "React Router V7",
      "Jest",
      "NextJS",
      "APIs",
      "Tanstack Query",
      "Framer Motion",
    ],
    certLink:
      "https://www.udemy.com/certificate/UC-8f474679-6550-48ba-85d6-c17204a7e028/",
  },
];

export default function Certification() {
  return (
    <div className="mt-30">
      <MainHeading>Certifications</MainHeading>
      <MainParagraph>
        Pursued self-directed learning beyond academic requirements to deepen my
        knowledge in Web Development, demonstrating eagerness to master relevant
        technologies and stay industry-ready.
      </MainParagraph>

      <ul className="mt-10">
        {certificationsData.map((cert, index) => (
          <li key={index}>
            <CertificationItem item={cert} />
          </li>
        ))}
      </ul>
    </div>
  );
}
