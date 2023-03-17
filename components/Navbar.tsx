import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white shadow-md z-50'>
      <div className='w-[90%] mx-auto py-3 md:w-[80%]'>
      <div className="flex justify-between items-center">
        <div><img className='w-16 md:w-28' src="/logo.svg" alt="AGRC2023Logo" /></div>
        <div className="hidden flex justify-between items-center gap-8 lg:flex">
          <a href='#'>Home</a>
          <a href='#about'>About AGRC</a>
          <a href='#speakers'>Speakers</a>
          <a href='#schedule'>Schedule</a>
          <a href='#contact'>Contact Us</a>
        </div>
        <div className='hidden bg-darkGreen text-white px-4 py-2 cursor-pointer rounded-lg lg:block'>Register</div>
        <div className='lg:hidden'><AiOutlineMenu size={'1.5em'} /></div>
      </div>
    </div>
    </div>
  )
}

export default Navbar