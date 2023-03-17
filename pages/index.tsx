import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/AboutSection'
import HomeSection from '../components/HomeSection'
import PreConference from '../components/PreConference'
import Theme from '../components/Theme'
import TimeSection from '../components/TimeSection'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AGRC 2023</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <HomeSection />
      <Theme />
      <TimeSection />
      <PreConference />
      <AboutSection />
    </div>
  )
}

export default Home
