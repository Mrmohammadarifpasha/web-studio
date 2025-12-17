import express from "express";
import { getProfile } from "../controllers/user.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profile", authenticateToken, getProfile);

export default router;

