import MarqueeRow from "../MarqueRow";

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
    <div className="flex flex-col gap-4 bg-[var(--color-card)] mx-[-20px] py-4 mt-16">
      <MarqueeRow direction="left" speed={20} items={items1} />
      <MarqueeRow direction="right" speed={20} items={items2} />
      <MarqueeRow direction="left" speed={20} items={items3} />
    </div>
  );
}
