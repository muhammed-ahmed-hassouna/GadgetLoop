import React, { useState } from "react";
import Card from "./Card"; 

function ProductList({prodects,addProductToCart}) {

 
  console.log(prodects);

  const productsPerPage = 9; 
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = prodects.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(prodects.length / productsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="flex flex-col justify-center items-center mb-8">
    <div className="flex flex-row flex-wrap justify-center items-center m-5">
      <Card addProductToCart={addProductToCart} prodects={currentProducts} />
    </div>

    <div className="pagination flex items-center justify-center my-4">
  <button
    onClick={prevPage}
    disabled={currentPage === 1}
    className={`mr-2 px-4 py-2 text-sm rounded-l ${
      currentPage === 1
        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
        : 'bg-indigo-900 text-white hover:bg-indigo-600'
    }`}
  >
    Previous
  </button>
  <span className="text-sm">
    {`Page ${currentPage} of ${totalPages}`}
  </span>
  <button
    onClick={nextPage}
    disabled={currentPage === totalPages}
    className={`ml-2 px-4 py-2 text-sm rounded-r ${
      currentPage === totalPages
        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
        : 'bg-indigo-900 text-white hover:bg-indigo-600'
    }`}
  >
    Next
  </button>
</div>



    </div>
  );
}

export default ProductList;