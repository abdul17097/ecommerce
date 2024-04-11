import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import SummaryApi from "./utils/SummaryApi";

const App = () => {
  const fetchData = async () => {
    const response = await fetch(SummaryApi.userDetails.url, {
      method: SummaryApi.userDetails.method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-170px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
