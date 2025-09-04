"use client";

import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

interface CertificationItemProps {
  item: {
    thumbnail: string;
    title: string;
    description: string;
    did: string[];
    learned: string[];
    certLink: string;
  };
}

export default function CertificationItem({ item }: CertificationItemProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`bg-[var(--color-card)] p-3 rounded-xl mt-5 ${theme === 'dark'? 'border-[.5px] border-[var(--color-border)]' : ''}`}>
      <Image
        className="aspect-video w-full rounded-sm"
        src={item.thumbnail}
        alt={item.title}
        width="200"
        height="69"
      />

      <p className="mt-4 font-bold text-[var(--color-text)]">{item.title}</p>

      <p className="mt-3 text-xs leading-4.5 text-[var(--color-text-secondary)]">
        {item.description}
      </p>

      <ul className="mt-5">
        {item.did.map((didItem, index) => (
          <li key={index} className="flex items-start gap-2 mt-1.5">
            <Image
              src="/checklist.png"
              alt="check icon"
              width="17"
              height="17"
            />
            <p className="text-xs font-normal text-[var(--color-text-secondary)]">
              {didItem}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs font-medium text-[var(--color-text)]">
        What I learned
      </p>
      <ul className="flex content-start flex-wrap gap-2 justify-start mt-3">
        {item.learned.map((tech) => (
          <li key={tech}>
            <p className="text-xs py-1 px-3 rounded-2xl text-[#FFFCEE] bg-[var(--color-accent)]">
              {tech}
            </p>
          </li>
        ))}
      </ul>

      <Link href={item.certLink}>
        <div className="mt-7 bg-[#FFFFFF] flex items-center px-4 py-2 justify-between rounded-sm">
          <p className="text-[#1C1C1C] text-sm">View Certificate</p>
          <Image
            src="/light-mode/right-arrow.png"
            alt="View Certificate"
            height="25"
            width="25"
          />
        </div>
      </Link>
    </div>
  );
}
