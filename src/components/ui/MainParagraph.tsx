export default function MainParagraph({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="font-medium text-center text-xs sm:w-[497px] sm:mx-auto leading-4.5 mt-4 text-[var(--color-text-secondary)]">
      {children}
    </p>
  );
}
