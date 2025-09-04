import { Outfit } from "next/font/google";

interface ExperienceItemProps {
  when: string;
  as: string;
  address: string;
  where: string;
  what: string[];
}

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function ExperienceItem({
  when,
  as,
  address,
  where,
  what,
}: ExperienceItemProps) {
  return (
    <>
      <div className="mt-7 md:mt-9 lg:mt-4 lg:grid lg:grid-cols-2">
        <div className="lg:px-6 lg:mt-3">
          <p
            className={`font-medium text-xs uppercase text-[var(--color-text-secondary)] ${outfit.className}`}
          >
            {when}
          </p>
          <p
            className={`font-black text-base mt-1 text-[var(--color-text)] ${outfit.className}`}
          >
            {where}
          </p>
          <p
            className={`text-sm mt-1 text-[var(--color-text-secondary)] ${outfit.className}`}
          >
            {address}
          </p>
        </div>
        <div className="pl-4 mt-6  relative">
          <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#5527FB] to-[#42097E]"></div>
          <div>
            <p className={`text-xl font-black ${outfit.className}`}>{as}</p>

            <ul>
              {what.map((item) => (
                <p
                  key={item}
                  className={`mt-2 text-xs leading-4.5 sm:leading-5 md:leading-6 tracking-tight  2xl:max-w-[600px] text-[var(--color-text-secondary)] ${outfit.className}`}
                >
                  {item}
                </p>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
