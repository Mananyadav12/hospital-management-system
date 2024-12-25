import mongoose from 'mongoose'

const medical_recordsSchema = mongoose.Schema({
    record_id:{
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
      diagnosis:[{
        type: String,
        required:true,
      }],
        prescription:[{
            type: String,
            required: true,
        }],
        visit_date:{
            type: String,
            required: true,
        },


},{timestamps: true}
)
export const MedicalRecord = mongoose.model("MedicalRecord", medical_recordsSchema)
