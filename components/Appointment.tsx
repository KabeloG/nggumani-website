import React from "react";
import AppointmentForm from "./AppointmentForm";
import MedicalAids from "./MedicalAids";
import Image from "next/image";

function Appointment() {
  return (
    <section id="appointment">
      <div className="relative mx-[30px] my-[10px] lg:flex lg:justify-center lg:py-10">
        {/* Left (Large Screen) */}
        <div className="bg-[#F6F4F0] pt-[30px] pb-[40px] px-[20px] md:p-[46.2px] lg:w-[60%]">
          <div className="text-center space-y-5">
            <h1
              className="font-sora font-light text-[26px] leading-[1.2em] tracking-[-1px]
      md:text-[36px] md:tracking-[-2px] lg:text-[42px]"
            >
              Schedule an appointment
            </h1>

            <h3 className="text-[16px] md:text-[17px] lg:text-[18px] text-[#444444] font-extralight">
              It just takes a few seconds to book your spot with Limpopo's best
              ear doctor
            </h3>
          </div>

          {/* Appointment Form */}
          <div>
            <AppointmentForm />
          </div>

          <div className="mt-10 lg:hidden">
            <Image
              src="/images/drnggumani.jpg"
              alt="dr ng gumani"
              width={800}
              height={400}
            />

            <div className="flex-1 bg-[#F6F4F0] mt-6 space-y-2 z-10 text-center">
              <h4 className="text-[20px] text-secondary leading-[1.45em]">
                Dr. NG Gumani
              </h4>
              <p className="text-[15px] text-[#95949C] leading-[1.6em]">
                Audiologist & Speech Pathologist - B. Logopaedics, dip.sp & h
                comwrk (Wits University)
              </p>
            </div>
          </div>
        </div>

        {/* Right (Large Screen) */}
        <div className="hidden bg-[#F6F4F0] z-0 lg:w-[40%] lg:inline-flex lg:bg-appointment-form lg:bg-cover lg:bg-center lg:bg-no-repeat lg:items-end xl:w-[24%]">
          <div className="border-l flex-1 bg-[#F6F4F0] py-10 px-3 z-10">
            <h4 className="text-[19px] text-secondary leading-[1.45em] lg:text-[24px]">
              Dr. NG Gumani
            </h4>
            <p className="text-[14px] text-[#95949C] leading-[1.6em] lg:text-[18px]">
              Audiologist & Speech Pathologist - B. Logopaedics, dip.sp & h
              comwrk (Wits University)
            </p>
          </div>
        </div>
      </div>

      <div className="m-[30px]">
        <MedicalAids />
      </div>
    </section>
  );
}

export default Appointment;
