import moment from "moment";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Button from "../components/Button";
import { UploadProduct } from "../components/UploadProduct";

const AllProducts = () => {
  const [productDialog, setProductDialog] = useState(false);
  console.log(true);
  return (
    <div className="w-full border flex flex-col relative h-full min-h-[80vh] ">
      <div className="ml-auto p-3">
        <button
          onClick={() => setProductDialog(true)}
          className="bg-red-500 px-10 text-lg hover:scale-105 transition-all duration-100 py-2 flex items-center rounded-full text-white hover:bg-red-600 focus:outline-none"
        >
          Upload Product
        </button>
      </div>
      <table className="w-full userTable">
        <thead className="">
          <th>Sr.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created At</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>111</td>
            <td>111</td>
            <td>111</td>
            <td>111</td>

            <td>{moment().format("l ")}</td>
            <td className="">
              <button className="">
                <CiEdit className="text-4xl rounded-full p-1 cursor-pointer transition-all duration-100 ease-in hover:bg-green-500 hover:text-white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <UploadProduct
        onClose={() => setProductDialog(false)}
        productDialog={productDialog}
      />
    </div>
  );
};

export default AllProducts;
