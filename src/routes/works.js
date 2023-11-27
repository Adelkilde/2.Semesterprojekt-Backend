import express from "express";
import Work from "../models/works.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const works = await Work.findAll();
    res.json(works);
  } catch (error) {
    console.error("Error fetching works:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
