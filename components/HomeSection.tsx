import Link from 'next/link'
import React from 'react'

const HomeSection = () => {
  return (
    <div className='relative bg-[url(/assets/auditorium.jpg)] bg-center bg-no-repeat bg-cover text-white h-[50vh] md:h-[70vh]'>
      <div className='relative w-[90%] mx-auto md:w-[80%] py-[20%] md:py-[10%]'>
        <div className='text-center absolute z-10  md:text-left'>
          <div className="text-xl md:text-4xl font-bold uppercase">7<sup>th</sup> advances in <span className='text-orange'>geomatics</span> research conference</div>
          <hr className='my-6' />
          {/* <div className="text-xl md:text-3xl font-bold uppercase">THEME: GEOMATICS EXCELLENCE FOR A MODERN SOCIETY - SUSTAINABLE FIT FOR PURPOSE SOLUTIONS FOR THE 21ST CENTURY</div> */}
          <div className="text-xl md:text-2xl text-orange font-bold my-4 uppercase">17<sup>th</sup> - 18<sup>th</sup> august, 2023</div>
          <div className='flex justify-around md:justify-start'>
            <div className='flex items-center gap-3'>
              {/* <div className="rounded-xl">call for abstracts</div> */}
              <Link href={'mailto:agrc2023@mak.ac.ug'} target='_blank' className="rounded-lg bg-darkRed text-sm font-bold px-3 py-2 cursor-pointer">Submit Abstract</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-overlay"></div>
    </div>
  )
}

export default HomeSection