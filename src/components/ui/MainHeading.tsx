import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function MainHeading({ children }: { children: string }) {
  return (
    <h1
      className={`text-3xl sm:text-4xl text-center w-[245px] mx-auto font-extrabold  ${inter.className}`}
    >
      {children}
    </h1>
  );
}
