import React, { useState, useEffect } from "react";
import apple from "../Assets/apple.png";
import galaxy from "../Assets/galaxyfold5.png";
import macbookk from "../Assets/macbookk.webp";
import dell from "../Assets/delll.png";
import back1 from "../Assets/back1.jpg";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const changeSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 5000);
    return () => clearTimeout(slideTimer);
  }, [currentSlide]);

  return (
    <header className="bg-white dark:bg-gray-800 ">
      <div
        className="container bg-cover flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center "
        style={{
          backgroundImage: `url(${back1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
            {[1, 2, 3, 4].map((slide) => (
              <button
                key={slide}
                onClick={() => changeSlide(slide)}
                className={`w-3 h-3 mx-2 rounded-full md:mx-0 focus:outline-none ${
                  currentSlide === slide
                    ? "bg-blue-800"
                    : "bg-gray-300 hover:bg-blue-800"
                }`}
              ></button>
            ))}
          </div>

          <div className="max-w-lg md:mx-12 md:order-2">
            {currentSlide === 1 && (
              <div>
                <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
                  Apple Watch Series 9{" "}
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  The new Neural Engine enables Siri's on-device processing and,
                  when it arrives, Double Tap. Apple's claim of the Series 9
                  being 30% faster than the Series 8 seems accurate, as when I
                  wore them back-to-back, it was just that bit snappier and
                  faster to react
                </p>
                <div className="mt-6">
                  <a
                    href="/"
                    className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-indigo-900 rounded-md md:inline hover:bg-indigo-950"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            )}
            {currentSlide === 2 && (
              <div>
                <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
                  Galaxy Z Fold5
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  While the Z Fold 5 still houses a triple camera array at the
                  back, with a 50MP wide-angle, a 12MP ultra-wide, and a 10MP
                  telephoto camera, and the battery size is still rated at
                  4,400mAh, there's now a Qualcomm Snapdragon 8 Gen 2 for Galaxy
                  under the hood.
                </p>
                <div className="mt-6">
                  <a
                    href="/"
                    className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-indigo-900 rounded-md md:inline hover:bg-indigo-950"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            )}
            {currentSlide === 3 && (
              <div>
                <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
                  MacBook Air 15”
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Experience the perfect fusion of power and portability with
                  the all-new MacBook Air 15-inch. Redesigned to meet the
                  demands of modern users, this ultra-sleek and stunning laptop
                  encompasses cutting-edge technology within a larger, more
                  immersive display.
                </p>
                <div className="mt-6">
                  <a
                    href="/"
                    className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-indigo-900 rounded-md md:inline hover:bg-indigo-950"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            )}
            {currentSlide === 4 && (
              <div>
                <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
                  Dell XPS Desktop
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Elevate your computing experience with the Dell XPS Desktop, a
                  powerhouse engineered for performance, innovation, and style.
                  Redefining what's possible, this desktop embodies cutting-edge
                  technology and sleek design, tailored to meet the demands of
                  both professionals and enthusiasts alike.
                </p>
                <div className="mt-6">
                  <a
                    href="/"
                    className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-indigo-900 rounded-md md:inline hover:bg-indigo-950"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          {currentSlide === 1 && (
            <img
              data-aos="fade-left"
              class="object-cover w-full h-full max-w-2xl rounded-md transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300"
              src={apple}
              alt=""
            />
          )}
          {currentSlide === 2 && (
            <img
              data-aos="fade-left"
              class="object-cover w-full h-full max-w-2xl rounded-md transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300"
              src={galaxy}
              alt=""
            />
          )}
          {currentSlide === 3 && (
            <img
              data-aos="fade-left"
              class="object-cover w-full h-full max-w-2xl rounded-md transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300"
              src={macbookk}
              alt=""
            />
          )}
          {currentSlide === 4 && (
            <img
              data-aos="fade-left"
              class="object-cover w-full h-full max-w-2xl rounded-md transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300"
              src={dell}
              alt=""
            />
          )}
        </div>
      </div>
      <hr />
    </header>
  );
}

export default Hero;
