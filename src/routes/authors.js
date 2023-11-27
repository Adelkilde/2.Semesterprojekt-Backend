// authors.js
import express from "express";
import Author from "../models/authors.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
    console.log("Getting authors");
  } catch (error) {
    console.error("Error fetching authors:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
