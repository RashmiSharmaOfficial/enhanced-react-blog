const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

dotenv.config();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, { // MongoDB connection URL
    useNewUrlParser: true,  // Tool used to parse MongoDB connection strings
    useUnifiedTopology: true // Use the new server discovery and monitoring engine
    // Removed useCreateIndex and useFindAndModify options
  })
  .then(() => console.log("Connected to MongoDB")) // Log message on successful connection
  .catch((err) => console.log(err)); // Log error if the connection fails


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//middleware function added with use() for all routes and verbs
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5001", () => {
  console.log("Backend is running on port 5001");
});