import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here using the formData state
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            type="password"
            placeholder="New Password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmNewPassword">
            Confirm New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmNewPassword"
            type="password"
            placeholder="Confirm New Password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div class="flex w-full items-center">
          <button class="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">
            Reset password
          </button>
          <p className="w-full text-center text-sm font-medium text-gray-600 hover:underline">
            <Link
              to="/Login"
              className="text-blue-500 hover:text-blue-700"
            >
                Remember Password? Login here
            </Link>
          </p>{" "}
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
