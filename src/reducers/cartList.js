const cartList = (state = [], action) => {
  switch (action.type) {
    case "CARTLIST":
      return (state = action.payload);

    default:
      return state;
  }
};

export default cartList;
