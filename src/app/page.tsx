"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import TextAnimation from "@/components/TextAnimation";
import { useScroll } from "@/contexts/scrollContext";
import Skill from "@/components/Skill";
import Button from "@/components/Button";
import Study from "@/components/Study";


export default function Home() {
  const { sectionRefs } = useScroll();

  return (
    <>
      <div className="w-full flex justify-between items-center custom-clip-path bg-violet-300 absolute h-[670px] mt-20"></div>
      <Container classname="flex justify-between relative items-center h-[670px] mb-20">
        <div>
          <h1 className="font-[1000] text-5xl mb-5">Hi I'm Sarun</h1>
          <TextAnimation
            text={["WEB DEVELOPER"]}
            classname="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl font-extrabold"
          ></TextAnimation>
          <a href="Chansarun.pdf" download>
            <Button classname="py-2 px-4 text-xl font-bold bg-violet-300 rounded-full mt-5">
              Download CV
            </Button>
          </a>
        </div>
        <Image
          src={"/profile.png"}
          alt={"profile"}
          width={400}
          height={400}
        ></Image>
      </Container>
      <Container classname="pt-8">
        {/* About me */}

        <div className="w-full" ref={sectionRefs.aboutMeRef}>
          <h1 className="w-[15%] h-[60px] bg-violet-300 session-clip-path text-3xl font-bold flex items-center pl-2">
            About Me
          </h1>
          <div className="w-full h-[440px] border-t-4 border-violet-300 pt-5">
            <p className="first-line:pl-5">
              Hello! I&apos;m Chan Sarun a third-year student majoring in
              Computer Science at Royal University of Phnom Penh. I have a deep
              passion for web development with skills and interests in both
              frontend and backend technologies.
            </p>
            <p className="mt-5">
              Throughout my studies I&apos;ve built a solid foundation in HTML 
              CSS and JavaScript for frontend development as well as Node.js
              and databases for backend development. I enjoy creating dynamic
              and responsive web applications that provide excellent user
              experiences and robust functionality.
            </p>
            <p className="mt-5">
              In addition to my coursework I&apos;ve worked on several personal
              and academic projects that have allowed me to apply my skills in
              real-world scenarios. These projects have helped me develop my
              problem-solving abilities and gain practical knowledge in both
              frontend and backend development.
            </p>
            <p className="mt-5">
              I am actively seeking internship opportunities where I can
              contribute my skills and grow as a developer. I am a quick
              learner a team player and passionate about continuous learning
              and improvement.
            </p>
            <p className="mt-5">
              When I&apos;m not coding I enjoy exploring new technologies
              reading tech blogs and spending time outdoors. I&apos;m excited
              to connect with industry professionals and learn from their
              experiences.
            </p>
            <p className="mt-5">
              Feel free to reach out if you&apos;d like to connect or discuss
              potential opportunities!
            </p>
          </div>
        </div>

        {/* Skill */}

        <div className="w-full" ref={sectionRefs.skillRef}>
          <h1 className="w-[15%] h-[60px] bg-violet-300 session-clip-path text-3xl font-bold flex items-center pl-2">
            Skills
          </h1>
          <div className="w-full border-t-4 border-violet-300 pt-5">
            <Skill></Skill>
          </div>
        </div>

        {/* Study */}
        <div className="w-full" ref={sectionRefs.studyRef}>
          <h1 className="w-[15%] h-[60px] bg-violet-300 session-clip-path text-3xl font-bold flex items-center pl-2">
            Study
          </h1>
          <div className="w-full border-t-4 border-violet-300 pt-5">
            <Study></Study>
          </div>
        </div>
        

      </Container>
    </>
  );
}
