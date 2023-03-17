import React from 'react'

const AboutSection = () => {
  return (
    <div id='about' className='w-[90%] mx-auto md:w-[80%]'>
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-12">
        <div className="text-2xl text-darkGreen font-bold lg:col-span-1 lg:text-4xl">About This Conference</div>
        <div className="text-gray-700 text-justify lg:col-span-2">
          The Department of Geomatics and Land Management has organised the biennial Advances in Geomatics Research Conference (AGRC) since 2011. The purpose of the conference is to highlight, promote and encourage scholarship in the various Geomatics sub-disciplines e.g., Location-based services, Engineering Surveying, GIS, Remote Sensing, Land Management, integrated spatial planning, etc taking place locally, regionally and internationally. Through the AGRC the academia, researchers and practitioners in the geomatics field in Uganda and the region have been accorded an affordable forum to discuss their work, peer review other researchers work and advance Geomatics Scholarship in the region. Out of the previous conferences, a special issue of the South African Journal of Geomatics was published in 2013 showcasing some of the cutting-edge research papers presented at the 2nd AGRC. The conferences have grown substantially to include summer schools, pre-conference workshops and to attract sponsors including Digital Earth Africa, Regional Centre for Mapping of Resources for Development (RCMRD), Ministry of Lands, Housing and Urban Development (MLHUD), SIDA, etc. As part of this growth the 6th AGRC in 2021 included a public dialogue on the Mailo land question in Uganda. The dialogue was well attended both physically and online and included a detailed discussion of the Mailo question in Uganda with proposals on how to solve the landlord-tenant impasse on Mailo land tenure.
        </div>
      </div>
    </div>
  )
}

export default AboutSection