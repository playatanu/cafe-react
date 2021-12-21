const productsList = (state = [], action) => {
  switch (action.type) {
    case "SHOWPRODUCTS":
      return (state = action.payload);

    default:
      return state;
  }
};

export default productsList;
