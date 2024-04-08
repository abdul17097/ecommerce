import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, color, link, p }) => {
  return link ? (
    <Link
      to="/login"
      className="bg-red-500 px-4 py-1 flex items-center rounded-full text-white hover:bg-red-600 focus:outline-none"
    >
      {text}
    </Link>
  ) : (
    <button className="bg-red-500 px-12 hover:scale-110 transition-all duration-100 py-2 flex items-center rounded-full text-white hover:bg-red-600 focus:outline-none">
      {text}
    </button>
  );
};

export default Button;
