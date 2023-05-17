import { Head } from 'next/document'
import React from 'react'

const testpage = () => {
  return (
    <>
    <Head>
      <title>Submit Abstract | AGRC 2023</title>
      <link rel="icon" href="/logo.svg" />
      <meta
        name='description'
        content='Advances in Geomatics Research Conference is a biennial conference organized to highlight, promote and encourage scholarship in the various Geomatics sub-disciplines e.g., Location-based services, Engineering Surveying, GIS, Remote Sensing, Land Management, integrated spatial planning, etc taking place locally, regionally and internationally.'
      />
    </Head>
    <div className='w-[90%] mx-auto md:w-[80%] py-12'>
      {/* <testForm /> */}
    </div>
  </>
  )
}

export default testpage