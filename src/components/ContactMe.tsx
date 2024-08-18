import React from "react";
import Image from "next/image";

const ContactMe = () => {
  return (
    <div>
      <div className="font-black text-3xl flex items-center gap-5">
        <a href="https://www.facebook.com/chan.sarun.7798/" target="_blank">
          <Image src={"/fb.png"} alt={"facebook"} width={30} height={30} className="cursor-pointers xl:w-[50px]"></Image>
        </a>
        <h1 className="text-xl xl:text-2xl">Facebook</h1>
      </div>
      <div className="font-black text-3xl flex items-center gap-5 mt-5">
        <a href="https://t.me/SARUNCHAN" target="_blank">
          <Image src={"/telegram.jpg"} alt={"telegram"} width={30} height={30} className="cursor-pointers xl:w-[50px]"></Image>
        </a>
        <h1 className="text-xl xl:text-2xl">Telegram</h1>
      </div>
      <div className="font-black text-3xl flex items-center gap-5 mt-5">
        <a href="mailto: chansarun0@gmail.com" target="_blank">
          <Image src={"/mail.png"} alt={"Email"} width={30} height={30} className="cursor-pointers xl:w-[50px]"></Image>
        </a>
        <h1 className="text-xl xl:text-2xl">Email</h1>
      </div>
      <div className="font-black text-3xl flex items-center gap-5 mt-5">
          <Image src={"/phone.png"} alt={"PhoneNumber"} width={30} height={30} className="cursor-pointers xl:w-[50px]"></Image>
        <h1 className="text-xl xl:text-2xl">097 841 9624</h1>
      </div>
    </div>
  );
};

export default ContactMe;
