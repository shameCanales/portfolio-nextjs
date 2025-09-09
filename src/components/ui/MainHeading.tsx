import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function MainHeading({ children }: { children: string }) {
  return (
    <h1
      className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl text-center mx-auto font-black  ${poppins.className}`}
    >
      {children}
    </h1>
  );
}
