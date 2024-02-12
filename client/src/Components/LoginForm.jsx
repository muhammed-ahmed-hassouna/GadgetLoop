// import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import laptop from "../Assets/laptop.jpg";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Cookies from 'js-cookie';
// import google from '../Assets/google.png';
// import Swal from "sweetalert2";


// const Login = ({setSignin,setAdmin}) => {
//   const [formData, setFormData] = useState({
//     email:'',
//     password:''
//   })
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:3001/Login" , formData);
//       console.log("Login successful", response.data);
//       setSignin(true);
//       Cookies.set('Token', response.data.token);
//       Cookies.set('user_id', response.data.user_id);
//       if(response.data.role==2){
//         setAdmin(true);
//         Cookies.set('Role', response.data.role);
//       }
//       navigate('/');
//       // Handle successful login
//     } catch (error) {
//       console.error("Error logging in", error);
//       // Handle login error
//       alert("Password or Email wrong")
//     }
//   };
//   const handleButtonClick = () => {
//     Swal.fire({
//       title: "Welcome to our Website! :)",
      
//     });
//   };

//   return (
//     <div className="flex rounded-2xl m-5 ml-10 border-2">
//       {/* Left Half (Login Form) */}
//       <div className="w-1/2 p-8">
//         <h1 className="text-2xl font-bold mb-4">Login</h1>
//         <div className="mb-4">
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
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
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
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}

//           />
//         </div>

//         <div className="flex items-center mb-4">
//           <input
//             className="mr-2 leading-tight"
//             type="checkbox"
//             id="rememberMe"
//           />
//           <label className="text-sm" htmlFor="rememberMe">
//             Remember Me
//           </label>
//         </div>

//         <div className="flex w-full items-center">
//           <button
//             className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white"
//             onClick={() => { 
//               handleLogin(); 
//               handleButtonClick();
//             }} >
          
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
//         <div className="mt-4 border-t border-gray-300 pt-4 flex justify-center">
//           <button 
//           onClick={()=>{window.location.href='http://localhost:3001/auth/google'} }
//           type="button">
//             <img src={google} className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Right Half (Image) */}
//       <div
//         className="w-1/2 rounded-2xl"
//         style={{ backgroundImage: `url(${laptop})`, backgroundSize: "cover " }}
//       >
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
import google from '../Assets/google.png';
import Swal from "sweetalert2";


const Login = ({setSignin,setAdmin}) => {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (!regex.test(password)) {
      return "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one numeric digit, and one special character";
    }
    return "";
  }

  const navigate = useNavigate();

  const handleLogin = async () => {
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setPasswordError(passwordError);
      return;
    }
    setPasswordError("");
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
      Swal.fire({
        title: "Welcome to our Website! :)",
        
      });
      // Handle successful login
    } catch (error) {
      console.error("Error logging in", error);
      // Handle login error
      alert("Password or Email wrong")
    }
  };
  const handleButtonClick = () => {
  
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
            type="email"
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
          {passwordError && (
          <p className="text-red-500 text-xs italic">{passwordError}</p>
        )}
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
            className="shrink-0 inline-block w-36 rounded-lg bg-indigo-900 py-3 font-bold text-white"
            onClick={() => { 
              handleLogin(); 
              handleButtonClick();
            }} >
          
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
          onClick={()=>{window.location.href='http://localhost:3001/auth/google'} }
          type="button">
            <img src={google} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right Half (Image) */}
      <div
        className="w-1/2 rounded-2xl"
        style={{ backgroundImage: `url(${laptop})`, backgroundSize: "cover " }}
      >
      </div>
    </div>
  );
};

export default Login;
