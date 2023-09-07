import React from "react";
import ProductProvider from "../context/Product/ProductContext";
import ProductIndex from "../components/Product/ProductIndex";

const Home = () => {
  return (
    <>
      <ProductProvider>
        <ProductIndex />
      </ProductProvider>
    </>
  );
};

export default Home;
