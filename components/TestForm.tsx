// import React from "react"

// export default function TestForm() {
//   const [formData, setFormData] = React.useState(
//     {
//       fullName: "",
//       email: "",
//       title: "",
//       organization: "",
//       country: ""
//     }
//   )

//   function handleChange(event:any) {
//     const { name, value, type, checked } = event.target
//     setFormData(prevFormData => {
//       return {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value
//       }
//     })
//   }

//   async function handleSubmit(event:any) {
//     event.preventDefault();
//     console.log(formData)

//     try {
//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         body: JSON.stringify({firstName: formData.fullName, email: formData.email, title: formData.title, organization: formData.organization, country: formData.country} )
//       });

//       if (response.ok) {
//         console.log('Email sent successfully');
//       } else {
//         console.log('Failed to send email');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Full Name"
//         onChange={handleChange}
//         name="fullName"
//         value={formData.fullName}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={handleChange}
//         name="email"
//         value={formData.email}
//       />
//       <input
//         type="text"
//         placeholder="Organization"
//         onChange={handleChange}
//         name="organization"
//         value={formData.organization}
//       />
//       <input
//         type="text"
//         placeholder="Country"
//         onChange={handleChange}
//         name="country"
//         value={formData.country}
//       />
//       <br />
//       <br />
//       <button>Submit</button>
//     </form>
//   )
// }