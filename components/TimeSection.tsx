import React from 'react'
import { BiAlarm } from 'react-icons/bi'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'
import Timer from './Timer'

const TimeSection = () => {
  return (
    <div className='w-[80%] mx-auto py-16 md:w-[65%]'>
      <div className="flex flex-col justify-between gap-12 items-center md:flex-row lg:items-center">
        <div className="flex flex-col justify-between items center gap-8 xl:flex-row">
          <div className="flex flex-col gap-1">
            <BiAlarm size={'3em'} color={'orange'} />
            <div className="text-darkGreen font-bold">Event Dates</div>
            <div className="text-sm text-gray-700">11 <sup>th</sup>, 12 <sup>th</sup> August, 2023</div>
          </div>
          <div className="flex flex-col gap-1">
            <HiOutlineBuildingOffice size={'3em'} color={'orange'} />
            <div className="text-darkGreen font-bold">Conference Hall, CEDAT</div>
            <div className="text-sm text-gray-700">11 <sup>th</sup>, 12 <sup>th</sup> August, 2023</div>
          </div>
          <div className="flex flex-col gap-1">
            <BiAlarm size={'3em'} color={'orange'} />
            <div className="text-darkGreen font-bold">Call Now</div>
            <div className="text-sm text-gray-700">+256 414 531 047</div>
          </div>
        </div>
        <div className="shadow-lg">
          <div className="flex flex-col items-center shadow-lg p-5">
            <div className='flex flex-col items-center'>
              <div className="font-bold text-lg">Register Today</div>
              <div className="text-xs text-gray-700">Set up your sth in minutes</div>
            </div>
            <br />
            <Timer />
            <div className="w-full rounded-lg bg-darkGreen text-center p-2 text-white my-5 cursor-pointer">Register Here</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeSection