import React, {useState} from "react";
import { Link } from "react-router-dom";
import laptop from "../Assets/laptop.jpg";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import google from '../Assets/google.png'


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

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name) {
      newErrors.first_name = "First Name is required";
    }

    if (!formData.last_name) {
      newErrors.last_name = "Last Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "password is required";
    }

    if (!formData.confirm_password) {
      newErrors.confirm_password = "confirm_password is required";
    }
    
    if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
    }
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()){
      axios.post('http://localhost:3001/Signup', formData)
      .then((response) => {
       console.log('Registration successful', response.data);
       alert("account create")
       navigate('/Login')
      })
       // Handle successful registration
     .catch((error) =>{
       console.error('Error registering', error) });
       alert("All input requests");
       // Handle registration error
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex rounded-2xl m-5 ml-10 border-2">
      {/* Left Half (Image) */}
      <div
        className="w-1/2 rounded-2xl"
        style={{ backgroundImage: `url(${laptop})`, backgroundSize: "cover" }}
      >

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
            {errors.first_name && (
              <p className="text-red-500 text-xs italic">{errors.first_name}</p>
            )}
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
              {errors.last_name && (
              <p className="text-red-500 text-xs italic">{errors.last_name}</p>
            )}
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
           {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
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
             {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
             )}
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
              {errors.confirm_password && (
            <p className="text-red-500 text-xs italic">{errors.confirm_password}</p>
             )}
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
            onClick={handleSubmit}
           
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
          <button type="button">
            <img src={google} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    </form>
  );
};

export default Register;