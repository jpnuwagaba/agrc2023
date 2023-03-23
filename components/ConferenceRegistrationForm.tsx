// import { useState } from 'react';

// const ConferenceRegistrationForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [profession, setProfession] = useState('');
//   const [organization, setOrganization] = useState('');
//   const [howDidYouLearn, setHowDidYouLearn] = useState('');
//   const [expectations, setExpectations] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // TODO: Add form submission logic here
//   };

//   return (
//     <form className="max-w-md" onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label htmlFor="firstName" className="block mb-2 text-gray-600">First Name</label>
//         <input
//           type="text"
//           id="firstName"
//           className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue border-2"
//           value={firstName}
//           onChange={(event) => setFirstName(event.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="lastName" className="block mb-2 text-gray-600">Last Name</label>
//         <input
//           type="text"
//           id="lastName"
//           className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue border-2"
//           value={lastName}
//           onChange={(event) => setLastName(event.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block mb-2 text-gray-600">Email</label>
//         <input
//           type="email"
//           id="email"
//           className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue border-2"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="profession" className="block mb-2 text-gray-600">Profession</label>
//         <input
//           type="text"
//           id="profession"
//           className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue border-2"
//           value={profession}
//           onChange={(event) => setProfession(event.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="organization" className="block mb-2 text-gray-600">Organization</label>
//         <input
//           type="text"
//           id="organization"
//           className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue border-2"
//           value={organization}
//           onChange={(event) => setOrganization(event.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="howDidYouLearn" className="block mb-2 text-gray-600">How did you learn about the conference?</label>
//         <textarea
//           id="howDidYouLearn"
//           className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue border-2"
//           value={howDidYouLearn}
//           onChange={(event) => setHowDidYouLearn(event.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="expectations" className="
//         block mb-2 text-gray-600">What are your expectations from the conference?</label>
//         <textarea
//           id="expectations"
//           className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue border-2"
//           value={expectations}
//           onChange={(event) => setExpectations(event.target.value)}
//         />
//       </div>
//       <div className="flex justify-start">
//         <button
//           type="submit"
//           className="px-4 py-2 font-bold text-white bg-darkGreen rounded-lg hover:bg-lightGreen focus:outline-none focus:shadow-outline-indigo"
//         >
//           Register
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ConferenceRegistrationForm;
import React from 'react'

const ConferenceRegistrationForm = () => {
  return (
    <div>ConferenceRegistrationForm</div>
  )
}

export default ConferenceRegistrationForm