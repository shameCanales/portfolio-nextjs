import Link from "next/link";
import Image from "next/image";

export default function ProjectLink({
  liveLink,
  theme,
  iconFileName,
}: {
  liveLink: string;
  theme: string;
  iconFileName: string;
}) {
  return (
    <Link href={liveLink}>
      <Image
        className="sm:w-[18px] 2xl:w-[21px] 3xl:w-[27px]"
        src={`/${theme === "dark" ? "dark" : "light"}-mode/${iconFileName}`}
        alt="go to live link"
        width="12"
        height="12"
      />
    </Link>
  );
}
