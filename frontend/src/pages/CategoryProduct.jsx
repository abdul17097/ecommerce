import React from "react";
import { useParams } from "react-router-dom";

const CategoryProduct = () => {
  const parms = useParams();
  return <div>{parms.category}</div>;
};

export default CategoryProduct;
