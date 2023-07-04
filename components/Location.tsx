import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import React from 'react'
import Link from 'next/link'
import Venue from './Venue'

const Location = () => {
  return (
    <div className='bg-gray-100 py-16'>
      <div id='contact' className='w-[90%] mx-auto my-16 md:w-[80%]'>
        <div className=''>
          <div className='mb-12'>
            <div className="text-2xl text-darkGreen font-bold lg:text-3xl mb-6">Venues</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16'>
              <div className=''>
                <Venue
                  image={'auditorium-out.jpg'}
                  venue='Makerere University, Yusuf Lule CTF Auditorium'
                  body='Conference'
                  directions='https://www.google.com/maps/place/Yusuf+Lule+Teaching+Facility/@0.3357318,32.5680306,19.71z/data=!4m14!1m7!3m6!1s0x177dbb0ed0519a01:0xd463fb5e583dc128!2sYusuf+Lule+Teaching+Facility!8m2!3d0.3355639!4d32.5681238!16s%2Fg%2F11s3d87h9f!3m5!1s0x177dbb0ed0519a01:0xd463fb5e583dc128!8m2!3d0.3355639!4d32.5681238!16s%2Fg%2F11s3d87h9f?entry=ttu'
                />
              </div>
              <div>
                <Venue
                  image={'auditorium.jpg'}
                  venue='Makerere University, CEDAT Conference Hall'
                  body='Public Dialogue'
                  directions='https://www.google.com/maps/place/CEDAT+Conference+Hall/@0.3361125,32.5618421,17z/data=!3m1!4b1!4m6!3m5!1s0x177dbbb50a4008e3:0x5aeb67f4b2f49290!8m2!3d0.3361125!4d32.564417!16s%2Fg%2F11h52qv105?entry=ttu'
                />
              </div>
              <div>
                <Venue
                  image={'cedat.jpg'}
                  venue='Makerere University, CEDAT GIS Center'
                  body='Mapping using UAVs - Pre-Conference Workshop'
                  directions='https://www.google.com/maps/place/CEDAT+Conference+Hall/@0.3361125,32.5618421,17z/data=!3m1!4b1!4m6!3m5!1s0x177dbbb50a4008e3:0x5aeb67f4b2f49290!8m2!3d0.3361125!4d32.564417!16s%2Fg%2F11h52qv105?entry=ttu'
                />
              </div>
              <div>
                <Venue
                  image={'cedat.jpg'}
                  venue='Makerere University, CEDAT Computer Lab Room 3034'
                  body='Introduction to GIS - Pre-Conference Workshop'
                  directions='https://www.google.com/maps/place/CEDAT+Conference+Hall/@0.3361125,32.5618421,17z/data=!3m1!4b1!4m6!3m5!1s0x177dbbb50a4008e3:0x5aeb67f4b2f49290!8m2!3d0.3361125!4d32.564417!16s%2Fg%2F11h52qv105?entry=ttu'
                />
              </div>
            </div>
            {/* <div className="font-bold text-gray-700 my-2">Conference Hall, College of Engineering Design Art &Technology, Makerere University</div> */}
            {/* <div className="font-bold text-gray-700 my-2">Makerere University, Yusuf Lule CTF Auditorium</div> */}
          </div>
          <div className='mb-12'>
            <div className="text-2xl text-darkGreen font-bold lg:text-2xl">For more Information</div>
            <div className='flex flex-col items-start'>
              <div className="flex gap-3 my-2 items-center">
                <div className="font-bold text-gray-700">Youtube: </div>
                {/* <MdOutlineAlternateEmail size={'1.4em'} color={'darkRed'} /> */}
                {/* <BsTwitter size={'1.4em'} color={'#00acee'} /> */}
                <a href="https://youtube.com/@geomaticsmak2774" target={'_blank'}><AiFillYoutube size={'1.7em'} color={'#FF0000'} /></a>
                {/* <FaLinkedinIn size={'1.4em'} color={'#0072b1 '} /> */}
              </div>
              <div className="text-darkGreen font-bold mb-2">Or Contact Us At: </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2 text-sm'>
                <Link href={'mailto:agrc2023@mak.ac.ug'} target='_blank' className="bg-darkGreen font-bold text-center text-white px-3 py-2 w-full rounded-lg w-full">agrc2023@mak.ac.ug</Link>
                <div className="bg-darkRed font-bold text-center text-white px-3 py-2 w-full rounded-lg w-full">+256 784 614675</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-gray-700 text-justify lg:col-span-1">
          <iframe className='rounded-lg w-full h-[50vh] mx-auto ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.74942789584!2d32.561642774669274!3d0.33670339965998564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb69a51888a1%3A0xbb8c70c68da6b8a7!2sCollege%20of%20Engineering%20Design%20art%20and%20Technology%20(CEDAT)%20Old%20Building!5e0!3m2!1sen!2sug!4v1679038161558!5m2!1sen!2sug" loading="lazy"></iframe>
          <iframe className='rounded-lg w-full h-[50vh] mx-auto '  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.28080790778!2d32.51672317223549!3d0.31302902627256335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!5e0!3m2!1sen!2sug!4v1682838738254!5m2!1sen!2sug" loading="lazy"></iframe>
        </div> */}
      </div>
    </div>
  )
}

export default Location