import { Router } from "express";
import { createUser } from "../controller/userController.js";
const router = Router();

router.post("/signup", createUser);
export default router;
