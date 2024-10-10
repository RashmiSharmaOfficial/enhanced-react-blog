import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
} from "../controllers/posts.controller.js";

const router = express.Router();

// CREATE POST
router.post("/", createPost);

// UPDATE POST
router.put("/:id", updatePost);

// DELETE POST
router.delete("/:id", deletePost);

// GET POST
router.get("/:id", getPost);

// GET ALL POSTS
router.get("/", getAllPosts);

export default router;
