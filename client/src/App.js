import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import NavBar from "./Components/NavBar";
import Login from "./Components/LoginForm";
import Register from "./Components/RegisterForm";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import ProfilePage from "./Pages/Profile";
import ForgotPassword from "./Components/ForgotPassword";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";
import { Payment } from "./Pages/Payment";
import { CartsPage } from "./Pages/CartsPage";
import OurServices from "./Components/OurServices";
import { Categories } from "./Pages/Categories";
import ProductDetails from "./Pages/ProductDetails";
import axios from "axios";
import Cookies from "js-cookie";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [isSignIn, setSignin] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [categoriesSelected, setcategoriesSelected] = useState(null);

  const addProductToCart = (product_id) => {
    const user_id = Cookies.get("user_id");

    axios
      .post("http://localhost:3001/addcart", {
        user_id: user_id,
        product_id: product_id,
      })
      .then((response) => {
        console.log("I am done", response);
        Swal.fire({
          title: "Successfully Added to cart!",
          text: "Do you want to continue?",
          icon: "success",
          confirmButtonText: "Close",
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        console.error("Error response:", error.response);
       
      });
  };

  return (
    <>
      <BrowserRouter>
        <NavBar
          setSignin={setSignin}
          setAdmin={setAdmin}
          isAdmin={isAdmin}
          isSignIn={isSignIn}
        />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                setcategoriesSelected={setcategoriesSelected}
                addProductToCart={addProductToCart}
              />
            }
          />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/Login"
            element={<Login setSignin={setSignin} setAdmin={setAdmin} />}
          />
          <Route
            path="/Home"
            element={
              <LandingPage
                setcategoriesSelected={setcategoriesSelected}
                addProductToCart={addProductToCart}
              />
            }
          />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/Categories"
            element={
              <Categories
                categoriesSelected={categoriesSelected}
                setcategoriesSelected={setcategoriesSelected}
                addProductToCart={addProductToCart}
              />
            }
          />
          {isSignIn ? (
            <Route path="/ProfilePage" element={<ProfilePage />} />
          ) : (
            <Route path="/ProfilePage" element={<NotFound />} />
          )}
        
          <Route path="/cart" element={<CartsPage />} />

          {isAdmin && isSignIn ? (
            <Route path="/Dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/Dashboard" element={<NotFound />} />
          )}
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/checkout" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/service" element={<OurServices />} />
          <Route
            path="/ProductDetails/:id"
            element={<ProductDetails addProductToCart={addProductToCart} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
