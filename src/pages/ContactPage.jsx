// src/ContactPage.js
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-2/3 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <img
        src="https://plus.unsplash.com/premium_vector-1724125270494-7a8dda73cd20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdHxlbnwwfDB8MHx8fDA%3D"
        alt="Contact Us"
        className="rounded-lg mb-4 w-full h-40 object-cover"
      />
      <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
        <p className="text-gray-600">
          We’d love to hear from you! Reach out using the form below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label className="block mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition w-full"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p className="flex items-center mb-2">
          <FaMapMarkerAlt className="mr-2 text-blue-600" />
          123 Main St, Anytown, USA
        </p>
        <p className="flex items-center mb-2">
          <FaPhone className="mr-2 text-blue-600" />
          (123) 456-7890
        </p>
        <p className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-blue-600" />
          contact@yourdomain.com
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
