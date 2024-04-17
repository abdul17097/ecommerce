import React, { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import SummaryApi from "./utils/SummaryApi";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import ClientLayout from "./Layouts/ClientLayout";
import AdminLayout from "./Layouts/AdminLayout";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import AllProducts from "./pages/AllProducts";
import AllUsers from "./pages/AllUsers";

const App = () => {
  return (
    <>
      <Routes>
        {/* Client side Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        {/* Admin side Routes */}
        <Route path="/admin-panel" element={<AdminLayout />}>
          <Route path="/admin-panel/users" element={<AllUsers />} />
          <Route path="/admin-panel/products" element={<AllProducts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
