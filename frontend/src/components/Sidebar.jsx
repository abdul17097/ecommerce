import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="w-full flex flex-col bg-white h-[100vh] max-w-60 pt-4">
      <div className="flex flex-col items-center  w-full">
        <div className="flex flex-col items-center gap-8">
          {/* <Logo w={100} h={60} /> */}
          <div className="flex items-center gap-1">
            <span className="text-white font-bold text-xs border-2 bg-red-500 border-red-500 rounded-full p-1">
              {"{S}"}
            </span>
            <span className="font-bold text-xl font-mono"> Shopify </span>
          </div>

          <img
            src={user?.profilePic}
            alt=""
            className="w-14 h-14 rounded-full border-2 mb-3"
          />
        </div>
        <span className="font-bold text-sm text-slate-500">{user?.name}</span>
        <span className="text-xs text-slate-600">{user?.role}</span>
      </div>
      <ul className="pl-5 py-5 flex flex-col gap-3">
        <li>
          <Link to={"/admin-panel/users"}>Users</Link>
        </li>
        <li>
          <Link to={"/admin-panel/products"}>Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
