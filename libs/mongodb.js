import mongoose from "mongoose";


const connectMongoDB = async () => {
    try {
       
        const uri = process.env.MONGODB_URI;
        
        await mongoose.connect(uri);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};

export default connectMongoDB; 