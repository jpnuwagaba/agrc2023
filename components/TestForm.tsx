import { useFormik } from "formik";

const TestForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      attachment: null,
    },
    onSubmit: async (values) => {
      const { name, email, message } = values;
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          body: JSON.stringify({ name, email, message }),
        });

        console.log("response", response);

        if (response.ok) {
          console.log("Email sent successfully");
        } else {
          console.log("Failed to send email");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TestForm