"use client";

import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisbility = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisbility);

    return () => {
      window.removeEventListener("scroll", toggleVisbility);
    };
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <div
      className={`flex group fixed bottom-16 right-2 mr-8 h-12 w-12 p-3 bg-primary
        items-center justify-center cursor-pointer rounded-md transition-all ease-in-out 
        duration-500 hover:bg-[#ffdf51] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      onClick={scrollToTop}
    >
      <FaChevronUp className="text-[20px] text-white group-hover:text-black" />
    </div>
  );
}

export default BackToTop;
