import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import React from "react";
import "../pages/cart.css";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartList);
  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    total = total + parseInt(cart[i].price);
    console.log(cart[i].price);
  }

  var currentdate = new Date();
  var datetime =
    "Last Sync: " +
    currentdate.getDay() +
    "/" +
    currentdate.getMonth() +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  const [address, SetAddress] = React.useState();
  const [phone, SetPhone] = React.useState();

  const ph = (e) => {
    SetPhone(e.target.value);
  };

  const add = (e) => {
    SetAddress(e.target.value);
  };

  const order = () => {
    fetch("http://localhost:8080/order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        ORDERS: cart,
        USER_ID: "61c09f6a2a15edfd742e37d9",
        PAY_ID: "61c09f6a2a15edfd742e37d9",
        DATE: datetime,
        ADDRESS: address,
        PHONE: phone,
        NAME: "Atanu Debnath",
        TOTAL: total,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });

    navigate("/orders");
  };

  return (
    <>
      <NavBar />
      <div className="grid justify-center ">
        <div className="bg-white my-20 px-10 py-10 rounded w-96">
          {cart.map((val) => {
            return (
              <>
                <div className="flex py-2 space-x-3 ">
                  <img
                    alt="cart"
                    className="w-10 h-10"
                    src={"http://localhost:8080/" + val.image}
                  />
                  <p>
                    {val.name} ₹{val.price}
                  </p>
                  <br />
                </div>
              </>
            );
          })}
          <p className="text-[12px]">Total Item {cart.length}</p>
          <div className="text-[18px]"> Total Price ₹{total}</div>
          <div className=" my-4 py-2  rounded  grid justify-left ">
            {" "}
            <p className="text-[12px]">Phone</p>
            <input type="text" className="inputx" onChange={ph} />
            <p className="text-[12px]">Address</p>
            <input type="text" className="inputx" onChange={add} />
          </div>
          Home
          <div
            onClick={order}
            className="cursor-pointer hover:bg-black focus-within:shadow-lg  my-4 py-2 bg-amber-500 rounded text-white grid justify-center "
          >
            Buy
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
