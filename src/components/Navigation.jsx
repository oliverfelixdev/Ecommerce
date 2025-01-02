import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const Navigation = () => {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  distinct_category = [...new Set(distinct_category)];
  console.log(distinct_category);

  return (
    <nav className="w-full shadow-lg p-3 bg-transparent">
      <div className="nav-wrap w-full bg-white flex border-slate-200 border-x border-y flex-wrap rounded-lg items-center justify-between md:justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <a
            href="/create"
            className="text-sm px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium rounded-lg shadow-md"
          >
            Add New Products
          </a>

          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-lime-400 text-white rounded-md shadow-md"
          >
            <AiOutlineHome className="text-lg" />
            <span className="text-sm font-medium capitalize">Index</span>
          </Link>
        </div>

        <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-3">
          <div className="flex flex-wrap gap-3">
            {distinct_category.map((categ, index) => (
              <NavLink
                key={index}
                to={`/?category=${categ}`}
                className="text-sm font-medium capitalize text-zinc-700 bg-gray-100 px-3 py-1.5 rounded-md hover:scale-105 transition-all"
              >
                {categ}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
