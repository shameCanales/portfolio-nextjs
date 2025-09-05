import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function FooterTitle({ children }: { children: string }) {
  return (
    <p className={`font-bold text-[var(--color-text)] text-sm mt-11 sm:mt-4 ${poppins.className}`}>
      {children}
    </p>
  );
}
