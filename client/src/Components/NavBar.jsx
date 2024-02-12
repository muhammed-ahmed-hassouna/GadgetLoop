import React, { useEffect } from "react";
import logo from "../Assets/logo1.png";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import cartPng from "../Assets/cart.png";
import searchPng from "../Assets/search.png";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Search from "./SearchBar";
import profileImg from '../Assets/cat.webp'

const NavBar = ({isSignIn,setSignin,isAdmin,setAdmin}) => {
  const [isOpenMenu, setOpenMenu] = React.useState(false);
  const [isOpenProfile, setOpenProfile] = React.useState(false);
  const [isOpenSearch, setOpenSearch] = React.useState(false);


  useEffect(() => {
    try{
      const user_id = Cookies.get("user_id")
      // const googleToken = Cookies.get("connect")
      const role = Cookies.get("Role")
      // if(!googleToken){
      //   setSignin(true)}
       
      if(!isNaN(user_id)){
      setSignin(true)}
      console.log(role)
      if(role ==2){
        setAdmin(true)
      }

    }catch(error){
      console.log("Error",error)
    }
 

  }, []);

 
  const navigate = useNavigate();

  function signOut() {
    setSignin(false);
    Cookies.remove('Token');
    Cookies.remove('user_id');
    Cookies.remove('connect.sid');
    // Cookies.session.destroy('connect.sid');
    
    if(isAdmin==true){
      Cookies.remove('Role');
    }
    navigate('/');
    
  }

  const loginNav = isSignIn ? (
    <div className="relative ml-1">
      <button
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        onClick={() => {
          setOpenProfile(!isOpenProfile);
        }}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-10 h-10 rounded-full"
           src={profileImg}
          alt=""
        />
      </button>
      <div
        className={`absolute top-7 z-50 ${isOpenProfile ? "" : "hidden"} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            name
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            email
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          {isAdmin && (
            <li>
              <Link 
                to="/Dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/ProfilePage"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Profile
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white whitespace-nowrap"
              onClick={signOut}
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="flex-1 flex justify-end items-center align-center ">
      <Link to="/Login">
        <button
          type="button"
          className="text-black hover:text-[#474CB8] font-medium rounded-lg text-sm px-2 py-2.5 md:ml-1 md:px-10"
        >
          Login
        </button>
      </Link>
      <Link to="/Register">
        <button
          type="button"
          className="shadow-sm shadow-[#91a9bd] text-white bg-indigo-900 hover:bg-[#3f44a7] font-medium rounded-lg text-sm px-2 py-2.5 md:ml-1 md:px-10 "
        >
          Sign Up
        </button>
      </Link>
    </div>
  );

  return (
    <div id="navBar">
      <nav className="bg-white border-gray-200 h-30 top-0 my-0 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              className="h-10 w-32 md:w-44 md:h-16  p-0 "
              alt="Logo"
            />
          </a>
          <div className="flex items-center md:order-2">
            <button
              id="searchButton"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-20"
              onClick={() => {
                setOpenSearch(true);
              }}
            >
              {/* <span className="sr-only">Open main menu</span> */}
              <img
                src={searchPng}
                alt="search"
                onClick={() => {
                  setOpenSearch(true);
                }}
              ></img>
            </button>
            <Link to="/cart">
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-20"
              >
                {/* <span className="sr-only">Open main menu</span> */}
                <img src={cartPng} alt="cart"></img>
              </button>
            </Link>

            {loginNav}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-20"
              aria-controls="navbar-user"
              aria-expanded="false"
              onClick={() => {
                setOpenMenu(!isOpenMenu);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isOpenMenu ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link 
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Categories"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Categories                  
                </Link>
              </li>

              <li>
                <Link
                  to="/AboutUs"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      {isOpenSearch &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-80 bg-gray-900 z-50 ">
            {<Search setOpenSearch={setOpenSearch} isOpenSearch={isOpenSearch} />}
          </div>,
          document.body
        )}
    </div>
  );
};

export default NavBar;
