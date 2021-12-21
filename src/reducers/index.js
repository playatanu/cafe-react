import searchText from "./searchText";
import productsList from "./productList";
import cartList from "./cartList";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  searchText,
  productsList,
  cartList,
});
export default rootReducer;
