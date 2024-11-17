const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false, // Assuming it's optional; change to true if required
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    designation: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    course: {
      type: String,
      required: true,
    },
    isActive: {
        type:Boolean,
        default: true
    }
  },
  { timestamps: true }
);

// Create and export the model
module.exports  = mongoose.model("Employee", employeeSchema);

