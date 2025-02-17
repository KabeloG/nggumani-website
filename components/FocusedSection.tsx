import React from "react";
import { LuStethoscope, LuSpeech } from "react-icons/lu";
import { GiHospitalCross } from "react-icons/gi";
import ScrollButton from "./ScrollButton";
import Image from "next/image";

function FocusedSection() {
  return (
    <>
      <section className="flex flex-col bg-[#C8DBE9] lg:flex-row">
        <div
          className="px-5 py-16 order-1 flex-1 flex flex-col justify-center lg:order-2
        lg:px-16"
        >
          <div className="bg-[#ffdf51] py-1 px-3 rounded-md w-fit">
            <p
              className="text-[#444444] text-[10px] font-semibold tracking-[2px] 
            leading-[1.6em] uppercase md:text-[11px] lg:text-[13px]"
            >
              Dedicated to your hearing health
            </p>
          </div>

          <h1 className="mt-10 font-sora font-light text-[32px] leading-[1.15em] tracking-[-2px] md:text-[48px] lg:text-[54px]">
            Setting the Standard for Expert Hearing Care and Speech Therapy in
            Limpopo
          </h1>

          <p className="text-[16px] leading-[1.6em] font-light my-10 md:text-[17px] lg:text-[18px]">
            At NG Gumani Ear Clinic, we are committed to redefining audiology
            and speech therapy, serving patients across South Africa and mainly
            Limpopo including towns such as Polokwane, Tzaneen, Thohoyandou and
            Mokopane with expert ear doctors, state-of-the-art technology and
            compassionate care. Our team of professionals offers personalized
            solutions for hearing health and communication needs, ensuring the
            highest standard of service for every patient.
          </p>

          <div className="flex flex-col space-y-8 mb-10 md:flex-row md:space-x-10 md:space-y-0">
            <div className="flex items-center space-x-5">
              <LuStethoscope className="text-[#004975] h-14 w-14 md:h-20 md:w-20" />

              <div className="space-y-1">
                <h3 className="text-[21px] font-normal leading-[1.45em] lg:text-[24px]">
                  Experienced Audiologist
                </h3>
                <p className="text-[14px] font-light leading-[1.6em] md:text-[15px] lg:text-[16px]">
                  Experts in hearing health and hearing aid technology
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <LuSpeech className="text-[#004975] h-14 w-14 md:h-20 md:w-20" />

              <div className="space-y-1">
                <h3 className="text-[21px] font-normal leading-[1.45em] lg:text-[24px]">
                  Certified Speech Pathologist
                </h3>
                <p className="text-[14px] font-light leading-[1.6em] md:text-[15px] lg:text-[16px]">
                  Helping individuals overcome speech and communication
                  challenges
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <GiHospitalCross className="text-[#004975] h-14 w-14 md:h-20 md:w-20" />

              <div className="space-y-1">
                <h3 className="text-[21px] font-normal leading-[1.45em] lg:text-[24px]">
                  Comprehensive Care
                </h3>
                <p className="text-[14px] font-light leading-[1.6em] md:text-[15px] lg:text-[16px]">
                  From diagnostics to long-term hearing and speech
                  rehabilitation
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <p className="font-light">
              Let us help you hear and speak with confidence
            </p>
          </div>

          <div className="sm:hidden">
            <ScrollButton
              text="Call Our Leading Ear Doctor"
              targetId="appointment"
            />
          </div>

          <div className="max-sm:hidden">
            <ScrollButton
              text="Consult with Limpopo’s Leading Ear Doctor"
              targetId="appointment"
            />
          </div>
        </div>

        <div className="hidden lg:inline-flex lg:relative lg:order-1 lg:w-[814px] lg:h-[1000px]">
          <Image
            src="/images/doctor-patient.jpg"
            alt="Patient consulting with an ear doctor"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <div className="relative w-full h-screen lg:hidden">
        <Image
          src="/images/doctor-patient.jpg"
          alt="Patient consulting with an ear doctor"
          fill
          className="object-cover"
        />
      </div>
    </>
  );
}

export default FocusedSection;
