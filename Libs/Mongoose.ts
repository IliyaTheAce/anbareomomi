import mongoose from "mongoose";

let isConnected = false;

export const ConnectToDataBase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL)
    return console.error("No environment mongo db connection url.");
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log("Connected successfully");
  } catch (error: any) {
    console.error("Could not connect to mongo db", error.message);
  }
};
