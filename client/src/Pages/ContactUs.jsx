import React, { useState } from "react";
import axios from "axios";
import back from "../Assets/contactUsbg.jpg";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/contact/add_contact",
        formData
      );
      console.log("Message sent successfully!", response.data);
      Swal.fire({
        title: "Message sent successfully! :)",
        
      });
      // You can show a success message or redirect the user to a different page here
    } catch (error) {
      console.error("Error sending data", error);
      // Handle errors (show an error message or log them)
    }
  };

  return (
    <div className="flex h-screen w-full items-center overflow-hidden px-2">
      <div className="relative flex w-1/2 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl mx-auto">
        <div
          className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"
          style={{ backgroundImage: `url(${back})` }}
        ></div>
        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-center text-3xl font-bold text-gray-700">
            Contact Us
          </h1>
          <p className="text-gray-500">Get in touch with us</p>
        </div>

        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block mb-2 font-bold text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block mb-2 font-bold text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-bold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-900 hover:bg-indigo-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;