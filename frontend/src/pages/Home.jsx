import React from "react";
import CategoryList from "../components/CategoryList";
import ProductBanner from "../components/ProductBanner";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

export const Home = () => {
  return (
    <div>
      <CategoryList />
      <ProductBanner />
      <HorizontalCardProduct category={"airpodes"} heading={"Top Airpodes"} />
      <VerticalCardProduct category={"mobile"} heading={"Top Mobiles"} />
      <HorizontalCardProduct category={"camera"} heading={"Popular Cameras"} />
    </div>
  );
};
