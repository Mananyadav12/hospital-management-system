import mongoose from mongoose

    const billingSchema = mongoose.Schema({
        bill_id:{
            type: String,
            required:true,
        },
         patient_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
          },
          appointment_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment",
          },
          total_amount:{
            type:Number,
            required: true,
          },
          payment_method:{
            type: String,
            required:true,
            enum:["Cash","Online"],
          },
          payment_status:{
            type:String,
            required:true,
          },
          billing_date:{
            type:String,
            required:true,
          },
    },{timestamps:true})
    export const Billing = mongoose.model("Billing",billingSchema)