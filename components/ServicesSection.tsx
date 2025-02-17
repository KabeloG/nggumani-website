import Image from "next/image";
import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

function ServicesSection() {
  const serviceImages = [
    {
      id: 1,
      service: "Hearing Assessments",
      imageURL: "/images/exam.jpg",
      altText: "An image representing hearing assessments",
      description: "Comprehensive tests to evaluate your hearing capabilities.",
    },
    {
      id: 2,
      service: "Hearing Aids",
      imageURL: "/images/hearing-aid.jpg",
      altText: "Custom-fitted hearing aids from your local Limpopo ear doctor.",
      description:
        "Explore our selection of hearing aids tailored to your needs.",
    },
    {
      id: 3,
      service: "Hearing Loss Management",
      imageURL: "/images/hearing-loss.jpg",
      altText: "Hearing Loss Management at Limpopo's leading ear clinic",
      description: "Effective solutions to manage and improve hearing loss.",
    },
    {
      id: 4,
      service: "Aural Rehab",
      imageURL: "/images/aural.jpg",
      altText: "Cochlear implant device",
      description: "Advanced cochlear implants for severe hearing loss.",
    },
    {
      id: 5,
      service: "Pediatric Audiology",
      imageURL: "/images/pedriatic.jpg",
      altText: "A child undergoing an audiology test at NG Gumani Ear Clinic",
      description: "Specialized hearing care for children of all ages.",
    },
    {
      id: 6,
      service: "Tinnitus Management",
      imageURL: "/images/tinnitus.jpg",
      altText: "Effective tinnitus treatment by Limpopo's leading ear doctor",
      description: "Support and therapy for managing tinnitus effectively.",
    },
    {
      id: 7,
      service: "Balance and Vestibular Testing",
      imageURL: "/images/vertigo.jpg",
      altText: "A person during balance testing",
      description:
        "Tests to evaluate balance and diagnose vestibular disorders.",
    },
    {
      id: 8,
      service: "Speech Disorders Treatment",
      imageURL: "/images/speech.jpg",
      altText: "Limpopo’s best ear doctor treating speech disorders",
      description:
        "Personalized treatment plans for speech and communication issues.",
    },
    {
      id: 9,
      service: "Ear Pathology Management",
      imageURL: "/images/pathology.jpg",
      altText: "Ear doctor helping a patient with hearing aids in Limpopo.",
      description:
        "Personalized treatment plans for speech and communication issues.",
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col pb-10 lg:flex-row lg:space-x-72 lg:pt-40 lg:mx-36"
    >
      {/* Left Side (Large Screen) */}
      <div className="px-5 pt-24 lg:w-2/5 lg:sticky lg:top-0 lg:pl-10 lg:pt-0 lg:h-full">
        <div className="bg-[#ffdf51] py-1 px-3 rounded-md w-fit">
          <p
            className="text-[#444444] text-[10px] font-semibold tracking-[2px] 
      leading-[1.6em] uppercase md:text-[11px] lg:text-[13px]"
          >
            Services
          </p>
        </div>

        <h1 className="mt-10 font-sora font-light text-[32px] leading-[1.15em] tracking-[-2px] md:text-[48px] lg:text-[54px]">
          Listen to Life with Clarity
        </h1>

        <p className="text-[16px] leading-[1.6em] font-light mt-10 mb-0 md:text-[17px] lg:text-[18px]">
          Your hearing is your connection to the world—conversations, laughter,
          music, and the moments that matter. At NG Gumani Ear Clinic, we
          specialize in cutting-edge audiology solutions designed to help you
          hear with confidence. Whether you need a hearing check-up or advanced
          hearing aid technology, Limpopo's trusted ear doctor is here to guide
          you every step of the way.
        </p>

        <div className="mt-8 text-[16px] leading-[1.6em] md:text-[17px] lg:text-[18px]">
          <h2 className="mb-2 font-bold">Our Services</h2>

          <ul className="list-disc px-5 space-y-5">
            <li>
              <h3 className="font-semibold mb-2">
                Comprehensive Hearing Assessments
              </h3>
              <p>
                Struggling to hear conversations? Missing out on sounds you once
                loved? Our expert audiologists use state-of-the-art diagnostic
                tools to assess your hearing with precision. We’ll help you
                understand your hearing health and recommend the best path
                forward.
              </p>
            </li>

            <li>
              <h3 className="font-semibold mb-2">Advanced Hearing Aids</h3>
              <p>
                Today’s hearing aids are more than just amplifiers—they’re
                smart, sleek, and tailored to your lifestyle. From nearly
                invisible in-ear devices to powerful, high-tech solutions, we’ll
                help you find the perfect fit for crystal-clear sound.
              </p>
            </li>

            <li>
              <h3 className="font-semibold mb-2">
                Personalised Care & Support
              </h3>
              <p>
                Hearing care isn’t one-size-fits-all. Our team takes the time to
                understand your unique needs, offering customized solutions and
                ongoing support to ensure you get the best possible results.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-[16px] leading-[1.6em] md:text-[17px] lg:text-[18px]">
          <h2 className="mb-2 font-bold">Why Choose Us?</h2>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <CheckBadgeIcon className="h-8 w-8 text-green-700" />
              Cutting-edge technology for superior sound quality
            </li>

            <li className="flex items-center gap-2">
              <CheckBadgeIcon className="h-8 w-8 text-green-700" />
              Comfortable, discreet, and easy-to-use hearing aids
            </li>

            <li className="flex items-center gap-2">
              <CheckBadgeIcon className="h-8 w-8 text-green-700" />
              Friendly, expert audiologist who truly cares
            </li>

            <li className="flex items-center gap-2">
              <CheckBadgeIcon className="h-8 w-8 text-green-700" />
              Ongoing support, adjustments, and hearing aid maintenance
            </li>
          </ul>

          <p className="mt-8">
            Your world should be full of sound. Let’s make sure you hear every
            moment.
          </p>
        </div>
      </div>

      {/* Right Side (Large Screen) */}
      <div className="flex-1 space-y-4 scrollbar-hide lg:overflow-y-scroll max-lg:px-5 max-lg:mt-10">
        {serviceImages.map(({ id, imageURL, service, altText }) => (
          <div key={id} className="relative">
            <Image
              src={imageURL}
              alt={altText}
              width={900}
              height={400}
              className="object-contain bg-center"
            />

            <div className="absolute top-8 left-6 w-fit bg-black bg-opacity-50 p-2">
              <h1
                className="z-10 font-sora text-wrap text-[22px] leading-[1.25em] tracking-[-1px] text-gray-200 md:text-[26px] 
      lg:text-[30px]"
              >
                {service}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
