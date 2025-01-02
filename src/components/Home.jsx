import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import Navigation from "./Navigation";
import axios from "../utils/Axios";
const Home = () => {
  const [products] = useContext(ProductContext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilteredProducts] = useState(null);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category === "undefined")
      setFilteredProducts(products);
    if (category != "undefined") getProductCategory();
  }, [products, category]);

  console.log(filteredProducts);

  return products ? (
    <>
      <Navigation />
      <div className="product_page w-full h-full bg-zinc-100 p-4 grid overflow-x-hidden">
        {filteredProducts &&
          filteredProducts.map((prod, i) => {
            return (
              <Link
                key={prod.id}
                to={`/details/${prod.id}`}
                className="card p-4 rounded-xl bg-zinc-200 flex flex-col items-center justify-between hover:border-zinc-300 hover:border-x hover:border-y transition-all duration-500"
              >
                <div
                  className="h-[71%] w-full rounded-lg bg-zinc-400"
                  style={{
                    background: `url(${prod.image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    mixBlendMode: "darken",
                  }}
                ></div>
                <div className="rounded px-3">
                  <h1 className="block text-xs text-balance text-center font-semibold text-zinc-700">
                    {prod.title}
                  </h1>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
