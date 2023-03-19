import React from 'react'

const Location = () => {
  return (
    <div id='about' className='w-[90%] mx-auto my-16 md:w-[80%]'>
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-12">
        <div>
          <div className="text-2xl text-darkGreen font-bold lg:col-span-1 lg:text-4xl">Location</div>
          <div className="text-lg my-2">Conference Hall, College of Engineering Design Art &Technology, Makerere University</div>
          <div className="text-sm">Kampala, Uganda</div>
        </div>
        <div className="text-gray-700 text-justify lg:col-span-2">
          <iframe className='rounded-lg w-full h-[50vh] mx-auto ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.74942789584!2d32.561642774669274!3d0.33670339965998564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb69a51888a1%3A0xbb8c70c68da6b8a7!2sCollege%20of%20Engineering%20Design%20art%20and%20Technology%20(CEDAT)%20Old%20Building!5e0!3m2!1sen!2sug!4v1679038161558!5m2!1sen!2sug" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Location