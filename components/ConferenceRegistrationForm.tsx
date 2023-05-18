// install nodemailer 
// install formik

import React from 'react';
import { useFormik } from 'formik';
import ConferencePaymentForm from './ConferencePaymentForm';

const ConferenceRegistrationForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     title: '',
  //     name: '',
  //     email: '',
  //     organization: '',
  //     country: ''
  //   },
  //   onSubmit: async (values: any) => {
  //     const { title, name, email, organization, country, message, attachment } = values;

  //     const formData = new FormData();
  //     formData.append('title', title);
  //     formData.append('name', name);
  //     formData.append('email', email);
  //     formData.append('organization', organization);
  //     formData.append('country', country);
  //     formData.append('message', message);
  //     formData.append('attachment', attachment);

  //     try {
  //       const response = await fetch('/api/send-email', {
  //         method: 'POST',
  //         body: formData,
  //       });

  //       if (response.ok) {
  //         console.log('Email sent successfully');
  //       } else {
  //         console.log('Failed to send email');
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   },
  // });

  return (
    <div id='registration' className='w-[90%] mx-auto md:w-[80%] my-12 md:my-28'>
      <div className="md:text-center text-2xl font-bold text-darkGreen mb-6 md:mb-12 lg:text-4xl">Registration and Payment</div>
      <div className=' flex flex-col items-center max-w-[700px] mx-auto'>
        {/* <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
          <div className='flex flex-col ga-3'>
            <label className='font-bold text-sm text-gray-600' htmlFor="name">Title:</label>
            <input className='border-2 border-gray-300 rounded-lg p-1'
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>
          <div className='flex flex-col ga-3'>
            <label className='font-bold text-sm text-gray-600' htmlFor="name">Name:</label>
            <input className='border-2 border-gray-300 rounded-lg p-1'
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className='flex flex-col ga-3'>
            <label className='font-bold text-sm text-gray-600' htmlFor="email">Email:</label>
            <input className='border-2 border-gray-300 rounded-lg p-1'
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className='flex flex-col ga-3'>
            <label className='font-bold text-sm text-gray-600' htmlFor="email">Organization:</label>
            <input className='border-2 border-gray-300 rounded-lg p-1'
              id="organization"
              name="organization"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.organization}
            />
          </div>
          <div className='flex flex-col ga-3'>
            <label className='font-bold text-sm text-gray-600' htmlFor="email">Country:</label>
            <input className='border-2 border-gray-300 rounded-lg p-1'
              id="country"
              name="country"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.country}
            />
          </div>                    
          <button className='bg-darkGreen px-3 py-2 rounded text-sm font-bold mt-5 text-white inline' type="submit">Submit</button>
        </form> */}
        <ConferencePaymentForm />
      </div>
    </div>
  );
};

export default ConferenceRegistrationForm;