import mongoose from 'mongoose'

const staffSchema = mongoose.Schema({
    staff_id:{
        type:String,
        required:true,

    },
    name:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["NURSE","ADMIN","TECHNICIAN"],
        required:true,
    },
},
{timestamps:true})
export const Staff = mongoose.model("Staff",staffSchema)