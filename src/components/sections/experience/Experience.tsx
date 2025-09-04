import MainHeading from "../../ui/MainHeading";
import ExperienceItem from "../../ExperienceItem";
import SectionSubheading from "../../ui/SectionSubheading";

export const experiences = [
  {
    date: "FEB - JUNE 2025",
    role: "IT Intern",
    address: "Quezon City, Metro Manila",
    where: "ComWorks Inc.",
    description: [
      "proposed a redesign and modernization of company website as my practice project, applying web development knowledge and showcasing initiative beyond assigned tasks.",
      "Collaborated with the IT team in software updates, OS reinstallation, and preventive maintenance, reinforcing system security and operational continuity.",
      "Streamlined documentation and asset management through Draw.io and inventory systems, improving tracking efficiency and maintaining organized IT resources.",
      "Provided remote IT support using RRM tools and AnyDesk, resolving connectivity and software issues for on-site and remote employees, enhancing productivity company-wide.",
      "Delivered CCTV configuration and POS system support, strengthening cross-department IT collaboration and showcasing It&apos;s role in enabling business functions.",
      "Supported network configuration and connectivity by setting up MikroTik routers, access points, and virtual machines (ProxMox), ensuring smooth operations across multiple departments.",
      "Assisted in hardware diagnostics, repairs, and upgrades (SSD installations, printer troubleshooting, LAN cable assembly), improving system performance and reducing downtime for employees.",
    ],
  },
  {
    date: "JAN - DEC 2024",
    role: "Water Biling Management System ",
    address: "San Fernando, Romblon",
    where: "Capstone Project",
    description: [
      "Role: Leader, System Analyst, Head Researcher, Developer, UI/UX Designer",
      "Architected and developed a full-stack, web-based billing system from scratch to replace manual processes, automating consumer management, bill generation, and payment tracking. ",
      "Directed a 4-member team through all Agile phases (requirements analysis, UI/UX design, development, testing, deployment, and Review), ensuring project milestones were met on time.",
      "Achieved perfect 100/100 Lighthouse performance & best practices score and 4.55/5 in ISO 25010 evaluation, validating system efficiency, usability, and reliability.",
      "Designed and Implemented intuitive UI/UX workflows, improving system accessibility for administrator.",
      "Delivered a scalable and maintainable solution that streamlined operations, reduced errors, and enhanced customer satisfaction for municipal billing services.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="mt-15">
      <MainHeading>Experience</MainHeading>
      <SectionSubheading>That exposed me to the IT industry</SectionSubheading>

      <ul className="mt-18">
        {experiences.map((exp) => (
          <li key={exp.date}>
            <ExperienceItem
              when={exp.date}
              as={exp.role}
              address={exp.address}
              where={exp.where}
              what={exp.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
