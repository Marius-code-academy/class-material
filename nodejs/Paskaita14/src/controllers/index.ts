import { Request, Response } from "express";
import ItemModel, { ItemDocument } from "../models/ItemModel";
import mongoose from "mongoose";

type PostItemBody = {
  name: string;
  price: number;
};

type PostItemParams = {
  id: string;
};

type PostItemResponse = {
  _id: mongoose.Types.ObjectId;
  name: string;
  price: number;
};

type PostItemErrorResponse = {
  message: string;
};

export async function postItem(req: Request<PostItemParams, {}, PostItemBody>, res: Response<PostItemResponse[] | PostItemErrorResponse>) {
  try {
    const items = await ItemModel.find<PostItemResponse>();

    res.json(items);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error happened" });
    }
  }
}
