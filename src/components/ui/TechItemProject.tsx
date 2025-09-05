import { Outfit } from "next/font/google";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

const outfit = Outfit({
  weight: ["300", "400", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

interface TechProps {
  name: string;
  src: string;
}

export default function TechItemProject({ tech }: { tech: TechProps }) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <li
      key={tech.name}
      className={`flex items-center gap-2 bg-[var(--color-card)] px-2 sm:px-3 py-1 sm:py-2 rounded-sm sm:rounded-md ${
        theme === "dark" ? "border-[0.5px] border-[rgba(255,255,255,0.29)]" : ""
      }`}
    >
      <Image src={tech.src} alt={tech.name} width={14} height={14} />
      <p className={`text-[10px] sm:text-xs font-semibold ${outfit.className}`}>
        {tech.name}
      </p>
    </li>
  );
}
