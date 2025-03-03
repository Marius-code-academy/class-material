import express from "express";
import router from "./routes/userRouter.js";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log(`Server running on PORT 3000`));
