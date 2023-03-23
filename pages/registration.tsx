import Head from 'next/head'
import React from 'react'
import ConferenceRegistrationForm from '../components/ConferenceRegistrationForm'

const registration = () => {
  return (
    <div>
      <Head>
        <title>Register for AGRC 2023</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="w-[90%] mx-auto py-24 md:w-[80%] flex flex-col gap-24 ">
        {/* <div><img className='w-56' src="/logo.svg" alt="AGRC2023Logo" /></div> */}
        <ConferenceRegistrationForm />
      </div>
    </div>
  )
}

export default registration