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
    <div className="w-full xl:h-[200px] h-[300px] xl:flex items-center px-3 gap-x-5 rounded-md border-[1.5px] relative mb-5">
      <Image
        src={thumbnail}
        alt={school}
        width={80}
        height={80}
        className="xl:w-[180px] rounded-full"
      />
      <div className="h-full py-5 flex-1">
        <h1 className="font-black xl:text-4xl text-xl mb-5">{school}</h1>
        <h1 className="font-bold xl:text-xl text-xs mb-5">{statement}</h1>
        <h1 className="font-bold xl:text-xl text-xs">{timeline}</h1>
      </div>
      {certificate && certificate.length > 0 && (
        <div className="absolute xl:top-0 xl:right-0 bottom-0 xl:p-4 py-4">
          <h1 className="font-bold text-xl">Certificate :</h1>
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
