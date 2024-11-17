import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { apiConnector } from "../services/apiconnector";
import { loginUrl } from "../services/apis";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate=useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    const loading = toast.loading("Loading");
    try {
      const res=await apiConnector("POST",loginUrl,formData)
      localStorage.setItem("admin", JSON.stringify(res?.data?.user));
      toast.success(res.data.message);
      navigate("/dashboard");

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    toast.dismiss(loading);
  };

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

        <div className="flex gap-4  items-center justify-center mt-10">
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
        <button className=" w-full bg-slate-500 px-8 py-4 rounded-lg hover:bg-slate-600 mt-10 font-bold text-lg">
          Submit
        </button>
      </form>
      <p className="text-lg mt-5">
        if you don't have an account then{" "}
        <Link className="text-pink-700" to="/signup">
          Click here
        </Link>
      </p>
    </div>
  );
};

export default Login;
