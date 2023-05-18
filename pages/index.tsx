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
import SideNavbar from '../components/SideNavbar'
import ConferenceRegistrationForm from '../components/ConferenceRegistrationForm'
import TestForm from '../components/TestForm'



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
      <HomeSection />
      <Theme />
      <AboutSection />
      <TimeSection />
      <Speakers />
      <ConferenceRegistrationForm />
      <TestForm />
      <Location />
      <SideNavbar />
    </div>
  )
}

export default Home
