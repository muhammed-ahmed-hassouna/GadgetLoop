import React, { useState } from "react";
import UserInfoCard from "../Components/BasicInfo";
import EditUserDetails from "../Components/EditUserProfile";
import Favorites from "../Components/Favorites";
import Logo from "../Assets/Logo.png";

const ProfilePage = () => {
  const [showEditUserDetails, setShowEditUserDetails] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showBasicInfo, setShowBasicInfo] = useState(true);

  return (
    <div className="flex h-screen ">
      <div className="w-1/8 bg-white border-t-2 border-t-blue-500 border-r-2 border-r-blue-700  p-5 shadow-md rounded-2xl  ">
        <div className="flex items-center mb-10">
          <img className="h-12 w-auto max-w-full" src={Logo} alt="" />
          <div className="flex flex-col ml-3">
            <h3 className="font-medium">Sarah Carter</h3>
            <p className="text-xs text-gray-500">Sr. Engineer</p>
          </div>
          
        </div>
        <button className="flex justify-center flex-col border-2 text-white text-xs text-justify p-2 ml-7 bg-blue-500 hover:bg-[#474CB8]">Change Profile Picture</button>
        <nav className="mt-10">
          <a
            href="#"
            className={`flex cursor-pointer items-center border-l-[#474CB8] py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-[#474CB8] hover:text-[#474CB8] focus:border-l-4 ${
              setShowBasicInfo ? "border-l-[#474CB8]" : ""
            }`}
            onClick={() => {
              setShowBasicInfo(true);
              setShowEditUserDetails(false);
              setShowFavorites(false);
            }}
          >
            <svg
              className="mr-4 h-5 w-5 align-middle"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            Show Basic Info
          </a>
          <a
            href="#"
            className={`flex cursor-pointer items-center border-l-[#474CB8] py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-[#474CB8] hover:text-[#474CB8] focus:border-l-4 ${
              showEditUserDetails ? "border-l-[#474CB8]" : ""
            }`}
            onClick={() => {
              setShowEditUserDetails(true);
              setShowFavorites(false);
              setShowBasicInfo(false);
            }}
          >
            <svg
              className="mr-4 h-5 w-5 align-middle"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            Edit User Details
          </a>
          <a
            href="#"
            className={`flex cursor-pointer items-center border-l-[#474CB8] py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-[#474CB8] hover:text-[#474CB8] focus:border-l-4 ${
              showFavorites ? "border-l-[#474CB8]" : ""
            }`}
            onClick={() => {
              setShowFavorites(true);
              setShowEditUserDetails(false);
              setShowBasicInfo(false);
            }}
          >
            <svg
              className="mr-4 h-5 w-5 align-middle"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            Favorites
          </a>
        </nav>
      </div>

      <div className="w-4/5 p-4 h-full  bg-white shadow-xl rounded-lg border-b-2 border-r-2 ">
        {showBasicInfo && <UserInfoCard />}
        {showEditUserDetails && <EditUserDetails />}
        {showFavorites && <Favorites />}
      </div>
    </div>
  );
};

export default ProfilePage;