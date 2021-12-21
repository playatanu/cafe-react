export const searchText = (value) => {
  return {
    type: "SEARCH",
    payload: value,
  };
};

export const productsList = (value) => {
  return {
    type: "SHOWPRODUCTS",
    payload: value,
  };
};

export const cartList = (value) => {
  return {
    type: "SHOWCART",
    payload: value,
  };
};
