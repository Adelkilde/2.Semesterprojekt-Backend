import express from "express";
import cors from "cors";
import fs from "fs/promises";
import dbConnection from "./database.js";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("Bingus bongus, we're running on plonkus 🍔");
});

app.get("/", (req, res) => {
  res.send("Semesterprojekt Database API");
});
