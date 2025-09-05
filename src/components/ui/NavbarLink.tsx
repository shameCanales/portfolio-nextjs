import Link from "next/link";

interface LinkProps {
  isActive: boolean;
  href: string;
  label: string;
}

export default function NavbarLink({ isActive, href, label }: LinkProps) {
  return (
    <li
      className={`px-3 rounded-md text-sm lg:text-base ${
        isActive
          ? "font-bold text-[var(--color-text)] bg-[var(--color-bg)]"
          : "text-[var(--color-text-secondary)]"
      }`}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
}
