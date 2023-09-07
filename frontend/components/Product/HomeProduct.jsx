import React, { useContext } from "react";
import { ProductContext } from "../../context/Product/ProductContext";
import Link from "next/link";

const HomeProduct = ({ product }) => {
  const { deleteProduct } = useContext(ProductContext);
  return (
    <div
      key={product.id}
      className="max-w-sm bg-white border border-teal-200 rounded-lg shadow dark:bg-teal-800 dark:border-teal-700"
    >
      <a href="#">
        <img
          className="rounded-t-lg h-64 w-full"
          src="https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {product.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-white dark:text-white">
          {product.description}
        </p>
        <div className="w-full flex flex-row gap-2">
          <button
            onClick={() => deleteProduct(product.id)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Delete
          </button>
          <Link
            href={`/product/edit/${product.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
