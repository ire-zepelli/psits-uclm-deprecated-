import express from "express";
import * as eventController from "../controllers/event.controller.js";
import { authorizeAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", authorizeAdmin, eventController.getEvents);
router.get("/recent", authorizeAdmin, eventController.getRecentEvents);
router.post("/", authorizeAdmin, eventController.createEvent);
router.put("/:id", authorizeAdmin, eventController.updateEvent);
router.delete("/:id", authorizeAdmin, eventController.deleteEvent);

export default router;
