import { useDispatch, useSelector } from "react-redux";
import { cartList, cartLength } from "../actions";
import React from "react";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartList);

  const addToCart = () => {
    cart.push({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
    });
    dispatch(cartList(cart));
    dispatch(cartLength(cart.length));
  };

  return (
    <>
      <div className="bg-white w-40 rounded mx-10 my-10">
        <img
          className="w-40 h-24 rounded"
          alt="product"
          src={
            props.image === ""
              ? "https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
              : "http://localhost:8080/" + props.image
          }
        />

        <div className="mx-2">
          <p className="">{props.name}</p>
          <p className="">₹{props.price}</p>
          <div
            onClick={addToCart}
            className="cursor-pointer  hover:bg-black  text-center rounded py-2 my-2 text-[10px] font-bold text-white bg-amber-500"
          >
            ADD TO CAR
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
