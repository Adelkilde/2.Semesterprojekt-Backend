import express from "express";
import Review from "../models/reviews.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
