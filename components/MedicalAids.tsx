"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-infinite-logo-slider";

function MedicalAids() {
  const aids = [
    {
      id: 1,
      image: "/images/bonitas.svg",
      alt: "aid-logo",
    },
    {
      id: 2,
      image: "/images/discovery.svg",
      alt: "aid-logo",
    },
    {
      id: 3,
      image: "/images/medihelp.svg",
      alt: "aid-logo",
    },
    {
      id: 4,
      image: "/images/momentum.svg",
      alt: "aid-logo",
    },
    {
      id: 5,
      image: "/images/medshield.svg",
      alt: "aid-logo",
    },
    {
      id: 6,
      image: "/images/gems.png",
      alt: "aid-logo",
    },
    {
      id: 7,
      image: "/images/keyhealth.svg",
      alt: "aid-logo",
    },
    {
      id: 8,
      image: "/images/bestmed.svg",
      alt: "aid-logo",
    },
    {
      id: 9,
      image: "/images/prof.svg",
      alt: "aid-logo",
    },
  ];

  return (
    <div>
      <h2
        className="text-[#95949C] font-medium text-base leading-[1.55em] 
      md:text-[17px] lg:text-[18px] mb-2"
      >
        We accept most major medical aids:
      </h2>

      <Slider duration={20}>
        {aids.map(({ id, image, alt }) => (
          <Slider.Slide key={id}>
            <Image src={image} alt={alt} width={150} height={150} />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
}

export default MedicalAids;
