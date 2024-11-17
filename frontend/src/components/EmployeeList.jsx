import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { apiConnector } from "../services/apiconnector";
import toast from "react-hot-toast";
import { getAllEmployee } from "../services/apis";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);
  const navigate=useNavigate();

  const fetchData = async () => {
    const loading = toast.loading("Loading");

    try {
      const { data } = await apiConnector("GET", getAllEmployee);
      console.log(data.allEmployee);
      setEmployee(data.allEmployee); // Ensure property name matches API response
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      toast.dismiss(loading);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-xl font-bold text-center">Employee List</div>
      <table className="border border-yellow-50 w-full">
        <thead>
          <tr className="border border-yellow-100">
            <th className="border border-yellow-100 px-4 py-2">Unique Id</th>
            <th className="border border-yellow-100 px-4 py-2">Image</th>
            <th className="border border-yellow-100 px-4 py-2">Name</th>
            <th className="border border-yellow-100 px-4 py-2">Email</th>
            <th className="border border-yellow-100 px-4 py-2">Mobile</th>
            <th className="border border-yellow-100 px-4 py-2">Designation</th>
            <th className="border border-yellow-100 px-4 py-2">Gender</th>
            <th className="border border-yellow-100 px-4 py-2">Course</th>
            <th className="border border-yellow-100 px-4 py-2">Create Date</th>
            <th className="border border-yellow-100 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((e) => (
            <tr key={e._id} className="border border-yellow-100">
              <td className="border border-yellow-100 px-4 py-2">{e._id}</td>
              <td className="border border-yellow-100 px-4 py-2">
                <img src={e.image} alt={e.name} className="h-12 w-12 object-cover" />
              </td>
              <td className="border border-yellow-100 px-4 py-2">{e.name}</td>
              <td className="border border-yellow-100 px-4 py-2">{e.email}</td>
              <td className="border border-yellow-100 px-4 py-2">{e.mobile}</td>
              <td className="border border-yellow-100 px-4 py-2">{e.designation}</td>
              <td className="border border-yellow-100 px-4 py-2">{e.gender}</td>
              <td className="border border-yellow-100 px-4 py-2">{e.course}</td>
              <td className="border border-yellow-100 px-4 py-2">{e.createdAt.slice(0,10)}</td>
              <td className="border border-yellow-100 px-4 flex gap-2 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={()=>navigate(`update-employee/${e._id}`,{replace:true})}>
                  Edit
                </button>
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
