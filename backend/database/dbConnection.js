import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error; 
  }
};
