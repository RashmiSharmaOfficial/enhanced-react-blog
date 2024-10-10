const router = require("express").Router();
const Post = require("../models/Post");
// import { Post } from "../models/Post";
// import { User } from "../models/User";
// import { uploadOnCloudinary } from "../utils/cloudinary";


//CREATE POST
router.post("/", async (req, res) => {
  //check for image
  // if (!req.file) {
  //   return res.status(400).json({ msg: 'Image file is required' });
  // }

  // Upload image to Cloudinary
  // const imageFilePath = req.file.path;
  // const cloudinaryResponse = await uploadOnCloudinary(imageFilePath);
  // const imageUrl = cloudinaryResponse ? cloudinaryResponse.secure_url : '';

  // const newPost = new Post({
  //   title: req.body.title,
  //   desc: req.body.title,
  //   username: req.body.username,
  //   photo: imageUrl,
  //   categories: req.body.categories
  // });

  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true } //to see new updated value in postman
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
//displaying single post
//http://localhost:3000/post/6106605c4c27925c18d0e7e3
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
//displaying post by some categories that's why query selector
//http://localhost:3000/?user=ayu
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;