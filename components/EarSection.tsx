import React from "react";
import ScrollButton from "./ScrollButton";
import Image from "next/image";

function EarSection() {
  return (
    <section className="hidden bg-[#F3F3F5] my-[30px] px-10 py-16 sm:inline-flex">
      <div className="xl:flex xl:items-center xl:space-x-56">
        {/* <!-- Left (XLarge Screen) --> */}
        <div className="xl:w-[40%] xl:ml-20">
          <div className="bg-[#ffdf51] py-1 px-3 rounded-md w-fit">
            <p
              className="text-[#444444] text-[10px] font-semibold tracking-[2px] 
            leading-[1.6em] uppercase md:text-[11px] lg:text-[13px]"
            >
              The Ear: Your Gateway to Sound
            </p>
          </div>

          <h1 className="mt-10 font-sora font-light text-[32px] leading-[1.15em] tracking-[-2px] md:text-[48px] lg:text-[54px]">
            Your ears do more than just hear—they help you connect, communicate,
            and navigate the world around you.
          </h1>

          <h3 className="text-[16px] leading-[1.6em] font-light my-8 md:text-[17px] lg:text-[20px]">
            Book your ear hearing test with Limpopo's #1 ear doctor today!
          </h3>

          <div className="w-fit">
            <ScrollButton
              text="Book Your Hearing Test"
              targetId="appointment"
            />
          </div>
        </div>

        {/* <!-- Right (XLarge Screen) --> */}
        <div className="relative w-fit h-fit max-xl:mt-8">
          <Image
            src="/images/ear.png"
            alt="ear-diagram"
            width={760}
            height={560}
            className="object-contain max-xl:-ml-5"
          />

          {/* <!-- Hotspot 1 --> */}
          <div className="absolute top-[10%] left-[13%]">
            <div className="w-4 h-4 bg-[#ffdf51] rounded-full shadow-lg animate-pulse duration-1000" />

            <p className="font-sora absolute -bottom-1 left-8 bg-white text-secondary p-1 rounded-md">
              Pinna
            </p>
          </div>

          {/* <!-- Hotspot 2 --> */}
          <div className="absolute top-[52%] left-[14%] xl:left-[17%]">
            <div className="w-4 h-4 bg-[#ffdf51] rounded-full shadow-lg animate-pulse duration-1000" />

            <p className="font-sora absolute -bottom-1 left-8 bg-white text-secondary p-1 rounded-md">
              Auditory Canal
            </p>
          </div>

          {/* <!-- Hotspot 3 --> */}
          <div className="absolute top-[44%] right-[46%] lg:right-[43%]">
            <div className="w-4 h-4 bg-[#ffdf51] rounded-full shadow-lg animate-pulse duration-1000" />

            <p className="font-sora absolute -bottom-1 left-8 bg-white text-secondary p-1 rounded-md">
              Eardrum
            </p>
          </div>

          {/* <!-- Hotspot 4 --> */}
          <div className="absolute top-[26%] right-[14%]">
            <div className="w-4 h-4 bg-[#ffdf51] rounded-full shadow-lg animate-pulse duration-1000" />

            <p className="font-sora absolute -bottom-1 left-8 bg-white text-secondary p-1 rounded-md">
              Eustachian Tube
            </p>
          </div>

          {/* <!-- Hotspot 5 --> */}
          <div className="absolute top-[42%] right-[19%]">
            <div className="w-4 h-4 bg-[#ffdf51] rounded-full shadow-lg animate-pulse duration-1000" />

            <p className="font-sora absolute -bottom-1 left-8 bg-white text-secondary p-1 rounded-md">
              Cochlea
            </p>
          </div>

          {/* <!-- Hotspot 6 --> */}
          <div className="absolute bottom-[28%] right-[22%] lg:right-[18%]">
            <div className="w-4 h-4 bg-[#ffdf51] rounded-full shadow-lg animate-pulse duration-1000" />

            <p className="font-sora absolute -bottom-1 left-8 bg-white text-secondary p-1 rounded-md">
              Auditory Nerve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EarSection;
