import React from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header role={"admin"} />
        <main className="p-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
