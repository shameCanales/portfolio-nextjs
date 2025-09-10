import MainHeading from "../../ui/MainHeading";
import MainParagraph from "../../ui/MainParagraph";
import CertificationItem from "../../CertificationItem";
import { certificationsData } from "@/lib/data";


export default function Certification() {
  return (
    <div className="mt-30 sm:mt-25 lg:mt-28 xl:mt-32 3xl:mt-50">
      <MainHeading>Certifications</MainHeading>
      <MainParagraph>
        Pursued self-directed learning beyond academic requirements to deepen my
        knowledge in Web Development, demonstrating eagerness to master relevant
        technologies and stay industry-ready.
      </MainParagraph>

      <ul className="mt-10 xl:mt-20 md:grid md:gap-5 md:grid-cols-2 2xl:grid-cols-3">
        {certificationsData.map((cert, index) => (
          <li key={index}>
            <CertificationItem item={cert} />
          </li>
        ))}
      </ul>
    </div>
  );
}
