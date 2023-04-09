import '../styles/globals.css'
import "../public/fonts.css";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='font-manrope'>
        <div className=''><Component {...pageProps} /></div>
      </div>
    </>
  )
}

export default MyApp
