import React from "react";
import ScrollButton from "./ScrollButton";

function Hero() {
  return (
    <section
      className="flex flex-col justify-start
  gap-10 border border-[#DAD9DC]"
    >
      <div id="hero" className="w-full lg:min-h-[500px]">
        <div
          className="bg-[#f0f2f480] border border-white rounded-[5px] p-[30px] 
        m-5 backdrop-blur-[10px] max-lg:text-center lg:my-20 lg:max-w-[790px]"
        >
          <div>
            <h1 className="font-sora font-light text-[38px] leading-[1.1em] tracking-[-3px] md:text-[58px]">
              Your Hearing, Your Future – Listen Clearly
            </h1>

            <h3 className="mt-4 text-lg md:text-[19px] md:mb-6 lg:text-xl">
              Expert ear doctor providing advanced hearing solutions, hearing
              aids, and comprehensive hearing tests across Limpopo for the whole
              family
            </h3>
          </div>

          <div className="flex flex-col items-center space-y-3 mt-3 lg:flex-row lg:space-y-0 lg:space-x-3">
            <ScrollButton
              text="NG Gumani Ear Clinic Services"
              targetId="services"
            />

            <ScrollButton
              text="Contact Our Trusted Ear Doctor"
              targetId="appointment"
              scdn
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
