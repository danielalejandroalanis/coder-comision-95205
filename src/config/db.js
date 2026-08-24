import mongoose from "mongoose";
import config from "./env.config.js";

export async function connectDB() {
  await mongoose.connect(config.dataBaseUrl);
  console.log("MongoDB conectado");
}