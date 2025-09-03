export default function MainParagraph({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="font-medium text-xs leading-4.5 mt-4">{children}</p>;
}
