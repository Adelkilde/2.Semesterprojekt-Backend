import express from "express";
import Work from "../models/works.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("GET-ruten blev ramt");
    const works = await Work.findAll();
    console.log("Data fra databasen:", works);
    res.json(works);
  } catch (error) {
    console.error("Fejl ved hentning af forfattere:", error);
    res.status(500).send("Der opstod en fejl ved hentning af forfattere.");
  }
});

export default router;
