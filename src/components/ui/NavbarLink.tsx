import Link from "next/link";

interface LinkProps {
  isActive: boolean;
  href: string;
  label: string;
}

export default function NavbarLink({ isActive, href, label }: LinkProps) {
  return (
    <Link
      className={`px-3 2xl:px-5 md:py-1 2xl:py-2 rounded-md text-sm 2xl:text-base  ${
        isActive
          ? "font-bold text-[var(--color-text)] bg-[var(--color-bg)]"
          : "text-[var(--color-text-secondary)]"
      }`}
      href={href}
    >
      {label}
    </Link>
  );
}
