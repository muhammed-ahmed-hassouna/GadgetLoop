import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = ({addProductToCart}) => {
  const { id } = useParams();
  const [prodect, setProdect] = useState({});
  const [count, setCount] = useState(0);
  const handleCountChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      setCount(newValue);
    }
  };
  const [img1 ,setimage1] = useState("logo")
  const [img2 ,setimage2] = useState("logo")
  const [img3 ,setimage3] = useState("logo")
  const [mainImage, setMainImage] = useState({
    "imgUrl": "",
    "numberOfImage": 0,
  });


   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://localhost:3001/protduc/getid?id=34`);
        setProdect(response.data[0]);
        setimage1(require(`../../../server/imeges/${prodect.image_url2}`));
        setimage2(require(`../../../server/imeges/${prodect.image_url3}`));
        setimage3(require(`../../../server/imeges/${prodect.image_url4}`));
        if(mainImage.numberOfImage==0 && (prodect.image_url2 !== undefined) ){
          console.log("osama")
          setMainImage({
            "imgUrl": require(`../../../server/imeges/${prodect.image_url2}`),
            "numberOfImage": "1",
          })
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error response:", error.response);
      }
    };
       fetchData()
  });





  return (
    <div>
      <section className="">
        <div className="container px-4">
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            {/* imags */}
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                {/* main img */}
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full max-w-full object-cover"
                   src={mainImage.imgUrl}
                      alt=""
                    />
                  </div>
                </div>
                {/* end main image */}
                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col">
                    <button
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        !(mainImage.numberOfImage == 1)
                          ? "border-transparent opacity-30 hover:opacity-100 scale-90 "
                          : "border-black"
                      } text-center`}
                      onClick={() => {
                        setMainImage({
                          "imgUrl": img1,
                          "numberOfImage": "1",
                        });
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={img1}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        !(mainImage.numberOfImage == 2)
                          ? "border-transparent opacity-30 hover:opacity-100 scale-90"
                          : "border-black"
                      } text-center`}
                      onClick={() => {
                        setMainImage({
                          "imgUrl": img2,
                          "numberOfImage": "2",
                        });
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={img2}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        !(mainImage.numberOfImage == 3)
                          ? "border-transparent opacity-30 hover:opacity-100 scale-90"
                          : "border-black"
                      } text-center `}
                      onClick={() => {
                        setMainImage({
                          "imgUrl": img3,
                          "numberOfImage": "3",
                        });
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={img3}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* end images */}

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <div class="md:flex-1 px-4">
                <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  {prodect.product_name}
                </h2>
                <p class="text-gray-500 text-sm">
                  Model{" "}
                  <a href="#" class="text-indigo-600 hover:underline">
                    {prodect.model}
                  </a>
                </p>
                <div class="flex items-center space-x-4 my-4">
                  <div>
                    <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span class="text-indigo-400 mr-1 mt-1">$</span>
                      <span class="font-bold text-indigo-600 text-3xl">
                        {prodect.price}
                      </span>
                    </div>
                  </div>
                  {/* <div class="flex-1">
                    <p class="text-green-500 text-xl font-semibold">Save 12%</p>
                    <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                  </div> */}
                </div>
                <p class="text-gray-500">{prodect.descreption}</p>

                <div class="flex py-4 space-x-4">
                  {/* Qty */}
                  {/* <div className="custom-number-input h-10 w-32">
                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        onClick={() => {
                          setCount(count - 1);
                        }}
                      >
                        <span className="m-auto text-2xl font-thin">−</span>
                      </button>
                      <input
                        type="number"
                        className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
                        name="custom-input-number"
                        value={count}
                        onChange={handleCountChange}
                        min="0"
                      />
                      <button
                        data-action="increment"
                        className="bg-gray-300 text-gray-600 hover-text-gray-700 hover-bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div> */}
                  {/* End Qty*/}

                  <button
                    type="button"
                    onClick={() => {addProductToCart(prodect.id)}}
                    class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Description section */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
