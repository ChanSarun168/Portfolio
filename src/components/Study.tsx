import React from "react";
import StudyCard from "./StudyCard";

const Study = () => {
  const education = [
    {
      thumbnail: "/rupp.png",
      school: "Royal University of Phnom Penh",
      statement: "Year 4 of Department Computer Science",
      timeline: "2022 - Present",
      certificate: [
        {
          name: "Foundation",
          certi: "/sabaicode.png",
        },
        {
          name: "Bachelor",
          certi: "/sabaicode.png",
        },
      ],
    },
    {
      thumbnail: "/svrhighschool.jpg",
      school: "Svay Rieng Highschool",
      statement: "BacII : Grade B",
      timeline: "2015 - 2021",
      certificate: [
        {
          name: "BacII",
          certi: "/bacII.jpg",
        },
      ],
    },
    {
      thumbnail: "/sabaicodelogo.png",
      school: "SabaiCode",
      statement: "Scholarship of Web Full-Stack Developer",
      timeline: "Term : 6 months from Dec 2023 - May 2024",
      certificate: [
        {
          name: "Sabaicode",
          certi: "/sabaicode.png",
        },
      ],
    },
  ];

  return (
    <div>
      {education.map((item, index) => (
        <StudyCard
          key={index}
          thumbnail={item.thumbnail}
          school={item.school}
          statement={item.statement}
          timeline={item.timeline}
          certificate={item.certificate}
        />
      ))}
    </div>
  );
};

export default Study;
