import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


export const dbConnection = () => {
  // console.log(process.env.MONGO_URI);
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
