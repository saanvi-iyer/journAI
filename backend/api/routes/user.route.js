import { Router } from "express";
import { createUser, login, home } from "../controller/userController.js";
const router = Router();

router.post("/signup", createUser);
router.post("/login", login);
router.get("/home", home);

export default router;
