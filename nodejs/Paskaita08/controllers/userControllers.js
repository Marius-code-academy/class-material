import UserModel from "../models/UserModel.js";
import PostModel from "../models/PostModel.js";
import mongoose from "mongoose";

export async function createNewUser(req, res) {
  const { email, password } = req.body;

  const newUser = new UserModel({
    email,
    password,
  });

  const userResponse = await newUser.save();

  res.json(userResponse);
}

export async function getAllUsers(req, res) {
  const users = await UserModel.find();

  res.json(users);
}

export async function getAllUsersPosts(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user id" });
  }

  try {
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }

  try {
    const posts = await PostModel.find({ userId: id });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
