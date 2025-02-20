"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import ScrollButton from "./ScrollButton";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import EarButton from "./EarButton";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
      {/* Top */}
      <div className="flex items-center justify-center py-3 bg-[#C8DBE9]">
        <p
          className="text-secondary text-[13px] font-medium text-center 
        md:text-sm lg:text-[15px]"
        >
          Your Hearing, Your Future – Listen Clearly
        </p>
      </div>

      {/* Bottom */}
      <div className="flex flex-1 items-center justify-between p-5 gap-8 lg:px-10 lg:py-2">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={300}
              height={300}
              alt="ng gumani ear doctor"
            />
          </Link>
        </div>

        <div className="hidden lg:inline-flex">
          <nav>
            <ul className="flex justify-center space-x-8 text-base font-medium">
              <Link href="/">
                <li className="text-gray-600 cursor-pointer transition-colors ease-in-out duration-200 hover:text-secondary">
                  Home
                </li>
              </Link>

              <Link href="#about">
                <li className="text-gray-500 cursor-pointer transition-colors ease-in-out duration-200 hover:text-secondary">
                  About NG Gumani Ear Clinic
                </li>
              </Link>

              <Link href="#services">
                <li className="text-gray-500 cursor-pointer transition-colors ease-in-out duration-200 hover:text-secondary">
                  Services We Offer
                </li>
              </Link>

              <Link href="#appointment">
                <li className="text-gray-500 cursor-pointer transition-colors ease-in-out duration-200 hover:text-secondary">
                  Contact
                </li>
              </Link>
            </ul>
          </nav>
        </div>

        <div className="lg:hidden">
          <Sheet open={mobileMenu} onOpenChange={setMobileMenu}>
            <SheetTrigger>
              <div
                className="flex items-center justify-center h-12 w-12 bg-primary rounded-[10%]
              cursor-pointer"
              >
                {mobileMenu ? (
                  <XMarkIcon className="text-white h-6 w-6" />
                ) : (
                  <Bars3Icon className="text-white h-6 w-6" />
                )}
              </div>
            </SheetTrigger>

            <SheetContent side="top" className="bg-white">
              <SheetHeader className="hidden">
                <SheetTitle>Are you absolutely sure?</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col justify-between h-screen px-2">
                <div
                  className="flex flex-col mt-20 space-y-8 text-[22px]
              text-secondary font-sora font-light leading-[1.25em] tracking-[-1px]"
                >
                  <Link
                    className="hover:text-primary transition-colors duration-300 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenu(false);
                      document.querySelector("/")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    href="/"
                  >
                    Home
                  </Link>

                  <Link
                    className="hover:text-primary transition-colors duration-300 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenu(false);
                      document.querySelector("#about")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    href="#about"
                  >
                    About NG Gumani Ear Clinic
                  </Link>

                  <Link
                    className="hover:text-primary transition-colors duration-300 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenu(false);
                      document.querySelector("#services")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    href="#services"
                  >
                    Services We Offer
                  </Link>

                  <Link
                    className="hover:text-primary transition-colors duration-300 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenu(false);
                      document.querySelector("#appointment")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    href="#appointment"
                  >
                    Contact
                  </Link>
                </div>

                <div className="flex flex-col mt-auto mb-20 space-y-4">
                  <Link
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenu(false);
                      document.querySelector("#about")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    <EarButton text="About NG Gumani Ear Clinic" />
                  </Link>

                  <Link
                    href="#appointment"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenu(false);
                      document.querySelector("#appointment")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    <EarButton text="Book An Appointment" scdn />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:inline-flex">
          <ScrollButton
            text="Book an appointment"
            scdn
            targetId="appointment"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
