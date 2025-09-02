import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      <div>
        <h1>Mark Aron Shame Canales</h1>
        <p>Aspiring Frontend Engineer</p>

        <p>
          I build accessible, pixel-perfect digital experience for the web,
          Specializing in Frontend Development with NextJS.
        </p>

        <div>
          <button>Resume</button>
          <button>
            <a href="">See my work</a>
          </button>
        </div>

        <div>
          <ul>
            <li>
              <a href="">
                <Image
                  src="/dark-mode/head-socials/linkedin.png"
                  alt="Linkedin icon"
                  width="50"
                  height="50"
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src="/dark-mode/head-socials/github.png"
                  alt="github icon"
                  width="50"
                  height="50"
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src="/dark-mode/head-socials/email.png"
                  alt="email icon"
                  width="50"
                  height="50"
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src="/dark-mode/head-socials/facebook.png"
                  alt="facebook icon"
                  width="50"
                  height="50"
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src="/dark-mode/head-socials/mobile.png"
                  alt="email contact icon"
                  width="50"
                  height="50"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Image
          src="/profile.png"
          alt="Profile picture"
          width="50"
          height="50"
        />
      </div>
    </div>
  );
}
