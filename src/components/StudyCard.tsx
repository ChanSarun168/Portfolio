import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import Button from "./Button";

interface StudyCardProps {
  thumbnail: string;
  school: string;
  statement: string;
  timeline: string;
  certificate?: CertificateProp[];
}

interface CertificateProp {
  name: string;
  certi: string;
}

const StudyCard: React.FC<StudyCardProps> = ({
  thumbnail,
  school,
  statement,
  timeline,
  certificate,
}) => {
  return (
    <div className="w-full h-[200px] flex items-center px-3 gap-x-5 rounded-md border-[1.5px] relative mb-5">
      <Image
        src={thumbnail}
        alt={school}
        width={180}
        height={180}
        className="rounded-full"
      />
      <div className="h-full py-5 flex-1">
        <h1 className="font-black text-4xl mb-5">{school}</h1>
        <h1 className="font-bold text-xl mb-5">{statement}</h1>
        <h1 className="font-bold text-xl">{timeline}</h1>
      </div>
      {certificate && certificate.length > 0 && (
        <div className="absolute top-0 right-0 p-4">
          <h1 className="font-bold text-xl">Certificate</h1>
        </div>
      )}
      <div className="absolute bottom-0 right-0 p-4 flex gap-x-3">
        {certificate &&
          certificate.map((item, index) => (
            <Modal key={index} image={item.certi}>
              <Button classname="bg-blue-200 p-2 text-gray-800 rounded">
                {item.name}
              </Button>
            </Modal>
          ))}
      </div>
    </div>
  );
};

export default StudyCard;
