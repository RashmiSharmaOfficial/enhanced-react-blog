import { User } from "../models/User.js";
import { Post } from "../models/Post.js";
import bcrypt from "bcrypt";

// UPDATE USER
export const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body }, // Update fields based on the request body
                { new: true } // To return the updated document
            );
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("You can update only your account!");
    }
};

// DELETE USER
export const deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            if (user) {
                try {
                    await Post.deleteMany({ username: user.username });
                    await User.findByIdAndDelete(req.params.id);
                    res.status(200).json("User has been deleted...");
                } catch (err) {
                    res.status(500).json(err);
                }
            } else {
                res.status(404).json("User not found!");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("You can delete only your account!");
    }
};

// GET USER
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            const { password, ...others } = user._doc; // Exclude the password field
            res.status(200).json(others);
        } else {
            res.status(404).json("User not found!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
