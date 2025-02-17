import React from "react";
import { CgArrowRightR } from "react-icons/cg";

type Props = {
  text: string;
};

function MainButtons({ text }: Props) {
  return (
    <div className="">
      {text} <CgArrowRightR />
    </div>
  );
}

export default MainButtons;
