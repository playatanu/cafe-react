import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import React from "react";

import "../pages/order.css";

const Order = () => {
  const [orderList = [], SetOrderList] = React.useState();

  const getOrders = async () => {
    const url = "http://localhost:8080/order";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        SetOrderList(json);
      });
  };

  React.useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <NavBar />

      <div className="w-[100%]">
        <div className=" my-5 px-10 py-10">
          {orderList.map((val) => {
            return (
              <>
                <div className="bg-white my-5 px-10 py-10">
                  <summary>
                    <div className="text-[12px]">id: {val._id} </div>
                    <div className="text-[12px]">
                      {val.NAME} {val.ADDRESS} {val.PHONE}
                    </div>
                    <details className="text-[12px]">
                      {val.ORDERS.map((val) => {
                        return (
                          <>
                            <div className="flex mx-2 my-2">
                              <img
                                className="mx-2 my-2"
                                alt="order"
                                className="h-8 w-8"
                                src={"http://localhost:8080/" + val.image}
                              />{" "}
                              <div className="mx-2 my-2">
                                {val.name} ₹{val.price}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </details>
                    Total ₹{val.TOTAL}
                  </summary>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Order;
