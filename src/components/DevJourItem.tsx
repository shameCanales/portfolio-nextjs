import { Poppins, Outfit } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function DevJourItem({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div
      className={`mt-4 md:mt-6 border-[var(--color-accent)] border-l-3 lg:border-l-0 pl-4 lg:pl-0 lg:grid lg:grid-cols-2 `}
    >
      <div>
        <p
          className={`text-sm sm:text-base md:text-xl xl:text-xl lg:text-right lg:pr-5 xl:pr-8 text-[var(--colot-text)] font-bold ${poppins.className}`}
        >
          {title}
        </p>
      </div>
      <div>
        <p
          className={` text-xs sm:text-sm lg:text-base xl:text-base leading-normal mt-1.5 lg:mt-0 lg:border-l-3 lg:pl-4 xl:pl-8 text-[var(--color-text-secondary)] ${outfit.className}`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
