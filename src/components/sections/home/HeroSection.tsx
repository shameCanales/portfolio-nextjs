import Image from "next/image";
import DownLoadResumeButton from "@/components/DownloadResumeButton";
import SeeMyWorkButton from "@/components/SeeMyWorkButton";
import { Inter } from "next/font/google";
import HeroSocialsItem from "@/components/ui/HeroSocialsItem";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

interface SocialIconLinks {
  filename: string;
  alt: string;
  href: string;
}

const socialsIcon: SocialIconLinks[] = [
  {
    filename: "linkedin.png",
    alt: "Linkedin Icon social",
    href: "#",
  },
  {
    filename: "github.png",
    alt: "Github Icon social",
    href: "#",
  },
  {
    filename: "email.png",
    alt: "Email Icon social",
    href: "#",
  },
  {
    filename: "facebook.png",
    alt: "Facebook Icon social",
    href: "#",
  },
  {
    filename: "phone-call.png",
    alt: "Phone Icon social",
    href: "#09813030091",
  },
];

export default function HeroSection() {
  return (
    <div>
      <div className="mt-15 md:mt-14">
        <Image
          className="mx-auto rounded-full sm:w-[207px]"
          src="/profile.png"
          alt="Profile picture"
          width="120"
          height="120"
        />
      </div>
      <div className="mt-10 md:mt-14 text-center">
        <h1
          className={`text-3xl sm:text-4xl w-[245px] sm:w-[550px] mx-auto font-extrabold ${inter.className}`}
        >
          Mark Aron Shame Canales
        </h1>
        <p
          className={`text-sm sm:text-base mt-3 sm:mt-2 font-semibold text-[var(--color-text-secondary)] ${inter.className}`}
        >
          Aspiring Frontend Engineer
        </p>

        <p
          className={`text-[var(--color-text-secondary)] text-xs font-medium mt-3 sm:mt-5 mx-auto max-w-[425px] ${inter.className}`}
        >
          I build accessible, pixel-perfect digital experience for the web,
          Specializing in Frontend Development with NextJS.
        </p>

        <div className="mt-5 sm:mt-10 md:mt-6 grid grid-cols-2 gap-3 sm:w-[276px] mx-auto">
          <DownLoadResumeButton />
          <SeeMyWorkButton />
        </div>

        <div>
          <ul className="flex gap-2 md:gap-3 justify-center mt-5">
            {socialsIcon.map((soc) => (
              <HeroSocialsItem key={soc.filename} item={soc}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
