import React, { useEffect, useRef, useState } from "react";
import SummaryApi from "../utils/SummaryApi";
import displayCurrency from "../utils/displayCurrency";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const SearchProducts = ({ products, loading }) => {
  const loadingList = new Array(10).fill(null);
  const dispatch = useDispatch();
  const scrollElement = useRef();
  console.log(loading);
  const handleAddToCard = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const selectedCartItem = products?.filter((item) => item._id === id);
    dispatch(addToCart(selectedCartItem[0]));
  };
  return (
    <div className="container relative mx-auto py-6 px-4 md:px-12">
      <h1 className="text-2xl font-semibold capitalize mb-5">
        Search Results : {products?.length}
      </h1>
      <div
        className="flex items-center lg:grid lg:grid-cols-3 flex-wrap  md:gap-5 gap-4   py-2 transition-all  scrollbar-none "
        ref={scrollElement}
      >
        {loading &&
          loadingList?.map((_, index) => (
            <div
              key={index}
              className="w-full  shadow flex flex-col min-w-[270px] md:min-w-[340px] rounded  gap-3  border "
            >
              <div className=" rounded-md bg-slate-200 w-full animate-pulse p-3 h-[220px]"></div>
              <div className="p-3 md:p-4  flex flex-col gap-3">
                <h2 className="py-3 animate-pulse md:py-4 rounded-md bg-slate-200"></h2>
                <p className="py-3 animate-pulse md:py-4 rounded-md bg-slate-200"></p>
                <div className="flex gap-3 md:gap-4  w-full ">
                  <p className="w-full font-medium py-3 animate-pulse md:py-4 rounded-md bg-slate-200"></p>
                  <p className="w-full py-3 animate-pulse md:py-4 rounded-md bg-slate-200"></p>
                </div>
                <button className="mt-3 md:mt-3 py-3 animate-pulse md:py-4 rounded-md bg-slate-200  px-4 text-sm md:text-lg  md:px-4 text-white rounded-ful transition-all"></button>
              </div>
            </div>
          ))}
        {products?.map((item, index) => (
          <Link
            to={`/product-detail/${item._id}`}
            key={index}
            className="w-full max-w-[270px]  shadow flex flex-col min-w-[270px] md:min-w-[340px] rounded  gap-3  border "
          >
            <div className=" bg-slate-200 w-full  p-3 h-[220px]">
              <img
                src={item.productImages[0]}
                alt=""
                className="w-full h-full hover:scale-105 transition-all object-scale-down mix-blend-multiply"
              />
            </div>
            <div className="p-3 md:p-4  flex flex-col gap-1">
              <h2 className=" font-semibold capitalize md:text-xl text-ellipsis line-clamp-1">
                {item.productName}
              </h2>
              <p className="capitalize md:text-lg">{item.category}</p>
              <div className="flex gap-3 md:gap-4  w-full ">
                <p className="text-red-500 text-sm md:text-lg font-medium">
                  {displayCurrency(item.sellingPrice)}
                </p>
                <p className="line-through text-sm md:text-lg">
                  {displayCurrency(item.price)}
                </p>
              </div>
              <button
                onClick={(e) => handleAddToCard(e, item._id)}
                className="bg-red-500 mt-3 md:mt-3   py-2 px-4 text-sm md:text-lg  md:py-2 md:px-4 text-white rounded-full hover:bg-red-600 transition-all"
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
