import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiConnector } from "../services/apiconnector";
import { getEmpById, updateEmployee } from "../services/apis";
import toast from "react-hot-toast";

const UpdateEmployee = () => {
  const { id } = useParams(); // Extract employee ID from the route
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
    image: null, // Set image to null initially
  });

  // Fetch Employee Data by ID
  const fetchData = async () => {
    const loading=toast.loading("Loading...");

    try {
      // Check API response structure
      console.log("Fetching employee data...");
      const res = await apiConnector("POST", getEmpById, { id }); // Pass 'id' correctly
      console.log("API Response:", res);
  
      // Check if the expected data exists
      if (res.data && res.data.emp) {
        const employeeData = res.data.emp;
  
        setFormData({
          name: employeeData.name || "",
          email: employeeData.email || "",
          mobile: employeeData.mobile || "",
          designation: employeeData.designation || "",
          gender: employeeData.gender || "",
          course: employeeData.course || "",
          image: null, // File inputs are handled separately
        });
      } else {
        console.error("Employee data not found in response.");
      }
    } catch (error) {
      console.error("Error fetching employee data:", error);
      if (error.response && error.response.data) {
        console.error("API Error Message:", error.response.data.message);
      }
    }

    toast.dismiss(loading);

  };
  

  useEffect(() => {
    fetchData();
  }, []);

  // Handle Input Changes
  const changeHandler = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value, // Handle file input
    }));


  };

  // Handle Form Submission
  const submitHandler = async(e) => {
    e.preventDefault();
    const loading=toast.loading("Loading...");
    try {
      const res=await apiConnector("PUT",updateEmployee,formData);
      toast.success(res.data.message)
    } catch (error) {
      console.error("Error fetching employee data:", error);
      if (error.response && error.response.data) {
        console.error("API Error Message:", error.response.data.message);
      }
    }
    toast.dismiss(loading);
    

  };

  return (
    <div className="flex flex-col items-center border border-gray-600 pb-4">
      <div className="text-2xl p-4">
        Update Employee
        <span>
          <img
            width="200px"
            className="inline"
            src="https://www.whitefield.com.au/wp-content/themes/whitefield-bootstrap/images/logo.png"
            alt="Logo"
          />
        </span>
      </div>

      <form onSubmit={submitHandler}>
        {/* Name */}
        <div className="flex gap-4 mt-4 items-center justify-center">
          <label htmlFor="name" className="text-2xl">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter name"
            onChange={changeHandler}
            value={formData.name}
          />
        </div>

        {/* Email */}
        <div className="flex gap-4 items-center justify-center mt-10">
          <label htmlFor="email" className="text-2xl">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter email"
            onChange={changeHandler}
            value={formData.email}
          />
        </div>

        {/* Mobile */}
        <div className="flex gap-4 items-center justify-center mt-10">
          <label htmlFor="mobile" className="text-2xl">
            Mobile No.:
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter mobile number"
            onChange={changeHandler}
            value={formData.mobile}
          />
        </div>

        {/* Designation */}
        <div className="flex gap-4 items-center justify-center mt-10">
          <label htmlFor="designation" className="text-2xl">
            Designation:
          </label>
          <input
            type="text"
            name="designation"
            id="designation"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter designation"
            onChange={changeHandler}
            value={formData.designation}
          />
        </div>

        {/* Gender */}
        <div className="mt-10">
          <label htmlFor="gender" className="text-2xl">
            Gender:
          </label>
          <label>
            Male{" "}
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={changeHandler}
            />
          </label>
          <label>
            Female{" "}
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={changeHandler}
            />
          </label>
          <label>
            Others{" "}
            <input
              type="radio"
              name="gender"
              value="Others"
              checked={formData.gender === "Others"}
              onChange={changeHandler}
            />
          </label>
        </div>

        {/* Image */}
        <div className="flex gap-4 items-center justify-center mt-10">
          <label htmlFor="image" className="text-2xl">
            Image:
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="bg-white p-3 rounded-lg text-slate-800"
            onChange={changeHandler}
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-slate-500 px-8 py-4 rounded-lg hover:bg-slate-600 mt-10 font-bold text-lg">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
