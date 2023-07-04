import Link from 'next/link'
import React from 'react'
import { MdOutlineDirections } from 'react-icons/md'

interface props {
  image: any,
  venue: string,
  body: string,
  directions: string
}

const Venue: React.FC<props> = ({ image, venue, body, directions }) => {
  return (
    <div>
      <div className="flex flex-row items-start gap-12">
        <div className="rounded-xl aspect-square w-[30%] relative"
          style={{
            background: `url(/assets/${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
                  <div className="mid-dark-overlay rounded-xl"></div>

          </div>
        <div className='flex flex-col gap-2 w-[70%]'>
          <div className="text-lg font-bold text-gray-700">{venue}</div>
          <div className='text-sm'><span className='font-bold text-gray-700'>Events: </span> {body}</div>
          <Link href={directions} target='_blank' className="rounded-md bg-darkGreen text-sm font-bold text-white py-2 px-3 w-min flex items-center gap-2">
            <div>Directions</div>
            <div><MdOutlineDirections className='white-icon' size={'1.2rem'} /></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Venue