"use client"
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { useScroll } from '@/contexts/scrollContext';

const Navbar = () => {
  const { scrollToSection } = useScroll();
  return (
    <div>
        <Container classname='flex justify-between h-20 bg-[#fbfcf8] font-bold shadow-md items-center fixed z-10'>
            <Image src={'/logo.png'} alt={'logo'} width={60} height={200}>
            </Image>
            <div className='w-[50%]'>
            <ul className='flex justify-between items-center'>
                <li className='cursor-pointer' onClick={() => scrollToSection('aboutMeRef')}>About Me</li>
                <li className='cursor-pointer' onClick={() => scrollToSection('skillRef')}>Skill</li>
                <li className='cursor-pointer'>Study</li>
                <li className='cursor-pointer'>Experience</li>
                <li className='bg-violet-300 py-2 px-3 rounded-full cursor-pointer'>Contact Me</li>
            </ul>
            </div>
            
        </Container>
    </div>
  )
}

export default Navbar
