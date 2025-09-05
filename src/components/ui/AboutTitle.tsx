import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function AboutTitles({ children }: { children: string }) {
  return (
    <h1
      className={`text-2xl sm:text-3xl md:text-4xl text-center mx-auto font-black  ${poppins.className}`}
    >
      {children}
    </h1>
  );
}
