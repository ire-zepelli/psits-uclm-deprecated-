import express from "express";
import * as eventController from "../controllers/event.controller.js";

const router = express.Router();

router.get("/", eventController.getEvents);
router.post("/", eventController.createEvent);
router.put("/:id", eventController.updateEvent);
router.delete("/:id", eventController.deleteEvent);

export default router;
