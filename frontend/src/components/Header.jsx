import React from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "./Button";
export const Header = () => {
  return (
    <header className="h-16 bg-white">
      <div className="h-full w-full shadow-md flex justify-between items-center px-4 md:px-10">
        <Logo w={100} h={60} />
        <div className="hidden lg:flex items-center justify-between w-full hover:shadow  max-w-sm pl-3 border rounded-full">
          <input
            type="text"
            placeholder="Search products here..."
            className="w-full focus:outline-none  "
          />
          <div className="text-lg min-w-[50px] cursor-pointer h-8 bg-red-500 text-white  flex justify-center items-center rounded-r-full">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-4 lg:gap-7">
          <FaRegCircleUser className="text-3xl cursor-pointer" />
          <div className="relative">
            <BsCartFill className="text-2xl" />
            <div className="absolute top-[-10px] right-[-8px] bg-red-500 rounded-full text-white w-5 h-5 flex justify-center items-center">
              <p className="text-xs">0</p>
            </div>
          </div>
          <div className="">
            <Button text="Login" link="/login" />
          </div>
        </div>
      </div>
    </header>
  );
};
