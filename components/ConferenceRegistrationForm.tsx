import { useState } from 'react'
import ConferencePaymentForm from '../components/ConferencePaymentForm'
import React from 'react'

const ConferenceRegistrationForm = () => {

  const [fullName, setFullName] = useState()
  const [title, setTitle] = useState()
  const [email, setEmail] = useState()
  const [organization, setOrganization] = useState()
  const [country, setCountry] = useState()

  const handleSubmit = () => {
    console.log('men');

  }

  return (
    <div id='registration' className='py-5 md:py-16 w-[90%] md:w-[80%] mx-auto flex flex-col items-center'>
      <div className="md:text-center text-2xl font-bold text-darkGreen mb-6 md:mb-12 lg:text-4xl">Register Online and Pay Mobile Money</div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
        {/* personal details */}
        <div>
          <div className='font-bold text-xl mb-3'>Personal Details</div>
          <form className='flex flex-col gap-4 mb-6' action="">
            <div className='flex flex-col gap-1'>
              <label className='text-sm font-bold text-gray-700' htmlFor="title">Title</label>
              <select className='border-gray-600 border-[1px] rounded-md h-12 p-2 md:w-[500px]'
                // type="text"
                value={title}
                // onChange={(e) => setTitle(e.target.value)}

                required
              >
                <option value="">Select your title</option>
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
                <option value="dr">Dr.</option>
                <option value="prof">Prof.</option>
              </select>
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-sm font-bold text-gray-700' htmlFor="fullname">Full Name</label>
              <input className='border-gray-600 border-[1px] rounded-md h-12 p-2 w-[300px] md:w-[500px]'
                type="text"
                value={fullName}
                // onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-sm font-bold text-gray-700' htmlFor="email">Email</label>
              <input className='border-gray-600 border-[1px] rounded-md h-12 p-2 md:w-[500px]'
                type="text"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-sm font-bold text-gray-700' htmlFor="organization">Organization</label>
              <input className='border-gray-600 border-[1px] rounded-md h-12 p-2 md:w-[500px]'
                type="text"
                value={organization}
                // onChange={(e) => setOrganization(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-sm font-bold text-gray-700' htmlFor="country">Country</label>
              <input className='border-gray-600 border-[1px] rounded-md h-12 p-2 md:w-[500px]'
                type="text"
                value={country}
                // onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
          </form>
          <button onClick={handleSubmit} className="rounded-md bg-darkGreen cursor-pointer inline py-2 px-3 text-sm font-bold text-white">Send Details</button>
        </div>

        {/* payment */}
        <ConferencePaymentForm />
      </div>
    </div>
  )
}

export default ConferenceRegistrationForm