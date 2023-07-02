import React from 'react'
import { GrWorkshop } from 'react-icons/gr'
import { FaChalkboardTeacher, FaPeopleCarry } from 'react-icons/fa'

const PreConference = () => {
  return (
    <div>
      <div>
          <div className="text-center text-2xl font-bold text-darkGreen mb-5 mt-12 lg:text-4xl">Pre-Conference Events</div>
        <div className='text-center lg:w-[70%] mx-auto text-lg mb-8'>Make the most out of your conference experience by joining our exciting lineup of activities and workshops designed to kickstart your learning journey. From interactive sessions to networking opportunities, these events will set the stage for a truly immersive conference experience.</div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="rounded-md grid grid-cols-1 shadow-md w-full">
              <div className='w-full h-44 rounded-t-md'
                style={{
                  background: `url(/assets/gis.jpg)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <div className="p-5 flex flex-col items-start gap-2">
                <div className="text-xl font-bold">Introduction to GIS</div>
                <div className="text-sm">CEDAT Computer Lab Room 3034</div>
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
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PreConference