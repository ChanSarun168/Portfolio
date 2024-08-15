import React, { ReactNode } from "react";

interface ButtonProp {
  children: ReactNode;
  classname?: string;
  onclick?: (e: any) => void;
}

const Button: React.FC<ButtonProp> = ({ children, classname, onclick }) => {
  return (
    <div>
      <button className={`${classname}`} onClick={onclick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
