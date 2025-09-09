import MarqueeRow from "../../MarqueRow";

const items1 = [
  {
    name: "ReactJS",
    iconsrc: "/logos/reactjs.png",
  },
  {
    name: "Vite",
    iconsrc: "/logos/vite.png",
  },
  {
    name: "Css3",
    iconsrc: "/logos/css3.png",
  },
  {
    name: "Html5",
    iconsrc: "/logos/html5.png",
  },
  {
    name: "Javascript",
    iconsrc: "/logos/javascript.png",
  },
];
const items2 = [
  {
    name: "VSCode",
    iconsrc: "/logos/vscode.png",
  },
  {
    name: "TailwindCSS",
    iconsrc: "/logos/tailwindcss.png",
  },
  {
    name: "Git",
    iconsrc: "/logos/git.png",
  },
  {
    name: "TypeScript",
    iconsrc: "/logos/typescriptLogo.png",
  },
  {
    name: "Redux Toolkit",
    iconsrc: "/logos/reduxtoolkit.png",
  },
];
const items3 = [
  {
    name: "MongoDB",
    iconsrc: "/logos/monggodb.png",
  },
  {
    name: "NextJS",
    iconsrc: "/logos/nextjs.png",
  },
  {
    name: "GitHub",
    iconsrc: "/logos/github.png",
  },
  {
    name: "NodeJS",
    iconsrc: "/logos/nodejs.png",
  },
];

export default function TechMarue() {
  return (
    <div className="flex flex-col gap-4 md:gap-8 lg:gap-10 xl:gap-12 bg-[var(--color-card)] mx-[-20px] sm:mx-[-32px] md:mx-[-48px] lg:mx-[-72px] xl:mx-[-120px] 2xl:mx-0 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 3xl:py-15 mt-16 sm:mt-12 md:mt-14 lg:mt-18 xl:mt-22 3xl:mt-28 2xl:rounded-2xl">
      <MarqueeRow direction="left" speed={20} items={items1} />
      <MarqueeRow direction="right" speed={20} items={items2} />
      <MarqueeRow direction="left" speed={20} items={items3} />
    </div>
  );
}
