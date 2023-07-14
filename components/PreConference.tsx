import React from 'react'
import { GrWorkshop } from 'react-icons/gr'
import { FaChalkboardTeacher, FaPeopleCarry } from 'react-icons/fa'
import {BiDownload} from 'react-icons/bi'
import Link from 'next/link'

const PreConference = () => {
  return (
    <div>
      <div>
        <div className="text-center text-2xl font-bold text-darkGreen mb-5 mt-12 lg:text-4xl">Pre-Conference Events</div>
        <div className='text-center lg:w-[70%] mx-auto text-lg mb-8'>Make the most out of your conference experience by joining our exciting lineup of activities and workshops designed to kickstart your learning journey. From interactive sessions to networking opportunities, these events will set the stage for a truly immersive conference experience.</div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="rounded-md grid grid-cols-1 shadow-md w-full">
            <div className='w-full h-44 rounded-t-md'
              style={{
                background: `url(/assets/wetland.jpeg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div className="p-5 flex flex-col items-start gap-2">
              <div className="text-xl font-bold">Wetland Vulnerability Analysis</div>
              <div className="text-sm">CEDAT Computer Lab Room 3034</div>
              <Link href={'/assets/AGRC- WVA-ISU.pdf (1).pdf (1).pdf'} target='_blank' className="flex flex-row gap-4 items-center bg-darkRed py-2 px-4 text-white max-w-max rounded-md hover:cursor-pointer mt-2">
                <div className='text-sm'>Download Flyer</div>
                <BiDownload />
              </Link>
            </div>
          </div>
          <div className="rounded-md grid grid-cols-1 shadow-md w-full">
            <div className='w-full h-44 rounded-t-md'
              style={{
                background: `url(/assets/drone-surveying.jpeg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div className="p-5 flex flex-col items-start gap-2">
              <div className="text-xl font-bold">Mapping using UAVs</div>
              <div className="text-sm">CEDAT Computer GIS Center</div>
              <Link href={'/assets/AGRC Mapping using UAVs-2 (1).pdf'} target='_blank' className="flex flex-row gap-4 items-center bg-darkRed py-2 px-4 text-white max-w-max rounded-md hover:cursor-pointer mt-2">
                <div className='text-sm'>Download Flyer</div>
                <BiDownload />
              </Link>
            </div>
          </div>
          <div className="rounded-md grid grid-cols-1 shadow-md w-full">
            <div className='w-full h-44 rounded-t-md'
              style={{
                background: `url(/assets/dialogue.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div className="p-5 flex flex-col items-start gap-2">
              <div className="text-xl font-bold">Public Dialogue</div>
              <div className="text-sm">CEDAT Conference Hall</div>
              <Link href={'/assets/AGRC Public Dialogue - ISU -2.pdf'} target='_blank' className="flex flex-row gap-4 items-center bg-darkRed py-2 px-4 text-white max-w-max rounded-md hover:cursor-pointer mt-2">
                <div className='text-sm'>Download Flyer</div>
                <BiDownload />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreConference
