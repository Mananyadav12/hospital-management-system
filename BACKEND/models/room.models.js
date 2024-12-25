import mongoose from 'mongoose'

const roomSchema=mongoose.Schema({
    room_id:{
        type:String,
        required:true,
    },
    room_type:{
        type:String,
        enum:["GENERAL","PRIVATE","ICU","NICU","SEMI-PRIVATE"],
        required:true,
    },
    availability_status:{
        type:String,
        enum:["AVAILABLE","UNAVAILABLE"],
        required:true,
    },
    patient_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
},
{timestamps:true})
export const Room = mongoose.model("Room",roomSchema)