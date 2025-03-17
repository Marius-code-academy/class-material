import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
