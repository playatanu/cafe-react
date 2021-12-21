import "../components/productCard.css";

import { useDispatch, useSelector } from "react-redux";
import { cartList } from "../actions";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const cartlist = useSelector((state) => state.cartList);

  const addToCart = () => {
    cartlist.push({
      id: props.key,
      name: props.name,
      price: props.price,
      image: props.image,
    });
    console.log(cartlist);

    dispatch(cartList(cartlist));
  };

  return (
    <>
      <div className="container">
        <img
          src={
            props.image == ""
              ? "https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
              : "http://localhost:8080/" + props.image
          }
        />

        <div className="Container-right">
          <p className="productName">{props.name}</p>
          <p className="productDec">₹{props.price}</p>
          <div onClick={addToCart} className="cartButton">
            ADD TO CART
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
