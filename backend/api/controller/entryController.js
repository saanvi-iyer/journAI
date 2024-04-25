import entry from "../models/entry.model.js";
import jwt from "jsonwebtoken";

export const createEntry = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const userId = await jwt.verify(token, process.env.JWT_SECRET)._id;
    const newEntry = new entry({
      id: userId,
      title: req.body.title,
      description: req.body.description,
      is_starred: req.body.is_starred,
      emotion_tags: req.body.emotion_tags,
    });
    await newEntry.save();
    res.status(200).json({
      message: "Entry created successfully",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
      error: error,
    });
  }
};

export const getAllEntries = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const userId = await jwt.verify(token, process.env.JWT_SECRET)._id;
    const entries = await entry.find({ id: userId });

    res.status(200).json({
      message: "Entries retrieved successfully",
      data: entries,
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
      error: error,
    });
  }
};

export const getStarredEntries = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const userId = await jwt.verify(token, process.env.JWT_SECRET)._id;
    const entries = await entry.find({ id: userId, is_starred: true });
    res.status(200).json({
      message: "Entries retrieved successfully",
      data: entries,
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
      error: error,
    });
  }
};

export const updateEntry = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const userId = await jwt.verify(token, process.env.JWT_SECRET)._id;
    const paramId = req.params.id;
    const entries = await entry.findByIdAndUpdate(
      { _id: paramId, id: userId },
      req.body
    );
    res.status(200).json({
      message: "Entries Updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
      error: error,
    });
  }
};

export const getEntryByDate = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const userId = await jwt.verify(token, process.env.JWT_SECRET)._id;
    const entries = await entry.find({ id: userId });
    const newEntry = [];
    const date = req.params.date;

    const dates = entries.map((entry) => {
      if (entry.createdAt.toISOString().slice(0, 10) === date && entry.id==userId) {
        newEntry.push(entry)
      }
    });

    res.status(200).json({
      message: "Entries retrieved successfully",
      data: newEntry,
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
      error: error,
    });
  }
};
