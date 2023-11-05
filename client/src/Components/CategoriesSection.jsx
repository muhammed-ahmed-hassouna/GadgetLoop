import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mobile from "../Assets/mobile.jpg";
import laptop from "../Assets/laptop.jpg";
import pc from "../Assets/pc.jpg";
import monitor from "../Assets/monitor.jpg";

function CategoriesSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div class="flex justify-center items-center">
      <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div class="flex flex-col jusitfy-center items-center space-y-10">
          <div class="flex flex-col justify-center items-center ">
            <h2 class="mb-1 text-3xl  text-center font-extrabold leading-tight text-indigo-950">
              Categories
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
            <div
              data-aos="fade-up"
              class="relative group flex justify-center items-center h-full w-full"
            >
              <img
                class="object-center object-cover h-full w-full"
                src={mobile}
                alt=""
              />
              <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Mobiles
              </button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>

            <div
              data-aos="fade-up"
              class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0"
            >
              <div class="relative group flex justify-center items-center h-full w-full bg-blue-600/30 backdrop-brightness-75">
                <img
                  class="object-center object-cover h-full w-full "
                  src={laptop}
                  alt="/"
                />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Laptops
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
              <div class="relative group flex justify-center items-center h-full w-full">
                <img
                  class="object-center object-cover h-full w-full"
                  src={pc}
                  alt="/"
                />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Personal Computers
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              class="relative group justify-center items-center h-full w-full lg:flex"
            >
              <img
                class="object-center object-cover h-full w-full"
                src={monitor}
                alt="/"
              />
              <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Monitors
              </button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesSection;
