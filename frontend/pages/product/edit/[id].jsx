import React from "react";
import ProductProvider from "../../../context/Product/ProductContext";
import ProductUpdate from "../../../components/Product/ProductUpdate";
import { useRouter } from "next/router";

const ProductUpdateMain = () => {
  return (
    <ProductProvider>
      <div className="p-16 flex justify-center item-center">
        <ProductUpdate />
      </div>
    </ProductProvider>
  );
};

export default ProductUpdateMain;
