const express=require("express");
const app=express();
const cors=require("cors");
const fileUpload = require("express-fileupload");

require("dotenv").config();


const userRoute=require("./routes/userRoutes");
const employeeRoute=require("./routes/employeeRoutes");


const database = require("./utils/database");
const {cloudinaryConnect } = require("./utils/cloudinary");





const PORT=process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

cloudinaryConnect();
database.connect();


app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)

app.use("/api/users/",userRoute);
app.use("/api/employees",employeeRoute);


app.listen(PORT,()=>{
    console.log("app is started on port no. 4000");
})

