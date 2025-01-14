import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
+app.get("/", (req, res) => {
  res.json({
    message: "Siunciam zinute json formatu",
  });
});

app.get("/about", (req, res) => {
  res.json({
    about: "Some about information",
    data: {
      stuff: 1,
      things: 23,
    },
  });
});

app.listen(3000, () => {
  console.log(`App is listening on PORT ${3000}`);
});
