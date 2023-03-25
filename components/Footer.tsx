import React from 'react'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex items-center flex-col py-8 bg-gray-200'>
      <div className="font-bold flex flex-col items-center gap-4 md:flex-row">
      <div className="text-darkRed">Important Links:</div>
      <div className="flex gap-4 justify-between text-sm">
        <a href='#'>Home</a>
        <a href='#about'>About AGRC</a>
        <a href='#speakers'>Speakers</a>
        <a href='#schedule'>Schedule</a>
        <a href='#contact'>Contact Us</a>
      </div>
    </div>
    </div>
  )
}

export default Footer