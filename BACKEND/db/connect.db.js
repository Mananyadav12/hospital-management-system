import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DB_url = process.env.MONGODB_URI

const connectTodb = async()=>{
    try {
    const databaseInstance = await mongoose.connect(`${DB_url}`)
    console.log(`Database is connected ${databaseInstance.connection.host}`); 
    } catch (error) {
        console.log(`Sorry! Database is not connected ${error}`);
        process.exit(1);
    }
}

export default connectTodb;