"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

interface ITypeWriter{
  text : string[];
  classname ?: string; 
}

const TextAnimation:React.FC<ITypeWriter> = ({text, classname}) => {
  const handleType = (count: number) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div>
        <span className={`${classname}`}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={text}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
    </div>
  )
}

export default TextAnimation
