import React from "react";
// import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import CategoriesSection from "../Components/CategoriesSection";
import TopSellers from "../Components/TopSellers";
import Discounts from "../Components/Discounts";
// import { Footer } from "../Components/Footer";
import Explore from "../Components/Explore";
import OurServices from "../Components/OurServices";

function LandingPage({addProductToCart , setcategoriesSelected }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <div>
      {/* <NavBar /> */}
      <Hero />
      <TopSellers addProductToCart={addProductToCart}/>
      <CategoriesSection setcategoriesSelected={setcategoriesSelected}  />
      <Explore addProductToCart={addProductToCart} />
      <Discounts />
      <OurServices />
      
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

      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
