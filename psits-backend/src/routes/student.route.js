import express from "express";
import * as studentController from "../controllers/student.controller.js";
import { authorizeAdmin } from "../middleware/auth.js";

const router = express.Router();

// router.use(authorizeAdmin);

router.get("/", studentController.getStudents);
router.post("/", studentController.createStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);
router.get("/search/:q", studentController.searchStudent);

export default router;
