import React from 'react'
import {GrWorkshop} from 'react-icons/gr'
import {FaChalkboardTeacher, FaPeopleCarry} from 'react-icons/fa'

const PreConference = () => {
  return (
    <div>
      <div className='w-[90%] mx-auto grid gap-5 md:grid-cols-2 py-16 md:w-[80%]'>
        <div className="flex flex-col items-start gap-6 bg-darkGreen p-8 rounded-lg shadow-lg">
          <FaPeopleCarry size={'2.5em'} color={'white'}/>
          <div className='text-white'>
            <div className="text-xs my-1">7th - 9th August, 2023</div>
            <div className="text-xl font-bold uppercase">pre-conference workshops</div>
            <ul className='text-sm uppercase'>
              <li className='mt-2 list-disc'>african reference frame (afref) and gnss - cors and its applications</li>
              <li className='mt-2 list-disc'>gmes</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 bg-orange p-8 rounded-lg shadow-lg">
          <FaChalkboardTeacher size={'2.5em'} color={'white'}/>
          <div className='text-white'>
            <div className="text-xs my-1">7th - 9th August, 2023</div>
            <div className="text-xl font-bold uppercase">pre-conference tutorials</div>
            <ul className='text-sm uppercase'>
              <li className='mt-2 list-disc'>introduction to fit-for-purpose land aministration for land professionals</li>
              <li className='mt-2 list-disc'>fundamentals of geographic information systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreConference