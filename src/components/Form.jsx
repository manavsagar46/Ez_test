import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setStatus("Please fill out all fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus("Invalid email address.");
      return;
    }

    try {
      const res = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData
      );
      if (res.status === 200  || res.status === 201) {
        setStatus("Form Submitted");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      setStatus("Submission failed. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-2xl p-6 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-md p-2  bg-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-md p-2 bg-white "
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded-md p-2  bg-white"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="border rounded-md p-2  resize-none h-24  bg-white"
        />

        <button
          type="submit"
          className=" text-white bg-[#F15D2B] py-2 m-auto flex items-center justify-center w-30 rounded-full cursor-pointer hover:bg-[#e75f1f]"
        >
          Submit
        </button>

        {status && <p className="text-center text-gray-700 mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default Form;
