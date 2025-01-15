import express from "express";
import router from "./routes/userRouter.js";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
