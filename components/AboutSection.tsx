import React from 'react'

const AboutSection = () => {
  return (
    <div id='about' className='w-[90%] mx-auto md:w-[80%] md:pt-32'>
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-12">
        <div className="text-2xl text-darkGreen font-bold lg:col-span-1 lg:text-4xl">About This Conference</div>
        <div className="text-gray-700 text-justify lg:col-span-2">
          <p>
            <span className='font-bold'>The Department of Geomatics and Land Management - Makerere University, Kampala</span> has organised the biennial Advances in Geomatics Research Conference (AGRC) since 2011.
            The purpose of the conference is to highlight, promote and encourage scholarship in the various Geomatics
            sub-disciplines e.g., Location-based services, Engineering Surveying, GIS, Remote Sensing, Land Management,
            integrated spatial planning, etc taking place locally, regionally and internationally. Through the AGRC the academia,
            researchers and practitioners in the geomatics field in Uganda and the region have been accorded an affordable forum to
            discuss their work, peer review other researchers work and advance Geomatics Scholarship in the region. Out of the previous
            conferences, a special issue of the South African Journal of Geomatics was published in 2013 showcasing some of the cutting-edge
            research papers presented at the 2nd AGRC. The conferences have grown substantially to include summer schools, pre-conference workshops.
          </p>
          <p>
            This year's conference will have a public dialogue on <span className='font-bold'>The National Land Policy.</span> It will also have pre-conference workshops
            covering advances in the Global Navigation Satellite System (GNSS), and an Introduction to Laser Scanning and UAV Mapping.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection