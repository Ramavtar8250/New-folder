const express=require("express");
const { createEmployee, updateEmployee, getAllEmployee, getemployeeById } = require("../controller/employeeController");



const router=express.Router();

router.post("/createEmployee",createEmployee);
router.put("/updateEmployee",updateEmployee);
router.get("/getallemployee",getAllEmployee);
router.post("/findempbyid",getemployeeById);


module.exports = router