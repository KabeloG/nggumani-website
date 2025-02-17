import React from "react";

type ButtonProps = {
  text: string;
  scdn?: boolean;
  click?: () => void;
  inActive?: boolean;
};

function EarButton({
  text,
  scdn = false,
  click,
  inActive = false,
}: ButtonProps) {
  return (
    <button
      onClick={click}
      disabled={inActive}
      className={`flex items-center justify-center bg-primary text-white w-full uppercase text-[12px] font-semibold
       tracking-[2px] leading-[1.6em] py-[14px] px-[30px] hover:bg-[#ffdf51] rounded-[5px] cursor-pointer 
       text-nowrap hover:text-secondary transition-colors ease-in-out duration-500 ${
         scdn &&
         "bg-white !text-secondary border border-[#DAD9D6] hover:bg-primary hover:!text-white"
       }`}
    >
      {text}
    </button>
  );
}

export default EarButton;
