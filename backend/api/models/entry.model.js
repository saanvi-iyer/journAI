import mongoose from "mongoose";

const entrySchema = mongoose.Schema(
  {
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
