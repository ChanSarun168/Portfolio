import React from 'react'

interface IContainer{
    classname?: string;
    children : React.ReactNode;
}

const Container:React.FC<IContainer> = ({classname,children}) => {
  return (
    <div className={`w-full xl:px-[140px]  px-4 ${classname}`}>
      {children}
    </div>
  )
}

export default Container

