import Link from "next/link";
import Image from "next/image";

export default function ProjectLinks({
  liveLink,
  githubRepoLink,
  theme,
}: {
  liveLink: string;
  githubRepoLink: string;
  theme: "light" | "dark";
}) {
  return (
    <div className="flex gap-3 3xl:gap-4">
      <Link href={liveLink}>
        <Image
          className="sm:w-[22px] 2xl:w-[24px] 3xl:w-[30px]"
          src={`/${theme === "dark" ? "dark" : "light"}-mode/external.png`}
          alt="go to live link"
          width="18"
          height="18"
        />
      </Link>
      <Link href={githubRepoLink}>
        <Image
          className="sm:w-[22px] 2xl:w-[24px] 3xl:w-[30px]"
          src={`/${theme === "dark" ? "dark" : "light"}-mode/github-logo.png`}
          alt="go to live link"
          width="18"
          height="18"
        />
      </Link>
    </div>
  );
}
