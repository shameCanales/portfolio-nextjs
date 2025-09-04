export default function SectionSubheading({ children }: { children: string }) {
  return (
    <p className="text-center text-sm mt-2 font-semibold text-[var(--color-text-secondary)]">
      {children}
    </p>
  );
}
