import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

interface SocialLinksProps {
  link: string;
  filename: string;
}

export default function FooterSocialLinks({
  link,
  filename,
}: SocialLinksProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <li className="">
      <Link href={link}>
        <Image
          src={`/${theme}-mode/footer-socials/${filename}`}
          alt="Social Link"
          width="24"
          height="24"
        />
      </Link>
    </li>
  );
}
