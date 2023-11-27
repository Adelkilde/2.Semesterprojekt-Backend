// news.js
import express from "express";
import News from "../models/news.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const news = await News.findAll();
    res.json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
