import React from 'react'
import Speaker from './Speaker'

const Speakers = () => {
  return (
    <div id='speakers' className='w-[90%] mx-auto pb-12 md:w-[80%]'>
      <div className='mb-8'>
        <div className="text-center text-2xl font-bold text-darkGreen mb-5 lg:text-4xl">Speakers</div>
        <div className='text-center lg:w-[70%] mx-auto text-lg mb-16'>Join us as industry leaders, experts, and reseachers in Land and Geomatics take the stage to share their insights, experiences, and visions for the future of Sustainable Fit-For-Purpose Solutions at our upcoming conference.</div>
      </div>
      {/* component begins */}
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <Speaker
          name='Prof. Stig Enemark'
          image='stig.webp'
          affiliation='Professor Emeritus, Aalborg Universitet Danish Centre for Spatial Planning'
          speciality='Fit for Purpose Land Administration'
          typeOfSpeech='Keynote speech'
          telephone=''
          email=''
        />
        <Speaker
          name='Prof. Rexford Ahene'
          image='rexford.png'
          affiliation='Professor of Economics, Lafayette College, USA'
          speciality='Land Management/Land Valuation'
          typeOfSpeech='Keynote speech'
          telephone=''
          email=''
        />
        <Speaker
          name='Prof. Moreblessings Shoko'
          image='more-blessing.jpg'
          affiliation='University of Cape Town'
          speciality='UAV in Geomatics/Built Environment Photogrammetric Applications/
          Women and Land in Geomatics/Indigenous methods incorporation into Geo Information Data Collection'
          typeOfSpeech='Keynote speech'
          telephone='+256 712345678'
          email='sample@gmail.com'
        />
        <Speaker
          name='Ms. Vineet Chaturvedi'
          image='Vineet.jpeg'
          affiliation='Technical University of Munich'
          speciality='Aerospace and Geodesy'
          typeOfSpeech='Keynote speech'
          telephone='+256 712345678'
          email='sample@gmail.com'
        />
        <Speaker
          name='Ms. Viola Otieno'
          image='viola.jpeg'
          affiliation='IGAD Climate Prediction and Applications Center - ICPAC'
          speciality='Earth Observation Expert, Lead - Regional Drought Early Warning'
          typeOfSpeech='Keynote speech'
          telephone='+256 712345678'
          email='sample@gmail.com'
        />
        {/* <Speaker
          name='Prof Anthony Gidudu'
          image='gidudu.png'
          affiliation='Makerere University'
          speciality='Remote Sensing/GMES/GIS'
          typeOfSpeech='Keynote speech'
          telephone='+256 712345678'
          email='sample@gmail.com'
        />
        <Speaker
          name='Prof Moses Musinguzi'
          image='musinguzi.jpg'
          affiliation='Makerere University'
          speciality='GIS/FFP/LA'
          typeOfSpeech='Keynote speech'
          telephone='+256 712345678'
          email='sample@gmail.com'
        /> */}
      </div>
    </div>
  )
}

export default Speakers