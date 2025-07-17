import express from "express";
import * as postController from "../controllers/post.controller.js";
import { authorizeAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", postController.getPosts);
router.get("/:id", postController.getPost);
router.post("/", authorizeAdmin, postController.createPost);
router.put("/:id", authorizeAdmin, postController.updatePost);
router.delete("/:id", authorizeAdmin, postController.deletePost);

export default router;
