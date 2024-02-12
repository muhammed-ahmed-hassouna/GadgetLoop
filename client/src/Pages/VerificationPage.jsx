import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerificationPage = () => {
  const [formData, setFormData] = useState({
    verificationCode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your verification logic here using the formData state (verificationCode)
    // If the verification is successful, navigate to the ForgetPassword page
    // If not, display an error message
    navigate("/ForgotPassword");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Verification Page</h1>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default VerificationPage;
