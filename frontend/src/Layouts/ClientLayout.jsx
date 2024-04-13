import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-130px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
