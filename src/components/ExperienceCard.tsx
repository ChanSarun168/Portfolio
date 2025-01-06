import React from 'react'
import Image from 'next/image';

interface expProp{
    company:string;
    thumbnail:string;
    timeline:string;
    description:string;
}

const ExperienceCard:React.FC<expProp> = ({company , thumbnail , timeline , description}) => {
  return (
    <div>
      <div className="w-full xl:h-[200px] h-[300px] xl:flex items-center px-3 gap-x-5 rounded-md border-[1.5px] relative mb-5">
            <Image
              src={thumbnail}
              alt={company}
              width={80}
              height={80}
              className="xl:w-[180px] rounded-full"
            />
            <div className="h-full py-5 flex-1">
              <h1 className="font-black xl:text-4xl text-xl mb-5">{company}</h1>
              <h1 className="font-bold xl:text-xl text-xs mb-5">{timeline}</h1>
              <h1 className="font-bold xl:text-xl text-xs">{description}</h1>
            </div>
    </div>
    </div>
  )
}

export default ExperienceCard
