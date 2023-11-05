import React, { useState, useEffect, useRef } from "react";
// import NavBar from "../Components/NavBar";
// import { Footer } from "../Components/Footer";
import back from "../Assets/back.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';


export const CartsPage = () => {
  const [quantity, setQuantity] = useState(2);
  const [cartItems, setCartItems] = useState([]);
  const total = React.useRef(0);

  useEffect(() => {
    const user_id = Cookies.get("user_id")

    axios
      .post("http://localhost:3001/cart",{"user_id": user_id})
      .then((response) => {
        setCartItems(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
      
      

  }, []);



  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const removeProduct = (productId) => {
    axios
      .post(`http://yourapi.com/cart/remove`, { productId })
      .then((response) => {
        setCartItems(response.data); // Assuming the response contains updated cart items
      })
      .catch((error) => {
        console.error("Error removing product:", error);
      });
  };
  return (
    <>
      <div
        class="h-screen bg-white pt-20 "
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: "cover",
        }}
      >
        <div class="flex flex-col justify-center items-center mb-9">
          <h1 class="font text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9  dark:text-white">
            Cart Items
          </h1>
        </div>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3">
            {cartItems.map((item) => (
              <div
                key={item.product_id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={  require(`../../../server/imeges/${item.image_url}`)    }
                  alt=""
                  class="w-full rounded-lg sm:w-40"
                />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                    {item.product_name}
                    </h2>
                    <p class="mt-1 text-xs text-gray-700">{item.model}</p>
                  </div>
                  <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                      <button
                        onClick={decreaseQuantity}
                        class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-indigo-900 hover:text-blue-50"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        class="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        min="1"
                        value={quantity}
                        readOnly
                      />
                      <button
                        onClick={increaseQuantity}
                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-indigo-900 hover:text-blue-50"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <div class="flex items-center space-x-4">
                    <p class="text-sm" > {item.total} $</p>
                      <button onClick={() => removeProduct(item.product_id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="flex justify-between">
              <p class="text-lg font-bold">Order Summary</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">{total}</p>
              </div>
            </div>
            <Link to="/checkout">
              <button class="mt-6 w-full rounded-md bg-indigo-900 py-1.5 font-medium text-blue-50 hover:bg-indigo-950">
                Check out
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
