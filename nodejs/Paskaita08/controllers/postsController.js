import mongoose from "mongoose";
import PostModel from "../models/PostModel.js";
import UserModel from "../models/UserModel.js";

export async function createNewPost(req, res) {
  const { title, content, userId } = req.body;

  if (mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user id" });
  }

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }

  try {
    const newPost = new PostModel({
      title,
      content,
      userId,
    });

    const postResponse = await newPost.save();

    res.json(postResponse);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
