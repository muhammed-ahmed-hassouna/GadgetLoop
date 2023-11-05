import React, { useEffect } from "react";
import ProductList from '../Components/Pagination'
import CategoriesSectionTwo from "../Components/CategoriseSectionTwo";
import axios from "axios";
import { useState } from "react";

export const Categories = ({addProductToCart}) => {
  const [prodects, setProdects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/protduc/getall")
      .then((response) => {
        setProdects(response.data);
        console.log("Categories",response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        console.error("Error response:", error.response);
      });
  }, []);
  

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); };

  

  return (
    <div>
      <div class="flex flex-col justify-center items-center  ">
        <h1 class="font text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 dark:text-white">
          Categories
        </h1>
      </div>
      <CategoriesSectionTwo />

      <div class="px-32 flex flex-row lg:justify-start  justify-center items-center h-16">
        <select
          id="countries"
          class=" mr-3 h-12 w-28 bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm  block p-2.5 "
        >
          <option selected>Sorted by</option>
          <option value="US">*****</option>
          <option value="CA">*****</option>
          <option value="FR">*****</option>
          <option value="DE">******</option>
        </select>

        <select
          id="countries"
          class=" h-12 w-28 bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm  block p-2.5 "
        >
          <option selected>Sorted by</option>
          <option value="US">*****</option>
          <option value="CA">*****</option>
          <option value="FR">*****</option>
          <option value="DE">******</option>
        </select>
      </div>

      <ProductList addProductToCart={addProductToCart} prodects={prodects}/>


      <button
        className="fixed bottom-10 right-10 p-4 rounded-full bg-indigo-900 text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-500"
        onClick={handleScrollToTop}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};