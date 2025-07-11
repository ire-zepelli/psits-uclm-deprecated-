import express from "express";
import * as studentController from "../controllers/student.controller.js";

const router = express.Router();

router.get("/", studentController.getStudents);
router.post("/", studentController.createStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);
router.get("/search", studentController.searchStudent);

export default router;
