import React, { useEffect, useState } from "react";
import SummaryApi from "../utils/SummaryApi";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const categoryLoading = new Array(13).fill(null);
  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      const response = await fetch(SummaryApi.categoryList.url);
      const data = await response.json();
      setCategoryList(data.categoryList);
      setLoading(false);
    };
    fetchCategory();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-4 justify-between overflow-x-scroll scrollbar-none ">
        {loading &&
          categoryLoading?.map((_, index) => (
            <div
              key={index}
              className="w-16 h-16 md:w-20 md:h-20 p-4 bg-slate-200 animate-pulse rounded-full overflow-hidden"
            ></div>
          ))}
        {categoryList?.map((item, index) => (
          <Link
            to={`/category-product/${item.category}`}
            className="flex flex-col gap-1 items-center cursor-pointer"
            key={item.category}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 p-4 bg-slate-200 rounded-full overflow-hidden  ">
              <img
                src={item.productImages[0]}
                alt=""
                className="w-full h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
              />
            </div>
            <p className="capitalize md:text-base text-sm">{item?.category}</p>
          </Link>
        ))}
        {categoryList?.map((item, index) => (
          <div
            className="flex flex-col gap-1 items-center cursor-pointer"
            key={item.category}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 p-4 bg-slate-200 rounded-full overflow-hidden  ">
              <img
                src={item.productImages[0]}
                alt=""
                className="w-full h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
              />
            </div>
            <p className="capitalize md:text-base text-sm">{item?.category}</p>
          </div>
        ))}
        {categoryList?.map((item, index) => (
          <div
            className="flex flex-col gap-1 items-center cursor-pointer"
            key={item.category}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 p-4 bg-slate-200 rounded-full overflow-hidden  ">
              <img
                src={item.productImages[0]}
                alt=""
                className="w-full h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
              />
            </div>
            <p className="capitalize md:text-base text-sm">{item?.category}</p>
          </div>
        ))}
        {categoryList?.map((item, index) => (
          <div
            className="flex flex-col gap-1 items-center cursor-pointer"
            key={item.category}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 p-4 bg-slate-200 rounded-full overflow-hidden  ">
              <img
                src={item.productImages[0]}
                alt=""
                className="w-full h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
              />
            </div>
            <p className="capitalize md:text-base text-sm">{item?.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
