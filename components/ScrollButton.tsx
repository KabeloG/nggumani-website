"use client";

import React from "react";

type ButtonProps = {
  text: string;
  scdn?: boolean;
  targetId: string;
};

function ScrollButton({ text, scdn, targetId }: ButtonProps) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`No element found with ID: ${targetId}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex w-fit items-center justify-center bg-primary text-white uppercase text-[9px] font-semibold
       tracking-[2px] leading-[1.6em] py-[14px] px-[30px] hover:bg-[#ffdf51] rounded-[5px] cursor-pointer 
       text-nowrap hover:text-secondary transition-colors ease-in-out duration-300 md:text-xs ${
         scdn &&
         "bg-white !text-secondary border border-[#DAD9D6] hover:bg-primary hover:!text-white"
       }`}
    >
      {text}
    </div>
  );
}

export default ScrollButton;
