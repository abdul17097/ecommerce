import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import displayCurrency from "../utils/displayCurrency";

const AdminProductCard = ({ product }) => {
  const [productDialog, setProductDialog] = useState(false);
  return (
    <div className="relative w-56 h-fit  overflow-hidden border bg-white  flex flex-col items-center pb-3 rounded-lg cursor-pointer">
      <img
        src={product.productImages[0]}
        alt=""
        className=" "
        w={120}
        h={120}
      />
      <div className="flex justify-between items-center w-full pt-3 px-3 ">
        <p className="font-semibold">{product.productName}</p>
        <span className="">{displayCurrency(product.price)} </span>
      </div>
      <span
        onClick={() => setProductDialog(true)}
        className="absolute p-1 m-1 hover:bg-red-500 bg-white hover:text-white transition-all duration-100 ease-in shadow-lg rounded-full top-0 right-0"
      >
        <MdOutlineEdit className="text-xl" />
      </span>
      {productDialog && (
        <AdminEditProduct
          product={product}
          onClose={() => setProductDialog(false)}
          productDialog={productDialog}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
