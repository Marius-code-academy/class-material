import dotenv from "dotenv";
import express from "express";
import router from "./router.js";

dotenv.config();

const app = express();

app.use(router);

// eslint-disable-next-line no-undef
const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
