import Head from 'next/head'
import React, { useState } from 'react'
import Link from 'next/link'
import ConferenceRegistrationForm from '../components/ConferenceRegistrationForm'
import RegistrationPageNav from '../components/RegistrationPageNav'
import ConferencePaymentForm from '../components/ConferencePaymentForm'
import Footer from '../components/Footer'
import RegistrationStatus from '../components/RegistrationStatus'

const registration = () => {
  return (
    <div className='relative'>
      <Head>
        <title>Register for AGRC 2023</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div>
        <RegistrationPageNav />
        <div className='fixed w-full opacity-90 z-50 bottom-0'><RegistrationStatus /></div>
        <div className='w-[90%] mx-auto md:w-[80%]'>
          <ConferenceRegistrationForm />
        </div>
      </div>
    </div>
  )
}

export default registration