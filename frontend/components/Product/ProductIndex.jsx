import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/Product/ProductContext";
import HomeProduct from "./HomeProduct";
import Link from "next/link";

const ProductIndex = () => {
  const { products } = useContext(ProductContext);
  const [search, setSearch] = useState("");

  return (
    <div className="p-8 w-full flex flex-col">
      <div className="w-full flex flex-row mb-8">
        <div className="w-full">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                class="w-2/3 block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search product name..."
              />
            </div>
          </form>
        </div>
        <div className="w-full flex justify-end ">
          <Link
            href="/product/new"
            className=" bg-teal-500 hover:bg-teal-700 text-white text-center flex items-center justify-center font-bold py-2 px-4 border border-teal-700 rounded"
          >
            Add New Product
          </Link>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 gap-2">
        {products &&
          products
            .filter((product) => {
              return (
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.description.toLowerCase().includes(search.toLowerCase())
              );
            })
            .map((product) => <HomeProduct product={product} />)}
      </div>
    </div>
  );
};

export default ProductIndex;
