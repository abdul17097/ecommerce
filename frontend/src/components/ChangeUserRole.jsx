import React, { useState } from "react";
import { ROLE } from "../utils/role";
import { IoMdClose } from "react-icons/io";
const ChangeUserRole = () => {
  const [role, setRole] = useState(null);
  const updateUserRole = async () => {};
  return (
    <div className="absolute backdrop-blur-sm  top-0 w-full h-full hidden justify-center items-center">
      <div className="p-4 flex flex-col gap-1 w-full max-w-sm bg-white rounded-lg shadow-lg">
        <div className="ml-auto">
          <button className="text-2xl border p-1 rounded-lg hover:scale-105 shadow">
            <IoMdClose />
          </button>
        </div>
        <h1 className="font-bold pb-4 text-xl">Change User Role</h1>
        <p className="">Name: Abdul Musavir</p>
        <p className="">Email: abdul@gmail.com</p>
        <div className="flex justify-between items-center my-3">
          <p className="">Role</p>
          <select
            name=""
            id=""
            className="w-[6rem]  p-1 rounded border shadow-lg capitalize focus:outline-none "
            onChange={(e) => setRole(e.target.value)}
          >
            {Object.values(ROLE)?.map((role, index) => (
              <option
                className="capitalize p-1 rounded-lg focus:outline-none"
                key={index}
                value={role}
              >
                {role}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={updateUserRole}
          className="border w-fit m-auto rounded-3xl bg-red-500 shadow-lg hover:bg-red-600 text-white py-2 transition-all duration-100 ease-in px-5"
        >
          Change Role
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
