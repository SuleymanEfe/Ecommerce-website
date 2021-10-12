import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./Routers/productRouter.js";
import userRouter from "./Routers/userRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  // eslint-disable-next-line no-undef
  process.env.MONGODB_URL || "mongodb://localhost:27017/ecommerce",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready.");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// eslint-disable-next-line no-undef
const port = process.env.port || "5000";
app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
