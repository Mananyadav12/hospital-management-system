import mongoose from "mongoose";
const labTestSchema = mangoose.Schema({
    test_id:{
        type: String,
        required: true,
    },
    patient_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
      },
      doctor_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
      },
      test_name:[{
        type: String,
        required: true,
      }],
      test_date:{
        type: String,
        required: true,
      },
      report:[{
        type:String,
        required:true,
      }],
      lab_technician:{
        type:String,
        required: true,
      },

},{timestamps:true})
export const LabTest = mongoose.model("LabTest",labTestSchema)