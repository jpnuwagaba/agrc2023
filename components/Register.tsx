import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { title } from 'process';

// define validation schema
const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  organization: Yup.string().required('Organization is required'),
  country: Yup.string().required('Country is required'),
});

const Register = () => {
  const initialValues = {
    title: '',
    fullName: '',
    email: '',
    organization: '',
    country: '',
  };

  const handleSubmit = async (values: any) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.log('Failure to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h2 className="font-bold text-darkGreen text-lg">Conference Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="fullName">Full Name</label>
            <Field type="text" id="fullName" name="fullName" />
            <ErrorMessage name="fullName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="organization">Organization</label>
            <Field type="text" id="organization" name="organization" />
            <ErrorMessage name="organization" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <Field type="text" id="country" name="country" />
            <ErrorMessage name="country" component="div" className="error" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Register