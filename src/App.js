import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/orders" element={<Order />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
