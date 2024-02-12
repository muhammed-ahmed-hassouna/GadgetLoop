import React, { useState, useEffect } from "react";
import axios from "axios";

const DashboardPayment = () => {
  const [orders, setOrders] = useState(0);
  const [payments, setPayments] = useState([]);

  // async function fetchOrders() {
  //   axios
  //     .get("http://localhost:5000/admin/orders")
  //     .then((response) => {
  //       setOrders(response.data.length);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }

  // useEffect(() => {
  //   const fetchPayments = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/payments");
  //       setPayments(response.data);
  //     } catch (error) {
  //       console.error("Error fetching payments", error);
  //     }
  //   };
  //   fetchOrders();
  //   fetchPayments();
  // }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Payments</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">User Name</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Payment Status</th>
            <th className="py-2 px-4 border-b">Order Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="py-2 px-4 border-b">{payment.user_name}</td>
              <td className="py-2 px-4 border-b">{payment.product_name}</td>
              <td className="py-2 px-4 border-b">{payment.payment_status}</td>
              <td className="py-2 px-4 border-b">
                {orders.find((order) => order.id === payment.order_id)
                  ?.Order_status || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPayment;
