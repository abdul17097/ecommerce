import React, { useEffect, useRef, useState } from "react";
import SummaryApi from "../utils/SummaryApi";
import displayCurrency from "../utils/displayCurrency";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
const HorizontalCardProduct = ({ category, heading }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingList = new Array(10).fill(null);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
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
  console.log(cartItems);

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
        className="flex items-center  w-full scroll-smooth gap-1 md:gap-5 overflow-x-scroll h-74 py-2 transition-all  scrollbar-none "
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
              className="w-full  shadow flex min-w-[280px] md:min-w-[380px] rounded  h-36 md:h-[200px] border "
            >
              <div className="w-[170px] p-2 bg-slate-200 animate-pulse"></div>
              <div className="p-3 md:px-4 md:py-2 w-[calc(280px-120px)] border md:w-[calc(400px-170px)] md:gap-3 flex flex-col gap-1">
                <h2 className="bg-slate-200 py-3 md:py-5 rounded-md animate-pulse w-full"></h2>
                <p className="py-3 md:py-5 w-full bg-slate-200 animate-pulse"></p>
                <div className="flex gap-2 md:gap-4  w-full items-center ">
                  <p className="py-3 bg-slate-200  w-full animate-pulse"></p>
                  <p className="w-full bg-slate-200 py-3 animate-pulse"></p>
                </div>
                <div className="w-full m-auto">
                  <button className="  bg-slate-200 py-4 w-full px-4 animate-pulse md:px-5  md:py-5 text-white rounded-full transition-all"></button>
                </div>
              </div>
            </div>
          ))}
        {product?.map((item, index) => (
          <Link
            to={`/product-detail/${item._id}`}
            key={index}
            className="w-full shadow flex min-w-[280px] md:min-w-[380px] rounded h-36 md:h-[200px] border"
          >
            <div className="w-[170px] p-2 bg-slate-200">
              <img
                src={item.productImages[0]}
                alt=""
                className="w-full h-full hover:scale-110 transition-all object-scale-down mix-blend-multiply"
              />
            </div>
            <div className="p-3 md:px-4 md:py-2 w-[calc(280px-120px)] md:w-[calc(320px-170px)] md:gap-3  flex flex-col gap-1">
              <h2 className=" font-semibold md:text-xl text-ellipsis line-clamp-1">
                {item.productName}
              </h2>
              <p className="capitalize md:text-xl">{item.category}</p>
              <div className="flex gap-2 md:gap-4  w-full items-center ">
                <p className="text-red-500 text-xs md:text-lg font-medium">
                  {displayCurrency(item.sellingPrice)}
                </p>
                <p className="line-through text-xs md:text-md">
                  {displayCurrency(item.price)}
                </p>
              </div>
              <button
                onClick={(e) => handleAddToCard(e, item._id)}
                className="bg-red-500 md:mt-3 md:w-[170px] py-2 px-4 text-sm md:text-lg text-nowrap md:py-1 md:px-8 text-white rounded-full hover:bg-red-600 transition-all"
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

export default HorizontalCardProduct;
