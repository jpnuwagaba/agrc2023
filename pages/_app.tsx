import '../styles/globals.css'
import "../public/fonts.css";
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='font-lato'>
        <Navbar />
        <div className='pt-12 md:pt-24'><Component {...pageProps} /></div>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
