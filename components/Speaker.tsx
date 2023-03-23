import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'

interface props {
  image: string,
  name: string,
  typeOfSpeech: string,
  telephone: string,
  email: string,
}

const Speaker: React.FC<props> = ({image, name, typeOfSpeech, telephone, email}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div 
        style={{
          background: `url(/assets/${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} className='h-64 lg:h-80'
      />
      <div className="bg-darkGreen text-gray-100 py-5 lg:py-12 lg:px-8">
        <div className="flex flex-col gap-6 items-center text-center h-full lg:gap-24 lg:text-left lg:items-start">
          <div>
            <div className="text-xl font-bold">{name}</div>
            <div className=''>{typeOfSpeech}</div>
          </div>
          <div className='flex flex-col items-center gap-1 text-sm lg:items-start'>
            <div className='flex items-center gap-3'>
              <BsFillTelephoneFill size={'1em'}/>
              <div>{telephone}</div>
            </div>
            <div className='flex items-center gap-3'>
              <MdAlternateEmail size={'1em'}/>
              <a className='underline' href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speaker