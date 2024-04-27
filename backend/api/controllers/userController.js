import user from "../models/user.model.js";
import entry from "../models/entry.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const newUser = new user({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    newUser.save();
    res.status(200).json({
      message: "User created successfully",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
      error: error,
    });
  }
};

export const login = async (req, res) => {
  const userData = await user.findOne({
    email: req.body.email,
  });
  if (userData) {
    const valid = await bcrypt.compare(req.body.password, userData.password);
    if (valid) {
      res.status(200).json({
        message: "Login successful!",
        data: {
          _id: userData._id,
          access_token: generateToken(userData),
        },
      });
    } else {
      res.status(400).json({
        message: "Invalid password",
      });
    }
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
};

export const home = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const userId = jwt.decode(token)._id;
    const userData = await user.findOne({ _id: userId });

    if (!userData) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const latestEntry = await entry
      .findOne({ user_id: userId })
      .sort({ createdAt: -1 })
      .limit(1);

    res.status(200).json({
      name: userData.name,
      email: userData.email,
      entry: latestEntry,
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
      error: error.message,
    });
  }
};
