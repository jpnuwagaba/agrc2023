import Link from 'next/link'
import React from 'react'

const RegistrationPageNav = () => {
  return (
    <div className='fixed w-full bg-white shadow-md z-50'>
      <div className='w-[90%] mx-auto py-3 md:w-[80%]'>
        <div className="flex justify-between items-center">
          <a href='#'><img className='w-16 md:w-28' src="/logo.svg" alt="AGRC2023Logo" /></a>
          <Link href={'/'} className="bg-darkRed rounded-md text-sm text-white py-2 px-3 cursor-pointer">Back to main site</Link>
        </div>
      </div>      
    </div>
  )
}

export default RegistrationPageNav