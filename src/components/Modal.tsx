"use client";
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';

const Modal = ({ children , classname , image }:{children : ReactNode , classname?:string , image : string}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Trigger button to open the modal */}
      <div onClick={openModal} className={`${classname}`}>
        {children}
      </div>

      {/* Modal structure */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute w-full h-full bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="relative z-60 rounded shadow-lg">
            <Image src={`${image}`} alt={`${image}`} width={1000} height={900}></Image>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
