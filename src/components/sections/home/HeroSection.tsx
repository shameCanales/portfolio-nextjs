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
    <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:mt-15">
      <div className="mt-15 md:mt-14 lg:order-2">
        <Image
          className="mx-auto rounded-full sm:w-[207px] lg:w-[340px]"
          src="/profile.png"
          alt="Profile picture"
          width="120"
          height="120"
        />
      </div>
      <div className="mt-10 md:mt-14 text-center lg:text-left lg:order-1">
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl w-[245px] sm:w-[550px] lg:w-[400px] leading-tight mx-auto lg:mx-0 font-black ${inter.className}`}
        >
          Mark Aron Shame Canales
        </h1>
        <p
          className={`text-sm sm:text-base lg:text-lg mt-3 sm:mt-2 font-semibold text-[var(--color-text-secondary)] ${inter.className}`}
        >
          Aspiring Frontend Engineer
        </p>

        <p
          className={`text-[var(--color-text-secondary)] text-xs font-medium mt-3 sm:mt-5 lg:mt-3 mx-auto lg:mx-0 max-w-[425px] leading-4.5 ${inter.className}`}
        >
          I build accessible, pixel-perfect digital experience for the web,
          Specializing in Frontend Development with NextJS.
        </p>

        <div className="mt-5 sm:mt-10 md:mt-6 lg:mt-5 grid lg:flex grid-cols-2 gap-3 sm:w-[276px] lg:w-auto mx-auto lg:mx-0">
          <DownLoadResumeButton />
          <SeeMyWorkButton />
        </div>

        <div>
          <ul className="flex gap-2 lg:gap-4 md:gap-3 justify-center lg:justify-start mt-5 lg:mt-6">
            {socialsIcon.map((soc) => (
              <HeroSocialsItem key={soc.filename} item={soc} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
