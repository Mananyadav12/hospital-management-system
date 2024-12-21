import mongoose from 'mongoose'

const patientSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    patient_id:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    gender:{
        type: String,
        enum:["Male", "Female", "Others"],
        required: true,
    },
    contact_info:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true
    },
    medical_history:{
        type: String,
    }

}, {timestamps: true})

export const Patient = mongoose.model("Patient", patientSchema)