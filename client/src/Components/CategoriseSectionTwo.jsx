import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mobile from "../Assets/mobile.jpg";
import laptop from "../Assets/laptop.jpg";
import pc from "../Assets/watch.jpg";
import monitor from "../Assets/monitor.jpg";
import { Link } from "react-router-dom";

function CategoriesSectionTwo({ setcategoriesSelected }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div class="flex justify-center items-center">
      <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div class="flex flex-col jusitfy-center items-center space-y-10">
          <div class="flex flex-row flex-wrap justify-center gap-8 w-full">
            <div
              data-aos="fade-up"
              class="relative group flex justify-center items-center h-72 w-72"
            >
              <img
                class="object-center object-cover h-full w-full"
                src={mobile}
                alt=""
              />
              <button
                onClick={() => {setcategoriesSelected("mobile")
                }
              
              }
                class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
              > <Link to="/Categories ">
                Mobiles</Link>
              </button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>

            <div
              data-aos="fade-up"
              class="relative group flex justify-center items-center h-72 w-72"
            >
              <img
                class="object-center object-cover h-full w-full"
                src={pc}
                alt=""
              />
              <button
                onClick={() => {setcategoriesSelected("watch")
               }}
                class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
              >
                <Link to="/Categories">
                Watch</Link>
              </button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>

            <div
              data-aos="fade-up"
              class="relative group flex justify-center items-center h-72 w-72"
            >
              <img
                class="object-center object-cover h-full w-full"
                src={laptop}
                alt=""
              />
              <button
                onClick={() =>{ setcategoriesSelected("laptop")
               }}
                class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
              >
              <Link to="/Categories">
                Laptop</Link>
              </button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>

            <div
              data-aos="fade-up"
              class="flex justify-center items-center h-72 w-72 "
            >
              <img
                class="object-center object-cover h-full w-full"
                src={monitor}
                alt="/"
              />
              <button
                onClick={() => {setcategoriesSelected("screen")
                }}
                class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
              >
                <Link to="/Categories">
                Monitors</Link>
              </button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesSectionTwo;
