import React, { useContext, useState } from "react";
import ProductProvider from "../../context/Product/ProductContext";
import NewProductCreate from "../../components/Product/NewProductCreate";

const NewProduct = () => {
  return (
    <>
      <ProductProvider>
        <div className="p-16 flex justify-center item-center">
          <NewProductCreate />
        </div>
      </ProductProvider>
    </>
  );
};

export default NewProduct;
