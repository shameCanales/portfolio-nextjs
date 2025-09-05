export default function IntroParagraph({ children }: { children: string }) {
  return (
    <p className="font-medium text-center text-xs md:text-sm sm:mx-auto leading-5 mt-4 text-[var(--color-text-secondary)]">
      {children}
    </p>
  );
}
