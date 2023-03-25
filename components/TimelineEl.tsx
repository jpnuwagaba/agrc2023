import React from 'react'

interface props {
  date: string,
  event: string,
}

const TimelineEl: React.FC<props> = ({date, event}) => {
  return (
    <div>
      <div className="timeline-el flex flex-col font-bold pl-[47px] pb-16 before:shadow-lg
                        before:absolute before:border-white before:-translate-x-16
                        before:rounded-full before:border-8 before:h-8 before:w-8 before:bg-darkGreen">
        <div className="text-gray-600">{date}</div>
        <div className="text-darkRed md:text-2xl">{event}</div>
      </div>
    </div>
  )
}

export default TimelineEl