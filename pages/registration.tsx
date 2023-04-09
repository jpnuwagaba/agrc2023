import Head from 'next/head'
import React, { useState } from 'react'
import Link from 'next/link'
import ConferenceRegistrationForm from '../components/ConferenceRegistrationForm'
import RegistrationPageNav from '../components/RegistrationPageNav'
import ConferencePaymentForm from '../components/ConferencePaymentForm'
import Footer from '../components/Footer'

const registration = () => {
  return (
    <div className=''>
      <Head>
        <title>Register for AGRC 2023</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div>
        <RegistrationPageNav />
        <div className='w-[90%] mx-auto md:w-[80%]'>
          <ConferenceRegistrationForm />
        </div>
      </div>
    </div>
  )
}

export default registration