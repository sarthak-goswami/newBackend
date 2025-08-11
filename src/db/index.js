import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    } catch (error) {
        console.log("mongo db connection error : ",error);
        process.exit(1);
    }
}