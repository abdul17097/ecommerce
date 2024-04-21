import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userSlice";
export const Header = ({ role }) => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const activeUrl = pathname.split("/").pop();
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);
  const handleLogout = async () => {
    dispatch(logoutUser());
  };
  return (
    <header
      className={`h-16 ${
        role === "admin" ? "transparent" : "bg-white w-full  shadow-md"
      }`}
    >
      <div
        className={`h-full w-full  flex justify-between container mx-auto items-center md:px-0 px-4 ${
          role === "admin" ? "px-7" : "md:px-10"
        }`}
      >
        <div className="w-full max-w-sm">
          {role === "admin" ? (
            <span className="capitalize font-bold text-lg text-slate-700">
              {activeUrl}
            </span>
          ) : (
            <Link to={"/"} className="flex items-center gap-1">
              <span className="text-white font-bold text-xs border-2 bg-red-500 border-red-500 rounded-full p-1">
                {"{S}"}
              </span>
              <span className="font-bold text-xl font-mono"> Shopify </span>
            </Link>
          )}
        </div>
        <div className="hidden lg:flex items-center justify-between w-full hover:shadow  max-w-sm pl-3 border rounded-full">
          <input
            type="text"
            placeholder="Search products here..."
            className="w-full bg-transparent focus:outline-none  "
          />
          <div className="text-lg min-w-[50px] cursor-pointer h-8 bg-red-500 text-white  flex justify-center items-center rounded-r-full">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-4 lg:gap-7">
          <div
            className="relative flex justify-center items-center"
            onClick={() => setMenuDisplay(!menuDisplay)}
          >
            {user &&
              (user?.profilePic ? (
                <img
                  src={user.profilePic}
                  alt=""
                  className="w-12 h-12 object-cover cursor-pointer"
                />
              ) : (
                <FaRegCircleUser className="text-3xl cursor-pointer" />
              ))}
            {menuDisplay && (
              <div className="absolute top-12 hover:text-slate-500 bg-white p-2 rounded transition-all duration-200 ease-in">
                <nav>
                  <Link to="/admin-panel" className="whitespace-nowrap ">
                    Admin Panel
                  </Link>
                </nav>
              </div>
            )}
          </div>
          {user && (
            <Link to={"/cart"} className="relative">
              <BsCartFill className="text-2xl" />
              <div className="absolute top-[-10px] right-[-8px] bg-red-500 rounded-full text-white w-5 h-5 flex justify-center items-center">
                <p className="text-xs">{cartItems?.length}</p>
              </div>
            </Link>
          )}
          <div className="">
            {user ? (
              <button
                className="bg-red-500 px-4 py-1 flex items-center rounded-full text-white hover:bg-red-600 focus:outline-none"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Button text="Login" link="/login" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
