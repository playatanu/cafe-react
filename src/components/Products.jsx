import "../components/products.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { productsList } from "../actions";

const Products = () => {
  const products = useSelector((state) => state.productsList);
  const searchText = useSelector((state) => state.searchText);

  const despatch = useDispatch();

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
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="Product">
          {products
            .filter((val) => {
              if (searchText === "") {
                return val;
              } else if (
                val.NAME.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              console.log();
              return (
                <ProductCard
                  key={val._id.toString()}
                  id={val._id.toString()}
                  dec={val.DEC}
                  price={val.PRICE}
                  name={val.NAME}
                  image={val.IMAGE}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Products;
