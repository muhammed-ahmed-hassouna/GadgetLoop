import React from 'react';

const UserInfoCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500  to-blue-950 text-white p-8 rounded-lg shadow-lg">

      <div className=" overflow-x-auto  ">
        <h1 className='font-bold text-3xl mb-5 '>Basic Info</h1>
      <table className="table-auto w-[100%] ">
        <tbody className=''>
          <tr>
            <th className="text-left p-4 text-white font-medium border-r-2 ">
              Name:
            </th>
            
            <td className="p-4 font-medium ">
              One Piece 
            </td>
            
          </tr>
          <tr>
            <th className="text-left p-4 text-white  font-medium border-r-2">
              Email:
            </th>
            <td className="p-4 font-medium ">
              basic@example.com 
            </td>
           
          </tr>
          <tr >
            <th className="text-left p-4 text-white  font-medium border-r-2">
              Phone Number:
            </th>
            <td className="p-4 font-medium ">
             138548520384512
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>

    </div>
  );
};

export default UserInfoCard;
