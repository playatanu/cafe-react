import "./home.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import SerachBox from "../components/SearchBox";
import { productsList } from "../actions";

const Home = () => {
  const products = useSelector((state) => state.productsList);
  const searchText = useSelector((state) => state.searchText);
  const despatch = useDispatch();
  const cart = useSelector((state) => state.cartList);

  const getProducts = async () => {
    const url = "http://localhost:8080/products";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        despatch(productsList(json));
        console.log(json);
      });
  };

  React.useEffect(() => {
    getProducts();
  });

  return (
    <>
      <SerachBox />
      {cart.length}
      <div className="Product">
        {products
          .filter((val) => {
            if (searchText == "") {
              return val;
            } else if (
              val.NAME.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <ProductCard
                key={val._id}
                dec={val.DEC}
                price={val.PRICE}
                name={val.NAME}
                image={val.IMAGE}
              />
            );
          })}
      </div>
    </>
  );
};

export default Home;
