import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  heading: string;
  paragraph: string;
  buttonText: string;
  urlLink: string;
};

function MainBlocks({ Icon, heading, paragraph, buttonText, urlLink }: Props) {
  return (
    <div
      className="border-b border-white px-7 cursor-pointer hover:bg-white md:border-b md:border-r 
      transition-colors ease-out duration-300 h-full flex flex-col justify-between"
    >
      {/* Content Section */}
      <div className="flex flex-col space-y-4 py-12">
        <Icon className="h-14 w-14 text-gray-600 mb-3" />

        <h2 className="font-sora font-light text-[22px] leading-[1.25em] tracking-[-1px] md:text-[26px] lg:text-[30px]">
          {heading}
        </h2>
        <p className="text-[16px] font-light leading-[1.6em] md:text-[17px] lg:text-[18px]">
          {paragraph}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-auto pb-10">
        <Link href={urlLink}>
          <span
            className="text-[#1a1a1a] text-[11px] font-semibold leading-[1.6em] tracking-[2px] uppercase
          cursor-pointer"
          >
            {buttonText}
          </span>
        </Link>

        <Link href={urlLink}>
          <div className="border border-[#1a1a1a] rounded-lg p-1 cursor-pointer">
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainBlocks;
