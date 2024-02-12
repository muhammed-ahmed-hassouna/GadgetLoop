import React, { useState } from "react";

const EditUserDetails = () => {
  const [formData, setFormData] = useState({
    first_Name: "",
    last_Name: "",
    phone: "",
    password: "",
    confirm_Password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
  };

  return (
    <div className=" bg-gradient-to-r from-blue-500  to-blue-950 text-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-5">Edit User Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="first_Name">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_Name"
              type="text"
              name="first_Name"
              value={formData.first_Name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="last_Name">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_Name"
              type="text"
              name="last_Name"
              value={formData.last_Name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="confirm_Password"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm_Password"
              type="password"
              name="confirm_Password"
              value={formData.confirm_Password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 "
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditUserDetails;