import express from "express";
import data from "./data.js";

const app = express();

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

app.get("/", (req, res) => {
  res.send("Server is ready.");
});

// eslint-disable-next-line no-undef
const port = process.env.port || "5000";
app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
