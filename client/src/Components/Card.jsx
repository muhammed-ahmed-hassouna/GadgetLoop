import React from "react";
// import { Link } from "react-router-dom";
import samsung from "../Assets/samsung.png";
import { Link } from "react-router-dom";

function Card({ addProductToCart, prodects }) {
  
  return (
    <>
      {prodects.map((item) => (
        <div class="p-1 flex flex-wrap items-center justify-center mb-20">
          <div class="flex-shrink-0 m-6 relative overflow-hidden bg-gray-100 rounded-lg max-w-xs shadow-lg group h-[22rem] w-[22rem]">
            <svg
              class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: " 0.1" }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <Link to={`/ProductDetails/${item.id}`}>
                <img class="relative w-40 h-[12rem]" src={require(`../../../server/imeges/${item.image_url}`)} alt="" />
              </Link>
            </div>
            <div class="relative flex flex-row justify-between text-black px-6 pb-6 mt-6">
              <div class="flex flex-col justify-between">
                {/* <a to="/" aria-current="page">
                <span class="opacity-75 -mb-1">Samsung</span>
              </a> */}
                <a to="/" aria-current="page">
                  <span class="block font-bold text-xl">
                    {item.product_name}
                  </span>
                </a>
              </div>
              <div class="flex  justify-between">
                <div className="flex-col ">
                  <span class="block opacity-75 mb-1 ">${item.price}</span>
                  <button
                    class="block  bg-indigo-900  rounded-full text-white text-xs font-bold px-3 py-2 leading-none items-center"
                    onClick={() => {
                      addProductToCart(item.id);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
