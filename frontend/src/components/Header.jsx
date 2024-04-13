import React, { useState } from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../utils/SummaryApi";
import { toast } from "react-toastify";
import { setUserDetails, setUserLogout } from "../store/userSlice";
export const Header = ({ role }) => {
  const { user } = useSelector((state) => state.user);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const activeUrl = pathname.split("/").pop();
  console.log(activeUrl);
  const handleevent = async () => {
    const response = await fetch(SummaryApi.logout.url, {
      method: SummaryApi.logout.method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.success) {
      toast.success(result.message);
      dispatch(setUserLogout(null));
      navigate("/login");
    }
  };
  return (
    <header
      className={`h-16 ${
        role === "admin" ? "transparent" : "bg-white w-full shadow-md"
      }`}
    >
      <div
        className={`h-full w-full  flex justify-between items-center px-4 ${
          role === "admin" ? "px-7" : "md:px-10"
        }`}
      >
        <div className="w-full max-w-sm">
          {role === "admin" ? (
            <span className="capitalize font-bold text-lg text-slate-700">
              {activeUrl}
            </span>
          ) : (
            // <Logo w={100} h={60} />
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-xs border-2 bg-red-500 border-red-500 rounded-full p-1">
                {"{S}"}
              </span>
              <span className="font-bold text-xl font-mono"> Shopify </span>
            </div>
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
            {user?.profilePic ? (
              <img
                src={user.profilePic}
                alt=""
                className="w-12 h-12 object-cover cursor-pointer"
              />
            ) : (
              <FaRegCircleUser className="text-3xl cursor-pointer" />
            )}
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
          {role !== "admin" && (
            <div className="relative">
              <BsCartFill className="text-2xl" />
              <div className="absolute top-[-10px] right-[-8px] bg-red-500 rounded-full text-white w-5 h-5 flex justify-center items-center">
                <p className="text-xs">0</p>
              </div>
            </div>
          )}
          <div className="">
            {user ? (
              <button
                className="bg-red-500 px-4 py-1 flex items-center rounded-full text-white hover:bg-red-600 focus:outline-none"
                onClick={handleevent}
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
