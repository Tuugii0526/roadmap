import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    const mongo_url = process.env.MONGO_URL!;
    await mongoose.connect(mongo_url);
  } catch (error) {
    console.log("connection unsuccessful");
  }
};
