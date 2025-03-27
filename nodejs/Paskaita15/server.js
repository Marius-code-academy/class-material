import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "userAuth" })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
