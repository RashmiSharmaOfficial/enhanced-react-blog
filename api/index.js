// Import statements
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import cors from "cors";
import { connectDB } from "./config/db.js";

// Import routes
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/users.routes.js";
import postRoute from "./routes/posts.routes.js";
import categoryRoute from "./routes/categories.routes.js";
import { uploadMiddleware } from "./middleware/uploadMiddleware.js";

// Initialize express app
const app = express();

// Configure environment variables
dotenv.config();

// Enable CORS for specific origin
app.use(cors({ origin: 'http://localhost:5173' }));

// Middleware to parse JSON and serve static images
app.use(express.json());
app.use("/images", express.static(path.join(path.resolve(), "uploads/images")));

// Database Connection
connectDB();

// File Upload Route
app.post("/api/upload", uploadMiddleware.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// Start server on port 5001
app.listen(5001, () => {
  console.log("Backend is running on port 5001");
});
