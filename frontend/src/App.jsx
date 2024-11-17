import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <div className=" w-96">
        <Link to="/">
          <img
            src="https://www.whitefield.com.au/wp-content/themes/whitefield-bootstrap/images/logo.png"
            alt=""
          />
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/employee-list" element={<EmployeeList/>} />
        <Route path="/add-employee" element={<AddEmployee/>}/>
        <Route path="/employee-list/update-employee/:id" element={<UpdateEmployee/>}/>
      </Routes>
    </div>
  );
}

export default App;
