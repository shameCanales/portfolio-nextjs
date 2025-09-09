export default function SectionSubheading({ children }: { children: string }) {
  return (
    <p className="text-center text-sm md:text-xl xl:text-2xl mt-2 xl:mt-5 3xl:mt-4 font-bold text-[var(--color-text-secondary)]">
      {children}
    </p>
  );
}
