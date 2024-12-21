import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
    {
        appointment_id: String,
        required: true,
    }
)