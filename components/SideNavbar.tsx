import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { BiArrowToTop, BiArrowToBottom } from 'react-icons/bi'
import { AiOutlineInfoCircle, AiOutlineSchedule } from 'react-icons/ai'
import { TbPodium } from 'react-icons/tb'
import { MdOutlineContactSupport } from 'react-icons/md'
import {BsPen, BsPencilSquare} from 'react-icons/bs'

const SideNavbar = () => {

  const [showSideNavTitle1, setShowSideNavTitle1] = useState(true);
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowSideNav(true);
      } else {
        setShowSideNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  })

  return (
    <>
      <div  style={{ display: showSideNav ? 'block' : 'none' }} className="fixed z-50 bottom-5 lg:top-[50%] lg:-translate-y-[50%] right-5 transform transition-transform duration-500 ease-in-out scale-90">
        <div className="flex lg:flex-col gap-1 scale-75 lg:scale-100">
          <a href={'#'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
            <BiArrowToTop size={'1.8rem'} />
          </a>
          <a href={'#about'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
            <AiOutlineInfoCircle size={'1.8rem'} />
          </a>
          <a href={'#timeline'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
            <AiOutlineSchedule size={'1.8rem'} />
          </a>
          <a href={'#speakers'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
            <TbPodium size={'1.8rem'} />
          </a>
          <a href={'#registration'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
            <BsPencilSquare size={'1.8rem'} />
          </a>
          <a href={'#contact'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
            <MdOutlineContactSupport size={'1.8rem'} />
          </a>
          {/* <a href={''} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white">
            <div style={showSideNavTitle ? {display: 'none'} : {display: 'block'}}  className='hidden transition ease-in-out duration-500'>Top</div>
            <BiArrowToBottom size={'1.8rem'} />
          </a> */}
        </div>
      </div>
    </>
  )
}

export default SideNavbar