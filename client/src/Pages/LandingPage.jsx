import React from "react";
// import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import CategoriesSection from "../Components/CategoriesSection";
import TopSellers from "../Components/TopSellers";
import Discounts from "../Components/Discounts";
// import { Footer } from "../Components/Footer";
import Explore from "../Components/Explore";
import OurServices from "../Components/OurServices";

function LandingPage({addProductToCart}) {
  return (
    <div>
      {/* <NavBar /> */}
      <Hero />
      <TopSellers addProductToCart={addProductToCart}/>
      <CategoriesSection  />
      <Explore addProductToCart={addProductToCart} />
      <Discounts />
      <OurServices />

      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
