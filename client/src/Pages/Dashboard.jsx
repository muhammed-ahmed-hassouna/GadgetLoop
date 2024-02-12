import React, { useState } from "react";
import Users from "../Components/Users";
import Product from "../Components/Product";
import ContactUsDetails from "../Components/ContactUsDetails";
import AdminCategory from "../Components/AdminCategory";
import DashboardPayment from "../Components/DashBoardPayment";
import Statistics from "../Components/DashBoardStatistics";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="flex">
      <div className="w-1/8 bg-white border-t-2 border-t-blue-500 border-r-2 border-r-blue-700  p-5 shadow-md rounded-2xl h-[50rem]">
      
        <div className=" m-5 text-3xl">
          <h1 className="flex justify-center">DashBoard</h1>
        </div>
        <button
          className={`w-full py-2 mb-2 rounded ${
            activeTab === "users" ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>
        <button
          className={`w-full py-2 mb-2 rounded ${
            activeTab === "Product" ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab("Product")}
        >
          Products
        </button>
        <button
          className={`w-full py-2 mb-2 rounded ${
            activeTab === "AdminCategory"
              ? "bg-blue-500 text-white"
              : "bg-white"
          }`}
          onClick={() => setActiveTab("AdminCategory")}
        >
          Categories
        </button>
        <button
          className={`w-full py-2 mb-2 rounded ${
            activeTab === "DashboardPayment"
              ? "bg-blue-500 text-white"
              : "bg-white"
          }`}
          onClick={() => setActiveTab("DashboardPayment")}
        >
          Payments
        </button>
        <button
          className={`w-full py-2 mb-2 rounded ${
            activeTab === "ContactUsDetails"
              ? "bg-blue-500 text-white"
              : "bg-white"
          }`}
          onClick={() => setActiveTab("ContactUsDetails")}
        >
          Contact Us
        </button>
        
      </div>
      <div className="w-4/5 p-4 h-full  bg-white shadow-xl rounded-lg border-b-2 border-r-2 flex-grow ">
        <div className="">
      {/* <Statistics /> */}
      </div>
        {activeTab === "users" && <Users />}
        {activeTab === "Product" && <Product />}
        {activeTab === "AdminCategory" && <AdminCategory />}
        {activeTab === "DashboardPayment" && <DashboardPayment />}
        {activeTab === "ContactUsDetails" && <ContactUsDetails />}
      </div>
    </div>
  );
};

export default Dashboard;
