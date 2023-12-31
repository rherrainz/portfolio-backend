import express from "express";
import { config } from "./config.js";
import db from "./db/dbConfig.js";
import  router  from "./routes/indexRouter.js";
import compression from "compression";

const app = express();
const PORT = config.port;

const dbConnect = async () => {
  try {
    await db;
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.use("/api/", router);

app.get("/", (req, res) => {
  res.send(`<h1 style="font-family: helvetica, arial">Hello World!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
