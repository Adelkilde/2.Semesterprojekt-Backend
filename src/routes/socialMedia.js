import express from "express";
import SocialMedia from "../models/socialMedia.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findAll();
    res.json(socialMedia);
  } catch (error) {
    console.error("Error fetching social media:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
