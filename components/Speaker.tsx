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
      <div className="flex flex-col  gap-5 items-center bg-gray-100 rounded-lg">
        <div className='w-full aspect-square  rounded-t-xl'
          style={{
            background: `url(/assets/${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className='flex flex-col items-center text-center p-5'>
          <div className="font-bold text-xl">{name}</div>
          <div className="font-bold text-gray-700">{affiliation}</div>
          <div className="text-sm text-gray-700">{speciality}</div>
        </div>
      </div>
    </>
  )
}

export default Speaker

// style={{
//   background: `url(/assets/${image})`,
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat'
// }}