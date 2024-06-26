import mongoose from "mongoose";

const entrySchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, "Provide an ID!"],
    },
    date: {
      type: String,
      required: [true, "Provide a Date!"],
    },
    title: {
      type: String,
      required: [true, "Add Title!"],
    },
    emotion_tags: {
      type: [String],
      required: false,
    },
    description: {
      type: String,
      required: [true, "Add Description!"],
    },
    is_starred: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const entry = mongoose.model("entry", entrySchema);
export default entry;
