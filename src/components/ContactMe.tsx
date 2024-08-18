import React from "react";
import Image from "next/image";

const ContactMe = () => {
  return (
    <div>
      <div className="font-black text-3xl flex items-center gap-5">
        <a href="https://www.facebook.com/chan.sarun.7798/" target="_blank">
          <Image src={"/fb.png"} alt={"facebook"} width={50} height={50} className="cursor-pointers"></Image>
        </a>
        <h1>Facebook</h1>
      </div>
      <div className="font-black text-3xl flex items-center gap-5 mt-5">
        <a href="https://t.me/SARUNCHAN" target="_blank">
          <Image src={"/telegram.jpg"} alt={"telegram"} width={50} height={50} className="cursor-pointers"></Image>
        </a>
        <h1>Telegram</h1>
      </div>
      <div className="font-black text-3xl flex items-center gap-5 mt-5">
        <a href="mailto: chansarun0@gmail.com" target="_blank">
          <Image src={"/mail.png"} alt={"Email"} width={50} height={50} className="cursor-pointers"></Image>
        </a>
        <h1>Email</h1>
      </div>
      <div className="font-black text-3xl flex items-center gap-5 mt-5">
          <Image src={"/phone.png"} alt={"PhoneNumber"} width={50} height={50} className="cursor-pointers"></Image>
        <h1>097 841 9624</h1>
      </div>
    </div>
  );
};

export default ContactMe;
