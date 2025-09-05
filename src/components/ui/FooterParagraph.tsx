export default function FooterParagraph({ children }: { children: string }) {
  return (
    <p
      className={`md:w-[320px] text-xs mt-3 leading-4.5 text-[var(--color-text-secondary)]`}
    >
      {children}
    </p>
  );
}
