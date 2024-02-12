
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserInfoCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user-data");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-950 text-white p-8 rounded-lg shadow-lg">
      <div className="overflow-x-auto">
        <h1 className="font-bold text-3xl mb-5">Basic Info</h1>
        <table className="table-auto w-[100%]">
          <tbody>
            <tr>
              <th className="text-left p-4 text-white font-medium border-r-2">
                Name:
              </th>
              <td className="p-4 font-medium">
                {userData ? userData.name : "Loading..."}
              </td>
            </tr>
            <tr>
              <th className="text-left p-4 text-white font-medium border-r-2">
                Email:
              </th>
              <td className="p-4 font-medium">
                {userData ? userData.email : "Loading..."}
              </td>
            </tr>
            <tr>
              <th className="text-left p-4 text-white font-medium border-r-2">
                Phone Number:
              </th>
              <td className="p-4 font-medium">
                {userData ? userData.phone : "Loading..."}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfoCard;
