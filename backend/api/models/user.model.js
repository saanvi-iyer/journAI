import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter Name!"],
    },
    password: {
      type: String,
      required: [true, "Enter Password!"],
    },
    email: {
      type: String,
      required: [true, "Enter Email ID!"],
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);
export default user;
