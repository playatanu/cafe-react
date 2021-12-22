import React from "react";
import NavBar from "../components/NavBar";
import SerachBox from "../components/SearchBox";
import Products from "../components/Products";
import { useSelector } from "react-redux";
const Home = () => {
  const cart = useSelector((state) => state.cartList.length);
  return (
    <>
      <NavBar />
      <SerachBox />
      <Products />
    </>
  );
};

export default Home;
