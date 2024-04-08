import React, { useState } from "react";
import signin from "../assest/signin.gif";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const Login = () => {
  const [eye, setEye] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="w-full flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-sm p-5 mx-2 gap-3 bg-white rounded-lg border shadow-lg"
      >
        <div className="m-auto">
          <img src={signin} alt="" className="rounded-full w-16 h-16" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email:</label>
          <input
            type="text"
            onChange={handleChange}
            value={data.email}
            name="email"
            className="bg-slate-100 p-2 rounded focus:outline-none"
            placeholder="enter email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Password:</label>
          <div className="flex justify-between bg-slate-100 p-2 rounded items-center">
            <input
              onChange={handleChange}
              value={data.password}
              name="password"
              type={eye ? "text" : "password"}
              className=" w-full bg-transparent focus:outline-none"
              placeholder="enter password"
            />
            <span className="cursor-pointer">
              {eye ? (
                <FaEyeSlash
                  className="text-xl text-slate-500"
                  onClick={() => setEye(!eye)}
                />
              ) : (
                <MdOutlineRemoveRedEye
                  className="text-xl text-slate-500"
                  onClick={() => setEye(!eye)}
                />
              )}
            </span>
          </div>
          <Link
            to="/forgot-password"
            className="flex justify-end text-red-600 hover:text-red-700 cursor-pointer hover:underline"
          >
            Forgot Password ?
          </Link>
        </div>
        <div className="m-auto my-4">
          <Button text="Login" />
        </div>
        <p className="">
          Don't have account?{" "}
          {
            <Link
              to="/sign-up"
              className="text-red-500 hover:text-red-700 hover:underline"
            >
              Sign up
            </Link>
          }
        </p>
      </form>
    </div>
  );
};

export default Login;
