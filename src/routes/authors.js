import express from "express";
import Author from "../models/authors.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("GET-ruten blev ramt");
    const authors = await Author.findAll();
    console.log("Data fra databasen:", authors);
    res.json(authors);
  } catch (error) {
    console.error("Fejl ved hentning af forfattere:", error);
    res.status(500).send("Der opstod en fejl ved hentning af forfattere.");
  }
});

export default router;
