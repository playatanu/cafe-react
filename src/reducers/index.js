import searchText from "./searchText";
import productsList from "./productList";
import cartList from "./cartList";
import cartLength from "./cartLength";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  searchText,
  productsList,
  cartList,
  cartLength,
});
export default rootReducer;
