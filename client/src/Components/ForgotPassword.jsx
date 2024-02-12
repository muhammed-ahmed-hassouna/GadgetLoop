import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirm_password: "",
    verificationCode: "",
    step: 1, // Track the current step (1 for email input, 2 for verification code)
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendVerificationCode = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/sendEmail",
        {
          email: formData.email,
        }
      );

      if (response.data) {
        setFormData({
          ...formData,
          step: 2,
        });
      } else {
        alert(
          "This email is not registered in our system. Please try a different email."
        );
      }
    } catch (error) {
      console.error("Error checking email", error);
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/verificationCode",
        {
          email: formData.email,
          verificationCode: formData.verificationCode,
        }
      );

      // Assuming the backend returns a success message
      // Move to the next step
      setFormData({
        ...formData,
        step: 3,
      });
    } catch (error) {
      console.error("Error verifying code", error);
    }
  };

  const handlePasswordResetSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "http://localhost:3001/Update",
        {
          email: formData.email,
          newPassword: formData.newPassword,
          confirm_password: formData.confirm_password,
        }
      );

      // Assuming the backend returns a success message
      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      console.error("Error resetting password", error);
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>

      {formData.step === 1 && (
        <form onSubmit={handleSendVerificationCode}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
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
          <div className="flex w-full items-center">
            <button className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">
              Send Verification Code
            </button>
          </div>
        </form>
      )}

      {formData.step === 2 && (
        <form onSubmit={handleVerificationSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="verificationCode"
            >
              Verification Code
            </label>
            <input
              type="text"
              name="verificationCode"
              value={formData.verificationCode}
              onChange={handleChange}
              placeholder="Enter Verification Code"
            />
          </div>
          <div className="flex w-full items-center">
            <button className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">
              Verify
            </button>
          </div>
        </form>
      )}

      {formData.step === 3 && (
        <form onSubmit={handlePasswordResetSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="newPassword"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm_password"
            >
              Confirm New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm_password"
              type="password"
              placeholder="Confirm New Password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex w-full items-center">
            <button className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">
              Reset Password
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;