import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'

interface props {
  image: string,
  name: string,
  affiliation: string,
  speciality: string,
  typeOfSpeech: string,
  telephone: string,
  email: string,
}

const Speaker: React.FC<props> = ({ image, name, typeOfSpeech, telephone, email, affiliation, speciality }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start lg:items-center">
        <div className='w-24 h-24 lg:w-36 lg:h-36 aspect-square border-4 border-darkRed rounded-full'
          style={{
            background: `url(/assets/${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <div className="font-bold text-xl">{name}</div>
          <div className="font-bold text-gray-700">{affiliation}</div>
          <div className="text-sm text-gray-700">{speciality}</div>
        </div>
      </div>
    </>
  )
}

export default Speaker