import { Link } from "react-router-dom";
import React from "react";
const NavBar = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart"> CART</Link>
      </div>
    </>
  );
};

export default NavBar;
