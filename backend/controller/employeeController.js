const Employee=require("../model/Employee");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.createEmployee=async(req,res)=>{
    try {
        const {name,email,mobile,designation,gender,course}=req.body;

        const image=req.files.image;



        if(!name ||  !email || !mobile || !designation || !gender || !course){
            return res.status(400).json({
                success:false,
                message:"All fielda are required."
            })
        }

        if(!image){
            return res.status(400).json({
                success:false,
                message:"Image fielda are required."
            })
        }

        const employee=await Employee.findOne({email});

        if(employee){
            return res.status(401).json({
                success:false,
                message:"Email already exists."
            })
        }

        const userImage = await uploadImageToCloudinary(
            image,
            process.env.FOLDER_NAME
        )

        const employeeRes=await Employee.create({
            name,
            email,
            mobile,
            designation,
            gender:gender,
            course,
            image:userImage.secure_url,
        });


        return res.status(200).json({
            success:true,
            message:"Employee Created Successfully."
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"something went wrong. Please try again."
        })
    }
}

exports.updateEmployee=async(req,res)=>{
    try {
        const {id,name,email,mobile,designation,gender,course}=req.body;


        console.log(id)

        const image=req.files.image;

        const employee= await Employee.findOne({_id:id});

        if(!employee){
            return res.status(404).json({
                success:false,
                message:"Employee not found."
            })
        }

        if(image){
            const userImage = await uploadImageToCloudinary(
                image,
                process.env.FOLDER_NAME
            )
            employee.image=userImage.secure_url;
        }

        employee.name=name;
        employee.email=email;
        employee.mobile=mobile;
        employee.designation=designation;
        employee.gender=gender;
        employee.course=course;

        const response= await employee.save();

        return res.status(200).json({
            success:true,
            message:"Employee updated successfully."
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"something went wrong. Please try again."
        })
    }
}

exports.getAllEmployee=async(req,res)=>{
    try {
        const allEmployee=await Employee.find({});
        return res.status(200).json({
           success:true,
           message:"all employee fetched successfully.",
           allEmployee 
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"something went wrong. Please try again."
        })
    }
}

exports.getemployeeById=async(req,res)=>{
    try {
        const {id}=req.body;

        if(!id){
            return res.status(400).json({
                success:false,
                message:"id are required"
            })
        }

        const emp=await Employee.findById({_id:id});

        if(!emp){
            return res.status(400).json({
                success:false,
                message:"emp not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"emd find successfully",
            emp
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"something went wrong. Please try again."
        })
    }
}