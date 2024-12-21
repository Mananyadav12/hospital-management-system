import mongoose from "mongoose"

const doctorSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        doctor_id:{
            type: String,
            required: true,
            unique: true
        },
        specialization:[{
            type: String,
            required: true
        }],
        contact_info:{
            type: Number,
            required: true
        },
        qualificaton:[{
            type: String,
            required: true,
        }],
        availability:{
            type: String,
            required: true
        },
    }, {
        timestamps: true
    }
)

export const Doctor = mongoose.model("Doctor", doctorSchema)