const cartLength = (state = "Atanu", action) => {
  switch (action.type) {
    case "CARTLENGTH":
      return (state = action.payload);

    default:
      return state;
  }
};

export default cartLength;
