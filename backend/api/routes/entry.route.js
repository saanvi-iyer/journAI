import { Router } from "express";
import {
  createEntry,
  getAllEntries,
  getStarredEntries,
  updateEntry,
  getEntryByDate,
  deleteEntry ,
  getEntryById
} from "../controller/entryController.js";
const router = Router();

router.post("/create", createEntry);
router.get("", getAllEntries);
router.get("/starred", getStarredEntries);
router.put("/update/:id", updateEntry);
router.get("/date/:date", getEntryByDate);
router.delete("/delete/:id", deleteEntry);
router.get("/:id", getEntryById);

export default router;
