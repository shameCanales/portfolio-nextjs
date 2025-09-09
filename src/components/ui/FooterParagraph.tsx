import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function FooterParagraph({ children }: { children: string }) {
  return (
    <p
      className={`md:w-[320px] lg:w-[343px] 2xl:w-[380px] 3xl:w-[450px] text-xs 2xl:text-sm mt-3 leading-4.5 xl:leading-normal text-[var(--color-text-secondary)] ${poppins.className}`}
    >
      {children}
    </p>
  );
}
