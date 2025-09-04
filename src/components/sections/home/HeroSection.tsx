import Image from "next/image";
import DownLoadResumeButton from "@/components/DownloadResumeButton";
import SeeMyWorkButton from "@/components/SeeMyWorkButton";
import { Inter } from "next/font/google";

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
    filename: "mobile.png",
    alt: "Phone Icon social",
    href: "#09813030091",
  },
];

export default function HeroSection() {
  return (
    <div>
      <div className="mt-10">
        <Image
          className="mx-auto rounded-full"
          src="/profile.png"
          alt="Profile picture"
          width="120"
          height="120"
        />
      </div>
      <div className="mt-10 text-center">
        <h1
          className={`text-3xl w-[245px] mx-auto font-extrabold ${inter.className}`}
        >
          Mark Aron Shame Canales
        </h1>
        <p
          className={`text-[var(--color-text-secondary)] text-sm mt-3 font-semibold ${inter.className}`}
        >
          Aspiring Frontend Engineer
        </p>

        <p
          className={`text-[var(--color-text-secondary)] text-xs font-medium mt-3 ${inter.className}`}
        >
          I build accessible, pixel-perfect digital experience for the web,
          Specializing in Frontend Development with NextJS.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <DownLoadResumeButton />
          <SeeMyWorkButton />
        </div>

        <div>
          <ul className="flex gap-2 justify-center mt-5">
            {socialsIcon.map((soc) => (
              <li key={soc.filename}>
                <a href={soc.href}>
                  <Image
                    src={`/dark-mode/head-socials/${soc.filename}`}
                    alt={soc.alt}
                    width="26"
                    height="26"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
