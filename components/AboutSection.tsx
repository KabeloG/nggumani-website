import React from "react";
import ScrollButton from "./ScrollButton";
import MainBlocks from "./MainBlocks";
import { FaEarListen } from "react-icons/fa6";
import {
  MdOutlineLocalHospital,
  MdOutlineSpatialAudioOff,
} from "react-icons/md";
import { PiHeartbeatFill } from "react-icons/pi";

function AboutSection() {
  const blocks = [
    {
      id: 1,
      Icon: FaEarListen,
      heading: "State-of-the-Art Hearing and Speech Care",
      paragraph:
        "At NG Gumani Speech & Hearing Clinic, we specialize in advanced hearing and speech therapy solutions. Our expert team provides comprehensive hearing assessments, hearing aid fittings, and speech therapy tailored to your unique needs.",
      buttonText: "NG Gumani Ear Clinic",
      urlLink: "/",
    },
    {
      id: 2,
      Icon: MdOutlineLocalHospital,
      heading: "Personalised & Compassionate Care",
      paragraph:
        "We prioritize patient-centered care, ensuring every individual receives the attention and support they need. Whether it's hearing loss management or speech therapy, we are committed to enhancing your quality of life.",
      buttonText: "About Us",
      urlLink: "/#about",
    },
    {
      id: 3,
      Icon: MdOutlineSpatialAudioOff,
      heading: "Cutting-Edge Audiology Technology",
      paragraph:
        "Our clinic is equipped with the latest diagnostic tools and hearing aid technology to deliver precise evaluations and customized treatment plans for all ages.",
      buttonText: "Our Services",
      urlLink: "/#services",
    },
    {
      id: 4,
      Icon: PiHeartbeatFill,
      heading: "Emergency Hearing & Speech Services",
      paragraph:
        "Experiencing sudden hearing loss or speech difficulties? Our ear doctors and specialists are available to provide urgent care, helping you restore communication and hearing as quickly as possible.",
      buttonText: "Book an Appointment",
      urlLink: "/#appointment",
    },
  ];

  return (
    <section id="about">
      <div className="my-16">
        <div className="flex flex-col items-center justify-center py-10 space-y-7">
          <div className="bg-[#ffdf51] py-1 px-3 rounded-md">
            <p
              className="text-[#444444] text-[10px] font-semibold tracking-[2px] 
            leading-[1.6em] uppercase md:text-[11px] lg:text-[13px]"
            >
              Why Consult With NG Gumani Ear Clinic?
            </p>
          </div>

          <div className="text-center">
            <h1
              className="font-sora font-light text-[32px] leading-[1.15em] tracking-[-2px]
            md:text-[48px] md:px-10 lg:text-[54px]"
            >
              NG Gumani Ear Clinic – Trusted Ear Doctor in Limpopo
            </h1>

            <p className="mt-6 px-10 w-fit text-wrap md:text-xl lg:mx-60 xl:mx-96">
              At NG Gumani Ear Clinic, our experienced ear doctor and speech
              therapist is dedicated to supporting your ear health and
              communication needs. With over 30 years of expertise in audiology
              and speech therapy, we are committed to enhancing the lives of our
              patients across Limpopo through high-quality, personalized hearing
              care and solutions. Whether you're seeking hearing tests, hearing
              aids, or expert advice, we offer comprehensive care tailored to
              your needs.
            </p>
          </div>

          <ScrollButton
            text="More about NG Gumani Ear Clinic"
            targetId="services"
          />
        </div>
      </div>

      <div className="flex flex-col bg-[#F6F4F0] md:grid md:grid-cols-2 lg:grid-cols-4">
        {blocks.map(({ id, Icon, heading, paragraph, buttonText, urlLink }) => (
          <MainBlocks
            key={id}
            Icon={Icon}
            heading={heading}
            paragraph={paragraph}
            buttonText={buttonText}
            urlLink={urlLink}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
