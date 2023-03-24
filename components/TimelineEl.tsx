import React from 'react'

interface props {
  date: string,
  event: string,
}

const TimelineEl: React.FC<props> = ({date, event}) => {
  return (
    <div>
      <div className="flex flex-col font-bold pl-[54px] pb-16
                        before:absolute before:border-darkGreen before:-translate-x-20
                        before:rounded-full before:border-2 before:h-12 before:w-12 before:bg-white">
        <div className="text-gray-600">{date}</div>
        <div className="text-darkRed md:text-2xl">{event}</div>
      </div>
    </div>
  )
}

export default TimelineEl