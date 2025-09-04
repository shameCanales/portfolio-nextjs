export default function FooterParagraph({ children }: { children: string }) {
  return <p className={`text-[var(--color-text-secondary)] text-xs mt-3 leading-4.5`}>{children}</p>;
}
