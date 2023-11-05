// import React from 'react';
// import {Link} from 'react-router-dom'

// const Register = () => {
//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg">
//       <h1 className="text-2xl font-bold mb-4">Register</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
//             First Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="firstName"
//             type="text"
//             placeholder="First Name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
//             Last Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="lastName"
//             type="text"
//             placeholder="Last Name"
//           />
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//           Email
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="email"
//           type="text"
//           placeholder="Email"
//         />
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="Password"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
//             Confirm Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="confirmPassword"
//             type="password"
//             placeholder="Confirm Password"
//           />
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
//           Phone Number
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="phoneNumber"
//           type="text"
//           placeholder="Phone Number"
//         />
//       </div>
// <div className='flex justify-center'>
// <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="button">
//   <Link to="/" >Register</Link>
// </button>
// </div>
//       <p className="mt-4 text-gray-700 text-sm flex justify-center">
//         Already have an account? <Link to="/Login" className="text-blue-500 hover:text-blue-700">Login Here</Link>
//       </p>
//       <div className="mt-4 border-t border-gray-300 pt-4 flex justify-center">
//         <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//           Signup with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, {useState} from "react";
import { Link } from "react-router-dom";
import laptop from "../Assets/laptop.jpg";
import Joi from 'joi';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // const schema = Joi.object({
  //   first_name: Joi.string().min(3).max(25).required(),
  //   last_name: Joi.string().min(3).max(25).required(),
  //   email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  //   phone_number: Joi.string().pattern(new RegExp('^[\+]?\d{1,4}[-.\s]?\(?(\d{1,4})\)?[-.\s]?\d{1,9}[-.\s]?\d{1,9}$')).min(10).max(12).required(),
  //   password: Joi.string().pattern(new RegExp('^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$%^&!])[A-Za-z\d@#$%^&!]{8,12}$')).required(),
  //   confirm_password: Joi.any().equal(Joi.ref('password')).required()
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // const validationResult = schema.validate(formData, { abortEarly: false });

    // if (validationResult.error) {
    //   const newErrors = {};
    //   validationResult.error.details.forEach(detail => {
    //     newErrors[detail.context.key] = detail.message;
    //   });
    //   setErrors(newErrors);
    // } else {
    //   // Form data is valid, proceed with submission
    //   setErrors({});
    //   // Send data to server or perform further actions
    // }
  }
  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/Signup', formData);
      console.log('Registration successful', response.data);
      navigate('/')
      // Handle successful registration
    } catch (error) {
      console.error('Error registering', error);
      // Handle registration error
    }
  }
  console.log(formData);
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex rounded-2xl m-5 ml-10 border-2">
      {/* Left Half (Image) */}
      <div
        className="w-1/2 rounded-2xl"
        style={{ backgroundImage: `url(${laptop})`, backgroundSize: "cover" }}
      >
        <h1 className="text-center text-5xl text-white">
          Welcome To GADGETLOOP
        </h1>
      </div>

      {/* Right Half (Register Form) */}
      <div className="w-1/2 p-8 ">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              type="text"
              placeholder="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
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
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
              onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm_password"
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone_number"
            type="text"
            placeholder="Phone Number"
            name="phone_number"
            value={formData.phone_number}
              onChange={handleChange}
          />
        </div>
        <Link to="/" >
        <div className="flex justify-center">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            type="submit" 
            onClick={handleRegister}
           
          >
            
            Register
          
          </button>
        </div>
        </Link>
        <p className="mt-4 text-gray-700 text-sm flex justify-center">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-500 hover:text-blue-700">
            Login Here
          </Link>
        </p>
        <div className="mt-4 border-t border-gray-300 pt-4 flex justify-center">
          <button
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Signup with Google
          </button>
        </div>
      </div>
    </div>
    </form>
  );
};

export default Register;
