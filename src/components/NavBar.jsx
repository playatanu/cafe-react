import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cartList);

  return (
    <>
      <div className="sticky top-0 flex py-8 h-20 space-x-4 bg-white justify-between align-baseline">
        <div className="px-10">
          <Link to="/">Online Cafe</Link>
        </div>

        <div className="flex space-x-4 px-10">
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/cart">
            <div className="flex item-center rounded bg-amber-500 text-white mx-2 px-5 py-1 ">
              <i className="fa fa-shopping-cart"></i>
              <div className="px-2">{cart.length} </div>{" "}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
