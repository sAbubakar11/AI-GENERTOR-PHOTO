import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products";
import Services from "./Components/Services";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} name="home" exact />
        <Route path="/products" element={<Products />} name="products" exact />
        <Route path="/Services" element={<Services />} name="services" exact />
        <Route path="/signUp" element={<SignUp />} name="singUP" exact />
      </Routes>
    </>
  );
}

export default App;
