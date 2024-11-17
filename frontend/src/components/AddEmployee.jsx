import React, { useState } from "react";

import { Link } from "react-router-dom";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
    image: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center border border-gray-600 pb-4">
      <div className="text-2xl  p-4">
        Add Employee for{" "}
        <span>
          {" "}
          <img
            width="200px"
            className=" inline"
            src="https://www.whitefield.com.au/wp-content/themes/whitefield-bootstrap/images/logo.png"
            alt=""
          />
        </span>{" "}
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-4 mt-4 items-center justify-center">
          <label htmlFor="name" className="text-2xl">
            Name :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter your email"
            onChange={changeHandler}
            value={formData.name}
          />
        </div>

        <div className="flex gap-4  items-center justify-center mt-10">
          <label htmlFor="email" className="text-2xl">
            Email :
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter your password"
            onChange={changeHandler}
            value={formData.email}
          />
        </div>

        <div className="flex gap-4  items-center justify-center mt-10">
          <label htmlFor="mobile" className="text-2xl">
            Mobile No. :
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter your password"
            onChange={changeHandler}
            value={formData.mobile}
          />
        </div>

        <div className="flex gap-4  items-center justify-center mt-10">
          <label htmlFor="designation" className="text-2xl">
            Designation :
          </label>
          <input
            type="text"
            name="designation"
            id="designation"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter your password"
            onChange={changeHandler}
            value={formData.designation}
          />
        </div>

        <div>
          <label htmlFor="gender" className="text-2xl">
            Gender :
          </label>

          <label htmlFor="">
            Male <input type="radio" name="gender" id="gender" />
          </label>
          <label htmlFor="">
            Female <input type="radio" name="gender" id="gender" />
          </label>
          <label htmlFor="">
            Others <input type="radio" name="gender" id="gender" />
          </label>
        </div>



        <div className="flex gap-4  items-center justify-center mt-10">
          <label htmlFor="image" className="text-2xl">
            Image :
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="bg-white p-3 rounded-lg text-slate-800"
            placeholder="Enter your password"
            onChange={changeHandler}
            value={formData.image}
          />
        </div>

        <button className=" w-full bg-slate-500 px-8 py-4 rounded-lg hover:bg-slate-600 mt-10 font-bold text-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
