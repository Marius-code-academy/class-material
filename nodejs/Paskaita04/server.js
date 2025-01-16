import express from "express";
import router from "./routes/index.js";

const PORT = 3000;

const app = express();

app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
