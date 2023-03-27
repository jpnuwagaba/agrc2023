import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Menu from './Menu'

const Navbar = () => {

  const [menu, showMenu] = useState(true)

  return (
    <div className='fixed w-full bg-white shadow-md z-50'>
      <div className='w-[90%] mx-auto py-3 md:w-[80%]'>
        <div className="flex justify-between items-center">
          <a href='#'><img className='w-16 md:w-28' src="/logo.svg" alt="AGRC2023Logo" /></a>
          <div className="hidden flex justify-between items-center gap-8 lg:flex">
            <a className='font-bold text-gray-700 text-sm' href='#'>Home</a>
            <a className='font-bold text-gray-700 text-sm' href='#about'>About AGRC</a>
            <a className='font-bold text-gray-700 text-sm' href='#speakers'>Speakers</a>
            <a className='font-bold text-gray-700 text-sm' href='#schedule'>Schedule</a>
            <a className='font-bold text-gray-700 text-sm' href='#contact'>Contact Us</a>
          </div>
          <Link href={''} className='hidden bg-darkGreen text-white px-4 py-2 cursor-pointer rounded-lg lg:block'>Register</Link>
          <div onClick={() => showMenu(!menu)} id='menu' className='lg:hidden'>
            {menu ? <AiOutlineMenu size={'1.5em'} /> : <AiOutlineClose size={'1.5em'} />}
          </div>
        </div>
      </div>
      <div onClick={() => showMenu(true)} style={menu ? {display: 'none'} : {display: 'block'}} className="absolute shadow">
        <Menu />
      </div>
    </div>
  )
}

export default Navbar