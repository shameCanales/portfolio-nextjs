import MainHeading from "../../ui/MainHeading";
import MainParagraph from "../../ui/MainParagraph";

export default function Introduction() {
  return (
    <div>
      <div className="text mt-16 sm:mt-7 md:mt-8 lg:mt-12 2xl:mt-20">
        <MainHeading>Hi! I&apos;m Shame.</MainHeading>
        <MainParagraph>
          I&apos;m a fresh IT graduate and self-taught developer passionate about
          turning ideas into interactive, user-friendly web experiences. With
          certifications in React, JavaScript, HTML, CSS, and UI/UX design, I&apos;ve
          built a strong foundation for creating clean, component-driven
          interfaces that perform beautifully across devices. Currently, I&apos;m
          focused on mastering frontend development with React, Next.js,
          Tailwind CSS, Redux Toolkit, and TanStack Query, while also exploring
          backend technologies to become a well-rounded developer.
        </MainParagraph>

        <MainParagraph>
          I thrive at the intersection of design and development—crafting sleek,
          minimalist UIs that balance creativity and functionality. From leading
          the development of a Web-Based Water Billing Management System as a
          capstone project to building hands-on personal projects, I enjoy
          solving real-world problems, writing clean reusable code, and
          continuously sharpening my skills. Driven by curiosity and
          consistency, I aim to contribute, grow, and create meaningful digital
          solutions one project at a time.
        </MainParagraph>
      </div>
    </div>
  );
}
