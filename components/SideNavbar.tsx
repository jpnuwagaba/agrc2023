import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { BiArrowToTop, BiArrowToBottom } from 'react-icons/bi'
import { AiOutlineInfoCircle, AiOutlineSchedule } from 'react-icons/ai'
import { TbPodium } from 'react-icons/tb'
import { MdOutlineContactSupport } from 'react-icons/md'
import { BsPen, BsPencilSquare } from 'react-icons/bs'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'

const SideNavbar = () => {

  const [showScrollToTop, setShowScrollToTop] = useState(true);
  const [showScrollToAbout, setShowScrolltoAbout] = useState(true);
  const [showScollToSchedule, setShowScrollToSchedule] = useState(true);
  const [showScrollToSpeakers, setShowScrollToSpeakers] = useState(true);
  const [showScrollToPayment, setShowScrollToPayment] = useState(true);
  const [showScrollToContact, setShowScrollToContact] = useState(true);
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
      <div style={{ display: showSideNav ? 'block' : 'none' }} className="fixed z-50 bottom-5 left-[50%] -translate-x-[50%] lg:left-[100%] lg:-translate-x-[120%] lg:top-[50%] lg:-translate-y-[50%] transform transition-transform duration-500 ease-in-out scale-90 p-2 rounded-full shadow-md lg:shadow-none">
        <div className="flex lg:flex-col gap-2 scale-75 lg:scale-100">
          <div className='relative'>
            <a onMouseEnter={() => setShowScrollToTop(!showScrollToTop)} onMouseLeave={() => setShowScrollToTop(!showScrollToTop)} href={'#'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
              <BiArrowToTop size={'1.8rem'} />
            </a>
            <div style={showScrollToTop ? { display: 'none' } : { display: 'block' }} className="absolute w-full top-[50%] right-0 -translate-x-[75px] -translate-y-[50%]">Top</div>
          </div>
          <div className='relative'>
            <a onMouseEnter={() => setShowScrolltoAbout(!showScrollToAbout)} onMouseLeave={() => setShowScrolltoAbout(!showScrollToAbout)}  href={'#about'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
              <AiOutlineInfoCircle size={'1.8rem'} />
            </a>
            <div style={showScrollToAbout ? { display: 'none' } : { display: 'block' }} className="absolute w-full top-[50%] right-0 -translate-x-[75px] -translate-y-[50%]">About</div>
          </div>
          <div className='relative'>
            <a onMouseEnter={() => setShowScrollToSchedule(!showScollToSchedule)} onMouseLeave={() => setShowScrollToSchedule(!showScollToSchedule)} href={'#timeline'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
              <AiOutlineSchedule size={'1.8rem'} />
            </a>
            <div style={showScollToSchedule ? { display: 'none' } : { display: 'block' }} className="absolute w-full top-[50%] right-0 -translate-x-[75px] -translate-y-[50%]">Schedule</div>
          </div>
          <div className='relative'>
            <a onMouseEnter={() => setShowScrollToSpeakers(!showScrollToSpeakers)} onMouseLeave={() => setShowScrollToSpeakers(!showScrollToSpeakers)} href={'#speakers'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
              <TbPodium size={'1.8rem'} />
            </a>
            <div style={showScrollToSpeakers ? { display: 'none' } : { display: 'block' }} className="absolute w-full top-[50%] right-0 -translate-x-[75px] -translate-y-[50%]">Speakers</div>
          </div>
          <div className='relative'>
            <a onMouseEnter={() => setShowScrollToPayment(!showScrollToPayment)} onMouseLeave={() => setShowScrollToPayment(!showScrollToPayment)} href={'#registration'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
              <RiMoneyDollarBoxLine size={'1.8rem'} />
            </a>
            <div style={showScrollToPayment ? { display: 'none' } : { display: 'block' }} className="absolute w-full top-[50%] right-0 -translate-x-[75px] -translate-y-[50%]">Payment</div>
          </div>
          <div className='relative'>
            <a onMouseEnter={() => setShowScrollToContact(!showScrollToContact)} onMouseLeave={() => setShowScrollToContact(!showScrollToContact)} href={'#contact'} className="flex flex-row gap-2 items-center bg-darkRed p-2 text-white rounded-full">
              <MdOutlineContactSupport size={'1.8rem'} />
            </a>
            <div style={showScrollToContact ? { display: 'none' } : { display: 'block' }} className="absolute w-full top-[50%] right-0 -translate-x-[75px] -translate-y-[50%]">Contact</div>
          </div>
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