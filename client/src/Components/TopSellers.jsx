import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import cartPng from "../Assets/cart.png";

function TopSellers({ addProductToCart }) {
  const [cardData, setCardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    axios
      .get("http://localhost:3001/home/top")
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        console.error("Error response:", error.response);
      });
  }, []);
  const [cart, setCart] = useState([]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // console.log(cardData);
  // console.log(indexOfLastCard);

  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);
  // console.log(currentCards);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cardData.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  const maxVisibleButtons = 3;
  const indexOfLastButton = Math.min(
    Math.max(currentPage + maxVisibleButtons - 1, maxVisibleButtons),
    pageNumbers.length
  );
  const indexOfFirstButton = Math.max(indexOfLastButton - maxVisibleButtons, 0);

  const visiblePageNumbers = pageNumbers.slice(
    indexOfFirstButton,
    indexOfLastButton
  );
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <h2 class="mb-1 text-3xl text-indigo-950 text-center font-extrabold leading-tight ">
          Top Sellers
        </h2>
      </div>
      <div className="p-1 flex flex-wrap items-center justify-center mb-20 mx-14">
        {currentCards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative items-center justify-center overflow-hidden bg-gray-100 rounded-lg max-w-xs shadow-lg group h-[23rem] w-[22rem] m-10"
          >
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: " 0.1" }}
            ></svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <Link to={`/ProductDetails/${card.id}`}>
                <img
                  className="relative  "
                  style={{ height: "190px", width: "190px" }}
                  src={require(`../../../server/imeges/${card.image_url}`)}
                  alt={card.product_name}
                />
              </Link>
            </div>
            <div className="relative flex flex-row justify-between text-black px-6 pb-6 mt-6">
              <div className="flex flex-col justify-between">
                <Link to="/" aria-current="page">
                  <span className="opacity-75 -mb-1">{card.model}</span>
                </Link>
                <Link to="/" aria-current="page">
                  <span className="block font-bold text-xl">
                    {card.product_name}
                  </span>
                </Link>
              </div>

              <div className="flex  justify-between">
                <div className="flex-col">
                  <span className="block opacity-75 mb-1">${card.price}</span>
                  <button
                    onClick={() => {
                      addProductToCart(card.id);
                    }}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-20"
                  >
                    <img src={cartPng} alt="cart"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2 ">
        {currentCards.length > 0 && (
          <ul className="flex list-none">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="mr-2 rounded-full px-4 py-2 border text-black "
            >
              Previous
            </button>
            {visiblePageNumbers.map((number) => (
              <li key={number} className="mx-1">
                <button
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number
                      ? "bg-indigo-700 w-10 rounded-full text-white"
                      : "bg-indigo-900 w-10 rounded-full text-white"
                  } py-2 px-3 rounded-full focus:outline-none`}
                >
                  {number}
                </button>
              </li>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(cardData.length / cardsPerPage)
              }
              className="px-4 py-2 border rounded-full text-black "
            >
              Next
            </button>
          </ul>
        )}
      </div>
    </>
  );
}

export default TopSellers;
