import React from 'react'
import Image from 'next/image'
const Experience = () => {

  return (
    <div className='mb-5'>
      <div className="w-full xl:flex items-center px-3 gap-x-5 rounded-md border-[1.5px] relative mb-5 ">
                  {/* <Image
                    src="/moc.jpg"
                    alt="MoC"
                    width={80}
                    height={80}
                  
                  /> */}
                  <img src="moc.jpg" alt="" className="xl:w-[180px] rounded-full w-[80px]"/>
                  <div className="h-full py-5 flex-1">
                    <h1 className="font-black xl:text-4xl text-xl mb-5">Intern at Ministry of Commerce</h1>
                    <h1 className="font-bold xl:text-xl text-xs mb-5">August - December 2024</h1>
                      <ul className="xl:text-xl text-xs">
                        <li>- Assisted in organizing various meetings and events to ensure smooth coordination.</li>
                        <li>- Contributed to the preparation of the Digital Trade Forum website.</li>
                        <li>- Played a key role in organizing the 1st Digital Trade Forum and Online Expo, successfully held on December 13, 2024.</li>
                      </ul>
                  </div>
          </div>
    </div>
  )
}

export default Experience
