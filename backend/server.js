import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./Routers/userRouter.js";

const app = express();

mongoose.connect(
  // eslint-disable-next-line no-undef
  process.env.MONGODB_URL || "mongodb://localhost:27017/ecommerce",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  }
);

app.get("/api/products/", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((product) => product._id == productId);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found." });
  }
});

app.use("/api/users", userRouter);

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
