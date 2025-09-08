export default function IntroParagraph({ children }: { children: string }) {
  return (
    <p className="font-medium text-center text-xs md:text-sm xl:text-base sm:mx-auto leading-normal mt-4 2xl:w-[850px] text-[var(--color-text-secondary)]">
      {children}
    </p>
  );
}
