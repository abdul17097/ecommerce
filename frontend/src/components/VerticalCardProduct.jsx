import React, { useEffect, useRef, useState } from "react";
import SummaryApi from "../utils/SummaryApi";
import displayCurrency from "../utils/displayCurrency";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
const VerticalCardProduct = ({ category, heading }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingList = new Array(10).fill(null);
  const dispatch = useDispatch();
  const scrollElement = useRef();
  useEffect(() => {
    const fectchCategoryProduct = async () => {
      setLoading(true);
      const response = await fetch(SummaryApi.categoryProduct.url, {
        method: SummaryApi.categoryProduct.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category }),
      });
      const apiResponse = await response.json();
      setProduct(apiResponse.product);
      setLoading(false);
    };

    fectchCategoryProduct();
  }, []);
  const nextBtn = () => {
    scrollElement.current.scrollLeft += 300;
  };
  const previousBtn = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  const handleAddToCard = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const selectedCartItem = product?.filter((item) => item._id === id);
    dispatch(addToCart(selectedCartItem));
  };

  return (
    <div className="container relative mx-auto py-6 px-4">
      <h1 className="text-2xl font-semibold capitalize mb-5">{heading}</h1>
      <div
        className="flex items-center  w-full scroll-smooth md:gap-5 gap-4 overflow-x-scroll  py-2 transition-all  scrollbar-none "
        ref={scrollElement}
      >
        <button
          onClick={previousBtn}
          className="bg-white absolute left-0 p-2 md:flex hidden rounded-full z-[999]"
        >
          <GrPrevious className="text-2xl" />
        </button>
        <button
          onClick={nextBtn}
          className="bg-white absolute right-0 p-2 md:flex hidden rounded-full z-[999]"
        >
          <GrNext className="text-2xl" />
        </button>
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
        {product?.map((item, index) => (
          <Link
            to={`/product-detail/${item._id}`}
            key={index}
            className="w-full  shadow flex flex-col min-w-[270px] md:min-w-[340px] rounded  gap-3  border "
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

export default VerticalCardProduct;
