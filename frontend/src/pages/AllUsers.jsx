import React, { useEffect, useState } from "react";
import SummaryApi from "../utils/SummaryApi";
import { CiEdit } from "react-icons/ci";
import moment from "moment";
import ChangeUserRole from "../components/ChangeUserRole";
const AllUsers = () => {
  const [users, setUsers] = useState();
  const fetchUsers = async () => {
    const response = await fetch(SummaryApi.allUsers.url, {
      method: SummaryApi.allUsers.method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUsers(data.users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <div className="w-full border relative h-full min-h-[80vh]">
      <table className="w-full userTable">
        <thead className="">
          <th>Sr.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created At</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{moment(user.updatedAt).format("l ")}</td>
              <td className="">
                <CiEdit className="text-4xl rounded-full p-1 cursor-pointer transition-all duration-100 ease-in hover:bg-green-500 hover:text-white" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ChangeUserRole />
    </div>
  );
};

export default AllUsers;
