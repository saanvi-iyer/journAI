import { Router } from "express";
import { createUser, login, home } from "../controllers/userController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.post("/signup", createUser);
router.post("/login", login);
router.get("/home", verifyToken, home);

export default router;
