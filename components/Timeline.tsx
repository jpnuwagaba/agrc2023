import React from 'react'
import TimelineEl from './TimelineEl'

const Timeline = () => {
  return (
    <div className='w-[90%] mx-auto md:w-[80%]'>
      {/* <div className="text-2xl text-center w-full font-bold text-darkGreen md:text-4xl">Timeline</div> */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-start">
          <div className=' border-l-2 border-darkGreen'>
            <TimelineEl
              date={`13th March - 13th May`}
              event={'Call for Abstracts'}
            />
          </div>
          <div className=' border-l-2 border-darkGreen'>
            <TimelineEl
              date={`30th May`}
              event={'Acceptance of Abstracts'}
            />
          </div>
          <div className=' border-l-2 border-darkGreen'>
            <TimelineEl
              date={`30th June`}
              event={'Full Papers for Publication'}
            />
          </div>
          <div className=' border-l-2 border-darkGreen'>
            <TimelineEl
              date={`7th -9th August`}
              event={'Pre-Conference Workshops & Tutorials'}
            />
          </div>
          <div className=' border-l-2 border-white'>
            <TimelineEl
              date={`10th -11th August`}
              event={'The Conference'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline