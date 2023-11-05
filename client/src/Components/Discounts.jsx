import React, { useEffect, useState } from "react";
import offer1 from "../Assets/offer1.jpg";
import offer2 from "../Assets/offer2.jpg";

function Discounts() {
  const [cont, setCont] = useState(0);

  useEffect(() => {
    const xx = setInterval(() => {
      setCont((prevState) => (prevState === 0 ? 1 : 0));
    }, 8000);

    return () => {
      clearInterval(xx);
    };
  }, []);

  const switchSlide = () => {
    setCont((prevState) => (prevState === 0 ? 1 : 0));
  };
  return (
    <>
      <div className="sliderAx h-300">
        <div
          className="container mx-auto "
          style={{ display: cont === 0 ? "block" : "none" }}
        >
          <div
            className="bg-cover bg-center py-24 px-10 object-fill"
            style={{
              backgroundImage: `url(${offer1})`,
            }}
          >
            <div className="md:w-1/2">
              <p className="font-bold text-sm uppercase">Sales</p>
              <p className="text-3xl font-bold">
                Avail yourself of a 50% discount on our laptop collection!{" "}
              </p>
              <p className="text-xl mb-10 leading-none"></p>
              <a
                href="/"
                className="bg-indigo-900 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
              >
                Explore Laptops
              </a>
            </div>
          </div>
          <br />
        </div>

        <div
          className="container mx-auto "
          style={{ display: cont === 1 ? "block" : "none" }}
        >
          <div
            className="bg-cover bg-top   py-28 px-10 object-fill"
            style={{
              backgroundImage: `url(${offer2})`,
            }}
          >
            <p className="font-bold text-sm uppercase">Sales</p>
            <p className="text-3xl font-bold">
              Huge savings alert: Get 70% off on all smart TVs - Don't miss out!
            </p>
            <p className="text-2xl mb-10 leading-none"></p>
            <a
              href="/"
              className="bg-indigo-900 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
            >
              Explore Tv's
            </a>
          </div>
          <br />
        </div>

        <div className="flex justify-between w-12 mx-auto pb-2">
          <button
            onClick={switchSlide}
            className={`bg-indigo-900 rounded-full w-4 ${
              cont === 0 ? "pb-2" : "p-2"
            }`}
          ></button>
          <button
            onClick={switchSlide}
            className={`bg-indigo-900 rounded-full w-4 ${
              cont === 1 ? "pb-2" : "p-2"
            }`}
          ></button>
        </div>
      </div>
    </>
  );
}

export default Discounts;
