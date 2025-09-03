import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Subheading({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className={`font-bold ${montserrat.className}`}>{children}</p>;
}
