import React from 'react'
import Speaker from './Speaker'

const Speakers = () => {
  return (
    <div id='speakers' className='w-[90%] mx-auto pb-12 md:w-[80%] md:pt-32'>
      <div className="text-center text-2xl mb-12 font-bold text-darkGreen lg:text-4xl">Speakers</div>
      {/* component begins */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-0">
        <Speaker 
          name='Prof Anthony Gidudu'
          image='gidudu.png'
          institution='Makerere University'
          typeOfSpeech='Keynote speech'
          telephone='+256 712345678'
          email='sample@gmail.com'
        />
        <Speaker 
          name='Prof Moses Musinguzi'
          image='musinguzi.jpg'
          institution='Makerere University'
          typeOfSpeech='Keynote speech'
          telephone='+256 712345678'
          email='sample@gmail.com'
        />
      </div>
    </div>
  )
}

export default Speakers