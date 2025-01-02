import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loading from "./Loading";

const Details = () => {

  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div
      className="w-4/5 h-3/4 relative bg-zinc-100 border-zinc-200 border-x border-y m-auto p-3 select-none flex flex-col md:flex-row sm:flex-row items-center gap-6 shadow-md rounded-lg overflow-auto"
    >
      <button
        className="absolute top-1 right-2 text-gray-500 hover:scale-95 transition-transform font-bold text-lg p-3"
        onClick={() => navigate(-1)}
      >
        ✕
      </button>
      {/* Image Section */}
      <div className="bg-gray-200 w-full md:w-2/5 h-full flex items-center justify-center rounded-md p-5">
        <img
          src={product.image}
          alt="Product"
          className="h-full object-contain rounded mix-blend-multiply"
        />
      </div>

      {/* Content Section */}
      <div className="content w-full md:w-3/5 flex flex-col gap-3 text-center md:text-left">
        <h1 className="text-2xl font-bold text-left text-gray-800">
          {product.title}
        </h1>
        <span className="text-lg font-semibold text-left capitalize text-gray-600">
          {product.category}
        </span>
        <span className="text-lg font-semibold text-left text-green-600">
          ${product.price}
        </span>
        <p className="text-sm text-gray-700 w-auto text-justify tracking-tighter flex flex-wrap">
          Description: {product.description}
        </p>

        <div className="flex gap-2 items-center">
          <span className="text-md text-gray-800">
            Product ID: FsA{product.id}1
          </span>
          <div className="divider h-3 rounded w-px bg-zinc-400"></div>
          <span className="text-md text-gray-800">
            Ratings: {product.rating.rate}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
