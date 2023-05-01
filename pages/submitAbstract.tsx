import Head from 'next/head'
import React from 'react'
import SubmitAbstractForm from '../components/SubmitAbstractForm'
import StatusOfSubmitAbstractsPage from '../components/StatusOfSubmitAbstractsPage'

const submitAbstract = () => {
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
        <div className="text-2xl font-bold text-darkGreen">Submit your Abstract(s)</div>
        <SubmitAbstractForm />
        <div className="fixed bottom-10 left-5"><StatusOfSubmitAbstractsPage /></div>
      </div>
    </>
  )
}

export default submitAbstract