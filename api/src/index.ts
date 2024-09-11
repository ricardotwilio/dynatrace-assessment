import express, { urlencoded, json } from "express";
import ProductsRouter from "./products/products.router";

import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/ping", (req, res) => {
  res.status(200).json({ msg: "Pong" });
});

app.use("/api/products", ProductsRouter);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
