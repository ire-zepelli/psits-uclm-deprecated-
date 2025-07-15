import express from "express";
import * as postController from "../controllers/post.controller.js";
import { authorizeAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export default router;
