import React, { useState } from "react";
import toast from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import { apiConnector } from "../services/apiconnector";
import { signupUrl } from "../services/apis";

const Signup = () => {

  const [formData,setFormData]=useState({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:""
  })

  const navigate=useNavigate();

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const submitHandler=async(e)=>{
    e.preventDefault();
    const loading = toast.loading("Loading...");
    try {
        const res=await apiConnector("POST",signupUrl,formData);
        toast.success(res.data.message);
        navigate('/login')
    } catch (error) {
        console.log(error);
      toast.error(error.response.data.message);
    }
    toast.dismiss(loading);
  }

  return (
    <div className="flex flex-col items-center border border-gray-600 pb-4">
      <div className="text-2xl  p-4">
        Welcome to the{" "}
        <span>
          {" "}
          <img
            width="200px"
            className=" inline"
            src="https://www.whitefield.com.au/wp-content/themes/whitefield-bootstrap/images/logo.png"
            alt=""
          />
        </span>{" "}
        Login page
      </div>

      <form onSubmit={submitHandler}>

        <div className="flex gap-4 mt-4 items-center justify-center">
          <label htmlFor="fullname" className="text-2xl">
            Fullname :
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter your email"
            onChange={changeHandler}
            value={formData.fullname}

          />
        </div>

        <div className="flex gap-4 mt-4 items-center justify-center">
          <label htmlFor="username" className="text-2xl">
            Username :
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter your email"
            onChange={changeHandler}
            value={formData.username}

          />
        </div>

        <div className="flex gap-4  items-center justify-center mt-4">
          <label htmlFor="username" className="text-2xl">
            Password : 
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter your password"
            onChange={changeHandler}
            value={formData.password}
          />
        </div>
        <div className="flex gap-4  items-center justify-center mt-4">
          <label htmlFor="confirmPassword" className="text-2xl">
            Confirm Password : 
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter confirm password"
            onChange={changeHandler}
            value={formData.confirmPassword}
          />
        </div>
        <button className=" w-full bg-slate-500 px-8 py-4 rounded-lg hover:bg-slate-600 mt-10 font-bold text-lg">Submit</button>
      </form>
      <p className="text-lg mt-5">if you have an account then <Link className="text-pink-700" to="/signup">Click here</Link></p>
    </div>
  );
};

export default Signup;
