import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  const today = new Date();

  return (
    <footer className="border-t border-[#DAD9DC] py-14 lg:pt-2 lg:pb-10">
      <div className="lg:flex lg:items-center lg:justify-between lg:mx-10">
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={400}
              height={400}
              alt="ng gumani ear doctor"
            />
          </Link>
        </div>

        <div className="flex flex-col mt-14 space-y-14 lg:grid lg:grid-cols-3 lg:space-y-0 lg:space-x-16 lg:pr-28">
          {/* Grid Col 1 */}
          <div className="text-center md:text-start">
            <h2 className="text-lg md:text-center md:text-[21px] lg:text-2xl">
              Links
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex flex-col space-y-4 text-center">
                <Link href="/">
                  <p className="text-base font-medium hover:text-primary transition-colors duration-300 ease-in-out">
                    Home
                  </p>
                </Link>

                <Link href="/#about">
                  <p className="text-base font-medium hover:text-primary transition-colors duration-300 ease-in-out">
                    About
                  </p>
                </Link>

                <Link href="/#services">
                  <p className="text-base font-medium hover:text-primary transition-colors duration-300 ease-in-out">
                    Services
                  </p>
                </Link>

                <Link href="/#appointment">
                  <p className="text-base font-medium hover:text-primary transition-colors duration-300 ease-in-out">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Grid Col 2 */}
          <div className="text-center">
            <h2 className="text-lg md:text-[21px] lg:text-2xl">Clinic Info</h2>

            <div className="mt-8">
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="text-base font-medium">Address:</span>
                  <span className="text-base font-medium">
                    593 P.West, Thohoyandou, Limpopo
                  </span>
                </li>

                <li className="flex flex-col">
                  <span className="text-base font-medium">Phone:</span>
                  <a href="tel:+18001231324">
                    <span className="text-base font-medium">
                      +27-82-360-8581
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Grid Col 3 */}
          <div className="px-5 md:px-0">
            <h2 className="text-lg text-center md:text-[21px] lg:text-2xl">
              Hours of Operation
            </h2>

            <div className="mt-8 md:mx-5">
              <ul className="flex flex-col space-y-4">
                <li className="flex justify-between md:space-x-6 md:items-center">
                  <p className="text-base font-medium">Monday:</p>
                  <p className="text-sm font-extralight text-gray-400 text-nowrap">
                    9:00 AM - 5:00 PM
                  </p>
                </li>

                <li className="flex justify-between md:space-x-6 md:items-center">
                  <p className="text-base font-medium">Tuesday:</p>
                  <p className="text-sm font-extralight text-gray-400 text-nowrap">
                    9:00 AM - 5:00 PM
                  </p>
                </li>

                <li className="flex justify-between md:space-x-6 md:items-center">
                  <p className="text-base font-medium">Wednesday:</p>
                  <p className="text-sm font-extralight text-gray-400 text-nowrap">
                    9:00 AM - 5:00 PM
                  </p>
                </li>

                <li className="flex justify-between md:space-x-6 md:items-center">
                  <p className="text-base font-medium">Thursday:</p>
                  <p className="text-sm font-extralight text-gray-400 text-nowrap">
                    9:00 AM - 5:00 PM
                  </p>
                </li>

                <li className="flex justify-between md:space-x-6 md:items-center">
                  <p className="text-base font-medium">Friday & Weekends:</p>
                  <p className="text-sm font-extralight text-gray-400">
                    Closed
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="flex justify-center mt-10">
        <p className="text-center font-light">
          NG Gumani Ear Clinic Copyright © {today.getFullYear()} - All Rights
          Reserved
        </p>
      </section>
    </footer>
  );
}

export default Footer;
