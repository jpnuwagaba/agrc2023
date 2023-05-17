import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import React from 'react'
import Link from 'next/link'

const Location = () => {
  return (
    <div id='contact' className='w-[90%] mx-auto my-16 md:w-[80%]'>
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-12">
        <div className='lg:col-span-1'>
          <div className='mb-12'>
            <div className="text-2xl text-darkGreen font-bold lg:text-2xl">Location</div>
            {/* <div className="font-bold text-gray-700 my-2">Conference Hall, College of Engineering Design Art &Technology, Makerere University</div> */}
            <div className="font-bold text-gray-700 my-2">Kampala, Uganda - TBC</div>
          </div>
          <div className='mb-12'>
            <div className="text-2xl text-darkGreen font-bold lg:text-2xl">Contact Us</div>
            <div className='flex flex-col items-start'>
              <div className="flex gap-6 my-6 items-center">
                <div className="font-bold text-gray-700">Social Links: </div>
                {/* <MdOutlineAlternateEmail size={'1.4em'} color={'darkRed'} /> */}
                <BsTwitter size={'1.4em'} color={'#00acee'} />
                <a href="https://youtube.com/@geomaticsmak2774" target={'_blank'}><AiFillYoutube size={'1.4em'} color={'#FF0000'} /></a>
                <FaLinkedinIn size={'1.4em'} color={'#0072b1 '} />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2 text-sm'>
                <Link href={'mailto:agrc2023@mak.ac.ug'} target='_blank' className="bg-darkGreen font-bold text-center text-white px-3 py-2 w-full rounded-lg w-full">agrc2023@mak.ac.ug</Link>
                <div className="bg-darkRed font-bold text-center text-white px-3 py-2 w-full rounded-lg w-full">+256 784 614675</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-700 text-justify lg:col-span-1">
          {/* <iframe className='rounded-lg w-full h-[50vh] mx-auto ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.74942789584!2d32.561642774669274!3d0.33670339965998564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb69a51888a1%3A0xbb8c70c68da6b8a7!2sCollege%20of%20Engineering%20Design%20art%20and%20Technology%20(CEDAT)%20Old%20Building!5e0!3m2!1sen!2sug!4v1679038161558!5m2!1sen!2sug" loading="lazy"></iframe> */}
          <iframe className='rounded-lg w-full h-[50vh] mx-auto '  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.28080790778!2d32.51672317223549!3d0.31302902627256335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!5e0!3m2!1sen!2sug!4v1682838738254!5m2!1sen!2sug" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Location