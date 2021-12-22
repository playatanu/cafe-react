import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cartList);

  return (
    <>
      <div className="flex py-8 h-20 space-x-4 bg-white justify-between align-baseline">
        <div className="px-10">
          <Link to="/">Online Cafe</Link>
        </div>

        <div className="flex space-x-4 px-10">
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/cart">
            <i className="fa fa-shopping-cart" aria-hidden="true">
              {cart.length}
            </i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
