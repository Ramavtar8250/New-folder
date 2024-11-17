import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

  const user=localStorage.getItem("admin");

  return (
    <div className="flex justify-between ">
      <div className="flex justify-evenly gap-20">
        <Link to="/dashboard" className="bg-slate-700 px-4 py-2 rounded-lg">Home</Link>
        <Link to="/employee-list" className="bg-slate-700 px-4 py-2 rounded-lg">Employee List</Link>
      </div>
      <div className="flex justify-evenly gap-20">
        <div className=" py-2 rounded-lg">Admin</div>
        <div className="bg-slate-700 px-4 py-2 rounded-lg">Logout</div>
      </div>
    </div>
  );
};

export default Navbar;
