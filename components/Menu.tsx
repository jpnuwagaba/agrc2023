import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='bg-white p-5 w-[100vw]'>
      <ul className='flex flex-col gap-4 items-center font-bold text-gray-600'>
        <a href='#'>Home</a>
        <a href='#about'>About AGRC</a>
        <a href='#speakers'>Speakers</a>
        <a href='#schedule'>Schedule</a>
        <a href='#contact'>Contact Us</a>
      </ul>
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-2 my-12">
          <Link href={'registration'} className='bg-darkGreen text-sm w-36 text-center text-white px-4 py-2 cursor-pointer rounded-lg'>Register</Link>
          <Link href={''} className='bg-darkRed text-sm w-36 text-center text-white px-4 py-2 cursor-pointer rounded-lg'>Submit Abstract</Link>
        </div>
      </div>
    </div>
  )
}

export default Menu