import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/ping", (req, res) => {
  res.status(200).json({
    status: true,
    message: "pong",
  });
});

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  try {
    const response = await mongoose.connect(uri);
    console.log("connected to database");
  } catch (error) {
    console.log("error connecting to database" + error);
  }
};

connectDB();
app.listen(3000, () => {
  console.log("server is running");
});
