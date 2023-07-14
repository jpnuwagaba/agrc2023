import Link from 'next/link'
import React from 'react'
import {BiDownload} from 'react-icons/bi'
// import Poster from '../assets/poster.pdf'

const AboutSection = () => {
  return (
    <div id='about' className='w-[90%] mx-auto md:w-[80%] pt-8 md:pt-24'>
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-12">
        <div className="text-2xl text-darkGreen font-bold lg:col-span-1 lg:text-4xl">About This Conference</div>
        <div className="text-gray-700 text-justify text-lg lg:col-span-2 flex flex-col gap-3">
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
          <Link href={'/assets/AGRC2023_Poster.pdf.pdf'} target='_blank' className="flex flex-row gap-4 items-center bg-darkRed py-2 px-4 text-white max-w-max rounded-md hover:cursor-pointer mt-4">
            <div className='text-sm'>Conference Poster</div>
            <BiDownload />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
