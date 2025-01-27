import express from "express";
import userRouter from "./userRouter.js";
import postRouter from "./postsRouter.js";

const mainRouter = express.Router();

mainRouter.use(userRouter);
mainRouter.use(postRouter);

export default mainRouter;
