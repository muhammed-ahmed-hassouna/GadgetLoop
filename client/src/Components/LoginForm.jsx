// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (

//     <div class="flex h-screen w-screen items-center overflow-hidden px-2">
//       <div class="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
//         <div class="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
//         <div class="mx-auto mb-2 space-y-3">
//           <h1 class="text-center text-3xl font-bold text-gray-700">Login</h1>
//           <p class="text-gray-500">Login to access your account</p>
//         </div>

//         <div className="mb-4">
//           <div className="flex items-center mb-4">
//             <input
//               type="checkbox"
//               id="rememberMe"
//               className="mr-2 leading-tight"
//             />
//             <label htmlFor="rememberMe" className="text-sm">
//               Remember Me
//             </label>
//           </div>
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="text"
//             placeholder="Email"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="Password"
//           />
//         </div>

//         <div class="flex w-full items-center">
//           <button class="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">
//             Login
//           </button>
//           <p className="w-full text-center text-sm font-medium text-gray-600 hover:underline">
//             <Link
//               to="/ForgotPassword"
//               className="text-blue-500 hover:text-blue-700"
//             >
//               Forgot Password?
//             </Link>
//           </p>{" "}
//         </div>
//         <p className="mt-4 text-gray-700 text-sm flex justify-center">
//           Don't have an account?{" "}
//           <Link to="/Register" className="text-blue-500 hover:text-blue-700">
//             Register Here
//           </Link>
//         </p>
// <div className="mt-4 border-t border-gray-300 pt-4 flex justify-center">
//   <button
//     className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//     type="button"
//   >
//     Login with Google
//   </button>
// </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, {useState} from "react";
import { Link } from "react-router-dom";
import laptop from "../Assets/laptop.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';




const Login = ({setSignin,setAdmin}) => {
  const [formData, setFormData] = useState({
    eamil:'',
    password:''
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/Login" , formData);
      console.log("Login successful", response.data);
      setSignin(true);
      Cookies.set('Token', response.data.token);
      Cookies.set('user_id', response.data.user_id);
      if(response.data.role==2){
        setAdmin(true);
        Cookies.set('Role', response.data.role);
      }
      navigate('/');
      // Handle successful login
    } catch (error) {
      console.error("Error logging in", error);
      // Handle login error
    }
  };

  return (
    <div className="flex rounded-2xl m-5 ml-10 border-2">
      {/* Left Half (Login Form) */}
      <div className="w-1/2 p-8">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
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
            onChange={handleInputChange}
          />
        </div>

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
            onChange={handleInputChange}

          />
        </div>

        <div className="flex items-center mb-4">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            id="rememberMe"
          />
          <label className="text-sm" htmlFor="rememberMe">
            Remember Me
          </label>
        </div>

        <div className="flex w-full items-center">
          <button
            className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="w-full text-center text-sm font-medium text-gray-600 hover:underline">
            <Link
              to="/ForgotPassword"
              className="text-blue-500 hover:text-blue-700"
            >
              Forgot Password?
            </Link>
          </p>{" "}
        </div>

        <p className="mt-4 text-gray-700 text-sm flex justify-center">
          Don't have an account?{" "}
          <Link to="/Register" className="text-blue-500 hover:text-blue-700">
            Register Here
          </Link>
        </p>
        <div className="mt-4 border-t border-gray-300 pt-4 flex justify-center">
          <button
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login with Google
          </button>
        </div>
      </div>

      {/* Right Half (Image) */}
      <div
        className="w-1/2 rounded-2xl"
        style={{ backgroundImage: `url(${laptop})`, backgroundSize: "cover " }}
      >
        <h1 className="text-center text-5xl text-white">Welcome Back!</h1>
      </div>
    </div>
  );
};

export default Login;
