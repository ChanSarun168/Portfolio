import React from "react";
import Image from "next/image";

const Skill = () => {
  const allSkills = [
    {
      thumbnail: "/c++logo.png",
      title: "C/C++",
      rate: 80,
    },
    {
      thumbnail: "/csharplogo.png",
      title: "C#",
      rate: 60,
    },
    {
      thumbnail: "/html.png",
      title: "HTML",
      rate: 90,
    },
    {
      thumbnail: "/css.png",
      title: "CSS",
      rate: 80,
    },
    {
      thumbnail: "/tailwindcss.jpg",
      title: "Tailwind CSS",
      rate: 80,
    },
    {
      thumbnail: "/javascript.png",
      title: "Javascript",
      rate: 75,
    },
    {
      thumbnail: "/typescript.png",
      title: "Typescript",
      rate: 75,
    },
    {
      thumbnail: "/nextjs.png",
      title: "Next Js",
      rate: 80,
    },
    {
      thumbnail: "/expressjs.jpg",
      title: "Express Js",
      rate: 80,
    },
    {
      thumbnail: "/laravel.png",
      title: "PHP & Laravel",
      rate: 70,
    },
    {
      thumbnail: "/mongodb.jpg",
      title: "MongoDB",
      rate: 70,
    },
    {
      thumbnail: "/sqlserver.jpg",
      title: "SQLServer",
      rate: 70,
    },
  ];

  return (
    <div>
      {allSkills.map((item, index) => {
        return (
          <div key={index} className="mb-5">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-5">
                <Image
                  src={`${item.thumbnail}`}
                  alt={`${item.title}`}
                  width={50}
                  height={50}
                />
                <div className="font-bold">{item.title}</div>
              </div>
              <div>{item.rate}%</div>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div
                style={{ width: `${item.rate}%` }}
                className="bg-violet-300 h-full rounded-full"
              ></div>
            </div>
          </div>
        );
      })}
      <h1 className="text-2xl font-[1000]">Testing : </h1>
      <div>
        <p className="mt-5">
          <span className="font-extrabold">+ Unit Test :</span> Unit testing
          involves testing individual components or modules in isolation. I use
          Jest to write and execute unit tests that ensure each function and
          method works as intended.
        </p>
        <p className="mt-5">
          <span className="font-extrabold">+ Integration Test :</span>{" "}
          Integration testing focuses on the interactions between different
          components or modules. I use Jest and Supertest to test the
          integration points within applications, ensuring seamless interactions
          between different layers.
        </p>
        <p className="mt-5">
          <span className="font-extrabold">+ API Test or end-to-end Test:</span>{" "}
          API testing involves testing the APIs directly and as part of
          integration testing. With Supertest, I test RESTful APIs to validate
          endpoints, verify responses, and ensure the API meets its
          specifications.
        </p>
        <div className="flex gap-x-5">
          <p className="mt-5 font-extrabold">Technologies used :</p>
          <Image src={"/jest.jpg"} alt={"jest"} width={70} height={70} />
          <Image src={"/supertest.png"} alt={"supertest"} width={100} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
