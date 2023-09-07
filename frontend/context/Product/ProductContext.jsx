import React, { createContext, useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useRouter } from "next/router";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
  const apip = useAxiosPrivate();
  const [products, setProducts] = useState();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    apip
      .get("/api/product/all")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });

    if (id) {
      SingleProductPostAdmin();
    }
  }, []);

  const createNewProduct = (data) => {
    setLoading(true);
    apip
      .post("/api/product/new", {
        ...data,
      })
      .then((res) => {
        setLoading(false);
        if (res.data.status) {
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  };

  const SingleProductPostAdmin = async () => {
    setLoading(true);
    await apip
      .get(`/api/product/s/${id}`)
      .then((res) => {
        setProduct(res.data.product);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  };
  const EditProduct = async (data) => {
    setLoading(true);

    await apip
      .post(`/api/product/update/${id}`, {
        ...data,
      })
      .then((res) => {
        setLoading(false);
        console.log({ res });
        if (res.data.status) {
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  };

  const deleteProduct = async (id) => {
    console.log("working on context", id);
    apip
      .post(`/api/product/delete/${id}`)
      .then((res) => {
        setLoading(false);
        console.log("res", res);
        if (res.data.status) {
          router.reload(window.location.pathname);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        loading,
        error,
        createNewProduct,
        EditProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
