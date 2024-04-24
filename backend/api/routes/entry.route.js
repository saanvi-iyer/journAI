import { Router } from "express";
import { createEntry } from "../controller/entryController.js";
const router = Router();

router.post("/create", createEntry);

export default router;

