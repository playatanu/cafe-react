const cartList = (state = [], action) => {
  switch (action.type) {
    case "CART":
      return (state = action.payload);

    default:
      return state;
  }
};

export default cartList;
