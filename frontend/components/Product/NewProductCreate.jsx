import React, { useState, useContext } from "react";
import { ProductContext } from "../../context/Product/ProductContext";

const NewProductCreate = () => {
  const { createNewProduct } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = await {
      name,
      description,
      sku,
      price,
      quantity,
    };

    console.log(product);

    await createNewProduct({ ...product });
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="w-full max-w-lg">
        <div className="w-full px-3 mb-6 ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Product Name"
          />
        </div>

        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="description"
            placeholder="Product Description"
          />
        </div>

        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="sku"
          >
            SKU
          </label>
          <input
            onChange={(e) => setSku(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="sku"
            type="text"
            placeholder="ex. 10215m"
          />
          <p className="text-gray-600 text-xs italic">
            SKU stands for Stock Keeping Unit. It's a unique code that retailers
            use to identify and track their inventory.
          </p>
        </div>

        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="price"
            type="number"
            placeholder="ex. 10000"
          />
        </div>

        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="quantity"
          >
            Quantity
          </label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="quantity"
            type="number"
            placeholder="ex. 10"
          />
        </div>

        <div>
          <button className="w-full bg-teal-500 hover:bg-teal-700 text-white text-center font-bold py-2 px-4 border border-teal-700 rounded">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default NewProductCreate;
