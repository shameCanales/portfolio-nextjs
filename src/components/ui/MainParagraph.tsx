export default function MainParagraph({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="font-medium text-center text-xs md:text-sm sm:w-[497px] md:w-[566px] sm:mx-auto leading-5 xl:leading-normal  mt-4 xl:mt-7 text-[var(--color-text-secondary)]">
      {children}
    </p>
  );
}
