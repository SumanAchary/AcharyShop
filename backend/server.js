import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/products.js";
import colors from 'colors'

dotenv.config();
connectDB()
const app = express()

app.get("/", (req, res) => {
    res.send("API is runnng");
});
app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/product/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Sever running on ${process.env.NODE_ENV} mode on port ${PORT}`)
);
