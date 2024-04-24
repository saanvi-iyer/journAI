import entry from "../models/entry.model.js";

export const createEntry = async (req, res) => {
  try {
    const newEntry = new entry({
      title: req.body.title,
      description: req.body.description,
      is_starred: req.body.is_starred,
      emotion_tags: req.body.emotion_tags,
    });
    newEntry.save();
    res.status(200).json({
      message: "Entry created successfully",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
    });
  }
};

