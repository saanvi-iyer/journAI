import { Router } from "express";
import { createUser, login, dashboard } from "../controller/userController.js";
const router = Router();

router.post("/signup", createUser);
router.post("/login", login);
router.get("/dashboard", dashboard);

export default router;
