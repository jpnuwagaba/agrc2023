import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/AboutSection'
import HomeSection from '../components/HomeSection'
import PreConference from '../components/PreConference'
import Theme from '../components/Theme'
import TimeSection from '../components/TimeSection'
import Location from '../components/Location'
import Speakers from '../components/Speakers'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AGRC 2023</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          name='description'
          content='Advances in Geomatics Research Conference is a biennial conference organized to highlight, promote and encourage scholarship in the various Geomatics sub-disciplines e.g., Location-based services, Engineering Surveying, GIS, Remote Sensing, Land Management, integrated spatial planning, etc taking place locally, regionally and internationally.'
        />
      </Head>
      <Navbar />
      <div className='pt-12 md:pt-24'>
      <HomeSection />
      <Theme />
      <TimeSection />
      <AboutSection />
      <PreConference />
      <Speakers />
      <Location />
      </div>
      <Footer />
    </div>
  )
}

export default Home