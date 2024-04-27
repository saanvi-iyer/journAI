import { Router } from "express";
import {
  createEntry,
  getAllEntries,
  getStarredEntries,
  updateEntry,
  getEntryByDate,
  deleteEntry,
  getEntryById,
} from "../controllers/entryController.js";

import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.post("/create", verifyToken, createEntry);
router.get("", verifyToken, getAllEntries);
router.get("/starred", verifyToken, getStarredEntries);
router.put("/update/:id", verifyToken, updateEntry);
router.get("/date/:date", verifyToken, getEntryByDate);
router.delete("/delete/:id", verifyToken, deleteEntry);
router.get("/:id", verifyToken, getEntryById);

export default router;
