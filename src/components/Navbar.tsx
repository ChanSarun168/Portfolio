"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { useScroll } from "@/contexts/scrollContext";
import Button from "./Button";

const Navbar = () => {
  const { scrollToSection } = useScroll();
  return (
    <div>
      <Container classname="flex justify-between xl:h-20 h-14 bg-[#fbfcf8] font-bold shadow-md items-center fixed z-10">
        {/* <Image
          src={"/logo.png"}
          alt={"logo"}
          width={20}
          height={200}
          className="w-[60px]"
        ></Image> */}
        <img src="/logo.png" alt="" className="w-[30px] xl:w-[60px]"/>
        <div className="w-[50%]">
          <ul className="hidden justify-between items-center xl:flex">
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("aboutMeRef")}
            >
              About Me
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("skillRef")}
            >
              Skill
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("studyRef")}
            >
              Study
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("expRef")}
            >
              Experience
            </li>
            <li
              className="bg-violet-300 py-2 px-3 rounded-full cursor-pointer"
              onClick={() => scrollToSection("contactUsRef")}
            >
              Contact Me
            </li>
          </ul>
        </div>
        <div className="xl:hidden">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
