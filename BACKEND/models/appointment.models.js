import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
  appointment_id: {
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
  appointment_date:{
    type: String,
    required: true
  },
  appointment_time:{
    type: String,
    required: true
  },
  status:{
    type: String,
    enum:["PENDING, CONFIRMED, CANCELLED"],
    required: true
  },

});
