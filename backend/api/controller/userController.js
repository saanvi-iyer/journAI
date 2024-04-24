import user from "../models/user.model.js";
import bcrypt from "bcryptjs";

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
    });
  }
};
