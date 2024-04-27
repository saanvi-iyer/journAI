import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import user from "./api/routes/user.route.js";
import entry from "./api/routes/entry.route.js";
import cors from "cors";

//Load env Variables
dotenv.config();

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Route to test if backend is up
app.get("/ping", (req, res) => {
  res.status(200).json({
    status: true,
    message: "pong",
  });
});

//Function to Connect to MongoDB
const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  try {
    const response = await mongoose.connect(uri);
    console.log("connected to database");
  } catch (error) {
    console.log("error connecting to database" + error);
  }
};

//Connect Database
await connectDB();

//Backend runs on Port 3000
app.listen(3000, () => {
  console.log("server is running");
});

//Routers
app.use("/api/auth", user);
app.use("/api/entry", entry);
