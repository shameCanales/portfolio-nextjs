export default function SectionSubheading({ children }: { children: string }) {
  return (
    <p className="text-center text-sm sm:text-lg mt-2 font-bold text-[var(--color-text-secondary)]">
      {children}
    </p>
  );
}
