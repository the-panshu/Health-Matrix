import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "thepanshu",
    })
    .then(() => {
      console.log("Connected to Database!");
    })
    .catch((err) => {
      console.log(`Some Error Occured Connecting Database! ${err}`);
    });
};
