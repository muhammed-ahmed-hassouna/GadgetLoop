import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newAdminData, setNewAdminData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
       axios.get('http://localhost:3001/User')
       .then((response)=> {
        setUsers(response.data);
        console.log("s,ldcomanfiseuvbgukhfanlcD;MWS'QDNOAWCFEIVBSHNLAD;SMnkjbhhhbbhbhjhbj",response.data)
       })
       .catch( (error) =>{   console.error('Error fetching users:', error);
      })
       
      }
   ,[]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAdminData({ ...newAdminData, [name]: value });
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post('http://localhost:5000/api/add-admin', newAdminData);
    //   // Assuming the backend returns the newly added admin data, you can update the state with it
    //   setUsers([...users, response.data]);
    //   setNewAdminData({
    //     name: '',
    //     email: '',
    //     phone: '',
    //   });
    // } catch (error) {
    //   console.error('Error adding admin', error);
    // }
  };

  return (
    <div className='h-full p-4'>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Add Admin</h3>
        <form onSubmit={handleAddAdmin} className="flex flex-wrap">
          <input
            type="text"
            name="name"
            value={newAdminData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="p-2 border border-gray-300 mr-2 w-full md:w-auto"
            required
          />
          <input
            type="email"
            name="email"
            value={newAdminData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="p-2 border border-gray-300 mr-2 w-full md:w-auto"
            required
          />
          <input
            type="tel"
            name="phone"
            value={newAdminData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="p-2 border border-gray-300 mr-2 w-full md:w-auto"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Admin
          </button>
        </form>
      </div>
      <div>
      <h3 className="text-xl font-bold mb-2">User Table</h3>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              {/* Add more headers based on your user object properties */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.phone_number}</td>
                {/* Add more cells based on your user object properties */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
