import React from "react";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate=useNavigate();
  return (
    <div className="w-screen h-screen">
      <div className="flex items-center justify-center gap-5">
        <button className="bg-slate-500 px-7 py-4 rounded-lg hover:bg-slate-600" onClick={()=>{navigate("/login")}}>Log in</button>
        <button className="bg-slate-500 px-7 py-4 rounded-lg hover:bg-slate-600">Sign Up</button>
      </div>
    </div>
  );
};

export default Home;
