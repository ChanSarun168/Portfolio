import React from 'react'

interface IContainer{
    classname?: string;
    children : React.ReactNode;
}

const Container:React.FC<IContainer> = ({classname,children}) => {
  return (
    <div className={`w-full px-[140px] ${classname}`}>
      {children}
    </div>
  )
}

export default Container

