import React from 'react'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-16 bg-gray-100 py-24'>
      <div className="w-[90%] mx-auto flex flex-col gap-32 items-center md:flex-row md:w-[80%]">
        <div className='flex flex-col items-center md:items-start'>
          <div><img className='w-16 md:w-28' src="/logo.svg" alt="AGRC2023Logo" /></div>
          <div className="flex gap-6 my-6 items-center">
            <div className="font-bold undeline">Social Links: </div>
            {/* <MdOutlineAlternateEmail size={'1.4em'} color={'darkRed'} /> */}
            <BsTwitter size={'1.4em'} color={'#00acee'} />
            <a href="https://youtube.com/@geomaticsmak2774" target={'_blank'}><AiFillYoutube size={'1.4em'} color={'#FF0000'} /></a>
            <FaLinkedinIn size={'1.4em'} color={'#0072b1 '} />
          </div>
          <div className="bg-darkGreen text-center text-white p-2 w-full rounded-lg mb-3">agrc@cedat.mak.ac.ug</div>
          <div className="bg-darkGreen text-center text-white p-2 w-full rounded-lg mb-3">+256 784 614</div>
        </div>
        <div>

          <div className="flex flex-col items-start gap-6">
            <div className="font-bold underline">Quick Links</div>
            <a href='#'>Home</a>
            <a href='#about'>About AGRC</a>
            <a href='#speakers'>Speakers</a>
            <a href='#schedule'>Schedule</a>
          </div>

          {/* <div className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti dolor, adipisci culpa voluptas voluptates laudantium quis quae recusandae nobis. Et aliquid fugit, suscipit rerum aliquam a dignissimos, laboriosam est, perspiciatis reprehenderit quisquam necessitatibus. Corporis quasi quod voluptatem aut, animi, aperiam perspiciatis eveniet voluptas ipsa deleniti enim atque maiores cumque.</div> */}
        </div>
        {/* <div className=''>
          <iframe className='rounded-xl w-[250px] md:w-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.74942789584!2d32.561642774669274!3d0.33670339965998564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb69a51888a1%3A0xbb8c70c68da6b8a7!2sCollege%20of%20Engineering%20Design%20art%20and%20Technology%20(CEDAT)%20Old%20Building!5e0!3m2!1sen!2sug!4v1679038161558!5m2!1sen!2sug" loading="lazy"></iframe>
        </div> */}
      </div>
    </div>
  )
}

export default Footer