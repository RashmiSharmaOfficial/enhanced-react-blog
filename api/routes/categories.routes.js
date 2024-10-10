import express from "express";
import { createCategory, getCategories } from "../controllers/categories.controller.js";

const router = express.Router();

// Route to create a new category
router.post("/", createCategory);

// Route to get all categories
router.get("/", getCategories);

export default router;
