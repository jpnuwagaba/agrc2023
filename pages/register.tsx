import { useState, useEffect } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});

  // set emailSent to false after 5 seconds
  useEffect(() => {
    if (emailSent) {
      setTimeout(() => {
        setEmailSent(false);
      }, 5000);
    }
  });

  const handleValidation = () => {
    let tempErrors: {
      firstName?: boolean;
      lastName?: boolean;
      email?: boolean;
      phoneNumber?: boolean;
    } = {};
    let isValid = true;

    if (formData.firstName.length <= 0) {
      tempErrors["firstName"] = true;
      isValid = false;
    }
    if (formData.lastName.length <= 0) {
      tempErrors["lastName"] = true;
      isValid = false;
    }
    if (formData.email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (formData.phoneNumber.length <= 0) {
      tempErrors["phoneNumber"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isFormValid = handleValidation();

    if (isFormValid) {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data?.message === "email sent successfully") {
        setEmailSent(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        });
      }
      setIsLoading(false);
    }
    return true;
  };

  return (
    <div className="max-w-sm p-10">
      <h2 className="text-2xl font-bold">Register</h2>
      {emailSent && (
        <div className="p-4 my-4 bg-green-100 rounded-md">
          <p className="text-sm text-green-500">
            Registration successful. We have sent you a confirmation email. If
            you don't see it, check your spam folder.
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="p-2 mt-1 border"
            onChange={handleChange}
            value={formData.firstName}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">First name is required.</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="p-2 mt-1 border"
            onChange={handleChange}
            value={formData.lastName}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">Last name is required.</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 mt-1 border"
            onChange={handleChange}
            value={formData.email}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              Email address is required.
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="p-2 mt-1 border"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-red-500">
              Phone number is required.
            </p>
          )}
        </div>
        <button className="w-48 px-4 py-2 mt-4 text-white bg-blue-500 rounded-md">
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
