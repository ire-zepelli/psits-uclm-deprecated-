import express from "express";
import * as authController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", authController.login);
router.get("/status", authController.status);

export default router;
