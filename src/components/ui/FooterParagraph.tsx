import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function FooterParagraph({ children }: { children: string }) {
  return (
    <p
      className={`md:w-[320px] lg:w-[343px]  text-xs mt-3 leading-4.5 xl:leading-normal text-[var(--color-text-secondary)] ${poppins.className}`}
    >
      {children}
    </p>
  );
}
