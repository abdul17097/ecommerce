import React, { useEffect, useState } from "react";
import { UploadProduct } from "../components/UploadProduct";
import SummaryApi from "../utils/SummaryApi";
import AdminProductCard from "../components/AdminProductCard";
import { fetchProduct } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const [productDialog, setProductDialog] = useState(false);
  // const [products, setAllProducts] = useState([]);
  const { products } = useSelector((state) => state.product);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <div className="w-full flex flex-col relative h-full min-h-[80vh] ">
      <div className="ml-auto p-3 bg-white w-full mb-3">
        <button
          onClick={() => setProductDialog(true)}
          className="px-10 text-lg hover:bg-red-500 ml-auto hover:text-white  transition-all duration-100 py-2 flex items-center rounded-full border-2 border-red-500 focus:outline-none text-red-500 font-semibold"
        >
          Upload Product
        </button>
      </div>
      <div className="flex justify-between flex-wrap gap-y-4 overflow-y-scroll h-[72vh]">
        {products?.map((product, index) => (
          <AdminProductCard
            product={product}
            key={index}
            productDialog={productDialog}
          />
        ))}
      </div>
      {productDialog && (
        <UploadProduct onClose={() => setProductDialog(false)} />
      )}
    </div>
  );
};

export default AllProducts;
