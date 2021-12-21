import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cartList);

  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    total = total + parseInt(cart[i].price);
  }
  return (
    <>
      <h1>Cart Page </h1>
      <p>Total Item {cart.length}</p>

      {cart.map((val) => {
        return (
          <>
            <p>
              {val.name} ₹{val.price}
            </p>
          </>
        );
      })}

      <p>Total Price: ₹{total}</p>
    </>
  );
};

export default Cart;
