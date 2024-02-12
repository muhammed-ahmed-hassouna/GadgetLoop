import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactUsDetails = () => {
  const [contactDetails, setContactDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await axios.get("http://localhost:3001/contact/all_contact");
        setContactDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching contact details", error);
        setError(error.message || "An error occurred while fetching contact details");
      }
    };

    fetchContactDetails();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Us Details</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Message</th>
          </tr>
        </thead>
        <tbody>
          {contactDetails.map((contact) => (
            <tr key={contact.id}>
              <td className="py-2 px-4 border-b">{contact.first_name}</td>
              <td className="py-2 px-4 border-b">{contact.email}</td>
              <td className="py-2 px-4 border-b">{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactUsDetails;
