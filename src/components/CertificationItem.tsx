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
    <div className={` p-3 sm:p-6 md:p-3 lg:p-6 xl:p-10 2xl:p-4 3xl:p-8 sm:w-[427px] md:w-auto rounded-xl sm:rounded-2xl md:rounded-xl lg:rounded-2xl mt-5 md:mt-0 sm:mx-auto md:mx-0 bg-[var(--color-card)] ${theme === 'dark'? 'border-[.5px] border-[var(--color-border)]' : ''}`}>
      <Image
        className="aspect-video w-full rounded-sm sm:rounded-xl 2xl:rounded-lg"
        src={item.thumbnail}
        alt={item.title}
        width="200"
        height="69"
      />

      <p className="mt-4 3xl:mt-5 font-bold lg:text-lg 2xl:text-sm 3xl:text-lg leading-normal text-[var(--color-text)]">{item.title}</p>

      <p className="mt-3 2xl:mt-2 3xl:mt-3 text-xs lg:text-sm 2xl:text-xs 3xl:text-sm leading-4.5 lg:leading-normal text-[var(--color-text-secondary)]">
        {item.description}
      </p>

      <ul className="mt-5 2xl:mt-3 3xl:mt-5">
        {item.did.map((didItem, index) => (
          <li key={index} className="flex items-start gap-2 mt-1.5">
            <Image
              className="lg:w-[20px] 2xl:w-[15px] 3xl:w-[17px]"
              src="/checklist.png"
              alt="check icon"
              width="17"
              height="17"
            />
            <p className="text-xs lg:text-sm  2xl:text-xs 3xl:text-sm font-normal text-[var(--color-text-secondary)]">
              {didItem}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs lg:text-sm font-medium text-[var(--color-text)]">
        What I learned
      </p>
      <ul className="flex content-start flex-wrap gap-2 justify-start mt-3">
        {item.learned.map((tech) => (
          <li key={tech}>
            <p className="text-xs py-1 lg:py-2 px-3 lg:px-4 rounded-2xl text-[#FFFCEE] bg-[var(--color-accent)]">
              {tech}
            </p>
          </li>
        ))}
      </ul>

      <Link href={item.certLink}>
        <div className="mt-7 bg-[#FFFFFF] flex items-center px-4 py-2 justify-between sm:w-[174px] md:w-[180px] rounded-sm lg:rounded-md">
          <p className="text-[#1C1C1C] text-sm 2xl:text-xs 3xl:text-sm">View Certificate</p>
          <Image
            className="w-[25px] 2xl:w-[18px]"
            src="/light-mode/right-arrow.png"
            alt="View Certificate"
            height="250"
            width="250"
          />
        </div>
      </Link>
    </div>
  );
}
