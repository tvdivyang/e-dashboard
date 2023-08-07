import React from "react";
import Header from "../component/Header";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import AddProducts from "../pages/AddProducts";
// import UpdateProducts from "../pages/UpdateProducts";
import SignUp from "../pages/SignUp";
import Private from "../component/Private";
import Footer from "../component/Footer";
import Profile from "../pages/Profile";
import Login from "../component/Login";
import UpdateProducts from "../pages/UpdateProducts";

function MainRouter() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route element={<Private />}>
          <Route path="/" element={<Products />}></Route>
          <Route path="/add" element={<AddProducts />}></Route>
          <Route path="/update/:id" element={<UpdateProducts />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default MainRouter;
