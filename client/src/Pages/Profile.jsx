import React, { useState, useEffect } from "react";
import UserInfoCard from "../Components/BasicInfo";
import EditUserDetails from "../Components/EditUserProfile";
import Favorites from "../Components/Favorites";
import axios from "axios";

const ProfilePage = () => {
  const [showEditUserDetails, setShowEditUserDetails] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showBasicInfo, setShowBasicInfo] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [User, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchProfilePicture = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/api/profile-picture"
  //       );
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error("Error fetching profile picture", error);
  //     }
  //   };

  //   fetchProfilePicture();
  // }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("img_url", selectedFile);

    // try {
    //   const response = await axios.put(
    //     "http://localhost:5000/api/upload-profile-picture",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   console.log("Profile picture uploaded successfully", response.data);
    //   setProfilePicture(response.data);
    // } catch (error) {
    //   console.error("Error uploading profile picture", error);
    // }
  };

  return (
    <div className="flex h-screen ">
      <div className="w-1/8 bg-white border-t-2 border-t-blue-500 border-r-2 border-r-blue-700  p-5 shadow-md rounded-2xl  ">
        <div className="flex items-center mb-10">
          {/* <img className="h-12 w-auto max-w-full" src={User.img_url} alt="" /> */}
          <div className="flex flex-col ml-3">
            {/* <h3 className="font-medium">${User.first_name}</h3> */}
          </div>
        </div>

        <div class="mb-3">
          <input
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-black font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-indigo-900 hover:file:text-white focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            id="formFileSm"
            type="file"
            onChange={handleFileChange}
            onClick={handleUpload}
          />
        </div>

        <nav className="mt-3">
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

      <div className="w-4/5 p-4 h-full bg-white shadow-xl rounded-lg border-b-2 border-r-2 ">
        {showBasicInfo && <UserInfoCard />}
        {showEditUserDetails && <EditUserDetails />}
        {showFavorites && <Favorites />}
        {/* {profilePicture && (
          <img src={profilePicture} alt="Profile" style={{ width: "100px" }} />
        )} */}
      </div>
    </div>
  );
};

export default ProfilePage;