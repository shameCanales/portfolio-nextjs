import Link from "next/link";
import { Inter } from "next/font/google";

interface FooterLinkProps {
  link: string;
  label: string;
}

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function FooterLink({ link, label }: FooterLinkProps) {
  return (
    <Link
      className="underline-offset-2 underline mt-4 text-[var(--color-text-secondary)]"
      href={link}
    >
      <p
        className={`underline-offset-2 underline mt-4 text-xs font-medium text-[var(--color-text-secondary)] ${inter.className}`}
      >
        {label}
      </p>
    </Link>
  );
}
