import React from 'react'
import { BiAlarm } from 'react-icons/bi'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'
import Timeline from './Timeline'
import Timer from './Timer'
import Link from 'next/link'
import PreConference from './PreConference'

const TimeSection = () => {
  return (
    <div id='timeline' className='w-[80%] mx-auto py-24 md:w-[80%]'>
      <div className="text-center text-darkGreen font-bold text-2xl mb-16 md:text-4xl">Conference Timeline</div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-16 lg:gap-32 lg:flex-row">
          <div className="flex flex-col gap-16 items-center">
          <div className="shadow-xs">
              <div className="flex flex-col items-center shadow-lg p-5">
                <div className='flex flex-col items-center'>
                  <div className="font-bold text-xl text-gray-700">Register Today</div>
                </div>
                <br />
                <Timer />
                <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScUIApDtu6SdZ9eKz3MkAMFarPxhcfpHECCmo1GoMP3SUIH5Q/viewform?vc=0&c=0&w=1&flr=0'} target='_blank' className="w-full rounded-lg bg-darkGreen text-center p-2 text-white my-5 cursor-pointer">Register</Link>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start gap-8">
              {/* <div className="flex flex-col gap-1">
              <BiAlarm size={'3em'} color={'orange'} />
              <div className="text-darkGreen font-bold">Event Dates</div>
              <div className="text-sm text-gray-700">11 <sup>th</sup>, 12 <sup>th</sup> August, 2023</div>
            </div> */}
              <div className="flex flex-row gap-5">
                <div><HiOutlineBuildingOffice size={'3em'} color={'orange'} /></div>
                <div>
                  <div className="text-darkGreen font-bold">Makerere University</div>
                  <div className="text-sm font-bold text-gray-600">Yusuf Lule CTF Auditorium</div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div><BiAlarm size={'3em'} color={'orange'} /></div>
                <div>
                  <div className="text-darkGreen font-bold">Call Now</div>
                  <div className="text-sm font-bold text-gray-600">+256 784 614675</div>
                </div>
              </div>
            </div>
            
          </div>
          <Timeline />
        </div>
      </div>
      <PreConference />
    </div>
  )
}

export default TimeSection